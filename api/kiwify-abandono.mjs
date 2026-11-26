// Webhook Kiwify → Brevo (carrinho abandonado da Black November)
//
// A Kiwify chama esta URL (POST) quando alguém abandona o checkout ou compra.
// - Carrinho abandonado: o contato entra na lista "Abandono" do Brevo, e a
//   automação do Brevo dispara a sequência de 3 e-mails.
// - Compra aprovada: o contato sai da lista "Abandono" e entra em "Compradoras",
//   para a sequência parar de mandar e-mail para quem já comprou.
//
// Variáveis de ambiente (Vercel → Settings → Environment Variables):
//   BREVO_API_KEY          chave de API do Brevo (obrigatória)
//   BREVO_LIST_ABANDONO    ID numérico da lista de abandono (obrigatória)
//   BREVO_LIST_COMPRADORAS ID numérico da lista de compradoras (opcional)
//   WEBHOOK_SECRET         segredo que vai na URL: /api/kiwify-abandono?key=SEGREDO (obrigatória)
//   KIWIFY_TOKEN           token do webhook na Kiwify; se definido, confere a assinatura (opcional)
//   BLACK_DEADLINE         fim da oferta, ISO 8601 (padrão: 2026-11-30T23:59:59-03:00)

import { createHmac, timingSafeEqual } from 'node:crypto';

const BREVO = 'https://api.brevo.com/v3';
const DEFAULT_DEADLINE = '2026-11-30T23:59:59-03:00';

const json = (status, body) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { 'content-type': 'application/json' },
  });

const safeEqual = (a, b) => {
  const x = Buffer.from(String(a));
  const y = Buffer.from(String(b));
  return x.length === y.length && timingSafeEqual(x, y);
};

// A Kiwify manda os dados em formatos um pouco diferentes conforme o evento
// (compra traz "Customer", carrinho abandonado traz os campos na raiz).
// Procuramos nos dois lugares.
export function parsePayload(p) {
  const c = p.Customer || p.customer || {};
  const email = (c.email || p.email || '').trim().toLowerCase();
  const fullName = (c.full_name || c.name || p.name || p.full_name || '').trim();
  const firstName = (c.first_name || fullName.split(/\s+/)[0] || '').trim();
  const evento = String(p.webhook_event_type || p.event || '').toLowerCase();
  const status = String(p.order_status || p.status || '').toLowerCase();
  const comprou =
    evento === 'order_approved' || status === 'paid' || status === 'approved';
  return { email, firstName, comprou, evento, status };
}

async function brevo(path, method, body) {
  const res = await fetch(BREVO + path, {
    method,
    headers: {
      'api-key': process.env.BREVO_API_KEY,
      'content-type': 'application/json',
      accept: 'application/json',
    },
    body: JSON.stringify(body),
  });
  if (!res.ok && res.status !== 204) {
    const txt = await res.text();
    throw new Error(`Brevo ${method} ${path} → ${res.status}: ${txt}`);
  }
}

export async function POST(request) {
  const url = new URL(request.url);
  const env = process.env;

  if (!env.BREVO_API_KEY || !env.BREVO_LIST_ABANDONO || !env.WEBHOOK_SECRET) {
    return json(500, { ok: false, error: 'variáveis de ambiente faltando' });
  }
  if (!safeEqual(url.searchParams.get('key') || '', env.WEBHOOK_SECRET)) {
    return json(401, { ok: false, error: 'não autorizado' });
  }

  const raw = await request.text();

  // Assinatura da Kiwify: HMAC-SHA1 do corpo com o token do webhook, em ?signature=
  if (env.KIWIFY_TOKEN) {
    const sig = url.searchParams.get('signature') || '';
    const expected = createHmac('sha1', env.KIWIFY_TOKEN).update(raw).digest('hex');
    if (!safeEqual(sig, expected)) {
      return json(401, { ok: false, error: 'assinatura inválida' });
    }
  }

  let payload;
  try {
    payload = JSON.parse(raw);
  } catch {
    return json(400, { ok: false, error: 'JSON inválido' });
  }

  const { email, firstName, comprou, evento, status } = parsePayload(payload);
  if (!email || !email.includes('@')) {
    // 200 para a Kiwify não ficar reenviando um evento sem e-mail
    return json(200, { ok: true, ignorado: 'sem e-mail', evento, status });
  }

  // Reembolso e chargeback não são abandono: não entram na sequência
  if (/refund|chargeback|chargedback/.test(evento + ' ' + status)) {
    return json(200, { ok: true, ignorado: 'reembolso/chargeback', evento, status });
  }

  const listAbandono = Number(env.BREVO_LIST_ABANDONO);
  const listCompradoras = Number(env.BREVO_LIST_COMPRADORAS || 0);
  const attributes = firstName ? { FIRSTNAME: firstName } : {};

  try {
    if (comprou) {
      // Garante o contato e tira da sequência de abandono
      await brevo('/contacts', 'POST', {
        email,
        attributes,
        updateEnabled: true,
        ...(listCompradoras ? { listIds: [listCompradoras] } : {}),
      });
      await brevo(`/contacts/${encodeURIComponent(email)}`, 'PUT', {
        unlinkListIds: [listAbandono],
      });
      return json(200, { ok: true, acao: 'compradora', evento, status });
    }

    // Depois do fim da Black não faz sentido prometer R$ 197
    const deadline = Date.parse(env.BLACK_DEADLINE || DEFAULT_DEADLINE);
    if (Date.now() > deadline) {
      return json(200, { ok: true, ignorado: 'Black encerrada', evento, status });
    }

    await brevo('/contacts', 'POST', {
      email,
      attributes,
      listIds: [listAbandono],
      updateEnabled: true,
    });
    return json(200, { ok: true, acao: 'abandono', evento, status });
  } catch (err) {
    console.error(err);
    // 502 faz a Kiwify tentar de novo mais tarde
    return json(502, { ok: false, error: 'falha ao falar com o Brevo' });
  }
}

export function GET() {
  return json(200, { ok: true, info: 'webhook Kiwify → Brevo no ar' });
}

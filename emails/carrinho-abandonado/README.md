# Carrinho abandonado da Black November (Kiwify → Brevo)

Quem abandona o checkout da Black (`pay.kiwify.com.br/VEL0DzD`) recebe 3 e-mails:

| E-mail | Quando | Assunto | Texto de prévia |
|---|---|---|---|
| `email-1-1h.html` | 1h depois do abandono | Sua vaga ficou guardada aqui | Seu desconto de R$ 100 da Black continua guardado. |
| `email-2-24h.html` | 24h depois | Será que ainda tem jeito pra sua barriga? | Se te disseram que essa barriga não tem mais jeito, leia isto. |
| `email-3-48h.html` | 48h depois | Segunda, 23h59, o preço volta para R$ 297 | Último aviso: o desconto da Black acaba segunda. |

Quem compra sai da sequência na hora.

## 1. Brevo

1. Crie a conta grátis em brevo.com.
2. **Remetentes, domínios e IPs → Domínios**: autentique o domínio de envio (SPF, DKIM e DMARC no DNS). Sem isso o e-mail cai no spam.
3. **Contatos → Listas**: crie as listas `Black - Abandono` e `Black - Compradoras`. Anote o ID numérico de cada uma.
4. **Contatos → Configurações → Atributos**: confira se existe o atributo `FIRSTNAME`. Se a conta estiver com `NOME`/`PRENOME`, crie `FIRSTNAME` (texto).
5. **SMTP & API → Chaves de API**: gere uma chave.

## 2. Vercel

Em **Settings → Environment Variables** do projeto, crie e depois faça um novo deploy:

| Variável | Valor |
|---|---|
| `BREVO_API_KEY` | a chave do passo 1.5 |
| `BREVO_LIST_ABANDONO` | ID da lista `Black - Abandono` |
| `BREVO_LIST_COMPRADORAS` | ID da lista `Black - Compradoras` |
| `WEBHOOK_SECRET` | uma senha longa qualquer, inventada por vocês |
| `KIWIFY_TOKEN` | opcional: o token que a Kiwify mostra no webhook |

Teste abrindo `https://SEU-DOMINIO/api/kiwify-abandono` no navegador: deve aparecer `webhook Kiwify → Brevo no ar`.

## 3. Kiwify

**Apps → Webhooks → Criar webhook**

- URL: `https://SEU-DOMINIO/api/kiwify-abandono?key=O_WEBHOOK_SECRET`
- Produto: o da Black (checkout `VEL0DzD`)
- Eventos: **Carrinho abandonado** e **Compra aprovada**

Use o botão de teste da Kiwify e veja se o contato aparece na lista do Brevo. Os logs ficam na Vercel em **Logs**.

## 4. Automação no Brevo

**Automações → Criar automação → Fluxo personalizado**

1. Gatilho: **Contato adicionado a uma lista** → `Black - Abandono`.
2. Esperar **1 hora**.
3. Condição: contato está na lista `Black - Compradoras`? **Sim** → sair. **Não** → enviar e-mail 1.
4. Esperar **23 horas** → mesma condição → e-mail 2.
5. Esperar **24 horas** → mesma condição → e-mail 3.

Em cada e-mail: **Editor → Colar seu código HTML** e cole o arquivo. Remetente: nome "Cláudia Esquarcini", e um e-mail de resposta que alguém da equipe leia (o e-mail 1 convida a responder).

## 5. Depois da Black

O webhook para de inscrever gente sozinho depois de 30/11 às 23h59. Mas quem entrou no domingo ou na segunda ainda receberia e-mails falando em R$ 197. **Pause a automação no dia 1º de dezembro, à 0h.**

## Limite do plano grátis

300 e-mails por dia. Com 3 e-mails por pessoa, dá para cerca de 100 abandonos por dia com folga. Se passar disso, o Brevo segura os envios até o dia seguinte.

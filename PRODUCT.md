# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Mulheres brasileiras de ~40 a 65 anos (há alunas de quase 70) com diástase abdominal causada por gravidez ou ganho de peso. Já tentaram dieta, academia e abdominal sem resultado, muitas ouviram que "essa barriga não tem mais jeito", e várias acham que o problema é gordura ou genética. Chegam majoritariamente pelo celular, vindas de anúncios no Meta (Facebook/Instagram), e decidem a compra na própria página.

## Product Purpose

Página de vendas da **Comunidade Diástase Nunca Mais**, programa online de 6 meses da Cláudia Esquarcini para tratar a diástase sem cirurgia e em casa. O trabalho da página é fazer a visitante reconhecer que o problema dela tem nome (diástase), entender por que o que tentou não funcionou, confiar na Cláudia e nas alunas, e comprar via Kiwify. Sucesso = conversão em checkout (`begin_checkout`) e compra.

## Positioning

- O problema não é gordura nem falta de esforço: é diástase, e o abdominal comum piora.
- Método na ordem certa: respiração → ativação profunda → fortalecimento.
- Não é curso gravado: a Cláudia acompanha pessoalmente no WhatsApp, de segunda a sexta, por 6 meses, com exercício novo todo dia útil.
- Alternativa à abdominoplastia (R$ 15–20 mil, meses de recuperação, não fortalece a musculatura).

## Operating Context

- Fluxo: anúncio Meta → página (com VSL VTurb no hero) → autoexame dos dedos → prova social → oferta → checkout Kiwify.
- Rotina da aluna: 15–20 min por dia, em casa, sem equipamento.
- Jornada: autoexame e medidas no dia 0; Módulo Iniciante nos dias 1–7; grupo de WhatsApp com a Cláudia do dia 8 em diante; treino de corpo completo e bônus ao longo dos 6 meses.

## Capabilities and Constraints

- **Stack:** HTML/CSS/JS estático, sem build (`index.html`, `css/style.css`, `js/script.js`, `img/`). Imagens em `.webp` com fallback `.jpg`/`.png`.
- **Variante A/B ativa:** `v2/` é uma variante no ar e deve ser preservada; mudanças na raiz não se propagam automaticamente para `v2/` (e vice-versa). Observação: `v2/index.html` hoje não contém link do Kiwify.
- **Rastreamento que não pode quebrar:** Meta Pixel `1664425621411014` (PageView, ViewContent, InitiateCheckout), GA4 `G-PNTZ1658DX` (`view_item`, `begin_checkout`, `scroll_depth`), player VTurb/ConverteAI no hero e repasse de UTM para os links `pay.kiwify.com.br`. Os CTAs precisam continuar sendo `<a>` com `href` contendo `pay.kiwify.com.br`, porque é isso que os scripts usam como seletor.
- **Oferta atual:** de R$ 497 por R$ 297 ou 12x de R$ 30,90; valor total ancorado em R$ 1.292; garantia incondicional de 7 dias processada pela Kiwify. Checkout: `https://pay.kiwify.com.br/fna2soC`.
- **Entregáveis:** plataforma com 6 meses de acesso; acompanhamento no WhatsApp por 6 meses; treino com Ana Alice (10 aulas, braço e perna); bônus Desafio Barriga Firme 7 Dias, Aula de Pompoarismo e E-book Receitas Práticas para Secar.
- **Política de anúncios e saúde (Meta):** não prometer cura nem fazer alegações médicas; manter os avisos de que resultados são individuais e podem variar.

## Brand Commitments

- Nome: Comunidade Diástase Nunca Mais · Cláudia Esquarcini, "Especialista em Tratamento de Diástase Abdominal".
- Voz: português brasileiro, segunda pessoa ("você", "te disseram"), calorosa e direta, que valida a dor sem culpar a mulher ("Nenhuma dessas frases é fraqueza sua").
- CTA principal: "QUERO ELIMINAR MINHA DIÁSTASE"; CTA da garantia: "QUERO TESTAR SEM RISCO".
- Ana Alice aparece como personal trainer parceira.

## Evidence on Hand

- Fotos da Cláudia: `img/claudia_sem_fundo.*`, `img/claudia_fundo_teal.*`.
- Antes e depois reais: `img/antes-depois/antes-depois-01..07`.
- Prints de depoimentos de alunas, usados com autorização: `img/depoimentos/` (manequim 52→46, abdômen 110→96 cm, resultado com 3 aulas, aluna de 54 anos na menopausa, história da Fran, calça jeans, cintas e comentários de live).
- Afirmações já em uso: "mais de 10 mil alunas pelo mundo"; a maioria das alunas tem de 40 a 65 anos; alunas que tinham cirurgia marcada e cancelaram.
- **Não inventar:** nenhum depoimento, número, resultado, antes e depois, credencial ou selo novo. Só usar prova real fornecida pela Cláudia.

## Product Principles

1. Nomear a causa antes de vender a solução: a visitante precisa se reconhecer e entender o "porquê" antes da oferta.
2. Prova real acima de promessa: resultados vêm de alunas reais e sempre com o aviso de variação individual.
3. Acompanhamento humano é o diferencial; nunca apresentar como curso gravado.
4. Remover risco e atrito: garantia, parcelamento e acesso imediato perto de cada CTA.
5. Nenhuma mudança pode quebrar rastreamento, checkout ou a variante A/B.

## Accessibility & Inclusion

Público de 40 a 70 anos, majoritariamente no celular: texto com leitura confortável, alto contraste, alvos de toque generosos e nada de informação essencial apenas em vídeo ou imagem.

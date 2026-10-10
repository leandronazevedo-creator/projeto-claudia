---
target: escape-sem-video
total_score: 25
max_score: 36
na_heuristics: 7
p0_count: 0
p1_count: 2
target_identity: "file:/home/user/projeto-claudia/escape-sem-video/index.html"
target_fingerprint: "sha256:a11b1e38a219dfda9e62151cb42ef9344dbc739181c85b85701c96cc7b79dc69"
target_path: /home/user/projeto-claudia/escape-sem-video/index.html
timestamp: 2026-10-10T20-03-03Z
slug: escape-sem-video-index-html
---
Method: dual-agent (A: design review · B: detector + browser)

## Design Health Score: 25/36 (69%, Acceptable-high; 7 n/a)
| # | Heurística | Nota | Problema principal |
|---|---|---|---|
| 1 | Status do sistema | 3 | Trilho e FAQ claros; CTA não avisa que sai para a Kiwify |
| 2 | Mundo real | 3 | Voz certa, mas os botões falam de diástase antes de a página explicar o termo |
| 3 | Controle | 2 | Lightbox sem dialog/foco; links legais "#" |
| 4 | Consistência | 3 | No desktop todo .cta-block fica alinhado à esquerda (regra do hero vazou) |
| 5 | Prevenção de erro | 3 | Total do 12x (R$ 370,80) não aparece; R$ 1,65/dia usa o preço à vista |
| 6 | Reconhecer | 3 | "Diástase" precisa ser lembrada de #causa |
| 7 | Flexibilidade | n/a | Funil linear |
| 8 | Minimalismo | 3 | Oferta com 5 números de preço ao mesmo tempo |
| 9 | Recuperação | 2 | Sem contato antes da compra; links legais mortos |
| 10 | Ajuda | 3 | FAQ abre com escape; não diz em quanto tempo muda |

## Prioridades
- [P1] Botões "ELIMINAR MINHA DIÁSTASE" para tráfego que veio por escape (decisão anterior da usuária: manter).
- [P1] Prova e oferta abandonam o escape: 6 imagens de barriga, stack sem menção a escape.
- [P2] Âncoras de preço contraditórias (De R$ 497 x Valor total R$ 1.292) e 5 números na oferta.
- [P2] Lightbox sem role=dialog, foco não entra nem volta.
- [P2] Links legais "#" e nenhum contato antes da compra.
- [P3] Desktop: .pg-novideo .cta-block alinha à esquerda todos os CTAs, não só o do hero.

## Detector
CLI 11 (maioria falso positivo: side-tab sem overrides, contraste de título grande, lightbox sem src, cramped-padding de seção com onda). Navegador 6/7: linha ~86 caracteres no desktop, brilho do botão em fundo escuro, Inter. Medições: botão 4,6:1; CTA e garantia na 1ª tela nos dois tamanhos; barra fixa correta; 6 links Kiwify recebem as UTMs incluindo utm_term.

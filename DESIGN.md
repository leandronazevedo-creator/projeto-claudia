---
name: Diástase Nunca Mais
description: Página de vendas clara, verde e laranja, escrita para mulheres de 40 a 65 anos que leem no celular.
colors:
  orange: "#F2790F"
  orange-hover: "#D96A0C"
  orange-ink: "#B4530A"
  orange-soft: "#FFB25C"
  cta: "#BD5808"
  cta-hover: "#A84D08"
  green-deep: "#0B6458"
  green-night: "#07463D"
  footer-green: "#063B33"
  green-mid: "#158F7C"
  green-light: "#7FD9C4"
  green-pale: "#E8F5EE"
  off-white: "#F7FAF7"
  white: "#FFFFFF"
  text-dark: "#1B2B28"
  text-mid: "#4A5E5A"
typography:
  display:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif"
    fontSize: "clamp(30px, 8vw, 58px)"
    fontWeight: 900
    lineHeight: 1.12
  headline:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif"
    fontSize: "clamp(27px, 6.5vw, 44px)"
    fontWeight: 900
    lineHeight: 1.15
  hours:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif"
    fontSize: "clamp(26px, 7vw, 46px)"
    fontWeight: 900
    lineHeight: 1
    letterSpacing: "-0.03em"
    fontFeature: "tnum"
  title:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif"
    fontSize: "19px"
    fontWeight: 800
    lineHeight: 1.3
  body:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif"
    fontSize: "18px"
    fontWeight: 400
    lineHeight: 1.7
  body-sm:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif"
    fontSize: "16px"
    fontWeight: 800
    lineHeight: 1.2
    letterSpacing: "0.04em"
  caption:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: 1.6
rounded:
  md: "12px"
  lg: "20px"
  pill: "20px"
  full: "50%"
spacing:
  gutter: "14px"
  container-x: "20px"
  container-x-desktop: "40px"
  section-y: "64px"
  section-y-tablet: "88px"
  section-y-desktop: "104px"
  container-max: "1180px"
  reading-max: "760px"
components:
  button-primary:
    backgroundColor: "{colors.cta}"
    textColor: "{colors.white}"
    typography: "{typography.label}"
    rounded: "{rounded.md}"
    padding: "16px 24px"
    height: "52px"
  button-primary-hover:
    backgroundColor: "{colors.cta-hover}"
    textColor: "{colors.white}"
  sticky-cta:
    backgroundColor: "{colors.cta}"
    textColor: "{colors.white}"
    padding: "12px 20px"
    height: "48px"
  card-quote:
    backgroundColor: "{colors.white}"
    textColor: "{colors.text-dark}"
    rounded: "{rounded.md}"
    padding: "20px 22px"
  card-soft:
    backgroundColor: "{colors.off-white}"
    textColor: "{colors.text-mid}"
    rounded: "{rounded.md}"
    padding: "24px 22px"
  panel-dark:
    backgroundColor: "{colors.green-deep}"
    textColor: "{colors.white}"
    rounded: "{rounded.lg}"
    padding: "36px 24px"
  faq-item:
    backgroundColor: "{colors.white}"
    textColor: "{colors.text-dark}"
    rounded: "{rounded.md}"
    padding: "18px 20px"
  faq-item-open:
    backgroundColor: "{colors.green-pale}"
    textColor: "{colors.green-deep}"
  hours-time:
    textColor: "{colors.green-deep}"
    typography: "{typography.hours}"
  hours-time-lit:
    textColor: "{colors.orange-hover}"
---

# Design System: Diástase Nunca Mais

## Overview

**Creative North Star: "A Conversa na Cozinha Clara"**

Um mundo claro e acolhedor, de branco e verde-pálido, onde a voz é a da Cláudia falando direto com a aluna. O verde carrega identidade e estrutura: títulos, bordas, selo, a âncora escura das seções de revelação, oferta e fechamento. O laranja é a única voz de ação: botões de compra, números grandes, os horários acesos. A página alterna faixas de fundo (branco, verde-pálido, verde-profundo) separadas por ondas finas, e o leitor percorre uma coluna única e larga, sem nada competindo com o CTA.

A tipografia é uma família só, Inter, usada em contraste extremo de peso: 900 nos títulos e números, 400 no corpo, corpo nunca abaixo de 17px porque quem lê tem de 40 a 65 anos e está no celular. A densidade é baixa e o ritmo é vertical; cartões são leves, com sombra verde difusa ou borda lateral verde, nunca pesados.

A página de escape acrescentou ao mundo, sem trocar de identidade, a gramática das horas: horários grandes em numerais tabulares, presos a um trilho vertical que se enche de laranja com a rolagem. É o único dispositivo assinatura do sistema e pode ser reaproveitado sempre que o conteúdo for uma sequência no tempo.

**Key Characteristics:**
- Fundo claro (branco e verde-pálido) com uma âncora verde-profunda por trecho de página.
- Laranja reservado a ação, números e horários; verde para tudo que é estrutura.
- Inter em 900 contra 400; corpo de 18px, mínimo de 17px.
- Coluna única de leitura, CTA laranja centralizado repetido ao fim de cada bloco persuasivo.
- Gramática das horas: numerais tabulares sobre trilho que se preenche com a rolagem.

## Colors

Paleta de dois polos: verdes que estruturam e acalmam, laranjas que chamam para a ação.

### Primary
- **Laranja Ação** (orange): fundo de todo botão de compra, do CTA fixo no celular, dos números de passo e dos pontos da régua do dia. Também na barra que preenche o trilho das horas. Nunca em texto corrido.
- **Laranja Brasa** (orange-hover): hover dos botões e cor dos horários acesos no trilho (texto grande, 900). Em texto pequeno sobre claro fica abaixo de 4.5:1; para isso existe a Tinta Laranja.
- **Tinta Laranja** (orange-ink): laranja para texto pequeno e anel de foco sobre branco e verde-pálido. Introduzida na página de escape (escopo `.pg-escape`) justamente para passar contraste; é a forma correta de escrever em laranja daqui em diante.
- **Laranja Pêssego** (orange-soft): laranja sobre o verde-profundo: parcelamento, total do valor, destaques em negrito na revelação, relógio do CTA final, anel de foco nas seções escuras.

### Secondary
- **Verde Profundo** (green-deep): títulos de seção e manchete do hero sobre claro; fundo das seções de revelação/causa, do price-card e do fechamento; horários em repouso.
- **Verde Noite** (green-night): ponto final dos gradientes do price-card e da seção final.
- **Verde Rodapé** (footer-green): fundo do rodapé.
- **Verde Médio** (green-mid): bordas laterais de cartões e citações, pontos do trilho em repouso, ícones desenhados, selo de garantia.
- **Verde Menta** (green-light): acentos verdes sobre o verde-profundo (borda e autoria da citação na revelação, dias no selo).

### Neutral
- **Verde-Pálido** (green-pale): a faixa alternada de fundo; também estado aberto do FAQ.
- **Quase-Branco** (off-white): cartões sobre fundo branco.
- **Branco** (white): fundo base, cartões sobre verde-pálido, texto sobre verdes e laranja.
- **Grafite Verde** (text-dark): texto principal.
- **Cinza Verde** (text-mid): texto secundário, microcopy, legendas.

### Named Rules
**The Laranja Só Age Rule.** Laranja aparece em botões de compra, números e horários; nunca em parágrafos, nunca como fundo de seção. Verde nunca é cor de botão de compra.

**The Tinta Para Texto Rule.** Texto laranja abaixo de 24px sobre claro usa a Tinta Laranja; a Laranja Brasa só escreve em tamanho de título ou de horário.

**The Faixas Alternadas Rule.** Seções consecutivas alternam branco e verde-pálido, com no máximo uma seção verde-profunda por trecho; a transição é uma onda SVG fina (48px) cuja cor é a da seção seguinte.

## Typography

**Display Font:** Inter (com -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif)
**Body Font:** Inter (mesma pilha)

**Character:** Uma família, dois extremos. O 900 dá peso de cartaz a títulos, preços e horários; o 400 em 18px com entrelinha 1.7 deixa o corpo descansado para olhos de 40 a 65 anos.

### Hierarchy
- **Display** (900, clamp(30px, 8vw, 58px), 1.12): manchete do hero, verde-profundo; a segunda linha pode ir em laranja (Brasa na página de escape).
- **Headline** (900, clamp(27px, 6.5vw, 44px), 1.15): título de cada seção, verde-profundo sobre claro, branco sobre escuro; `text-wrap: balance` nas superfícies novas.
- **Hours** (900, clamp(26px, 7vw, 46px), 1, -0.03em, numerais tabulares): horários do trilho; a versão do relógio final vai a clamp(48px, 12vw, 88px).
- **Title** (800, 19px a clamp(19px, 3.2vw, 24px), 1.3): títulos de cartão, de momento do dia, de bloco.
- **Body** (400, 18px, 1.7): texto corrido; parágrafos longos limitados a ~52ch a 760px.
- **Body-sm** (400, 17px, 1.6): texto de cartões, FAQ, passos.
- **Label** (800, 16px, 0.04em, MAIÚSCULAS): exclusivo do texto de botão de compra e do CTA fixo.
- **Caption** (400 a 600, 13 a 15px): microcopy sob CTA, autoria de citação, aviso legal.

### Named Rules
**The Corpo 17 Rule.** Nenhum texto de leitura abaixo de 17px; 13 a 15px só para microcopy, legendas e avisos.

**The Numeral Tabular Rule.** Horários, contagens e relógios usam `font-variant-numeric: tabular-nums` em 900 com espaçamento negativo, para que a coluna de horas alinhe como um quadro de horários.

## Layout

Coluna única centralizada: container de até 1180px com respiro lateral de 20px (40px a partir de 1024px); blocos de leitura limitados a 760px a 900px. Seções abrem com `padding-top` de 64px, 88px a partir de 768px e 104px a partir de 1024px. O vão padrão entre cartões é 14px (16px no tablet). Grades começam em uma coluna no celular e abrem para 2 ou 3 colunas a partir de 768px; galerias de prints podem virar carrossel com snap horizontal no celular. No celular, um CTA laranja fixo ocupa o rodapé da tela (some a partir de 768px). Breakpoints: 768px, 1024px, 1440px.

**The Um CTA Por Bloco Rule.** Cada bloco persuasivo termina num CTA centralizado com microcopy logo abaixo; nada de dois botões lado a lado.

## Elevation & Depth

Híbrido discreto: a profundidade vem sobretudo da alternância tonal das faixas e do verde-profundo como âncora; sombras são difusas, tingidas de verde, nunca pretas nem deslocadas.

### Shadow Vocabulary
- **Sombra de cartão** (`box-shadow: 0 2px 12px rgba(11, 100, 88, 0.08)` a `0 2px 14px rgba(11, 100, 88, 0.14)`): cartões, prints, pilha de valor.
- **Sombra de mídia** (`box-shadow: 0 12px 36px rgba(11, 100, 88, 0.22)`): player da VSL, retrato da Cláudia no topo da variante sem vídeo e print em destaque.
- **Brilho do CTA** (`box-shadow: 0 4px 20px rgba(242, 121, 15, 0.35)`, hover `0 8px 28px rgba(242, 121, 15, 0.45)`): só no botão de compra.
- **Sombra do CTA fixo** (`box-shadow: 0 -4px 24px rgba(0, 0, 0, 0.25)`): barra fixa sobre o conteúdo.

### Named Rules
**The Sombra Verde Rule.** Sombras de superfície usam o verde-profundo com opacidade de 0.06 a 0.28; laranja só no brilho do botão de compra.

## Shapes

Cantos suavemente arredondados: 12px em botões, cartões, campos e prints; 20px em blocos maiores (price-card, autoexame, player, histórias). Selos e pontos são círculos; etiquetas são pílulas de 20px. A linguagem de borda recorrente é a faixa lateral de 4px em verde médio (citações, cartões de espelho, histórias); nas superfícies novas ela cede lugar a linhas finas de 1px no topo e ao trilho das horas, que é uma barra de 3px com pontas arredondadas.

## Components

### Buttons
Confiante e grande, feito para o polegar.
- **Shape:** cantos suaves (12px), altura mínima de 52px (58px na variante XL).
- **Primary:** fundo Laranja Ação, texto branco em Label (800, 16px, maiúsculas, 0.04em), padding 16px 24px; largura total até 460px no celular, largura automática a partir de 768px. Sempre um `<a>` para o checkout.
- **Laranja Botão (#BD5808, hover #A84D08):** todo texto branco sobre laranja usa este tom (botões de compra, CTA fixo, números do autoexame, selos da jornada): 4,6:1 e 5,6:1 com branco. O Laranja Ação (#F2790F) fica para pontos, trilho, bordas e números grandes sem texto branco por cima.
- **Hover / Focus:** fundo Laranja Brasa, sobe 2px, brilho laranja cresce; transição 0.2s. Foco visível com contorno de 3px em Tinta Laranja (Pêssego nas seções escuras), afastado 3px.
- **Opções do autoexame:** contorno branco translúcido de 2px sobre o verde-profundo; ativa vira laranja cheio.

### Cards / Containers
- **Corner Style:** 12px (cartões) e 20px (painéis).
- **Background:** branco sobre verde-pálido, quase-branco sobre branco, branco translúcido (6%) sobre verde-profundo.
- **Shadow Strategy:** Sombra de cartão (ver Elevation & Depth).
- **Border:** faixa lateral de 4px em verde médio nos cartões de citação; borda de 1px verde a 14% nos cartões neutros; borda superior laranja de 4px nos cartões de prova numérica.
- **Internal Padding:** 20px a 24px.

### Navigation
Não há navegação: a página é um funil linear. O CTA fixo laranja no rodapé do celular cumpre o papel de navegação persistente, entra deslizando de baixo (0.3s) e fica inerte ao teclado enquanto escondido.

### FAQ (acordeão)
Itens brancos com borda verde a 16%, 12px de raio, pergunta em 700 17px. Aberto: fundo verde-pálido, texto verde-profundo, sinal de mais desenhado em SVG girando 45°.

### Citação da Cláudia
Itálico 18px com borda lateral verde médio, autoria em 700 14px verde-profundo; sobre o verde-profundo a borda e a autoria passam a verde menta. Variante grande: centralizada, borda superior de 3px.

### Trilho das Horas (assinatura)
Uma sequência no tempo contada por horários.
- **Estrutura:** grade de duas colunas, horário à direita da coluna de horas (84px, 128px no tablet, 150px no desktop) e texto à esquerda livre; vão de 36px (48px no tablet).
- **Trilho:** barra vertical de 3px em verde médio a 22%; por cima, uma barra Laranja Ação que cresce de cima para baixo (`scaleY`) conforme a rolagem, calculada por um listener de rolagem com `requestAnimationFrame` contra uma marca a 62% da altura da janela.
- **Horários:** estilo Hours em verde-profundo; ao cruzar a marca, acendem em Laranja Brasa e o ponto de 15px (anel verde médio sobre verde-pálido) vira laranja cheio e cresce 15%, transição 0.4s `cubic-bezier(0.16, 1, 0.3, 1)`. Sem transição com `prefers-reduced-motion`.
- **Variante jornada:** o horário vira período ("Dia 0", "Dias 1 a 7") com rótulo pequeno de 13px em cinza verde embaixo, sem selos nem caixas.
- **Régua do dia (compacta):** seis horários em linha no hero, numerais 800 tabulares em verde-profundo sobre pontos laranja de 12px com anel branco, ligados por uma linha de 2px.

## Do's and Don'ts

### Do:
- **Do** usar Laranja Botão (#BD5808) no fundo de todo botão de compra e Laranja Ação (#F2790F) só em números, pontos e trilho; texto laranja pequeno sobre claro em Tinta Laranja (#B4530A).
- **Do** manter corpo em 18px com entrelinha 1.7, e nunca texto de leitura abaixo de 17px.
- **Do** alternar faixas branco / verde-pálido e separar por ondas SVG de 48px na cor da próxima seção.
- **Do** contar qualquer sequência no tempo (rotina, jornada, cronograma) com o Trilho das Horas e numerais tabulares 900.
- **Do** dar a todo link e botão um foco visível de 3px em Tinta Laranja, ou Pêssego sobre o verde-profundo.
- **Do** desenhar ícones em SVG de traço com `currentColor`.

### Don't:
- **Don't** usar verde como cor de botão de compra nem laranja como fundo de seção.
- **Don't** escrever parágrafos em laranja.
- **Don't** usar sombras pretas ou deslocadas em cartões; a sombra é verde e difusa.
- **Don't** introduzir uma segunda família tipográfica; Inter cobre título, número e corpo.
- **Don't** colocar dois CTAs lado a lado nem CTA em outra cor que não o laranja.

## Why

Fases 1 e 2 melhoraram a descoberta do site (SEO técnico e local), mas o site hoje não mede nenhuma ação do visitante: não há como saber quantas pessoas clicam em "Falar pelo WhatsApp", "Abrir no mapa", "Avaliar no Google" ou nos links de Instagram, nem comparar o desempenho antes/depois das Fases 1 e 2, nem alimentar campanhas futuras de Google Ads (Fase 6) com dados de conversão reais. Sem instrumentação de analytics, qualquer decisão futura sobre o que priorizar continua sendo palpite.

## What Changes

- Instalar o Google Analytics 4 (gtag.js) no `<head>` de `index.html`, usando um Measurement ID real de uma propriedade GA4 a ser fornecido pelo usuário (não inventado — ver `design.md` e `tasks.md` para o passo de confirmação).
- Instrumentar cliques nos links de WhatsApp (6 ocorrências: header, hero, aniversário, seção final, footer, botão flutuante) como evento de conversão `contato_whatsapp`.
- Instrumentar cliques em "Abrir no mapa" e "Avaliar no Google" (seção de localização) como evento de conversão `interacao_localizacao`.
- Instrumentar cliques nos links de Instagram (6 ocorrências) como evento `clique_instagram` (sinal de engajamento, não tratado como conversão principal).

## Capabilities

### New Capabilities
- `conversion-analytics`: define a instrumentação de analytics do site — o snippet de rastreamento instalado e quais interações do visitante são registradas como eventos, sem coletar dados pessoais além do que o GA4 já coleta por padrão.

### Modified Capabilities
(nenhuma — nenhum requisito de `landing-page`, `seo-metadata` ou `image-delivery-performance` muda; a instrumentação é aditiva e não observável na experiência do visitante)

## Impact

- `index.html`: adição do snippet `gtag.js` no `<head>`; adição de atributos `data-*` ou chamadas `gtag('event', ...)` nos links de WhatsApp, localização e Instagram já existentes.
- Nenhuma mudança de design visual, CSS, ou reestruturação de seções.
- Bloqueio conhecido: a implementação do snippet do GA4 depende de um Measurement ID real (`G-XXXXXXXXXX`) que o usuário ainda vai criar e fornecer — documentado como o primeiro item de `tasks.md`, não assumido nem inventado.
- Fora do escopo desta fase: configurar metas/conversões dentro da interface do GA4, relatórios, ou integração com Google Ads (fica para a Fase 6).

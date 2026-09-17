## Why

A auditoria de SEO/CRO do site identificou que o Spaço Sales não é rastreável de forma confiável pelo Google (sem `robots.txt`, sitemap, canonical ou dados estruturados), carrega imagens muito pesadas sem `width`/`height`/`loading="lazy"` (prejudicando Core Web Vitals), e tem um bug de conversão na galeria (o lightbox mostra apenas um texto placeholder em vez da foto clicada). Esta é a Fase 1 do roadmap de melhorias: mudanças de baixo esforço e alto impacto, aplicáveis hoje no GitHub Pages atual, sem alterar a identidade visual do site.

## What Changes

- Criar `robots.txt` na raiz do site, referenciando o sitemap.
- Criar `sitemap.xml` na raiz, listando a página inicial.
- Adicionar `<link rel="canonical">` apontando para a URL canônica atual do site.
- Atualizar `<title>` para incluir intenção de busca e localização ("Espaço para Eventos e Festas em Jacareí | Spaço Sales").
- Atualizar `<meta name="description">` com uma versão que menciona Jacareí, os principais diferenciais (salão, piscina, pergolado, área externa) e um convite ao contato.
- Adicionar JSON-LD (`schema.org`, tipo `EventVenue`) com nome, telefone, endereço estruturado (`PostalAddress`), coordenadas (`GeoCoordinates`) e `sameAs` do Instagram — sem inventar avaliações, preços ou horários de funcionamento.
- Adicionar meta tags Open Graph e Twitter Card (`og:title`, `og:description`, `og:image`, `og:image:width`, `og:image:height`, `og:url`, `og:type`, `og:locale`, `twitter:card`), incluindo uma nova imagem 1200×630 dedicada ao compartilhamento social.
- Adicionar `width` e `height` em todas as tags `<img>` que ainda não os têm, para reservar espaço de layout e reduzir CLS.
- Adicionar `loading="lazy"` em todas as imagens fora da primeira dobra; manter a imagem do hero sem lazy loading e adicionar `fetchpriority="high"` nela.
- **BREAKING (comportamento, não API pública)**: corrigir o lightbox da galeria (`assets/scripts/script.js`) para exibir a imagem real clicada (`src` da `<img>` dentro do botão da galeria), em vez de apenas um texto placeholder (`data-title`). Isso muda a Scenario "Gallery uses an irregular masonry-like grid with a lightbox" da spec `landing-page`.
- Adicionar um link `tel:+5512988556812` próximo ao link de WhatsApp (header e/ou rodapé), como canal de contato adicional.

## Capabilities

### New Capabilities
- `seo-metadata`: metadados de descoberta e rastreamento da página — `robots.txt`, `sitemap.xml`, canonical, title, description, dados estruturados JSON-LD e tags Open Graph/Twitter Card para compartilhamento social.
- `image-delivery-performance`: como as imagens do site declaram dimensões e estratégia de carregamento (`width`/`height`, `loading`, `fetchpriority`) para reduzir layout shift e tempo de carregamento inicial.

### Modified Capabilities
- `landing-page`: a Scenario do lightbox da galeria passa a exigir a exibição da imagem real clicada (não apenas o `data-title`); é adicionado um link `tel:` como canal de contato ao lado do WhatsApp existente.

## Impact

- **Arquivos afetados**: `index.html` (head metadata, atributos de imagem, link `tel:`), `assets/scripts/script.js` (lógica do lightbox), novos arquivos `robots.txt` e `sitemap.xml` na raiz, nova imagem de compartilhamento social (1200×630) em `assets/img/`.
- **Sem mudança de design**: nenhuma alteração de CSS, layout ou identidade visual é necessária.
- **Sem build step**: todas as mudanças são compatíveis com o site estático atual hospedado no GitHub Pages.
- **Dependências externas**: nenhuma nova biblioteca ou serviço externo é introduzido.

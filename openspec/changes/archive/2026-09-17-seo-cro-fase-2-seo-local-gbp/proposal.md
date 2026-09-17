## Why

Fase 1 resolveu a fundação técnica de SEO (metadados, dados estruturados, performance de imagem). A Fase 2 foca em **SEO local**: o fator que mais influencia a descoberta de um espaço de eventos físico em buscas como "espaço para eventos em Jacareí". A pesquisa no código encontrou duas lacunas concretas e verificáveis que enfraquecem o sinal de NAP (Name-Address-Phone) e a ligação entre o site e a ficha do Google Business Profile (GBP) já existente:

1. O endereço visível na seção de localização (`R. Xavante, 45 - Chácaras Reunidas Igarapes`) está **grafado de forma diferente** do endereço no JSON-LD (`... Igarapés`, com acento) — uma inconsistência de NAP que motores de busca e agregadores locais usam como sinal de confiança.
2. O `sameAs` do JSON-LD só referencia o Instagram; a ficha do Google (cujo Place ID já está publicado no link "Abrir no mapa" existente) não está linkada de volta, e não existe nenhum convite a avaliações no site — avaliações (reviews) no GBP são um dos fatores de ranqueamento local mais fortes e hoje dependem inteiramente de tráfego orgânico do Google, sem nenhum CTA no próprio site.

O restante do trabalho de GBP (reivindicar/verificar a ficha, categorias, horário de funcionamento, fotos) acontece fora deste repositório, na conta Google do negócio — está documentado como ação manual em `design.md`, fora do escopo de tarefas de código desta mudança.

## What Changes

- Corrigir a inconsistência de NAP: unificar a grafia do endereço (`Igarapés`, com acento) entre o JSON-LD e o texto visível da seção de localização.
- Adicionar ao JSON-LD um segundo item em `sameAs` apontando para a ficha do Google Maps/GBP do Spaço Sales, usando a mesma URL de Place já publicada no link "Abrir no mapa".
- Adicionar um link de call-to-action "Avaliar no Google" na seção de localização, apontando para a URL de escrita de avaliação do Google (`https://search.google.com/local/writereview?placeid=...`) construída a partir do Place ID já público no link "Abrir no mapa" existente.

## Capabilities

### New Capabilities
(nenhuma)

### Modified Capabilities
- `seo-metadata`: adiciona um requisito de consistência de NAP entre dados estruturados e conteúdo visível, e amplia o requisito de dados estruturados do local para incluir o `sameAs` do Google Business Profile.
- `landing-page`: adiciona um requisito para o link de avaliação no Google na seção de localização (`#contato`).

## Impact

- `index.html`: correção de texto no `<address>` da seção de localização; adição de uma entrada em `sameAs` no bloco JSON-LD; adição de um link "Avaliar no Google" na seção de localização.
- Nenhuma mudança de design visual, CSS ou JavaScript é necessária.
- Fora do escopo (ação manual do usuário, fora do código): reivindicar/verificar a ficha do Google Business Profile, revisar categoria, horário de funcionamento e fotos da ficha — documentado como recomendação em `design.md`.

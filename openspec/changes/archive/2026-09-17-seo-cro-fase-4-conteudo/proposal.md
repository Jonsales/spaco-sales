## Why

O site hoje não responde às perguntas que mais pesam na decisão de fechar um evento (capacidade, o que está incluso, valores, como visitar) nem mostra prova social de clientes reais — ambos fatores que reduzem hesitação e aumentam conversão. A lista de "Outras celebrações" também resume cada tipo de evento em uma frase só, deixando de capturar buscas de cauda longa (ex.: "chá revelação em Jacareí", "aniversário infantil espaço para festa"). O usuário forneceu os fatos reais necessários (capacidade, itens inclusos, política de valores, canal de agendamento de visita) e 4 avaliações reais do Google para usar como depoimentos — nenhum dado foi inventado.

## What Changes

- Adicionar uma seção de FAQ (perguntas frequentes) respondendo: capacidade do espaço, o que está incluso no aluguel, política de valores ("sob consulta"), e como agendar uma visita — usando exclusivamente os fatos fornecidos pelo usuário.
- Adicionar uma seção de depoimentos com as 4 avaliações reais do Google fornecidas pelo usuário (nome, nota e texto de cada avaliação, sem alterar o conteúdo original).
- Expandir a seção "Outras celebrações" (tipos de evento) com uma frase adicional por tipo de evento, usando linguagem de cauda longa (ex.: "chá revelação em Jacareí"), sem inventar detalhes não confirmados.
- Adicionar "festa infantil / aniversário infantil" como item explícito na lista de tipos de evento, já que o título e a meta description do site prometem esse conteúdo mas a lista atual não o lista individualmente.

## Capabilities

### New Capabilities
(nenhuma)

### Modified Capabilities
- `landing-page`: adiciona duas novas seções (FAQ e depoimentos) ao inventário ordenado de seções, e amplia o conteúdo da seção "Outras celebrações" com mais um item e descrições mais longas.

## Impact

- `index.html`: duas novas `<section>` (FAQ e depoimentos), inseridas entre a seção `quote` e a seção `instagram`; expansão de texto na seção `.other-events` (novo item "Festa infantil" e frases adicionais nos 7 itens existentes).
- Nenhuma mudança de CSS é esperada além de estilos para as duas novas seções, seguindo os tokens de design já existentes (`--serif`, `--sans`, paleta "Natureza Sofisticada") — sem introduzir novos tokens.
- Estrutura de perguntas frequentes (FAQ) pode opcionalmente usar `FAQPage` JSON-LD para rich snippets — decisão registrada em `design.md`.
- Fora do escopo desta fase: exibição de avaliações em tempo real via API do Google (mencionada pelo usuário como desejo futuro) — os depoimentos desta fase são estáticos, copiados manualmente das 4 avaliações fornecidas.

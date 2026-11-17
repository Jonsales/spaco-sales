# Auditoria de SEO: spacosales.com.br

Data: 17/11/2026 · Páginas analisadas: `/`, `/festa-de-aniversario/`, `/festa-infantil/`, `/confraternizacao/`, mais `robots.txt`, `sitemap.xml`, `llms.txt` e a página de erro 404.
Tipo de negócio: **local, com endereço físico** (espaço para eventos em Jacareí - SP).

## Nota de saúde de SEO: 85/100

| Categoria | Peso | Nota | Resumo |
|---|---|---|---|
| SEO técnico | 22% | 90 | HTTPS, redirecionamentos, canonical, sitemap, robots e página 404 corretos. Falta o HSTS. |
| Qualidade do conteúdo | 23% | 72 | Conteúdo local claro e factual. As páginas de evento são curtas e parecidas entre si. Faltam sinais de experiência real (fotos de eventos, quem está por trás). |
| SEO on-page | 20% | 90 | Títulos, descrições, um H1 por página com cidade e tipo de evento, hierarquia de títulos correta. |
| Dados estruturados | 10% | 90 | LocalBusiness + EventVenue completo, com horário. WebPage + BreadcrumbList nas páginas de evento. |
| Desempenho | 10% | 88 | Ótimo em teste de laboratório. Os dois logos carregam juntos, e as páginas de evento não têm versão de celular da imagem de capa. |
| Preparação para buscas com IA | 10% | 85 | `llms.txt` completo, robôs liberados, fatos objetivos no FAQ. Poucas menções externas. |
| Imagens | 5% | 85 | Todas em WebP, com texto alternativo e dimensões. Três imagens entre 200 e 250 KB. |

## O que foi verificado

### Técnico

| Item | Resultado |
|---|---|
| HTTPS e redirecionamento | `http://www.spacosales.com.br/festa-infantil` redireciona para `https://spacosales.com.br/festa-infantil/` |
| Canonical | Cada página aponta para si mesma |
| robots.txt | Libera todos os robôs e aponta o sitemap |
| sitemap.xml | XML válido com as 4 páginas |
| Página 404 | Endereço inexistente retorna 404, com caminhos absolutos (visual preservado em subpastas) |
| Scripts bloqueando a renderização | Nenhum (Google Analytics é assíncrono) |
| `/festa-infantil/index.html` | Também abre (200), mas o canonical resolve a duplicidade |
| Cabeçalho HSTS | Ausente |

### On-page

| Página | Título (caracteres) | Descrição | H1 | Palavras |
|---|---|---|---|---|
| `/` | 53 | 156 | Espaço para eventos e festas em Jacareí | 892 |
| `/festa-de-aniversario/` | 57 | 147 | Espaço para festa de aniversário em Jacareí | 488 |
| `/festa-infantil/` | 51 | 145 | Espaço para festa infantil em Jacareí | 509 |
| `/confraternizacao/` | 53 | 142 | Espaço para confraternização em Jacareí | 482 |

Nenhuma página pula níveis de título, todas têm Open Graph completo e nenhuma tem imagem sem texto alternativo. A imagem vazia do lightbox (`alt=""`) é intencional.

### Desempenho (teste de laboratório, simulação local)

Medido com Chromium emulando Pixel 7, 4G lento (1,6 Mbps, 150 ms) e CPU 4x mais lenta. Desktop sem limitação. Não há dados de usuários reais (CrUX) disponíveis, e o PageSpeed Insights atingiu o limite de consultas.

| Página | Dispositivo | FCP | LCP | CLS | Bloqueio | Peso inicial |
|---|---|---|---|---|---|---|
| `/` | Celular | 1,3 s | 1,3 s | 0,018 | 96 ms | 391 KB |
| `/festa-infantil/` | Celular | 1,2 s | 1,2 s | 0,034 | 17 ms | 430 KB |
| `/` | Desktop | 0,1 s | 0,1 s | 0 | 0 ms | 1,4 MB |

Todos dentro do limite "bom" do Google (LCP ≤ 2,5 s, CLS ≤ 0,1).

Pontos a melhorar:
- **Os dois logos SVG (49 KB cada) são baixados em toda visita**, mesmo com um deles escondido. Isso soma cerca de 100 KB no primeiro carregamento.
- **As páginas de evento não têm versão de celular da imagem de capa.** No celular, a página de aniversário baixa a `foto-01` (206 KB) e a de confraternização baixa o `pergolado` (192 KB). A página inicial já usa versões de celular.

### Conteúdo

- As três páginas de evento têm entre 480 e 510 palavras. A referência para páginas de serviço é 800 ou mais.
- Elas compartilham cerca de 42% do texto entre si (FAQ, lista de outros eventos, chamada final). Não chega a ser página-porta, mas deixa pouco texto exclusivo em cada uma.
- As três usam a mesma foto de introdução (`foto-espaco-01`).
- Não há depoimentos nas páginas de evento, nem fotos de festas reais daquele tipo, que são os sinais de experiência mais fortes para quem decide.
- Não há seção sobre quem está por trás do espaço (história, desde quando funciona).

## Plano de ação

Cada ação traz o motivo, do que depende, como saber se não funcionou e o que acompanhar.

### Alta

**1. Aprofundar as três páginas de evento com conteúdo exclusivo**
- Motivo: páginas dedicadas por serviço são o fator mais forte de SEO local orgânico. Hoje elas são curtas e 42% iguais entre si.
- O quê: para cada página, de 2 a 3 seções próprias. Por exemplo, como montar a festa no espaço (onde ficam o bolo, as mesas, a área das crianças), fotos reais de festas daquele tipo e um depoimento de quem fez aquele evento. Meta: 800 palavras e menos de 25% de texto repetido.
- Depende de: fotos e informações que só você tem.
- Não funcionou se: depois de 8 semanas, o Search Console não mostrar impressões para buscas como "festa infantil jacareí" ou "espaço para confraternização jacareí".
- Acompanhar: impressões por página no Search Console (Desempenho → Páginas).

**2. Manter uma rotina de avaliações no Google** (do relatório de SEO local)
- Motivo: avaliações recentes pesam mais que o total.
- Não funcionou se: menos de 2 avaliações novas por mês.
- Acompanhar: número de avaliações no perfil e o evento `clique_avaliar_google` no Analytics.

### Média

**3. Carregar um único logo**
- O quê: um só SVG para os dois estados do cabeçalho, trocando a cor via CSS, ou o SVG inline.
- Ganho: cerca de 50 KB a menos em cada primeira visita.
- Não funcionou se: o teste continuar mostrando os dois arquivos de logo baixados.

**4. Versão de celular da imagem de capa nas páginas de evento**
- O quê: usar `<picture>` com uma imagem de cerca de 800 px, como na página inicial.
- Ganho: cerca de 120 a 140 KB a menos por página no celular.
- Acompanhar: peso inicial no celular abaixo de 300 KB.

**5. Um depoimento por página de evento**
- O quê: usar avaliações reais do Google que falem daquele tipo de festa.
- Depende de: haver avaliações que mencionem cada tipo. Se não houver, a ação 2 vem antes.

**6. Seção "Sobre o Spaço Sales"**
- O quê: quem administra, desde quando, o que motivou o espaço.
- Motivo: reforça confiança (E-E-A-T) para quem compara espaços.
- Depende de: informações suas.

### Baixa

7. **Ativar HSTS** no Cloudflare (SSL/TLS → Edge Certificates → HSTS).
8. **Comprimir mais** `piscina.webp` (246 KB), `foto-panaromica.webp` (231 KB) e `foto-01.webp` (206 KB), ou criar versões de celular delas.
9. **Cadastrar o espaço em guias locais e no Apple Maps** (do relatório de SEO local).
10. **Acompanhar o Search Console mensalmente:** cobertura das 4 páginas, consultas e cliques.

## Limitações

- Os agentes de análise automática do plugin não conseguem acessar o site a partir do ambiente desta sessão (o domínio é bloqueado pela rede). A auditoria foi feita diretamente: HTML ao vivo lido pelo navegador e testes de desempenho numa cópia local idêntica dos arquivos.
- Sem dados de usuários reais (CrUX/PageSpeed Insights: limite de consultas atingido).
- Sem dados de backlinks (Moz, Ahrefs ou DataForSEO não configurados).
- Posições nas buscas não foram verificadas: a ferramenta de busca disponível retorna resultados dos EUA, não de Jacareí.

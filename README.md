# Spaço Sales — Landing Page

Landing page responsiva para o Spaço Sales, Jacareí/SP.

## Arquivos
- `index.html` — estrutura completa da página.
- `styles.css` — design system, responsividade e animações.
- `script.js` — navbar, scroll reveal e lightbox.
- `assets/` — pasta reservada para fotografias e logo oficiais.

## Direção visual
Conceito: **Natureza Sofisticada**
- Verde floresta + oliva
- Off-white + areia
- Madeira/grafite
- Playfair Display para títulos
- DM Sans para interface e textos

## Como substituir as fotos
Os blocos `.image-placeholder` foram propositalmente centralizados no HTML para facilitar a troca.
A forma mais simples é substituir cada bloco por:

```html
<img src="assets/nome-da-foto.webp" alt="Descrição da foto">
```

e manter as classes de imagem (`image-hero`, `image-tall`, etc.) para preservar o enquadramento.

## Logo
O texto `SPAÇO SALES` no elemento `.brand` pode ser substituído pela imagem oficial da logo sem alterar a navegação.

## WhatsApp
O número já está configurado para:
(12) 98855-6812

As mensagens pré-preenchidas podem ser ajustadas diretamente nos links `wa.me`.

## Próxima etapa recomendada
Substituir os placeholders pelas fotos reais do espaço, revisar os enquadramentos mobile e integrar o mapa/Instagram real.

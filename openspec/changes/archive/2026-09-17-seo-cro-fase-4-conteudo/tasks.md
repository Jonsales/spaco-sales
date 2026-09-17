## 1. FAQ section

- [x] 1.1 Add a new `<section id="faq">` to `index.html`, immediately after the testimonials section and before `instagram` (order per the spec: quote, testimonials, faq, instagram), following the existing section/heading markup conventions (`.section-kicker`, `<h2>`, `.container`); verify by inspecting the rendered `<main>` for the new section in the correct position
- [x] 1.2 Add 4 FAQ entries using only the confirmed facts (capacity ~70 guests; included items — mobiliário, sofá chaise, cadeiras de piscina, som, TV, cozinha equipada, estacionamento para 10 carros, 6 banheiros; pricing "sob consulta"; visits scheduled via WhatsApp); verify by reading each entry against the confirmed facts and confirming no invented numbers or claims were added
- [x] 1.3 Style the FAQ section using existing design tokens only (no new CSS custom properties); verify by confirming the new CSS rules only reference existing `--serif`/`--sans`/color tokens from `:root`

## 2. Testimonials section

- [x] 2.1 Add a new testimonials section to `index.html`, immediately after `quote` and before the FAQ section (order per the spec: quote, testimonials, faq, instagram), with markup for 4 testimonial cards (reviewer name, star rating, review text); verify by inspecting the rendered `<main>` for the new section
- [x] 2.2 Transcribe the 4 real Google reviews exactly as provided (Luana Siqueira, Homero L. Mercadante, Larissa Furtado, Jonathan Sales — all 5-star, text unaltered); verify by comparing each transcribed testimonial character-for-character against the review text supplied by the user
- [x] 2.3 Style the testimonials section using existing design tokens only; verify by confirming no new CSS custom properties were introduced

## 3. Expanded event-type content

- [x] 3.1 Add a "Festa infantil" entry to the `.other-events` event list, matching the existing markup pattern (`<span>`, `<strong>`, `<small>`) of the other 7 items; verify by inspecting the rendered list for 8 items total
- [x] 3.2 Expand the descriptive text of each of the 8 event-type entries with one additional keyword-relevant phrase (e.g. mentioning "Jacareí" or the specific occasion), without introducing new unconfirmed facts (prices, exact capacities, availability); verify by reading each entry against the confirmed facts

## 4. Cross-cutting verification

- [x] 4.1 Confirm the page's anchor navigation and existing sections (`#espaco`, `#estrutura`, `#eventos`, `#galeria`, `#contato`) are unaffected by the two new sections; verify by inspecting the nav links still resolve to the correct sections in order
- [x] 4.2 Manually load the page and visually check the new FAQ and testimonials sections match the site's existing look and feel (typography, spacing, color palette) — report result back, since this requires a real browser this session does not have — confirmed by user after two rounds of visual refinement (editorial pull-quote/ledger redesign via `/frontend-design`, then a two-column layout adjustment for the testimonials list); user confirmed "está bom"

## 1. NAP consistency

- [ ] 1.1 Edit the visible `<address>` in the location section (`#contato`) of `index.html` so "Igarapes" becomes "Igarapés", matching the JSON-LD `streetAddress` exactly; verify by comparing both strings character-for-character

## 2. Google Business Profile linkage

- [ ] 2.1 Add a second `sameAs` entry to the JSON-LD block in `index.html` pointing to the venue's Google Maps place URL, reusing the CID (`0x94cc33007f05a187:0x8e0ffcb14cf0bc90`) already published in the existing "Abrir no mapa" link; verify the JSON-LD still parses as valid JSON and both `sameAs` entries (Instagram + Google Maps) are present
- [ ] 2.2 Add an "Avaliar no Google" link next to the existing "Abrir no mapa" link in the location section, pointing to `https://search.google.com/local/writereview?placeid=0x94cc33007f05a187:0x8e0ffcb14cf0bc90`; verify by inspecting the rendered HTML for the new link with correct `href`, text, and `target="_blank" rel="noopener"` matching the styling convention of the neighboring link

## 3. Cross-cutting verification

- [ ] 3.1 Validate the JSON-LD block once more after edits (structure, no fabricated review/rating/price/hours data) since this phase touches it directly
- [ ] 3.2 Manually open the published "Avaliar no Google" link and confirm it lands on a Google review-writing form for Spaço Sales (not an error page) — report result back, since this requires a real browser this session does not have

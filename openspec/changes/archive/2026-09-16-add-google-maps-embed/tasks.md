## 1. Dedicated stylesheet

- [x] 1.1 Create `map.css` with the `.map-placeholder` container rules moved over (aspect-ratio, position/overflow) plus new rules for the iframe (`width:100%;height:100%;border:0`) and the grayscale+sepia color filter; verify no map-related selector remains in `styles.css`
- [x] 1.2 Link `map.css` in `index.html`'s `<head>`, after `styles.css`; verify the `<link>` tag is present and the file loads (200) when the page is opened

## 2. Markup

- [x] 2.1 Replace the `.map-grid`, `.map-pin`, and caption `<p>` inside `.map-placeholder` with an `<iframe>` pointing to `https://www.google.com/maps?q=-23.291475,-46.0441583&z=16&output=embed`, including `title="Localização do Spaço Sales"`, `loading="lazy"`, and `referrerpolicy="no-referrer-when-downgrade"`; verify the map renders the correct location when the page is opened
- [x] 2.2 Confirm no "SPAÇO SALES" badge/pin overlay remains in the location section; verify by inspecting the rendered DOM

## 3. Verification

- [x] 3.1 Check the map box at desktop, 900px, and 560px widths to confirm it keeps the existing `aspect-ratio:1.3` box behavior and doesn't overflow or break the `.location` grid; verify visually at each breakpoint
- [x] 3.2 Confirm keyboard focus (Tab) can reach the iframe and `:focus-visible` styling from `styles.css` still applies; verify by tabbing through the location section

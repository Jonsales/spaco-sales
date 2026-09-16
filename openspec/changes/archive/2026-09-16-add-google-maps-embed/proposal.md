## Why

The location section still shows a hand-drawn `.map-placeholder` (diagonal pattern + a "SPAÇO SALES" pin badge) even though the business already has a real, verified Google Maps listing — the "Abrir no mapa" link next to it points to the exact coordinates. Visitors have to leave the page to see where the venue actually is.

## What Changes

- Replace the `.map-placeholder` block (`map-grid` pattern, `map-pin` badge, and caption paragraph) with a real Google Maps embed (`output=embed` iframe, no API key required) centered on the same verified coordinates already used by the "Abrir no mapa" link (`-23.291475,-46.0441583`).
- Apply a CSS color treatment (`grayscale` + `sepia` filter) to the embedded map so its colors read closer to the site's forest/sand palette instead of Google's default blue/gray.
- Remove the "SPAÇO SALES" pin badge — the real map's own pin already identifies the location, so a second overlay badge would be redundant.
- Add a new, dedicated stylesheet (`map.css`) that holds every rule for this component, linked from `index.html` alongside `styles.css`. No map-specific rules are added to `styles.css`, so this piece can be maintained independently.

## Capabilities

### New Capabilities
(none)

### Modified Capabilities
- `landing-page`: adds a new requirement documenting the location map embed's behavior, visual treatment, and its dedicated stylesheet. (The map was never covered by the existing "Placeholder image convention" requirement — it uses `.map-placeholder`, not `.image-placeholder` — so that requirement is unaffected.)

## Impact

- `index.html`: location section markup (`.map-placeholder` → iframe embed), new `<link>` to `map.css`.
- New file `map.css`: all map-embed-specific styling.
- `styles.css`: unchanged — no map rules added here.
- `openspec/specs/landing-page/spec.md`: one requirement scope narrowed, one requirement added.

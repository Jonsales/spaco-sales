## Why

The embedded Google Map (added in `add-google-maps-embed`) currently renders through a CSS `grayscale`+`sepia` filter meant to tint it toward the site's forest/sand palette. The client wants the map plain — Google's native colors, no tint.

## What Changes

- Remove the `filter` declaration from `.map-embed` in `map.css`, leaving the iframe in Google's default styling.

## Capabilities

### New Capabilities
(none)

### Modified Capabilities
- `landing-page`: the "Location map embed" requirement's "Map colors are tinted toward the site palette" scenario is replaced — the map SHALL render with Google's native, untinted colors.

## Impact

- `map.css`: remove the `filter` property from `.map-embed`.
- `index.html`, `styles.css`: unchanged.
- `openspec/specs/landing-page/spec.md`: one scenario updated within the existing "Location map embed" requirement.

## Why

The site has no favicon today — browser tabs show a generic blank/globe icon instead of the Spaço Sales mark. The green logo icon (`logo-verde`, already in `assets/img/logos/`) is the natural fit, and matches the existing `theme-color` (`#173b2b`, forest green) already set in `index.html`.

## What Changes

- Add favicon `<link>` tags to `index.html`'s `<head>`:
  - `logo-verde.svg` (transparent) as the primary modern favicon
  - `logo-verde.png` (transparent, 500×500) as a PNG fallback
  - `logo-verde-com-fundo.png` (opaque background) as the `apple-touch-icon`, since iOS fills transparent PNG backgrounds with black

## Capabilities

### New Capabilities
(none)

### Modified Capabilities
- `landing-page`: adds a requirement that the page declares a favicon using the green logo mark, with an opaque-background variant for iOS home-screen bookmarks.

## Impact

- `index.html`: 3 new `<link>` tags in `<head>` (`icon` svg, `icon` png fallback, `apple-touch-icon`).
- No new files — reuses existing `assets/img/logos/svg/logo-verde.svg`, `assets/img/logos/png/logo-verde.png`, `assets/img/logos/png/logo-verde-com-fundo.png`.
- Known limitation (not fixed by this change): the icon's fine hairline linework may render as an indistinct blur at 16×16/32×32 tab size — accepted, since it's a property of the chosen artwork, not the implementation.

## ADDED Requirements

### Requirement: Browser tab favicon
The page SHALL declare a favicon using the green logo icon (`logo-verde`), with a modern vector format as the primary source and a raster fallback, plus a separate opaque-background variant for iOS home-screen bookmarks.

#### Scenario: SVG favicon is the primary icon
- **WHEN** the page's `<head>` is rendered
- **THEN** it includes `<link rel="icon" type="image/svg+xml" href="assets/img/logos/svg/logo-verde.svg">`

#### Scenario: PNG favicon fallback is present
- **WHEN** the page's `<head>` is rendered
- **THEN** it includes a `<link rel="icon" type="image/png" href="assets/img/logos/png/logo-verde.png">` fallback for browsers that don't support SVG favicons

#### Scenario: Apple touch icon uses the opaque-background variant
- **WHEN** the page is saved to an iOS home screen
- **THEN** the `apple-touch-icon` link points to `assets/img/logos/png/logo-verde-com-fundo.png` (opaque background), not the transparent variant

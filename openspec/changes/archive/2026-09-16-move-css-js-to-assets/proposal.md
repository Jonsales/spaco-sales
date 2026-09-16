## Why

CSS and JS files currently sit at the project root (`styles.css`, `map.css`, `script.js`) while images already live under `assets/` (`assets/logos/`). Grouping all static assets under `assets/` makes the project layout consistent and easier to navigate as more asset types are added.

## What Changes

- **BREAKING**: Move `styles.css` and `map.css` to `assets/css/`.
- **BREAKING**: Move `script.js` to `assets/scripts/`.
- Update `index.html`'s `<link>` and `<script>` tags to the new paths (`assets/css/styles.css`, `assets/css/map.css`, `assets/scripts/script.js`).
- Update `README.md`'s file references to match the new locations.

## Capabilities

### New Capabilities
(none)

### Modified Capabilities
- `landing-page`: the requirement referencing `script.js`'s implementation location and the one requiring `map.css`/`styles.css` separation are updated to reflect the new `assets/css/` and `assets/scripts/` paths.

## Impact

- `styles.css` → `assets/css/styles.css`
- `map.css` → `assets/css/map.css`
- `script.js` → `assets/scripts/script.js`
- `index.html`: 3 references updated (2 `<link>`, 1 `<script src>`)
- `README.md`: file reference list updated
- No behavior change — pure file relocation, same content

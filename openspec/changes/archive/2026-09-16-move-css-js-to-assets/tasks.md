## 1. Move files

- [x] 1.1 Create `assets/css/` and move `styles.css` and `map.css` into it; verify both files exist at their new paths and no longer exist at the project root
- [x] 1.2 Create `assets/scripts/` and move `script.js` into it; verify the file exists at its new path and no longer exists at the project root

## 2. Update references

- [x] 2.1 Update the two `<link rel="stylesheet">` tags in `index.html` to `assets/css/styles.css` and `assets/css/map.css`; verify by grepping `index.html` for the old bare filenames (should be none)
- [x] 2.2 Update the `<script src="...">` tag in `index.html` to `assets/scripts/script.js`; verify by grepping `index.html` for `script.js` and confirming it only matches the new path
- [x] 2.3 Update `README.md`'s file reference list (`styles.css`, `script.js`) to the new paths; verify by grepping `README.md` for the old bare filenames

## 3. Verification

- [x] 3.1 Open `index.html` in a browser and confirm styles and the map render correctly and scroll/reveal/lightbox behavior still works (no broken `<link>`/`<script>` requests in the console)

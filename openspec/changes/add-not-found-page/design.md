## Context

The site is plain static HTML/CSS/JS hosted on GitHub Pages with a custom domain (`CNAME`), no build step and no templating. See `proposal.md` - Why for the motivation.

## Goals / Non-Goals

**Goals:**
- Reuse the existing design system (`assets/css/styles.css`) and header/footer markup so the 404 page looks and behaves like part of the same site.
- Rely entirely on GitHub Pages' native `404.html` convention - no JavaScript redirect, no server config.

**Non-Goals:**
- No client-side router or catch-all JS redirect (would return HTTP 200 for a broken URL, which is worse for SEO than a real 404).
- No search box or fuzzy "did you mean" suggestions - the site has only one page and a handful of anchors, so simple links to the main sections are enough.
- No new build tooling to share markup between `index.html` and `404.html`; the header/footer HTML is duplicated by hand, consistent with how the project already has no templating layer.

## Decisions

**Static `404.html` at the repo root, not a JS-based redirect.**
GitHub Pages serves `404.html` automatically, with a real 404 status, for any path that doesn't match a file. A JS redirect to `/404.html` (or client-side routing) would respond 200 and mislead crawlers into treating the broken URL as valid content. Alternative considered: a `<script>` that detects a missing anchor and rewrites the URL - rejected as unnecessary complexity for a static site with no routes.

**Duplicate header/footer markup instead of extracting a shared partial.**
The project has no build step or include mechanism (confirmed in `README.md` and the repo file listing - single `index.html`, no bundler). Introducing one just for this change would be a disproportionate change to project structure. The header/footer block is small and already stable; duplicating it is the same tradeoff the project already accepts implicitly by being a single static file.

**Header nav links use absolute anchors (`/#estrutura`) instead of relative (`#estrutura`).**
From `404.html`, a relative `#estrutura` would try to scroll within the (sectionless) 404 page itself instead of navigating to the home page. Absolute paths route back to `index.html` first.

**`noindex`, no canonical, but same GA4 tag.**
Matches how the rest of the site's `seo-metadata` capability treats crawl directives, applied to a page that must never be indexed. GA4 stays so broken-link traffic is visible in existing dashboards - no new analytics property or event needed.

**Page-specific styling lives in a new `assets/css/404.css`, not in `styles.css`.**
The 404 page needs two things `index.html` never does: a header that always renders in its "scrolled" appearance (no hero image behind it to justify the transparent overlay state), and the not-found content layout. Adding these as `styles.css` rules would grow the shared stylesheet with rules only one page uses. Alternative considered: reuse the existing `.scrolled` class (toggled by `script.js` based on `window.scrollY`) by adding it statically in the HTML - rejected because `script.js` unconditionally recomputes and can remove that class on load (`scrollY` starts at 0), so the state wouldn't hold. Instead, `404.css` selects on a `.not-found-page` class on `<body>` and duplicates the same visual values (`.site-header` background/color/shadow, logo swap, nav button colors) as permanent, unconditional rules for this page only, without touching `script.js` or the shared `.scrolled` behavior used by `index.html`.

**No separate "quick links" block in the page content.**
Originally the not-found content repeated links to the main sections. Removed: the shared header nav and footer already link to every main section (`/#estrutura`, `/#eventos`, `/#galeria`, `/#contato`), so a second copy in the content area was redundant.

## Risks / Trade-offs

- **Markup drift**: hand-duplicated header/footer can drift from `index.html` over time (e.g. new nav link added to one but not the other) → Mitigation: note the duplication in `README.md` so future edits to the header/footer are a two-file change; low risk given the page rarely changes.
- **GitHub Pages caching**: `404.html` responses can be cached at the CDN edge briefly after deploy → Mitigation: none needed, acceptable for this site's traffic profile.

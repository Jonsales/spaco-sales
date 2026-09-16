# Landing Page Specification

## Purpose

Defines the visual design system, responsive layout behavior, and section structure of the Spaço Sales landing page, so future changes have a documented baseline to extend or diverge from deliberately.

## Requirements

### Requirement: Design token palette
The system SHALL define its color palette, typography, and shared layout tokens as CSS custom properties on `:root`, following the "Natureza Sofisticada" concept: forest green/olive as primary accents, cream/sand as light backgrounds, wood/ink/muted as text tones.

#### Scenario: Serif and sans typefaces are used consistently
- **WHEN** any heading (`h1`, `h2`) or italicized emphasis (`em` inside a heading) is rendered
- **THEN** it uses `--serif` (Playfair Display, falling back to Georgia/serif)

#### Scenario: Body and UI text use the sans typeface
- **WHEN** body copy, navigation, buttons, or labels are rendered
- **THEN** they use `--sans` (DM Sans, falling back to Arial/sans-serif)

#### Scenario: Shared easing token drives motion
- **WHEN** any hover transition, reveal animation, or hover transform is applied
- **THEN** it uses the `--ease` cubic-bezier token rather than a one-off easing value

### Requirement: Placeholder image convention
Every media block in the page SHALL use the `.image-placeholder` pattern (diagonal gradient background + radial highlight + uppercase caption `<span>`) combined with a dedicated framing class (e.g. `image-hero`, `image-tall`, `image-wide`, `image-space-1..7`, `image-birthday`, `image-detail`) that sets its `aspect-ratio` or sizing, so each block can later be replaced by a real `<img>` without changing layout.

#### Scenario: Placeholder replaced by a real photo
- **WHEN** a `.image-placeholder` block is replaced with an `<img src="assets/...">`
- **THEN** the surrounding framing class is preserved so the image occupies the same aspect ratio and position as the placeholder did

### Requirement: Responsive breakpoints
The layout SHALL adapt at exactly two breakpoints, both expressed as `max-width` media queries (desktop-first): **900px** (tablet/mobile-large) and **560px** (small mobile). No intermediate or large-desktop breakpoint SHALL be introduced without updating this spec.

#### Scenario: Navigation collapses at 900px
- **WHEN** viewport width is 900px or less
- **THEN** `.nav-links` and `.button-nav` hide, and `.menu-toggle` (hamburger) becomes visible and toggles `.nav-links.open`

#### Scenario: Multi-column grids collapse to single column at 900px
- **WHEN** viewport width is 900px or less
- **THEN** `.editorial-grid`, `.birthday`, `.details-grid`, and `.location` switch from multi-column grids to a single column (`grid-template-columns:1fr`)

#### Scenario: Section vertical padding shrinks at 900px
- **WHEN** viewport width is 900px or less
- **THEN** `.section` padding reduces from `130px 0` to `90px 0`

#### Scenario: Headings clamp to a fixed size at 560px
- **WHEN** viewport width is 560px or less
- **THEN** section headings (`.section-heading h2`, `.editorial-copy h2`, `.birthday h2`, `.details h2`, `.instagram h2`, `.location h2`) render at a fixed `40px` instead of their `clamp()` value

#### Scenario: WhatsApp float button becomes icon-only on mobile
- **WHEN** viewport width is 900px or less
- **THEN** `.whatsapp-float` hides its text label and becomes a fixed-size circular icon button

### Requirement: Ordered section inventory
The page SHALL present its content as a fixed, ordered sequence of sections inside `<main>`, alternating between "editorial" sections (text + photo grid on a light background) and "cinematic" sections (full-bleed photo with dark overlay and centered/overlaid text): hero, intro (`#espaco`), experience, structure (`#estrutura`), birthday (`#eventos`), other-events, gallery (`#galeria`), details, quote, instagram, location (`#contato`), final-cta, footer.

#### Scenario: Anchor navigation targets match section ids
- **WHEN** a nav link or footer link points to `#espaco`, `#estrutura`, `#eventos`, `#galeria`, or `#contato`
- **THEN** a section with that exact `id` exists in the same order the links appear in navigation

#### Scenario: Structure section uses an asymmetric 12-column grid
- **WHEN** the structure section (`#estrutura`) is rendered above the 900px breakpoint
- **THEN** its 7 space cards are laid out on a 12-column grid with one large card (span 7) and the remaining cards alternating spans of 5 and 7, not a uniform grid

#### Scenario: Gallery uses an irregular masonry-like grid with a lightbox
- **WHEN** a gallery item is clicked
- **THEN** the lightbox opens showing that item's `data-title`, and closes on close-button click, backdrop click, or Escape key

### Requirement: Scroll-driven interactivity
The page SHALL provide three scroll-related behaviors implemented in `assets/scripts/script.js`: a header background/color swap after 40px of scroll, a one-time reveal-on-scroll animation for elements marked `.reveal` (via `IntersectionObserver`, threshold 0.12), and smooth in-page scrolling for same-page anchor links.

#### Scenario: Header switches to solid background on scroll
- **WHEN** the user scrolls the page beyond 40px from the top
- **THEN** `.site-header` gains the `.scrolled` class, switching from a transparent/white-text header to a solid cream background with forest-green text

#### Scenario: Reveal elements animate in once
- **WHEN** an element with class `.reveal` enters the viewport (12% visible)
- **THEN** it gains the `.visible` class (fading/sliding into place) and is not re-observed afterward, so the animation does not repeat on subsequent scroll

### Requirement: Location map embed
The location section (`#contato`) SHALL display a real, embedded Google Map in place of the decorative `.map-placeholder` block, using the Google Maps `output=embed` iframe format (no API key required) centered on the venue's verified coordinates (`-23.291475,-46.0441583`, the same coordinates used by the existing "Abrir no mapa" link).

#### Scenario: Map renders the verified location
- **WHEN** the location section is rendered
- **THEN** an iframe pointing to Google Maps `output=embed` with coordinates `-23.291475,-46.0441583` is present in place of the former `.map-placeholder` block

#### Scenario: Map styling lives in a dedicated stylesheet
- **WHEN** any CSS rule targets the map embed (container sizing, iframe)
- **THEN** that rule is defined in a dedicated `assets/css/map.css` file linked from `index.html`, and no map-embed rule is added to `assets/css/styles.css`

#### Scenario: Map colors are tinted toward the site palette
- **WHEN** the map iframe is rendered
- **THEN** no CSS color filter is applied to it — it renders in Google's native, untinted colors

#### Scenario: No redundant pin overlay
- **WHEN** the map is displayed
- **THEN** no separate "SPAÇO SALES" badge/pin overlay is rendered on top of it, since the embedded map's own marker already identifies the location

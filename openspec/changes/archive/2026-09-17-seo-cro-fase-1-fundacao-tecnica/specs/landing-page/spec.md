## MODIFIED Requirements

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
- **THEN** the lightbox opens showing that item's own photo (the same image shown in the gallery grid) together with its `data-title` caption, and closes on close-button click, backdrop click, or Escape key

## ADDED Requirements

### Requirement: Direct phone contact link
The page SHALL provide a `tel:` link to the venue's phone number alongside the existing WhatsApp contact links, so visitors who prefer calling can do so with one tap.

#### Scenario: Phone link is present and dials the venue's number
- **WHEN** the page is rendered
- **THEN** at least one `<a href="tel:+5512988556812">` link is present near an existing WhatsApp contact link

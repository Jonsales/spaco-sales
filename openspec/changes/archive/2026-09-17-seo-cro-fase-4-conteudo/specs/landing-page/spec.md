## MODIFIED Requirements

### Requirement: Ordered section inventory
The page SHALL present its content as a fixed, ordered sequence of sections inside `<main>`, alternating between "editorial" sections (text + photo grid on a light background) and "cinematic" sections (full-bleed photo with dark overlay and centered/overlaid text): hero, intro (`#espaco`), experience, structure (`#estrutura`), birthday (`#eventos`), other-events, gallery (`#galeria`), details, quote, testimonials, faq (`#faq`), instagram, location (`#contato`), final-cta, footer.

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

### Requirement: Frequently asked questions section
The page SHALL include a FAQ section (`#faq`) answering, using only facts confirmed by the venue owner (no invented numbers, prices, or policies): the venue's guest capacity, what is included in the rental, the pricing policy, and how to schedule a visit.

#### Scenario: FAQ answers the four confirmed questions
- **WHEN** the FAQ section is rendered
- **THEN** it includes an entry stating the venue's real capacity (~70 pessoas), an entry listing what is included in the rental (mobiliário, sofá chaise, cadeiras de piscina, som, TV, cozinha equipada, estacionamento para 10 carros, 6 banheiros), an entry stating that pricing is "sob consulta", and an entry stating that visits are scheduled via WhatsApp

#### Scenario: No fabricated pricing or capacity figures
- **WHEN** the FAQ section is parsed
- **THEN** it contains no specific price, currency value, or capacity number other than the confirmed ~70-guest figure

### Requirement: Customer testimonials section
The page SHALL include a testimonials section displaying real customer reviews, each with the reviewer's name, star rating, and review text exactly as originally written, sourced from the venue's actual Google Business Profile reviews — no invented, paraphrased, or composited reviews.

#### Scenario: Testimonials show real reviewer names, ratings, and unaltered text
- **WHEN** the testimonials section is rendered
- **THEN** each testimonial displays a reviewer name, a star rating, and review text matching a real Google review of the venue, with no added or removed content from the original review text

### Requirement: Expanded event-type content
The "Outras celebrações" event-type list SHALL include descriptive, keyword-relevant text for each event type (including an explicit "Festa infantil" entry, matching the "festas infantis" claim already made in the page's title and meta description), without inventing details about pricing, availability, or capacity per event type beyond what the FAQ states.

#### Scenario: Event-type list includes a dedicated children's party entry
- **WHEN** the "Outras celebrações" section is rendered
- **THEN** it includes a "Festa infantil" (or equivalent) entry alongside the existing 7 event types

#### Scenario: Event-type descriptions do not introduce new unconfirmed facts
- **WHEN** the expanded event-type descriptions are read
- **THEN** they describe atmosphere/use-case in descriptive language, not specific prices, exact capacities, or availability claims not already stated elsewhere on the page

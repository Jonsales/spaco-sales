## Purpose

Defines how images declare their dimensions and loading strategy so the browser can reserve layout space in advance and defer off-screen images, reducing layout shift and initial page weight.

## ADDED Requirements

### Requirement: Explicit image dimensions
Every content `<img>` on the page SHALL declare `width` and `height` attributes matching the image's intrinsic aspect ratio, so the browser can reserve layout space before the image loads.

#### Scenario: Content image has explicit dimensions
- **WHEN** any `<img>` in the page body is rendered
- **THEN** it has `width` and `height` attributes present and consistent with the image's real aspect ratio

### Requirement: Deferred loading below the fold
Every `<img>` that is not visible in the initial viewport on page load SHALL declare `loading="lazy"`, deferring its fetch until it is near the viewport.

#### Scenario: Below-the-fold image is lazy-loaded
- **WHEN** an `<img>` outside the hero section is rendered
- **THEN** it has `loading="lazy"`

### Requirement: Prioritized hero image
The hero section's image SHALL be excluded from lazy loading and SHALL declare `fetchpriority="high"`, so it is fetched as early as possible.

#### Scenario: Hero image loads eagerly with high priority
- **WHEN** the hero section's `<img>` is rendered
- **THEN** it has no `loading="lazy"` attribute and has `fetchpriority="high"`

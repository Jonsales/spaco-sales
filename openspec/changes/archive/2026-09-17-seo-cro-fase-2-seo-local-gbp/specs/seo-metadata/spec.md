## Purpose

Defines the discovery and crawling metadata the site exposes to search engines and social platforms — crawl directives, sitemap, canonical URL, page title/description, structured data, and social preview tags — so the page can be indexed correctly and shared with a rich preview.

## ADDED Requirements

### Requirement: NAP consistency between structured data and visible content
The venue's name, address, and phone number (NAP) SHALL be written identically, character-for-character, everywhere they appear on the page — including the JSON-LD structured data and any visible `<address>` block — so search engines and local-search aggregators do not read them as two different locations.

#### Scenario: Visible address text matches the structured data address exactly
- **WHEN** the `streetAddress` in the JSON-LD block is compared to the text of the page's visible `<address>` element
- **THEN** both contain the identical street address text, including diacritics (e.g. "Igarapés", not "Igarapes")

### Requirement: Google Business Profile linkage in structured data
The JSON-LD block's `sameAs` array SHALL include the venue's Google Business Profile (Google Maps place) URL, in addition to its social profiles, using the same Place ID already published elsewhere on the page (the "Abrir no mapa" link), so the site and the Google listing are explicitly linked as the same entity.

#### Scenario: sameAs includes the Google Maps place URL
- **WHEN** the page's structured data `sameAs` array is parsed
- **THEN** it includes a Google Maps URL referencing the same Place ID used by the existing "Abrir no mapa" link, alongside the existing Instagram entry

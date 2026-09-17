## Purpose

Defines the discovery and crawling metadata the site exposes to search engines and social platforms — crawl directives, sitemap, canonical URL, page title/description, structured data, and social preview tags — so the page can be indexed correctly and shared with a rich preview.

## ADDED Requirements

### Requirement: Crawl directives file
The site SHALL serve a `robots.txt` file at its root that allows crawling of the site and references the sitemap's absolute URL.

#### Scenario: robots.txt allows crawling and references the sitemap
- **WHEN** a crawler requests `/robots.txt`
- **THEN** the response allows crawling of all public paths and includes a `Sitemap:` directive pointing to the absolute URL of `sitemap.xml`

### Requirement: Sitemap file
The site SHALL serve a `sitemap.xml` file at its root listing the site's public URL(s) in the standard sitemap XML format.

#### Scenario: Sitemap lists the home page
- **WHEN** a crawler requests `/sitemap.xml`
- **THEN** the response is valid sitemap XML containing at least the absolute URL of the site's home page

### Requirement: Canonical URL
The page SHALL declare a canonical URL in its `<head>` matching the site's current public address, so search engines treat it as the authoritative version of the page.

#### Scenario: Canonical link is present and absolute
- **WHEN** the page's `<head>` is rendered
- **THEN** it includes `<link rel="canonical" href="...">` with an absolute URL matching the site's current public address

### Requirement: Search-intent title and description
The page's `<title>` and `<meta name="description">` SHALL communicate the business's location (Jacareí) and search intent (event/party venue), and the description SHALL mention at least one concrete differentiator (e.g. pool, pergola, outdoor area, hall).

#### Scenario: Title communicates location and intent
- **WHEN** the page's `<title>` is read
- **THEN** it contains both a reference to "Jacareí" and a term indicating an event/party venue

#### Scenario: Description mentions a concrete differentiator
- **WHEN** the page's `<meta name="description">` is read
- **THEN** it mentions Jacareí and at least one concrete feature of the venue (e.g. pool, pergola, hall, outdoor area)

### Requirement: Structured data for the venue
The page SHALL include a JSON-LD block (`schema.org`) describing the venue with its name, telephone, structured postal address, geographic coordinates, and a link to its Instagram profile, using only information that is true and already published elsewhere on the site. It SHALL NOT include reviews, ratings, prices, or opening hours that are not genuinely available.

#### Scenario: JSON-LD describes the venue with verified data
- **WHEN** the page's structured data is parsed
- **THEN** it contains the venue's name, `telephone`, a `PostalAddress` matching the address shown elsewhere on the page, `GeoCoordinates` matching the coordinates used by the existing map/link, and a `sameAs` entry for the Instagram profile

#### Scenario: No fabricated review, rating, price, or hours data
- **WHEN** the page's structured data is parsed
- **THEN** it contains no `review`, `aggregateRating`, `priceRange`, or `openingHours` properties

### Requirement: Social preview metadata
The page SHALL declare Open Graph and Twitter Card metadata so links shared on WhatsApp, Instagram, Facebook, and LinkedIn render a title, description, and a dedicated 1200×630 preview image.

#### Scenario: Open Graph tags are present and consistent with the page
- **WHEN** the page's `<head>` is rendered
- **THEN** it includes `og:type`, `og:title`, `og:description`, `og:url`, `og:locale`, and an `og:image` pointing to a dedicated image with matching `og:image:width` (1200) and `og:image:height` (630)

#### Scenario: Twitter Card is declared
- **WHEN** the page's `<head>` is rendered
- **THEN** it includes `<meta name="twitter:card" content="summary_large_image">`

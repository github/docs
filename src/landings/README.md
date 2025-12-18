# Landing pages

The landings subject provides components and logic for rendering various types of landing pages across docs.github.com, including the Docs home page, product landing pages, product guides pages, category pages, and specialized layouts like journey and discovery landings.

## Purpose & Scope

This subject is responsible for:
- Rendering different landing page layouts (product, guides, category, journey, discovery, bespoke)
- Building and displaying featured links, article cards, and guide cards
- Managing landing page context and data requirements
- Providing hierarchical navigation for products and categories
- Displaying article carousels and product releases

Landing pages serve as navigational hubs that provide a hierarchical view of their area, making it easier to find and discover documentation.

## Architecture & Key Assets

| Landing Page Type | Layout Value | Purpose |
|-------------------|--------------|---------|
| Product landing | `product-landing` | Product overview pages with featured links and release notes |
| Product guides | `product-guides` | Product guides listing organized by categories |
| Category landing | `category-landing` | Category pages with hierarchical navigation |
| Table of contents | `toc-landing` | Table of contents pages |
| Journey landing | `journey-landing` | Guided learning journey pages with track navigation |
| Discovery landing | `discovery-landing` | Discovery/exploration pages |
| Home page | (special) | Docs.github.com homepage |

## Setup & Usage

### Running tests

```bash
npm run test -- src/landings/tests
```

## Data & External Dependencies

### Data inputs
- Page frontmatter: `layout`, `featuredLinks`, `journeyTracks`, etc.
- Content tree: Used to build TOC and navigation hierarchies
- Product metadata: Product names, versions, release information

### Dependencies
- [`@/frame`](../frame/README.md) - Context object, page data, shared components
- [`@/content-render`](../content-render/README.md) - Renders Liquid in featured link titles
- [`@/learning-track`](../learning-track/README.md) - Learning track data resolution
- [`@/journeys`](../journeys/README.md) - Journey track components and data
- [`@/products`](../products/README.md) - Product metadata and groupings
- [`@/versions`](../versions/README.md) - Version-aware content filtering

### Data outputs
- `req.context.featuredLinks` - Resolved featured link data
- Landing page contexts - Various context objects passed to React components
- Rendered landing pages - Final HTML output

## Current State & Next Steps

### Known limitations
- Multiple similar but distinct landing components (could be consolidated)
- Featured links limited to 4 per category to avoid overly tall columns
- Bespoke landing pages require custom components rather than data-driven approach

### Areas for improvement
- Standardize landing page patterns and consolidate overlapping types
- Make landing pages more data-driven and less code-heavy
# 🏠 Landing Pages

The **Landing Pages** subject powers the various landing page experiences across **docs.github.com**. It provides the components, data processing, and rendering logic required to generate the Docs homepage, category pages, guided journeys, discovery pages, and other custom landing experiences.

Landing pages act as navigation hubs, helping users quickly discover relevant documentation through curated content, hierarchical navigation, and featured resources.

---

## ✨ Responsibilities

This subject is responsible for:

- Rendering multiple landing page layouts
- Building hierarchical navigation from the documentation tree
- Displaying featured links, guide cards, and article cards
- Managing landing page context and data requirements
- Supporting product and category navigation
- Rendering article carousels and curated content sections

---

## 🗂️ Supported Landing Page Types

| Landing Page | Layout | Description |
|--------------|--------|-------------|
| **Category Landing** | `category-landing` | Category overview pages with hierarchical navigation |
| **Table of Contents** | `toc-landing` | Documentation index pages generated from the content tree |
| **Journey Landing** | `journey-landing` | Guided learning experiences with track-based navigation |
| **Discovery Landing** | `discovery-landing` | Curated pages designed for exploration and content discovery |
| **Bespoke Landing** | `bespoke-landing` | Fully custom, hand-crafted landing pages |
| **Docs Home** | *(special)* | The main homepage for docs.github.com |

---

## 🏗️ Architecture

Landing pages are generated using a combination of:

- **Page frontmatter** for layout configuration
- **Content tree** for hierarchical navigation
- **Product metadata** for product-specific information
- **React components** for rendering page layouts
- **Context builders** for supplying page-specific data

The selected `layout` value determines which landing page component is rendered.

---

## 🚀 Running Tests

Run the landing page test suite:

```bash
npm run test -- src/landings/tests
```

---

## 📥 Data Inputs

Landing pages consume data from several sources:

| Source | Purpose |
|---------|---------|
| Page Frontmatter | Defines layout, featured links, journey tracks, and page-specific configuration |
| Content Tree | Generates navigation hierarchies and table of contents |
| Product Metadata | Supplies product names, versions, and release information |

Common frontmatter fields include:

- `layout`
- `featuredLinks`
- `journeyTracks`
- Other landing page configuration values

---

## 🔗 Dependencies

This subject integrates with several other parts of the documentation system.

| Module | Purpose |
|--------|---------|
| `@/frame` | Shared context object, page data, and common components |
| `@/content-render` | Renders Liquid templates in featured link titles |
| `@/journeys` | Journey track data and React components |
| `@/products` | Product metadata and grouping logic |
| `@/versions` | Version-aware content filtering |

---

## 📤 Outputs

After processing, the landing page system produces:

- `req.context.featuredLinks`
- Landing page context objects
- Hierarchical navigation structures
- Rendered React landing pages
- Final HTML output

---

## ⚠️ Current Limitations

Some known constraints include:

- Multiple landing page implementations with overlapping functionality
- Featured links are limited to **four per category** to prevent overly tall layouts
- Bespoke landing pages require custom React components instead of a fully data-driven configuration

---

## 🚀 Future Improvements

Potential areas for enhancement include:

- Consolidating similar landing page implementations
- Standardizing landing page patterns across layouts
- Expanding the use of reusable components
- Moving toward a more data-driven architecture
- Reducing custom rendering logic where possible

---

## 📚 Summary

The **Landing Pages** subject serves as the central navigation layer for **docs.github.com**, transforming structured content and metadata into intuitive landing experiences that help users discover documentation efficiently.

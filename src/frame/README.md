# Frame

The frame subject provides the foundational infrastructure for the docs.github.com application. It serves as the "spine" of the site, handling core Express server setup, middleware orchestration, shared React components, and fundamental utilities that don't belong to a specific subject.

## Purpose & Scope

This subject is responsible for:
* Server initialization and Express app creation
* Middleware orchestration across all subjects
* Context management (`req.context` object building)
* Shared React components (layouts, navigation, error pages)
* Fundamental utilities (path parsing, frontmatter validation, page data)
* Next.js integration and page routing

Philosophy: The preference is to move code into more specific subject folders when possible. Frame should contain only cross-cutting concerns that truly span multiple subjects or don't have a clear subject-specific home.

## Architecture & Key Assets

```
src/frame/
├── components/         # Shared React components (DefaultLayout, Link, article, page-header/footer)
├── lib/               # Core utilities (app.ts, page.ts, frontmatter.ts, path-utils.ts)
├── middleware/        # Express middleware pipeline and context builders
├── pages/            # Next.js pages directory (legacy)
├── stylesheets/      # Global CSS and SCSS
├── server.ts         # Server entry point
└── start-server.ts   # Server startup logic
```

### Key files and functions

- `lib/app.ts` - `createApp()`: Creates and configures the Express application with all middleware
- `lib/warm-server.ts` - `warmServer()`: Pre-loads pages, redirects, and site tree on startup
- `lib/page.ts` - `Page` class: Represents a content page with rendering and metadata methods
- `lib/frontmatter.ts` - AJV schema: Validates frontmatter structure for all markdown files
- `lib/path-utils.ts` - Path parsing functions: Extract version, product, language from URLs
- `middleware/index.ts` - Orchestrates the full middleware pipeline across all subjects
- `middleware/context/context.ts` - `contextualize()`: Initializes base `req.context` object
- `middleware/find-page.ts` - Locates the matching page in the site tree
- `middleware/render-page.ts` - Renders page content and sends response
- `components/DefaultLayout.tsx` - Main layout wrapper for all pages

## Setup & Usage

### Running the server locally

```bash
npm run dev
# Server starts at http://localhost:4000
```

### Running tests

```bash
npm run test -- src/frame/tests
```

### Middleware pipeline order

The middleware in `middleware/index.ts` executes in a specific order. Key stages:
1. Connection management (timeout, abort handling)
2. Security and headers (helmet, CORS)
3. Language detection and context initialization
4. URL normalization and redirects
5. Page finding and subject-specific middleware
6. Context enrichment (breadcrumbs, TOC, features)
7. Page rendering
8. Error handling

### Adding new middleware

When adding middleware, consider:
- Does it belong in a specific subject? If so, add it there and import into `middleware/index.ts`
- Where does it fit in the pipeline order?
- Does it need to modify `req.context`?
- Add to `middleware/index.ts` in the appropriate position

## Data & External Dependencies

### Data inputs
- Content files (`content/` directory) parsed and loaded into pages
- Data files (`data/` directory) loaded for variables, features, versions
- Frontmatter schema defines required/optional fields for all pages

### Dependencies
- Express.js for HTTP server and middleware
- Next.js for some routing and SSR (transitioning away from pages/ directory)
- AJV for frontmatter validation
- Various subject middleware (versions, languages, redirects, etc.)

### Data outputs
- `req.context` object: Populated and passed to all downstream middleware and components
- Site tree: Navigation structure built from content files
- Rendered HTML: Final page output sent to clients

## Cross-links & Ownership

### Related subjects
Nearly every subject interacts with frame:
- [`src/versions`](../versions/README.md) - Version detection and middleware
- [`src/languages`](../languages/README.md) - Language detection and translation
- [`src/redirects`](../redirects/README.md) - URL redirect handling
- [`src/content-render`](../content-render/README.md) - Markdown rendering
- [`src/landings`](../landings/README.md) - Landing page layouts
- [`src/learning-track`](../learning-track/README.md) - Learning track navigation

### Ownership
- Team: Docs Engineering

## Current State & Next Steps

### Known limitations
- Middleware pipeline complexity: Many middleware pieces interact, making debugging challenging
- Context object size: `req.context` accumulates many properties across middleware
- Mixed patterns: Some components are in `components/`, others in subject folders
- Legacy pages directory: Transitioning from Next.js pages/ to app/ router

### Migration in progress
- Moving from Next.js pages router to app router
- Refactoring subject-specific code out of frame when possible
- Consolidating similar patterns across middleware

### When to add code to frame
Add code here only if:
- It's truly cross-cutting (used by 3+ subjects)
- It's fundamental infrastructure (server, middleware orchestration)
- No specific subject is a clear fit

Otherwise, prefer adding to a subject-specific directory.

### Future improvements
### Possible extractions
- Extract subject-specific middleware to their own directories (e.g., move language detection middleware to `src/languages/middleware`)
- Extract redirect logic to `src/redirects/middleware`
- Extract version detection to `src/versions/middleware`
- Extract search-specific middleware to `src/search/middleware`
- Extract context object building to individual subjects


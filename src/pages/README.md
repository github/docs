# Pages

The pages subject is the Next.js pages directory that defines route structure for docs.github.com. This directory acts as a thin routing layer that delegates to actual page implementations in subject-specific directories.

## Purpose & Scope

This subject is responsible for:
* Defining Next.js routes using file-system routing
* Re-exporting page components from subject directories
* Custom `_app.tsx` for application wrapper
* Custom `_document.tsx` for HTML document structure
* Custom `_error.tsx` for error page handling
* Route structure matching content hierarchy

Note: Actual page implementations live in subject directories (e.g., `src/landings/pages/`, `src/rest/pages/`). This directory contains mostly re-exports and special Next.js files.

## Architecture & Key Assets

### Key capabilities and their locations

- `_app.tsx` - Application wrapper, imports global styles, re-exports from `@/frame/pages/app`
- `_document.tsx` - Custom HTML document with styled-components SSR and color scheme defaults
- `_error.tsx` - Error page that reports to Failbot on server-side errors
- `index.tsx` - Homepage, re-exports from `@/landings/pages/home`
- `[versionId]/[productId]/index.tsx` - Product/category pages, re-exports from `@/landings/pages/product`

## Setup & Usage

### File-system routing

Next.js uses file-system routing where file paths map to URLs:
- `pages/index.tsx` → `/`
- `pages/search.tsx` → `/search`
- `pages/[versionId]/index.tsx` → `/free-pro-team@latest`, `/enterprise-server@3.11`, etc.
- `pages/[versionId]/[productId]/index.tsx` → `/free-pro-team@latest/actions`, etc.

Dynamic segments use brackets: `[versionId]`, `[productId]`

### Page delegation pattern

Most files in this directory are simple re-exports:

```typescript
// pages/index.tsx
export { default, getServerSideProps } from '@/landings/pages/home'
```

This keeps routing logic in `src/pages/` while page implementation stays with its subject.

### Special Next.js files

- `_app.tsx` - Wraps every page, initializes global state, imports styles
- `_document.tsx` - Customizes HTML structure, handles styled-components SSR
- `_error.tsx` - Renders error pages, reports server-side errors to Failbot

### Adding a new route

1. Determine the URL structure
2. Create file in `src/pages/` matching the route
3. Implement page component in appropriate subject directory
4. Re-export from `src/pages/` file:
   ```typescript
   export { default, getServerSideProps } from '@/my-subject/pages/my-page'
   ```

## Data & External Dependencies

### Dependencies
- Next.js pages router (being migrated to app router)
- Subject page implementations (`@/landings`, `@/rest`, `@/search`, etc.)
- `@/frame` - Application wrapper and global styles
- styled-components - CSS-in-JS for server-side rendering

### Route resolution
1. Next.js matches incoming URL to file in `src/pages/`
2. Imports re-exported component from subject directory
3. Calls `getServerSideProps` if present
4. Renders page with data

## Cross-links & Ownership

### Related subjects
- [`src/frame`](../frame/README.md) - Provides `_app` implementation and global infrastructure
- [`src/landings`](../landings/README.md) - Homepage and product/category pages
- [`src/rest`](../rest/README.md) - REST API documentation pages
- [`src/graphql`](../graphql/README.md) - GraphQL API documentation pages
- [`src/webhooks`](../webhooks/README.md) - Webhooks documentation pages
- [`src/search`](../search/README.md) - Search pages
- All subjects with `pages/` directories

### Ownership
- Team: Docs Engineering

## Current State & Next Steps

### Migration in progress
We are migrating from Next.js pages router to app router:
- New pages should use app router in `src/app/`
- Pages router in `src/pages/` is legacy
- Migration tracked in internal issue

### Known limitations
- Pages router is deprecated by Next.js in favor of app router
- Some code still exists in `_error.tsx` and `_document.tsx` that should be moved
- Route structure tightly coupled to content hierarchy

### When to edit files here

Edit `_app.tsx`:
- Never (it's a re-export from `@/frame/pages/app`)

Edit `_document.tsx`:
- Only for global HTML document changes
- styled-components SSR configuration
- Default color scheme values

Edit `_error.tsx`:
- Only for global error handling changes
- Failbot reporting configuration

Add new route files:
- When defining new URL structures
- Usually just re-export from subject directory

### App router migration

For new features, use app router:
- Routes defined in `src/app/` instead of `src/pages/`
- Layouts instead of `_app.tsx`
- Error boundaries instead of `_error.tsx`
- New routing conventions with `page.tsx`, `layout.tsx`, etc.

See Next.js documentation for app router migration guide.

### Testing route changes

```bash
npm run dev
# Access routes in browser to verify they work
```

Routes should load without errors and render correct content from subject directories.

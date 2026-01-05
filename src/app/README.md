# App Router (`src/app`)

This directory contains the [Next.js App Router](https://nextjs.org/docs/app) implementation for GitHub Docs. It currently serves as the application shell, handling the root layout, global providers, and 404 error pages, while coexisting with the Pages Router implementation.

## Purpose & Scope

The `src/app` directory is the entry point for the Next.js App Router. Its primary responsibilities are:
- Defining the root HTML structure and metadata.
- Initializing global client-side context providers (Theme, Locale, Languages).
- Handling global "Not Found" (404) scenarios.
- Providing a bridge between the modern App Router architecture and the `MainContext` used by existing components.

We began this migration because we anticipate `@primer/react` will eventually drop support for the Pages Router. If that happens, we will be unable to upgrade `@primer/react`, effectively blocking us from receiving any future design system updates. Moving to the App Router prevents this and aligns us with the broader Next.js ecosystem.

## Architecture & Key Assets

### Directory Structure

- `layout.tsx`: The server-side Root Layout. It sets up the `<html>` and `<body>` tags, loads global styles, and defines metadata/viewport settings.
- `client-layout.tsx`: A client component (`'use client'`) that wraps the application in necessary React Context providers. This allows server components to compose client-side logic for theming and state management.
- `not-found.tsx`: The UI for 404 errors within the App Router.
- `lib/`: Utilities for context adaptation and routing logic.
  - `app-router-context.ts`: Generates context data based on the current request path.
  - `main-context-adapter.ts`: Adapts App Router data structures to match the `MainContext` shape, ensuring backward compatibility for components.
- `components/`: Client-side components specific to the App Router shell (e.g., wrappers for 404 pages, context providers).

### Key Concepts

- **Context Adaptation**: Since much of the codebase relies on a monolithic `MainContext`, this directory implements adapters to construct a compatible context object from App Router primitives. This allows us to reuse existing components without rewriting them immediately.
- **Hybrid Routing**: The application currently operates in a hybrid mode. While `src/app` defines the outer shell, many specific routes and page rendering logic may still reside in the Pages Router (`src/pages`) or are being incrementally migrated.

## Setup & Usage

### Development

Standard Next.js App Router conventions apply. To add a new route using the App Router, create a folder with a `page.tsx` file inside `src/app`.

Useful documentation:
- [Next.js App Router Documentation](https://nextjs.org/docs/app)
- [Migrating from Pages to App Router](https://nextjs.org/docs/app/building-your-application/upgrading/app-router-migration)

### Testing

Tests for App Router logic should be placed alongside the components if applicable.

Tests that verify Next.js behavior (like 404 handling) can be found in `src/frame/tests/next.ts`.

## Data & External Dependencies

- **Data Sources**:
  - Consumes UI strings and language data from `src/data-directory` (via `getUIDataMerged`).
  - Uses `src/languages` for locale definitions.
- **External Libraries**:
  - `@primer/react`: Used for the design system and theming provider.
  - `next`: The core framework.

## Cross-links & Ownership

- **Owner**: Docs Engineering
- **Related Directories**:
  - `src/pages`: The Pages Router implementation.
  - `src/frame`: Server and middleware logic that interacts with routing.
  - `src/data-directory`: Source of static data used in layouts.

## Current State & Next Steps

- **Current State**: The App Router handles the root layout and 404s. It provides a compatibility layer for existing contexts.
- **Next Steps**:
  - Migrate individual page routes from `src/pages` to `src/app`.
  - Refactor components to reduce dependency on the monolithic `MainContext`.
  - Improve data fetching patterns to use React Server Components (RSC) more effectively.
# Types

The **types** subject provides centralized TypeScript type definitions used throughout the docs.github.com codebase. This includes both application-specific types and TypeScript declaration files (`.d.ts`) for third-party libraries that lack native TypeScript support.

## Purpose & Scope

This subject is responsible for:
- Defining core types for the application (`Context`, `Page`, `ExtendedRequest`, etc.)
- Providing TypeScript definitions for third-party libraries without official types
- Maintaining frontmatter schema types that align with our validation logic
- Exporting shared types for consistent use across all subjects

**Note**: The types defined here are consumed by nearly every subject in the codebase. Changes to core types like `Context` or `Page` can have wide-reaching impacts.

## Architecture & Key Assets

### Key capabilities and their locations

- **`types.ts`**: The primary file containing all application-specific TypeScript types and interfaces. This is manually maintained and includes:
  * `Context` - Request context object extended throughout middleware
  * `Page` - Page object with content, metadata, and rendering methods
  * `ExtendedRequest` - Express Request with custom properties
  * `PageFrontmatter` - Frontmatter schema type aligned with validation
  * `Site`, `Tree`, `SiteTree` - Site structure and navigation types
  * `Version`, `AllVersions` - Version-related types
  * Many more domain-specific types

- **`index.ts`**: Simple re-export module for backward compatibility. Imports should use `@/types` which resolves to this file.

- **`.d.ts` files**: TypeScript declaration files for third-party libraries that don't provide their own types. These allow TypeScript to type-check usage of these libraries throughout the codebase.

## Setup & Usage

### Importing types

Use the absolute import path with the `@/types` alias:

```typescript
import type { Context, Page, ExtendedRequest } from '@/types'
```

### Adding a new application type

1. Add the type definition to `types.ts`
2. Export it if it should be available to other subjects
3. Add JSDoc comments to explain complex types
4. Consider if the type should be co-located with a specific subject instead

### Adding a declaration file for a third-party library

1. Create a new `.d.ts` file named after the package (e.g., `package-name.d.ts`)
2. Declare the module and its exports with appropriate types
3. Use `any` sparingly, but it's acceptable when the library structure is truly dynamic
4. Add comments explaining why types are using `any` if necessary

Example:
```typescript
declare module 'some-package' {
  export function someFunction(param: string): void
  export interface SomeType {
    property: string
  }
}
```

## Data & External Dependencies

### Type sources
- **Frontmatter schema**: `PageFrontmatter` type is manually maintained to align with the AJV schema in `src/frame/lib/frontmatter.ts`
- **Third-party libraries**: Declaration files provide types for libraries without native TypeScript support
- **Domain models**: Types reflect the structure of content files, site tree, version data, etc.

### Dependencies
- **TypeScript compiler**: All types are processed during the TypeScript compilation step
- **Subject imports**: Types import from specific subjects (e.g., `@/landings/types`, `@/versions/lib/enterprise-server-releases.d`)
- **Express types**: `ExtendedRequest` extends Express's `Request` type

### Type consumers
Nearly every subject in `src/` imports types from this directory. Common consumers include:
- Middleware (frame, versions, languages, landings, etc.)
- Rendering logic (content-render, landings)
- Content linter rules
- API routes and scripts

## Cross-links & Ownership

### Related subjects
- **[`src/frame`](../frame/README.md)**: Defines frontmatter validation schema that aligns with `PageFrontmatter` type
- **[`src/content-render`](../content-render/README.md)**: Uses `Context`, `Page` types extensively for rendering
- **[`src/content-linter`](../content-linter/README.md)**: Uses declaration files for markdownlint libraries
- **All subjects**: Nearly every subject imports types from this directory

### Ownership
- **Team**: Docs Engineering

## Current State & Next Steps

### Known limitations
- **Manual maintenance**: `PageFrontmatter` type must be manually kept in sync with `src/frame/lib/frontmatter.ts` schema
  * We don't auto-generate from the schema because: (1) it's dynamically constructed with version-specific properties, (2) build tooling complexity, (3) manual control provides better documentation
- **Wide-reaching changes**: Modifications to core types like `Context` or `Page` affect many subjects
- **Third-party types**: Declaration files require updates when upgrading the corresponding packages

### Type coverage goals
- Continue adding declaration files as new third-party libraries are introduced
- Consider moving subject-specific types to their respective subject directories (e.g., journey types could move to `src/journeys/types.ts`)
- Improve JSDoc comments on complex types for better IDE experience

### Testing approach
- Types are validated during `npm run tsc` (TypeScript compilation)
- No runtime tests exist for types themselves
- Breaking type changes are caught by TypeScript errors in consuming code

### Contribution guidance
- **For new types**: Consider whether the type belongs here (shared across subjects) or in a specific subject directory
- **For type changes**: Search for usage across the codebase (`grep -r "TypeName" src/`) to assess impact
- **For declaration files**: Match the package name and version you're typing
- **Style**: Use `type` for simple aliases, `interface` for objects that may be extended

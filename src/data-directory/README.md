# Data directory

Purpose-built utilities, schemas, and workflows that power our Liquid `{% data %}` and `{% indented_data_reference %}` tags, reusable content, UI strings, and feature metadata. This subject focuses on how we read, validate, and serve files in `data/` across languages.

## Purpose & scope
- Provide a consistent API (`getDataByLanguage`, `getDeepDataByLanguage`) to load `data/` files for Liquid rendering and server contexts.
- Enforce schemas for critical data (features, variables, learning tracks, release notes, tables, glossaries, code languages, CTAs).
- Ship CLI and CI helpers that keep `data/` clean (orphaned feature detection, deleted-feature PR guardrails).
- Exclude: content authoring guidance (see `content/`), page routing (see `src/app`/`src/frame`), and general linter rules (see `src/content-linter`).

## Architecture & key assets
- `lib/get-data.ts`: translation-aware loader with memoized reads, forced-English exceptions, and UI data merging; used by Liquid tags and server contexts.
- `lib/data-directory.ts` + `lib/filename-to-key.ts`: generic walker that turns files into dotted-key objects with optional preprocessing.
- `lib/data-schemas/`: AJV schema registry that auto-discovers `data/tables/*.yml` schemas and registers other critical shapes (features, variables, learning tracks, release notes, glossaries, code languages, CTAs).
- Middleware: `middleware/data-tables.ts` caches table data into `req.context.tables` (English).
- Scripts: `scripts/find-orphaned-features/*` (detect/delete unused `data/features/*.yml`) and `scripts/deleted-features-pr-comment.ts` (warn on feature deletions in PRs).
- Tests: `tests/` cover schema validation, data loading, key normalization, and orphan detection fixtures.

## Data loading contracts
- `lib/get-data.ts`
  - `getDataByLanguage(dottedPath, langCode)`: Returns a single value (YAML/MD/variables/reusables/ui/glossaries/release-notes/product-examples).
  - `getDeepDataByLanguage(dottedPath, langCode)`: Returns nested objects for an entire subtree (e.g., `tables`, `features`).
  - Translation fallbacks: If a localized file is missing or unparsable, falls back to English. Certain files are forced-English (`ALWAYS_ENGLISH_YAML_FILES`, `ALWAYS_ENGLISH_MD_FILES`).
  - Memoization: Caches reads except in `NODE_ENV=development` to simplify local debugging.
- `lib/data-directory.ts`
  - Recursively walks a directory, filters by extensions (`.json`, `.md/.markdown`, `.yml`) and ignore patterns, and emits a dotted-key object using `filename-to-key`.
  - Optional `preprocess` hook for content transformation (used in tests/prior scripts).

## Schemas and validation
- Schema registry: `lib/data-schemas/index.ts` maps data paths to schema modules; auto-registers any `data/tables/*.yml` that has a matching `data-schemas/tables/{name}.ts`.
- Tests: `src/data-directory/tests/data-schemas.ts` loads schemas via AJV and asserts every registered file validates.
- Adding a schema:
  1. Create `src/data-directory/lib/data-schemas/<name>.ts` (or `tables/<table>.ts`).
  2. If non-table, add to `manualSchemas` in `data-schemas/index.ts`; table schemas are auto-detected.
  3. Run tests (see below).

## Middleware
- `middleware/data-tables.ts` populates `req.context.tables` with `getDeepDataByLanguage('tables', 'en')`. Intended for server/Express contexts where table data is needed without per-request file IO.

## Scripts & workflows
- `npm run find-orphaned-features -- --source-directory data/features --output orphans.json`
  - Scans pages, reusables, variables (all languages) for `{% ifversion %}` feature references and reports unused `data/features/*.yml`.
- `npm run find-orphaned-features delete -- orphans.json --max 10`
  - Deletes up to N orphaned feature files (English root) after manual review.
- `npm run deleted-features-pr-comment -- <owner> <repo> <base_sha> <head_sha>`
  - Generates Markdown warning if a PR removes or renames feature files; used in CI (requires `GITHUB_TOKEN`).

## Testing
- All tests: `npm test -- src/data-directory/tests`
- Targeted:
  - Schemas: `npm test -- src/data-directory/tests/data-schemas.ts`
  - Orphans: `npm test -- src/data-directory/tests/orphaned-features.ts`
  - Loader basics: `npm test -- src/data-directory/tests/get-data.ts`

## Data conventions and consumers
- File locations: Everything under `data/` (English and localized mirrors). Reusables/variables/ui are read via dotted paths (`reusables.foo.bar`, `variables.product.prodname_ghe_server`, `ui.pages.home`).
- Markdown in data: Frontmatter is stripped by `gray-matter`; content is trimmed.
- Downstream consumers:
  - Liquid tags: `content-render/liquid/data.ts`, `indented-data-reference.ts`
  - Content linter: `content-linter/lib/linting-rules/liquid-data-tags.ts`, `frontmatter-intro-links.ts`
  - Server: `app/lib/app-router-context.ts`, `app/lib/server-context-utils.ts`
  - Metrics/tests: `content-render/tests`, `content-linter/tests/site-data-references.ts`
- Translation notes:
  - Fallbacks ensure missing localized YAML/MD reads from English.
  - Specific files are forced-English to avoid corrupt translations (see constants in `get-data.ts`).

## Setup & usage tips
- Ensure `data/` exists relative to project root; schemas auto-scan `data/tables` at runtime.
- Set `DEBUG_JIT_DATA_READS=true` to log every on-disk read from the data loaders; useful alongside tests or local runs to trace which data files are touched.
- When adding a new data directory:
  - Prefer YAML for structured data; add schema if shape matters to correctness.
  - Add README under `data/<dir>/` when introducing new contracts.
  - Update `manualSchemas` if not a table.

## Ownership & escalation
- Primary: Docs Engineering.
- Content changes: Docs Content (docs-content).

## Current state & next steps
- Current state: KTLO; minimal changes expected. Update this README when touching data loaders, schemas, or scripts.
- Next steps: Keep the schema registry aligned with new data shapes and rerun `npm test -- src/data-directory/tests` when data contracts change.
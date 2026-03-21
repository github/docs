# GraphQL

The graphql subject handles GitHub's GraphQL API documentation, including schema synchronization, data generation, and documentation rendering. It fetches schema data from GitHub's GraphQL API and generates version-specific JSON files used to render the docs.

## Purpose & Scope

This subject is responsible for:
- Syncing GraphQL schema from GitHub's API
- Generating version-specific schema JSON files
- Managing GraphQL previews, upcoming changes, and changelog
- Middleware that injects GraphQL data into page context
- Rendering GraphQL reference documentation
- Validating GraphQL schema data structure

## Architecture & Key Assets

### Key capabilities and their locations

- **Schema synchronization** - `scripts/sync.ts` fetches schema from GitHub's GraphQL API
- **Data generation** - Generates version-specific JSON files in `data/VERSION/` directories (e.g., `data/ghec/schema.json`)
- **Validation** - `lib/validator.ts` validates schema structure
- **Data loading** - `lib/index.ts` provides functions to load GraphQL data in Next.js pages
- **Content rendering** - Markdown files in `content/graphql/` use Liquid to render documentation

## Setup & Usage

### Syncing GraphQL schema

Run the sync script to fetch latest schema:

```bash
npm run sync-graphql
```

This:
1. Fetches schema from GitHub's GraphQL API for each version
2. Generates `data/VERSION/schema.json` files (e.g., `data/ghec/schema.json`)
3. Builds `data/previews.json`, `data/upcoming-changes.json`, `data/changelog.json`

### Running tests

```bash
npm run test -- src/graphql/tests
```

### How rendering works

1. GraphQL data is loaded directly in Next.js pages using `getServerSideProps`
2. Functions from `lib/index.ts` like `getGraphqlSchema()` provide the data
3. Data includes:
   - Schema for current version
   - Previews for current version
   - Upcoming changes for current version
   - Changelog
4. Markdown files in `content/graphql/` use Liquid to loop over this data
5. Liquid calls HTML includes in `includes/` for rendering

## Data & External Dependencies

### Data inputs
- GitHub GraphQL API - Schema introspection queries
- `lib/non-schema-scalars.json` - Custom scalar types from graphql-ruby
- `lib/types.json` - High-level GraphQL types and kinds
- `lib/validator.json` - JSON schema for validation

### Dependencies
- GitHub GraphQL API access
- `graphql-ruby` library scalars
- JSON schema validator (AJV)
- `@/versions` - Version mapping for schema files

### Data outputs
- `data/schema-VERSION.json` - One file per version (ghec, ghes-3.11, etc.)
- `data/previews.json` - Preview features across versions
- `data/upcoming-changes.json` - Upcoming breaking changes
- `data/changelog.json` - GraphQL API changelog entries

### Generated files

All files in `data/` are generated and should not be manually edited:
- ✅ Edit: `lib/*.json`, `scripts/*.ts`
- ❌ Don't edit: `data/*.json` (regenerate with sync script)

## Cross-links & Ownership

### Related subjects
- [`src/rest`](../rest/README.md) - Similar pattern for REST API docs
- [`src/webhooks`](../webhooks/README.md) - Similar pattern for webhooks docs
- [`src/content-render`](../content-render/README.md) - Liquid rendering of GraphQL data
- Content files in `content/graphql/` - GraphQL documentation pages

### Internal documentation
- GitHub GraphQL API: https://docs.github.com/graphql
- graphql-ruby scalars: https://github.com/rmosolgo/graphql-ruby

## Current State & Next Steps

### Editable files

Human-editable configuration:
- `lib/validator.ts` - TypeScript file for validating schema in `tests/graphql.ts`
- `lib/non-schema-scalars.json` - Scalar types from graphql-ruby (not in core spec)
- `lib/types.json` - High-level GraphQL types and kinds

### Version-specific schemas

Schema files generated per version:
- `data/ghec/schema.json` - GitHub Enterprise Cloud
- `data/ghes-3.11/schema.json`, `data/ghes-3.10/schema.json`, etc. - GHES versions
- Older versions may be archived

### Content authoring

Writers can add content to Markdown files in `content/graphql/` alongside Liquid:
- Note that Markdown files exist for every URL in GraphQL docs
- Liquid loops over `context.graphql.*` properties
- Most rendering happens in `includes/` HTML files

### Known limitations
- Schema sync requires API access
- Generated files can be large (100KB+ per version)
- Changes to upstream schema require re-sync
- Validation schema must be kept in sync with expected structure

### Sync workflow

Automated sync (if configured):
- Scheduled workflow checks for schema updates
- Creates PR if changes detected
- Manual sync: `npm run sync-graphql`

### Adding new schema versions

When a new GHES version releases:
1. Update version list in sync script
2. Run `npm run sync-graphql`
3. Commit new `data/ghes-X.XX/schema.json` file
4. Update content if needed

### Troubleshooting

**Sync fails:**
- Check API access and authentication
- Verify version mappings are correct
- Check for schema validation errors

**Schema not loading:**
- Verify `data/VERSION/schema.json` exists (e.g., `data/ghec/schema.json`)
- Verify version detection logic

**Content not rendering:**
- Check Liquid syntax in `content/graphql/`
- Verify context properties are available
- Check includes in `includes/` directory


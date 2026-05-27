# Versions

The versions subject handles product versioning for GitHub Docs, including Free/Pro/Team (FPT), Enterprise Cloud (GHEC), and Enterprise Server (GHES). It provides version detection, resolution, feature flags, and version-aware content rendering.

## Purpose & Scope

This subject is responsible for:
- Defining all available product versions (plans and releases)
- Detecting current version from URL paths
- Providing version-aware Liquid conditionals (e.g., `{% if ghes %}`)
- Managing feature flags that vary by version
- Version resolution for content applicability
- Version picker UI component
- Deprecation banners for old versions

Related subjects:
- `src/archives/` - Handles archived versions of documentation
- `src/ghes-releases/` - Manages GHES release and deprecation processes

## Architecture & Key Assets

### Key capabilities and their locations

- `lib/all-versions.ts` - `allVersions` object: Defines all version plans (fpt, ghec, ghes) with releases
- `lib/enterprise-server-releases.ts` - GHES version data: supported, deprecated, latest releases
- `lib/get-applicable-versions.ts` - `getApplicableVersions()`: Determines which versions apply to content based on frontmatter
- `middleware/short-versions.ts` - Adds version shortcuts (e.g., `ghes`, `fpt`) to `req.context`
- `middleware/features.ts` - Loads feature flags from `data/features/` and adds to context
- `components/VersionPicker.tsx` - UI component for switching between versions

## Setup & Usage

### Version structure

Versions follow the format: `plan@release`
- FPT: `free-pro-team@latest` (stripped from URLs)
- GHEC: `enterprise-cloud@latest`
- GHES: `enterprise-server@3.11`, `enterprise-server@3.10`, etc.

### Using versions in Liquid

Middleware adds version shortcuts to context for use in Liquid templates:

```liquid
{% if fpt %}
This content only appears for Free/Pro/Team.
{% endif %}

{% if ghes %}
This content appears for all GHES versions.
{% endif %}

{% if ghes > 3.9 %}
This content appears for GHES 3.10 and later.
{% endif %}
```

### Feature flags

Feature flags in `data/features/*.yml` control content visibility:

```yaml
# data/features/my-feature.yml
versions:
  fpt: '*'
  ghec: '*'
  ghes: '>= 3.10'
```

In Liquid:
```liquid
{% if my-feature %}
This content only shows when my-feature is enabled.
{% endif %}
```

### Version frontmatter

Content files specify applicable versions in frontmatter:

```yaml
versions:
  fpt: '*'
  ghec: '*'
  ghes: '>= 3.8'
```

### Running tests

```bash
npm run test -- src/versions/tests
```

## Data & External Dependencies

### Data inputs
- `data/features/*.yml` - Feature flag definitions
- `lib/enterprise-server-releases.ts` - GHES version data
- Content frontmatter - `versions` field specifies applicable versions
- URL paths - Version extracted from path (e.g., `/enterprise-server@3.11/`)

### Dependencies
- [`@/frame`](../frame/README.md) - Path utilities for version extraction
- [`@/data-directory`](../data-directory/README.md) - Loads feature flag data
- [`@/archives`](../archives/README.md) - Archived version handling
- [`@/ghes-releases`](../ghes-releases/README.md) - GHES release management

### Data outputs
- `req.context.currentVersion` - String like `enterprise-server@3.11`
- `req.context.currentVersionObj` - Full version object with metadata
- `req.context[shortName]` - Boolean flags: `fpt`, `ghec`, `ghes`
- `req.context[featureName]` - Boolean flags for each feature
- `req.context.allVersions` - All available versions

## Cross-links & Ownership

### Related subjects
- [`src/archives`](../archives/README.md) - Handles archived/deprecated version proxying
- [`src/ghes-releases`](../ghes-releases/README.md) - GHES release notes and deprecation
- [`src/frame`](../frame/README.md) - Path utilities used for version detection
- [`src/redirects`](../redirects/README.md) - Version-aware redirects

### Ownership
- Team: Docs Engineering

## Current State & Next Steps

### Version fallback hierarchy

When no version in URL, fallback order: FPT → GHEC → GHES latest. Implemented in `lib/redirects/permalinks.ts`.

### GHES versioning

- Supported versions defined in `enterprise-server-releases.ts`
- New GHES releases added via scripts in `src/ghes-releases/scripts/`
- Deprecated versions archived via `src/archives/`

### Known limitations
- FPT version is stripped from URLs but exists internally
- Feature flag data loaded on every request (cached per version)
- Version comparison logic only supports GHES numbered releases
- REST API versions handled separately via config in `src/rest/lib/config.json`

### Adding a new GHES version

1. Update `src/versions/lib/enterprise-server-releases.ts`
2. Run GHES release scripts (see `src/ghes-releases/scripts/`)
3. Update REST API config if needed
4. Create release notes in `data/release-notes/`

### Deprecating a GHES version

1. Move version from `supported` to `deprecated` in `enterprise-server-releases.ts`
2. Run archive scripts to freeze content (see `src/archives/`)
3. Update redirects as needed


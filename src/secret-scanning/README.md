# Secret scanning

The secret-scanning subject automates the generation and maintenance of the "Supported secret scanning patterns" table on docs.github.com. It fetches data from upstream sources, transforms it, and renders it as a Liquid-powered Markdown table.

## Purpose & Scope

This subject is responsible for:
- Syncing secret scanning pattern data from upstream sources
- Storing pattern data in YAML files by version
- Middleware that injects data into the supported patterns page
- Rendering the patterns table with Liquid in Markdown
- Automated daily workflow to check for and update pattern changes

The table appears on: [Supported secret scanning patterns](https://docs.github.com/code-security/secret-scanning/introduction/supported-secret-scanning-patterns#supported-secrets)

## Architecture & Key Assets

### Key capabilities and their locations

- `middleware/secret-scanning.ts` - Middleware that loads YAML data and adds to `req.context.secretScanningData`
- `scripts/sync.ts` - Script that syncs pattern data from upstream sources and updates YAML files
- `lib/config.json` - Configuration specifying which page gets the data (`targetFilename`)
- `data/pattern-docs/*.yml` - YAML files containing pattern data per version

## Setup & Usage

### Daily automated sync

A GitHub Actions workflow runs daily to check for pattern updates:
1. Runs `npm run sync-secret-scanning`
2. If changes detected, creates a PR to update YAML files
3. Team reviews and merges PR

### Manual sync

To manually sync pattern data:

```bash
npm run sync-secret-scanning
```

This fetches latest pattern data and updates YAML files in `data/pattern-docs/`.

### How the table is rendered

1. Middleware checks if current page matches `targetFilename` from config
2. Loads appropriate YAML file based on version (FPT/GHEC/GHES)
3. Adds data to `req.context.secretScanningData`
4. Markdown uses Liquid to render table rows

Example Markdown with Liquid:

```markdown
{% ifversion fpt %}

| Provider | Token | Partner | User | Push protection | Base64 |
|----|:----|:----:|:----:|:----:|
{%- for entry in secretScanningData %}
| {{ entry.provider }} | {{ entry.secretType }} | {% if entry.isPublic %}{% octicon "check" %}{% else %}{% octicon "x" %}{% endif %} | ...
{%- endfor %}
```

### Data structure

Each pattern entry includes:
- `provider` - Service provider name
- `secretType` - Type of secret/token
- `isPublic` - Available on public repos
- `isPrivateWithGhas` - Available on private repos with GHAS
- `hasPushProtection` - Has push protection enabled
- `hasValidityCheck` - Has validity checking
- `base64Supported` - Supports base64-encoded secrets

## Data & External Dependencies

### Data inputs
- Upstream secret scanning pattern sources (internal APIs)
- Existing YAML files in `data/pattern-docs/`
- Version information from `@/versions/lib/all-versions`

### Dependencies
- `js-yaml` - YAML parsing and generation
- `@/content-render` - Liquid rendering for table
- `@/versions` - Version detection and mapping
- GitHub Actions workflow for automated sync

### Data outputs
- Updated YAML files in `data/pattern-docs/`
- `req.context.secretScanningData` - Array of pattern objects
- Rendered Markdown table on docs page

## Cross-links & Ownership

### Related subjects
- [`src/content-render`](../content-render/README.md) - Liquid rendering for table
- [`src/versions`](../versions/README.md) - Version detection for loading correct data file
- Content page: `content/code-security/secret-scanning/introduction/supported-secret-scanning-patterns.md`

### Internal documentation
For upstream data source details and API access, see internal Docs Engineering documentation.

### Ownership
- Team: Docs Engineering
- Content: Code Security team

## Current State & Next Steps

### Automated workflow

GitHub Actions workflow (`.github/workflows/sync-secret-scanning.yml`) runs daily:
- Checks for pattern updates
- Creates PR if changes found
- Runs `npm run sync-secret-scanning`

### Version-specific data

Different data files per version:
- `dotcom.yml` - Free, Pro, Team (FPT)
- `ghec.yml` - GitHub Enterprise Cloud
- `ghes-{version}.yml` - GitHub Enterprise Server versions

Middleware automatically selects correct file based on `req.context.currentVersion`.

### Known limitations
- Manual review required for auto-generated PRs
- Pattern data schema must match between upstream and our YAML
- Changes to upstream API may break sync script
- Table only appears on one specific page (configured in `config.json`)

### Expanding to more pages

To display secret scanning data on additional pages:
1. Update `config.json` with new target filenames (as array)
2. Update middleware to handle multiple pages
3. Add Liquid table rendering to those pages

### Troubleshooting sync issues

**Sync fails:**
- Check upstream API access and credentials
- Verify YAML file permissions
- Check for schema changes in upstream data

**Table not rendering:**
- Verify page path matches `targetFilename` in `config.json`
- Check that `secretScanningData` is in context
- Verify Liquid syntax in Markdown

**Wrong data version:**
- Check version detection logic in middleware
- Verify correct YAML file exists for version
- Check version mapping in middleware


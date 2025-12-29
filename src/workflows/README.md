# Workflows

The workflows subject contains automation scripts that support GitHub Actions workflows, CLI tools, and repository automation. These scripts handle tasks like PR labeling, cache purging, content change analysis, and repository maintenance.

## Purpose & Scope

This subject is responsible for:
- PR and issue automation (labeling, metadata, reviewer assignment)
- Cache management (Fastly edge cache purging)
- Content validation and reporting (content type checking, change tables)
- Repository maintenance (orphan file cleanup, syncing)
- Husky git hooks (pre-commit checks)
- GitHub Actions support scripts

Note: This directory does not contain a `scripts/` folder since every file here would belong in `scripts/`. Files are organized flat at the top level with supporting utilities in `lib/`.

## Setup & Usage

### Running workflow scripts locally

Scripts are registered in `package.json`:

| Script | Command | Purpose |
|--------|---------|---------|
| content-changes-table-comment | `npm run content-changes-table-comment` | Analyzes content changes in PRs |
| check-content-type | `npm run check-content-type` | Validates content types |
| delete-orphan-translation-files | `npm run delete-orphan-translation-files` | Removes orphaned translations |
| enable-automerge | `npm run enable-automerge` | Enables PR automerge |
| purge-fastly-edge-cache | `npm run purge-fastly-edge-cache` | Purges Fastly CDN cache |
| prevent-pushes-to-main | (Husky hook) | Prevents pushing to main |

### Running tests

```bash
npm run test -- src/workflows/tests
```

### GitHub Actions integration

Many scripts are called from GitHub Actions workflows in `.github/workflows/`. They typically:
1. Run automatically on PR events, pushes, or schedules
2. Use GitHub Actions context (`@actions/github`, `@actions/core`)
3. Require `GITHUB_TOKEN` environment variable
4. Post results as PR comments or update PR/issue metadata

## Data & External Dependencies

### Data inputs
- GitHub API: PR data, issue data, file changes, commit history
- Git repository: File contents, frontmatter, diff information
- Environment variables: `GITHUB_TOKEN`, `FASTLY_TOKEN`, `BASE_SHA`, `HEAD_SHA`

### Dependencies
- `@actions/github`, `@actions/core` - GitHub Actions SDK
- `@octokit/rest` - GitHub API client
- Fastly API - For cache purging
- Various internal subjects for content parsing and validation

### Data outputs
- PR/issue comments - Content change summaries, validation results
- PR/issue labels - Applied via GitHub API
- Cache purges - Fastly CDN invalidations
- Exit codes - Success/failure for CI/CD

## Cross-links & Ownership

### Related subjects
- [`src/frame`](../frame/README.md) - Frontmatter reading and path utilities
- [`src/versions`](../versions/README.md) - Version detection for content changes
- [`src/content-linter`](../content-linter/README.md) - Content validation
- [`src/git`](../git/README.md) - Git utilities (if exists)
- GitHub Actions workflows in `.github/workflows/` - Primary consumers

### Ownership
- Team: Docs Engineering

## Current State & Next Steps

### Known limitations
- Some scripts require specific environment variables and can't easily run locally without setup
- Error handling varies across scripts
- Documentation for individual scripts is sometimes inline-only

### Testing guidance
- Most workflow scripts have limited automated test coverage
- Test locally before deploying to Actions when possible
- Use CLI variants (e.g., `content-changes-table-comment-cli.ts`) for local testing

### Adding new workflow scripts
When adding a new script:
1. Create the `.ts` file in `src/workflows/`
2. Add to `package.json` scripts if it should be runnable via npm
3. Document any required environment variables
4. Add to `.github/workflows/` if it should run automatically
5. Consider creating a `-cli.ts` variant for local testing
6. Update this README if the script introduces new patterns

### Planned work
- Standardize error handling and logging across scripts


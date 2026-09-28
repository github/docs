# Links

This module contains the tooling and components responsible for link integrity, user experience (hover previews), and maintenance across the GitHub Docs site.

## Purpose & Scope

The `src/links` directory manages:

- **Link Validation**: Ensuring all internal and external links in the documentation are valid.
- **Link Maintenance**: Automated tools to update links when pages are moved or renamed.
- **User Experience**: Components like "Hover Cards" that provide context when users hover over internal links.
- **Compliance**: Checking for specific link patterns (e.g., `github/github` links).

## Architecture

### Components (`src/links/components`)

- **`LinkPreviewPopover.tsx`**: A React component that renders a preview card when a user hovers over a link. It handles:
  - **Delay Logic**: Prevents the popover from appearing during accidental mouse-overs.
  - **Positioning**: Ensures the popover appears near the link without going off-screen.

### Libraries (`src/links/lib`)

- **`extract-links.ts`**: Pulls links out of content files. Shared by all the checkers.
- **`page-anchors.ts`** and **`heading-anchors.ts`**: Compute the anchors a page exposes, so `#fragment` links can be validated. `heading-anchors.ts` strips inline Markdown from a heading before computing its slug.
- **`cross-page-anchors.ts`**: Tracks `/some/path#fragment` links found while scanning, so they can be resolved once every page's anchors are known.
- **`validate-docs-urls.ts`**: Validates URLs that point at docs.github.com.
- **`validate-redirected-fragment.ts`**: When `update-internal-links` rewrites a link's path via a redirect, checks that the original fragment still exists at the new destination.
- **`link-report.ts`**: Builds the reports the checkers post to pull requests and issues.
- **`update-internal-links.ts`**: The core logic for refactoring links. It parses Markdown/Liquid, identifies links, and updates their `href` or title based on a provided map of changes. It handles:
  - Stripping Liquid conditionals to find the "pure" link.
  - Updating frontmatter links.
  - Handling anchors and query parameters.
- **`excluded-links.ts`** and **`excluded-links.yml`**: Configuration for links that should be ignored by validators (e.g., localhost links, specific example domains).

### Scripts (`src/links/scripts`)

- **`check-links-pr.ts`**: Fast validation of internal links in changed files. Built to finish in under 10 minutes on a typical PR.
- **`check-links-internal.ts`**: Comprehensive check of all internal links across every version and language. Runs on a schedule.
- **`check-links-external.ts`**: Validates external URLs, with aggressive caching to keep the cost down. Runs on a schedule.
- **`check-github-github-links.ts`**: Ensures that we don't accidentally link to private `github/github` URLs in public documentation.
- **`update-internal-links.ts`**: A CLI wrapper around the library function to perform bulk updates on the content files.

## Setup & Usage

### Validating Links

Which command you want depends on what you are checking.

Internal links in the files you changed:

```bash
npm run check-links-pr
npm run check-links-pr -- --files content/actions/index.md content/repos/index.md
```

All internal links, across all versions and languages. This one is slow:

```bash
npm run check-links-internal
npm run check-links-internal -- --version free-pro-team@latest --language en
```

External links:

```bash
npm run check-links-external
npm run check-links-external -- --max 100
```

Links into `github/github`:

```bash
npm run check-github-github-links
```

### Updating Links

If you have moved content or changed titles and need to update references:

```bash
npm run update-internal-links
```

This script typically relies on the state of the `content` directory to determine what needs updating.

## Automation

| Workflow                       | Runs               |
| ------------------------------ | ------------------ |
| `link-check-on-pr.yml`         | Every pull request |
| `link-check-internal.yml`      | Mondays, 16:20 UTC |
| `link-check-external.yml`      | Mondays, 16:20 UTC |
| `link-check-github-github.yml` | Mondays, 16:20 UTC |

See [`lib/README.md`](lib/README.md) for how to investigate and triage a broken link report.

## Dependencies

- **`cheerio`**: Used by `validate-docs-urls.ts` to parse HTML.
- **`src/frame`**: Uses `cookies` and other utilities for request context.

## Ownership

- `#technical-content`

## Current State & Known Issues

- **Cost of a full check**: `check-links-internal` walks every page in every version and language, so it is scheduled rather than run per PR. `check-links-pr` exists to give fast feedback on just the changed files.
- **False Positives**: External link checking can be flaky due to temporary network issues or anti-bot protections on target sites. The system uses caching and exclusions to reduce noise.
- **Liquid Complexity**: `update-internal-links` has to use regex and heuristics to parse Markdown mixed with Liquid, which is inherently fragile compared to a full AST parser, but necessary to preserve code formatting.
- **Cross-version links**: A link is only valid if the target page exists in every version the source page renders in. Linking from a page with `ghes` to a page without it produces a render error, not a soft 404.

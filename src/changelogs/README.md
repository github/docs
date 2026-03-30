# Changelogs (`src/changelogs`)

This directory contains the logic for fetching, parsing, and caching RSS feeds from the GitHub Blog to display changelog items on documentation pages.

## Purpose & Scope

The primary purpose is to provide a "What's New" section on specific documentation pages by pulling the latest updates from relevant GitHub Blog RSS feeds. It handles fetching RSS feeds, caching responses to prevent rate limiting, and parsing feed items for display.

## Architecture & Key Assets

### Core Logic

`lib/changelog.ts` is the main module. It uses `rss-parser` to fetch feeds and implements a two-layer caching strategy:

1. Memory Cache: `globalCache` Map for fast access within the process.
2. Disk Cache: Writes JSON files to `os.tmpdir()` (or a custom path) to persist across server restarts in development/test environments.

`getChangelogItems` is the public API that returns a list of formatted changelog items.

### Consumers

The middleware `src/frame/middleware/context/whats-new-changelog.ts` uses this library to inject changelog data into the page context (`req.context.whatsNewChangelog`) based on page frontmatter.

Currently, the following product landing pages display a changelog:

- GitHub Actions (`content/actions/index.md`)
- GitHub Education (`content/education/index.md`)
- GitHub Enterprise (`content/admin/index.md`)
- GitHub Packages (`content/packages/index.md`)

## Setup & Usage

### Enabling on a Page

To display a changelog on a documentation page, add the `changelog` property to the page's frontmatter:

```yaml
changelog:
  label: packages
  prefix: "Packages: "
```

- `label`: Determines the feed URL (e.g., `packages` -> `https://github.blog/changelog/label/packages`).
- `prefix`: (Optional) A string to strip from the beginning of feed item titles.
- `versions`: (Optional) Specifies which versions of the docs should display the changelog.

### Environment Variables

- `CHANGELOG_DISABLED`: Set to `true` to disable fetching (returns undefined). This is often necessary in tests where external network requests are flaky or blocked.
- `CHANGELOG_CACHE_FILE_PATH`: (Optional) Override the default disk cache location.

## Data & External Dependencies

- Source: [GitHub Blog](https://github.blog) RSS feeds (e.g., `https://github.blog/changelog/label/packages/feed`).
- Dependencies: `rss-parser` is used to parse the XML RSS feeds.

## Cross-links & Ownership

- **Owner**: Docs Engineering owns this code. Marketing Engineering owns the GitHub Blog and its feeds.
- **Related Directories**:
  - `src/frame/middleware/context`: Contains the middleware that invokes this logic.
  - `src/changelogs/tests`: Contains tests for this module.

## Current State & Next Steps

- **Current State**: The system is stable and considered KTLO (Keep the Lights On). It fetches the latest 3 items from the specified feed.
- **Next Steps**: None planned.

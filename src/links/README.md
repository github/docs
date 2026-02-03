# Links

This module contains the tooling and components responsible for link integrity, user experience (hover previews), and maintenance across the GitHub Docs site.

## Purpose & Scope

The `src/links` directory manages:
- **Link Validation**: Ensuring all internal and external links in the documentation are valid.
- **Link Maintenance**: Automated tools to update links when pages are moved or renamed.
- **User Experience**: Components like "Hover Cards" that provide context when users hover over internal links.
- **Compliance**: Checking for specific link patterns (e.g., `github/github` links).

## Architecture

### Components

- **`LinkPreviewPopover.tsx`**: A React component that renders a preview card when a user hovers over a link. It handles:
  - **Delay Logic**: Prevents the popover from appearing during accidental mouse-overs.
  - **Positioning**: Ensures the popover appears near the link without going off-screen.

### Libraries (`src/links/lib`)

- **`update-internal-links.ts`**: The core logic for refactoring links. It parses Markdown/Liquid, identifies links, and updates their `href` or title based on a provided map of changes. It handles:
  - Stripping Liquid conditionals to find the "pure" link.
  - Updating frontmatter links.
  - Handling anchors and query parameters.
- **`excluded-links.ts`**: Configuration for links that should be ignored by validators (e.g., localhost links, specific example domains).

### Scripts (`src/links/scripts`)

- **`rendered-content-link-checker.ts`**: A comprehensive CLI tool that:
  - Renders content pages to HTML.
  - Parses the HTML to find all `<a>` and `<img>` tags.
  - Validates internal links (checking for 404s, broken anchors).
  - Validates external links (with caching and retry logic).
  - Reports flaws and can comment directly on GitHub Pull Requests.
- **`check-github-github-links.ts`**: Ensures that we don't accidentally link to private `github/github` URLs in public documentation.
- **`update-internal-links.ts`**: A CLI wrapper around the library function to perform bulk updates on the content files.

## Setup & Usage

### Validating Links

To run the link checker locally:

```bash
npm run rendered-content-link-checker-cli
```

Options:
- `--level <all|critical|warning>`: Set the reporting level.
- `--check-external-links`: Check external links (slower).
- `--verbose`: Show detailed output.

### Updating Links

If you have moved content or changed titles and need to update references:

```bash
npm run update-internal-links
```

This script typically relies on the state of the `content` directory to determine what needs updating.

## Dependencies

- **`cheerio`**: Used by the link checker to parse rendered HTML.
- **`src/content-render`**: The link checker needs to render pages to see the final HTML output.
- **`src/frame`**: Uses `cookies` and other utilities for request context.

## Ownership

- **Team**: `@github/docs-engineering`

## Current State & Known Issues

- **Performance**: The `rendered-content-link-checker` is resource-intensive because it renders pages. It uses concurrency limits and caching (especially for external links) to mitigate this.
- **False Positives**: External link checking can be flaky due to temporary network issues or anti-bot protections on target sites. The system uses a "retry and cache" strategy to reduce noise.
- **Liquid Complexity**: `update-internal-links` has to use regex and heuristics to parse Markdown mixed with Liquid, which is inherently fragile compared to a full AST parser, but necessary to preserve code formatting.
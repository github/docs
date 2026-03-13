# Release Notes

This module manages the fetching, processing, and rendering of GitHub Enterprise Server (GHES) release notes. These notes are displayed on dedicated pages (e.g., `/en/enterprise-server@3.19/admin/release-notes`) and list the features, bug fixes, and known issues for each patch release.

## Purpose & Scope

The primary goal is to:
- **Parse Release Data**: Read structured YAML data containing release notes.
- **Format & Sort**: Organize notes by version (major.minor) and patch level.
- **Render Content**: Process Markdown and Liquid within the notes.
- **Contextualize**: Inject the processed notes into the page context for rendering by React components.

## Architecture

### Data Source

Release notes are stored in the `data/release-notes/enterprise-server` directory.
- **Origin**: The content is sourced externally and synced to this repository.
- **Format**: YAML files organized by version.
- **Structure**: Each file contains entries for patch releases, including sections for "Features", "Bugs", "Security", etc.

### Middleware

The core logic resides in `src/release-notes/middleware/ghes-release-notes.ts`.
- **Route Detection**: It activates only for GHES release notes pages or the Admin landing page.
- **Data Retrieval**: Fetches raw data using `getReleaseNotes`.
- **Forced English**: Currently, it forces the content language to English (`en`) during rendering. This is a workaround because the source Markdown often lacks Liquid variables for product names, leading to undesirable translations of proper nouns (e.g., "GitHub Copilot" becoming translated literally).
- **Rendering**: Uses `renderPatchNotes` to process the Markdown/Liquid content of each note.

### Library

`src/release-notes/lib/release-notes-utils.ts` provides helper functions:
- **`formatReleases`**: Sorts releases and patches semantically (using `semver`). It transforms the raw data into a structured array suitable for the UI.
- **`renderPatchNotes`**: Iterates through sections (features, bugs, etc.) and renders the content strings.

### Components

The frontend rendering is handled by React components in `src/release-notes/components`:
- **`GHESReleaseNotes.tsx`**: The main container.
- **`PatchNotes.tsx`**: Renders the details of a specific patch.

## Maintenance

### Sourcing

Release notes are received from an external source. **Do not manually create or edit release note files in this repository** unless specifically instructed to do so by the release process or for testing purposes.

The files in `data/release-notes` are the destination for this external data.

### URL Structure

- **Page**: `/en/enterprise-server@<version>/admin/release-notes`
- **Anchor**: `#3.19.1` (Links to specific patch notes)

## Dependencies

- **`semver`**: Used for sorting and comparing version strings.
- **`src/versions`**: Used to determine supported GHES versions (`latestStable`, `all`).
- **`src/content-render`**: Used to render the Markdown content within the notes.

## Ownership

- **Team**: `@github/docs-engineering`
- **Content Owners**: The Writers and Release Managers responsible for the GHES release process.

## Current State & Known Issues

- **Translation Workaround**: As mentioned, we currently force English rendering for release notes to avoid "over-translation" of product names. This is a known limitation until the source data is updated to use proper Liquid variables.
- **Legacy Redirects**: The middleware handles redirects for very old versions (pre-2.20) to `enterprise.github.com`.
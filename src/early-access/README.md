# Early Access

The Early Access module enables the GitHub Docs team to publish documentation for features that are in limited access (beta, technical preview, etc.) without exposing the content in the public `github/docs` repository.

## Purpose & Scope

This system allows for:
- **Private Content Hosting**: Storing sensitive or unreleased documentation in a separate, private repository (`github/docs-early-access`).
- **Seamless Integration**: Merging this private content into the main site build so it appears native to the user (e.g., under `/en/early-access`).
- **Access Control**: Hiding these pages from public navigation and search engines, making them accessible only via direct links or specific "Early Access" index pages.

## Architecture

### Content Storage

Early access content lives in a separate private repository: `github/docs-early-access`.
- **Structure**: It mirrors the main repo's structure (`content/`, `data/`, `assets/`).
- **Integration**: During the build process (or local development), files from the private repo are copied or symlinked into the main `docs-internal` directory.

### Middleware

The logic for serving and listing these pages is handled in `src/early-access/middleware/early-access-links.ts`.
- **`earlyAccessContext`**: This middleware runs on requests to `/early-access`. It:
  - Checks if the user is on an early access path.
  - Retrieves a list of hidden pages whose path starts with `early-access`.
  - Injects these links into the rendering context (`req.context.earlyAccessPageLinks`), allowing index pages to dynamically list available early access content.

### Scripts

A suite of scripts in `src/early-access/scripts` manages the workflow:
- **`clone-locally`**: Clones the private `docs-early-access` repo for local development.
- **`symlink-from-local-repo.ts`**: Symlinks the cloned content into the main `content/` and `assets/` directories so the Next.js server can see them.
- **`merge-early-access.sh`**: Used in CI/CD to physically move files from the checked-out private repo into the build directory.
- **`update-data-and-image-paths.ts`**: A utility to fix up paths when moving content between the main repo and early access.

## Setup & Usage

### Local Development

To work on Early Access content locally:

1. **Clone the Repo**:
   ```bash
   npm run clone-early-access
   ```
   This clones `github/docs-early-access` into a sibling directory.

2. **Symlink Content**:
   ```bash
   npm run symlink-from-local-repo
   ```
   This links the content into `docs-internal`.

3. **Run the Server**:
   ```bash
   npm start
   ```
   You can now access pages at `http://localhost:4000/en/early-access`.

### Adding New Content

1. Create markdown files in the `docs-early-access` repo.
2. Ensure the frontmatter includes `hidden: true` to prevent it from appearing in the main sidebar navigation (unless specifically desired).
3. Use the `early-access` directory prefix.

## Dependencies

- **`github/docs-early-access`**: The private repository containing the actual content.
- **CI/CD Workflows**: The deployment process must have access to the private repo to merge the content before building.

## Ownership

- **Team**: `@github/docs-engineering`
- **Content Owners**: The Writers and Product Managers responsible for the specific early access features.

## Current State & Known Issues

- **"Hidden" but Public**: While the source is private, once deployed to `docs.github.com`, the pages are technically public if you know the URL. They are "security through obscurity" (hidden from nav/search), not authenticated.
- **Build Complexity**: The merging process adds complexity to the build pipeline and can sometimes cause confusion with path resolution or asset loading if files are moved incorrectly.
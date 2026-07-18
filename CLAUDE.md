# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this repository is

This is the source for [docs.github.com](https://docs.github.com) — a Next.js/Express application that renders Markdown content (with Liquid templating and versioning) into GitHub's product documentation site. The vast majority of contributions are content changes (Markdown in `content/`); application code (Node.js/Express/React/Next.js) is a smaller, separate concern.

Note: GitHub's Docs team writes pre-production content in a private repo (`docs-internal`) that syncs with this public repo, so some workflows referenced in docs (e.g. Early Access) assume that private counterpart.

## Commands

```sh
npm ci                # install deps (run once per pulled branch)
npm ci --include=optional   # also installs test-only deps like puppeteer (needed to run full test suite locally)
npm run build          # next build — creates static assets (run once per pulled branch, and again if tests fail complaining about missing production build)
npm start              # dev server at localhost:4000, only 'en' and 'ja' enabled by default (NODE_ENV=development)
npm run debug           # dev server with --inspect for VS Code's Node debugger

npm test                             # run full jest suite
npm test -- <TEST_NAME>              # run tests matching a filename/partial filename/path
NODE_OPTIONS=--experimental-vm-modules npx jest tests/unit   # run a specific test directory directly
npm run test-watch                   # watch mode with coverage

npm run lint            # eslint on **/*.{js,mjs,ts,tsx}
npm run tsc             # typescript check (tsc --noEmit)
npm run prettier        # auto-format ts/tsx/js/mjs/scss/yml/yaml
npm run prettier-check  # check formatting without writing
```

- Node version is pinned to **16.x** (see `.node-version` / `engines` in `package.json`).
- To enable more languages locally, temporarily edit `ENABLED_LANGUAGES` in the `start` script in `package.json` (language codes defined in `lib/languages.js`).
- Visit `localhost:4000/dev-toc` while the dev server is running to see the full site table of contents (internal-only route, not on production).
- Git LFS is required (`pre-push`/`post-checkout`/`post-merge` husky hooks call into `git-lfs`).
- `husky` pre-commit hook runs `script/prevent-translation-commits.js` (blocks commits that touch `translations/`, since those are Crowdin-managed) and `lint-staged` (eslint --fix + prettier on staged files).
- `script/` follows the ["Scripts to Rule Them All"](https://githubengineering.com/scripts-to-rule-them-all/) pattern: `script/bootstrap` = install, `script/server` = start dev server, `script/test` = run tests. Prefer writing new scripts in JavaScript over Bash (repo is developed cross-platform, including Windows).

## Architecture

### Request flow

`server.mjs` boots an Express app (`lib/app.js`) that composes middleware from `middleware/index.js` in a specific, order-sensitive pipeline: language detection → request `context` building → redirects → `find-page` (resolves URL to a content file) → Next.js page rendering. Two middleware subdirectories matter:
- `middleware/contextualizers/` — populate `req.context` (the object templates/pages render from).
- `middleware/redirects/` — handle the various redirect mechanisms (external sites, language-code redirects, `redirect_from` frontmatter, etc).

Pages live under `pages/[versionId]/...` using Next.js file-system routing; most product content is served through the catch-all `pages/[versionId]/[productId]/[...restPage].tsx`, with a few products (REST, GraphQL, Admin release notes) having dedicated page files because they need custom rendering.

### Content model (the part contributors touch most)

- **`content/`** — all English Markdown source, organized by product/category. Every Markdown file has YAML frontmatter validated against a schema in `lib/frontmatter.js` (see `contributing/content-markup-reference.md` for the full field reference). Key frontmatter:
  - `versions` (required on every page) — which products/releases (`fpt`, `ghes`, `ghae`, etc., see `lib/all-versions.js`) the page applies to. Drives both routing and in-page Liquid conditionals.
  - `redirect_from` — old URLs that should redirect to this page.
  - `children` (required on `index.md`) — the site only knows about pages listed in some ancestor's `children`; anything not reachable via `children` 404s. `childGroups` is additionally required on the homepage `index.md`.
  - Filenames must be a kebab-case match of `title` (enforced by tests) unless `allowTitleToDifferFromFilename: true` is set.
- **`data/`** — YAML/Markdown exposed to templates via the `{% data %}` Liquid tag. Subdirectories: `reusables/` (long reusable text blocks, one per Markdown file), `variables/` (short reusable strings), `features/` (feature-based versioning), `glossaries/`, `learning-tracks/`, `graphql/` (schema synced from `github/github`), `webhooks/` (payload JSON), `release-notes/`. Most YAML/Markdown under `data/` and `content/` is translated via Crowdin by default.
- **`includes/`** — Liquid include templates (`.html`), notably `includes/liquid-tags/` for custom tags.
- **Rendering pipeline** — `lib/render-content/` turns Markdown + Liquid + context into HTML, built on `remark`/`unified` with custom plugins in `lib/render-content/plugins/` (link rewriting per language/version, asset path rewriting, code block headers, etc).
- **Versioning happens at two layers**: frontmatter `versions` (page-level availability) and inline Liquid conditionals (`{% ifversion %}` etc., can appear in `content`, `data`, and `includes`) for version-specific content within a single page. See `contributing/liquid-helpers.md` and `contributing/permalinks.md`.
- **Custom Markdown extensions**: callout tags (`{% note %}`/`{% warning %}`), OS tags (`{% mac %}`/`{% windows %}`/`{% linux %}`), tool tags (`{% webui %}`/`{% cli %}`/`{% desktop %}`/`{% curl %}`/`{% codespaces %}`/`{% vscode %}`/`{% importer_cli %}`/`{% graphql %}`), Octicons (`{% octicon "name" %}`) — see `contributing/content-markup-reference.md`.
- **Local links** must start with a product ID (e.g. `/actions`); image paths must start with `/assets`. These get rewritten server-side per language/version (`lib/render-content/plugins/rewrite-local-links.js`). To stop a link from being enterprise-ified, use raw HTML with `class="dotcom-only"`.

### Translations

`translations/<lang>/` mirrors `content/` and `data/` per locale (currently `es-ES`, `ja-JP`, `pt-BR`, `zh-CN`), synced via Crowdin. **Never hand-edit files under `translations/`** — the pre-commit hook (`script/prevent-translation-commits.js`) blocks this by default; it's only overridable via `ALLOW_TRANSLATION_COMMITS` for the sync tooling itself.

### REST/GraphQL/webhook docs

Reference docs for REST, GraphQL, and webhooks are largely generated/synced rather than hand-authored:
- REST: `script/rest/update-files.js` pulls OpenAPI schemas from `github/github`, dereferences, and decorates them; served via `pages/[versionId]/rest/`.
- GraphQL: `script/graphql/update-files.js` keeps `data/graphql/` in sync with `github/github`'s schema.
- Webhooks: JSON payloads live in `data/webhooks/`.
Avoid hand-editing generated output in these areas; change the source script/schema instead.

### Components

`components/` holds React components rendered via Next.js (server or client). `pages/` is the entry point — file-system routing matches a URL to a page component, which composes components from `components/`. This area is explicitly noted as a work in progress in `components/README.md`, so expect some inconsistency.

## Testing conventions

- Tests use Jest and live under `tests/` (`tests/unit`, `tests/content`, `tests/rendering`, `tests/routing`, `tests/graphql`, `tests/javascripts`, `tests/browser`, `tests/linting`, `tests/meta`, `tests/translations`).
- `tests/linting/lint-files.js` is the content linter — validates frontmatter schema, Markdown structure, filename/title consistency, link/reusable/variable usage, etc. across every content file. This is usually the relevant test when a content change fails CI.
- Content-focused tests are often slow given the size of `content/`; scope test runs with `npm test -- <TEST_NAME>` rather than always running the full suite.

## Repo-specific gotchas

- Don't create new abstractions/refactors for docs content changes — content PRs should stay scoped to the Markdown/data being changed.
- `main` is protected; `script/prevent-pushes-to-main.js` (pre-push hook) blocks direct pushes to `main`.
- When adding a new article, the filename must kebab-case-match the `title` frontmatter, or a test will fail.
- Windows contributors: use `\r?\n` instead of `\n` in regexes, prefer `path.posix`/the `slash` module for forward-slash paths, and prefer JS scripts over Bash — see the Windows section of `CONTRIBUTING.md`.

## Subdirectory READMEs

Many directories have their own README with more detail; consult them before making non-trivial changes in that area: `content/README.md`, `content/graphql/README.md`, `content/rest/README.md`, `contributing/README.md`, `data/README.md`, `data/reusables/README.md`, `data/variables/README.md`, `includes/README.md`, `includes/liquid-tags/README.md`, `components/README.md`, `lib/liquid-tags/README.md`, `lib/render-content/README.md`, `middleware/README.md`, `script/README.md`, `stylesheets/README.md`, `tests/README.md`.

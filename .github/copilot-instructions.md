# Copilot Instructions for AI Coding Agents

This guide provides essential knowledge for AI agents working in the GitHub Docs codebase. Follow these conventions and workflows to be immediately productive.

## Architecture Overview
- **Monorepo structure**: Contains Markdown content, custom site code, data, and reusable templates for [docs.github.com].
- **Major directories**:
  - `content/`: All English Markdown documentation. Uses YAML frontmatter for metadata (see below).
  - `components/`: React components for site UI.
  - `data/`: YAML/Markdown files for variables, reusables, glossaries, and learning tracks. Accessible via `{% data ... %}` in content.
  - `includes/`: HTML partials ("includes") for layouts/pages, injected via `{% include ... %}`.
  - `lib/`: Site logic, custom Liquid tags, and rendering code.
  - `contributing/`: Contributor guides, markup/style references, and workflow docs.

## Content Authoring Patterns
- **YAML frontmatter**: Each Markdown file in `content/` starts with frontmatter. Key fields:
  - `versions`: Controls product/version visibility (see `contributing/liquid-helpers.md`).
  - `permissions`, `redirect_from`, `title`, `intro`, etc. (see `content/README.md`).
- **Liquid tags**: Use `{% note %}...{% endnote %}` for callouts, `{% ifversion ... %}` for versioned content, and `{% data ... %}` for variables/reusables.
- **Reusables/Variables**: Reference long strings from `data/reusables/` and short strings from `data/variables/` using `{% data ... %}`.
- **Custom markup**: See `contributing/content-markup-reference.md` for supported tags and syntax.

## Developer Workflows
- **Local development**:
  - Requires Node.js v16.
  - Install dependencies: `npm ci`
  - Build static assets: `npm run build`
  - Start server: `npm start` (serves at http://localhost:4000)
- **Debugging**: VS Code Node Debugger is pre-configured.
- **Testing**: See `jest.config.js` and `tests/` for test setup.
- **Search**: Powered by Algolia (see `contributing/search.md`).
- **Versioning**: Managed via Liquid tags and frontmatter (see `contributing/liquid-helpers.md`).

## Project-Specific Conventions
- **Markdown**: Use GitHub Flavored Markdown. Syntax highlighting for shell commands uses triple backticks + `shell`.
- **Callouts**: Use `{% note %}`, `{% warning %}`, `{% danger %}` for important info.
- **Versioning**: Always use `{% ifversion %}` (not `{% if %}`) and `{% elsif %}` (not `else if`).
- **Includes**: Only `.html` files in `includes/` are valid includes.
- **Localization**: All data files in `data/` are Crowdin-translated by default.

## Key References
- `README.md` (project overview)
- `content/README.md` (content structure)
- `contributing/content-markup-reference.md` (markup)
- `contributing/content-style-guide.md` (style)
- `contributing/liquid-helpers.md` (versioning)
- `contributing/development.md` (local dev)
- `data/reusables/README.md`, `data/variables/README.md` (reusables/variables)
- `includes/README.md` (includes)

---
For unclear or missing conventions, consult the referenced files or ask for clarification.

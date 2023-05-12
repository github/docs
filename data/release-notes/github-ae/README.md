# Release notes for GitHub AE

Rendered here: https://docs.github.com/en/github-ae@latest/admin/release-notes

## How it works

### Placeholder content file

A content file exists in `content/admin/release-notes.md`. It has a special frontmatter property `layout: release-notes` and no Markdown content. The source of the release notes comes from YAML data.

### YAML source

The source data for the release notes lives in this directory (`data/release-notes/github-ae`).

The directories are named by internal GHAE release (with a hyphen instead of a period). The "current" release (i.e., the one that evaluates to `@latest`) is set via the `internalLatestRelease` property on the GHAE entry in `lib/all-versions.js`.

GHAE releases do not have patches, but due to precedent in the Enterprise Server release notes (which do have patches), the YAML files are named `0.yml`.

Note that patch files can be deprecated individually (i.e., hidden on the docs site) by an optional `deprecated: true` property.

### Middleware processing

The YAML data is processed and sorted by `middleware/contextualizers/ghae-release-notes.js` and added to the `context` object.

### Layouts

The `context` object data is rendered by `components/release-notes`.

The release notes page has a custom design with CSS in `stylesheets/release-notes.scss`.

### Schema

The schema that validates the YAML data lives in `src/content-linter/lib/release-notes-schema.js`. See the schema file to find out the required and optional properties.

The schema is exercised by a test in `src/content-linter/tests/lint-files.js`. The test will fail if the data does not pass validation.

# Release notes for GitHub Enterprise Server

Rendered here: https://docs.github.com/en/enterprise-server@latest/admin/release-notes

## How it works

### Placeholder content file

A content file exists in `content/admin/release-notes.md`. It has a special frontmatter property `layout: release-notes` and no Markdown content. The source of the release notes comes from YAML data.

### YAML source

The source data for the release notes lives in this directory (`data/release-notes/enterprise-server`).

The directories are named by GHES release number (with a hyphen instead of a period).

The YAML files in each directory are named by patch number. Some patch filenames may end with `-rc<num>.yml`, which means it's a release candidate. A release candidate file also requires `release_candidate: true` in the YAML data.

Release notes of deprecated GHES versions (see `lib/enterprise-server-releases.js`) are **not** removed from the site and will always be displayed alongside currently supported versions.

Note that patch files can be deprecated individually (i.e., hidden on the docs site) by an optional `deprecated: true` property.

### Middleware processing

The YAML data is processed and sorted by `middleware/contextualizers/release-notes.js` and added to the `context` object.

### Layouts

The `context` object data is rendered by `layouts/release-notes.html` and `includes/enterprise-server-release-notes.html`.

The release notes page has a custom design with CSS in `stylesheets/release-notes.scss` and client-side JavaScript in `javascripts/release-notes.js`.

### Schema

The schema that validates the YAML data lives in `tests/helpers/schemas/ghes-release-notes-schema.js`. See the schema file to find out the required and optional properties.

The schema is exercised by a test in `tests/linting/lint-files.js`. The test will fail if the data does not pass validation.

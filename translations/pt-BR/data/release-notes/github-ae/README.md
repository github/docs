# Release notes for GitHub AE

Rendered here: https://docs.github.com/en/github-ae@latest/admin/release-notes

## How it works

### Placeholder content file

A content file exists in `content/admin/release-notes.md`. It has a special frontmatter property `layout: release-notes` and no Markdown content. The source of the release notes comes from YAML data.

### YAML source

The source data for the release notes lives in this directory (`data/release-notes/github-ae`).

The directories are named by month. The YAML files are named by the data of a weekly release.

A boolean property called `currentWeek` must be set in each YAML file. No more than one file at a time can have this property set to true.

Note that patch files can be deprecated individually (i.e., hidden on the docs site) by an optional `deprecated: true` property.

### Middleware processing

The YAML data is processed and sorted by `middleware/contextualizers/release-notes.js` and added to the `context` object.

### Layouts

The `context` object data is rendered by `layouts/release-notes.html` and `includes/github-ae-release-notes.html`.

The release notes page has a custom design with CSS in `stylesheets/release-notes.scss` and client-side JavaScript in `javascripts/release-notes.js`.

### Esquema

The schema that validates the YAML data lives in `tests/helpers/schemas/ghae-release-notes-schema.js`. See the schema file to find out the required and optional properties.

The schema is exercised by a test in `tests/linting/lint-files.js`. The test will fail if the data does not pass validation.

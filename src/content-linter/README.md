# Content Linter

## Linting Tests
- [lint-files](lint-files.js): Linter for `content`, `data/reusables`, `data/variables`, `data/glossaries`, `data/release-notes`, `data/learning-tracks`, and `data/features`. This lints markdown in the `content` and `data` directories, including early-access, GitHub Enterprise Server release notes, and yaml content. It checks for:
  - No placeholder strings
  - Hidden docs
  - Transcripts 
  - Valid links
  - Yaml content
  - Early Access controls
  - Hard-coded code/versions/domains
  - Valid schema
  - Valid liquid
  - Valid syntax
  - Valid frontmatter
- [lint-secret-scanning-data](lint-secret-scanning-data.js): Linter for `data/secret-scanning.yml`, which validates that the secret scanning data matches its schema.
- [lint-versioning](lint-versioning.js): This validates the `data/features` `versions` according to the same frontmatter schema.
- [category-pages](category-pages.js): This checks that the `children` frontmatter has a matching markdown article.
- [liquid-line-breaks](liquid-line-breaks.js): This will match Liquid variable references that contain at least one line break
between the variable reference and either the `{{` or `}}` tag boundaries.
- [site-data-references](site-data-references.js): Validates that any data reference found in the English content files is defined and has a value.
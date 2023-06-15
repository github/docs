# Content Linter

## Linting Rules

We are using the [markdownlint](https://github.com/DavidAnson/markdownlint) framework to implement custom and existing markdown linter rules to check the markdown content in our `content` and `data` directory files. Here is the list of our current rules implemented in our [markdownlint.js script](./scripts/markdownlint.js):

| **Rule ID** | **Description** | **Severity** |
|---|---|---|
| [MD001](https://github.com/DavidAnson/markdownlint/blob/main/doc/md001.md) | Header levels can only increments by one level at a time. | error |
| [MD002](https://github.com/DavidAnson/markdownlint/blob/main/doc/md002.md) | Ensure that headings start with an H2 heading. | error |
| [MD004](https://github.com/DavidAnson/markdownlint/blob/main/doc/md004.md) | Unordered list style must be a dash. | error |
| [MD014](https://github.com/DavidAnson/markdownlint/blob/main/doc/md014.md) | Dollar signs should not be used before commands without showing output. | error |
| [MD111](./linting-rules/image-alt-text-length.js) | Images alternate text should be between 40-150 characters. | warning |
| [MD112](./linting-rules/image-alt-text-end-punctuation.js) | Images alternate text should end with a punctuation. | error |
| [MD113](./linting-rules/internal-links-slash.js) | Internal links must start with a `/`. | error |
| [MD114](./linting-rules/internal-links-lang.js) | Internal links must not have a hardcoded language code. | error |
| [MD115](./linting-rules/image-file-kebab.js) | Image file names should be lowercase kebab case. | error |

## Linting Tests

- [lint-files](./tests/lint-files.js): Linter for `content`, `data/reusables`, `data/variables`, `data/glossaries`, `data/release-notes`, `data/learning-tracks`, and `data/features`. This lints markdown in the `content` and `data` directories, including early-access, GitHub Enterprise Server release notes, and yaml content. It checks for:
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
- [lint-secret-scanning-data](./tests/lint-secret-scanning-data.js): Linter for `data/secret-scanning.yml`, which validates that the secret scanning data matches its schema.
- [lint-versioning](./tests/lint-versioning.js): This validates the `data/features` `versions` according to the same frontmatter schema.
- [category-pages](./tests/category-pages.js): This checks that the `children` frontmatter has a matching markdown article.
- [liquid-line-breaks](./tests/liquid-line-breaks.js): This will match Liquid variable references that contain at least one line break
between the variable reference and either the `{{` or `}}` tag boundaries.
- [site-data-references](./tests/site-data-references.js): Validates that any data reference found in the English content files is defined and has a value.

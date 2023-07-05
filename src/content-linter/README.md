# Content Linter

## Linting Rules

We are using the [markdownlint](https://github.com/DavidAnson/markdownlint) framework to implement custom and existing markdown linter rules to check the markdown content in our `content` and `data` directory files. Here is the list of our current rules implemented in our [markdownlint.js script](./scripts/markdownlint.js):

| **Rule ID** | **Description** | **Severity** |
|---|---|---|
| [MD001](https://github.com/DavidAnson/markdownlint/blob/main/doc/md001.md) | Header levels can only increments by one level at a time. | error |
| [MD002](https://github.com/DavidAnson/markdownlint/blob/main/doc/md002.md) | Ensure that headings start with an H2 heading. | error |
| [MD004](https://github.com/DavidAnson/markdownlint/blob/main/doc/md004.md) | Unordered list style must be a dash. | error |
| [MD009](https://github.com/DavidAnson/markdownlint/blob/main/doc/md009.md) | No unnecessary whitespace from the end of the line. | warning |
| [MD012](https://github.com/DavidAnson/markdownlint/blob/main/doc/md012.md) | No unnecessary blank lines. | warning |
| [MD014](https://github.com/DavidAnson/markdownlint/blob/main/doc/md014.md) | Dollar signs should not be used before commands without showing output. | error |
| [MD018](https://github.com/DavidAnson/markdownlint/blob/main/doc/md018.md) | Must have one space after a hash style heading. | error |
| [MD019](https://github.com/DavidAnson/markdownlint/blob/main/doc/md019.md) | Must not have spaces after a hash style heading. | error |
| [MD022](https://github.com/DavidAnson/markdownlint/blob/main/doc/md022.md) | Headings must be surrounded by a blank line. | warning |
| [MD023](https://github.com/DavidAnson/markdownlint/blob/main/doc/md023.md) | Headings must start at the beginning of the line. | error |
| [MD024](https://github.com/DavidAnson/markdownlint/blob/main/doc/md024.md) | Disallow headings with the same content. | error |
| [MD027](https://github.com/DavidAnson/markdownlint/blob/main/doc/md027.md) | Catches multiple spaces after blockquote symbol. | warning |
| [MD029](https://github.com/DavidAnson/markdownlint/blob/main/doc/md029.md) | All ordered lists should be prefixed with `1.`. | error |
| [MD030](https://github.com/DavidAnson/markdownlint/blob/main/doc/md030.md) | Only allow one space after list markers. | error |
| [MD031](https://github.com/DavidAnson/markdownlint/blob/main/doc/md031.md) | Fenced code blocks must be surrounded by blank lines. | warning |
| [MD037](https://github.com/DavidAnson/markdownlint/blob/main/doc/md037.md) | Remove extra spacing inside emphasis markers. | warning |
| [MD039](https://github.com/DavidAnson/markdownlint/blob/main/doc/md039.md) | Remove spacing around image text. | warning |
| [MD040](https://github.com/DavidAnson/markdownlint/blob/main/doc/md040.md) | Code fences must have a language specified. | warning |
| [MD042](https://github.com/DavidAnson/markdownlint/blob/main/doc/md042.md) | Do not allow empty links. | error |
| [MD047](https://github.com/DavidAnson/markdownlint/blob/main/doc/md047.md) | All files should end with a new line character. | warning |
| [MD049](https://github.com/DavidAnson/markdownlint/blob/main/doc/md049.md) | All emphasis styling should use underscores. | warning |
| [MD050](https://github.com/DavidAnson/markdownlint/blob/main/doc/md050.md) | All strong styling should use asterisks. | warning |
| [MD011](https://github.com/DavidAnson/markdownlint/blob/main/doc/md011.md) | Make sure that link syntax is not reversed. | error |
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

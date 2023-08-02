# Content Linter

Our content-linter enforces style guide rules in our Markdown content. This framework replaces our legacy CI tests (currently under the category `linter` in GitHub Actions).

The linter leverages [markdownlint](https://github.com/DavidAnson/markdownlint) as the framework to perform checks, report flaws, and automatically fix the content (when available).

The `markdownlint` framework allows great flexibility in running specific rules, gives descriptive error messages, and fixes errors.

We have configured several existing `markdownlint` rules and we are implementing additional custom rules to check the Markdown content in our `content` and `data` directory files. Our custom rules will implement checks that are either not yet available in the `markdownlint` framework or are specific to GitHub Docs content. Rules will check both Markdown-specific syntax and our use of Liquid syntax. We have not yet implemented most of the custom rules we plan to write.

Once we have replaced all of our existing content linting CI checks with new rules in the `markdownlint` framework, we'll remove the existing CI content linter and only use `markdownlint`.

## How to run the _new_ content linter

### Automatically run the linter on pre-commit

The content linter rules that are already marked with a severity of `error` are run on a pre-commit git hook. For a list of the rules that will run on the pre-commit hook, see "[Errors](#errors)."

When you are writing content locally and commit files (`git commit`), those staged files will automatically be linted by the content linter. If any errors are reported, your commit will not complete. Fix the reported errors, and then try your `git commit` again. Any errors that are reported _must_ be fixed to prevent introducing errors in the content that are in violation of the GitHub Docs style guide.

If you are editing a file in the UI, you will not be able to automatically run the linter on a commit. For that use case, we plan to introduce a CI test that runs on each pull request.

### Manually run the linter

#### Run the linter on staged + changed files

Use the following command to run the linter locally on your **staged** and **changed** files (not committed yet). It will output both `warning` and `error` severity issues.

```shell
npm run lint-content
```

#### Run the linter on staged + changed files for errors only

Use the following command to run the linter locally on your staged and changed files, and report only `error` severity.

```shell
npm run lint-content -- --errors
```

#### Run the linter on specific files or directories

```shell
npm run lint-content -- --paths content/file.md content/actions
```

#### Automatically fix errors that can be fixed

Use the following command to automatically fix errors with `fixable: true`.

Run this command to fix staged and changed files only:

```shell
npm run lint-content -- --fix
```

Run this command to fix speficic files or directories:

```shell
npm run lint-content -- --fix --paths content/file.md content/actions
```

#### Run a specific set of linter rules

Use the following command to run one or more specific linter rules. In the command, replace `heading-increment code-fence-line-length` with one or more linter aliases that you would like to run. To see the list of linter rules you can pass to this option, run `npm run lint-content -- --help`. You can use either the short name (e.g. `MD001`) or long name (e.g. `heading-increment`) of a linter rule.

Run the specified linter rule(s) on all staged + changed files:

```shell
npm run lint-content -- --rules heading-increment code-fence-line-length
```

Run the specified linter rule(s) on specific files or directories:

```shell
npm run lint-content -- --rules heading-increment code-fence-line-length --path content/file.md content/actions
```

### Display the help menu for the content linter script

```shell
npm run lint-content -- --help
```

## Linting Rules

Here is the list of our current rules implemented in our [config](./style):

Each rule listed below is configured in a file in `src/content-linter/style`, which is where the rule's severity is defined. The goal is to get to a point where all rules have a severity of `error`, but we can set them to `warning` until the existing occurrences are handled in the content.

### Errors

These rules _must_ be fixed before merging content into the `main` branch.

| **Rule ID** | **Description** |
|---|---|
| [MD004](https://github.com/DavidAnson/markdownlint/blob/main/doc/md004.md) | Unordered list style must be a dash. |
| [MD011](https://github.com/DavidAnson/markdownlint/blob/main/doc/md011.md) | Make sure that link syntax is not reversed. |
| [MD012](https://github.com/DavidAnson/markdownlint/blob/main/doc/md012.md) | No unnecessary blank lines. |
| [MD014](https://github.com/DavidAnson/markdownlint/blob/main/doc/md014.md) | Dollar signs should not be used before commands without showing output. |
| [MD018](https://github.com/DavidAnson/markdownlint/blob/main/doc/md018.md) | Must have one space after a hash style heading. |
| [MD019](https://github.com/DavidAnson/markdownlint/blob/main/doc/md019.md) | Must not have spaces after a hash style heading. |
| [MD022](https://github.com/DavidAnson/markdownlint/blob/main/doc/md022.md) | Headings must be surrounded by a blank line. |
| [MD023](https://github.com/DavidAnson/markdownlint/blob/main/doc/md023.md) | Headings must start at the beginning of the line. |
| [MD027](https://github.com/DavidAnson/markdownlint/blob/main/doc/md027.md) | Catches multiple spaces after blockquote symbol. |
| [MD029](https://github.com/DavidAnson/markdownlint/blob/main/doc/md029.md) | All ordered lists should be prefixed with `1.`. |
| [MD030](https://github.com/DavidAnson/markdownlint/blob/main/doc/md030.md) | Only allow one space after list markers. |
| [MD037](https://github.com/DavidAnson/markdownlint/blob/main/doc/md037.md) | Remove extra spacing inside emphasis markers. |
| [MD039](https://github.com/DavidAnson/markdownlint/blob/main/doc/md039.md) | Remove spacing around image text. |
| [MD042](https://github.com/DavidAnson/markdownlint/blob/main/doc/md042.md) | Do not allow empty links. |
| [MD050](https://github.com/DavidAnson/markdownlint/blob/main/doc/md050.md) | All strong styling should use asterisks. |
| [GHD002](./linting-rules/image-alt-text-end-punctuation.js) | Images alternate text should end with a punctuation. |
| [GHD005](./linting-rules/internal-links-lang.js) | Internal links must not have a hardcoded language code. |
| [GHD006](./linting-rules/image-file-kebab.js) | Image file names should be lowercase kebab case. |

### Warnings

These rules _should_ be fixed before merging content into the `main` branch, but fixing them won't prevent commiting changes to your local branch.

| **Rule ID** | **Description** |
|---|---|
| [MD001](https://github.com/DavidAnson/markdownlint/blob/main/doc/md001.md) | Header levels can only increments by one level at a time. |
| [MD002](https://github.com/DavidAnson/markdownlint/blob/main/doc/md002.md) | Ensure that headings start with an H2 heading. |
| [MD009](https://github.com/DavidAnson/markdownlint/blob/main/doc/md009.md) | No unnecessary whitespace from the end of the line. |
| [MD031](https://github.com/DavidAnson/markdownlint/blob/main/doc/md031.md) | Fenced code blocks must be surrounded by blank lines. |
| [MD040](https://github.com/DavidAnson/markdownlint/blob/main/doc/md040.md) | Code fences must have a language specified. |
| [MD047](https://github.com/DavidAnson/markdownlint/blob/main/doc/md047.md) | All files should end with a new line character. |
| [MD049](https://github.com/DavidAnson/markdownlint/blob/main/doc/md049.md) | All emphasis styling should use underscores. |
| [GHD001](./linting-rules/code-fence-line-length.js) | Code fence content should be 60 lines or less in length. |
| [GHD003](./linting-rules/image-alt-text-length.js) | Images alternate text should be between 40-150 characters. |
| [GHD004](./linting-rules/internal-links-slash.js) | Internal links must start with a `/`. |

## Linting Tests

These are the legacy linting tests that are still in use. They are being replaced by the rules above.

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

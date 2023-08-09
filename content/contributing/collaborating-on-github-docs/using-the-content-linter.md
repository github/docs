---
title: Using the content linter
intro: 'You can use content linter to check your contributions for errors.'
product: '{% data reusables.contributing.product-note %}'
versions:
  feature: 'contributing'
---

## About the {% data variables.product.prodname_docs %} content linter

Our content linter enforces style guide rules in our Markdown content.

The linter uses [`markdownlint`](https://github.com/DavidAnson/markdownlint) as the framework to perform checks, report flaws, and automatically fix content, when possible. This framework flexibly runs specific rules, gives descriptive error messages, and fixes errors. The {% data variables.product.prodname_docs %} content linter uses several existing `markdownlint` rules and additional custom rules to check the Markdown content in our `content` and `data` directories. Our custom rules implement checks that are either not yet available in the `markdownlint` framework or are specific to {% data variables.product.prodname_docs %} content. Rules check the syntax for both Markdown and Liquid.

## Running the {% data variables.product.prodname_docs %} content linter

The {% data variables.product.prodname_docs %} content linter will run automatically on pre-commit, but you can also run it manually.

### Automatically run the linter on pre-commit

The content linter rules that are marked with a severity of `error` run on a pre-commit Git hook. For a list of the rules that will run on the pre-commit hook, see "[Errors](#errors)."

When you are writing content locally and commit files using the command line, those staged files will automatically be linted by the content linter. If any errors are reported, your commit will not complete. Fix the reported errors, and then commit your changes again. Any errors that are reported must be fixed to prevent introducing errors in the content that are in violation of the {% data variables.product.prodname_docs %} style guide.

If you are editing a file in the {% data variables.product.prodname_dotcom %} UI, you will not be able to automatically run the linter on a commit.

### Manually run the linter

#### Run the linter on staged and changed files

Use the following command to run the linter locally on your staged and changed files. It will output both `warning` and `error` severity flaws.

```shell
npm run lint-content
```

#### Run the linter on staged and changed files and only report errors

Use the following command to run the linter locally on your staged and changed files, and report only `error` severity flaws.

```shell
npm run lint-content -- --errors
```

#### Run the linter on specific files or directories

Use the following command to run the linter locally on specific files or directories. Separate multiple paths with a space. You can include both files and directories in the same command.

```shell
npm run lint-content -- --paths content/FILENAME.md content/DIRECTORY
```

#### Automatically fix errors that can be fixed

If an error has `fixable: true` in its description, you can use the following commands to automatically fix them.

Run this command to fix staged and changed files only:

```shell
npm run lint-content -- --fix
```

Run this command to fix specific files or directories:

```shell
npm run lint-content -- --fix --paths content/FILENAME.md content/DIRECTORY
```

#### Run a specific set of linter rules

Use the following command to run one or more specific linter rules. These examples run the `heading-increment` and `code-fence-line-length` rules. Replace `heading-increment code-fence-line-length` with one or more linter aliases that you would like to run. To see the list of linter rules you can pass to this option, run `npm run lint-content -- --help`. You can use either the short name (for example, `MD001`) or long name (for example, `heading-increment`) of a linter rule.

Run the specified linter rules on all staged and changed files:

```shell
npm run lint-content -- --rules heading-increment code-fence-line-length
```

Run the specified linter rules on specific files or directories:

```shell
npm run lint-content -- --rules heading-increment code-fence-line-length --path content/FILENAME.md content/DIRECTORY
```

### Display the help menu for the content linter script

```shell
npm run lint-content -- --help
```

## Linting rules

Each rule is configured in a file in [`src/content-linter/style`](https://github.com/github/docs/tree/main/src/content-linter/style), which is where the severities of rules are defined.

### Errors

These rules must be fixed before merging content into the `main` branch.

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
| [GHD002](https://github.com/github/docs/blob/main/src/content-linter/lib/linting-rules/image-alt-text-end-punctuation.js) | Images alternate text should end with a punctuation. |
| [GHD005](https://github.com/github/docs/blob/main/src/content-linter/lib/linting-rules/internal-links-lang.js) | Internal links must not have a hardcoded language code. |
| [GHD006](https://github.com/github/docs/blob/main/src/content-linter/lib/linting-rules/image-file-kebab.js) | Image file names should be lowercase kebab case. |

### Warnings

These rules should be fixed before merging content into the `main` branch, but they won't prevent committing changes to your local branch.

| **Rule ID** | **Description** |
|---|---|
| [MD001](https://github.com/DavidAnson/markdownlint/blob/main/doc/md001.md) | Header levels can only increments by one level at a time. |
| [MD002](https://github.com/DavidAnson/markdownlint/blob/main/doc/md002.md) | Ensure that headings start with an H2 heading. |
| [MD009](https://github.com/DavidAnson/markdownlint/blob/main/doc/md009.md) | No unnecessary whitespace from the end of the line. |
| [MD031](https://github.com/DavidAnson/markdownlint/blob/main/doc/md031.md) | Fenced code blocks must be surrounded by blank lines. |
| [MD040](https://github.com/DavidAnson/markdownlint/blob/main/doc/md040.md) | Code fences must have a language specified. |
| [MD047](https://github.com/DavidAnson/markdownlint/blob/main/doc/md047.md) | All files should end with a new line character. |
| [MD049](https://github.com/DavidAnson/markdownlint/blob/main/doc/md049.md) | All emphasis styling should use underscores. |
| [GHD001](https://github.com/github/docs/blob/main/src/content-linter/lib/linting-rules/code-fence-line-length.js) | Code fence content should be 60 lines or less in length. |
| [GHD003](https://github.com/github/docs/blob/main/src/content-linter/lib/linting-rules/image-alt-text-length.js) | Images alternate text should be between 40-150 characters. |
| [GHD004](https://github.com/github/docs/blob/main/src/content-linter/lib/linting-rules/internal-links-slash.js) | Internal links must start with a `/`. |

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

When you are writing content locally and committing files using the command line, those staged files will automatically be linted by the content linter. Both warnings and errors are reported, but only errors will prevent your commit from completing.

If any errors are reported, your commit will not complete. You will need to fix the reported errors, re-add the changed files, and commit your changes again. Any errors that are reported must be fixed to prevent introducing errors in the content that are in violation of the {% data variables.product.prodname_docs %} style guide. If any warnings are reported, you can optionally choose to fix them or not.

When you are writing content locally, there are several rules that you can fix automatically using the command line. If you want to automatically fix errors that can be fixed, see "[Automatically fix errors that can be fixed](#automatically-fix-errors-that-can-be-fixed)."

If you are editing a file in the {% data variables.product.prodname_dotcom %} UI, you will not be able to automatically fix errors or run the linter on a commit, but you will get a CI failure if the content violates any rules with a severity of `error`.

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

```shell copy
npm run lint-content -- \
  --paths content/FILENAME.md content/DIRECTORY
```

#### Automatically fix errors that can be fixed

If an error has `fixable: true` in its description, you can use the following commands to automatically fix them.

Run this command to fix staged and changed files only:

```shell
npm run lint-content -- --fix
```

Run this command to fix specific files or directories:

```shell
npm run lint-content -- \
  --fix --paths content/FILENAME.md content/DIRECTORY
```

#### Run a specific set of linter rules

Use the following command to run one or more specific linter rules. These examples run the `heading-increment` and `code-fence-line-length` rules. Replace `heading-increment code-fence-line-length` with one or more linter aliases that you would like to run. To see the list of linter rules you can pass to this option, run `npm run lint-content -- --help`. You can use either the short name (for example, `MD001`) or long name (for example, `heading-increment`) of a linter rule.

Run the specified linter rules on all staged and changed files:

```shell
npm run lint-content -- \
  --rules heading-increment code-fence-line-length
```

Run the specified linter rules on specific files or directories:

```shell
npm run lint-content -- \
  --rules heading-increment code-fence-line-length \
  --path content/FILENAME.md content/DIRECTORY
```

#### Bypass the commit hook

If the linter catches errors that you did not introduce, you can bypass the git commit hook by using the `--no-verify` option when you commit your changes.

```shell
git commit -m 'MESSAGE' --no-verify
```

### Display the help menu for the content linter script

```shell
npm run lint-content -- --help
```

## Linting rules

Each rule is configured in a file in [`src/content-linter/style`](https://github.com/github/docs/tree/main/src/content-linter/style), which is where the severities of rules are defined.

Errors must be addressed before merging your changes to the `main` branch. Warnings should be addressed but do not prevent a change from being merged into the `main` branch. Most rules will eventually be promoted to errors, once the content no longer has warning violations.

{% data reusables.contributing.content-linter-rules %}

## Suppressing linter rules

Rarely, you may need to document something that violates one or more linter rules. In these cases, you can suppress rules by adding a comment to the Markdown file. You can disable all rules or specific rules. Always try to limit as few rules as possible. You can disable a rule for an entire file, for a section of a Markdown file, a specific line, or the next line.

<!-- markdownlint-disable MD011 -->
For example, if you are writing an article that includes the regular expression `(^|/)[Cc]+odespace/` that checks for reversed link syntax, it will trigger the `MD011` rule that checks for reversed links. You can disable the rule `MD011` on that specific line by adding the following comment.

<pre>
(^|/)[Cc]+odespace/ &lt;!-- markdownlint-disable-line MD011 --&gt;
</pre>

If the line you're trying to ignore is in a code block, you can ignore the code block by surrounding it with the following comments.

<pre>
&lt;!-- markdownlint-disable MD011 --&gt;
```
(^|/)[Cc]+odespace/
```
&lt;!-- markdownlint-enable MD011 --&gt;
</pre>

<!-- markdownlint-enable MD011 -->

You can use these comments to enable or disable rules.

| Comment | Effect |
| :-- | :-- |
| <pre>&lt;!-- markdownlint-disable --&gt;</pre> | Disable all rules |
| <pre>&lt;!-- markdownlint-enable --&gt;</pre> | Enable all rules |
| <pre>&lt;!-- markdownlint-disable-line --&gt;</pre> | Disable all rules for the current line |
| <pre>&lt;!-- markdownlint-disable-next-line --&gt;</pre> | Disable all rules for the next line |
| <pre>&lt;!-- markdownlint-disable RULE-ONE RULE-TWO --&gt;</pre> | Disable one or more rules by name |
| <pre>&lt;!-- markdownlint-enable RULE-ONE RULE-TWO --&gt;</pre> | Enable one or more rules by name |
| <pre>&lt;!-- markdownlint-disable-line RULE-NAME --&gt;</pre> | Disable one or more rules by name for the current line |
| <pre>&lt;!-- markdownlint-disable-next-line RULE-NAME --&gt;</pre> | Disable one or more rules by name for the next line |

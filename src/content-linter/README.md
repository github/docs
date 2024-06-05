# Content Linter

For an overview of what the content linter is and how to use it, see "[Using the content linter](/content/contributing/collaborating-on-github-docs/using-the-content-linter.md)."

This README shows you how to contribute to the content linter code by adding new rules, modifying existing rules, or updating the scripts used to run the content linter.

## Overview

At a high-level, there are four steps to create a new rule:

1. Adding a new rule file to [`src/content-linter/lib/linting-rules`](/src/content-linter/lib/linting-rules)
1. Importing the new rule and adding it to the custom rules array in [`src/content-linter/lib/linting-rules/index.js`](/src/content-linter/lib/linting-rules/index.js)
1. Adding the config for the new rule to [`src/content-linter/style/github-docs.js`](/src/content-linter/style/github-docs.js)
1. Adding a unit test for the new rule in [`src/content-linter/tests/unit`](/src/content-linter/tests/unit)

Rules are located in the `src/content-linter/lib/linting-rules` directory. Each rule is a separate file that exports an object with metadata and a function. The function is the core logic that implements the rule. In some cases a single file contains more than one rule when colocating them makes more sense. Rules that are very specific can return more than one error type.

## Creating a new rule

Create a new file in the `src/content-linter/lib/linting-rules` directory. The file name should be the same as the rule name. For example, if the rule name is `no-whitespace`, the file name should be `no-whitespace.js`. Avoid using the rule ID name for the file name. There is more information about the ID in [names](#names).

Before creating a new rule, check that the rule does not already exist in [Markdownlint](https://github.com/DavidAnson/markdownlint/#rules--aliases). There are also many [open-source plugins](https://www.npmjs.com/search?q=keywords:markdownlint-rule) that may be used.

Here's an example of the basic template for a rule that you can start from:

```javascript
import { addError } from 'markdownlint-rule-helpers'

export const myRule = {
  names: [],
  description: '',
  tags: [],
  parser: 'markdownit',
  function: (params, onError) => {
    // Logic to check for violations of the rule

    // If a violation is found, call addError
    addError(
      ... // error parameters
    )
  },
}
```

There is a lot of prior art to reference when writing a new rule. Review the rules we've written in [`src/content-linter/lib/linting-rules`](/src/content-linter/lib/linting-rules) or the open-source projects we use:

- [Markdownlint](https://github.com/DavidAnson/markdownlint)
- [markdownlint-github](https://github.com/github/markdownlint-github/tree/main)

See the [custom rules](https://github.com/DavidAnson/markdownlint/blob/main/doc/CustomRules.md) documentation for more details on the object that is being exported, including the `params` and `onError` objects.

### Helper utilities

Markdownlint provides several helper functions. Take a look at the many exports in [markdownlint-rule-helpers](https://github.com/DavidAnson/markdownlint/blob/main/helpers/helpers.js). Note, this is unsupported and may stop being published to in the future.

We've also written a few of our own:

- [`utils`](/src/content-linter/lib/helpers/utils.js)
- [`liquid-utils`](/src/content-linter/lib/helpers/liquid-utils.js)

### Setting errors

When setting errors for a rule, there are a few different functions to choose from. Each of these functions is provided by the Markdownlint project and must be imported from `markdownlint-rule-helpers`:

- `addError` - when there is additional information other than the description to add (most common)
- `addErrorContext` - when error detail is not needed but a specific range of context (Markdown snippet being checked) is needed
- `addErrorDetailIf` - when the error detail just needs to be the expected and actual results

See [markdownlint-rule-helpers](https://github.com/DavidAnson/markdownlint/blob/main/helpers/helpers.js) for more details.

### Async rules

To use asynchronous code, you must set the property `asynchronous: true` in the exported object. For example:

```javascript
import { addError } from 'markdownlint-rule-helpers'

export const myRule = {
  names: [],
  description: '',
  tags: [],
  parser: 'markdownit',
  asynchronous: true
  function: (params, onError) => {
    // Logic to check for violations of the rule

    // If a violation is found, call addError
    addError(
      ... // error parameters
    )
  },
}
```

See the [Markdownlint async documentation](https://github.com/DavidAnson/markdownlint/blob/main/doc/CustomRules.md#asynchronous-rules) for more details.

### Reading the data directory

When you need to read files in the data directory, you can use the `getDataByLanguage` or `getDeepDataByLanguage` export in [`lib/get-data.js`](/lib/get-data.js). This allows you to write unit tests that read data fixtures rather than real content. For an example of using `getDataByLanguage` or `getDeepDataByLanguage`, see the [`liquid-data-tags.js`](/src/content-linter/lib/linting-rules/liquid-data-tags.js) or [`liquid-versioning.js`](/src/content-linter/lib/linting-rules/liquid-versioning.js) rules.

### `names`

The first name in the `names` array is the rule ID. The rule ID uses the format `GHDXXX` where `XXX` is a number. For example, `GHD001`. This ID is used to quickly identify the rule in our documentation and as a short name to reference the rule. The `GHD` prefix is used to indicate that the rule is specific to GitHub Docs.

Currently, rules that we expect to upstream to open-source Markdownlint projects start with `GHD03X`. Choose the next available consecutive number for your rule.

The second name in the `names` array is the readable name, which also matches the rule file name. For example, `no-whitespace`. The readable rule name should be short and succinct. Take a look at our existing rules names to see if a naming pattern that already exists would work for your rule. For example, rules that check frontmatter only are prefixed with the string "frontmatter."

### `description`

When writing the `description` for your rule, choose a succinct one-sentence description that describes the high-level violation you are trying to avoid. There is an opportunity to provide more detail when setting the error message in the rule's function. Avoid using end punctuation in the `description`.

### `tags`

Tags are used to categorize rules. Choose one or more tags from the list below. If you think a new tag is needed, add it to the list.

#### Tags for rule categories

| Tag | Description |
| --- | --- |
| `code` | Rules that check for violations in code blocks. |
| `images` | Rules that check for violations in image tags. |
| `links` | Rules that check for violations in links. |
| `url` | Rules that check for violations in URLs. |
| `ul` | Rules that check for violations in unordered lists. |
| `ol` | Rules that check for violations in ordered lists. |
| `accessibility` | Rules that check for accessibility violations. |
| `format` | Rules that check for formatting violations. |
| `single-source` | Rules that check for violations in single-sourced content (e.g., data reusable or variable usage enforcement). |
| `frontmatter` | Rules that check for violations in frontmatter. |
| `liquid` | Rules that check for violations in Liquid. |
| `versioning` | Rules that check for violations in Liquid versioning. Rules with this tag typically have the `liquid` tag too. |
| `feature` | Rules that check for violations specific to a feature in the docs platform (e.g., early-access, code annotations) or a GitHub feature (e.g., GitHub Actions). Rules with this tag should also include a tag with the feature name. |
| `annotate` | Rules that check for violations in code annotations. Rules with this tag should also include the `feature` tag. |
| `actions` | Rules that check for violations in GitHub Actions. Rules with this tag should also include the `feature` tag. |
| `early-access` | Rules that check for violations in early-access content. Rules with this tag should also include the `feature` tag. |

## Adding the rule to the custom rules array

To add the new rule to the list of custom rules that are run against GitHub Docs content, import the rule and add it to the `rules` array in [`src/content-linter/lib/linting-rules/index.js`](/src/content-linter/lib/linting-rules/index.js). The `rules` array defines all the custom rules that we add to the Markdownlint configuration [`options.customRules`](https://github.com/DavidAnson/markdownlint#optionscustomrules). Custom rules include the rules we write in this project and any open-source rules we use.

## Configuring a new rule

Each rule that we configure for GitHub Docs has a corresponding entry in either `src/content-linter/style/base.js` or `src/content-linter/style/github-docs.js`. The `base.js` file contains rules that are available in the [Markdownlint](https://github.com/DavidAnson/markdownlint) project. The `github-docs.js` file contains open-source plugins (including [markdownlint-github](https://github.com/github/markdownlint-github/tree/main)) and the custom rules that we develop that are specific to GitHub Docs.

Inside [`src/content-linter/style/github-docs.js`](/src/content-linter/style/github-docs.js), there are a few different sections:

- `githubDocsConfig` - Primary area that new rules are added to. The rules in this section configure Markdownlint to separate frontmatter from Markdown automatically. Both the frontmatter and Markdown are available to read from the rule logic, but you cannot leave an error on a line that contains frontmatter. Frontmatter is not sent through the Markdown parser by Markdownlint.
- `githubDocsFrontmatterConfig` - Contains rules that check frontmatter properties _and_ need to leave errors on frontmatter line numbers.
- `githubMarkdownlintConfig` - Contains rules that we use from the [markdownlint-github](https://github.com/github/markdownlint-github) repo.
- `searchReplaceConfig` - Rules that do a simple search or search and replace. These are performed by the open-source plugin [`search-replace`](https://www.npmjs.com/package/markdownlint-rule-search-replace).

Each rule defines these options:

- severity
- whether the rule can be run on partial Markdown files (reusables and variables)
- precommit severity (optional)

### `severity`

Severity can be set to either `error` or `warning`. A severity of `warning` is not enforced in the git commit hook or CI. However, a violation with a severity of `warning` is displayed when committing changed files locally. Surfacing the warnings gives a writer the option to fix the violation.

Ideally, all rules will be set to `error` severity. However, there may be cases when too many violations exist in the content to fix or disable them all. In these cases we can temporarily set a rule to `warning`, and then update the rule to `error` severity after all cases have been fixed or disabled. However, there may be a case at some point where we need to keep a rule set to `warning` indefinitely.

For more info, see "[Updating content to adhere to a new rule](#updating-content-to-adhere-to-a-new-rule)."

### `partial-markdown-files`

Set this to `true` when the rule can be enforced on all Markdown files in the `data` directory, otherwise set it to `false`.

### `precommitSeverity`

The git commit hook uses the `precommitSeverity` when it is defined instead of `severity`. This option allows a rule to have a separate severity depending on whether it is run from the git commit hook (local development) or in CI. For example, the rule that checks for instances of `TODOCS` in the content sets the `precommitSeverity` to `warning` and `severity` to `error`. This allows writers to develop content containing `TODOCS` references locally without the git commit hook preventing commits. In CI, the `severity` property is used and a PR cannot merge until all instances of `TODOCS` are removed.

It's very rare that a rule needs to configure `precommitSeverity`.

## Testing a new rule

Once a rule is written, added to the custom rules array, and configured, you can run it on real content by passing a specific file path (or paths) to the content linter script. For example:

```shell
npm run lint-content -- --paths <path to file relative to docs-internal root> --rules <name of your new rule>
```

Each custom rule must add a unit test in the `src/content-linter/tests/unit` directory. The unit test should be named the same as the rule file name. For example, if the rule file name is `no-whitespace.js`, the unit test file name should be `no-whitespace.js`.

Unit tests must test auto-fixes if the rule allows them. The unit test should also test the line number and range. Include positive and negative tests.

If the test requires checking the file path, you can provide a fixture. For an example, see [`early-access-references.js`](/src/content-linter/tests/unit/early-access-references.js). Most tests pass Markdown strings to the rule directly.

## Content linter scripts

- [`lint-content.js`](/src/content-linter/scripts/lint-content.js) - The primary script used to run rules against content. We have a fairly customized implementation of Markdownlint, which prevented us from using [Markdownlint CLI2](https://github.com/DavidAnson/markdownlint-cli2). For example, we run Markdownlint more than once to allow different configurations for the `content` directory and `data` directory. We also run Markdownlint again to allow checking frontmatter properties. To view the options of the script, run `npm run lint-content -- --help`.
- [`disable-rules.js`](/src/content-linter/scripts/disable-rules.js) - This script is used to automatically add disable comments to the end of a line that violates a rule. This allows us to have violations in the content while also setting the rule's severity to `error`.
- [`pretty-print-results.js`](/src/content-linter/scripts/pretty-print-results.js) - This script simplifies and makes the results printed to the console easier to read.

## Updating content to adhere to a new rule

Introducing a new rule with a severity of `error` can be difficult when many violations of that rule exist in content. If the rule implements an autofix by setting the `fixInfo` property in the error object, you can use the rule to autofix content before shipping the rule.

If the new rule doesn't have a possible autofix, you can use `disable-rules.js` to automatically add disable comments to the end of each Markdown line that contains a violation. This is not always possible since some lines are within code blocks and cannot be disabled.

The last option is to manually fix the violations. This is the most time-consuming option, but it's the only option when the rule cannot be autofixed and the line cannot be disabled.

A rule with too many violations to fix can be set to a severity of `warning`.

## Using the search-replace plugin

Because the search-replace rule consists of many search terms, it essentially performs one or more rule checks. Each rule is defined in the [`src/content-linter/style/github-docs.js`](/src/content-linter/style/github-docs.js) config under `searchReplaceConfig`.

You can add a new `search-replace` rule using any search term or regex by adding it to the `rules` array. This is an easy way to perform checks if the check is just looking for a string or simple regex.

Regexes must be double escaped. So if a regex contains a character that is escaped (e.g., `/\./`) it will need two backslashes (e.g., `/\\./`). To test out your regexes, check out a tool called [regexer](https://regexr.com/).

All of the configuration information described in the [Configuring a new rule](#configuring-a-new-rule) section can be used when adding a `search-replace` rule.

The downside to using the `search-replace` plugin is that you cannot disable each individual rule configured with an HTML disable comment. You must disable all `search-replace` rules. For example:

```markdown
docs.github.com <!-- markdownlint-disable-line search-replace -->
```

## Adding context to a base rule's error message

If you want to add context to a base rule's error message, go to[`base.js`](/src/content-linter/style/base.js), and add the `context` property to the base rule's object. For e.g. if you wanted to add `context` to `MD040` (the `fenced-code-language` base rule), the object would look like this:

```javascript
'fenced-code-language': {
    // MD040
    severity: 'error',
    'partial-markdown-files': true,
    'yml-files': true,
    allowed_languages: allowedCodeFenceLanguages,
    context: `When you add a fenced code block, you must specify the code language. Allowed languages are: ${allowedCodeFenceLanguages.join(', ')}. You can add allowed languages by updating data/code-languages.yml.`,
  },
```

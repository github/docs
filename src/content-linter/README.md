# Content Linter

For an overview of what the content linter is and how to use it, see [Using the content linter](/content/contributing/collaborating-on-github-docs/using-the-content-linter.md).

This README shows you how to contribute to the content linter code by adding new rules, modifying existing rules, or updating the scripts used to run the content linter.

## Step-by-step workflow

Before creating a new rule, check that it doesn't already exist in [Markdownlint](https://github.com/DavidAnson/markdownlint/#rules--aliases) or [open-source plugins](https://www.npmjs.com/search?q=keywords:markdownlint-rule).

### 1. Create rule file

Create a new file in `src/content-linter/lib/linting-rules` directory. File name should match the rule name (e.g., `no-whitespace.ts`). Use the template above or review existing rules for patterns.

### 2. Add to custom rules array

Import the rule and add it to the `rules` array in `src/content-linter/lib/linting-rules/index.ts`.

### 3. Configure the rule

Add configuration to `src/content-linter/style/github-docs.ts`:

- **`githubDocsConfig`** - Primary area for new rules
- **`githubDocsFrontmatterConfig`** - Rules that check frontmatter and need frontmatter line numbers
- **`searchReplaceConfig`** - Simple string/regex checks

Required properties:
- `severity`: `'error'` (default) or `'warning'`
- `'partial-markdown-files'`: `true` if rule can run on data directory files
- `'precommitSeverity'`: Optional different severity for local commits

### 4. Add unit test

Create test file in `src/content-linter/tests/unit` with same name as rule file. Test positive/negative cases, line numbers, ranges, and auto-fixes.

### Quick reference

**Rule creation checklist:**
- [ ] Create rule file in `src/content-linter/lib/linting-rules/`
- [ ] Import and add to `src/content-linter/lib/linting-rules/index.ts`
- [ ] Register in `src/content-linter/style/github-docs.ts`
- [ ] Add unit tests in `src/content-linter/tests/unit/`

**Locations:**
- Rule logic: `src/content-linter/lib/linting-rules/*.ts`
- Rule registration: `src/content-linter/lib/linting-rules/index.ts`  
- Rule configuration: `src/content-linter/style/github-docs.ts`
- Unit tests: `src/content-linter/tests/unit/*.ts`

**Common patterns:**
- Rule IDs: `GHD###` format (start with GHD030+ for upstream candidates)
- Frontmatter rules: Use `githubDocsFrontmatterConfig` section
- Simple string checks: Use `searchReplaceConfig` section
- Error severity: Default to `'error'`, use `'warning'` sparingly

**Rule template:**
```typescript
import { addError } from 'markdownlint-rule-helpers'

export const ruleNameHere = {
  names: ['GHD###', 'descriptive-rule-name'],
  description: 'One sentence description without ending punctuation',
  tags: ['appropriate', 'tags'],
  parser: 'markdownit',
  function: (params, onError) => {
    // Rule logic here
    addError(onError, lineNumber, description, line, range, fixInfo)
  },
}
```

## Rule development details

### Helper utilities

Use helper functions from `markdownlint-rule-helpers` instead of custom logic. Review [`utils`](/src/content-linter/lib/helpers/utils.ts) and [`liquid-utils`](/src/content-linter/lib/helpers/liquid-utils.ts) for GitHub Docs-specific helpers.

### Setting errors

Import error functions from `markdownlint-rule-helpers`. Use `addError` for most cases, `addErrorContext` for specific ranges, `addErrorDetailIf` for expected vs actual results.

### Async rules

To use asynchronous code, set `asynchronous: true` in the exported object. See [Markdownlint async documentation](https://github.com/DavidAnson/markdownlint/blob/main/doc/CustomRules.md#asynchronous-rules).

### Reading the data directory

Use `getDataByLanguage` or `getDeepDataByLanguage` from [`lib/get-data.ts`](/lib/get-data.ts) for testable data access. See [`liquid-data-tags.ts`](/src/content-linter/lib/linting-rules/liquid-data-tags.ts) for examples.

### Rule metadata

**names**: First name is rule ID (`GHD###` format), second is readable name matching file name. Rules for upstream use start with `GHD03X`.

**description**: One sentence describing the violation without end punctuation.

**tags**: Categorize rules using existing tags (see table below).

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

## Configuration reference

Rules are configured in `src/content-linter/style/github-docs.ts` with these sections:

- **`githubDocsConfig`** - Primary area for new rules (frontmatter separated automatically)
- **`githubDocsFrontmatterConfig`** - Rules that check frontmatter and need frontmatter line numbers  
- **`githubMarkdownlintConfig`** - Rules from [markdownlint-github](https://github.com/github/markdownlint-github)
- **`searchReplaceConfig`** - Simple search/replace checks

### Configuration options

**severity**: `'error'` (enforced) or `'warning'` (displayed but not enforced). Default to `'error'`.

**partial-markdown-files**: `true` if rule can run on data directory files, `false` otherwise.

**precommitSeverity**: Optional different severity for local commits vs CI. Rarely needed.

### Testing rules

Test on real content:
```shell
npm run lint-content -- --paths <file-path> --rules <rule-name>
```

Unit tests must include positive/negative cases, line numbers, ranges, and auto-fix testing.

## Updating content for new rules

When adding error-level rules with many existing violations:

1. **Autofix**: Use the rule's auto-fix if available
2. **Disable comments**: Use `disable-rules.ts` to add disable comments  
3. **Manual fixes**: Fix violations manually (most time-consuming)
4. **Warning severity**: Temporarily set to `warning` if too many violations exist

## Scripts and tools

- [`lint-content.ts`](/src/content-linter/scripts/lint-content.ts) - Primary script for running rules against content
- [`disable-rules.ts`](/src/content-linter/scripts/disable-rules.ts) - Automatically adds disable comments for rule violations
- [`pretty-print-results.ts`](/src/content-linter/scripts/pretty-print-results.ts) - Formats console output

## Using the search-replace plugin

Add simple string/regex checks to the `searchReplaceConfig` rules array in [`github-docs.ts`](/src/content-linter/style/github-docs.ts). 

**Note**: Regexes must be double-escaped (e.g., `/\\./` not `/\./`). Test regexes at [regexr.com](https://regexr.com/).

**Limitation**: Cannot disable individual search-replace rules - must disable all with `<!-- markdownlint-disable-line search-replace -->`.

## Adding context to base rules

To add context to base rule error messages, add a `context` property in [`base.ts`](/src/content-linter/style/base.ts):

```javascript
'fenced-code-language': {
  severity: 'error',
  context: 'When you add a fenced code block, you must specify the code language...',
},
```

## System architecture

The linter system has multiple moving parts:

### Three reporting surfaces
1. **CI** - runs `lint-content.ts` on diffed paths
2. **precommit** - runs `lint-content.ts` with `--precommit` flag on diffed paths
3. **automated report** - runs `lint-content.ts` on all paths, then `lint-report.ts`

### Severity system
- **Two severities**: `warning` and `error`
- **Two severity types**: `severity` and `precommitSeverity`

### Four linter types
1. **Native markdownlint** (in `base.ts`)
2. **GitHub markdown linters** (in `github-docs.ts`) 
3. **Markdownlint search-replace** (in `github-docs.ts`)
4. **Custom docs linters** (in `github-docs.ts` + individual files in `src/content-linter/lib/linting-rules/`)

Only type #4 requires individual rule files - the rest are imports.
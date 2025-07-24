---
title: About coding guidelines for GitHub Copilot code review
shortTitle: Coding guidelines
allowTitleToDifferFromFilename: true
intro: 'Find out how you can use custom coding guidelines to improve {% data variables.product.prodname_copilot_short %}''s pull request reviews.'
versions:
  feature: copilot
topics:
  - Copilot
contentType: concepts
---

{% data reusables.copilot.code-review.custom-coding-guidelines-prerequisites %} See [AUTOTITLE](/copilot/how-tos/custom-instructions/adding-repository-custom-instructions-for-github-copilot?tool=webui).

## About coding guidelines

You can customize {% data variables.copilot.copilot_code-review_short %} with custom coding guidelines written in natural language. For more information on {% data variables.copilot.copilot_code-review_short %}, see [AUTOTITLE](/copilot/concepts/code-review/code-review).

With coding guidelines, {% data variables.product.prodname_copilot_short %} can give feedback based on your organization's specific coding style and best practices.

Because {% data variables.copilot.copilot_code-review_short %} is powered by a large language model, it can help with enforcing coding guidelines that are not covered by your linter or static analysis tool.

Coding guidelines are configured at the repository level. You can create and enable up to 6 coding guidelines per repository. See [AUTOTITLE](/copilot/how-tos/agents/copilot-code-review/configuring-coding-guidelines).

When you request a review from {% data variables.product.prodname_copilot_short %}, it will automatically use the repository's enabled coding guidelines to review your code.

Comments generated based on a coding guideline will include a message, highlighting their source.

> [!NOTE] Coding guidelines only apply to code reviews carried out by Copilot. The guidelines do not affect Copilot code completion suggestions, or code suggested in Copilot Chat responses.

## Dos and don'ts for coding guidelines

* **Do** use simple, clear and concise language to describe your coding guideline.
* **Do** be as specific as possible about what Copilot should look for - that is, what you do or don't want to see in your code.
* **Do** take a look at the [Coding guidelines examples](#coding-guidelines-examples) below for some inspiration.
* **Don't** try to use coding guidelines to enforce style guidelines that can be covered by your linter or static analysis tool.
* **Don't** use wording that is ambiguous or could be interpreted in different ways.
* **Don't** try to fit multiple different ideas into a single coding guideline.

## Coding guidelines examples

### Example 1: Avoid using magic numbers

**Title:** <code>Avoid using magic numbers</code>

**Description:** <code>Don't use magic numbers in code. Numbers should be defined as constants or variables with meaningful names.</code>

**Path patterns:** `**/*.py`

### Example 2: Don't use `SELECT *` in SQL queries

**Title:** <code>Don't use &#96;SELECT \*&#96; in SQL queries</code>

**Description:** <code>Don't use &#96;SELECT \*&#96; in SQL queries. Always specify the columns you want to select. &#96;COUNT(\*)&#96; is allowed.</code>

**Path patterns:** None (applies to all file types, as SQL queries may be embedded in code).

### Example 3: Use `fetch` for HTTP requests

**Title:** <code>Use &#96;fetch&#96; for HTTP requests</code>

**Description:** <code>Use &#96;fetch&#96; for HTTP requests, not &#96;axios&#96; or &#96;superagent&#96; or other libraries.</code>

**Path patterns:** `**/*.ts`, `**/*.js`, `**/*.jsx`, `**/*.tsx`

### Example 4: Always tag metrics with the current environment

**Title:** <code>Always tag metrics with the current environment</code>

**Description:** <code>Always include a &#96;env&#96; tag with the current environment when emitting metrics, for example, &#96;env:prod&#96; or &#96;env:dev&#96;.</code>

**Path patterns:** `*/*.go`, `*/*.java`

## Further reading

* [AUTOTITLE](/copilot/how-tos/agents/copilot-code-review/configuring-coding-guidelines)

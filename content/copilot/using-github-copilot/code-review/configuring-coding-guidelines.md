---
title: Configuring coding guidelines for GitHub Copilot code review
shortTitle: Configuring coding guidelines
intro: "Learn how to customize {% data variables.copilot.copilot_code-review_short %} with custom coding guidelines."
allowTitleToDifferFromFilename: true
versions:
  feature: copilot
topics:
  - Copilot
redirect_from:
  - /early-access/copilot/code-review/configuring-coding-guidelines
  - /early-access/copilot/code-reviews/configuring-coding-guidelines
---

> [!NOTE] Custom coding guidelines are limited to selected participants in the {% data variables.release-phases.public_preview %} of {% data variables.copilot.copilot_code-review_short %}, and only available as part of a subscription to {% data variables.product.prodname_copilot_enterprise %}.

## About coding guidelines

You can customize {% data variables.copilot.copilot_code-review_short %} with custom coding guidelines written in natural language. For more information on {% data variables.copilot.copilot_code-review_short %}, see [AUTOTITLE](/copilot/using-github-copilot/code-review/using-copilot-code-review).

With coding guidelines, {% data variables.product.prodname_copilot_short %} can give feedback based on your organization's specific coding style and best practices.

Because {% data variables.copilot.copilot_code-review_short %} is powered by a large language model, it can help with enforcing coding guidelines that are not covered by your linter or static analysis tool.

Coding guidelines are configured at the repository level. You can create and enable up to 6 coding guidelines per repository.

> [!NOTE]
>
> * Coding guidelines only work with languages supported by Copilot code review. For a list of supported languages, see [AUTOTITLE](/copilot/using-github-copilot/code-review/using-copilot-code-review#supported-programming-languages).
> * Coding guidelines only apply to code reviews carried out by Copilot. The guidelines do not affect Copilot code completion suggestions, or code suggested in Copilot Chat responses.

## Dos and don'ts for coding guidelines

* **Do** use simple, clear and concise language to describe your coding guideline.
* **Do** be as specific as possible about what Copilot should look for - that is, what you do or don't want to see in your code.
* **Do** take a look at the [Coding guidelines examples](#coding-guidelines-examples) below for some inspiration.
* **Don't** try to use coding guidelines to enforce style guidelines that can be covered by your linter or static analysis tool.
* **Don't** use wording that is ambiguous or could be interpreted in different ways.
* **Don't** try to fit multiple different ideas into a single coding guideline.

## Creating a coding guideline

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}

1. In the "Code & automation" section of the side bar, click **{% octicon "copilot" aria-hidden="true" %} {% data variables.product.prodname_copilot_short %}**, then **Code review**.
1. Click **Create guideline**.
1. Under "Name," give the coding guideline a name.
1. Under "Description," provide a description of the coding guideline up to 600 characters long. This will be used by {% data variables.product.prodname_copilot_short %} to understand your coding style and to decide when to leave a comment.

   How you write your description has a big impact on the quality of comments that {% data variables.product.prodname_copilot_short %} will generate. For help with writing effective coding guidelines, see [Dos and don'ts for coding guidelines](#dos-and-donts-for-coding-guidelines) above, and [Coding guidelines examples](#coding-guidelines-examples) below.

1. Optionally, limit the coding guideline to specific file types or paths by clicking **Add file path** and adding path patterns.

   You can use `fnmatch` syntax to define paths to target, with `*` as a wildcard to match any string of characters.

   {% data reusables.repositories.about-fnmatch %}

1. Test your coding guideline to make sure it works as expected.

   1. Click **Add sample**.
   1. Add your own sample, or press **{% octicon "copilot" aria-hidden="true" %} Generate code sample** to automatically generate a code sample based on your title and description.
   1. Click **Save** to save the code sample.
   1. Test the coding guideline against your sample by pressing **{% octicon "play" aria-hidden="true" %} Run**.

1. Save your coding guideline, and turn it on, by clicking **Save guideline**.

## Running a review with coding guidelines

When you request a review from {% data variables.product.prodname_copilot_short %}, it will automatically use the repository's enabled coding guidelines to review your code. For more information, see [AUTOTITLE](/copilot/using-github-copilot/code-review/using-copilot-code-review).

Comments generated based on a coding guideline will include a message, highlighting their source.

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

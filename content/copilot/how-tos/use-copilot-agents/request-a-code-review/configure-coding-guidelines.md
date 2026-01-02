---
title: Configuring coding guidelines for GitHub Copilot code review
shortTitle: Configure coding guidelines
intro: 'Learn how to customize {% data variables.copilot.copilot_code-review_short %} with custom coding guidelines.'
allowTitleToDifferFromFilename: true
versions:
  feature: copilot
topics:
  - Copilot
redirect_from:
  - /early-access/copilot/code-review/configuring-coding-guidelines
  - /early-access/copilot/code-reviews/configuring-coding-guidelines
  - /copilot/using-github-copilot/code-review/configuring-coding-guidelines
  - /copilot/how-tos/agents/copilot-code-review/configuring-coding-guidelines
  - /copilot/how-tos/agents/copilot-code-review/configure-coding-guidelines
  - /copilot/how-tos/agents/request-a-code-review/configure-coding-guidelines
contentType: how-tos
---

{% data reusables.copilot.code-review.custom-coding-guidelines-prerequisites %} See [AUTOTITLE](/copilot/how-tos/custom-instructions/adding-repository-custom-instructions-for-github-copilot?tool=webui).

## About coding guidelines

You can provide {% data variables.product.prodname_copilot_short %} with a set of coding guidelines, written in natural language, that will help it review your code in a way that aligns with your organization's coding style and best practices. For more information—including examples of coding guidelines—see [AUTOTITLE](/copilot/concepts/code-review/coding-guidelines).

## Creating a coding guideline

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}

1. In the "Code & automation" section of the sidebar, click **{% octicon "copilot" aria-hidden="true" aria-label="copilot" %} {% data variables.product.prodname_copilot_short %}**, then **Code review**.
1. Click **Create guideline**.
1. Under "Name," give the coding guideline a name.
1. Under "Description," provide a description of the coding guideline up to 600 characters long. This will be used by {% data variables.product.prodname_copilot_short %} to understand your coding style and to decide when to leave a comment.

   How you write your description has a big impact on the quality of comments that {% data variables.product.prodname_copilot_short %} will generate. For help with writing effective coding guidelines, see [AUTOTITLE](/copilot/concepts/code-review/coding-guidelines).

1. Optionally, limit the coding guideline to specific file types or paths by clicking **Add file path** and adding path patterns.

   You can use `fnmatch` syntax to define paths to target, with `*` as a wildcard to match any string of characters.

   {% data reusables.repositories.about-fnmatch %}

1. Test your coding guideline to make sure it works as expected.

   1. Click **Add sample**.
   1. Add your own sample, or press **{% octicon "copilot" aria-hidden="true" aria-label="copilot" %} Generate code sample** to automatically generate a code sample based on your title and description.
   1. Click **Save** to save the code sample.
   1. Test the coding guideline against your sample by pressing **{% octicon "play" aria-hidden="true" aria-label="play" %} Run**.

1. Save your coding guideline, and turn it on, by clicking **Save guideline**.

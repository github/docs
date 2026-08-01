---
title: Creating a pull request summary with GitHub Copilot
shortTitle: Create a PR summary
intro: 'Generate an AI-powered summary of your pull request changes to help reviewers quickly understand what you changed and why.'
versions:
  feature: copilot
product: '{% data reusables.gated-features.copilot-free-availability %}'
redirect_from:
  - /copilot/using-github-copilot/using-github-copilot-for-pull-requests/creating-a-pull-request-summary-with-github-copilot
  - /copilot/github-copilot-enterprise/copilot-pull-request-summaries/creating-a-pull-request-summary-with-github-copilot
  - /copilot/github-copilot-enterprise/copilot-pull-request-summaries
  - /copilot/using-github-copilot/using-github-copilot-for-pull-requests
  - /copilot/using-github-copilot/creating-a-pull-request-summary-with-github-copilot
  - /copilot/how-tos/github-flow/creating-a-pull-request-summary-with-github-copilot
  - /copilot/how-tos/github-flow/create-a-pr-summary
  - /copilot/how-tos/use-copilot-for-common-tasks/create-a-pr-summary
contentType: how-tos
category: 
  - Author and optimize with Copilot
---

## Generate a pull request summary

{% data variables.product.prodname_copilot %} can summarize a pull request in the description field or as a comment, helping reviewers quickly understand what changed.

> [!NOTE] {% data variables.product.prodname_copilot %} does not take into account any existing content in the pull request description, so start with a blank description for best results.

1. On {% data variables.product.github %}, create a pull request or navigate to an existing pull request.
1. Click in the description field (or the comment field at the bottom of the page).
1. In the header of the text field, select {% octicon "copilot" aria-label="Copilot actions" %}, then click **Summary**.

   ![Screenshot of the form for creating a pull request. A Copilot icon is highlighted, and a box appears with the "Summary" command.](/assets/images/help/copilot/copilot-description-suggestion.png)

1. Review the generated summary carefully. Add any additional context, then click **Create pull request** or **Update comment**.

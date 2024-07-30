---
title: Using Copilot text completion
shortTitle: Text completion
intro: 'You can use {% data variables.product.prodname_copilot_autocomplete_pr %} to help you write pull request descriptions more quickly and accurately.'
versions:
  feature: copilot-enterprise
permissions: 'Members of an enterprise with a subscription to [{% data variables.product.prodname_copilot_enterprise %}](/copilot/github-copilot-enterprise/overview/about-github-copilot-enterprise)'
topics:
  - Copilot
---

>[!NOTE]
> {% data variables.product.prodname_copilot_autocomplete_pr %} is currently in beta and subject to change. To participate in the beta, an administrator of your enterprise must opt in to the use of previews of {% data variables.product.prodname_copilot_short %} features.

## About {% data variables.product.prodname_copilot_autocomplete_pr %}

With {% data variables.product.prodname_copilot_autocomplete_pr %}, you can use AI-generated autocompletions to help you write pull request descriptions quickly and accurately. Accurate descriptions help reviewers understand the changes you're proposing, and help you communicate the purpose of your pull request more effectively.

When you are creating a new pull request, {% data variables.product.prodname_copilot_autocomplete_pr %} will scan through the pull request and provide suggestions as you write, based on the context of the pull request.

## Using {% data variables.product.prodname_copilot_autocomplete_pr %}

You can use {% data variables.product.prodname_copilot_autocomplete_pr %} in the description of a new pull request you're creating.

1. On {% data variables.product.prodname_dotcom_the_website %}, create a pull request.
1. In the description field, start typing your description.
1. As you type, {% data variables.product.prodname_copilot_short %} will provide in-line suggestions based on the context of the pull request.
1. Review the suggestions, which will be shown in grey.
   * To accept a suggestion, press `Tab`.
   * To ignore a suggestion, press `Esc` or continue typing. {% data variables.product.prodname_copilot_short %} will provide new suggestions as you type, based on the additional context.
1. When you're happy with the description, click **Create pull request**.

## Disabling or enabling {% data variables.product.prodname_copilot_autocomplete_pr %}

You can disable or enable {% data variables.product.prodname_copilot_autocomplete_pr %} for your pull request descriptions. Your preference will be saved for future pull requests.

1. On {% data variables.product.prodname_dotcom_the_website %}, create a pull request.
1. At the top of the description field, select {% octicon "copilot" aria-hidden="true" %} then hover over **Autocomplete (Beta)**, and click **Disabled** or **Enabled**.

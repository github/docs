---
title: Writing pull request descriptions with GitHub Copilot text completion
shortTitle: Write PR descriptions
allowTitleToDifferFromFilename: true
intro: 'Write pull request descriptions more quickly and accurately with {% data variables.copilot.copilot_autocomplete_pr %}.'
versions:
  feature: copilot
permissions: 'Members of an enterprise with a subscription to [{% data variables.copilot.copilot_enterprise %}](/copilot/github-copilot-enterprise/overview/about-github-copilot-enterprise)'
topics:
  - Copilot
redirect_from:
  - /copilot/using-github-copilot/using-copilot-text-completion
  - /copilot/how-tos/completions/using-copilot-text-completion
  - /copilot/how-tos/completions/write-pr-descriptions
contentType: how-tos
---

{% data reusables.copilot.text-completion-preview %}

## Using {% data variables.copilot.copilot_autocomplete_pr %}

You can use {% data variables.copilot.copilot_autocomplete_pr %} in the description of a new pull request you're creating.

1. On {% data variables.product.github %}, create a pull request.
1. In the description field, start typing your description.
1. As you type, {% data variables.product.prodname_copilot_short %} will provide in-line suggestions based on the context of the pull request.
1. Review the suggestions, which will be shown in grey.
   * To accept a suggestion, press `Tab`.
   * To ignore a suggestion, press `Esc` or continue typing. {% data variables.product.prodname_copilot_short %} will provide new suggestions as you type, based on the additional context.
1. When you're happy with the description, click **Create pull request**.

## Disabling or enabling {% data variables.copilot.copilot_autocomplete_pr %}

You can disable or enable {% data variables.copilot.copilot_autocomplete_pr %} for your pull request descriptions. Your preference will be saved for future pull requests.

1. On {% data variables.product.github %}, create a pull request.
1. At the top of the description field, select {% octicon "copilot" aria-hidden="true" aria-label="copilot" %} then hover over **Autocomplete ({% data variables.release-phases.public_preview_caps %})**, and click **Disabled** or **Enabled**.

## Further reading

* [AUTOTITLE](/copilot/concepts/completions/text-completion)

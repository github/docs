---
title: Asking GitHub Copilot to make changes to an existing pull request
shortTitle: Update existing PR
allowTitleToDifferFromFilename: true
intro: 'You can ask {% data variables.product.prodname_copilot_short %} to make changes to an existing pull request by mentioning `@copilot`.'
product: '{% data reusables.gated-features.copilot-cloud-agent %}<br><a href="https://github.com/features/copilot/plans?ref_product=copilot&ref_type=engagement&ref_style=button" target="_blank" class="btn btn-primary mt-3 mr-3 no-underline"><span>Sign up for {% data variables.product.prodname_copilot_short %}</span> {% octicon "link-external" height:16 %}</a>'
versions:
  feature: copilot
contentType: how-tos
category:
  - Author and optimize with Copilot
redirect_from:
  - /copilot/how-tos/use-copilot-agents/coding-agent/make-changes-to-an-existing-pr
---

> [!NOTE]
> For an overview of {% data variables.copilot.copilot_cloud_agent %}, see [AUTOTITLE](/copilot/concepts/agents/cloud-agent/about-cloud-agent).

## Introduction

You can ask {% data variables.product.prodname_copilot_short %} to make changes to an existing pull request by mentioning `@copilot` in a comment.

By default, {% data variables.product.prodname_copilot_short %} pushes commits directly to the pull request's branch. Once it has finished work on the changes you requested, it requests your review.

If you prefer {% data variables.product.prodname_copilot_short %} to create a separate pull request instead, you can ask for this using natural language in your comment—for example, "open a PR to fix the tests."

## Resolving merge conflicts

You can ask {% data variables.product.prodname_copilot_short %} to resolve merge conflicts on a pull request by mentioning `@copilot` and asking it to fix the conflicts using natural language, such as "@copilot resolve the merge conflicts on this PR."

{% data variables.product.prodname_copilot_short %} will analyze the conflicting changes, resolve the conflicts, and ensure the build, tests, and linter still pass. Once it has finished, {% data variables.product.prodname_copilot_short %} will request your review so you can verify the conflict resolution before merging.

## Asking {% data variables.product.prodname_copilot_short %} to make changes

1. Navigate to the pull request that you want {% data variables.product.prodname_copilot_short %} to make changes to.
1. Write a comment or review mentioning {% data variables.product.prodname_copilot_short %} with `@copilot`.
1. Optionally, when leaving a pull request comment (not a review or review comment) through the {% data variables.product.github %} web interface, select a model using the model picker.
1. Submit your comment or review.

If you prefer not to use this default behavior, you can ask {% data variables.product.prodname_copilot_short %} to create a new branch and a new pull request targeting your branch instead. Once the agent finishes work, it will request a review from you.

{% data reusables.copilot.cloud-agent.monitoring-progress-heading %}

## Further reading

* [AUTOTITLE](/copilot/concepts/agents/cloud-agent/about-cloud-agent)
* [AUTOTITLE](/copilot/tutorials/cloud-agent/get-the-best-results)
* [AUTOTITLE](/copilot/how-tos/use-copilot-agents/cloud-agent/troubleshoot-cloud-agent#copilot-cant-create-a-pull-request-from-copilot-chat)

---
title: Asking GitHub Copilot to make changes to an existing pull request
shortTitle: Update existing PR
allowTitleToDifferFromFilename: true
intro: 'You can ask {% data variables.product.prodname_copilot_short %} to make changes to an existing pull request created by a human by mentioning `@copilot`.'
product: '{% data reusables.gated-features.copilot-coding-agent %}<br><a href="https://github.com/features/copilot/plans?ref_product=copilot&ref_type=engagement&ref_style=button" target="_blank" class="btn btn-primary mt-3 mr-3 no-underline"><span>Sign up for {% data variables.product.prodname_copilot_short %}</span> {% octicon "link-external" height:16 %}</a>'
versions:
  feature: copilot
topics:
  - Copilot
contentType: how-tos
category:
  - Author and optimize with Copilot
---

> [!NOTE]
> For an overview of {% data variables.copilot.copilot_coding_agent %}, see [AUTOTITLE](/copilot/concepts/about-copilot-coding-agent).

## Introduction

You can ask {% data variables.product.prodname_copilot_short %} to make changes to an existing pull request created by a human developer.

{% data variables.product.prodname_copilot_short %} will create a child pull request, using the existing pull request's branch as the base branch.  Once it has finished work on the changes you requested, it requests your review on the child pull request.

You maintain control of the original pull request: until you accept Copilot's proposed changes by merging its child pull request into your branch, the pull request will remain untouched.

You can ask {% data variables.product.prodname_copilot_short %} to make changes to its child pull request by leaving a review. See [AUTOTITLE](/copilot/using-github-copilot/coding-agent/reviewing-a-pull-request-created-by-copilot).

## Asking {% data variables.product.prodname_copilot_short %} to make changes

1. Navigate to the pull request that you want {% data variables.product.prodname_copilot_short %} to make changes to.
1. Leave a comment or review mentioning {% data variables.product.prodname_copilot_short %} with `@copilot`.

{% data variables.product.prodname_copilot_short %} will open a child pull request, using the existing pull request's branch as the base branch.

{% data variables.product.prodname_copilot_short %} will leave a comment linking to the new pull request. Once the agent finishes work, it will request a review from you.

{% data reusables.copilot.coding-agent.monitoring-progress-heading %}

## Further reading

* [AUTOTITLE](/copilot/concepts/about-copilot-coding-agent)
* [AUTOTITLE](/copilot/tutorials/coding-agent/best-practices)
* [AUTOTITLE](/copilot/using-github-copilot/coding-agent/troubleshooting-copilot-coding-agent#copilot-cant-create-a-pull-request-from-copilot-chat)

---
title: Review output from {% data variables.product.prodname_copilot_short %}
shortTitle: Review {% data variables.product.prodname_copilot_short %} output
allowTitleToDifferFromFilename: true
intro: '{% data variables.product.prodname_copilot_short %} pull requests deserve the same thorough review as any contribution.'
product: '{% data reusables.gated-features.copilot-cloud-agent %}<br><a href="https://github.com/features/copilot/plans?ref_product=copilot&ref_type=engagement&ref_style=button" target="_blank" class="btn btn-primary mt-3 mr-3 no-underline"><span>Sign up for {% data variables.product.prodname_copilot_short %}</span> {% octicon "link-external" height:16 %}</a>'
versions:
  feature: copilot
redirect_from:
  - /copilot/how-tos/use-copilot-agents/coding-agent/review-copilot-prs
  - /copilot/how-tos/use-copilot-agents/cloud-agent/review-copilot-prs
  - /copilot/using-github-copilot/using-copilot-coding-agent-to-work-on-tasks/reviewing-a-pull-request-created-by-copilot
  - /copilot/using-github-copilot/coding-agent/reviewing-a-pull-request-created-by-copilot
  - /copilot/how-tos/agents/copilot-coding-agent/reviewing-a-pull-request-created-by-copilot
  - /copilot/how-tos/agents/copilot-coding-agent/review-copilot-prs
  - /copilot/how-tos/agents/coding-agent/review-copilot-prs
contentType: how-tos
category: 
  - Author and optimize with Copilot
---

## Review {% data variables.product.prodname_copilot_short %}'s changes

When {% data variables.product.prodname_copilot_short %} finishes a coding task and requests your review, check the pull request thoroughly before merging.

> [!IMPORTANT]
> If your repository requires pull request approvals, **your approval of a {% data variables.product.prodname_copilot_short %} pull request won't count** toward the required number. Another reviewer must approve the pull request before it can be merged.

To request changes from {% data variables.product.prodname_copilot_short %} on its pull request, mention `@copilot` in a comment, or push commits directly to the branch. For more information, see [AUTOTITLE](/copilot/how-tos/use-copilot-agents/cloud-agent/use-cloud-agent-on-github).

## Manage {% data variables.product.prodname_actions %} workflow runs

{% data reusables.copilot.cloud-agent-workflow-run-approval-default %} For more information, see [AUTOTITLE](/copilot/how-tos/use-copilot-agents/cloud-agent/configuring-agent-settings).

## Give feedback on {% data variables.product.prodname_copilot_short %}'s work

Use the feedback buttons on {% data variables.product.prodname_copilot_short %}'s pull requests and comments to rate the output. Your feedback helps improve {% data variables.product.prodname_copilot_short %}'s quality.

1. On a pull request or comment from {% data variables.product.prodname_copilot_short %}, click the thumbs up (:+1:) or thumbs down (:-1:) button.
1. If you click the thumbs down button, optionally select a reason and leave a comment, then click **Submit feedback**.

## Further reading

* [AUTOTITLE](/copilot/tutorials/cloud-agent/get-the-best-results)
* [AUTOTITLE](/copilot/how-tos/use-copilot-agents/cloud-agent/troubleshoot-cloud-agent)

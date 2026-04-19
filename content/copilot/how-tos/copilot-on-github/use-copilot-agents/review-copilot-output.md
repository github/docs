---
title: Review output from {% data variables.product.prodname_copilot_short %}
shortTitle: Review {% data variables.product.prodname_copilot_short %} output
allowTitleToDifferFromFilename: true
intro: '{% data variables.product.prodname_copilot_short %} pull requests deserve the same thorough review as any contribution. Mention `@copilot` to request changes, or push commits directly to the branch.'
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
  - /copilot/how-tos/copilot-on-github/use-copilot-agents/iterate-with-copilot
  - /copilot/how-tos/use-copilot-agents/coding-agent/make-changes-to-an-existing-pr
  - /copilot/how-tos/use-copilot-agents/cloud-agent/make-changes-to-an-existing-pr
contentType: how-tos
category: 
  - Author and optimize with Copilot
---

## Review {% data variables.product.prodname_copilot_short %}'s changes

When {% data variables.product.prodname_copilot_short %} finishes a coding task and requests your review, check the pull request thoroughly before merging.

> [!IMPORTANT]
> If your repository requires pull request approvals, **your approval of a {% data variables.product.prodname_copilot_short %} pull request won't count** toward the required number. Another reviewer must approve the pull request before it can be merged.

Mention `@copilot` in a pull request comment to request changes. By default, {% data variables.product.prodname_copilot_short %} pushes commits directly to the pull request branch. To create a separate pull request instead, describe that in your comment. You can also check out the branch and push changes yourself.

Batch review comments instead of submitting them individually. When submitting a pull request comment (not a review or review comment) through the {% data variables.product.github %} web interface, select a model with the model picker. {% data variables.product.prodname_copilot_short %} uses the model from the original pull request by default.

{% data reusables.copilot.cloud-agent.write-access-required %}

When {% data variables.product.prodname_copilot_short %} starts a new session in response to your comment, an eyes emoji (👀) reaction appears on the comment. A "Copilot has started work" event appears in the pull request timeline.

![Screenshot of a pull request timeline with a review comment with the eyes reaction and a "Copilot started work" timeline event.](/assets/images/help/copilot/cloud-agent/comment-to-agent-on-pr.png)

{% data variables.product.prodname_copilot_short %} remembers context from previous sessions on the same pull request, so follow-up requests are faster and more reliable. If the pull request was created by a {% data variables.copilot.copilot_custom_agent_short %}, mentioning `@copilot` continues using that same agent.

## Resolve merge conflicts

You can ask {% data variables.product.prodname_copilot_short %} to resolve merge conflicts on a pull request in two ways:

* **Using the "Fix with {% data variables.product.prodname_copilot_short %}" button**: If a pull request has merge conflicts, click the **Fix with {% data variables.product.prodname_copilot_short %}** button that appears in the merge box.
* **Using an @copilot mention**: Mention `@copilot` in a comment on the pull request and ask it to fix the conflicts—for example, "@copilot resolve the merge conflicts on this PR."

{% data variables.product.prodname_copilot_short %} analyzes the conflicting changes, resolves them, and verifies that the build, tests, and linter still pass. It then requests your review so you can confirm the resolution before merging.

## Manage {% data variables.product.prodname_actions %} workflow runs

{% data reusables.copilot.cloud-agent-workflow-run-approval-default %} For more information, see [AUTOTITLE](/copilot/how-tos/use-copilot-agents/cloud-agent/configuring-agent-settings).

## Give feedback on {% data variables.product.prodname_copilot_short %}'s work

Use the feedback buttons on {% data variables.product.prodname_copilot_short %}'s pull requests and comments to rate the output. Your feedback helps improve {% data variables.product.prodname_copilot_short %}'s quality.

1. On a pull request or comment from {% data variables.product.prodname_copilot_short %}, click the thumbs up (:+1:) or thumbs down (:-1:) button.
1. If you click the thumbs down button, optionally select a reason and leave a comment, then click **Submit feedback**.

## Further reading

* [AUTOTITLE](/copilot/tutorials/cloud-agent/get-the-best-results)
* [AUTOTITLE](/copilot/how-tos/use-copilot-agents/cloud-agent/troubleshoot-cloud-agent)

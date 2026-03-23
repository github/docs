---
title: Reviewing a pull request created by GitHub Copilot
shortTitle: Review Copilot PRs
intro: 'After {% data variables.product.prodname_copilot_short %} creates a pull request, you should review it. You can mention `@copilot` to ask {% data variables.product.prodname_copilot_short %} to make changes, or push changes yourself.'
product: '{% data reusables.gated-features.copilot-coding-agent %}<br><a href="https://github.com/features/copilot/plans?ref_product=copilot&ref_type=engagement&ref_style=button" target="_blank" class="btn btn-primary mt-3 mr-3 no-underline"><span>Sign up for {% data variables.product.prodname_copilot_short %}</span> {% octicon "link-external" height:16 %}</a>'
versions:
  feature: copilot
redirect_from:
  - /copilot/using-github-copilot/using-copilot-coding-agent-to-work-on-tasks/reviewing-a-pull-request-created-by-copilot
  - /copilot/using-github-copilot/coding-agent/reviewing-a-pull-request-created-by-copilot
  - /copilot/how-tos/agents/copilot-coding-agent/reviewing-a-pull-request-created-by-copilot
  - /copilot/how-tos/agents/copilot-coding-agent/review-copilot-prs
  - /copilot/how-tos/agents/coding-agent/review-copilot-prs
contentType: how-tos
category: 
  - Author and optimize with Copilot
---

> [!NOTE]
> For an introduction to {% data variables.copilot.copilot_coding_agent %}, see [AUTOTITLE](/copilot/concepts/about-copilot-coding-agent).

## Reviewing {% data variables.product.prodname_copilot_short %}'s changes

After {% data variables.product.prodname_copilot_short %} has finished working on a coding task, and has requested a pull request review from you, you should review {% data variables.product.prodname_copilot_short %}'s work thoroughly before merging the pull request.

> [!IMPORTANT]
> If you have rules or branch protections that require pull request approvals, and you ask {% data variables.product.prodname_copilot_short %} to create a pull request, you can approve the pull request, but **your approval won't count** toward the required number of approvals. Someone else must approve the pull request for it to be merged.

You can ask {% data variables.product.prodname_copilot_short %} to make changes by mentioning `@copilot` in pull request comments, or you can check out {% data variables.product.prodname_copilot_short %}'s branch and make changes yourself.

Optionally, when submitting a pull request comment (not a review or review comment) through the {% data variables.product.github %} web interface, you can select a model using the model picker. By default, {% data variables.product.prodname_copilot_short %} will use the model originally used to create the pull request.

> [!TIP]
> We recommend you batch your review comments instead of submitting them individually.

{% data reusables.copilot.coding-agent.write-access-required %}

When {% data variables.product.prodname_copilot_short %} starts a new agent session in response to your comment, an eyes emoji (👀) is added as a reaction to the comment, and a "Copilot has started work" event is added to the pull request timeline.

![Screenshot of a pull request timeline with a review comment with the eyes reaction and a "Copilot started work" timeline event.](/assets/images/help/copilot/coding-agent/comment-to-agent-on-pr.png)

When {% data variables.product.prodname_copilot_short %} starts a new session on the same pull request, it remembers context from the previous session, allowing it to work faster and more reliably.

> [!NOTE]
> If the pull request was created by a {% data variables.copilot.copilot_custom_agent_short %}, when you mention `@copilot` in pull request comments, the same {% data variables.copilot.copilot_custom_agent_short %} will be used to make further changes. This ensures consistency in the agent's specialized configuration throughout the pull request lifecycle. See [AUTOTITLE](/copilot/how-tos/use-copilot-agents/coding-agent/create-custom-agents).

For more information, see the section "Use comments to iterate on a pull request" in [AUTOTITLE](/copilot/using-github-copilot/coding-agent/best-practices-for-using-copilot-to-work-on-tasks#using-comments-to-iterate-on-a-pull-request).

## Managing {% data variables.product.prodname_actions %} workflow runs

{% data reusables.copilot.coding-agent-workflow-run-approval-default %} For more information, see [AUTOTITLE](/copilot/how-tos/use-copilot-agents/coding-agent/configuring-agent-settings).

## Giving feedback on {% data variables.product.prodname_copilot_short %}'s work

You can provide feedback on {% data variables.product.prodname_copilot_short %}'s work using the feedback buttons on  {% data variables.product.prodname_copilot_short %}'s pull requests and comments. We use your feedback to improve the product and the quality of {% data variables.product.prodname_copilot_short %}'s solutions.

1. On a pull request or comment from {% data variables.product.prodname_copilot_short %}, click the thumbs up (:+1:) or thumbs down (:-1:) button.
1. If you click the thumbs down button, you're asked to provide additional information. You can, optionally, pick the reason for your negative feedback and leave a comment before clicking **Submit feedback**.

## Further reading

* [AUTOTITLE](/copilot/tutorials/coding-agent/best-practices)
* [AUTOTITLE](/copilot/using-github-copilot/coding-agent/using-the-copilot-coding-agent-logs)
* [AUTOTITLE](/copilot/using-github-copilot/coding-agent/troubleshooting-copilot-coding-agent)

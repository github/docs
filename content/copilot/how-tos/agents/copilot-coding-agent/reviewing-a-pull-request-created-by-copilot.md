---
title: Reviewing a pull request created by Copilot
shortTitle: Review Copilot PRs
intro: 'After {% data variables.product.prodname_copilot_short %} creates a pull request you should review it and comment on anything that needs changes.'
product: '{% data reusables.gated-features.copilot-coding-agent %}<br><a href="https://github.com/features/copilot/plans?ref_cta=Copilot+plans+signup&ref_loc=reviewing+a+pull+request+created+by+copilot&ref_page=docs" target="_blank" class="btn btn-primary mt-3 mr-3 no-underline"><span>Sign up for {% data variables.product.prodname_copilot_short %}</span> {% octicon "link-external" height:16 %}</a>'
versions:
  feature: copilot
topics:
  - Copilot
type: how_to
redirect_from:
  - /copilot/using-github-copilot/using-copilot-coding-agent-to-work-on-tasks/reviewing-a-pull-request-created-by-copilot
  - /copilot/using-github-copilot/coding-agent/reviewing-a-pull-request-created-by-copilot
---

> [!NOTE]
> {% data reusables.copilot.coding-agent.preview-note-text %}
>
> For an introduction to {% data variables.copilot.copilot_coding_agent %}, see [AUTOTITLE](/copilot/concepts/about-copilot-coding-agent).

## Reviewing {% data variables.product.prodname_copilot_short %}'s changes

After {% data variables.product.prodname_copilot_short %} has finished working on a coding task, and has requested a pull request review from you, you should review {% data variables.product.prodname_copilot_short %}'s work thoroughly before merging the pull request.

> [!IMPORTANT]
> If you have the "Required approvals" rule or branch protection enabled, you won't be able to approve pull requests that you initiated by assigning the related issue to {% data variables.product.prodname_copilot_short %}. Someone else must approve the pull request before it can be merged.

You can ask {% data variables.product.prodname_copilot_short %} to make changes using pull request comments, or you can check out {% data variables.product.prodname_copilot_short %}'s branch and make changes yourself.

> [!TIP]
> We recommend you batch your review comments instead of submitting them individually.

When you leave a comment on {% data variables.product.prodname_copilot_short %}'s pull request, {% data variables.product.prodname_copilot_short %} will consider your comment, and decide whether to start a new agent session to respond.

{% data reusables.copilot.coding-agent.write-access-required %}

If {% data variables.product.prodname_copilot_short %} starts a new agent session in response to your comment, an eyes emoji (👀) is added as a reaction to the comment, and a "Copilot has started work" event is added to the pull request timeline.

![Screenshot of a pull request timeline with a review comment with the eyes reaction and a "Copilot started work" timeline event.](/assets/images/help/copilot/coding-agent/comment-to-agent-on-pr.png)

{% data variables.product.prodname_copilot_short %} may ignore a comment if it considers that the comment was not intended for it. If you are sure that you want {% data variables.product.prodname_copilot_short %} to respond to your comment, you can @mention {% data variables.product.prodname_copilot_short %} by including `@copilot` in your comment.

> [!TIP]
> If you don't want {% data variables.product.prodname_copilot_short %} to respond to comments on a pull request, you can unassign {% data variables.product.prodname_copilot_short %} from the pull request. If you later reassign {% data variables.product.prodname_copilot_short %} to the same pull request it will respond to new comments and push more changes. It will not respond to comment that were added while it was not assigned.

For more information, see the section "Use comments to iterate on a pull request" in [AUTOTITLE](/copilot/using-github-copilot/coding-agent/best-practices-for-using-copilot-to-work-on-tasks#using-comments-to-iterate-on-a-pull-request).

## Managing {% data variables.product.prodname_actions %} workflow runs

{% data variables.product.prodname_actions %} workflows will not run automatically when {% data variables.product.prodname_copilot_short %} pushes changes to a pull request.

{% data variables.product.prodname_actions %} workflows can be privileged and have access to sensitive secrets. {% data reusables.actions.workflows.inspect-proposed-changes %}

To allow {% data variables.product.prodname_actions %} workflows to run, click the **Approve and run workflows** button in the pull request's merge box.

![Screenshot of the merge box on a pull request from Copilot with the "Approve and run workflows" button.](/assets/images/help/copilot/coding-agent/approve-and-run-workflows.png)

## Giving feedback on {% data variables.product.prodname_copilot_short %}'s work

You can provide feedback on {% data variables.product.prodname_copilot_short %}'s work using the feedback buttons on  {% data variables.product.prodname_copilot_short %}'s pull requests and comments. We use your feedback to improve the product and the quality of {% data variables.product.prodname_copilot_short %}'s solutions.

1. On a pull request or comment from {% data variables.product.prodname_copilot_short %}, click the thumbs up (:+1:) or thumbs down (:-1:) button.
1. If you click the thumbs down button, you're asked to provide additional information. You can, optionally, pick the reason for your negative feedback and leave a comment before clicking **Submit feedback**.

## Further reading

* [AUTOTITLE](/copilot/using-github-copilot/coding-agent/best-practices-for-using-copilot-to-work-on-tasks)
* [AUTOTITLE](/copilot/using-github-copilot/coding-agent/using-the-copilot-coding-agent-logs)
* [AUTOTITLE](/copilot/using-github-copilot/coding-agent/troubleshooting-copilot-coding-agent)

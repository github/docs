---
title: Using {% data variables.copilot.copilot_code-review %} on {% data variables.product.github %}
shortTitle: '{% data variables.copilot.copilot_code-review_short %}'
allowTitleToDifferFromFilename: true
intro: '{% data variables.product.prodname_copilot %} reviews your pull requests and suggests ready-to-apply changes, so you get fast, actionable feedback on every commit.'
versions:
  feature: copilot
contentType: how-tos
category:
  - Author and optimize with Copilot
---

{% data variables.copilot.copilot_code-review_short %} is also available for organization members without a {% data variables.product.prodname_copilot_short %} license, when enabled by an enterprise administrator or organization owner. See [{% data variables.copilot.copilot_code-review_short %} for organization members without a {% data variables.product.prodname_copilot_short %} license](/copilot/concepts/agents/code-review#copilot-code-review-for-organization-members-without-a-copilot-license).

## Request a review from {% data variables.product.prodname_copilot_short %}

1. On {% data variables.product.prodname_dotcom_the_website %}, create or open a pull request.
1. Under "Reviewers" in the right sidebar, next to **{% data variables.product.prodname_copilot_short %}**, click **Request**.

   ![Screenshot of {% data variables.product.prodname_copilot_short %} with 'Request' button under 'Reviewers'.](/assets/images/help/copilot/code-review/request-review@2x.png)

1. Wait for {% data variables.product.prodname_copilot_short %} to finish reviewing. This usually takes less than 30 seconds.

1. Read through {% data variables.product.prodname_copilot_short %}'s comments on the pull request.

   ![Screenshot of a code review left by {% data variables.product.prodname_copilot_short %}.](/assets/images/help/copilot/code-review/review-comment@2x.png)

{% data variables.product.prodname_copilot_short %} always leaves a "Comment" review, not an "Approve" or "Request changes" review. Its reviews do not count toward required approvals and will not block merging.

{% data variables.product.prodname_copilot_short %}'s review comments work like comments from human reviewers. Add reactions, reply, resolve, or hide them. Any replies you add are visible to other people but not to {% data variables.product.prodname_copilot_short %}.

You can also request a review from {% data variables.product.prodname_copilot_short %} through the {% data variables.product.github %} REST API by requesting `copilot-pull-request-reviewer[bot]` as a reviewer. For more information, see [AUTOTITLE](/rest/pulls/review-requests#request-reviewers-for-a-pull-request).

## Work with suggested changes

{% data variables.product.prodname_copilot_short %}'s feedback often includes suggested changes you can apply in a few clicks. Accept a single suggestion or group multiple suggestions into one commit. For more information, see [AUTOTITLE](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/incorporating-feedback-in-your-pull-request).

To have {% data variables.copilot.copilot_cloud_agent %} implement suggested changes directly:

1. Enable {% data variables.copilot.copilot_code-review %} and {% data variables.copilot.copilot_cloud_agent %}.
1. On a review comment from {% data variables.copilot.copilot_code-review %}, click **Fix with Copilot**. This creates a draft comment where you instruct {% data variables.product.prodname_copilot_short %} to address specific feedback. You can choose whether {% data variables.product.prodname_copilot_short %} creates a new pull request against your branch or commits directly to the same pull request.

## Provide feedback on reviews

Rate {% data variables.product.prodname_copilot_short %}'s comments to help improve future suggestions.

1. On a review comment from {% data variables.product.prodname_copilot_short %}, click the thumbs up (:+1:) or thumbs down (:-1:) button.

   ![Screenshot showing a {% data variables.copilot.copilot_code-review_short %} comment with the thumbs up and thumbs down buttons.](/assets/images/help/copilot/code-review/feedback-controls@2x.png)

1. If you click thumbs down, optionally pick a reason and leave a comment, then click **Submit feedback**.

   ![Screenshot of the form for providing additional information when you give negative feedback on a comment from {% data variables.product.prodname_copilot_short %}.](/assets/images/help/copilot/code-review/feedback-modal@2x.png)

## Request a re-review

When you push new changes to a pull request that {% data variables.product.prodname_copilot_short %} has reviewed, it does not automatically re-review unless you've configured automatic reviews to include new pushes.

To manually request a re-review, click the {% octicon "sync" aria-label="Re-request review" %} button next to {% data variables.product.prodname_copilot_short %}'s name in the **Reviewers** menu. For more information, see [AUTOTITLE](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/requesting-a-pull-request-review).

To automatically request re-reviews on every push, enable automatic code review and select **Review new pushes** in the ruleset settings. For more information, see [AUTOTITLE](/copilot/how-tos/copilot-on-github/set-up-copilot/configure-automatic-review#configuring-automatic-code-review-for-repositories-in-an-organization).

When re-reviewing, {% data variables.product.prodname_copilot_short %} may repeat previous comments, even if you resolved or downvoted them.

## Enable automatic reviews

By default, you request reviews from {% data variables.product.prodname_copilot_short %} manually on each pull request. To enable automatic reviews for all pull requests, see [AUTOTITLE](/copilot/how-tos/agents/copilot-code-review/automatic-code-review).

## Customize reviews with custom instructions

{% data reusables.copilot.code-review.custom-instructions-information %}

## MCP servers and agent skills

{% data reusables.copilot.code-review.skills-and-mcp-preview-note %}

{% data variables.copilot.copilot_code-review_short %} can use agent skills and MCP servers configured in the repository, when they are relevant to the review.

To make these available for {% data variables.copilot.copilot_code-review_short %} on {% data variables.product.github %}, configure:

* **Agent skills** in your repository (in `.github/skills`). If you want a skill to target review tasks, use a review-focused skill directory name such as `code-review`. For setup details, see [AUTOTITLE](/copilot/how-tos/copilot-on-github/customize-copilot/customize-cloud-agent/add-skills).
* **MCP servers** in repository Copilot settings. The {% data variables.product.github %} MCP server and Playwright MCP server are enabled by default. For setup details, see [AUTOTITLE](/copilot/how-tos/copilot-on-github/customize-copilot/configure-mcp-servers).

{% data reusables.copilot.code-review.mcp-context-usage %}

{% data reusables.copilot.code-review.mcp-tools-setting %}

## Further reading

* [AUTOTITLE](/copilot/concepts/code-review)
* [AUTOTITLE](/copilot/how-tos/copilot-on-github/use-copilot-agents/review-copilot-output)

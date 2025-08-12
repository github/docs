---
title: Using GitHub Copilot code review
shortTitle: Use code review
intro: 'Learn how to request a code review from {% data variables.product.prodname_copilot %}.'
allowTitleToDifferFromFilename: true
versions:
  feature: copilot
topics:
  - Copilot
redirect_from:
  - /early-access/copilot/code-review/using-copilot-code-review
  - /early-access/copilot/code-reviews/using-copilot-code-review
  - /early-access/copilot/code-reviews/using-copilot-code-reviews
  - /copilot/using-github-copilot/code-review/using-copilot-code-review
  - /copilot/how-tos/agents/copilot-code-review/using-copilot-code-review
  - /copilot/how-tos/agents/copilot-code-review/use-code-review
  - /copilot/how-tos/agents/request-a-code-review/use-code-review
contentType: how-tos
---

## Introduction

{% data variables.product.prodname_copilot %} can review your code and provide feedback. Where possible, {% data variables.product.prodname_copilot_short %}'s feedback includes suggested changes which you can apply with a couple of clicks.

For a full introduction to {% data variables.copilot.copilot_code-review %}, see [AUTOTITLE](/copilot/concepts/code-review/code-review).

{% webui %}

## Using {% data variables.copilot.copilot_code-review_short %}

These instructions explain how to use {% data variables.copilot.copilot_code-review_short %} in the {% data variables.product.github %} website. To see instructions for other popular coding environments, use the tool switcher at the top of the page.

1. On {% data variables.product.prodname_dotcom_the_website %}, create a pull request or navigate to an existing pull request.
1. Open the **Reviewers** menu, then select **{% data variables.product.prodname_copilot_short %}**.

   ![Screenshot of selecting '{% data variables.product.prodname_copilot_short %}' from the 'Reviewers' menu.](/assets/images/help/copilot/code-review/request-review@2x.png)

1. Wait for {% data variables.product.prodname_copilot_short %} to review your pull request. This usually takes less than 30 seconds.

1. Scroll down and read through {% data variables.product.prodname_copilot_short %}'s comments.

   ![Screenshot of a code review left by {% data variables.product.prodname_copilot_short %}.](/assets/images/help/copilot/code-review/review-comment@2x.png)

   {% data variables.product.prodname_copilot_short %} always leaves a "Comment" review, not an "Approve" review or a "Request changes" review. This means that {% data variables.product.prodname_copilot_short %}'s reviews do not count toward required approvals for the pull request, and {% data variables.product.prodname_copilot_short %}'s reviews will not block merging changes. For more details, see [AUTOTITLE](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/approving-a-pull-request-with-required-reviews).

1. {% data variables.product.prodname_copilot_short %}'s review comments behave like review comments from humans. You can add reactions to them, comment on them, resolve them and hide them.

   Any comments you add to {% data variables.product.prodname_copilot_short %}'s review comments will be visible to humans, but they won't be visible to {% data variables.product.prodname_copilot_short %}, and {% data variables.product.prodname_copilot_short %} won't reply.

## Working with suggested changes provided by {% data variables.product.prodname_copilot_short %}

Where possible, {% data variables.product.prodname_copilot_short %}'s feedback includes suggested changes which you can apply with a couple of clicks.

If you're happy with the changes, you can accept a single suggestion from {% data variables.product.prodname_copilot_short %} and commit it, or accept a group of suggestions together in a single commit. For more information, see [AUTOTITLE](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/incorporating-feedback-in-your-pull-request).

## Providing feedback on {% data variables.product.prodname_copilot_short %}'s reviews

You can provide feedback on {% data variables.product.prodname_copilot_short %}'s comments directly within each comment. We use this information to improve the product and the quality of {% data variables.product.prodname_copilot_short %}'s suggestions.

1. On a pull request review comment from {% data variables.product.prodname_copilot_short %}, click the thumbs up (:+1:) or thumbs down (:-1:) button.

   ![Screenshot showing a {% data variables.copilot.copilot_code-review_short %} comment with the thumbs up and thumbs down buttons.](/assets/images/help/copilot/code-review/feedback-controls@2x.png)

1. If you click the thumbs down button, you're asked to provide additional information. You can, optionally, pick the reason for your negative feedback and leave a comment before clicking **Submit feedback**.

   ![Screenshot of the form for providing additional information when you give negative feedback on a comment from {% data variables.product.prodname_copilot_short %}.](/assets/images/help/copilot/code-review/feedback-modal@2x.png)

## Requesting a re-review from {% data variables.product.prodname_copilot_short %}

When you push changes to a pull request that {% data variables.product.prodname_copilot_short %} has reviewed, it won't automatically re-review your changes.

To request a re-review from {% data variables.product.prodname_copilot_short %}, click the {% octicon "sync" aria-label="Re-request review" %} button next to {% data variables.product.prodname_copilot_short %}'s name in the **Reviewers** menu. For more information, see [AUTOTITLE](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/requesting-a-pull-request-review).

> [!NOTE] When re-reviewing a pull request, {% data variables.product.prodname_copilot_short %} may repeat the same comments again, even if they have been dismissed with the "Resolve conversation" button or downvoted with the thumbs down (:-1:) button.

## Enabling automatic reviews

By default, you manually request a review from {% data variables.product.prodname_copilot_short %} on each pull request, in the same way you would request a review from a human. However, you can set up {% data variables.product.prodname_copilot_short %} to automatically review all pull requests. See [AUTOTITLE](/copilot/how-tos/agents/copilot-code-review/automatic-code-review).

## Customizing {% data variables.product.prodname_copilot_short %}'s reviews with custom instructions

{% data reusables.copilot.code-review.custom-instructions-information %}

## Customizing {% data variables.product.prodname_copilot_short %}'s reviews with coding guidelines

{% data reusables.copilot.code-review.custom-coding-guidelines %}

{% endwebui %}

{% vscode %}

## Using {% data variables.copilot.copilot_code-review_short %}

These instructions explain how to use {% data variables.copilot.copilot_code-review_short %} in {% data variables.product.prodname_vscode %}. To see instructions for other popular coding environments, use the tool switcher at the top of the page.

> [!NOTE] {% data variables.copilot.copilot_code-review_short %} is available in {% data variables.product.prodname_vscode %} with version 0.22 or later of the {% data variables.copilot.copilot_chat %} extension.

### Reviewing a selection of code

You can request an initial review of a highlighted selection of code in {% data variables.product.prodname_vscode %}.

1. In {% data variables.product.prodname_vscode %}, select the code you want to review.
1. Open the {% data variables.product.prodname_vscode_command_palette_shortname %}
   * For Mac:
      * Use: <kbd>Shift</kbd>+<kbd>Command</kbd>+<kbd>P</kbd>
   * For Windows or Linux:
      * Use <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd>
1. In the command palette, search for and select **{% data variables.product.prodname_copilot %}: Review and Comment**.

   ![Screenshot of the command palette in {% data variables.product.prodname_vscode %} with the **{% data variables.product.prodname_copilot %}: Review and Comment** command selected.](/assets/images/help/copilot/vsc-review-and-comment.png)

1. Wait for {% data variables.product.prodname_copilot_short %} to review your changes. This usually takes less than 30 seconds.
1. If {% data variables.product.prodname_copilot_short %} has any comments, they will be shown inline in your file, and in the **Problems** tab.

### Reviewing all uncommitted changes

You can request a review of your uncommitted changes in {% data variables.product.prodname_vscode %}.

1. In {% data variables.product.prodname_vscode_shortname %}, click the **Source Control** button in the Activity Bar.
1. At the top of the **Source Control** view, hover over **CHANGES**, then click the {% data reusables.copilot.code-review.staging-icon-vscode %} **{% data variables.product.prodname_copilot_short %} Code Review - Uncommitted Changes** button.

   ![Screenshot of the "Source Control" view. The code review button is outlined in dark orange.](/assets/images/help/copilot/code-review/vscode-review-button.png)

1. Wait for {% data variables.product.prodname_copilot_short %} to review your changes. This usually takes less than 30 seconds.
1. If {% data variables.product.prodname_copilot_short %} has any comments, they will be shown inline in your file(s), and in the **Problems** tab.

## Working with suggested changes provided by {% data variables.product.prodname_copilot_short %}

Where possible, {% data variables.product.prodname_copilot_short %}'s feedback includes suggested changes which you can apply with a single click.

![Screenshot of a comment from {% data variables.product.prodname_copilot_short %} in {% data variables.product.prodname_vscode %} with a suggested change.](/assets/images/help/copilot/code-review/vscode-comment@2x.png)

If you're happy with the change, you can accept a suggestion from {% data variables.product.prodname_copilot_short %} by clicking the **Apply and Go To Next** button. Any changes you apply will not be automatically committed.

If you don't want to apply {% data variables.product.prodname_copilot_short %}'s suggested change, click the **Discard and Go to Next** button.

## Providing feedback on {% data variables.product.prodname_copilot_short %}'s reviews

You can provide feedback on {% data variables.product.prodname_copilot_short %}'s comments directly within each comment. We use this information to improve the product and the quality of {% data variables.product.prodname_copilot_short %}'s suggestions.

To provide feedback, hover over the comment and click the thumbs up or thumbs down button.

![Screenshot of a comment from {% data variables.product.prodname_copilot_short %} in {% data variables.product.prodname_vscode %} with feedback buttons displayed. The buttons are outlined in dark orange.](/assets/images/help/copilot/code-review/vscode-comment-feedback@2x.png)

## Customizing {% data variables.product.prodname_copilot_short %}'s reviews with custom instructions

{% data reusables.copilot.code-review.custom-instructions-information %}

## Customizing {% data variables.product.prodname_copilot_short %}'s reviews with coding guidelines

{% data reusables.copilot.code-review.custom-coding-guidelines %}

{% endvscode %}

{% visualstudio %}

## Prerequisite

To use {% data variables.copilot.copilot_code-review_short %}, you must use {% data variables.product.prodname_vs %} version 17.14 or later. See the [{% data variables.product.prodname_vs %} downloads page](https://visualstudio.microsoft.com/downloads/).

## Using {% data variables.copilot.copilot_code-review_short %}

These instructions explain how to use {% data variables.copilot.copilot_code-review_short %} in {% data variables.product.prodname_vs %}. To see instructions for other popular coding environments, use the tool switcher at the top of the page.

1. In the Git Changes window, click **Review changes with {% data variables.product.prodname_copilot_short %}**.
   This button appears as a comment icon with a sparkle.
1. {% data variables.product.prodname_copilot_short %} will begin reviewing your changes. After a few moments, a link showing the number of code review comments appears in the Git Changes window.
1. Click the link to view and navigate the comments. If no issues are found, you’ll see the message:
   {% data variables.product.prodname_copilot_short %} did not comment on any files.
1. {% data variables.product.prodname_copilot_short %} displays comments in your code with a summary of each potential issue. You can:

   * Review and make changes based on the suggestions.
   * Dismiss a comment using the downward arrow in the top-right corner of the comment box.

1. To remove all review comments, click {% octicon "x" aria-label="The X icon" %} next to the code review link in the Git Changes window.

For more information on enabling and configuring {% data variables.copilot.copilot_code-review_short %} in {% data variables.product.prodname_vs %}, see [Review local changes with {% data variables.copilot.copilot_chat_short %}](https://learn.microsoft.com/en-us/visualstudio/version-control/git-make-commit?view=vs-2022#review-local-changes-with-copilot-chat) in the {% data variables.product.prodname_vs %} documentation.

{% endvisualstudio %}

{% mobile %}

## Using {% data variables.copilot.copilot_code-review_short %}

These instructions explain how to use {% data variables.copilot.copilot_code-review_short %} in {% data variables.product.prodname_mobile %}. To see instructions for other popular coding environments, use the tool switcher at the top of the page.

1. In {% data variables.product.prodname_mobile %}, open a pull request.
1. Scroll down to the **Reviews** section and expand it.
1. Click **Request Reviews**.
1. Add {% data variables.product.prodname_copilot_short %} as a reviewer, then click **Done**.

{% data variables.product.prodname_copilot_short %} will review the changes and provide feedback.

{% endmobile %}

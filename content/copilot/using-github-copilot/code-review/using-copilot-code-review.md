---
title: Using GitHub Copilot code review
shortTitle: Using code review
intro: "Learn how to request a code review from {% data variables.product.prodname_copilot %}."
allowTitleToDifferFromFilename: true
product: '{% data reusables.gated-features.copilot-free-availability %}'
versions:
  feature: copilot
topics:
  - Copilot
redirect_from:
  - /early-access/copilot/code-review/using-copilot-code-review
  - /early-access/copilot/code-reviews/using-copilot-code-review
  - /early-access/copilot/code-reviews/using-copilot-code-reviews
---

{% data reusables.copilot.code-review.preview-note %}

## About {% data variables.copilot.copilot_code-review_short %}

{% data variables.product.prodname_copilot %} can review your code and provide feedback. Where possible, {% data variables.product.prodname_copilot_short %}'s feedback includes suggested changes which you can apply with a couple of clicks.

{% data variables.copilot.copilot_code-review_short %} supports two types of review:

* **Review selection:** Highlight code and ask for an initial review _({% data variables.product.prodname_vscode %} only)_
* **Review changes:** Request a deeper review of all your changes _({% data variables.product.github %} website and {% data variables.product.prodname_vscode %})_

The current functionality and availability of the two types of review is summarized in the following table:

{% rowheaders %}

| Feature   | Review selection  | Review changes  |
| --------- | ----------------- | --------------- |
| Environment | {% data variables.product.prodname_vscode %} | {% data variables.product.prodname_vscode %} and the {% data variables.product.github %} website |
| Description | Initial review of a highlighted section of code with feedback and suggestions  | Deeper review of all changes |
| Language support | All | C#, Go, Java, JavaScript, Markdown, Python, Ruby, TypeScript |
| Custom coding guidelines support | No | Yes, see [Customizing {% data variables.product.prodname_copilot_short %}'s reviews with coding guidelines](#customizing-copilots-reviews-with-coding-guidelines) |
| Availability | {% data variables.release-phases.public_preview_caps %}, available to all {% data variables.product.prodname_copilot_short %} subscribers | {% data variables.release-phases.public_preview_caps %} with waitlist, see [Join the {% data variables.copilot.copilot_code-review_short %} waitlist](https://gh.io/copilot-code-review-waitlist) |

{% endrowheaders %}

> [!WARNING] {% data variables.product.prodname_copilot_short %} isn't guaranteed to spot all problems or issues in a pull request, and sometimes it will make mistakes. Always validate {% data variables.product.prodname_copilot_short %}'s feedback carefully, and supplement {% data variables.product.prodname_copilot_short %}'s feedback with a human review.

For more information, see [AUTOTITLE](/copilot/responsible-use-of-github-copilot-features/responsible-use-of-github-copilot-code-review).

## Requesting a review from {% data variables.product.prodname_copilot_short %}

{% webui %}

These instructions explain how to use {% data variables.copilot.copilot_code-review_short %} in the {% data variables.product.github %} website. To see instructions for {% data variables.product.prodname_vscode %}, use the "{% data variables.product.prodname_vscode %}" tool switcher at the top of the page.

### Requesting a pull request review from {% data variables.product.prodname_copilot_short %}

> [!NOTE] Requesting a pull request review from {% data variables.product.prodname_copilot_short %} is currently only available to a limited number of {% data variables.product.prodname_copilot_short %} subscribers. To join the waitlist, see [Join the {% data variables.copilot.copilot_code-review_short %} waitlist](https://gh.io/copilot-code-review-waitlist).

1. On {% data variables.product.prodname_dotcom_the_website %}, create a pull request or navigate to an existing pull request.
1. Open the **Reviewers** menu, then select **{% data variables.product.prodname_copilot_short %}**.

   ![Screenshot of selecting '{% data variables.product.prodname_copilot_short %}' from the 'Reviewers' menu.](/assets/images/help/copilot/code-review/request-review@2x.png)

1. Wait for {% data variables.product.prodname_copilot_short %} to review your pull request. This usually takes less than 30 seconds.

1. Scroll down and read through {% data variables.product.prodname_copilot_short %}'s comments.

   ![Screenshot of a code review left by {% data variables.product.prodname_copilot_short %}.](/assets/images/help/copilot/code-review/review-comment@2x.png)

   {% data variables.product.prodname_copilot_short %} always leaves a "Comment" review, not an "Approve" review or a "Request changes" review. This means that {% data variables.product.prodname_copilot_short %}'s reviews do not count toward required reviews for the pull request, and {% data variables.product.prodname_copilot_short %}'s reviews will not block merging changes. For more details, see [AUTOTITLE](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/approving-a-pull-request-with-required-reviews).

1. {% data variables.product.prodname_copilot_short %}'s review comments behave like review comments from humans. You can add reactions to them, comment on them, resolve them and hide them.

   Any comments you add to {% data variables.product.prodname_copilot_short %}'s review comments will be visible to humans, but they won't be visible to {% data variables.product.prodname_copilot_short %}, and {% data variables.product.prodname_copilot_short %} won't reply.

## Working with suggested changes provided by {% data variables.product.prodname_copilot_short %}

Where possible, {% data variables.product.prodname_copilot_short %}'s feedback includes suggested changes which you can apply with a couple of clicks.

If you're happy with the changes, you can accept a single suggestion from {% data variables.product.prodname_copilot_short %} and commit it, or accept a group of suggestions together in a single commit. For more information, see [AUTOTITLE](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/incorporating-feedback-in-your-pull-request).

If you want to validate {% data variables.product.prodname_copilot_short %}'s suggested changes (for example by running automated tests or your linter), or if you want to make modifications before committing the suggested changes, click the **Open in Workspace** button. For more information, see [AUTOTITLE](/copilot/using-github-copilot/using-github-copilot-for-pull-requests/using-copilot-to-help-you-work-on-a-pull-request).

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

## Enabling automatic reviews from {% data variables.product.prodname_copilot_short %}

By default, you will have to manually request a review from {% data variables.product.prodname_copilot_short %} on each pull request.

You can enable automatic reviews from {% data variables.product.prodname_copilot_short %} on all pull requests using rulesets configured at the repository level or organization level. For more information, see [AUTOTITLE](/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/about-rulesets).

To turn this on, enable the **Request pull request review from {% data variables.product.prodname_copilot_short %}** branch rule, nested under **Require a pull request before merging**.

![Screenshot of the "Request pull request review from {% data variables.product.prodname_copilot_short %}" branch rule.](/assets/images/help/copilot/code-review/request-review-branch-rule@2x.png)

## Customizing {% data variables.product.prodname_copilot_short %}'s reviews with coding guidelines

{% data reusables.copilot.code-review.custom-coding-guidelines %}

![Screenshot of a comment produced from a custom coding guideline.](/assets/images/help/copilot/code-review/coding-guidelines-comment@2x.png)

{% endwebui %}

{% vscode %}

These instructions explain how to use {% data variables.copilot.copilot_code-review_short %} in {% data variables.product.prodname_vscode %}. To see instructions for the {% data variables.product.github %} website, use the "Web browser" tool switcher at the top of the page.

> [!NOTE] {% data variables.copilot.copilot_code-review_short %} is only available in {% data variables.product.prodname_vscode %} with version 0.22 or later of the {% data variables.product.prodname_copilot_chat %} extension.

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

   ![Screenshot of the progress indicator when {% data variables.product.prodname_copilot_short %} is performing a review in {% data variables.product.prodname_vscode %}.](/assets/images/help/copilot/code-review/vscode-review-progress@2x.png)

1. If {% data variables.product.prodname_copilot_short %} has any comments, they will be shown inline in your file, and in the **Problems** tab.

   ![Screenshot of a comment from {% data variables.product.prodname_copilot_short %} in {% data variables.product.prodname_vscode %}.](/assets/images/help/copilot/code-review/vscode-comment@2x.png)

### Reviewing changes

> [!NOTE] Reviewing changes is currently only available to a limited number of {% data variables.product.prodname_copilot_short %} subscribers. To join the waitlist, see [Join the {% data variables.copilot.copilot_code-review_short %} waitlist](https://gh.io/copilot-code-review-waitlist).

You can request a review for your staged or unstaged changes in {% data variables.product.prodname_vscode %}.

1. In {% data variables.product.prodname_vscode_shortname %}, switch to the **Source Control** tab.
1. To request a review on your unstaged changes, hover over **Changes** in the sidebar, and then click the <svg class="octicon" width="16" height="16" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M14.5 2H1.5L1 2.5V11.5L1.5 12H4V14.5L4.854 14.854L7.707 12H14.5L15 11.5V2.5L14.5 2ZM14 11H7.5L7.146 11.146L5 13.293V11.5L4.5 11H2V3H14V11Z"/><path d="M7.079 5.205L5.262 7.033L7.078 8.853L6.371 9.56L4.2 7.386V6.679L6.37 4.5L7.079 5.205ZM9.7 4.505L9 5.214L10.826 7.033L8.995 8.853L9.7 9.562L11.889 7.389V6.68L9.7 4.505Z"/></svg> **{% data variables.copilot.copilot_code-review_short %} - Changes** button.

   ![Screenshot of the "{% data variables.copilot.copilot_code-review_short %} - Changes" button in {% data variables.product.prodname_vscode %}. The code review button is outlined in dark orange.](/assets/images/help/copilot/code-review/vscode-review-button@2x.png)

1. To request a review on your staged changes, hover over **Staged Changes** in the sidebar, and then click the <svg class="octicon" width="16" height="16" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M14.5 2H1.5L1 2.5V11.5L1.5 12H4V14.5L4.854 14.854L7.707 12H14.5L15 11.5V2.5L14.5 2ZM14 11H7.5L7.146 11.146L5 13.293V11.5L4.5 11H2V3H14V11Z"/><path d="M7.079 5.205L5.262 7.033L7.078 8.853L6.371 9.56L4.2 7.386V6.679L6.37 4.5L7.079 5.205ZM9.7 4.505L9 5.214L10.826 7.033L8.995 8.853L9.7 9.562L11.889 7.389V6.68L9.7 4.505Z"/></svg> **{% data variables.copilot.copilot_code-review_short %} - Staged Changes** button.

1. Wait for {% data variables.product.prodname_copilot_short %} to review your changes. This usually takes less than 30 seconds.

   ![Screenshot of the progress indicator when {% data variables.product.prodname_copilot_short %} is performing a review in {% data variables.product.prodname_vscode %}.](/assets/images/help/copilot/code-review/vscode-review-progress@2x.png)

1. If {% data variables.product.prodname_copilot_short %} has any comments, they will be shown inline in your file(s), and in the **Problems** tab.

   ![Screenshot of a comment from {% data variables.product.prodname_copilot_short %} in {% data variables.product.prodname_vscode %}.](/assets/images/help/copilot/code-review/vscode-comment@2x.png)

## Working with suggested changes provided by {% data variables.product.prodname_copilot_short %}

Where possible, {% data variables.product.prodname_copilot_short %}'s feedback includes suggested changes which you can apply with a single click.

![Screenshot of a comment from {% data variables.product.prodname_copilot_short %} in {% data variables.product.prodname_vscode %} with a suggested change.](/assets/images/help/copilot/code-review/vscode-comment@2x.png)

If you're happy with the change, you can accept a suggestion from {% data variables.product.prodname_copilot_short %} by clicking the **Apply and Go To Next** button. Any changes you apply will not be automatically committed.

If you don't want to apply {% data variables.product.prodname_copilot_short %}'s suggested change, click the **Discard and Go to Next** button.

## Providing feedback on {% data variables.product.prodname_copilot_short %}'s reviews

You can provide feedback on {% data variables.product.prodname_copilot_short %}'s comments directly within each comment. We use this information to improve the product and the quality of {% data variables.product.prodname_copilot_short %}'s suggestions.

To provide feedback, hover over the comment and click the thumbs up or thumbs down button.

![Screenshot of a comment from {% data variables.product.prodname_copilot_short %} in {% data variables.product.prodname_vscode %} with feedback buttons displayed. The buttons are outlined in dark orange.](/assets/images/help/copilot/code-review/vscode-comment-feedback@2x.png)

## Customizing {% data variables.product.prodname_copilot_short %}'s reviews with coding guidelines

{% data reusables.copilot.code-review.custom-coding-guidelines %}

{% endvscode %}

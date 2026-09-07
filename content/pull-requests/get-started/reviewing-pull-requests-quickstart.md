---
title: Quickstart for reviewing pull requests
shortTitle: Review quickstart
intro: 'Review a pull request by leaving comments, making suggestions, and approving or requesting changes.'
allowTitleToDifferFromFilename: true
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
contentType: get-started
category: 
  - Review pull requests
---

Pull request reviews are how teams catch issues early and keep code quality high. This quickstart walks you through each of the main tools for a review: 
* Comment on code
* Suggest specific edits
* Submit your review and approve or request changes

## Comment on the changes

Anyone with read access to a repository can review and comment on a pull request.

1. On {% data variables.product.github %}, navigate to the pull request.
1. Read through the pull request summary and any relevant comments or issues to build context for reviewing.
1. Click the **Files changed** tab.
1. Hover over the line you want to comment on and click {% octicon "plus" aria-label="Add a comment" %}. To comment on multiple lines, click and drag to select them.
1. Type your comment, then click **Start a review** to save it as pending until you finish reviewing. Pending comments are visible only to you until you submit the review.

## Make code suggestions

When you know the exact change you'd like, suggest it so the author can apply it in one click.

1. On the **Files changed** tab, start a comment on the line or lines you want to change.
1. In the comment toolbar, click {% octicon "diff" aria-label="Insert a suggestion" %} to insert a suggestion block, then edit the code inside it to show your proposed change.
1. Click **Start a review** or **Add review comment** to include the suggestion in your review.

## Submit your review

Finish by submitting your review with a decision that tells the author what to do next.

1. Click **Review changes**.
1. Add a summary comment.
1. Select a decision, then click **Submit review**:

   * **Comment** leaves feedback without explicitly approving or requesting changes.
   * **Approve** signals that the changes are ready to merge.
   * **Request changes** flags feedback the author must address before merging.

## Next steps

* [AUTOTITLE](/pull-requests/concepts/giving-reviews)
* [AUTOTITLE](/pull-requests/reference/pull-request-reviews)
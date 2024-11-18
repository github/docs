---
title: Marking issues or pull requests as a duplicate
intro: Mark an issue or pull request as a duplicate to track similar issues or pull requests together and remove unnecessary burden for both maintainers and collaborators.
redirect_from:
  - /github/managing-your-work-on-github/managing-your-work-with-issues-and-pull-requests/about-duplicate-issues-and-pull-requests
  - /articles/about-duplicate-issues-and-pull-requests
  - /github/managing-your-work-on-github/about-duplicate-issues-and-pull-requests
  - /issues/tracking-your-work-with-issues/managing-issues/marking-issues-or-pull-requests-as-a-duplicate
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Pull requests
---
For a "marked as duplicate" timeline event to appear, the user who creates the duplicate reference comment must have write access to the repository where they create the comment.

## Marking duplicates

To mark an issue or pull request as a duplicate, type "Duplicate of" followed by an issue or pull request number in the body of a new comment.

You can also use the {% data variables.product.company_short %}-provided saved replies, "Duplicate issue" or "Duplicate pull request." For more information, see "[AUTOTITLE](/get-started/writing-on-github/working-with-saved-replies/about-saved-replies)."

![Screenshot of an issue timeline, with a comment by octocat that says "Duplicate of #97" and a timeline event that says "octocat marked this as a duplicate of #97."](/assets/images/help/issues/duplicate-issue-syntax.png)

## Unmarking duplicates

You can unmark duplicate issues and pull requests by clicking **Undo** in the timeline. This will add a new timeline event, indicating that the issue or pull request was unmarked.

![Screenshot of an issue timeline. To the right of a timeline event about the issue being marked as duplicate, a button, labeled "Undo", is outlined in dark orange.](/assets/images/help/issues/unmark-duplicate-issue-button.png)

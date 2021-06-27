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
  ghae: '*'
topics:
  - Pull requests
---
For a "marked as duplicate" timeline event to appear, the user who creates the duplicate reference comment must have write access to the repository where they create the comment.

## Marking duplicates

To mark an issue or pull request as a duplicate, type "Duplicate of" followed by the issue or pull request number it duplicates in the body of a new comment. You can also use the GitHub-provided "Duplicate issue" or "Duplicate pull request" saved replies to mark an issue or pull request as a duplicate. For more information, see "[About saved replies](/articles/about-saved-replies)."

![Duplicate issue syntax](/assets/images/help/issues/duplicate-issue-syntax.png)

## Unmarking duplicates

You can unmark duplicate issues and pull requests by clicking **Undo** in the timeline. This will add a new timeline event, indicating that the issue or pull request was unmarked.

![Unmark duplicate issue button](/assets/images/help/issues/unmark-duplicate-issue-button.png)

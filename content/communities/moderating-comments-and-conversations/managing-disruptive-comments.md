---
title: Managing disruptive comments
intro: 'You can {% ifversion fpt or ghec %}hide, edit,{% else %}edit{% endif %} or delete comments on issues, pull requests, and commits.'
redirect_from:
  - /articles/editing-a-comment
  - /articles/deleting-a-comment
  - /articles/managing-disruptive-comments
  - /github/building-a-strong-community/managing-disruptive-comments
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Community
shortTitle: Manage comments
---

## Hiding a comment

{% ifversion fpt or ghec %}Organization moderators, and anyone{% else %}Anyone{% endif %} with write access to a repository, can hide comments on issues, pull requests, and commits.

If a comment is off-topic, outdated, or resolved, you may want to hide a comment to keep a discussion focused or make a pull request easier to navigate and review. Hidden comments are minimized but people with read access to the repository can expand them.

![Screenshot of a hidden comment. The only visible content is "This comment has been minimized", with a button to show the comment.](/assets/images/help/repository/hidden-comment.png)

1. Navigate to the comment you'd like to hide.
1. In the upper-right corner of the comment, click {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %}, then click **Hide**.

   ![Screenshot of a pull request comment by octo-user. Below an icon of three horizontal dots, a dropdown menu is expanded, and "Hide" is outlined in orange.](/assets/images/help/repository/comment-menu-hide.png)

1. Using the "Choose a reason" dropdown menu, choose a reason to hide the comment. Then select **Hide comment**.
   {% ifversion fpt or ghec %}
   ![Screenshot of a {% data variables.product.prodname_dotcom %} comment showing a menu to select a reason to hide the comment: Spam, Abuse, Off Topic, Outdated, Duplicate, or Resolved.](/assets/images/help/repository/choose-reason-for-hiding-comment.png)
   {% else %}
   ![Screenshot of a {% data variables.product.prodname_dotcom %} comment showing a menu to select a reason to hide the comment: Off Topic, Outdated, Duplicate, or Resolved.](/assets/images/help/repository/choose-reason-for-hiding-comment-ghe.png)
   {% endif %}

## Unhiding a comment

{% ifversion fpt or ghec %}Organization moderators, and anyone{% else %}Anyone{% endif %} with write access to a repository, can unhide comments on issues, pull requests, and commits.

1. Navigate to the comment you'd like to unhide.
1. On the right side of the comment, click **{% octicon "fold" aria-hidden="true" %} Show comment**.
1. On the right side of the expanded comment, select the {% octicon "kebab-horizontal" aria-label="Show options" %} dropdown menu, then click **Unhide**.

   ![Screenshot of a pull request comment marked as spam. Below an icon of three horizontal dots, a dropdown menu is expanded, and "Unhide" is outlined in orange.](/assets/images/help/repository/comment-menu-hidden.png)

## Editing a comment

Anyone with write access to a repository can edit comments on issues, pull requests, and commits.

It's appropriate to edit a comment and remove content that doesn't contribute to the conversation and violates your community's code of conduct{% ifversion fpt or ghec %} or GitHub's [Community Guidelines](/free-pro-team@latest/site-policy/github-terms/github-community-guidelines){% endif %}.

Sometimes it may make sense to clearly indicate edits and their justification.

That said, anyone with read access to a repository can view a comment's edit history. The **edited** dropdown at the top of the comment contains a history of edits showing the user and timestamp for each edit.

![Screenshot of a comment by octo-user, which has been partially redacted. In the comment header, next to the text "edited by octocat", a dropdown icon is outlined in orange.](/assets/images/help/repository/content-redacted-comment.png)

## Redacting sensitive information

Comment authors and anyone with write access to a repository can also delete sensitive information from a comment's edit history. For more information, see "[AUTOTITLE](/communities/moderating-comments-and-conversations/tracking-changes-in-a-comment)."

1. Navigate to the comment you'd like to edit.
1. In the upper-right corner of the comment, click {% octicon "kebab-horizontal" aria-label="Show options" %}, then click **Edit**.

   ![Screenshot of a pull request comment by octo-user. Below an icon of three horizontal dots, a dropdown menu is expanded, and "Edit" is outlined in orange.](/assets/images/help/repository/comment-menu-edit.png)

1. In the comment window, delete the content you'd like to remove, then type `[REDACTED]` to replace it.
1. At the bottom of the comment, type a note indicating that you have edited the comment, and optionally, why you edited the comment.
1. Click **Update comment**.

## Deleting a comment

Anyone with write access to a repository can delete comments on issues, pull requests, and commits. Organization owners, team maintainers, and the comment author can also delete a comment on a team page.

If a comment contains some constructive content that adds to the conversation in the issue or pull request, you can edit the comment instead.

Deleting a comment is your last resort as a moderator. It's appropriate to delete a comment if the entire comment adds no constructive content to a conversation and violates your community's code of conduct{% ifversion fpt or ghec %} or GitHub's [Community Guidelines](/free-pro-team@latest/site-policy/github-terms/github-community-guidelines){% endif %}.

Deleting a comment creates a timeline event that is visible to anyone with read access to the repository. However, the username of the person who deleted the comment is only visible to people with write access to the repository. For anyone without write access, the timeline event is anonymized.

![Screenshot of a timeline event, which says "octo-org deleted a comment from hubot 6 minutes ago."](/assets/images/help/issues/anonymized-timeline-entry-for-deleted-comment.png)

{% note %}

**Note:** The initial comment (or body) of an issue or pull request can't be deleted. Instead, you can edit issue and pull request bodies to remove unwanted content.

{% endnote %}

### Steps to delete a comment

1. Navigate to the comment you'd like to delete.
1. In the upper-right corner of the comment, click {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %}, then click **Delete**.
   ![Screenshot of a pull request comment by octo-user. Below an icon of three horizontal dots, a dropdown menu is expanded, and "Delete" is outlined in orange.](/assets/images/help/repository/comment-menu-delete.png)
1. Optionally, write a comment noting that you deleted a comment and why.

{% ifversion fpt or ghec %}

## Further reading

* "[AUTOTITLE](/organizations/managing-peoples-access-to-your-organization-with-roles/managing-moderators-in-your-organization)"
{% endif %}

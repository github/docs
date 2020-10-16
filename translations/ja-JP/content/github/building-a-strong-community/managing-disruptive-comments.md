---
title: Managing disruptive comments
intro: 'You can {% if currentVersion == "free-pro-team@latest" %}hide, edit,{% else %}edit{% endif %} or delete comments on issues, pull requests, and commits.'
redirect_from:
  - /articles/editing-a-comment/
  - /articles/deleting-a-comment/
  - /articles/managing-disruptive-comments
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

### Hiding a comment

Anyone with write access to a repository can hide comments on issues, pull requests, and commits. 

If a comment is off-topic, outdated, or resolved, you may want to hide a comment to keep a discussion focused or make a pull request easier to navigate and review. Hidden comments are minimized but people with read access to the repository can expand them.

![Minimized comment](/assets/images/help/repository/hidden-comment.png)

1. Navigate to the comment you'd like to hide.
2. In the upper-right corner of the comment, click {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %}, then click **Hide**.
  ![The horizontal kebab icon and comment moderation menu showing the edit, hide, delete options](/assets/images/help/repository/comment-menu.png)
3. Using the "Choose a reason" drop-down menu, click a reason to hide the comment. Then click, **Hide comment**.
  {% if currentVersion == "free-pro-team@latest" %}
  ![Choose reason for hiding comment drop-down menu](/assets/images/help/repository/choose-reason-for-hiding-comment.png)
  {% else %}
  ![Choose reason for hiding comment drop-down menu](/assets/images/help/repository/choose-reason-for-hiding-comment-ghe.png)
  {% endif %}

### Unhiding a comment

Anyone with write access to a repository can unhide comments on issues, pull requests, and commits.

1. Navigate to the comment you'd like to unhide.
2. In the upper-right corner of the comment, click **{% octicon "fold" aria-label="The fold icon" %} Show comment**.
   ![Show comment text](/assets/images/help/repository/hidden-comment-show.png)
3. On the right side of the expanded comment, click {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %}, then **Unhide**.
   ![The horizontal kebab icon and comment moderation menu showing the edit, unhide, delete options](/assets/images/help/repository/comment-menu-hidden.png)

### Editing a comment

Anyone with write access to a repository can edit comments on issues, pull requests, and commits.

It's appropriate to edit a comment and remove content that doesn't contribute to the conversation and violates your community's code of conduct{% if currentVersion == "free-pro-team@latest" %} or GitHub's [Community Guidelines](/articles/github-community-guidelines){% endif %}.

When you edit a comment, note the location that the content was removed from and optionally, the reason for removing it.

Anyone with read access to a repository can view a comment's edit history. The **edited** dropdown at the top of the comment contains a history of edits showing the user and timestamp for each edit.

![Comment with added note that content was redacted](/assets/images/help/repository/content-redacted-comment.png)

Comment authors and anyone with write access to a repository can also delete sensitive information from a comment's edit history. For more information, see "[Tracking changes in a comment](/github/building-a-strong-community/tracking-changes-in-a-comment)."

1. Navigate to the comment you'd like to edit.
2. In the upper-right corner of the comment, click {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %}, then click **Edit**.
  ![The horizontal kebab icon and comment moderation menu showing the edit, hide, delete, and report options](/assets/images/help/repository/comment-menu.png)
3. In the comment window, delete the content you'd like to remove, then type `[REDACTED]` to replace it.
  ![Comment window with redacted content](/assets/images/help/issues/redacted-content-comment.png)
4. At the bottom of the comment, type a note indicating that you have edited the comment, and optionally, why you edited the comment.
  ![Comment window with added note that content was redacted](/assets/images/help/issues/note-content-redacted-comment.png)
5. Click **Update comment**.

### Deleting a comment

Anyone with write access to a repository can delete comments on issues, pull requests, and commits. Organization owners, team maintainers, and the comment author can also delete a comment on a team page.

Deleting a comment is your last resort as a moderator. It's appropriate to delete a comment if the entire comment adds no constructive content to a conversation and violates your community's code of conduct{% if currentVersion == "free-pro-team@latest" %} or GitHub's [Community Guidelines](/articles/github-community-guidelines){% endif %}.

Deleting a comment creates a timeline event that is visible to anyone with read access to the repository. However, the username of the person who deleted the comment is only visible to people with write access to the repository. For anyone without write access, the timeline event is anonymized.

![Anonymized timeline event for a deleted comment](/assets/images/help/issues/anonymized-timeline-entry-for-deleted-comment.png)

If a comment contains some constructive content that adds to the conversation in the issue or pull request, you can edit the comment instead.

{% note %}

**Note:** The initial comment (or body) of an issue or pull request can't be deleted. Instead, you can edit issue and pull request bodies to remove unwanted content.

{% endnote %}

1. Navigate to the comment you'd like to delete.
2. In the upper-right corner of the comment, click {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %}, then click **Delete**.
  ![The horizontal kebab icon and comment moderation menu showing the edit, hide, delete, and report options](/assets/images/help/repository/comment-menu.png)
3. Optionally, write a comment noting that you deleted a comment and why.

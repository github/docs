---
title: Tracking changes in a comment
intro: You can view the edit history of a comment or delete sensitive information from the edit history of a comment.
redirect_from:
  - /articles/tracking-changes-in-a-comment
  - /github/building-a-strong-community/tracking-changes-in-a-comment
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Community
shortTitle: Track comment changes
---

## Viewing a comment's edit history details

Anyone with read access to a repository can view a comment's edit history.

1. Navigate to the comment you'd like to view the edit history for.
{% data reusables.repositories.edited-comment-list %}

## Deleting sensitive information from a comment's history

Comment authors and anyone with write access to a repository can delete sensitive information from a comment's edit history.

When you delete sensitive information from the comment's edit history, the person who made the edit and when they made the edit is still visible in the comment history but the content of the edit is no longer available.

1. Navigate to the comment where you would like to delete sensitive information from the edit history.
{% data reusables.repositories.edited-comment-list %}
1. In the top right of the edit history window, click **Options**. Then click **Delete revision from history** to delete the diff that shows the content being added.

   ![Screenshot of the edit history window for a comment. A dropdown menu, labeled "Options," is expanded, and the "Delete revision from history" option is outlined in orange.](/assets/images/help/repository/delete-comment-edit-details.png)
1. To confirm deletion, click **OK**.

## Further reading

{% ifversion fpt or ghec %}- "[AUTOTITLE](/communities/maintaining-your-safety-on-github/reporting-abuse-or-spam)"{% endif %}
- "[AUTOTITLE](/communities/moderating-comments-and-conversations/managing-disruptive-comments)"

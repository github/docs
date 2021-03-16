---
title: Blocking a user from your organization
intro: Organization owners can block a user to remove the user's ability to collaborate in the organization's repositories.
redirect_from:
  - /articles/blocking-a-user-from-your-organization
versions:
  free-pro-team: '*'
---

You can block a user from within your organization's settings or from a specific comment made by the user. When you block a user in a comment, you can choose to send the user a notification explaining that they were blocked and why. Otherwise, the user is not directly notified that you've blocked them. Blocked users can still delete their existing content.

When you block a user, you can choose to block them indefinitely or for a specific amount of time. If you block someone for a specific amount of time, they are automatically unblocked after the chosen time expires. If you block someone indefinitely, you can unblock them manually at any time. For more information, see "[Unblocking a user from your organization](/articles/unblocking-a-user-from-your-organization)."

{% tip %}

**Tip:** If you're blocking a user because of a heated conversation, consider locking the conversation so only collaborators can comment. For more information, see "[Locking conversations](/github/building-a-strong-community/locking-conversations)."

{% endtip %}

At the time that you block a user from your organization:
- The user stops watching your organization's repositories
- The user's stars and issue assignments are removed from your repositories
- The user's votes on discussions or comments in your organization's repositories are deleted
- The user is removed as a collaborator on your organization's repositories
- The user's contributions to your organization's repositories are no longer counted as contributions for them
- Any pending repository or organization invitations to the blocked user are cancelled

After you've blocked a user from your organization, they cannot:
- Cross-reference your organization's repositories in comments
- Fork, watch, pin, or star your organization's repositories

In your organization's repositories, blocked users also cannot:
- Open issues
- Send, close, or merge pull requests
- Comment on issues, pull requests, or commits
- Add or edit wiki pages

### Blocking a user in a comment

1. Navigate to the comment whose author you would like to block.
2. In the upper-right corner of the comment, click {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %}, then click **Block user**. ![The horizontal kebab icon and comment moderation menu showing the block user option](/assets/images/help/repository/comment-menu-block-user.png)
3. If you'd like to set a time limit for the block, use the Block user drop-down menu, and select the amount of time you'd like to block the user. ![Block time limit in the block user drop-down menu](/assets/images/help/organizations/org-block-options-menu-from-comment.png)
4. If you'd like to hide all of the comments the user has made in the organization, select **Hide this user's comments** and choose a reason. ![Send a notification in the block user drop-down menu](/assets/images/help/organizations/org-block-options-menu-hide-user-comments.png)
5. If you'd like to notify the user why they're being blocked, select **Send a notification to this user**. ![Send a notification in the block user drop-down menu](/assets/images/help/organizations/org-block-options-menu-send-notification.png)
6. To block the user, click **Block user from organization** or **Block user from organization and send message**. ![Block user button](/assets/images/help/organizations/org-block-user-button-in-comment.png)

### Blocking a user in the organization settings

1. To block an organization member, first [remove the user](/articles/removing-a-member-from-your-organization) from the organization.
{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.block_users %}
6. Under "Block a user", type the username of the user you'd like to block. ![Username field](/assets/images/help/organizations/org-block-username-field.png)
7. If you'd like to set a time limit for the block, use the Block options drop-down menu, and select the amount of time you'd like to block the user. ![Block options drop-down menu](/assets/images/help/organizations/org-block-options-menu.png)
8. Click **Block user**. ![Block button](/assets/images/help/organizations/org-block-user-button.png)

### 더 읽을거리

- "[Viewing users who are blocked from your organization](/articles/viewing-users-who-are-blocked-from-your-organization)"
- "[Unblocking a user from your organization](/articles/unblocking-a-user-from-your-organization)"
- "[Blocking a user from your personal account](/articles/blocking-a-user-from-your-personal-account)"
- "[Unblocking a user from your personal account](/articles/unblocking-a-user-from-your-personal-account)"
- "[Reporting abuse or spam](/articles/reporting-abuse-or-spam)"

---
title: Unblocking a user from your organization
intro: 'Organization owners can unblock a user who was previously blocked, restoring their access to the organization''s repositories.'
redirect_from:
  - /articles/unblocking-a-user-from-your-organization
versions:
  free-pro-team: '*'
---

After unblocking a user from your organization, they'll be able to contribute to your organization's repositories.

If you selected a specific amount of time to block the user, they will be automatically unblocked when that period of time ends. For more information, see "[Blocking a user from your organization](/articles/blocking-a-user-from-your-organization)."

{% tip %}

**Tip**: Any settings that were removed when you blocked the user from your organization, such as collaborator status, stars, and watches, will not be restored when you unblock the user.

{% endtip %}

### Unblocking a user in a comment

1. Navigate to the comment whose author you would like to unblock.
2. In the upper-right corner of the comment, click {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %}, then click **Unblock user**. ![The horizontal kebab icon and comment moderation menu showing the unblock user option](/assets/images/help/repository/comment-menu-unblock-user.png)
3. To confirm you would like to unblock the user, click **Okay**.

### Unblocking a user in the organization settings

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.block_users %}
5. Under "Blocked users", next to the user you'd like to unblock, click **Unblock**. ![Unblock user button](/assets/images/help/organizations/org-unblock-user-button.png)

### 더 읽을거리

- "[Blocking a user from your organization](/articles/blocking-a-user-from-your-organization)"
- "[Blocking a user from your personal account](/articles/blocking-a-user-from-your-personal-account)"
- "[Unblocking a user from your personal account](/articles/unblocking-a-user-from-your-personal-account)"
- "[Reporting abuse or spam](/articles/reporting-abuse-or-spam)"

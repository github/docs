---
title: Unblocking a user from your organization
intro: 'Organization owners and moderators can unblock a user who was previously blocked, restoring their access to the organization''s repositories.'
redirect_from:
  - /articles/unblocking-a-user-from-your-organization
  - /github/building-a-strong-community/unblocking-a-user-from-your-organization
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Community
shortTitle: Unblock from your org
---

After unblocking a user from your organization, they'll be able to contribute to your organization's repositories.

If you selected a specific amount of time to block the user, they will be automatically unblocked when that period of time ends. For more information, see "[AUTOTITLE](/communities/maintaining-your-safety-on-github/blocking-a-user-from-your-organization)."

{% tip %}

**Tip**: Any settings that were removed when you blocked the user from your organization, such as collaborator status, stars, and watches, will not be restored when you unblock the user.

{% endtip %}

## Unblocking a user in a comment

1. Navigate to the comment whose author you would like to unblock.
1. In the upper-right corner of the comment, click {% octicon "kebab-horizontal" aria-label="Show options" %}, then click **Unblock user**.

   ![Screenshot of a pull request comment by octo-user. Below an icon of three horizontal dots, a dropdown menu is expanded, and "Unblock user" is outlined in orange.](/assets/images/help/repository/comment-menu-unblock-user.png)

1. To confirm you would like to unblock the user, click **OK**.

## Unblocking a user in the organization settings

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.block_users %}
1. Under "Blocked users", next to the user you'd like to unblock, click **Unblock**.

## Further reading

* "[AUTOTITLE](/communities/maintaining-your-safety-on-github/blocking-a-user-from-your-organization)"
* "[AUTOTITLE](/communities/maintaining-your-safety-on-github/blocking-a-user-from-your-personal-account)"
* "[AUTOTITLE](/communities/maintaining-your-safety-on-github/unblocking-a-user-from-your-personal-account)"
* "[AUTOTITLE](/communities/maintaining-your-safety-on-github/reporting-abuse-or-spam)"

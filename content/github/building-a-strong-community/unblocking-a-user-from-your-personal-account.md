---
title: Unblocking a user from your personal account
intro: 'If you''ve mended fences with a {% data variables.product.prodname_dotcom %} user you''ve blocked, you can unblock their account.'
redirect_from:
  - /articles/unblocking-a-user-from-your-personal-account
versions:
  free-pro-team: '*'
---

When you unblock a user, they'll be able to invite you to be a collaborator to their repositories. If they [@mention you](/articles/basic-writing-and-formatting-syntax/#mentioning-people-and-teams) anywhere on GitHub, you'll receive notifications.

In repositories you own, the user will be able to collaborate normally.

You can unblock a user in your account settings or from the user's profile page.

### Unblocking a user in your account settings

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.blocked_users %}
3. Under "Blocked users", next to the user you'd like to unblock, click **Unblock**.
![Unblock user button](/assets/images/help/organizations/org-unblock-user-button.png)

### Unblocking a user from their profile page

{% data reusables.profile.user_profile_page_navigation %}
2. In the left sidebar, under the user's profile picture, click {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %}, then click  **Unblock or report user**.
![Unblock or report user link](/assets/images/help/profile/profile-unblock-or-report-user.png)
3. Click **Unblock user**.
  ![Modal box with option to unblock user or report abuse](/assets/images/help/profile/profile-unblockuser.png)

{% tip %}

**Tip**: Settings that were removed when you blocked the user, such as collaborator status, stars, and follows, are not restored when you unblock the user.

{% endtip %}

### Further reading

- "[Blocking a user from your personal account](/articles/blocking-a-user-from-your-personal-account)"
- "[Blocking a user from your organization](/articles/blocking-a-user-from-your-organization)"
- "[Unblocking a user from your organization](/articles/unblocking-a-user-from-your-organization)"
- "[Reporting abuse or spam](/articles/reporting-abuse-or-spam)"

---
title: Impersonating a user
intro: 'You can impersonate users and perform actions on their behalf, for troubleshooting, unblocking, and other legitimate reasons.'
permissions: Enterprise owners can impersonate users within their enterprise.
versions:
  ghes: '*'
  ghae: '*'
type: how_to
topics:
  - Administrator
  - Enterprise
  - User account
shortTitle: Impersonate a user
redirect_from:
  - /admin/user-management/managing-users-in-your-enterprise/impersonating-a-user
---

## About user impersonation

If you need to temporarily take over a user account, for example when troubleshooting a user problem, or when the user is unavailable and urgent action is required, you can start an impersonation session to act on their behalf.

For each impersonation session, you need to provide a reason for the impersonation. A session is limited to one hour, and you will have the same access as the user being impersonated.

Actions you perform during an impersonation session are recorded as events in the enterprise audit log, as well as the impersonated user's security log. The person being impersonated is sent an email notification when the impersonation session starts. You cannot deactivate these emails. For more information, see "[AUTOTITLE](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/audit-log-events-for-your-enterprise)" and "[AUTOTITLE](/authentication/keeping-your-account-and-data-secure/reviewing-your-security-log)."

## Impersonating a user

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.search-user %}
{% data reusables.enterprise_site_admin_settings.click-user %}
1. In the top left of the page, click **User info**.

   ![Screenshot of the "User info" section of the site admin page for a user. The "User info" heading is highlighted in dark orange. Under the heading, the user is marked as active.](/assets/images/enterprise/stafftools/user-info.png)
1. Under "Danger Zone", click **Sign in to GitHub as @username**
1. Select a reason from the dropdown list. If you select **Other** you will need to provide additional context in the text field below **Notes**. Click **Begin impersonation** to begin the session.
1. When you are ready to end the impersonation session, click **Return to your mundane life as username** in the banner at the top of the page.

---
title: Managing organization notifications
intro: Learn how to control where notifications from your organization are delivered.
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
topics:
  - Notifications
shortTitle: Manage organization notifications
---

## Organization alerts notification options

If you're an organization owner, you'll receive email notifications by default when organization members add new deploy keys to repositories within the organization. You can unsubscribe from these notifications. On the notification settings page, under "Organization alerts", deselect **Email**.

## Choosing where your organization’s email notifications are sent

If you belong to an organization, you can choose the email account you want notifications for organization activity sent to. For example, if you belong to an organization for work, you may want your notifications sent to your work email address, rather than your personal address.

{% data reusables.notifications-v2.email-notification-caveats %}

{% data reusables.notifications.access_notifications %}
{% data reusables.notifications-v2.manage-notifications %}
1. Under "Default notifications email", select the email address you'd like notifications sent to.
{% ifversion ghes %}
1. Click **Save**.{% endif %}

### Customizing email routes per organization

If you are a member of more than one organization, you can configure each one to send notifications to any of{% ifversion fpt or ghec %} your verified email addresses{% else %} the email addresses for your account{% endif %}. {% ifversion fpt or ghec %} For more information, see [AUTOTITLE](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-email-preferences/verifying-your-email-address).{% endif %}

{% data reusables.notifications.access_notifications %}
{% data reusables.notifications-v2.manage-notifications %}
{% ifversion update-notification-settings-22 %}
1. Under "Default notifications email", click **Custom routing**.

   ![Screenshot of the "Default notifications email" section. A button, titled "Custom routing", is highlighted with an orange outline.](/assets/images/help/notifications/custom-router-emphasized.png)

1. Click **Add new route**.

1. Select the **Pick organization** dropdown, then click the organization you want to customize.
1. Select one of your verified email addresses, then click **Save**.

   ![Screenshot of the "Custom Routing" page. A dropdown menu, showing a user's available email addresses, is highlighted with an orange outline.](/assets/images/help/notifications/select-email-address-custom-routing-and-save.png)
{% else %}
1. Under "Custom routing", find your organization's name in the list.

1. Click **Edit** next to the email address you want to change.

1. Select one of your verified email addresses, then click **Save**.

{% endif %}

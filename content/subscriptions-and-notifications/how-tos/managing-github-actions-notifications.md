---
title: Managing GitHub Actions notifications
intro: Learn about managing how notifications from {% data variables.product.prodname_actions %} are delivered.
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
topics:
  - Notifications
shortTitle: Manage Actions notifications
---

For repositories that are set up with {% data variables.product.prodname_actions %} and that you are watching, you can choose how you want to receive workflow run updates.

{% ifversion update-notification-settings-22 %}
1. On the "Notification settings" page, under "System", then under "Actions", select the **Don't notify** dropdown menu.

   ![Screenshot of the "System" section of the notification settings. Under "Actions", a dropdown menu titled "Don't notify" is outlined in orange.](/assets/images/help/notifications/github-actions-customize-notifications.png)
1. To opt in to web notifications, from the dropdown menu, select "On {% data variables.product.prodname_dotcom %}."

   To opt in to email notifications, from the dropdown menu, select "Email."
1. Optionally, to only receive notifications for failed workflow runs, from the dropdown menu, select "Only notify for failed workflows", then click **Save**.{% endif %}

{% ifversion ghes %}
On the "Notification settings" page, select "Email" or "Web" notifications. Optionally, to only receive notifications for failed workflow runs, select "Send notifications for failed workflows only".

![Screenshot of the "Actions" section of "Notification settings" with checkboxes: "Email", "Web", and "Send notifications for failed workflows only."](/assets/images/help/notifications-v2/github-actions-notification-options.png){% endif %}

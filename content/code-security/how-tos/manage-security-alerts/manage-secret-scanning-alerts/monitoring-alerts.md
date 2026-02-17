---
title: Monitoring alerts from secret scanning
intro: You can configure how  {% data variables.product.prodname_secret_scanning %} notifies you about {% data variables.product.prodname_secret_scanning %} alerts, and audit how your team responds to these alerts.
permissions: '{% data reusables.permissions.secret-scanning-alerts %}'
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
contentType: how-tos
topics:
  - Secret scanning
  - Secret Protection
  - Alerts
  - Repositories
shortTitle: Monitor alerts
allowTitleToDifferFromFilename: true
redirect_from:
  - /code-security/secret-scanning/managing-alerts-from-secret-scanning/monitoring-alerts
---

When {% data variables.product.prodname_secret_scanning %} detects a potential secret leak in your repository, staying informed about these alerts is crucial for maintaining your code's security. {% data variables.product.github %} provides multiple notification channels to ensure you and your team are promptly alerted when secrets are found. You can customize how and when you receive these notifications based on your role and preferences.

You can also audit responses to {% data variables.product.prodname_secret_scanning %} alerts to track how your team manages security issues and maintain compliance with your organization's security policies.

## Configuring notifications for {% data variables.secret-scanning.alerts %}

In addition to displaying an alert in the **Security** tab of the repository, {% data variables.product.github %} can also send email notifications for alerts. These notifications are different for incremental scans and historical scans.

### Incremental scans

{% data reusables.secret-scanning.secret-scanning-configure-notifications %}

{% data reusables.repositories.navigate-to-repo %}
1. To start watching the repository, select **{% octicon "eye" aria-hidden="true" aria-label="eye" %} Watch**.

   ![Screenshot of the repository's main page. A dropdown menu, titled "Watch", is highlighted with an orange outline.](/assets/images/help/repository/repository-watch-dropdown.png)

1. In the dropdown menu, click **All Activity**. Alternatively, to only subscribe to security alerts, click **Custom**, then click **Security alerts**.
1. Navigate to the notification settings for your personal account. These are available at [https://github.com/settings/notifications](https://github.com/settings/notifications?ref_product=secret-scanning&ref_type=engagement&ref_style=text).
1. On your notification settings page, under "Subscriptions", then under "Watching", select the **Notify me** dropdown.
1. Select "Email" as a notification option, then click **Save**.

   ![Screenshot of the notification settings for a user account. Under "Subscriptions" and "Watching" a checkbox, titled "Email", is outlined in orange.](/assets/images/help/notifications/repository-watching-notification-options.png)

{% data reusables.notifications.watch-settings %}

### Historical scans

For historical scans, {% data variables.product.github %} notifies the following users:

* Organization owners, enterprise owners, and security managers—whenever a historical scan is complete, even if no secrets are found.
* Repository administrators, security managers, and users with custom roles with read/write access—whenever a historical scan detects a secret, and according to their notification preferences.

We do _not_ notify commit authors.

{% data reusables.notifications.watch-settings %}

## Auditing responses to secret scanning alerts

{% data reusables.secret-scanning.audit-secret-scanning-events %}

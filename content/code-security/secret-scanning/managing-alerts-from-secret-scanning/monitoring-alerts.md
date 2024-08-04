---
title: Monitoring alerts from secret scanning
intro: 'Learn how and when {% data variables.product.product_name %} will notify you about a secret scanning alert.'
product: '{% data reusables.gated-features.secret-scanning %}'
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
type: how_to
topics:
  - Secret scanning
  - Advanced Security
  - Alerts
  - Repositories
shortTitle: Monitor alerts
allowTitleToDifferFromFilename: true
---

## Configuring notifications for {% data variables.secret-scanning.alerts %}

In addition to displaying an alert in the **Security** tab of the repository, {% data variables.product.product_name %} can also send email notifications for alerts. These notifications are different for incremental scans and historical scans.

### Incremental scans

{% data reusables.secret-scanning.secret-scanning-configure-notifications %}

{% data reusables.repositories.navigate-to-repo %}
1. To start watching the repository, select **{% octicon "eye" aria-hidden="true" %} Watch**.

   ![Screenshot of the repository's main page. A dropdown menu, titled "Watch", is highlighted with an orange outline.](/assets/images/help/repository/repository-watch-dropdown.png)

1. In the dropdown menu, click **All Activity**. Alternatively, to only subscribe to security alerts, click **Custom**, then click **Security alerts**.
1. Navigate to the notification settings for your personal account. These are available at [https://github.com/settings/notifications](https://github.com/settings/notifications).
1. On your notification settings page, under "Subscriptions", then under "Watching", select the **Notify me** dropdown.
1. Select "Email" as a notification option, then click **Save**.

   ![Screenshot of the notification settings for a user account. An element header, titled "Subscriptions", and a sub-header, titled "Watching", are shown. A checkbox, titled "Email", is highlighted with an orange outline.](/assets/images/help/notifications/repository-watching-notification-options.png)

{% data reusables.notifications.watch-settings %}

### Historical scans

For historical scans, {% data variables.product.product_name %} notifies the following users:

* Organization owners, enterprise owners, and security managers—whenever a historical scan is complete, even if no secrets are found.
* Repository administrators, security managers, and users with custom roles with read/write access—whenever a historical scan detects a secret, and according to their notification preferences.

We do _not_ notify commit authors.

{% data reusables.notifications.watch-settings %}

## Auditing responses to secret scanning alerts

{% data reusables.secret-scanning.audit-secret-scanning-events %}

---
title: Configuring notifications for Dependabot alerts
shortTitle: Configure Dependabot notifications
intro: Optimize how you receive notifications about {% data variables.product.prodname_dependabot_alerts %}.
redirect_from:
  - /github/managing-security-vulnerabilities/configuring-notifications-for-vulnerable-dependencies
  - /code-security/supply-chain-security/configuring-notifications-for-vulnerable-dependencies
  - /code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/configuring-notifications-for-vulnerable-dependencies
  - /code-security/dependabot/dependabot-alerts/configuring-notifications-for-dependabot-alerts
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Dependabot
  - Alerts
  - Notifications
  - Vulnerabilities
  - Dependencies
  - Repositories
contentType: how-tos
---

By default, {% data variables.product.github %} sends notifications about new alerts by email to people with write, maintain, or admin permissions to a repository. See [AUTOTITLE](/code-security/concepts/supply-chain-security/about-dependabot-alerts#notifications-for-alerts).

## Configuring notifications for {% data variables.product.prodname_dependabot_alerts %}

You can configure notification settings for yourself or your organization from the Manage notifications drop-down {% octicon "bell" aria-label="The notifications bell" %} shown at the top of each page. For more information, see [AUTOTITLE](/account-and-profile/managing-subscriptions-and-notifications-on-github/setting-up-notifications/configuring-notifications#choosing-your-notification-settings).

{% data reusables.notifications.vulnerable-dependency-notification-options %}

{% ifversion update-notification-settings-22 %}
![Screenshot of the notification options for {% data variables.product.prodname_dependabot_alerts %}. A dropdown menu with frequency options is outlined in orange.](/assets/images/help/dependabot/dependabot-notification-frequency.png){% endif %}{% ifversion ghes %}
![Screenshot of the notification options for {% data variables.product.prodname_dependabot_alerts %}.](/assets/images/help/enterprises/dependabot-alerts-options-no-ui.png){% endif %}

> [!NOTE]
> You can filter your notifications on {% data variables.product.company_short %} to show {% data variables.product.prodname_dependabot_alerts %}. For more information, see [AUTOTITLE](/account-and-profile/managing-subscriptions-and-notifications-on-github/viewing-and-triaging-notifications/managing-notifications-from-your-inbox#dependabot-custom-filters).

{% data reusables.repositories.security-alerts-x-github-severity %} For more information, see [AUTOTITLE](/account-and-profile/managing-subscriptions-and-notifications-on-github/setting-up-notifications/configuring-notifications#filtering-email-notifications).

## Further reading

* [AUTOTITLE](/account-and-profile/managing-subscriptions-and-notifications-on-github/setting-up-notifications/configuring-notifications)
* [AUTOTITLE](/account-and-profile/managing-subscriptions-and-notifications-on-github/viewing-and-triaging-notifications/managing-notifications-from-your-inbox#supported-is-queries)

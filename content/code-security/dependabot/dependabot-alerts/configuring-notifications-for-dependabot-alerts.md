---
title: Configuring notifications for Dependabot alerts
shortTitle: Configure notifications
intro: 'Optimize how you receive notifications about  {% data variables.product.prodname_dependabot_alerts %}.'
redirect_from:
  - /github/managing-security-vulnerabilities/configuring-notifications-for-vulnerable-dependencies
  - /code-security/supply-chain-security/configuring-notifications-for-vulnerable-dependencies
  - /code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/configuring-notifications-for-vulnerable-dependencies
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: how_to
topics:
  - Dependabot
  - Alerts
  - Notifications
  - Vulnerabilities
  - Dependencies
  - Repositories
---

## About notifications for {% data variables.product.prodname_dependabot_alerts %}

When {% data variables.product.prodname_dependabot %} detects vulnerable dependencies{% ifversion GH-advisory-db-supports-malware %} or malware{% endif %} in your repositories, we generate a {% data variables.product.prodname_dependabot %} alert and display it on the **Security** tab for the repository. {% data variables.product.product_name %} notifies the maintainers of affected repositories about the new alert according to their notification preferences.{% ifversion fpt or ghec %} {% data variables.product.prodname_dependabot %} is enabled by default on all public repositories, and needs to be enabled on private repositories. By default, you will receive {% data variables.product.prodname_dependabot_alerts %} by email. You can override the default overall behavior by choosing the type of notifications you want to receive, or switching notifications off altogether in the settings page for your user notifications at [https://github.com/settings/notifications](https://github.com/settings/notifications).
{% endif %}

{% ifversion dependabot-suppressed-notifications %}Regardless of your notification preferences, when {% data variables.product.prodname_dependabot %} is first enabled, {% data variables.product.product_name %} does not send notifications for all vulnerable dependencies found in your repository. Instead, you will receive notifications for new vulnerable dependencies identified after {% data variables.product.prodname_dependabot %} is enabled, if your notification preferences allow it.{% endif %}

{% ifversion fpt or ghec %}If you're an organization owner, you can enable or disable {% data variables.product.prodname_dependabot_alerts %} for all repositories in your organization with one click. You can also set whether {% data variables.product.prodname_dependabot_alerts %} will be enabled or disabled for newly-created repositories. For more information, see "[AUTOTITLE](/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/managing-security-and-analysis-settings-for-your-organization#enabling-or-disabling-a-feature-for-all-new-repositories-when-they-are-added)."
{% endif %}

{% ifversion ghes or ghae %}
By default, if your enterprise owner has configured email for notifications on your enterprise, you will receive {% data variables.product.prodname_dependabot_alerts %} by email.

Enterprise owners can also enable {% data variables.product.prodname_dependabot_alerts %} without notifications. For more information, see "[AUTOTITLE](/admin/configuration/configuring-github-connect/enabling-dependabot-for-your-enterprise)."
{% endif %}

## Configuring notifications for {% data variables.product.prodname_dependabot_alerts %}

{% ifversion fpt or ghes or ghec %}
When a new {% data variables.product.prodname_dependabot %} alert is detected, {% data variables.product.product_name %} notifies all users with access to {% data variables.product.prodname_dependabot_alerts %} for the repository according to their notification preferences. You will receive alerts if you are watching the repository, have enabled notifications for security alerts or for all the activity on the repository, and are not ignoring the repository. For more information, see "[AUTOTITLE](/account-and-profile/managing-subscriptions-and-notifications-on-github/setting-up-notifications/configuring-notifications#configuring-your-watch-settings-for-an-individual-repository)."
{% endif %}

You can configure notification settings for yourself or your organization from the Manage notifications drop-down {% octicon "bell" aria-label="The notifications bell" %} shown at the top of each page. For more information, see "[AUTOTITLE](/account-and-profile/managing-subscriptions-and-notifications-on-github/setting-up-notifications/configuring-notifications#choosing-your-notification-settings)."

{% data reusables.notifications.vulnerable-dependency-notification-delivery-method-customization2 %}
{% data reusables.notifications.vulnerable-dependency-notification-options %}

{% ifversion update-notification-settings-22 %}
![Screenshot of the notification options for {% data variables.product.prodname_dependabot_alerts %}. A dropdown menu, showing notification frequency options, is highlighted with an orange outline.](/assets/images/help/dependabot/dependabot-notification-frequency.png){% endif %}{% ifversion ghes > 3.7 or ghae > 3.7 %}
![Screenshot of the notification options for {% data variables.product.prodname_dependabot_alerts %}.](/assets/images/help/enterprises/dependabot-alerts-options-no-ui.png){% endif %}

{% note %}

**Note:** You can filter your notifications on {% data variables.product.company_short %} to show  {% data variables.product.prodname_dependabot_alerts %}. For more information, see "[AUTOTITLE](/account-and-profile/managing-subscriptions-and-notifications-on-github/viewing-and-triaging-notifications/managing-notifications-from-your-inbox#dependabot-custom-filters)."

{% endnote %}

{% data reusables.repositories.security-alerts-x-github-severity %} For more information, see "[AUTOTITLE](/account-and-profile/managing-subscriptions-and-notifications-on-github/setting-up-notifications/configuring-notifications#filtering-email-notifications)."

## How to reduce the noise from notifications for {% data variables.product.prodname_dependabot_alerts %}

If you are concerned about receiving too many notifications for {% data variables.product.prodname_dependabot_alerts %}, we recommend you opt into the weekly email digest, or turn off notifications while keeping {% data variables.product.prodname_dependabot_alerts %} enabled. You can still navigate to see your {% data variables.product.prodname_dependabot_alerts %} in your repository's **Security** tab. For more information, see "[AUTOTITLE](/code-security/dependabot/dependabot-alerts/viewing-and-updating-dependabot-alerts)."

## Further reading

- "[AUTOTITLE](/account-and-profile/managing-subscriptions-and-notifications-on-github/setting-up-notifications/configuring-notifications)"
- "[AUTOTITLE](/account-and-profile/managing-subscriptions-and-notifications-on-github/viewing-and-triaging-notifications/managing-notifications-from-your-inbox#supported-is-queries)"

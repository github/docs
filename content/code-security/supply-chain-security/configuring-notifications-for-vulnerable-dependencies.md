---
title: Configuring notifications for vulnerable dependencies
shortTitle: Configuring notifications
intro: 'Optimize how you receive notifications about {% data variables.product.prodname_dependabot %} alerts.'
redirect_from:
- /github/managing-security-vulnerabilities/configuring-notifications-for-vulnerable-dependencies
versions:
  free-pro-team: '*'
  enterprise-server: '>=3.0'
topics:
  - security
---
<!--For this article in earlier GHES versions, see /content/github/managing-security-vulnerabilities-->

### About notifications for vulnerable dependencies

When {% data variables.product.prodname_dependabot %} detects vulnerable dependencies in your repositories, we generate a {% data variables.product.prodname_dependabot %} alert and display it on the Security tab for the repository. {% data variables.product.product_name %} notifies the maintainers of affected repositories about the new alert according to their notification preferences.{% if currentVersion == "free-pro-team@latest" %} {% data variables.product.prodname_dependabot %} is enabled by default on all public repositories. For {% data variables.product.prodname_dependabot_alerts %}, by default, you will receive {% data variables.product.prodname_dependabot_alerts %} by email, grouped by the specific vulnerability.
{% endif %} 

{% if currentVersion == "free-pro-team@latest" %}If you're an organization owner, you can enable or disable {% data variables.product.prodname_dependabot_alerts %} for all repositories in your organization with one click. You can also set whether the detection of vulnerable dependencies will be enabled or disabled for newly-created repositories. For more information, see "[Managing security and analysis settings for your organization](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization#enabling-or-disabling-a-feature-for-all-new-repositories-when-they-are-added)."
{% endif %}

{% if enterpriseServerVersions contains currentVersion and currentVersion ver_gt "enterprise-server@2.20" %}
By default, if your site administrator has configured email for notifications on your enterprise, you will receive {% data variables.product.prodname_dependabot_alerts %} by email.{% endif %}

{% if currentVersion ver_gt "enterprise-server@2.21" %}Site administrators can also enable {% data variables.product.prodname_dependabot_alerts %} without notifications. For more information, see "[Enabling {% data variables.product.prodname_dependabot_alerts %} for vulnerable dependencies on {% data variables.product.prodname_ghe_server %}](/enterprise/{{ currentVersion }}/admin/configuration/enabling-alerts-for-vulnerable-dependencies-on-github-enterprise-server)."{% endif %}

### Configuring notifications for {% data variables.product.prodname_dependabot_alerts %}

You can configure notification settings for yourself or your organization from the Manage notifications drop-down {% octicon "bell" aria-label="The notifications bell" %} shown at the top of each page. For more information, see "[Configuring notifications](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications#choosing-your-notification-settings)."

{% data reusables.notifications.vulnerable-dependency-notification-delivery-method-customization %}
{% data reusables.notifications.vulnerable-dependency-notification-options %}

  ![{% data variables.product.prodname_dependabot_alerts %} options](/assets/images/help/notifications-v2/dependabot-alerts-options.png)

{% note %}

**Note:** You can filter your notifications on {% data variables.product.company_short %} to show {% data variables.product.prodname_dependabot %} alerts. For more information, see "[Managing notifications from your inbox](/github/managing-subscriptions-and-notifications-on-github/managing-notifications-from-your-inbox#dependabot-custom-filters)."

{% endnote %}

{% data reusables.repositories.security-alerts-x-github-severity %} For more information, see "[Configuring notifications](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications#filtering-email-notifications)."

### How to reduce the noise from notifications for vulnerable dependencies

If you are concerned about receiving too many notifications for {% data variables.product.prodname_dependabot_alerts %}, we recommend you opt into the weekly email digest, or turn off notifications while keeping {% data variables.product.prodname_dependabot_alerts %} enabled. You can still navigate to see your {% data variables.product.prodname_dependabot_alerts %} in your repository's Security tab. For more information, see "[Viewing and updating vulnerable dependencies in your repository](/github/managing-security-vulnerabilities/viewing-and-updating-vulnerable-dependencies-in-your-repository)."

### Further reading

- "[Configuring notifications](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications)"
- "[Managing notifications from your inbox](/github/managing-subscriptions-and-notifications-on-github/managing-notifications-from-your-inbox#supported-is-queries)"

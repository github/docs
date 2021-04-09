---
title: Configuring notifications for vulnerable dependencies
shortTitle: Configuring notifications
intro: 'Optimize how you receive notifications about  {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" %}{% data variables.product.prodname_dependabot %}{% else %}security{% endif %} alerts.'
versions:
  enterprise-server: '>=2.21 <=2.22'
topics:
  - security
---

### About notifications for vulnerable dependencies

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" %}When {% data variables.product.prodname_dependabot %} detects vulnerable dependencies in your repositories, we generate a {% data variables.product.prodname_dependabot %} alert and display it on the Security tab for the repository. {% data variables.product.product_name %} notifies the maintainers of affected repositories about the new alert according to their notification preferences.{% else %}When {% data variables.product.product_name %} detects vulnerable dependencies in your repositories, it sends security alerts.{% endif %}{% if currentVersion == "free-pro-team@latest" %} {% data variables.product.prodname_dependabot %} is enabled by default on all public repositories. For {% data variables.product.prodname_dependabot_alerts %}, by default, you will receive {% data variables.product.prodname_dependabot_alerts %} by email, grouped by the specific vulnerability.
{% endif %} 

{% if currentVersion == "free-pro-team@latest" %}If you're an organization owner, you can enable or disable {% data variables.product.prodname_dependabot_alerts %} for all repositories in your organization with one click. You can also set whether the detection of vulnerable dependencies will be enabled or disabled for newly-created repositories. For more information, see "[Managing security and analysis settings for your organization](/organizations/collaborating-with-groups-in-organizations/managing-security-and-analysis-settings-for-your-organization#enabling-or-disabling-a-feature-for-all-new-repositories-when-they-are-added)."
{% endif %}

{% if enterpriseServerVersions contains currentVersion and currentVersion == "enterprise-server@2.21" %}
Your site administrator needs to enable security alerts for vulnerable dependencies for {% data variables.product.product_location %} before you can use the feature. For more information, see "[Enabling alerts for vulnerable dependencies on {% data variables.product.prodname_ghe_server %}](/admin/configuration/enabling-alerts-for-vulnerable-dependencies-on-github-enterprise-server)."{% endif %}

{% if enterpriseServerVersions contains currentVersion and currentVersion ver_gt "enterprise-server@2.20" %}
By default, if your site administrator has configured email for notifications on your enterprise, you will receive {% if currentVersion ver_gt "enterprise-server@2.21" %}{% data variables.product.prodname_dependabot_alerts %}{% else %}security alerts{% endif %} by email.{% endif %}

{% if currentVersion ver_gt "enterprise-server@2.21" %}Site administrators can also enable {% data variables.product.prodname_dependabot_alerts %} without notifications. For more information, see "[Enabling {% data variables.product.prodname_dependabot_alerts %} for vulnerable dependencies on {% data variables.product.prodname_ghe_server %}](/enterprise/{{ currentVersion }}/admin/configuration/enabling-alerts-for-vulnerable-dependencies-on-github-enterprise-server)."{% endif %}

{% if currentVersion ver_lt "enterprise-server@2.22" %}Site administrators can also enable security alerts without notifications. For more information, see "[Enabling security alerts for vulnerable dependencies on {% data variables.product.prodname_ghe_server %}](/enterprise/{{ currentVersion }}/admin/configuration/enabling-alerts-for-vulnerable-dependencies-on-github-enterprise-server)."{% endif %}

### Configuring notifications for {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" %}{% data variables.product.prodname_dependabot_alerts %}{% else %}security alerts{% endif %}

You can configure notification settings for yourself or your organization from the Manage notifications drop-down {% octicon "bell" aria-label="The notifications bell" %} shown at the top of each page. For more information, see "[Configuring notifications](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications#choosing-your-notification-settings)."

{% data reusables.notifications.vulnerable-dependency-notification-delivery-method-customization %}
{% data reusables.notifications.vulnerable-dependency-notification-options %}

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" %}
  ![{% data variables.product.prodname_dependabot_alerts %} options](/assets/images/help/notifications-v2/dependabot-alerts-options.png)
{% else %}
  ![Security alerts options](/assets/images/help/notifications-v2/security-alerts-options.png)
{% endif %}

{% note %}

**Note:** You can filter your notifications on {% data variables.product.company_short %} to show {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" %}{% data variables.product.prodname_dependabot %}{% else %} security{% endif %} alerts. For more information, see "[Managing notifications from your inbox](/github/managing-subscriptions-and-notifications-on-github/managing-notifications-from-your-inbox#dependabot-custom-filters)."

{% endnote %}

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" % %}{% data reusables.repositories.security-alerts-x-github-severity %} For more information, see {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.20" %}"[Configuring notifications](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications#filtering-email-notifications){% else %}"[About email notifications](/github/receiving-notifications-about-activity-on-github/about-email-notifications){% endif %}."{% endif %}

### How to reduce the noise from notifications for vulnerable dependencies

If you are concerned about receiving too many notifications for {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" %}{% data variables.product.prodname_dependabot_alerts %}{% else %}security alerts{% endif %}, we recommend you opt into the weekly email digest, or turn off notifications while keeping {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" %}{% data variables.product.prodname_dependabot_alerts %}{% else %}security alerts{% endif %} enabled. You can still navigate to see your {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" %}{% data variables.product.prodname_dependabot_alerts %}{% else %}security alerts{% endif %} in your repository's Security tab.{% if currentVersion == "free-pro-team@latest" %} For more information, see "[Viewing and updating vulnerable dependencies in your repository](/github/managing-security-vulnerabilities/viewing-and-updating-vulnerable-dependencies-in-your-repository)."{% endif %}

### Further reading

- "[Configuring notifications](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications)"
- "[Managing notifications from your inbox](/github/managing-subscriptions-and-notifications-on-github/managing-notifications-from-your-inbox#supported-is-queries)"

---
title: Configuring notifications for vulnerable dependencies
shortTitle: 通知を設定する
intro: 'Optimize how you receive notifications about  {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" %}{% data variables.product.prodname_dependabot_short %}{% else %}security{% endif %} alerts.'
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.21'
---

### About notifications for vulnerable dependencies

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" %}When {% data variables.product.prodname_dependabot %} detects vulnerable dependencies in your repositories, we generate a {% data variables.product.prodname_dependabot_short %} alert and display it on the Security tab for the repository. {% data variables.product.product_name %} notifies the maintainers of affected repositories about the new alert according to their notification preferences.{% else %}When {% data variables.product.product_name %} detects vulnerable dependencies in your repositories, it sends security alerts.{% endif %}{% if currentVersion == "free-pro-team@latest" %} {% data variables.product.prodname_dependabot_short %} is enabled by default on all public repositories. For {% data variables.product.prodname_dependabot_alerts %}, by default, you will receive {% data variables.product.prodname_dependabot_alerts %} by email, grouped by the specific vulnerability.
{% endif %}

{% if currentVersion == "free-pro-team@latest" %}If you're an organization owner, you can enable or disable {% data variables.product.prodname_dependabot_short %} alerts for all repositories in your organization with one click. You can also set whether the detection of vulnerable dependencies will be enabled or disabled for newly-created repositories. For more information, see "[Managing security and analysis settings for your organization](/github/setting-up-and-managing-organizations-and-teams/managing-security-and-analysis-settings-for-your-organization#enabling-or-disabling-features-for-new-repositories)."
{% endif %}

{% if enterpriseServerVersions contains currentVersion and currentVersion == "enterprise-server@2.21" %}
Your site administrator needs to enable security alerts for vulnerable dependencies for
{% data variables.product.product_location %} before you can use the feature. For more information, see "[Enabling alerts for vulnerable dependencies on {% data variables.product.prodname_ghe_server %}](/admin/configuration/enabling-alerts-for-vulnerable-dependencies-on-github-enterprise-server)."{% endif %}

{% if enterpriseServerVersions contains currentVersion and currentVersion ver_gt "enterprise-server@2.20" %}
By default, if your site administrator has configured email for notifications on your enterprise, you will receive
{% if currentVersion ver_gt "enterprise-server@2.21" %}{% data variables.product.prodname_dependabot_alerts %}{% else %}security alerts{% endif %} by email.{% endif %}

{% if currentVersion ver_gt "enterprise-server@2.21" %}Site administrators can also enable {% data variables.product.prodname_dependabot_alerts %} without notifications. For more information, see "[Enabling {% data variables.product.prodname_dependabot_short %} alerts for vulnerable dependencies on {% data variables.product.prodname_ghe_server %}](/enterprise/{{ currentVersion }}/admin/configuration/enabling-alerts-for-vulnerable-dependencies-on-github-enterprise-server)."{% endif %}

{% if currentVersion ver_lt "enterprise-server@2.22" %}Site administrators can also enable security alerts without notifications. 詳しい情報については、「[{% data variables.product.prodname_ghe_server %}の脆弱性のある依存関係に関するセキュリティアラートの有効化](/enterprise/{{ currentVersion }}/admin/installation/enabling-security-alerts-for-vulnerable-dependencies-on-github-enterprise-server)」を参照してください。 {% endif %}

### Configuring notifications for {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" %}{% data variables.product.prodname_dependabot_alerts %}{% else %}security alerts{% endif %}

You can configure notification settings for yourself or your organization from the Manage notifications drop-down {% octicon "bell" aria-label="The notifications bell" %} shown at the top of each page. 詳しい情報については、「[通知を設定する](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications#choosing-your-notification-settings)」を参照してください。

{% data reusables.notifications.vulnerable-dependency-notification-delivery-method-customization %}
{% data reusables.notifications.vulnerable-dependency-notification-options %}

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" %}
  ![{% data variables.product.prodname_dependabot_short %} アラートオプション](/assets/images/help/notifications-v2/dependabot-alerts-options.png)
{% else %}
  ![Security alerts options](/assets/images/help/notifications-v2/security-alerts-options.png)
{% endif %}

{% note %}

**Note:** You can filter your {% data variables.product.company_short %} inbox notifications to show {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" %}{% data variables.product.prodname_dependabot_short %}{% else %} security{% endif %} alerts. 詳しい情報については「[インボックスからの通知の管理](/github/managing-subscriptions-and-notifications-on-github/managing-notifications-from-your-inbox#supported-queries-for-custom-filters)」を参照してください。

{% endnote %}

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" % %}{% data reusables.repositories.security-alerts-x-github-severity %} For more information, see {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.20" %}"[Configuring notifications](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications#filtering-email-notifications){% else %}"[About email notifications](/github/receiving-notifications-about-activity-on-github/about-email-notifications){% endif %}."{% endif %}

### How to reduce the noise from notifications for vulnerable dependencies

If you are concerned about receiving too many notifications for {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" %}{% data variables.product.prodname_dependabot_alerts %}{% else %}security alerts{% endif %}, we recommend you opt into the weekly email digest, or turn off notifications while keeping {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" %}{% data variables.product.prodname_dependabot_alerts %}{% else %}security alerts{% endif %} enabled. You can still navigate to see your {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" %}{% data variables.product.prodname_dependabot_alerts %}{% else %}security alerts{% endif %} in your repository's Security tab.{% if currentVersion == "free-pro-team@latest" %} For more information, see "[Viewing and updating vulnerable dependencies in your repository](/github/managing-security-vulnerabilities/viewing-and-updating-vulnerable-dependencies-in-your-repository)."{% endif %}

### 参考リンク

- [通知を設定する](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications)
- "[Managing notifications from your inbox](/github/managing-subscriptions-and-notifications-on-github/managing-notifications-from-your-inbox#supported-is-queries)"

---
title: Enabling alerts for vulnerable dependencies on GitHub Enterprise Server
intro: 'You can connect {{ site.data.variables.product.product_location_enterprise }} to {{ site.data.variables.product.prodname_ghe_cloud }} and enable {% if currentVersion ver_gt "enterprise-server@2.21" %}{{ site.data.variables.product.prodname_dependabot_short }}{% else %}security{% endif %} alerts for vulnerable dependencies in repositories in your instance.'
redirect_from:
  - /enterprise/admin/installation/enabling-security-alerts-for-vulnerable-dependencies-on-github-enterprise-server
  - /enterprise/admin/configuration/enabling-security-alerts-for-vulnerable-dependencies-on-github-enterprise-server
  - /enterprise/admin/configuration/enabling-alerts-for-vulnerable-dependencies-on-github-enterprise-server
  - /enterprise/admin/configuration/enabling-alerts-for-vulnerable-dependencies-on-github-enterprise-server
permissions: 'Site administrators for {{ site.data.variables.product.prodname_ghe_server }} who are also owners of the connected {{ site.data.variables.product.prodname_ghe_cloud }} organization or enterprise account can enable {% if currentVersion ver_gt "enterprise-server@2.21" %}{{ site.data.variables.product.prodname_dependabot_short }}{% else %}security{% endif %} alerts for vulnerable dependencies on {{ site.data.variables.product.prodname_ghe_server }}.'
versions:
  enterprise-server: '*'
---

### About alerts for vulnerable dependencies on {{ site.data.variables.product.prodname_ghe_server }}

{{ site.data.reusables.repositories.tracks-vulnerabilities }} For more information, see "[About alerts for vulnerable dependencies](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies)."

You can connect {{ site.data.variables.product.product_location_enterprise }} to {{ site.data.variables.product.prodname_dotcom_the_website }}, then sync vulnerability data to your instance and generate {% if currentVersion ver_gt "enterprise-server@2.21" %}{{ site.data.variables.product.prodname_dependabot_short }}{% else %}security{% endif %} alerts in repositories with a vulnerable dependency.

After connecting {{ site.data.variables.product.product_location_enterprise }} to {{ site.data.variables.product.prodname_dotcom_the_website }} and enabling {% if currentVersion ver_gt "enterprise-server@2.21" %}{{ site.data.variables.product.prodname_dependabot_short }}{% else %}security{% endif %} alerts for vulnerable dependencies, vulnerability data is synced from {{ site.data.variables.product.prodname_dotcom_the_website }} to your instance once every hour. You can also choose to manually sync vulnerability data at any time. No code or information about code from {{ site.data.variables.product.product_location_enterprise }} is uploaded to {{ site.data.variables.product.prodname_dotcom_the_website }}.

{% if currentVersion ver_gt "enterprise-server@2.21" %}When {{ site.data.variables.product.product_location_enterprise }} receives information about a vulnerability, it will identify repositories in your instance that use the affected version of the dependency and send {{ site.data.variables.product.prodname_dependabot_short }} alerts to owners and people with admin access in those repositories. They can customize how they receive {{ site.data.variables.product.prodname_dependabot_short }} alerts. For more information, see "[About alerts for vulnerable dependencies](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies/#configuring-notifications-for-github-dependabot-alerts)."
{% endif %}

{% if currentVersion ver_lt "enterprise-server@2.21" or currentVersion == "enterprise-server@2.21" %}When {{ site.data.variables.product.product_location_enterprise }} receives information about a vulnerability, it will identify repositories in your instance that use the affected version of the dependency and send security alerts to owners and people with admin access in those repositories. They can customize how they receive security alerts. For more information, see "[About alerts for vulnerable dependencies](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies/#configuring-notifications-for-security-alerts)."
{% endif %}

{% if currentVersion ver_gt "enterprise-server@2.21" %}
### Enabling {{ site.data.variables.product.prodname_dependabot_short }} alerts for vulnerable dependencies on {{ site.data.variables.product.prodname_ghe_server }}
{% else %}
### Enabling security alerts for vulnerable dependencies on {{ site.data.variables.product.prodname_ghe_server }}
{% endif %}

Before enabling {% if currentVersion ver_gt "enterprise-server@2.21" %}{{ site.data.variables.product.prodname_dependabot_short }}{% else %}security{% endif %} alerts for vulnerable dependencies on {{ site.data.variables.product.product_location_enterprise }}, you must connect {{ site.data.variables.product.product_location_enterprise }} to {{ site.data.variables.product.prodname_dotcom_the_website }}. For more information, see "[Connecting {{ site.data.variables.product.prodname_ghe_server }} to {{ site.data.variables.product.prodname_ghe_cloud }}](/enterprise/{{ currentVersion }}/admin/guides/installation/connecting-github-enterprise-server-to-github-enterprise-cloud)."

{% if currentVersion ver_gt "enterprise-server@2.20" %}

{% if currentVersion ver_gt "enterprise-server@2.21" %}We recommend configuring {{ site.data.variables.product.prodname_dependabot_short }} alerts without notifications for the first few days to avoid an overload of emails. After a few days, you can enable notifications to receive {{ site.data.variables.product.prodname_dependabot_short }} alerts as usual.{% endif %}

{% if currentVersion == "enterprise-server@2.21" %}We recommend configuring security alerts without notifications for the first few days to avoid an overload of emails. After a few days, you can enable notifications to receive security alerts as usual.{% endif %}

{% endif %}

{{ site.data.reusables.enterprise_site_admin_settings.sign-in }}
1. In the administrative shell, enable the {% if currentVersion ver_gt "enterprise-server@2.21" %}{{ site.data.variables.product.prodname_dependabot_short }}{% else %}security{% endif %} alerts for vulnerable dependencies on {{ site.data.variables.product.product_location_enterprise }}:
 ``` shell
$ ghe-dep-graph-enable
```
3. Return to {{ site.data.variables.product.prodname_ghe_server }}.
{{ site.data.reusables.enterprise_site_admin_settings.access-settings }}
{{ site.data.reusables.enterprise_site_admin_settings.business }}
{{ site.data.reusables.enterprise-accounts.settings-tab }}
{{ site.data.reusables.enterprise-accounts.github-connect-tab }}{% if currentVersion ver_gt "enterprise-server@2.20" %}
5. Under "Repositories can be scanned for vulnerabilities", use the drop-down menu and select **Enabled without notifications**. Optionally, to enable alerts with notifications, select **Enabled with notifications**.{% else %}
5. Under "Repositories can be scanned for vulnerabilities", use the drop-down menu and select **Enabled**.
{% endif %}
   ![Drop-down menu to enable scanning repositories for vulnerabilities](/assets/images/enterprise/site-admin-settings/enable-vulnerability-scanning-in-repositories.png)

### Viewing vulnerable dependencies on {{ site.data.variables.product.prodname_ghe_server }}

You can view all vulnerabilities in {{ site.data.variables.product.product_location_enterprise }} and manually sync vulnerability data from {{ site.data.variables.product.prodname_dotcom_the_website }} to update the list.

{{ site.data.reusables.enterprise_site_admin_settings.access-settings }}
2. In the left sidebar, click **Vulnerabilities**. ![Vulnerabilities tab in the site admin sidebar](/assets/images/enterprise/business-accounts/vulnerabilities-tab.png)
3. To sync vulnerability data, click **Sync Vulnerabilities now**. ![Sync vulnerabilities now button](/assets/images/enterprise/site-admin-settings/sync-vulnerabilities-button.png)

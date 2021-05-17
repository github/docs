---
title: Enabling alerts for vulnerable dependencies on GitHub Enterprise Server
intro: 'You can connect {% data variables.product.product_location %} to {% data variables.product.prodname_ghe_cloud %} and enable {% if currentVersion ver_gt "enterprise-server@2.21" %}{% data variables.product.prodname_dependabot %}{% else %}security{% endif %} alerts for vulnerable dependencies in repositories in your instance.'
redirect_from:
  - /enterprise/admin/installation/enabling-security-alerts-for-vulnerable-dependencies-on-github-enterprise-server
  - /enterprise/admin/configuration/enabling-security-alerts-for-vulnerable-dependencies-on-github-enterprise-server
  - /enterprise/admin/configuration/enabling-alerts-for-vulnerable-dependencies-on-github-enterprise-server
permissions: 'Site administrators for {% data variables.product.prodname_ghe_server %} who are also owners of the connected {% data variables.product.prodname_ghe_cloud %} organization or enterprise account can enable {% if currentVersion ver_gt "enterprise-server@2.21" %}{% data variables.product.prodname_dependabot %}{% else %}security{% endif %} alerts for vulnerable dependencies on {% data variables.product.prodname_ghe_server %}.'
versions:
  enterprise-server: '*'
type: how_to
topics:
  - Enterprise
  - Security
---

### About alerts for vulnerable dependencies on {% data variables.product.prodname_ghe_server %}

{% data reusables.repositories.tracks-vulnerabilities %} For more information, see "[About alerts for vulnerable dependencies](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies)."

You can connect {% data variables.product.product_location %} to {% data variables.product.prodname_dotcom_the_website %}, then sync vulnerability data to your instance and generate {% if currentVersion ver_gt "enterprise-server@2.21" %}{% data variables.product.prodname_dependabot %}{% else %}security{% endif %} alerts in repositories with a vulnerable dependency.

After connecting {% data variables.product.product_location %} to {% data variables.product.prodname_dotcom_the_website %} and enabling {% if currentVersion ver_gt "enterprise-server@2.21" %}{% data variables.product.prodname_dependabot %}{% else %}security{% endif %} alerts for vulnerable dependencies, vulnerability data is synced from {% data variables.product.prodname_dotcom_the_website %} to your instance once every hour. You can also choose to manually sync vulnerability data at any time. No code or information about code from {% data variables.product.product_location %} is uploaded to {% data variables.product.prodname_dotcom_the_website %}.

{% if currentVersion ver_gt "enterprise-server@2.21" %}When {% data variables.product.product_location %} receives information about a vulnerability, it will identify repositories in your instance that use the affected version of the dependency and generate {% data variables.product.prodname_dependabot_alerts %}. You can customize how you receive {% data variables.product.prodname_dependabot_alerts %}. For more information, see "[Configuring notifications for vulnerable dependencies](/github/managing-security-vulnerabilities/configuring-notifications-for-vulnerable-dependencies/#configuring-notifications-for-dependabot-alerts)."
{% endif %}

{% if currentVersion == "enterprise-server@2.21" %}When {% data variables.product.product_location %} receives information about a vulnerability, it will identify repositories in your instance that use the affected version of the dependency and generate security alerts. You can customize how you receive security alerts. For more information, see "[Configuring notifications for vulnerable dependencies](/github/managing-security-vulnerabilities/configuring-notifications-for-vulnerable-dependencies/#configuring-notifications-for-security-alerts)."
{% endif %}

{% if currentVersion ver_lt "enterprise-server@2.21" %}When {% data variables.product.product_location %} receives information about a vulnerability, it will identify repositories in your instance that use the affected version of the dependency and generate security alerts. You can customize how you receive security alerts. For more information, see "[Choosing the delivery method for your notifications](/github/receiving-notifications-about-activity-on-github/choosing-the-delivery-method-for-your-notifications#choosing-the-delivery-method-for-security-alerts-for-vulnerable-dependencies)."
{% endif %}

{% if currentVersion ver_gt "enterprise-server@2.21" %}
### Enabling {% data variables.product.prodname_dependabot_alerts %} for vulnerable dependencies on {% data variables.product.prodname_ghe_server %}
{% else %}
### Enabling security alerts for vulnerable dependencies on {% data variables.product.prodname_ghe_server %}
{% endif %}

Before enabling {% if currentVersion ver_gt "enterprise-server@2.21" %}{% data variables.product.prodname_dependabot %}{% else %}security{% endif %} alerts for vulnerable dependencies on {% data variables.product.product_location %}, you must connect {% data variables.product.product_location %} to {% data variables.product.prodname_dotcom_the_website %}. For more information, see "[Connecting {% data variables.product.prodname_ghe_server %} to {% data variables.product.prodname_ghe_cloud %}](/enterprise/{{ currentVersion }}/admin/guides/installation/connecting-github-enterprise-server-to-github-enterprise-cloud)."

{% if currentVersion ver_gt "enterprise-server@2.20" %}

{% if currentVersion ver_gt "enterprise-server@2.21" %}We recommend configuring {% data variables.product.prodname_dependabot_alerts %} without notifications for the first few days to avoid an overload of emails. After a few days, you can enable notifications to receive {% data variables.product.prodname_dependabot_alerts %} as usual.{% endif %}

{% if currentVersion == "enterprise-server@2.21" %}We recommend configuring security alerts without notifications for the first few days to avoid an overload of emails. After a few days, you can enable notifications to receive security alerts as usual.{% endif %}

{% endif %}

{% data reusables.enterprise_site_admin_settings.sign-in %}

1. In the administrative shell, enable the {% if currentVersion ver_gt "enterprise-server@2.21" %}{% data variables.product.prodname_dependabot %}{% else %}security{% endif %} alerts for vulnerable dependencies on {% data variables.product.product_location %}:

 ``` shell
$ ghe-dep-graph-enable
```
   {% note %}

   **Note**: For more information about enabling access to the administrative shell via SSH, see "[Accessing the administrative shell (SSH)](/enterprise/{{ currentVersion }}/admin/configuration/accessing-the-administrative-shell-ssh)."

   {% endnote %}

3. Return to {% data variables.product.prodname_ghe_server %}.
{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.github-connect-tab %}{% if currentVersion ver_gt "enterprise-server@2.20" %}
5. Under "Repositories can be scanned for vulnerabilities", use the drop-down menu and select **Enabled without notifications**. Optionally, to enable alerts with notifications, select **Enabled with notifications**.{% else %}
5. Under "Repositories can be scanned for vulnerabilities", use the drop-down menu and select **Enabled**.
{% endif %}
   ![Drop-down menu to enable scanning repositories for vulnerabilities](/assets/images/enterprise/site-admin-settings/enable-vulnerability-scanning-in-repositories.png)

### Viewing vulnerable dependencies on {% data variables.product.prodname_ghe_server %}

You can view all vulnerabilities in {% data variables.product.product_location %} and manually sync vulnerability data from {% data variables.product.prodname_dotcom_the_website %} to update the list.

{% data reusables.enterprise_site_admin_settings.access-settings %}
2. In the left sidebar, click **Vulnerabilities**.
  ![Vulnerabilities tab in the site admin sidebar](/assets/images/enterprise/business-accounts/vulnerabilities-tab.png)
3. To sync vulnerability data, click **Sync Vulnerabilities now**.
  ![Sync vulnerabilities now button](/assets/images/enterprise/site-admin-settings/sync-vulnerabilities-button.png)

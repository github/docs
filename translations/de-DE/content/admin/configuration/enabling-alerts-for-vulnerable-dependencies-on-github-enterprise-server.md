---
title: Enabling alerts for vulnerable dependencies on GitHub Enterprise Server
intro: 'You can connect {% data variables.product.product_location_enterprise %} to {% data variables.product.prodname_ghe_cloud %} and enable {% if currentVersion ver_gt "enterprise-server@2.21" %}{% data variables.product.prodname_dependabot_short %}{% else %}security{% endif %} alerts for vulnerable dependencies in repositories in your instance.'
redirect_from:
  - /enterprise/admin/installation/enabling-security-alerts-for-vulnerable-dependencies-on-github-enterprise-server
  - /enterprise/admin/configuration/enabling-security-alerts-for-vulnerable-dependencies-on-github-enterprise-server
  - /enterprise/admin/configuration/enabling-alerts-for-vulnerable-dependencies-on-github-enterprise-server
permissions: 'Site administrators for {% data variables.product.prodname_ghe_server %} who are also owners of the connected {% data variables.product.prodname_ghe_cloud %} organization or enterprise account can enable {% if currentVersion ver_gt "enterprise-server@2.21" %}{% data variables.product.prodname_dependabot_short %}{% else %}security{% endif %} alerts for vulnerable dependencies on {% data variables.product.prodname_ghe_server %}.'
versions:
  enterprise-server: '*'
---

### About alerts for vulnerable dependencies on {% data variables.product.prodname_ghe_server %}

{% data reusables.repositories.tracks-vulnerabilities %} For more information, see "[About alerts for vulnerable dependencies](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies)."

You can connect {% data variables.product.product_location_enterprise %} to {% data variables.product.prodname_dotcom_the_website %}, then sync vulnerability data to your instance and generate {% if currentVersion ver_gt "enterprise-server@2.21" %}{% data variables.product.prodname_dependabot_short %}{% else %}security{% endif %} alerts in repositories with a vulnerable dependency.

After connecting {% data variables.product.product_location_enterprise %} to {% data variables.product.prodname_dotcom_the_website %} and enabling {% if currentVersion ver_gt "enterprise-server@2.21" %}{% data variables.product.prodname_dependabot_short %}{% else %}security{% endif %} alerts for vulnerable dependencies, vulnerability data is synced from {% data variables.product.prodname_dotcom_the_website %} to your instance once every hour. Sie können die Schwachstellendaten auch jederzeit manuell synchronisieren. Es werden weder Code noch Informationen zu Code von {% data variables.product.product_location_enterprise %} auf {% data variables.product.prodname_dotcom_the_website %} hochgeladen.

{% if currentVersion ver_gt "enterprise-server@2.21" %}When {% data variables.product.product_location_enterprise %} receives information about a vulnerability, it will identify repositories in your instance that use the affected version of the dependency and send {% data variables.product.prodname_dependabot_short %} alerts. You can customize how you receive {% data variables.product.prodname_dependabot_short %} alerts. For more information, see "[Configuring notifications for vulnerable dependencies](/github/managing-security-vulnerabilities/configuring-notifications-for-vulnerable-dependencies/#configuring-notifications-for-github-dependabot-alerts)."
{% endif %}

{% if currentVersion == "enterprise-server@2.21" %}When {% data variables.product.product_location_enterprise %} receives information about a vulnerability, it will identify repositories in your instance that use the affected version of the dependency and send security alerts. You can customize how you receive security alerts. For more information, see "[Configuring notifications for vulnerable dependencies](/github/managing-security-vulnerabilities/configuring-notifications-for-vulnerable-dependencies/#configuring-notifications-for-security-alerts)."
{% endif %}

{% if currentVersion ver_lt "enterprise-server@2.21" %}When {% data variables.product.product_location_enterprise %} receives information about a vulnerability, it will identify repositories in your instance that use the affected version of the dependency and send security alerts. You can customize how you receive security alerts. Weitere Informationen finden Sie unter „[Auslieferungsmethode für Ihre Benachrichtigungen wählen](/github/receiving-notifications-about-activity-on-github/choosing-the-delivery-method-for-your-notifications#choosing-the-delivery-method-for-security-alerts-for-vulnerable-dependencies)“.
{% endif %}

{% if currentVersion ver_gt "enterprise-server@2.21" %}
### Enabling {% data variables.product.prodname_dependabot_short %} alerts for vulnerable dependencies on {% data variables.product.prodname_ghe_server %}
{% else %}
### Sicherheitsmeldungen für angreifbare Abhängigkeiten auf {% data variables.product.prodname_ghe_server %} aktivieren
{% endif %}

Before enabling {% if currentVersion ver_gt "enterprise-server@2.21" %}{% data variables.product.prodname_dependabot_short %}{% else %}security{% endif %} alerts for vulnerable dependencies on {% data variables.product.product_location_enterprise %}, you must connect {% data variables.product.product_location_enterprise %} to {% data variables.product.prodname_dotcom_the_website %}. Weitere Informationen finden Sie unter „[{% data variables.product.prodname_ghe_server %} mit {% data variables.product.prodname_ghe_cloud %} verbinden](/enterprise/{{ currentVersion }}/admin/guides/installation/connecting-github-enterprise-server-to-github-enterprise-cloud)“.

{% if currentVersion ver_gt "enterprise-server@2.20" %}

{% if currentVersion ver_gt "enterprise-server@2.21" %}We recommend configuring {% data variables.product.prodname_dependabot_short %} alerts without notifications for the first few days to avoid an overload of emails. After a few days, you can enable notifications to receive {% data variables.product.prodname_dependabot_short %} alerts as usual.{% endif %}

{% if currentVersion == "enterprise-server@2.21" %}We recommend configuring security alerts without notifications for the first few days to avoid an overload of emails. After a few days, you can enable notifications to receive security alerts as usual.{% endif %}

{% endif %}

{% data reusables.enterprise_site_admin_settings.sign-in %}
1. In the administrative shell, enable the {% if currentVersion ver_gt "enterprise-server@2.21" %}{% data variables.product.prodname_dependabot_short %}{% else %}security{% endif %} alerts for vulnerable dependencies on {% data variables.product.product_location_enterprise %}:
 ``` shell
$ ghe-dep-graph-enable
```
   {% note %}

   **Note**: For more information about enabling access to the administrative shell via SSH, see "[Accessing the administrative shell (SSH)](/enterprise/{{ currentVersion }}/admin/configuration/accessing-the-administrative-shell-ssh)."

   {% endnote %}

3. Return to

{% data variables.product.prodname_ghe_server %}.
{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.business %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.github-connect-tab %}{% if currentVersion ver_gt "enterprise-server@2.20" %}
5. Under "Repositories can be scanned for vulnerabilities", use the drop-down menu and select **Enabled without notifications**. Optionally, to enable alerts with notifications, select **Enabled with notifications**.{% else %}
5. Verwenden Sie unter „Repositories can be scanned for vulnerabilities“ (Repositorys können auf Schwachstellen überprüft werden) das Dropdownmenü, und wählen Sie **Enabled** (Aktiviert) aus.
{% endif %}
   ![Dropdownmenü zum Aktivieren der Überprüfung von Repositorys auf Schwachstellen](/assets/images/enterprise/site-admin-settings/enable-vulnerability-scanning-in-repositories.png)

### Angreifbare Abhängigkeiten auf {% data variables.product.prodname_ghe_server %} anzeigen

Sie können alle Schwachstellen in {% data variables.product.product_location_enterprise %} anzeigen und Schwachstellendaten von {% data variables.product.prodname_dotcom_the_website %} manuell synchronisieren, um die Liste zu aktualisieren.

{% data reusables.enterprise_site_admin_settings.access-settings %}
2. Klicken Sie auf der linken Seitenleiste auf **Vulnerabilities** (Schwachstellen). ![Registerkarte „Vulnerabilities“ (Schwachstellen) auf der Seitenleiste für Websiteadministratoren](/assets/images/enterprise/business-accounts/vulnerabilities-tab.png)
3. Klicken Sie zum Synchronisieren von Schwachstellendaten auf **Sync Vulnerabilities now** (Schwachstellen jetzt synchronisieren). ![Schaltfläche „Sync vulnerabilities now“ (Schwachstellen jetzt synchronisieren)](/assets/images/enterprise/site-admin-settings/sync-vulnerabilities-button.png)

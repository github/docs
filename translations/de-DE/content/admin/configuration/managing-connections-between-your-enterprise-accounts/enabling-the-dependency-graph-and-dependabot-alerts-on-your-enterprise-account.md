---
title: Enabling the dependency graph and Dependabot alerts on your enterprise account
intro: 'You can connect {% data variables.product.product_location %} to {% data variables.product.prodname_ghe_cloud %} and enable the dependency graph and {% data variables.product.prodname_dependabot %} alerts in repositories in your instance.'
shortTitle: Enable dependency analysis
redirect_from:
  - /enterprise/admin/installation/enabling-security-alerts-for-vulnerable-dependencies-on-github-enterprise-server
  - /enterprise/admin/configuration/enabling-security-alerts-for-vulnerable-dependencies-on-github-enterprise-server
  - /enterprise/admin/configuration/enabling-alerts-for-vulnerable-dependencies-on-github-enterprise-server
  - /admin/configuration/enabling-alerts-for-vulnerable-dependencies-on-github-enterprise-server
  - /admin/configuration/managing-connections-between-github-enterprise-server-and-github-enterprise-cloud/enabling-alerts-for-vulnerable-dependencies-on-github-enterprise-server
  - /admin/configuration/managing-connections-between-your-enterprise-accounts/enabling-alerts-for-vulnerable-dependencies-on-github-enterprise-server
permissions: 'Enterprise owners who are also owners of the connected {% data variables.product.prodname_ghe_cloud %} organization or enterprise account can enable the dependency graph and {% data variables.product.prodname_dependabot %} alerts on {% data variables.product.product_location %}.'
versions:
  ghes: '*'
  ghae: issue-4864
type: how_to
topics:
  - Enterprise
  - Security
  - Dependency graph
  - Dependabot
---

## About alerts for vulnerable dependencies on {% data variables.product.product_location %}

{% data reusables.dependabot.dependabot-alerts-beta %}

{% data variables.product.prodname_dotcom %} identifies vulnerable dependencies in repositories and creates {% data variables.product.prodname_dependabot_alerts %} on {% data variables.product.product_location %}, using:

- Data from the {% data variables.product.prodname_advisory_database %}
- The dependency graph service

For more information about these features, see "[About the dependency graph](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph)" and "[About alerts for vulnerable dependencies](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies)."

### About synchronization of data from the {% data variables.product.prodname_advisory_database %}

{% data reusables.repositories.tracks-vulnerabilities %}

You can connect {% data variables.product.product_location %} to {% data variables.product.prodname_dotcom_the_website %} with {% data variables.product.prodname_github_connect %}. Once connected, vulnerability data is synced from the {% data variables.product.prodname_advisory_database %} to your instance once every hour. Sie können die Schwachstellendaten auch jederzeit manuell synchronisieren. Es werden weder Code noch Informationen zu Code von {% data variables.product.product_location %} auf {% data variables.product.prodname_dotcom_the_website %} hochgeladen.

### About generation of {% data variables.product.prodname_dependabot_alerts %}

If you enable vulnerability detection, when {% data variables.product.product_location %} receives information about a vulnerability, it identifies repositories in your instance that use the affected version of the dependency and generates {% data variables.product.prodname_dependabot_alerts %}. You can choose whether or not to notify users automatically about new {% data variables.product.prodname_dependabot_alerts %}.

## Enabling the dependency graph and {% data variables.product.prodname_dependabot_alerts %} for vulnerable dependencies on {% data variables.product.product_location %}

### Vorrausetzungen

For {% data variables.product.product_location %} to detect vulnerable dependencies and generate {% data variables.product.prodname_dependabot_alerts %}:
- You must connect {% data variables.product.product_location %} to {% data variables.product.prodname_dotcom_the_website %}. {% ifversion ghae %}This also enables the dependency graph service. {% endif %}{% ifversion ghes or ghae-next %}For more information, see "[Connecting your enterprise account to {% data variables.product.prodname_ghe_cloud %}](/admin/configuration/managing-connections-between-your-enterprise-accounts/connecting-your-enterprise-account-to-github-enterprise-cloud)."{% endif %}
{% ifversion ghes %}- You must enable the dependency graph service.{% endif %}
- You must enable vulnerability scanning.

{% ifversion ghes %}
{% ifversion ghes > 3.1 %}
You can enable the dependency graph via the {% data variables.enterprise.management_console %} or the administrative shell. We recommend you follow the {% data variables.enterprise.management_console %} route unless {% data variables.product.product_location %} uses clustering.

### Enabling the dependency graph via the {% data variables.enterprise.management_console %}
{% data reusables.enterprise_site_admin_settings.sign-in %}
{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_management_console.advanced-security-tab %}
1. Under "Security," click **Dependency graph**. ![Checkbox to enable or disable the dependency graph](/assets/images/enterprise/3.2/management-console/enable-dependency-graph-checkbox.png)
{% data reusables.enterprise_management_console.save-settings %}
1. Klicke auf **Visit your instance** (Instanz aufrufen).

### Enabling the dependency graph via the administrative shell
{% endif %}{% ifversion ghes < 3.2 %}
### Enabling the dependency graph
{% endif %}
{% data reusables.enterprise_site_admin_settings.sign-in %}
1. In the administrative shell, enable the dependency graph on {% data variables.product.product_location %}:
    ``` shell
    $ {% ifversion ghes > 3.1 %}ghe-config app.dependency-graph.enabled true{% else %}ghe-config app.github.dependency-graph-enabled true{% endif %}
    ```
   {% note %}

   **Note**: For more information about enabling access to the administrative shell via SSH, see "[Accessing the administrative shell (SSH)](/enterprise/{{ currentVersion }}/admin/configuration/accessing-the-administrative-shell-ssh)."

   {% endnote %}
1. Apply the configuration.
    ```shell
    $ ghe-config-apply
    ```
1. Kehren Sie zu {% data variables.product.prodname_ghe_server %} zurück.
{% endif %}

### {% data variables.product.prodname_dependabot_alerts %} aktivieren

{% ifversion ghes %}
Before enabling {% data variables.product.prodname_dependabot_alerts %} for your instance, you need to enable the dependency graph. For more information, see above.
{% endif %}

{% data reusables.enterprise-accounts.access-enterprise %}
{%- ifversion ghes < 3.1 %}{% data reusables.enterprise-accounts.settings-tab %}{% endif %}
{% data reusables.enterprise-accounts.github-connect-tab %}
1. Under "Repositories can be scanned for vulnerabilities", select the drop-down menu and click **Enabled without notifications**. Optionally, to enable alerts with notifications, click **Enabled with notifications**. ![Dropdownmenü zum Aktivieren der Überprüfung von Repositorys auf Schwachstellen](/assets/images/enterprise/site-admin-settings/enable-vulnerability-scanning-in-repositories.png)

   {% tip %}

   **Tip**: We recommend configuring {% data variables.product.prodname_dependabot_alerts %} without notifications for the first few days to avoid an overload of emails. After a few days, you can enable notifications to receive {% data variables.product.prodname_dependabot_alerts %} as usual.

   {% endtip %}

## Angreifbare Abhängigkeiten auf {% data variables.product.product_location %} anzeigen

Sie können alle Schwachstellen in {% data variables.product.product_location %} anzeigen und Schwachstellendaten von {% data variables.product.prodname_dotcom_the_website %} manuell synchronisieren, um die Liste zu aktualisieren.

{% data reusables.enterprise_site_admin_settings.access-settings %}
2. Klicken Sie auf der linken Seitenleiste auf **Vulnerabilities** (Schwachstellen). ![Registerkarte „Vulnerabilities“ (Schwachstellen) auf der Seitenleiste für Websiteadministratoren](/assets/images/enterprise/business-accounts/vulnerabilities-tab.png)
3. Klicken Sie zum Synchronisieren von Schwachstellendaten auf **Sync Vulnerabilities now** (Schwachstellen jetzt synchronisieren). ![Schaltfläche „Sync vulnerabilities now“ (Schwachstellen jetzt synchronisieren)](/assets/images/enterprise/site-admin-settings/sync-vulnerabilities-button.png)

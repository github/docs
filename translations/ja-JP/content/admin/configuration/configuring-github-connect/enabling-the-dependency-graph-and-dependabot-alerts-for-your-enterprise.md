---
title: Enabling the dependency graph and Dependabot alerts for your enterprise
intro: 'You can allow users on {% data variables.product.product_location %} to find and fix vulnerabilities in code dependencies by enabling the dependency graph and {% data variables.product.prodname_dependabot_alerts %}.'
miniTocMaxHeadingLevel: 3
shortTitle: Dependabot
redirect_from:
  - /enterprise/admin/installation/enabling-security-alerts-for-vulnerable-dependencies-on-github-enterprise-server
  - /enterprise/admin/configuration/enabling-security-alerts-for-vulnerable-dependencies-on-github-enterprise-server
  - /enterprise/admin/configuration/enabling-alerts-for-vulnerable-dependencies-on-github-enterprise-server
  - /admin/configuration/enabling-alerts-for-vulnerable-dependencies-on-github-enterprise-server
  - /admin/configuration/managing-connections-between-github-enterprise-server-and-github-enterprise-cloud/enabling-alerts-for-vulnerable-dependencies-on-github-enterprise-server
  - /admin/configuration/managing-connections-between-your-enterprise-accounts/enabling-alerts-for-vulnerable-dependencies-on-github-enterprise-server
  - /admin/configuration/managing-connections-between-your-enterprise-accounts/enabling-the-dependency-graph-and-dependabot-alerts-on-your-enterprise-account
permissions: 'Enterprise owners who are also owners of the connected {% data variables.product.prodname_ghe_cloud %} organization or enterprise account can enable the dependency graph and  {% data variables.product.prodname_dependabot_alerts %} on {% data variables.product.product_location %}.'
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

## {% data variables.product.product_location %} 上の脆弱性のある依存関係に対するアラートについて

{% data reusables.dependabot.dependabot-alerts-beta %}

{% data variables.product.prodname_dotcom %} identifies vulnerable dependencies in repositories and creates {% data variables.product.prodname_dependabot_alerts %} on {% data variables.product.product_location %}, using:

- Data from the {% data variables.product.prodname_advisory_database %}
- The dependency graph service

For more information about these features, see "[About the dependency graph](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph)" and "[About alerts for vulnerable dependencies](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies)."

### About synchronization of data from the {% data variables.product.prodname_advisory_database %}

{% data reusables.repositories.tracks-vulnerabilities %}

You can connect {% data variables.product.product_location %} to {% data variables.product.prodname_ghe_cloud %} with {% data variables.product.prodname_github_connect %}. Once connected, vulnerability data is synced from the {% data variables.product.prodname_advisory_database %} to your instance once every hour. また、脆弱性データはいつでも手動で同期することができます。 {% data variables.product.product_location %} からのコードまたはコードに関する情報は、{% data variables.product.prodname_dotcom_the_website %} にアップロードされません。

Only {% data variables.product.company_short %}-reviewed advisories are synchronized. {% data reusables.security-advisory.link-browsing-advisory-db %}

### About scanning of repositories with synchronized data from the {% data variables.product.prodname_advisory_database %}

For repositories with {% data variables.product.prodname_dependabot_alerts %} enabled, scanning is triggered on any push to the default branch that contains a manifest file or lock file. Additionally, when a new vulnerability record is added to the instance, {% data variables.product.prodname_ghe_server %} scans all existing repositories in that instance and generates alerts for any repository that is vulnerable. For more information, see "[Detection of vulnerable dependencies](/code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/about-alerts-for-vulnerable-dependencies#detection-of-vulnerable-dependencies)."

### About generation of {% data variables.product.prodname_dependabot_alerts %}

If you enable vulnerability detection, when {% data variables.product.product_location %} receives information about a vulnerability, it identifies repositories in your instance that use the affected version of the dependency and generates {% data variables.product.prodname_dependabot_alerts %}. You can choose whether or not to notify users automatically about new {% data variables.product.prodname_dependabot_alerts %}.

## Enabling the dependency graph and {% data variables.product.prodname_dependabot_alerts %} for vulnerable dependencies on {% data variables.product.product_location %}

### 必要な環境

For {% data variables.product.product_location %} to detect vulnerable dependencies and generate {% data variables.product.prodname_dependabot_alerts %}:
- You must enable {% data variables.product.prodname_github_connect %}. {% ifversion ghae %}This also enables the dependency graph service.{% endif %}{% ifversion ghes or ghae %}For more information, see "[Managing {% data variables.product.prodname_github_connect %}](/admin/configuration/configuring-github-connect/managing-github-connect)."{% endif %}
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
1. **Visit your instance（インスタンスへのアクセス）**をクリックしてください。

### Enabling the dependency graph via the administrative shell
{% endif %}{% ifversion ghes < 3.2 %}
### 依存関係グラフの有効化
{% endif %}
{% data reusables.enterprise_site_admin_settings.sign-in %}
1. In the administrative shell, enable the dependency graph on {% data variables.product.product_location %}:
    {% ifversion ghes > 3.1 %}```shell
    ghe-config app.dependency-graph.enabled true
    ```
    {% else %}```shell
    ghe-config app.github.dependency-graph-enabled true
  ghe-config app.github.vulnerability-alerting-and-settings-enabled true
    ```{% endif %}
   {% note %}

   **Note**: For more information about enabling access to the administrative shell via SSH, see "[Accessing the administrative shell (SSH)](/enterprise/{{ currentVersion }}/admin/configuration/accessing-the-administrative-shell-ssh)."

   {% endnote %}
2. 設定を適用します。
    ```shell
    $ ghe-config-apply
    ```
3. {% data variables.product.prodname_ghe_server %}に戻ります。
{% endif %}

### {% data variables.product.prodname_dependabot_alerts %} の有効化

{% ifversion ghes %}
Before enabling {% data variables.product.prodname_dependabot_alerts %} for your instance, you need to enable the dependency graph. For more information, see above.
{% endif %}

{% data reusables.enterprise-accounts.access-enterprise %}
{%- ifversion ghes < 3.1 %}{% data reusables.enterprise-accounts.settings-tab %}{% endif %}
{% data reusables.enterprise-accounts.github-connect-tab %}
1. Under "Repositories can be scanned for vulnerabilities", select the drop-down menu and click **Enabled without notifications**. Optionally, to enable alerts with notifications, click **Enabled with notifications**. ![脆弱性に対するリポジトリのスキャンを有効化するドロップダウンメニュー](/assets/images/enterprise/site-admin-settings/enable-vulnerability-scanning-in-repositories.png)

   {% tip %}

   **Tip**: We recommend configuring {% data variables.product.prodname_dependabot_alerts %} without notifications for the first few days to avoid an overload of emails. 数日後、通知を有効化すれば、通常どおり {% data variables.product.prodname_dependabot_alerts %} を受信できます。

   {% endtip %}

{% ifversion fpt or ghec or ghes > 3.2 %}
When you enable {% data variables.product.prodname_dependabot_alerts %}, you should consider also setting up {% data variables.product.prodname_actions %} for {% data variables.product.prodname_dependabot_security_updates %}. This feature allows developers to fix vulnerabilities in their dependencies. For more information, see "[Setting up {% data variables.product.prodname_dependabot %} security and version updates on your enterprise](/admin/github-actions/enabling-github-actions-for-github-enterprise-server/setting-up-dependabot-updates)."
{% endif %}

## {% data variables.product.product_location %}で脆弱性のある依存関係を表示する

{% data variables.product.product_location %}ですべての脆弱性を表示し、{% data variables.product.prodname_dotcom_the_website %}から脆弱性データを手動で同期して、リストを更新することができます。

{% data reusables.enterprise_site_admin_settings.access-settings %}
2. 左サイドバーで [**Vulnerabilities**] をクリックします。 ![サイト管理サイドバーの [Vulnerabilities] タブ](/assets/images/enterprise/business-accounts/vulnerabilities-tab.png)
3. 脆弱性データを同期するには、[**Sync Vulnerabilities now**] をクリックします。 ![[Sync vulnerabilities now] ボタン](/assets/images/enterprise/site-admin-settings/sync-vulnerabilities-button.png)

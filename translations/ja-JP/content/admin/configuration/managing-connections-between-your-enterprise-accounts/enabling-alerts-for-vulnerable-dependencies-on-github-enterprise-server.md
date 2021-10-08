---
title: GitHub Enterprise Serverで脆弱性のある依存関係に対するアラートを有効化する
intro: 'You can connect {% data variables.product.product_location %} to {% data variables.product.prodname_ghe_cloud %} and enable the dependency graph and {% ifversion ghes %}{% data variables.product.prodname_dependabot %}{% else %}security{% endif %} alerts in repositories in your instance.'
shortTitle: Enable alerts for dependencies
miniTocMaxHeadingLevel: 3
redirect_from:
  - /enterprise/admin/installation/enabling-security-alerts-for-vulnerable-dependencies-on-github-enterprise-server
  - /enterprise/admin/configuration/enabling-security-alerts-for-vulnerable-dependencies-on-github-enterprise-server
  - /enterprise/admin/configuration/enabling-alerts-for-vulnerable-dependencies-on-github-enterprise-server
  - /admin/configuration/enabling-alerts-for-vulnerable-dependencies-on-github-enterprise-server
  - /admin/configuration/managing-connections-between-github-enterprise-server-and-github-enterprise-cloud/enabling-alerts-for-vulnerable-dependencies-on-github-enterprise-server
permissions: 'Site administrators for {% data variables.product.prodname_ghe_server %} who are also owners of the connected {% data variables.product.prodname_ghe_cloud %} organization or enterprise account can enable the dependency graph and {% data variables.product.prodname_dependabot %} alerts on {% data variables.product.prodname_ghe_server %}.'
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Security
  - Dependency graph
  - Dependabot
---

## {% data variables.product.prodname_ghe_server %} 上の脆弱性のある依存関係に対するアラートについて

To identify vulnerable dependencies in your repository and receive alerts about vulnerabilities, you need to enable two security features:
- The dependency graph
- {% data variables.product.prodname_dependabot %} アラート

For more information, see "[About the dependency graph](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph)" and "[About alerts for vulnerable dependencies](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies)."

{% data reusables.repositories.tracks-vulnerabilities %}

You can connect {% data variables.product.product_location %} to {% data variables.product.prodname_dotcom_the_website %}, then sync vulnerability data to your instance and generate {% data variables.product.prodname_dependabot_alerts %} in repositories with a vulnerable dependency.

After connecting {% data variables.product.product_location %} to {% data variables.product.prodname_dotcom_the_website %} and enabling the dependency graph and {% data variables.product.prodname_dependabot_alerts %} for vulnerable dependencies, vulnerability data is synced from {% data variables.product.prodname_dotcom_the_website %} to your instance once every hour. また、脆弱性データはいつでも手動で同期することができます。 {% data variables.product.product_location %} からのコードまたはコードに関する情報は、{% data variables.product.prodname_dotcom_the_website %} にアップロードされません。

When {% data variables.product.product_location %} receives information about a vulnerability, it will identify repositories in your instance that use the affected version of the dependency and generate {% data variables.product.prodname_dependabot_alerts %}. {% data variables.product.prodname_dependabot_alerts %} を受け取る方法をカスタマイズできます。 詳しい情報については、「[脆弱性のある依存関係に対する通知を設定する](/github/managing-security-vulnerabilities/configuring-notifications-for-vulnerable-dependencies/#configuring-notifications-for-dependabot-alerts)」を参照してください。

Before enabling the dependency graph and {% ifversion ghes > 2.21 %}{% data variables.product.prodname_dependabot %}{% else %}security{% endif %} alerts for vulnerable dependencies on {% data variables.product.product_location %}, you must connect {% data variables.product.product_location %} to {% data variables.product.prodname_dotcom_the_website %}. For more information, see "[Connecting your enterprise account to {% data variables.product.prodname_ghe_cloud %}](/admin/configuration/managing-connections-between-your-enterprise-accounts/connecting-your-enterprise-account-to-github-enterprise-cloud)."

## Enabling the dependency graph and {% data variables.product.prodname_dependabot_alerts %} on GitHub Enterprise Server

For {% data variables.product.product_location %} to generate {% data variables.product.prodname_dependabot_alerts %} whenever vulnerabilities are detected on your repositories:
-  You must connect {% data variables.product.product_location %} to {% data variables.product.prodname_dotcom_the_website %}. 詳細は、「[{% data variables.product.prodname_ghe_server %}を{% data variables.product.prodname_ghe_cloud %}に接続する](/admin/guides/installation/connecting-github-enterprise-server-to-github-enterprise-cloud)」を参照してください。
-  You must enable the dependency graph.

{% ifversion ghes > 3.1 %}
You can enable the dependency graph via the {% data variables.enterprise.management_console %} or the administrative shell. We recommend you follow the {% data variables.enterprise.management_console %} route unless {% data variables.product.product_location %} uses clustering.

### Enabling the dependency graph via the {% data variables.enterprise.management_console %}
{% endif %}{% ifversion ghes > 3.1 %}
{% data reusables.enterprise_site_admin_settings.sign-in %}
{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_management_console.advanced-security-tab %}
1. Under "Security," click **Dependency graph**. ![Checkbox to enable or disable the dependency graph](/assets/images/enterprise/3.2/management-console/enable-dependency-graph-checkbox.png)
{% data reusables.enterprise_management_console.save-settings %}
1. **Visit your instance（インスタンスへのアクセス）**をクリックしてください。

### Enabling the dependency graph via the administrative shell
{% else %}
### 依存関係グラフの有効化
{% endif %}
{% data reusables.enterprise_site_admin_settings.sign-in %}
1. In the administrative shell, enable the dependency graph on {% data variables.product.product_location %}:
    ``` shell
    $ {% ifversion ghes > 3.1 %}ghe-config app.dependency-graph.enabled true{% else %}ghe-config app.github.dependency-graph-enabled true{% endif %}
    ```
   {% note %}

   **注釈**: SSH 経由で管理シェルへのアクセスを有効化する方法について詳しくは、「[管理シェル (SSH) にアクセスする](/enterprise/{{ currentVersion }}/admin/configuration/accessing-the-administrative-shell-ssh)」を参照してください。

   {% endnote %}
1. 設定を適用します。
    ```shell
    $ ghe-config-apply
    ```
1. {% data variables.product.prodname_ghe_server %}に戻ります。

### {% data variables.product.prodname_dependabot_alerts %} の有効化

Before enabling {% data variables.product.prodname_dependabot_alerts %} for your instance, you need to enable the dependency graph. For more information, see above.

{% data reusables.enterprise-accounts.access-enterprise %}{% ifversion ghes < 3.1 %}{% data reusables.enterprise-accounts.settings-tab %}{% endif %}{% data reusables.enterprise-accounts.github-connect-tab %}
1. [Repositories can be scanned for vulnerabilities] で、ドロップダウンメニューを使用して、[**Enabled without notifications**] を選択します。 必要に応じて、通知を含むアラートを有効化にするには、[**Enabled with notifications**] を選択します。 ![脆弱性に対するリポジトリのスキャンを有効化するドロップダウンメニュー](/assets/images/enterprise/site-admin-settings/enable-vulnerability-scanning-in-repositories.png)
   {% note %}

   We recommend configuring {% data variables.product.prodname_dependabot_alerts %} without notifications for the first few days to avoid an overload of emails. 数日後、通知を有効化すれば、通常どおり {% data variables.product.prodname_dependabot_alerts %} を受信できます。

   {% endnote %}
## {% data variables.product.prodname_ghe_server %}で脆弱性のある依存関係を表示する

{% data variables.product.product_location %}ですべての脆弱性を表示し、{% data variables.product.prodname_dotcom_the_website %}から脆弱性データを手動で同期して、リストを更新することができます。

{% data reusables.enterprise_site_admin_settings.access-settings %}
2. 左サイドバーで [**Vulnerabilities**] をクリックします。 ![サイト管理サイドバーの [Vulnerabilities] タブ](/assets/images/enterprise/business-accounts/vulnerabilities-tab.png)
3. 脆弱性データを同期するには、[**Sync Vulnerabilities now**] をクリックします。 ![[Sync vulnerabilities now] ボタン](/assets/images/enterprise/site-admin-settings/sync-vulnerabilities-button.png)

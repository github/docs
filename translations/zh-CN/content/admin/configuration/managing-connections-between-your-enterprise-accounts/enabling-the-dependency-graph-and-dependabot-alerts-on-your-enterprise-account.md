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

## 关于 {% data variables.product.product_location %} 上易受攻击的依赖项的警报

{% data reusables.dependabot.dependabot-alerts-beta %}

{% data variables.product.prodname_dotcom %} identifies vulnerable dependencies in repositories and creates {% data variables.product.prodname_dependabot_alerts %} on {% data variables.product.product_location %}, using:

- Data from the {% data variables.product.prodname_advisory_database %}
- The dependency graph service

For more information about these features, see "[About the dependency graph](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph)" and "[About alerts for vulnerable dependencies](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies)."

### About synchronization of data from the {% data variables.product.prodname_advisory_database %}

{% data reusables.repositories.tracks-vulnerabilities %}

You can connect {% data variables.product.product_location %} to {% data variables.product.prodname_dotcom_the_website %} with {% data variables.product.prodname_github_connect %}. Once connected, vulnerability data is synced from the {% data variables.product.prodname_advisory_database %} to your instance once every hour. 您还可以随时选择手动同步漏洞数据。 代码和关于代码的信息不会从 {% data variables.product.product_location %} 上传到 {% data variables.product.prodname_dotcom_the_website %}。

### About generation of {% data variables.product.prodname_dependabot_alerts %}

If you enable vulnerability detection, when {% data variables.product.product_location %} receives information about a vulnerability, it identifies repositories in your instance that use the affected version of the dependency and generates {% data variables.product.prodname_dependabot_alerts %}. You can choose whether or not to notify users automatically about new {% data variables.product.prodname_dependabot_alerts %}.

## Enabling the dependency graph and {% data variables.product.prodname_dependabot_alerts %} for vulnerable dependencies on {% data variables.product.product_location %}

### 基本要求

For {% data variables.product.product_location %} to detect vulnerable dependencies and generate {% data variables.product.prodname_dependabot_alerts %}:
- 您必须将 {% data variables.product.product_location %} 连接到 {% data variables.product.prodname_dotcom_the_website %}。 {% ifversion ghae %}This also enables the dependency graph service. {% endif %}{% ifversion ghes or ghae-next %}For more information, see "[Connecting your enterprise account to {% data variables.product.prodname_ghe_cloud %}](/admin/configuration/managing-connections-between-your-enterprise-accounts/connecting-your-enterprise-account-to-github-enterprise-cloud)."{% endif %}
{% ifversion ghes %}- You must enable the dependency graph service.{% endif %}
- You must enable vulnerability scanning.

{% ifversion ghes %}
{% ifversion ghes > 3.1 %}
您可以通过 {% data variables.enterprise.management_console %} 或管理 shell 启用依赖关系图。 我们建议您遵循 {% data variables.enterprise.management_console %} 路线，除非 {% data variables.product.product_location %} 使用集群。

### 通过 {% data variables.enterprise.management_console %} 启用依赖关系图
{% data reusables.enterprise_site_admin_settings.sign-in %}
{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_management_console.advanced-security-tab %}
1. 在“Security（安全）”下，单击 **Dependency graph（依赖关系图）**。 ![启用或禁用依赖关系图的复选框](/assets/images/enterprise/3.2/management-console/enable-dependency-graph-checkbox.png)
{% data reusables.enterprise_management_console.save-settings %}
1. 单击 **Visit your instance（访问您的实例）**。

### 通过管理 shell 启用依赖关系图
{% endif %}{% ifversion ghes < 3.2 %}
### 启用依赖关系图
{% endif %}
{% data reusables.enterprise_site_admin_settings.sign-in %}
1. 在管理 shell 中，启用 {% data variables.product.product_location %} 上的依赖关系图：
    ``` shell
    $ {% ifversion ghes > 3.1 %}ghe-config app.dependency-graph.enabled true{% else %}ghe-config app.github.dependency-graph-enabled true{% endif %}
    ```
   {% note %}

   **注**：有关启用通过 SSH 访问管理 shell 的更多信息，请参阅“[访问管理 shell (SSH)](/enterprise/{{ currentVersion }}/admin/configuration/accessing-the-administrative-shell-ssh)”。

   {% endnote %}
1. 应用配置。
    ```shell
    $ ghe-config-apply
    ```
1. 返回到 {% data variables.product.prodname_ghe_server %}。
{% endif %}

### 启用 {% data variables.product.prodname_dependabot_alerts %}

{% ifversion ghes %}
在为您的实例启用 {% data variables.product.prodname_dependabot_alerts %} 之前，您需要启用依赖关系图。 更多信息请参阅上文。
{% endif %}

{% data reusables.enterprise-accounts.access-enterprise %}
{%- ifversion ghes < 3.1 %}{% data reusables.enterprise-accounts.settings-tab %}{% endif %}
{% data reusables.enterprise-accounts.github-connect-tab %}
1. Under "Repositories can be scanned for vulnerabilities", select the drop-down menu and click **Enabled without notifications**. Optionally, to enable alerts with notifications, click **Enabled with notifications**. ![用于启用扫描仓库有无漏洞的下拉菜单](/assets/images/enterprise/site-admin-settings/enable-vulnerability-scanning-in-repositories.png)

   {% tip %}

   **Tip**: We recommend configuring {% data variables.product.prodname_dependabot_alerts %} without notifications for the first few days to avoid an overload of emails. 几天后，您可以开启通知，像往常一样接收 {% data variables.product.prodname_dependabot_alerts %}。

   {% endtip %}

## 查看 {% data variables.product.product_location %} 上易受攻击的依赖项

您可以查看 {% data variables.product.product_location %} 中的所有漏洞，然后手动同步 {% data variables.product.prodname_dotcom_the_website %} 中的漏洞数据，以更新列表。

{% data reusables.enterprise_site_admin_settings.access-settings %}
2. 在左侧边栏中，单击 **Vulnerabilities**。 ![站点管理员边栏中的 Vulnerabilities 选项卡](/assets/images/enterprise/business-accounts/vulnerabilities-tab.png)
3. 要同步漏洞数据，请单击 **Sync Vulnerabilities now**。 ![Sync vulnerabilities now 按钮](/assets/images/enterprise/site-admin-settings/sync-vulnerabilities-button.png)

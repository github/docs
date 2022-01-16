---
title: 为 GitHub Enterprise Server 上易受攻击的依赖项启用警报
intro: 'You can connect {% data variables.product.product_location %} to {% data variables.product.prodname_ghe_cloud %} and enable the dependency graph and {% ifversion ghes %}{% data variables.product.prodname_dependabot %}{% else %}security{% endif %} alerts in repositories in your instance.'
shortTitle: 启用依赖项警报
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

## 关于 {% data variables.product.prodname_ghe_server %} 上易受攻击的依赖项的警报

To identify vulnerable dependencies in your repository and receive alerts about vulnerabilities, you need to enable two security features:
- The dependency graph
- {% data variables.product.prodname_dependabot %} 警报

For more information, see "[About the dependency graph](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph)" and "[About alerts for vulnerable dependencies](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies)."

{% data reusables.repositories.tracks-vulnerabilities %}

You can connect {% data variables.product.product_location %} to {% data variables.product.prodname_dotcom_the_website %}, then sync vulnerability data to your instance and generate {% data variables.product.prodname_dependabot_alerts %} in repositories with a vulnerable dependency.

After connecting {% data variables.product.product_location %} to {% data variables.product.prodname_dotcom_the_website %} and enabling the dependency graph and {% data variables.product.prodname_dependabot_alerts %} for vulnerable dependencies, vulnerability data is synced from {% data variables.product.prodname_dotcom_the_website %} to your instance once every hour. 您还可以随时选择手动同步漏洞数据。 代码和关于代码的信息不会从 {% data variables.product.product_location %} 上传到 {% data variables.product.prodname_dotcom_the_website %}。

When {% data variables.product.product_location %} receives information about a vulnerability, it will identify repositories in your instance that use the affected version of the dependency and generate {% data variables.product.prodname_dependabot_alerts %}. 您可以自定义接收 {% data variables.product.prodname_dependabot_alerts %} 的方式。 更多信息请参阅“[为易受攻击的依赖项配置通知](/github/managing-security-vulnerabilities/configuring-notifications-for-vulnerable-dependencies/#configuring-notifications-for-dependabot-alerts)”。

Before enabling the dependency graph and {% ifversion ghes > 2.21 %}{% data variables.product.prodname_dependabot %}{% else %}security{% endif %} alerts for vulnerable dependencies on {% data variables.product.product_location %}, you must connect {% data variables.product.product_location %} to {% data variables.product.prodname_dotcom_the_website %}. For more information, see "[Connecting your enterprise account to {% data variables.product.prodname_ghe_cloud %}](/admin/configuration/managing-connections-between-your-enterprise-accounts/connecting-your-enterprise-account-to-github-enterprise-cloud)."

## Enabling the dependency graph and {% data variables.product.prodname_dependabot_alerts %} on GitHub Enterprise Server

For {% data variables.product.product_location %} to generate {% data variables.product.prodname_dependabot_alerts %} whenever vulnerabilities are detected on your repositories:
-  You must connect {% data variables.product.product_location %} to {% data variables.product.prodname_dotcom_the_website %}. 更多信息请参阅“[将 {% data variables.product.prodname_ghe_server %} 连接到 {% data variables.product.prodname_ghe_cloud %}](/admin/guides/installation/connecting-github-enterprise-server-to-github-enterprise-cloud)”。
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
1. 单击 **Visit your instance（访问您的实例）**。

### Enabling the dependency graph via the administrative shell
{% else %}
### 启用依赖关系图
{% endif %}
{% data reusables.enterprise_site_admin_settings.sign-in %}
1. In the administrative shell, enable the dependency graph on {% data variables.product.product_location %}:
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

### 启用 {% data variables.product.prodname_dependabot_alerts %}

Before enabling {% data variables.product.prodname_dependabot_alerts %} for your instance, you need to enable the dependency graph. For more information, see above.

{% data reusables.enterprise-accounts.access-enterprise %}{% ifversion ghes < 3.1 %}{% data reusables.enterprise-accounts.settings-tab %}{% endif %}{% data reusables.enterprise-accounts.github-connect-tab %}
1. 在“Repositories can be scanned for vulnerabilities（可扫描仓库漏洞）”下，使用下拉菜单，并选择 **Enabled without notifications（启用但不发通知）**。 （可选）要启用包含通知的警报，请选择 **Enabled with notifications（启用并发通知）**。 ![用于启用扫描仓库有无漏洞的下拉菜单](/assets/images/enterprise/site-admin-settings/enable-vulnerability-scanning-in-repositories.png)
   {% note %}

   We recommend configuring {% data variables.product.prodname_dependabot_alerts %} without notifications for the first few days to avoid an overload of emails. 几天后，您可以开启通知，像往常一样接收 {% data variables.product.prodname_dependabot_alerts %}。

   {% endnote %}
## 查看 {% data variables.product.prodname_ghe_server %} 上易受攻击的依赖项

您可以查看 {% data variables.product.product_location %} 中的所有漏洞，然后手动同步 {% data variables.product.prodname_dotcom_the_website %} 中的漏洞数据，以更新列表。

{% data reusables.enterprise_site_admin_settings.access-settings %}
2. 在左侧边栏中，单击 **Vulnerabilities**。 ![站点管理员边栏中的 Vulnerabilities 选项卡](/assets/images/enterprise/business-accounts/vulnerabilities-tab.png)
3. 要同步漏洞数据，请单击 **Sync Vulnerabilities now**。 ![Sync vulnerabilities now 按钮](/assets/images/enterprise/site-admin-settings/sync-vulnerabilities-button.png)

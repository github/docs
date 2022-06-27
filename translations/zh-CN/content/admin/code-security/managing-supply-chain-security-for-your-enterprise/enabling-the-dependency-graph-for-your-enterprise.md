---
title: 为企业启用依赖关系图
intro: 您可以通过启用依赖项关系图来允许用户标识其项目的依赖项。
shortTitle: 启用依赖关系图
permissions: Site administrators can enable the dependency graph.
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Security
  - Dependency graph
---

## 关于依赖项图

{% data reusables.dependabot.about-the-dependency-graph %}更多信息请参阅“[关于依赖关系图](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph)”。

为企业启用依赖关系图后，可以启用 {% data variables.product.prodname_dependabot %} 以检测存储库中非安全依赖项{% ifversion ghes > 3.2 %}，并自动修复漏洞{% endif %}。 更多信息请参阅“[为企业启用 {% data variables.product.prodname_dependabot %}](/admin/configuration/configuring-github-connect/enabling-dependabot-for-your-enterprise)”。

{% ifversion ghes > 3.1 %}
您可以通过 {% data variables.enterprise.management_console %} 或管理 shell 启用依赖关系图。 我们建议您使用 {% data variables.enterprise.management_console %}，除非 {% data variables.product.product_location %} 使用集群。

## 通过 {% data variables.enterprise.management_console %} 启用依赖关系图

如果您的 {% data variables.product.product_location %} 使用群集，则无法使用 {% data variables.enterprise.management_console %} 启用依赖关系图，而必须改用管理 shell。 更多信息请参阅“[通过管理 shell 启用依赖关系图](#enabling-the-dependency-graph-via-the-administrative-shell)”。

{% data reusables.enterprise_site_admin_settings.sign-in %}
{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_management_console.advanced-security-tab %}
1. 在“Security（安全）”下，单击 **Dependency graph（依赖关系图）**。 ![启用或禁用依赖关系图的复选框](/assets/images/enterprise/3.2/management-console/enable-dependency-graph-checkbox.png)
{% data reusables.enterprise_management_console.save-settings %}
1. 单击 **Visit your instance（访问您的实例）**。

## 通过管理 shell 启用依赖关系图

{% endif %}{% ifversion ghes < 3.2 %}
## 启用依赖关系图
{% endif %}
{% data reusables.enterprise_site_admin_settings.sign-in %}
1. 在管理 shell 中，启用 {% data variables.product.product_location %} 上的依赖关系图：
    {% ifversion ghes > 3.1 %}```shell
    ghe-config app.dependency-graph.enabled true
    ```
    {% else %}```shell
    ghe-config app.github.dependency-graph-enabled true
  ghe-config app.github.vulnerability-alerting-and-settings-enabled true
    ```{% endif %}
   {% note %}

   **Note**: For more information about enabling access to the administrative shell via SSH, see "[Accessing the administrative shell (SSH)](/enterprise/admin/configuration/accessing-the-administrative-shell-ssh)."

   {% endnote %}
2. 应用配置。
    ```shell
    $ ghe-config-apply
    ```
3. 返回到 {% data variables.product.prodname_ghe_server %}。

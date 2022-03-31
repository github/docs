---
title: Enabling the dependency graph for your enterprise
intro: You can allow users to identify their projects' dependencies by enabling the dependency graph.
shortTitle: Enable dependency graph
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

{% data reusables.dependabot.about-the-dependency-graph %} For more information, see "[About the dependency graph](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph)"

After you enable the dependency graph for your enterprise, you can enable {% data variables.product.prodname_dependabot %} to detect vulnerable dependencies in your repository{% ifversion ghes > 3.2 %} and automatically fix the vulnerabilities{% endif %}. For more information, see "[Enabling {% data variables.product.prodname_dependabot %} for your enterprise](/admin/configuration/configuring-github-connect/enabling-dependabot-for-your-enterprise)."

{% ifversion ghes > 3.1 %}
您可以通过 {% data variables.enterprise.management_console %} 或管理 shell 启用依赖关系图。 We recommend using the {% data variables.enterprise.management_console %} unless {% data variables.product.product_location %} uses clustering.

## 通过 {% data variables.enterprise.management_console %} 启用依赖关系图

If your {% data variables.product.product_location %} uses clustering, you cannot enable the dependency graph with the {% data variables.enterprise.management_console %} and must use the administrative shell instead. For more information, see "[Enabling the dependency graph via the administrative shell](#enabling-the-dependency-graph-via-the-administrative-shell)."

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

   **Note**: For more information about enabling access to the administrative shell via SSH, see "[Accessing the administrative shell (SSH)](/enterprise/{{ currentVersion }}/admin/configuration/accessing-the-administrative-shell-ssh)."

   {% endnote %}
2. 应用配置。
    ```shell
    $ ghe-config-apply
    ```
3. 返回到 {% data variables.product.prodname_ghe_server %}。

---
title: 为企业启用 GitHub Advanced Security
shortTitle: 启用 GitHub Advanced Security
intro: '您可以配置 {% data variables.product.product_name %} 以包括 {% data variables.product.prodname_GH_advanced_security %}。 这将提供额外的功能，帮助用户发现和修复其代码中的安全问题。'
product: '{% data reusables.gated-features.ghas %}'
versions:
  ghes: '*'
type: how_to
topics:
  - Advanced Security
  - Code scanning
  - Enterprise
  - Secret scanning
  - Security
---

## 关于启用 {% data variables.product.prodname_GH_advanced_security %}

{% data reusables.advanced-security.ghas-helps-developers %}

{% ifversion ghes > 3.0 %}
为企业启用 {% data variables.product.prodname_GH_advanced_security %} 后，所有组织的仓库管理员都可以启用这些功能，除非您设置了限制访问的策略。 更多信息请参阅“[在企业中执行 {% data variables.product.prodname_advanced_security %} 的策略](/admin/policies/enforcing-policies-for-advanced-security-in-your-enterprise)”。
{% else %}
为企业启用 {% data variables.product.prodname_GH_advanced_security %} 后，所有组织的仓库管理员都可以启用这些功能。 {% ifversion ghes = 3.0 %}更多信息请参阅“[管理组织的安全性和分析设置](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)”或“[管理仓库的安全和分析设置](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository)”。{% endif %}
{% endif %}

## 启用 {% data variables.product.prodname_GH_advanced_security %} 的前提条件

1. Upgrade your license for {% data variables.product.product_name %} to include {% data variables.product.prodname_GH_advanced_security %}.{% ifversion ghes > 3.0 %} For information about licensing, see "[About billing for {% data variables.product.prodname_GH_advanced_security %}](/billing/managing-billing-for-github-advanced-security/about-billing-for-github-advanced-security)."{% endif %}
2. Download the new license file. For more information, see "[Downloading your license for {% data variables.product.prodname_enterprise %}](/billing/managing-your-license-for-github-enterprise/downloading-your-license-for-github-enterprise)."
3. Upload the new license file to {% data variables.product.product_location %}. For more information, see "[Uploading a new license to {% data variables.product.prodname_ghe_server %}](/billing/managing-your-license-for-github-enterprise/uploading-a-new-license-to-github-enterprise-server)."{% ifversion ghes > 2.22 %}
4. 审查您计划启用的功能的先决条件。

    - {% data variables.product.prodname_code_scanning_capc %}，请参阅“[为设备配置 {% data variables.product.prodname_code_scanning %}](/admin/advanced-security/configuring-code-scanning-for-your-appliance#prerequisites-for-code-scanning)”。
    - {% data variables.product.prodname_secret_scanning_caps %}，请参阅“[为设备配置 {% data variables.product.prodname_secret_scanning %}](/admin/advanced-security/configuring-secret-scanning-for-your-appliance#prerequisites-for-secret-scanning)”。{% endif %}
    - {% data variables.product.prodname_dependabot %}, see "[Enabling alerts for vulnerable dependencies on {% data variables.product.prodname_ghe_server %}](/admin/configuration/managing-connections-between-github-enterprise-server-and-github-enterprise-cloud/enabling-alerts-for-vulnerable-dependencies-on-github-enterprise-server)."

## 检查您的许可是否包含 {% data variables.product.prodname_GH_advanced_security %}

{% ifversion ghes > 3.0 %}
{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.license-tab %}
1. 如果您的许可包括 {% data variables.product.prodname_GH_advanced_security %}，则许可页面将包括显示当前使用情况详细信息的部分。 ![企业许可证的 {% data variables.product.prodname_GH_advanced_security %} 部分](/assets/images/help/billing/ghas-orgs-list-enterprise-ghes.png)
{% endif %}

{% ifversion ghes = 2.22 or ghes = 3.0 %}
{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
1. 如果您的许可包括 {% data variables.product.prodname_GH_advanced_security %}，则左侧边栏中有一个 **{% data variables.product.prodname_advanced_security %}** 条目。 ![高级安全侧边栏](/assets/images/enterprise/management-console/sidebar-advanced-security.png)

{% data reusables.enterprise_management_console.advanced-security-license %}
{% endif %}

## 启用和禁用 {% data variables.product.prodname_GH_advanced_security %} 功能

{% data reusables.enterprise_management_console.enable-disable-security-features %}

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_management_console.advanced-security-tab %}{% ifversion ghes > 2.22 %}
1. Under "{% ifversion ghes < 3.2 %}{% data variables.product.prodname_advanced_security %}{% else %}Security{% endif %}," select the features that you want to enable and deselect any features you want to disable. ![Checkbox to enable or disable {% data variables.product.prodname_advanced_security %} features](/assets/images/enterprise/management-console/enable-advanced-security-checkboxes.png)用于启用 Public Pages 的复选框{% else %}
1. 在“{% data variables.product.prodname_advanced_security %}”下，单击 **{% data variables.product.prodname_code_scanning_capc %}**。 ![Checkbox to enable or disable {% data variables.product.prodname_code_scanning %}](/assets/images/enterprise/management-console/enable-code-scanning-checkbox.png)用于启用 Public Pages 的复选框{% endif %}
{% data reusables.enterprise_management_console.save-settings %}

当 {% data variables.product.product_name %} 完成重启后，您可以设置新启用功能所需的任何额外资源。 更多信息请参阅“[为设备配置 {% data variables.product.prodname_code_scanning %}](/admin/advanced-security/configuring-code-scanning-for-your-appliance)”。

## Enabling or disabling {% data variables.product.prodname_GH_advanced_security %} features via the administrative shell (SSH)

您可以通过编程方式在 {% data variables.product.product_location %} 上启用或禁用功能。 有关 {% data variables.product.prodname_ghe_server %} 的管理 shell 和命令行实用程序的更多信息，请参阅“[访问管理 shell (SSH)](/admin/configuration/accessing-the-administrative-shell-ssh)”和“[命令行实用程序](/admin/configuration/command-line-utilities#ghe-config)”。

For example, you can enable any {% data variables.product.prodname_GH_advanced_security %} feature with your infrastructure-as-code tooling when you deploy an instance for staging or disaster recovery.

1. SSH 连接到 {% data variables.product.product_location %}。
1. Enable features for {% data variables.product.prodname_GH_advanced_security %}.

    - To enable {% data variables.product.prodname_code_scanning_capc %}, enter the following commands.
    ```shell
    ghe-config app.minio.enabled true
    ghe-config app.code-scanning.enabled true
    ```
    - To enable {% data variables.product.prodname_secret_scanning_caps %}, enter the following command.
    ```shell
    ghe-config app.secret-scanning.enabled true
    ```
    - To enable {% data variables.product.prodname_dependabot %}, enter the following command.
    ```shell
    {% ifversion ghes > 3.1 %}ghe-config app.dependency-graph.enabled true{% else %}ghe-config app.github.dependency-graph-enabled true{% endif %}
    ```
2. Optionally, disable features for {% data variables.product.prodname_GH_advanced_security %}.

    - To disable {% data variables.product.prodname_code_scanning %}, enter the following commands.
    ```shell
    ghe-config app.minio.enabled false
    ghe-config app.code-scanning.enabled false
    ```
    - To disable {% data variables.product.prodname_secret_scanning %}, enter the following command.
    ```shell
    ghe-config app.secret-scanning.enabled false
    ```
    - To disable {% data variables.product.prodname_dependabot %}, enter the following command.
    ```shell
    {% ifversion ghes > 3.1 %}ghe-config app.dependency-graph.enabled false{% else %}ghe-config app.github.dependency-graph-enabled false{% endif %}
    ```

3. 应用配置。
    ```shell
    ghe-config-apply
    ```

---
title: 为企业启用 GitHub Advanced Security
shortTitle: 启用 GitHub Advanced Security
intro: '您可以配置 {% data variables.product.product_name %} 以包括 {% data variables.product.prodname_GH_advanced_security %}。 这将提供额外的功能，帮助用户发现和修复其代码中的安全问题。'
product: '{% data reusables.gated-features.ghas %}'
versions:
  enterprise-server: '>=2.22'
type: how_to
topics:
  - Advanced Security
  - Code scanning
  - Enterprise
  - Secret scanning
  - Security
---

### 关于启用 {% data variables.product.prodname_GH_advanced_security %}

{% data reusables.advanced-security.ghas-helps-developers %}

{% if currentVersion ver_gt "enterprise-server@3.0" %}
为企业启用 {% data variables.product.prodname_GH_advanced_security %} 后，所有组织的仓库管理员都可以启用这些功能，除非您设置了限制访问的策略。 更多信息请参阅“[在企业中执行 {% data variables.product.prodname_advanced_security %} 的策略](/admin/policies/enforcing-policies-for-advanced-security-in-your-enterprise)”。
{% else %}
为企业启用 {% data variables.product.prodname_GH_advanced_security %} 后，所有组织的仓库管理员都可以启用这些功能。 {% if currentVersion == "enterprise-server@3.0" %}更多信息请参阅“[管理组织的安全性和分析设置](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)”或“[管理仓库的安全和分析设置](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository)”。{% endif %}
{% endif %}

### 启用 {% data variables.product.prodname_GH_advanced_security %} 的前提条件

1. 升级 {% data variables.product.product_name %} 许可以包括 {% data variables.product.prodname_GH_advanced_security %}。{% if currentVersion ver_gt "enterprise-server@3.0" %}有关许可的更多信息，请参阅“[关于 {% data variables.product.prodname_GH_advanced_security %} 的许可](/admin/advanced-security/about-licensing-for-github-advanced-security)”。{% endif %}
2. 将新许可上传到 {% data variables.product.product_location %}。 更多信息请参阅“[管理 GitHub Enterprise 许可](/admin/overview/managing-your-github-enterprise-license#uploading-a-new-license-to-github-enterprise-server)”。{% if currentVersion ver_gt "enterprise-server@2.22" %}
3. 审查您计划启用的功能的先决条件。

    - {% data variables.product.prodname_code_scanning_capc %}，请参阅“[为设备配置 {% data variables.product.prodname_code_scanning %}](/admin/advanced-security/configuring-code-scanning-for-your-appliance#prerequisites-for-code-scanning)”。
    - {% data variables.product.prodname_secret_scanning_caps %}，请参阅“[为设备配置 {% data variables.product.prodname_secret_scanning %}](/admin/advanced-security/configuring-secret-scanning-for-your-appliance#prerequisites-for-secret-scanning)”。{% endif %}

### 检查您的许可是否包含 {% data variables.product.prodname_GH_advanced_security %}

{% if currentVersion ver_gt "enterprise-server@3.0" %}
{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.license-tab %}
1. 如果您的许可包括 {% data variables.product.prodname_GH_advanced_security %}，则许可页面将包括显示当前使用情况详细信息的部分。 ![企业许可证的 {% data variables.product.prodname_GH_advanced_security %} 部分](/assets/images/help/billing/ghas-orgs-list-enterprise-ghes.png)
{% endif %}

{% if currentVersion == "enterprise-server@2.22" or currentVersion == "enterprise-server@3.0" %}
{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
1. 如果您的许可包括 {% data variables.product.prodname_GH_advanced_security %}，则左侧边栏中有一个 **{% data variables.product.prodname_advanced_security %}** 条目。 ![高级安全侧边栏](/assets/images/enterprise/management-console/sidebar-advanced-security.png)

{% data reusables.enterprise_management_console.advanced-security-license %}
{% endif %}

### 启用和禁用 {% data variables.product.prodname_GH_advanced_security %} 功能

{% data reusables.enterprise_management_console.enable-disable-security-features %}

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_management_console.advanced-security-tab %}{% if currentVersion ver_gt "enterprise-server@2.22" %}
1. 在 "{% data variables.product.prodname_advanced_security %}" 下，选择要启用的功能，取消选择要禁用的任何功能。 ![Checkbox to enable or disable {% data variables.product.prodname_advanced_security %} features](/assets/images/enterprise/management-console/enable-advanced-security-checkboxes.png)用于启用 Public Pages 的复选框{% else %}
1. 在“{% data variables.product.prodname_advanced_security %}”下，单击 **{% data variables.product.prodname_code_scanning_capc %}**。 ![Checkbox to enable or disable {% data variables.product.prodname_code_scanning %}](/assets/images/enterprise/management-console/enable-code-scanning-checkbox.png)用于启用 Public Pages 的复选框{% endif %}
{% data reusables.enterprise_management_console.save-settings %}

当 {% data variables.product.product_name %} 完成重启后，您可以设置新启用功能所需的任何额外资源。 更多信息请参阅“[为设备配置 {% data variables.product.prodname_code_scanning %}](/admin/advanced-security/configuring-code-scanning-for-your-appliance)”。

### 通过管理 shell (SSH) 启用或禁用 {% data variables.product.prodname_GH_advanced_security %}

您可以通过编程方式在 {% data variables.product.product_location %} 上启用或禁用功能。 有关 {% data variables.product.prodname_ghe_server %} 的管理 shell 和命令行实用程序的更多信息，请参阅“[访问管理 shell (SSH)](/admin/configuration/accessing-the-administrative-shell-ssh)”和“[命令行实用程序](/admin/configuration/command-line-utilities#ghe-config)”。

例如，当您部署用于暂存或灾难恢复的实例时，可以使用基础架构即代码工具启用 {% data variables.product.prodname_code_scanning %}。

1. SSH 连接到 {% data variables.product.product_location %}。
1. 启用 {% data variables.product.prodname_code_scanning %}。
    ```shell
    ghe-config app.minio.enabled true
    ghe-config app.code-scanning.enabled true
    ```
2. （可选）禁用 {% data variables.product.prodname_code_scanning %}。
    ```shell
    ghe-config app.minio.enabled false
    ghe-config app.code-scanning.enabled false
    ```
3. 应用配置。
    ```shell
  ghe-config-apply
  ```

{% if currentVersion ver_gt "enterprise-server@2.22" %}要以同样的方式启用和禁用 {% data variables.product.prodname_secret_scanning %}，请将 `ghe-config app.secret-scanning.enabled` 设置为 true 或 false 并应用配置。{% endif %}

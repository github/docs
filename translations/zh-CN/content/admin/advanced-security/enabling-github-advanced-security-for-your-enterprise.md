---
title: Enabling GitHub Advanced Security for your enterprise
shortTitle: Enabling GitHub Advanced Security
intro: 'You can configure {% data variables.product.product_name %} to include {% data variables.product.prodname_GH_advanced_security %}. This provides extra features that help users find and fix security problems in their code.'
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

### About enabling {% data variables.product.prodname_GH_advanced_security %}

{% data reusables.advanced-security.ghas-helps-developers %}

{% if currentVersion ver_gt "enterprise-server@3.0" %}
When you enable {% data variables.product.prodname_GH_advanced_security %} for your enterprise, repository administrators in all organizations can enable the features unless you set up a policy to restrict access. 更多信息请参阅“[在企业中执行 {% data variables.product.prodname_advanced_security %} 的策略](/admin/policies/enforcing-policies-for-advanced-security-in-your-enterprise)”。
{% else %}
When you enable {% data variables.product.prodname_GH_advanced_security %} for your enterprise, repository administrators in all organizations can enable the features. {% if currentVersion == "enterprise-server@3.0" %}更多信息请参阅“[管理组织的安全性和分析设置](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)”或“[管理仓库的安全和分析设置](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository)”。{% endif %}
{% endif %}

### Prerequisites for enabling {% data variables.product.prodname_GH_advanced_security %}

1. Upgrade your license for {% data variables.product.product_name %} to include {% data variables.product.prodname_GH_advanced_security %}.{% if currentVersion ver_gt "enterprise-server@3.0" %} For information about licensing, see "[About licensing for {% data variables.product.prodname_GH_advanced_security %}](/admin/advanced-security/about-licensing-for-github-advanced-security)."{% endif %}
2. Upload the new license to {% data variables.product.product_location %}. For more information, see "[Managing your GitHub Enterprise license](/admin/overview/managing-your-github-enterprise-license#uploading-a-new-license-to-github-enterprise-server)."{% if currentVersion ver_gt "enterprise-server@2.22" %}
3. Review the prerequisites for the features you plan to enable.

    - {% data variables.product.prodname_code_scanning_capc %}, see "[Configuring {% data variables.product.prodname_code_scanning %} for your appliance](/admin/advanced-security/configuring-code-scanning-for-your-appliance#prerequisites-for-code-scanning)."
    - {% data variables.product.prodname_secret_scanning_caps %}, see "[Configuring {% data variables.product.prodname_secret_scanning %} for your appliance](/admin/advanced-security/configuring-secret-scanning-for-your-appliance#prerequisites-for-secret-scanning)."{% endif %}

### Checking whether your license includes {% data variables.product.prodname_GH_advanced_security %}

{% if currentVersion ver_gt "enterprise-server@3.0" %}
{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.license-tab %}
1. If your license includes {% data variables.product.prodname_GH_advanced_security %}, the license page includes a section showing details of current usage. ![{% data variables.product.prodname_GH_advanced_security %} section of Enterprise license](/assets/images/help/billing/ghas-orgs-list-enterprise-ghes.png)
{% endif %}

{% if currentVersion == "enterprise-server@2.22" or currentVersion == "enterprise-server@3.0" %}
{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
1. If your license includes {% data variables.product.prodname_GH_advanced_security %}, there is an **{% data variables.product.prodname_advanced_security %}** entry in the left sidebar. ![高级安全侧边栏](/assets/images/enterprise/management-console/sidebar-advanced-security.png)

{% data reusables.enterprise_management_console.advanced-security-license %}
{% endif %}

### Enabling and disabling {% data variables.product.prodname_GH_advanced_security %} features

{% data reusables.enterprise_management_console.enable-disable-security-features %}

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_management_console.advanced-security-tab %}{% if currentVersion ver_gt "enterprise-server@2.22" %}
1. Under "{% data variables.product.prodname_advanced_security %}," select the features that you want to enable and deselect any features you want to disable. ![Checkbox to enable or disable {% data variables.product.prodname_advanced_security %} features](/assets/images/enterprise/management-console/enable-advanced-security-checkboxes.png)用于启用 Public Pages 的复选框{% else %}
1. 在“{% data variables.product.prodname_advanced_security %}”下，单击 **{% data variables.product.prodname_code_scanning_capc %}**。 ![Checkbox to enable or disable {% data variables.product.prodname_code_scanning %}](/assets/images/enterprise/management-console/enable-code-scanning-checkbox.png)用于启用 Public Pages 的复选框{% endif %}
{% data reusables.enterprise_management_console.save-settings %}

When {% data variables.product.product_name %} has finished restarting, you're ready to set up any additional resources required for newly enabled features. 更多信息请参阅“[为设备配置 {% data variables.product.prodname_code_scanning %}](/admin/advanced-security/configuring-code-scanning-for-your-appliance)”。

### 通过管理 shell (SSH) 启用或禁用 {% data variables.product.prodname_GH_advanced_security %}

You can enable or disable features programmatically on {% data variables.product.product_location %}. 有关 {% data variables.product.prodname_ghe_server %} 的管理 shell 和命令行实用程序的更多信息，请参阅“[访问管理 shell (SSH)](/admin/configuration/accessing-the-administrative-shell-ssh)”和“[命令行实用程序](/admin/configuration/command-line-utilities#ghe-config)”。

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

{% if currentVersion ver_gt "enterprise-server@2.22" %}To enable and disable {% data variables.product.prodname_secret_scanning %} in the same way, set: `ghe-config app.secret-scanning.enabled` true or false and apply the configuration.{% endif %}

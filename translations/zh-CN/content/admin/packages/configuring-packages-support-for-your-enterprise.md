---
title: 为企业配置包支持
intro: '您可以通过启用或禁用每个包生态系统来为企业配置 {% data variables.product.prodname_registry %}。'
redirect_from:
  - /enterprise/admin/packages/configuring-packages-support-for-your-enterprise
versions:
  enterprise-server: '>=2.22'
---

{% data reusables.package_registry.packages-ghes-release-stage %}

您可以为实例启用或禁用每个包生态系统。 您可以将之前启用的生态系统设置为**只读**，以禁止上传新软件包，同时允许下载现有的软件包。

要将 {% data variables.product.prodname_registry %} 用于 Docker，您必须为实例启用子域隔离。 更多信息请参阅“[启用子域隔离](/enterprise/admin/configuration/enabling-subdomain-isolation)”。

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_site_admin_settings.packages-tab %}
1. 在“Ecosystem Toggles（生态系统切换）”下，为每个包类型选择 **Enabled（启用）**、**Read-Only（只读）**或 **Disabled（禁用）**。 ![生态系统切换](/assets/images/enterprise/site-admin-settings/ecosystem-toggles.png)
{% data reusables.enterprise_management_console.save-settings %}

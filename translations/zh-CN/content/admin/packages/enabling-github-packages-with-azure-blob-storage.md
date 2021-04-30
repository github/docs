---
title: 使用 Azure Blob 存储启用 GitHub Packages
intro: '以 Azure Blob 存储作为外部存储设置 {% data variables.product.prodname_registry %} 。'
versions:
  enterprise-server: '>=3.0'
topics:
  - 企业
---

{% warning %}

**警告：**
- 为存储桶设置所需的限制性访问策略至关重要，因为 {% data variables.product.company_short %} 不会将特定对象权限或其他访问控制列表 (ACL) 应用于存储桶配置。 例如，如果将存储桶设为公共，则在公共互联网上可以访问存储桶中的数据。
- 我们建议对 {% data variables.product.prodname_registry %} 使用专用存储桶，与用于 {% data variables.product.prodname_actions %} 存储的存储桶分开。
- 请确保配置将来要使用的存储桶。 在开始使用 {% data variables.product.prodname_registry %} 后，我们不建议更改存储系统。

{% endwarning %}

### 基本要求

在 {% data variables.product.product_location_enterprise %} 上启用和配置 {% data variables.product.prodname_registry %} 之前，您必须准备 Azure Blob 桶。 要准备 Azure Blob 存储桶，我们建议您在官方 [Azure Blob 存储文档站点](https://docs.microsoft.com/en-us/azure/storage/blobs/)查阅官方 Azure Blob 存储文档。

### 使用 Azure Blob 存储启用 {% data variables.product.prodname_registry %}

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_site_admin_settings.packages-tab %}
{% data reusables.package_registry.enable-enterprise-github-packages %}
1. 在“Packages Storage（包存储）”下，选择 **Azure Blob Storage（Azure Blob 存储）**并输入您的 Azure 容器名称，用于您的包存储桶和连接字符串。 ![Azure Blob 存储容器名称和连接字符串框](/assets/images/help/package-registry/azure-blob-storage-settings.png)

{% data reusables.enterprise_management_console.save-settings %}

### 后续步骤

{% data reusables.package_registry.next-steps-for-packages-enterprise-setup %}

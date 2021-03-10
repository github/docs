---
title: Enabling GitHub Packages with Azure Blob Storage
intro: 'Set up {% data variables.product.prodname_registry %} with Azure Blob Storage as your external storage.'
versions:
  enterprise-server: '>=3.0'
---

{% warning %}

**警告：**
- It is critical that you set the restrictive access policies you need for your storage bucket, because {% data variables.product.company_short %} does not apply specific object permissions or additional access control lists (ACLs) to your storage bucket configuration. 例如，如果将存储桶设为公共，则在公共互联网上可以访问存储桶中的数据。
- 我们建议对 {% data variables.product.prodname_registry %} 使用专用存储桶，与用于 {% data variables.product.prodname_actions %} 存储的存储桶分开。
- 请确保配置将来要使用的存储桶。 在开始使用 {% data variables.product.prodname_registry %} 后，我们不建议更改存储系统。

{% endwarning %}

### 基本要求

Before you can enable and configure {% data variables.product.prodname_registry %} on {% data variables.product.product_location_enterprise %}, you need to prepare your Azure Blob storage bucket. To prepare your Azure Blob storage bucket, we recommend consulting the official Azure Blob storage docs at the official [Azure Blob Storage documentation site](https://docs.microsoft.com/en-us/azure/storage/blobs/).

### Enabling {% data variables.product.prodname_registry %} with Azure Blob Storage

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_site_admin_settings.packages-tab %}
{% data reusables.package_registry.enable-enterprise-github-packages %}
1. Under "Packages Storage", select **Azure Blob Storage** and enter your Azure container name for your packages storage bucket and connection string. ![Azure Blob storage container name and connection string boxes](/assets/images/help/package-registry/azure-blob-storage-settings.png)

{% data reusables.enterprise_management_console.save-settings %}

### 后续步骤

{% data reusables.package_registry.next-steps-for-packages-enterprise-setup %}

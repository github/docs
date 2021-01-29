---
title: Enabling GitHub Packages with Azure Blob Storage
intro: 'Set up {% data variables.product.prodname_registry %} with Azure Blob Storage as your external storage.'
versions:
  enterprise-server: '>=3.0'
---

{% warning %}

**警告:**
- It is critical that you set the restrictive access policies you need for your storage bucket, because {% data variables.product.company_short %} does not apply specific object permissions or additional access control lists (ACLs) to your storage bucket configuration. For example, if you make your bucket public, data in the bucket will be accessible on the public internet.
- We recommend using a dedicated bucket for {% data variables.product.prodname_registry %}, separate from the bucket you use for {% data variables.product.prodname_actions %} storage.
- Make sure to configure the bucket you'll want to use in the future. {% data variables.product.prodname_registry %} の使用開始後にストレージを変更することはお勧めしません。

{% endwarning %}

### 必要な環境

Before you can enable and configure {% data variables.product.prodname_registry %} on {% data variables.product.product_location_enterprise %}, you need to prepare your Azure Blob storage bucket. To prepare your Azure Blob storage bucket, we recommend consulting the official Azure Blob storage docs at the official [Azure Blob Storage documentation site](https://docs.microsoft.com/en-us/azure/storage/blobs/).

### Enabling {% data variables.product.prodname_registry %} with Azure Blob Storage

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_site_admin_settings.packages-tab %}
{% data reusables.package_registry.enable-enterprise-github-packages %}
1. Under "Packages Storage", select **Azure Blob Storage** and enter your Azure container name for your packages storage bucket and connection string. ![Azure Blob storage container name and connection string boxes](/assets/images/help/package-registry/azure-blob-storage-settings.png)

{% data reusables.enterprise_management_console.save-settings %}

### 次のステップ

{% data reusables.package_registry.next-steps-for-packages-enterprise-setup %}

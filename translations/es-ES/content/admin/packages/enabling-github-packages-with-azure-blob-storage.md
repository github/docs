---
title: Enabling GitHub Packages with Azure Blob Storage
intro: 'Set up {% data variables.product.prodname_registry %} with Azure Blob Storage as your external storage.'
versions:
  enterprise-server: '>=3.0'
---

{% warning %}

**Advertencias:**
- It is critical that you set the restrictive access policies you need for your storage bucket, because {% data variables.product.company_short %} does not apply specific object permissions or additional access control lists (ACLs) to your storage bucket configuration. Por ejemplo, si haces a tu bucket público, el público general en la internet podrá acceder a ellos.
- Te recomendamos utilizar un bucket dedicado para {% data variables.product.prodname_registry %}, separado de aquél que utilices para almacenar {% data variables.product.prodname_actions %}.
- Asegúrate de configurar el bucket que quieres utilizar en el futuro. No te recomendamos cambiar tu almacenamiento después de que comienzas a utilizar {% data variables.product.prodname_registry %}.

{% endwarning %}

### Prerrequisitos

Before you can enable and configure {% data variables.product.prodname_registry %} on {% data variables.product.product_location_enterprise %}, you need to prepare your Azure Blob storage bucket. To prepare your Azure Blob storage bucket, we recommend consulting the official Azure Blob storage docs at the official [Azure Blob Storage documentation site](https://docs.microsoft.com/en-us/azure/storage/blobs/).

### Enabling {% data variables.product.prodname_registry %} with Azure Blob Storage

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_site_admin_settings.packages-tab %}
{% data reusables.package_registry.enable-enterprise-github-packages %}
1. Under "Packages Storage", select **Azure Blob Storage** and enter your Azure container name for your packages storage bucket and connection string. ![Azure Blob storage container name and connection string boxes](/assets/images/help/package-registry/azure-blob-storage-settings.png)

{% data reusables.enterprise_management_console.save-settings %}

### Pasos siguientes

{% data reusables.package_registry.next-steps-for-packages-enterprise-setup %}

---
title: Enabling GitHub Packages with Azure Blob Storage
intro: 'Set up {% data variables.product.prodname_registry %} with Azure Blob Storage as your external storage.'
versions:
  ghes: '*'
type: tutorial
topics:
  - Enterprise
  - Packages
  - Storage
shortTitle: Enable Packages with Azure
---

{% warning %}

**Warnings:**
- It is critical that you set the restrictive access policies you need for your storage bucket, because {% data variables.product.company_short %} does not apply specific object permissions or additional access control lists (ACLs) to your storage bucket configuration. For example, if you make your bucket public, data in the bucket will be accessible on the public internet. If restrictions by IP address have been set up, please include IP addresses for {% data variables.location.product_location_enterprise %} and the end users who will be using the {% data variables.location.product_location_enterprise %}.
- We recommend using a dedicated bucket for {% data variables.product.prodname_registry %}, separate from the bucket you use for {% data variables.product.prodname_actions %} storage.
- Make sure to configure the bucket you'll want to use in the future. We do not recommend changing your storage after you start using {% data variables.product.prodname_registry %}.

{% endwarning %}

## Prerequisites

Before you can enable and configure {% data variables.product.prodname_registry %} on {% data variables.location.product_location_enterprise %}, you need to prepare your Azure Blob storage bucket. To prepare your Azure Blob storage bucket, we recommend consulting the official Azure Blob storage docs at the official [Azure Blob Storage documentation site](https://docs.microsoft.com/en-us/azure/storage/blobs/).

## Enabling {% data variables.product.prodname_registry %} with Azure Blob Storage

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_site_admin_settings.packages-tab %}
{% data reusables.package_registry.enable-enterprise-github-packages %}
1. Under "Packages Storage", select **Azure Blob Storage** and enter your Azure container name for your packages storage bucket and connection string.

   You must create a storage container prior to setting the container name and connection string.

   {% note %}

   **Note:** You can find your Azure Connection String by navigating to the Access Key menu in your Azure storage account.

   Usage of a SAS Token or SAS URL as connection string is not currently supported.

   {% endnote %}

{% data reusables.enterprise_management_console.save-settings %}

## Next steps

{% data reusables.package_registry.next-steps-for-packages-enterprise-setup %}

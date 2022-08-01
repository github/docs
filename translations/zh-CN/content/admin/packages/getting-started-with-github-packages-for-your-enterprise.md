---
title: Getting started with GitHub Packages for your enterprise
shortTitle: Getting started with GitHub Packages
intro: 'You can start using {% data variables.product.prodname_registry %} on {% data variables.product.product_location %} by enabling the feature, configuring third-party storage, configuring the ecosystems you want to support, and updating your TLS certificate.'
redirect_from:
  - /enterprise/admin/packages/enabling-github-packages-for-your-enterprise
  - /admin/packages/enabling-github-packages-for-your-enterprise
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Packages
---


{% data reusables.package_registry.packages-cluster-support %}

## Step 1: Check whether {% data variables.product.prodname_registry %} is available for your enterprise

{% data variables.product.prodname_registry %} is available in {% data variables.product.prodname_ghe_server %} 3.0 or higher. If you're using an earlier version of {% data variables.product.prodname_ghe_server %}, you'll have to upgrade to use {% data variables.product.prodname_registry %}. For more information about upgrading your {% data variables.product.prodname_ghe_server %} instance, see "[About upgrades to new releases](/admin/overview/about-upgrades-to-new-releases)."
## Step 2: Enable {% data variables.product.prodname_registry %} and configure external storage

{% data variables.product.prodname_registry %} on {% data variables.product.prodname_ghe_server %} uses external blob storage to store your packages.

After enabling {% data variables.product.prodname_registry %} for {% data variables.product.product_location %}, you'll need to prepare your third-party storage bucket. The amount of storage required depends on your usage of {% data variables.product.prodname_registry %}, and the setup guidelines can vary by storage provider.

Supported external storage providers
- Amazon Web Services (AWS) S3 {% ifversion ghes %}
- Azure Blob Storage {% endif %}
- MinIO

To enable {% data variables.product.prodname_registry %} and configure third-party storage, see:
  - "[Enabling GitHub Packages with AWS](/admin/packages/enabling-github-packages-with-aws)"{% ifversion ghes %}
  - "[Enabling GitHub Packages with Azure Blob Storage](/admin/packages/enabling-github-packages-with-azure-blob-storage)"{% endif %}
  - "[Enabling GitHub Packages with MinIO](/admin/packages/enabling-github-packages-with-minio)"

## Step 3: Specify the package ecosystems to support on your instance

Choose which package ecosystems you'd like to enable, disable, or set to read-only on {% data variables.product.product_location %}. Available options are {% ifversion ghes > 3.4 %}{% data variables.product.prodname_container_registry %}, {% endif %}Docker, RubyGems, npm, Apache Maven, Gradle, or NuGet.  For more information, see "[Configuring package ecosystem support for your enterprise](/enterprise/admin/packages/configuring-package-ecosystem-support-for-your-enterprise)."

## Step 4: Ensure you have a TLS certificate for your package host URL, if needed

If subdomain isolation is enabled for {% data variables.product.product_location %}, you will need to create and upload a TLS certificate that allows the package host URL for each ecosystem you want to use, such as `{% data reusables.package_registry.container-registry-hostname %}`. Make sure each package host URL includes `https://`.

  You can create the certificate manually, or you can use _Let's Encrypt_. If you already use _Let's Encrypt_, you must request a new TLS certificate after enabling {% data variables.product.prodname_registry %}. For more information about package host URLs, see "[Enabling subdomain isolation](/enterprise/admin/configuration/enabling-subdomain-isolation)." For more information about uploading TLS certificates to {% data variables.product.product_name %}, see "[Configuring TLS](/enterprise/admin/configuration/configuring-tls)."

## Step 5: Check for and rename reserved names

If you want to use the Docker ecosystem with subdomain isolation disabled, you **must** first rename any user or organization named `v2` on {% data variables.product.product_location %}, prior to enabling Docker ecosystem support in the {% data variables.enterprise.management_console %}. Docker uses a `v2` account name to manage path conflicts with the Docker API, and once Docker registry support is enabled, you won't be able to use this name anymore.

You can view a full list of logins reserved for internal use by navigating to the "Reserved logins" page in the Site admin dashboard. For more information, see "[Reserved logins](/admin/configuration/configuring-your-enterprise/site-admin-dashboard#reserved-logins)."

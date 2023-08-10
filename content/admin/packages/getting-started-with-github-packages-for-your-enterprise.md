---
title: Getting started with GitHub Packages for your enterprise
shortTitle: Getting started with GitHub Packages
intro: 'You can start using {% data variables.product.prodname_registry %} on {% data variables.location.product_location %} by enabling the feature, configuring third-party storage, configuring the ecosystems you want to support, and updating your TLS certificate.'
permissions: 'Site administrators can enable and configure {% data variables.product.prodname_registry %}.'
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

{% data variables.product.prodname_registry %} is available in {% data variables.product.prodname_ghe_server %} 3.0 or higher. If you're using an earlier version of {% data variables.product.prodname_ghe_server %}, you'll have to upgrade to use {% data variables.product.prodname_registry %}. For more information about upgrading your {% data variables.product.prodname_ghe_server %} instance, see "[AUTOTITLE](/admin/overview/about-upgrades-to-new-releases)."

## Step 2: Review hardware requirements

If you plan to enable {% data variables.product.prodname_container_registry %} for the users of your instance, at least 10% more CPU resources are required.

We recommend reviewing the levels of activity for users and automations on the instance to ensure that you have provisioned adequate CPU for your users. For more information, see "[AUTOTITLE](/admin/enterprise-management/monitoring-your-appliance)."

For more information about minimum hardware requirements for {% data variables.location.product_location %}, see the hardware considerations for your instance's platform.

- [AWS](/admin/installation/setting-up-a-github-enterprise-server-instance/installing-github-enterprise-server-on-aws#hardware-considerations)
- [Azure](/admin/installation/setting-up-a-github-enterprise-server-instance/installing-github-enterprise-server-on-azure#hardware-considerations)
- [Google Cloud Platform](/admin/installation/setting-up-a-github-enterprise-server-instance/installing-github-enterprise-server-on-google-cloud-platform#hardware-considerations)
- [Hyper-V](/admin/installation/setting-up-a-github-enterprise-server-instance/installing-github-enterprise-server-on-hyper-v#hardware-considerations)
- [OpenStack KVM](/admin/installation/setting-up-a-github-enterprise-server-instance/installing-github-enterprise-server-on-openstack-kvm#hardware-considerations)
- [VMware](/admin/installation/setting-up-a-github-enterprise-server-instance/installing-github-enterprise-server-on-vmware#hardware-considerations)

For more information about adjusting resources for an existing instance, see "[AUTOTITLE](/admin/enterprise-management/updating-the-virtual-machine-and-physical-resources/increasing-cpu-or-memory-resources)."

## Step 3: Enable {% data variables.product.prodname_registry %} and configure external storage

{% data variables.product.prodname_registry %} on {% data variables.product.prodname_ghe_server %} uses external blob storage to store your packages.

After enabling {% data variables.product.prodname_registry %} for {% data variables.location.product_location %}, you'll need to prepare your third-party storage bucket. The amount of storage required depends on your usage of {% data variables.product.prodname_registry %}, and the setup guidelines can vary by storage provider.

Supported external storage providers
- Amazon Web Services (AWS) S3 {% ifversion ghes %}
- Azure Blob Storage {% endif %}
- MinIO

To enable {% data variables.product.prodname_registry %} and configure third-party storage, see:
- "[AUTOTITLE](/admin/packages/enabling-github-packages-with-aws)"{% ifversion ghes %}
- "[AUTOTITLE](/admin/packages/enabling-github-packages-with-azure-blob-storage)"{% endif %}
- "[AUTOTITLE](/admin/packages/enabling-github-packages-with-minio)"

## Step 4: Specify the package ecosystems to support on your instance

Choose which package ecosystems you'd like to enable, disable, or set to read-only on {% data variables.location.product_location %}. {% data reusables.package_registry.packages-ghes-supported-registries %} For more information, see "[AUTOTITLE](/admin/packages/configuring-package-ecosystem-support-for-your-enterprise)."

## Step 5: Ensure you have a TLS certificate for your package host URL, if needed

If subdomain isolation is enabled for {% data variables.location.product_location %}, you will need to create and upload a TLS certificate that allows the package host URL for each ecosystem you want to use, such as `{% data reusables.package_registry.container-registry-hostname %}`. Make sure each package host URL includes `https://`.

  You can create the certificate manually, or you can use _Let's Encrypt_. If you already use _Let's Encrypt_, you must request a new TLS certificate after enabling {% data variables.product.prodname_registry %}. For more information about package host URLs, see "[AUTOTITLE](/admin/configuration/configuring-network-settings/enabling-subdomain-isolation)." For more information about uploading TLS certificates to {% data variables.product.product_name %}, see "[AUTOTITLE](/admin/configuration/configuring-network-settings/configuring-tls)."

## Step 6: Check for and rename reserved names

If you want to use the Docker ecosystem with subdomain isolation disabled, you **must** first rename any user or organization named `v2` on {% data variables.location.product_location %}, prior to enabling Docker ecosystem support in the {% data variables.enterprise.management_console %}. Docker uses a `v2` account name to manage path conflicts with the Docker API, and once Docker registry support is enabled, you won't be able to use this name anymore.

You can view a full list of logins reserved for internal use by navigating to the "Reserved logins" page in the Site admin dashboard. For more information, see "[AUTOTITLE](/admin/configuration/configuring-your-enterprise/site-admin-dashboard#reserved-logins)."

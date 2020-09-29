---
title: Enabling GitHub Packages for your enterprise
intro: 'You can start using {% data variables.product.prodname_registry %} on your instance by enabling the feature, configuring third-party storage, configuring the ecosystems you want to support, and updating your TLS certificate.'
redirect_from:
  - /enterprise/admin/packages/enabling-github-packages-for-your-enterprise
  - /enterprise/admin/packages/enabling-github-packages-for-your-enterprise
  - /enterprise/admin/packages/enabling-github-packages-for-your-enterprise
  - /enterprise/admin/packages/enabling-github-packages-for-your-enterprise
  - /enterprise/admin/packages/enabling-github-packages-for-your-enterprise
versions:
  enterprise-server: '>=2.22'
---

{% data reusables.package_registry.packages-ghes-release-stage %}

1. After you've been invited to join the beta, to enable {% data variables.product.prodname_registry %} for your instance, follow the instructions from your account representative.
1. Configure third-party storage for your enterprise's packages. For more information, see "[Configuring third-party storage for packages](/enterprise/admin/packages/configuring-third-party-storage-for-packages)."
1. Enable or disable each package ecosystem for your enterprise. For more information, see "[Configuring packages support for your enterprise](/enterprise/admin/packages/configuring-packages-support-for-your-enterprise)."
1. If subdomain isolation is enabled for your instance, which is required to use {% data variables.product.prodname_registry %} with Docker, create and upload a TLS certificate that allows the package host URL for each ecosystem you want to use, such as `npm.HOSTNAME`. Make sure each package host URL includes `https://`.

    You can create the certificate manually or using Let's Encrypt. If you already use Let's Encrypt, you must request a new TLS certificate after enabling {% data variables.product.prodname_registry %}. For more information about package host URLs, see "[Enabling subdomain isolation](/enterprise/admin/configuration/enabling-subdomain-isolation)." For more information about uploading TLS certificates to {% data variables.product.product_name %}, see "[Configuring TLS](/enterprise/admin/configuration/configuring-tls)."

---
title: Configuring package ecosystem support for your enterprise
intro: 'You can configure {% data variables.product.prodname_registry %} for your enterprise by globally enabling or disabling individual package ecosystems on your enterprise, including {% ifversion ghes %}{% data variables.product.prodname_container_registry %}, {% endif %}Docker, and npm. Learn about other configuration requirements to support specific package ecosystems.'
permissions: 'Site administrators can enable {% data variables.product.prodname_registry %} and configure enterprise settings.'
redirect_from:
  - /enterprise/admin/packages/configuring-packages-support-for-your-enterprise
  - /admin/packages/configuring-packages-support-for-your-enterprise
  - /admin/packages/configuring-package-ecosystem-support-for-your-enterprise
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Packages
shortTitle: Configure package ecosystems
---

{% data reusables.package_registry.packages-ghes-release-stage %}

## About package ecosystem support

You can choose which package ecosystems you'd like to enable, disable, or set to read-only on {% data variables.location.product_location %}. {% data reusables.package_registry.packages-ghes-supported-registries %}

## Prerequisites

Before you can configure individual package ecosystems, {% data variables.product.prodname_registry %} must be enabled and configured for your instance. For more information, see "[AUTOTITLE](/admin/packages/getting-started-with-github-packages-for-your-enterprise)."

## Enabling or disabling individual package ecosystems

To prevent new packages from being uploaded, you can set an ecosystem you previously enabled to **Read-Only**, while still allowing existing packages to be downloaded.

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_site_admin_settings.packages-tab %}
1. Under "Ecosystem Toggles", for each package type, select **Enabled**, **Read-Only**, or **Disabled**.
   {%- ifversion ghes %}{% note -%}
   **Note**: Subdomain isolation must be enabled to toggle the {% data variables.product.prodname_container_registry %} options.
   {%- endnote %}{%- endif %}
   ![Screenshot of the "Ecosystem toggles" section on the Settings page of the Management Console.](/assets/images/enterprise/site-admin-settings/ecosystem-toggles.png)

{% data reusables.enterprise_management_console.save-settings %}

## Connecting to the official npm registry

If you've enabled npm packages on your enterprise and want to allow access to the official npm registry as well as the {% data variables.product.prodname_registry %} npm registry, then you must perform some additional configuration.

{% data variables.product.prodname_registry %} uses a transparent proxy for network traffic that connects to the official npm registry at `registry.npmjs.com`. The proxy is enabled by default and cannot be disabled.

To allow network connections to the npm registry, you will need to configure network ACLs that allow {% data variables.product.prodname_ghe_server %} to send HTTPS traffic to `registry.npmjs.com`  over port 443/TCP.

Note that connections to `registry.npmjs.com` traverse through the Cloudflare network, and subsequently do not connect to a single static IP address; instead, a connection is made to an IP address within the CIDR ranges listed here: https://www.cloudflare.com/ips/.

If you wish to enable npm upstream sources, select `Enabled` for `npm upstreaming`.

## Next steps

As a next step, we recommend you check if you need to update or upload a TLS certificate for your packages host URL. For more information, see "[AUTOTITLE](/admin/packages/getting-started-with-github-packages-for-your-enterprise)."

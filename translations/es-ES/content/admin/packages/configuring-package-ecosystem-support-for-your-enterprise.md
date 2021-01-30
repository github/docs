---
title: Configuring package ecosystem support for your enterprise
intro: 'You can configure {% data variables.product.prodname_registry %} for your enterprise by globally enabling or disabling individual package ecosystems on your enterprise, including Docker, RubyGems, npm, Apache Maven, Gradle, or NuGet. Learn about other configuration requirements to support specific package ecosystems.'
redirect_from:
  - /enterprise/admin/packages/configuring-packages-support-for-your-enterprise
  - /admin/packages/configuring-packages-support-for-your-enterprise
versions:
  enterprise-server: '>=2.22'
---

{% data reusables.package_registry.packages-ghes-release-stage %}

### Enabling or disabling individual package ecosystems

To prevent new packages from being uploaded, you can set an ecosystem you previously enabled to **Read-Only**, while still allowing existing packages to be downloaded.

{% if currentVersion == "enterprise-server@2.22" %}
To use
{% data variables.product.prodname_registry %} with Docker, you must have subdomain isolation enabled for your instance. Para obtener más información, consulta la sección "[Enabling subdomain isolation](/enterprise/admin/configuration/enabling-subdomain-isolation)".
{% endif %}

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_site_admin_settings.packages-tab %}
1. Debajo de "Alternación de ecosistema", para cada tipo de paquete, selecciona **Enabled**, **Read-Only**, o **Disabled**. ![Alternación de ecosistemas](/assets/images/enterprise/site-admin-settings/ecosystem-toggles.png)
{% data reusables.enterprise_management_console.save-settings %}

{% if currentVersion == "enterprise-server@3.0" or currentVersion ver_gt "enterprise-server@3.0" %}
### Connecting to the official NPM registry

If you've enabled npm packages on your enterprise and want to allow access to the official NPM registry as well as the {% data variables.product.prodname_registry %} npm registry, then you must perform some additional configuration.

{% data variables.product.prodname_registry %} uses a transparent proxy for network traffic that connects to the official NPM registry at `registry.npmjs.com`. The proxy is enabled by default and cannot be disabled.

To allow network connections to the NPM registry, you will need to configure network ACLs that allow {% data variables.product.prodname_ghe_server %} to send HTTPS traffic to `registry.npmjs.com`  over port 443:

| Source                                             | Destination          | Port (Puerto) | Type  |
| -------------------------------------------------- | -------------------- | ------------- | ----- |
| {% data variables.product.prodname_ghe_server %} | `registry.npmjs.com` | TCP/443       | HTTPS |

Note that connections to `registry.npmjs.com` traverse through the Cloudflare network, and subsequently do not connect to a single static IP address; instead, a connection is made to an IP address within the CIDR ranges listed here: https://www.cloudflare.com/ips/.

{% endif %}

### Pasos siguientes

As a next step, we recommend you check if you need to update or upload a TLS certificate for your packages host URL. For more information, see "[Getting started with GitHub Packages for your enterprise](/admin/packages/getting-started-with-github-packages-for-your-enterprise)."

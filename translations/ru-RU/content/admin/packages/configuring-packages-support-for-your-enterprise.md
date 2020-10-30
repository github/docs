---
title: Configuring packages support for your enterprise
intro: 'You can configure {% data variables.product.prodname_registry %} for your enterprise by enabling or disabling each package ecosystem.'
redirect_from:
  - /enterprise/admin/packages/configuring-packages-support-for-your-enterprise
  - /enterprise/admin/packages/configuring-packages-support-for-your-enterprise
  - /enterprise/admin/packages/configuring-packages-support-for-your-enterprise
  - /enterprise/admin/packages/configuring-packages-support-for-your-enterprise
versions:
  enterprise-server: '>=2.22'
---

{% data reusables.package_registry.packages-ghes-release-stage %}

You can enable or disable each package ecosystem for your instance. You can set an ecosystem you previously enabled to **Read-Only** to prevent new packages from being uploaded, while allowing existing packages to be downloaded.

To use {% data variables.product.prodname_registry %} with Docker, you must have subdomain isolation enabled for your instance. For more information, see "[Enabling subdomain isolation](/enterprise/admin/configuration/enabling-subdomain-isolation)."

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_site_admin_settings.packages-tab %}
1. Under "Ecosystem Toggles", for each package type, select **Enabled**, **Read-Only**, or **Disabled**. ![Ecosystem toggles](/assets/images/enterprise/site-admin-settings/ecosystem-toggles.png)
{% data reusables.enterprise_management_console.save-settings %}

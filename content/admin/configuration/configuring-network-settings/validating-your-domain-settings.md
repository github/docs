---
title: Validating your domain settings
intro: 'Ensure that your domain settings are properly configured before booting up {% data variables.location.product_location %} for the first time.'
redirect_from:
  - /enterprise/admin/installation/validating-your-domain-settings
  - /enterprise/admin/configuration/validating-your-domain-settings
  - /admin/configuration/validating-your-domain-settings
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Fundamentals
  - Infrastructure
  - Networking
shortTitle: Validate domain settings
---
{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_management_console.hostname-menu-item %}
1. To test your appliance's DNS and SSL settings, under "Hostname", click **Test domain settings**.
{% data reusables.enterprise_management_console.test-domain-settings-failure %}
{% data reusables.enterprise_management_console.save-settings %}

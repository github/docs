---
title: Ihre Domain-Einstellungen validieren
intro: 'Stellen Sie sicher, dass Ihre Domain-Einstellungen ordnungsgemäß konfiguriert sind, bevor Sie {% data variables.product.product_location %} erstmals starten.'
redirect_from:
  - /enterprise/admin/installation/validating-your-domain-settings
  - /enterprise/admin/configuration/validating-your-domain-settings
versions:
  enterprise-server: '*'
---

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_management_console.hostname-menu-item %}
4. Klicken Sie zum Testen der DNS- und SSL-Einstellungen Ihrer Appliance auf **Test domain settings** (Domain-Einstellungen testen). ![Schaltfläche zum Testen der Domain-Einstellungen](/assets/images/enterprise/management-console/test-domain-settings.png)
{% data reusables.enterprise_management_console.test-domain-settings-failure %}
{% data reusables.enterprise_management_console.save-settings %}

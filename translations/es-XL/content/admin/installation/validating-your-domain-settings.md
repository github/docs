---
title: Validar tus parámetros de dominio
intro: 'Asegúrate de que tus parámetros de dominio estén configurados adecuadamente antes de arrancar {% data variables.product.product_location_enterprise %} por primera vez.'
redirect_from:
  - /enterprise/admin/installation/validating-your-domain-settings
versions:
  enterprise-server: '*'
---

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_management_console.hostname-menu-item %}
4. Para probar los parámetros DNS y SSL de tu aparato, haz clic en **Test domain settings (Pruebar parámetros de dominio)**. ![Probar botón de configuración de dominio](/assets/images/enterprise/management-console/test-domain-settings.png)
{% data reusables.enterprise_management_console.test-domain-settings-failure %}
{% data reusables.enterprise_management_console.save-settings %}

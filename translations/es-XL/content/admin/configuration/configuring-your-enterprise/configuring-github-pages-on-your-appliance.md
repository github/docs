---
title: Configurar las Páginas de GitHub en su aparato
intro: 'Puedes habilitar o inhabilitar {% data variables.product.prodname_pages %} en tu instancia. También puedes elegir hacer que los sitios {% data variables.product.prodname_pages %} sean de acceso público.'
redirect_from:
  - /enterprise/admin/guides/installation/disabling-github-enterprise-pages/
  - /enterprise/admin/guides/installation/configuring-github-enterprise-pages/
  - /enterprise/admin/installation/configuring-github-pages-on-your-appliance
  - /enterprise/admin/configuration/configuring-github-pages-on-your-appliance
  - /admin/configuration/configuring-github-pages-on-your-appliance
versions:
  enterprise-server: '*'
---
### Making {% data variables.product.prodname_pages %} publicly accessible

El modo privado está habilitado en tu aparato, el público no puede acceder a los sitios {% data variables.product.prodname_pages %} alojados en {% data variables.product.product_location_enterprise %}.

{% warning %}

**Advertencia:** Si habilitas los sitios públicos {% data variables.product.prodname_pages %}, todos los sitios {% data variables.product.prodname_pages %} de cada repositorio de tu instancia serán de acceso público.

{% endwarning %}

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_management_console.pages-tab %}
4. Selecciona **Public Pages** (Páginas públicas). ![Casilla de verificación para habilitar páginas públicas](/assets/images/enterprise/management-console/public-pages-checkbox.png)
{% data reusables.enterprise_management_console.save-settings %}

### Inhabilitar {% data variables.product.prodname_pages %} en {% data variables.product.product_location_enterprise %}

Si el aislamiento de subdominio está inhabilitado para {% data variables.product.product_location_enterprise %}, también debes inhabilitar {% data variables.product.prodname_pages %} para protegerte a ti mismo contra posibles vulnerabilidades de seguridad. Para obtener más información, consulta "[Habilitar el aislamiento de subdominio](/enterprise/{{ currentVersion }}/admin/guides/installation/enabling-subdomain-isolation)."

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_management_console.pages-tab %}
4. Anula la selección de **Enable Pages** (Habilitar páginas). ![Casilla de verificación para inhabilitar {% data variables.product.prodname_pages %}](/assets/images/enterprise/management-console/pages-select-button.png)
{% data reusables.enterprise_management_console.save-settings %}

### Leer más

- "[Habilitar el modo privado](/enterprise/{{ currentVersion }}/admin/guides/installation/enabling-private-mode)"

---
title: Configurar GitHub Pages para tu empresa
intro: 'Puedes habilitar o inhabilitar {% data variables.product.prodname_pages %} para tu empresa{% ifversion ghes %} y elegir si quieres que los sitios sean accesibles al público en general{% endif %}.'
redirect_from:
  - /enterprise/admin/guides/installation/disabling-github-enterprise-pages
  - /enterprise/admin/guides/installation/configuring-github-enterprise-pages
  - /enterprise/admin/installation/configuring-github-pages-on-your-appliance
  - /enterprise/admin/configuration/configuring-github-pages-on-your-appliance
  - /admin/configuration/configuring-github-pages-on-your-appliance
  - /enterprise/admin/guides/installation/configuring-github-pages-for-your-enterprise
  - /admin/configuration/configuring-github-pages-for-your-enterprise
versions:
  ghes: '*'
  ghae: '*'
type: how_to
topics:
  - Enterprise
  - Pages
shortTitle: Configurar GitHub Pages
---

{% ifversion ghes %}

## Habilitar los sitios públicos para {% data variables.product.prodname_pages %}

Si se habilitó el modo privado en tu empresa, el público en general no podrá acceder a los sitios de {% data variables.product.prodname_pages %} que estén hospedados en tu empresa a menos de que habilites los sitios públicos.

{% warning %}

**Advertencia:** Si habilitas los sitios públicos para {% data variables.product.prodname_pages %}, cada sitio en cada repositorio de tu empresa será accesible para el público en general.

{% endwarning %}

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_management_console.pages-tab %}
4. Selecciona **Public Pages** (Páginas públicas). ![Casilla de verificación para habilitar páginas públicas](/assets/images/enterprise/management-console/public-pages-checkbox.png)
{% data reusables.enterprise_management_console.save-settings %}

## Inhabilitar {% data variables.product.prodname_pages %} para tu empresa

Si el aislamiento de subdominios está inhabilitado en tu empresa, también debes inhabilitar las {% data variables.product.prodname_pages %} para protegerte de vulnerabilidades de seguridad potenciales. Para obtener más información, consulta la sección "[Enabling subdomain isolation](/admin/configuration/enabling-subdomain-isolation)".

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_management_console.pages-tab %}
1. Anula la selección de **Enable Pages** (Habilitar páginas). ![Casilla de verificación para inhabilitar {% data variables.product.prodname_pages %}](/assets/images/enterprise/management-console/pages-select-button.png)
{% data reusables.enterprise_management_console.save-settings %}

{% endif %}

{% ifversion ghae %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.pages-tab %}
1. Debajo de "Políticas de las páginas", deselecciona **Habilitar {% data variables.product.prodname_pages %}**. ![Casilla de verificación para inhabilitar {% data variables.product.prodname_pages %}](/assets/images/enterprise/business-accounts/enable-github-pages-checkbox.png)
{% data reusables.enterprise-accounts.pages-policies-save %}

{% endif %}

{% ifversion ghes > 3.4 %}

## Configurar los encabezados de respuesta de {% data variables.product.prodname_pages %} para tu empresa

Puedes agregar o sobrescribir los encabezados de respuesta para los sitios de {% data variables.product.prodname_pages %} que hospede {% data variables.product.product_location %}.

{% warning %}

**Advertencia:** Asegúrate de que tus encabezados de respuesta se configuren adecuadamente antes de guardarlos. Las configuraciones inadecuadas podrían impactar negativamente la seguridad de {% data variables.product.product_location %}.

{% endwarning %}

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_management_console.pages-tab %}
1. Teclea los ajustes de los encabezados y luego haz clic en **Agregar encabezados**.
   - En el campo **Nombre de encabezado http**, teclea el nombre del encabezado. La longitud del nombre del encabezado debe tener menos de 128 caracteres.
   - En el campo de **Valor de encabezado http**, teclea el valor del encabezado. La longitud del valor del encabezado debe ser de menos de 300 caracteres. ![Los campos de nombre y valor del encabezado de respuesta de {% data variables.product.prodname_pages %} en la {% data variables.enterprise.management_console %}](/assets/images/enterprise/management-console/pages-override-header-section.png)
{% data reusables.enterprise_management_console.save-settings %}

{% endif %}

{% ifversion ghes %}
## Leer más

- "[Habilitar el modo privado](/admin/configuration/enabling-private-mode)"
{% endif %}

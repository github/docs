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

## Configuring {% data variables.product.prodname_pages %} response headers for your enterprise

You can add or override response headers for {% data variables.product.prodname_pages %} sites hosted by {% data variables.product.product_location %}.

{% warning %}

**Warning:** Ensure that your response headers are properly configured before saving. Improper configurations may negatively impact the security of {% data variables.product.product_location %}.

{% endwarning %}

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_management_console.pages-tab %}
1. Type the headers settings, then click **Add headers**.
   - In the **Http Header Name** field, type the header name. The length of header name should less than 128 characters.
   - In the **Http Header Value** field, type the header value. The length of header value should less than 300 characters. ![The {% data variables.product.prodname_pages %} response header name and value fields in the {% data variables.enterprise.management_console %}](/assets/images/enterprise/management-console/pages-override-header-section.png)
{% data reusables.enterprise_management_console.save-settings %}

{% endif %}

{% ifversion ghes %}
## Leer más

- "[Habilitar el modo privado](/admin/configuration/enabling-private-mode)"
{% endif %}

---
title: Configurar o GitHub Pages para a sua empresa
intro: 'Você pode habilitar ou desabilitar {% data variables.product.prodname_pages %} para a sua empresa{% ifversion ghes %} e escolher se deseja tornar os sites acessíveis ao público{% endif %}.'
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
shortTitle: Configurar o GitHub Pages
---

{% ifversion ghes %}

## Habilitar sites públicos para {% data variables.product.prodname_pages %}

Se o modo privado for habilitado na sua empresa, o público não poderá acessar sites de {% data variables.product.prodname_pages %} hospedados pela sua empresa, a menos que você habilite os sites públicos.

{% warning %}

**Aviso:** Se você habilitar sites públicos para {% data variables.product.prodname_pages %}, todos os sites em cada repositório da sua empresa serão acessíveis ao público.

{% endwarning %}

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_management_console.pages-tab %}
4. Selecione **Public Pages** (Pages público). ![Caixa de seleção para deixar o Pages acessível publicamente](/assets/images/enterprise/management-console/public-pages-checkbox.png)
{% data reusables.enterprise_management_console.save-settings %}

## Desabilitar {% data variables.product.prodname_pages %} para a sua empresa

Se o isolamento de subdomínio estiver desabilitado para sua empresa, você também deverá desabilitar {% data variables.product.prodname_pages %} para se proteger de possíveis vulnerabilidades de segurança. Para obter mais informações, consulte "[Habilitar o isolamento de subdomínio](/admin/configuration/enabling-subdomain-isolation)".

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_management_console.pages-tab %}
1. Desmarque a seleção na caixa **Enable Pages** (Habilitar Pages). ![Caixa de seleção para desabilitar o{% data variables.product.prodname_pages %}](/assets/images/enterprise/management-console/pages-select-button.png)
{% data reusables.enterprise_management_console.save-settings %}

{% endif %}

{% ifversion ghae %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.pages-tab %}
1. Em "Páginas políticas", desmarque **{% data variables.product.prodname_pages %}públicas**. ![Caixa de seleção para desabilitar o{% data variables.product.prodname_pages %}](/assets/images/enterprise/business-accounts/enable-github-pages-checkbox.png)
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
## Leia mais

- "[Habilitar o modo privado](/admin/configuration/enabling-private-mode)"
{% endif %}

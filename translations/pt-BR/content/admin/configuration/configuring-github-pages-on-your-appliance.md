---
title: Configurar o GitHub Pages no appliance
intro: 'É possível habilitar ou desabilitar o {{ site.data.variables.product.prodname_pages }} na instância. Você pode deixar os sites do {{ site.data.variables.product.prodname_pages }} acessíveis publicamente.'
redirect_from:
  - /enterprise/admin/guides/installation/disabling-github-enterprise-pages/
  - /enterprise/admin/guides/installation/configuring-github-enterprise-pages/
  - /enterprise/admin/installation/configuring-github-pages-on-your-appliance
  - /enterprise/admin/configuration/configuring-github-pages-on-your-appliance
versions:
  enterprise-server: '*'
---

### Deixar os sites do {{ site.data.variables.product.prodname_pages }} acessíveis publicamente

Se o modo privado estiver habilitado na instância, o público não poderá acessar os sites do {{ site.data.variables.product.prodname_pages }} hospedados na {{ site.data.variables.product.product_location_enterprise }}.

{% warning %}

**Aviso:** se você habilitar os sites públicos do {{ site.data.variables.product.prodname_pages }}, todos os sites do {{ site.data.variables.product.prodname_pages }} em todos os repositórios da sua instância ficarão acessíveis para o público.

{% endwarning %}

{{ site.data.reusables.enterprise_site_admin_settings.access-settings }}
{{ site.data.reusables.enterprise_site_admin_settings.management-console }}
{{ site.data.reusables.enterprise_management_console.pages-tab }}
4. Selecione **Public Pages** (Pages público). ![Caixa de seleção para deixar o Pages acessível publicamente](/assets/images/enterprise/management-console/public-pages-checkbox.png)
{{ site.data.reusables.enterprise_management_console.save-settings }}

### Desabilitar o {{ site.data.variables.product.prodname_pages }} na {{ site.data.variables.product.product_location_enterprise }}

Se o isolamento de subdomínio estiver desabilitado para a {{ site.data.variables.product.product_location_enterprise }}, você também deve desabilitar o {{ site.data.variables.product.prodname_pages }} para se proteger de possíveis vulnerabilidades de segurança. Para obter mais informações, consulte "[Habilitar isolamento de subdomínio](/enterprise/{{ currentVersion }}/admin/guides/installation/enabling-subdomain-isolation)".

{{ site.data.reusables.enterprise_site_admin_settings.access-settings }}
{{ site.data.reusables.enterprise_site_admin_settings.management-console }}
{{ site.data.reusables.enterprise_management_console.pages-tab }}
4. Desmarque a seleção na caixa **Enable Pages** (Habilitar Pages). ![Caixa de seleção para desabilitar o{{ site.data.variables.product.prodname_pages }}](/assets/images/enterprise/management-console/pages-select-button.png)
{{ site.data.reusables.enterprise_management_console.save-settings }}

### Leia mais

- [Habilitar modo privado](/enterprise/{{ currentVersion }}/admin/guides/installation/enabling-private-mode)

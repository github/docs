---
title: Configurar o GitHub Pages para a sua empresa
intro: 'Você pode habilitar ou desabilitar {% data variables.product.prodname_pages %} para a sua empresa e escolher se deseja tornar os sites acessíveis ao público.'
redirect_from:
  - /enterprise/admin/guides/installation/disabling-github-enterprise-pages/
  - /enterprise/admin/guides/installation/configuring-github-enterprise-pages/
  - /enterprise/admin/installation/configuring-github-pages-on-your-appliance
  - /enterprise/admin/configuration/configuring-github-pages-on-your-appliance
  - /admin/configuration/configuring-github-pages-on-your-appliance
  - /enterprise/admin/guides/installation/configuring-github-pages-for-your-enterprise/
versions:
  enterprise-server: '*'
  github-ae: '*'
topics:
  - enterprise
---

### Habilitar sites públicos para {% data variables.product.prodname_pages %}

{% if enterpriseServerVersions contains currentVersion %}Se o modo privado for habilitado na sua empresa, o {% else %}O {% endif %}público não poderá acessar sites de {% data variables.product.prodname_pages %} hospedados pela sua empresa, a menos que você habilite os sites públicos.

{% warning %}

**Aviso:** Se você habilitar sites públicos para {% data variables.product.prodname_pages %}, todos os sites em cada repositório da sua empresa serão acessíveis ao público.

{% endwarning %}

{% if enterpriseServerVersions contains currentVersion %}
{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_management_console.pages-tab %}
4. Selecione **Public Pages** (Pages público). ![Caixa de seleção para deixar o Pages acessível publicamente](/assets/images/enterprise/management-console/public-pages-checkbox.png)
{% data reusables.enterprise_management_console.save-settings %}
{% elsif currentVersion == "github-ae@latest" %}
{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.pages-tab %}
5. Em "Páginas políticas", selecione **{% data variables.product.prodname_pages %}públicas**. ![Caixa de seleção para habilitar as {% data variables.product.prodname_pages %} públicas](/assets/images/enterprise/business-accounts/public-github-pages-checkbox.png)
{% data reusables.enterprise-accounts.pages-policies-save %}
{% endif %}

### Desabilitar {% data variables.product.prodname_pages %} para a sua empresa

{% if enterpriseServerVersions contains currentVersion %}
Se o isolamento de subdomínio estiver desabilitado para sua empresa, você também deverá desabilitar
{% data variables.product.prodname_pages %} para proteger você de possíveis vulnerabilidades de segurança. Para obter mais informações, consulte "[Habilitar o isolamento de subdomínio](/admin/configuration/enabling-subdomain-isolation)".
{% endif %}

{% if enterpriseServerVersions contains currentVersion %}
{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_management_console.pages-tab %}
4. Desmarque a seleção na caixa **Enable Pages** (Habilitar Pages). ![Caixa de seleção para desabilitar o{% data variables.product.prodname_pages %}](/assets/images/enterprise/management-console/pages-select-button.png)
{% data reusables.enterprise_management_console.save-settings %}
{% elsif currentVersion == "github-ae@latest" %}
{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.pages-tab %}
5. Em "Páginas políticas", desmarque **{% data variables.product.prodname_pages %}públicas**. ![Caixa de seleção para desabilitar o{% data variables.product.prodname_pages %}](/assets/images/enterprise/business-accounts/enable-github-pages-checkbox.png)
{% data reusables.enterprise-accounts.pages-policies-save %}
{% endif %}

{% if enterpriseServerVersions contains currentVersion %}
### Leia mais

- "[Habilitar o modo privado](/admin/configuration/enabling-private-mode)"
{% endif %}

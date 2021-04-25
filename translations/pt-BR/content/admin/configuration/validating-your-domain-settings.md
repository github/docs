---
title: Validar configurações de domínio
intro: 'Antes de iniciar a {% data variables.product.product_location %} pela primeira vez, verifique se as configurações de domínio estão ajustadas adequadamente.'
redirect_from:
  - /enterprise/admin/installation/validating-your-domain-settings
  - /enterprise/admin/configuration/validating-your-domain-settings
versions:
  enterprise-server: '*'
topics:
  - enterprise
---

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_management_console.hostname-menu-item %}
4. Para testar as configurações DNS e SSL, clique em **Test domain settings** (Testar configurações de domínio). ![Botão Test domain settings (Testar configurações de domínio)](/assets/images/enterprise/management-console/test-domain-settings.png)
{% data reusables.enterprise_management_console.test-domain-settings-failure %}
{% data reusables.enterprise_management_console.save-settings %}

---
title: Configurar pacotes de suporte para sua empresa
intro: 'Você pode configurar o {{ site.data.variables.product.prodname_registry }} para sua empresa, habilitando ou desabilitando cada ecossistema de pacote.'
redirect_from:
  - /enterprise/admin/packages/configuring-packages-support-for-your-enterprise
versions:
  enterprise-server: '>=2.22'
---

{{ site.data.reusables.package_registry.packages-ghes-release-stage }}

Você pode habilitar ou desabilitar cada ecossistema de pacote para sua instância. Você pode definir um ecossistema que você habilitou anteriormente como **Read-Only** para evitar que novos pacotes sejam carregados, permitindo que os pacotes existentes sejam baixados.

Para usar o {{ site.data.variables.product.prodname_registry }} com o Docker, você deve ter o isolamento de subdomínio habilitado para sua instância. Para obter mais informações, consulte "[Habilitar o isolamento de subdomínio](/enterprise/admin/configuration/enabling-subdomain-isolation)".

{{ site.data.reusables.enterprise_site_admin_settings.access-settings }}
{{ site.data.reusables.enterprise_site_admin_settings.management-console }}
{{ site.data.reusables.enterprise_site_admin_settings.packages-tab }}
1. Em "Alternância de ecossistema", para cada tipo de pacote, selecione **habilitado**, **somente leitura** ou **Desabilitado**. ![Alternância de ecossistemas](/assets/images/enterprise/site-admin-settings/ecosystem-toggles.png)
{{ site.data.reusables.enterprise_management_console.save-settings }}

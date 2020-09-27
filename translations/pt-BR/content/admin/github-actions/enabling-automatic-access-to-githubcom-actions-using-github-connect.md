---
title: Habilitar o acesso automático às ações do GitHub.com usando o GitHub Connect
intro: 'Para permitir que o {{ site.data.variables.product.prodname_actions }} na instância corporativa use ações do {{ site.data.variables.product.prodname_dotcom_the_website }}, você pode conectar o {{ site.data.variables.product.product_location_enterprise }} ao {{ site.data.variables.product.prodname_ghe_cloud }}.'
permissions: 'Os administradores de site de {{ site.data.variables.product.prodname_ghe_server }} que também são proprietários da organização ou conta corporativa conectada do {{ site.data.variables.product.prodname_ghe_cloud }} podem habilitar o acesso a todas as ações do {{ site.data.variables.product.prodname_dotcom_the_website }}.'
redirect_from:
  - /enterprise/admin/github-actions/enabling-automatic-access-to-githubcom-actions-using-github-connect
versions:
  enterprise-server: '>=2.22'
---

{{ site.data.reusables.actions.enterprise-beta }}
{{ site.data.reusables.actions.enterprise-github-hosted-runners }}

Por padrão, os fluxos de trabalho {{ site.data.variables.product.prodname_actions }} em {{ site.data.variables.product.prodname_ghe_server }} não podem usar ações diretamente de {{ site.data.variables.product.prodname_dotcom_the_website }} ou [{{ site.data.variables.product.prodname_marketplace }}](https://github.com/marketplace?type=actions).

Para tornar todas as ações do {{ site.data.variables.product.prodname_dotcom_the_website }} disponíveis na instância empresarial, você pode conectar {{ site.data.variables.product.prodname_ghe_server }} ao {{ site.data.variables.product.prodname_ghe_cloud }} usando {{ site.data.variables.product.prodname_github_connect }}. Para outras formas de acessar as ações de {{ site.data.variables.product.prodname_dotcom_the_website }}, consulte "[Sobre o uso de ações de {{ site.data.variables.product.prodname_dotcom_the_website }} no {{ site.data.variables.product.prodname_ghe_server }}](/enterprise/admin/github-actions/about-using-githubcom-actions-on-github-enterprise-server)".

### Habilitar o acesso automático a todas as ações de {{ site.data.variables.product.prodname_dotcom_the_website }}

Antes de permitir o acesso a todas as ações de {{ site.data.variables.product.prodname_dotcom_the_website }} em {{ site.data.variables.product.product_location_enterprise }}, você deve conectar {{ site.data.variables.product.product_location_enterprise }} a {{ site.data.variables.product.prodname_dotcom_the_website }}. Para obter mais informações, consulte "[Conectar o {{ site.data.variables.product.prodname_ghe_server }} ao {{ site.data.variables.product.prodname_ghe_cloud }}](/enterprise/{{ currentVersion }}/admin/guides/installation/connecting-github-enterprise-server-to-github-enterprise-cloud)".

{{ site.data.reusables.enterprise_site_admin_settings.access-settings }}
{{ site.data.reusables.enterprise_site_admin_settings.business }}
{{ site.data.reusables.enterprise-accounts.settings-tab }}
{{ site.data.reusables.enterprise-accounts.github-connect-tab }}
1. Em "Servidor pode usar ações do GitHub.com em execuções de fluxos de trabalho", use o menu suspenso e selecione **Habilitado**. ![Menu suspenso para ações do GitHub.com em execuções do fluxos de trabalho](/assets/images/enterprise/site-admin-settings/enable-marketplace-actions-drop-down.png)

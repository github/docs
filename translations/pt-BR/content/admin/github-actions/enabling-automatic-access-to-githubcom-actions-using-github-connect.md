---
title: Habilitar o acesso automático às ações do GitHub.com usando o GitHub Connect
intro: 'Para permitir que o {% data variables.product.prodname_actions %} na instância corporativa use ações do {% data variables.product.prodname_dotcom_the_website %}, você pode conectar o {% data variables.product.product_location_enterprise %} ao {% data variables.product.prodname_ghe_cloud %}.'
permissions: 'Os administradores de site de {% data variables.product.prodname_ghe_server %} que também são proprietários da organização ou conta corporativa conectada do {% data variables.product.prodname_ghe_cloud %} podem habilitar o acesso a todas as ações do {% data variables.product.prodname_dotcom_the_website %}.'
redirect_from:
  - /enterprise/admin/github-actions/enabling-automatic-access-to-githubcom-actions-using-github-connect
versions:
  enterprise-server: '>=2.22'
topics:
  - enterprise
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

Por padrão, os fluxos de trabalho {% data variables.product.prodname_actions %} em {% data variables.product.prodname_ghe_server %} não podem usar ações diretamente de {% data variables.product.prodname_dotcom_the_website %} ou [{% data variables.product.prodname_marketplace %}](https://github.com/marketplace?type=actions).

Para tornar todas as ações de {% data variables.product.prodname_dotcom_the_website %} disponíveis na sua instância corporativa, você pode usar {% data variables.product.prodname_github_connect %} para integrar {% data variables.product.prodname_ghe_server %} a {% data variables.product.prodname_ghe_cloud %}. Para conhecer outras formas de acessar ações a partir de {% data variables.product.prodname_dotcom_the_website %}, consulte "[Sobre ações em {% data variables.product.prodname_ghe_server %}](/admin/github-actions/about-using-actions-on-github-enterprise-server).

### Habilitar o acesso automático a todas as ações de {% data variables.product.prodname_dotcom_the_website %}

Antes de permitir o acesso a todas as ações de {% data variables.product.prodname_dotcom_the_website %} em {% data variables.product.product_location_enterprise %}, você deve conectar {% data variables.product.product_location_enterprise %} a {% data variables.product.prodname_dotcom_the_website %}. Para obter mais informações, consulte "[Conectar o {% data variables.product.prodname_ghe_server %} ao {% data variables.product.prodname_ghe_cloud %}](/enterprise/{{ currentVersion }}/admin/guides/installation/connecting-github-enterprise-server-to-github-enterprise-cloud)".

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.github-connect-tab %}
1. Em "Servidor pode usar ações do GitHub.com em execuções de fluxos de trabalho", use o menu suspenso e selecione **Habilitado**. ![Menu suspenso para ações do GitHub.com em execuções do fluxos de trabalho](/assets/images/enterprise/site-admin-settings/enable-marketplace-actions-drop-down.png)
1. {% data reusables.actions.enterprise-limit-actions-use %}

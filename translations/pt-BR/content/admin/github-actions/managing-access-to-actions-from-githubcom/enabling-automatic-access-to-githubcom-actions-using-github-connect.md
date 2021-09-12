---
title: Habilitar o acesso automático às ações do GitHub.com usando o GitHub Connect
intro: 'Para permitir que {% data variables.product.prodname_actions %} na sua empresa use ações a partir de {% data variables.product.prodname_dotcom_the_website %}, você pode conectar a sua instância corporativa a {% data variables.product.prodname_ghe_cloud %}.'
permissions: 'Site administrators for {% data variables.product.product_name %} who are also owners of the connected {% data variables.product.prodname_ghe_cloud %} organization or enterprise account can enable access to all {% data variables.product.prodname_dotcom_the_website %} actions.'
redirect_from:
  - /enterprise/admin/github-actions/enabling-automatic-access-to-githubcom-actions-using-github-connect
  - /admin/github-actions/enabling-automatic-access-to-githubcom-actions-using-github-connect
versions:
  enterprise-server: '>=2.22'
  github-ae: next
type: how_to
topics:
  - Actions
  - Enterprise
  - GitHub Connect
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}
{% data reusables.actions.enterprise-github-connect-warning %}
{% data reusables.actions.ae-beta %}

Por padrão, os fluxos de trabalho {% data variables.product.prodname_actions %} em {% data variables.product.product_name %} não podem usar ações diretamente de {% data variables.product.prodname_dotcom_the_website %} ou [{% data variables.product.prodname_marketplace %}](https://github.com/marketplace?type=actions).

Para tornar todas as ações de {% data variables.product.prodname_dotcom_the_website %} disponíveis na sua instância corporativa, você pode usar {% data variables.product.prodname_github_connect %} para integrar {% data variables.product.product_name %} a {% data variables.product.prodname_ghe_cloud %}. Para saber outras formas de acessar ações a partir da {% data variables.product.prodname_dotcom_the_website %}, consulte "[Sobre o uso de ações na sua empresa](/admin/github-actions/about-using-actions-in-your-enterprise)".

### Habilitar o acesso automático a todas as ações de {% data variables.product.prodname_dotcom_the_website %}

Antes de habilitar o acesso a todas as ações de {% data variables.product.prodname_dotcom_the_website %} na sua instância corporativa, você deve conectar sua empresa a {% data variables.product.prodname_dotcom_the_website %}. Para obter mais informações, consulte "[Conectar o {% data variables.product.prodname_ghe_server %} ao {% data variables.product.prodname_ghe_cloud %}](/enterprise/{{ currentVersion }}/admin/guides/installation/connecting-github-enterprise-server-to-github-enterprise-cloud)".

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.github-connect-tab %}
1. Em "Servidor pode usar ações do GitHub.com em execuções de fluxos de trabalho", use o menu suspenso e selecione **Habilitado**. ![Menu suspenso para ações do GitHub.com em execuções do fluxos de trabalho](/assets/images/enterprise/site-admin-settings/enable-marketplace-actions-drop-down.png)
1. {% data reusables.actions.enterprise-limit-actions-use %}

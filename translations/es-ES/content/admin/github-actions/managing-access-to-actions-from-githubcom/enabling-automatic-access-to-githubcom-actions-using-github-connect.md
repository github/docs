---
title: Habilitar el acceso automático a las acciones de GitHub.com utilizando GitHub Connect
intro: 'Para permitir que las {% data variables.product.prodname_actions %} en tu empresa utilicen acciones de {% data variables.product.prodname_dotcom_the_website %}, puedes conectar tu instancia empresarial a {% data variables.product.prodname_ghe_cloud %}.'
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

Predeterminadamente, los flujos de trabajo de {% data variables.product.prodname_actions %} en {% data variables.product.product_name %} no pueden utilizar las acciones directamente desde {% data variables.product.prodname_dotcom_the_website %} o desde [{% data variables.product.prodname_marketplace %}](https://github.com/marketplace?type=actions).

Para que todas las acciones de {% data variables.product.prodname_dotcom_the_website %} se hagan disponibles para tu instancia empresarial, puedes utilizar {% data variables.product.prodname_github_connect %} para integrar a {% data variables.product.product_name %} con {% data variables.product.prodname_ghe_cloud %}. Para encontrar otras formas de acceder a las acciones desde {% data variables.product.prodname_dotcom_the_website %}, consulta la sección "[Acerca de utilizar las acciones en tu empresa](/admin/github-actions/about-using-actions-in-your-enterprise)".

### Habilitar el acceso automático a todas las acciones de {% data variables.product.prodname_dotcom_the_website %}

Antes de habilitar el acceso para todas las acciones desde {% data variables.product.prodname_dotcom_the_website %} en tu instancia empresarial, debes conectar a tu empresa con {% data variables.product.prodname_dotcom_the_website %}. Para obtener más información, consulta "[Conectar {% data variables.product.prodname_ghe_server %} a {% data variables.product.prodname_ghe_cloud %}](/enterprise/{{ currentVersion }}/admin/guides/installation/connecting-github-enterprise-server-to-github-enterprise-cloud)."

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.github-connect-tab %}
1. Debajo de "El servidor puede utilizar acciones de GitHub.com en las ejecuciones de flujo de trabajo", utiliza el menú desplegable y selecciona **Habilitado**. ![Menú desplegable a las acciones de GitHub.com en las ejecuciones de flujo de trabajo](/assets/images/enterprise/site-admin-settings/enable-marketplace-actions-drop-down.png)
1. {% data reusables.actions.enterprise-limit-actions-use %}

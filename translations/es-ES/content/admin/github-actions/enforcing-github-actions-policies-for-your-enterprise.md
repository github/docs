---
title: Requerir las políticas de GitHub Actions para tu empresa
intro: 'Los administradores empresariales pueden gestionar el acceso a {% data variables.product.prodname_actions %} en una empresa.'
redirect_from:
  - /enterprise/admin/github-actions/enforcing-github-actions-policies-for-your-enterprise
versions:
  enterprise-server: '>=2.22'
---

{% data reusables.actions.enterprise-beta %}

### Acerca de los permisos de {% data variables.product.prodname_actions %} para tu empresa

Cuando habilitas {% data variables.product.prodname_actions %} en {% data variables.product.prodname_ghe_server %}, estas se habilitan para todas las organizaciones en tu empresa. Puedes elegir inhabilitar {% data variables.product.prodname_actions %} para todas las organizaciones en tu empresa, o puedes permitir solo organizaciones específicas. También puedes limitar el uso de acciones públicas para que las personas solo puedan utilizar las acciones locales que existen en tu empresa.

### Administrar los permisos de {% data variables.product.prodname_actions %} para tu empresa

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.actions-tab %}
{% data reusables.actions.enterprise-actions-permissions %}

{% if currentVersion ver_gt "enterprise-server@2.22" %}
### Habilitar flujos de trabajo para las bifurcaciones de repositorios privados

{% data reusables.github-actions.private-repository-forks-overview %}

#### Configurar la política de bifurcación privada para tu empresa

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.actions-tab %}
{% data reusables.github-actions.private-repository-forks-configure %}
{% endif %}

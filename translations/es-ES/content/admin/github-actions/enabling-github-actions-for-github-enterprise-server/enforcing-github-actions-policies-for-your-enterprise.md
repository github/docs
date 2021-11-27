---
title: Requerir las políticas de GitHub Actions para tu empresa
intro: 'Los administradores empresariales pueden gestionar el acceso a {% data variables.product.prodname_actions %} en una empresa.'
redirect_from:
  - /enterprise/admin/github-actions/enforcing-github-actions-policies-for-your-enterprise
  - /admin/github-actions/enforcing-github-actions-policies-for-your-enterprise
versions:
  ghes: '*'
  ghae: '*'
type: how_to
topics:
  - Actions
  - Enterprise
  - Policies
shortTitle: Requerir políticas empresariales
---

{% data reusables.actions.ae-beta %}
{% data reusables.actions.enterprise-beta %}

## Acerca de los permisos de {% data variables.product.prodname_actions %} para tu empresa

{% ifversion ghae %}{% else %}Cuando habilitas las {% data variables.product.prodname_actions %} en {% data variables.product.prodname_ghe_server %}, se habilitan para todas las organizaciones en tu empresa. {% endif %}Puedes elegir inhabilitar {% data variables.product.prodname_actions %} para todas las organizaciones en tu empresa o únicamente para algunas específicas. También puedes limitar el uso de acciones públicas para que las personas solo puedan utilizar las acciones locales que existen en tu empresa.

## Administrar los permisos de {% data variables.product.prodname_actions %} para tu empresa

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.actions-tab %}
{% data reusables.actions.enterprise-actions-permissions %}

{% ifversion ghes > 2.22 %}
## Permitir que se ejecuten acciones específicas

{% data reusables.actions.allow-specific-actions-intro %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.actions-tab %}
1. Debajo de **Políticas**, selecciona **Permitir las acciones seleccionadas** y agrega tus acciones requeridas a la lista. ![Agregar acciones a la lista de permitidos](/assets/images/help/organizations/enterprise-actions-policy-allow-list.png)
{% endif %}

{% ifversion ghes > 2.22 or ghae %}
## Habilitar flujos de trabajo para las bifurcaciones de repositorios privados

{% data reusables.github-actions.private-repository-forks-overview %}

### Configurar la política de bifurcación privada para tu empresa

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.actions-tab %}
{% data reusables.github-actions.private-repository-forks-configure %}
{% endif %}

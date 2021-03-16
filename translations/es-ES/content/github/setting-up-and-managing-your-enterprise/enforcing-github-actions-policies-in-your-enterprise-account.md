---
title: Requerir las políticas de Github Actions en tu cuenta empresarial
intro: 'Los propietarios de las empresas pueden habilitar, inhabilitar y limitar las {% data variables.product.prodname_actions %} para una cuenta empresarial.'
product: '{% data reusables.gated-features.enterprise-accounts %}'
redirect_from:
  - /github/setting-up-and-managing-your-enterprise-account/enforcing-github-actions-policies-in-your-enterprise-account
miniTocMaxHeadingLevel: 4
versions:
  free-pro-team: '*'
---

### Acerca de los permisos de las {% data variables.product.prodname_actions %} para tu cuenta empresarial

Predeterminadamente, {% data variables.product.prodname_actions %} se habilita en todas las organizaciones que pertenezcan a una cuenta empresarial. Puedes elegir inhabilitar {% data variables.product.prodname_actions %} para todas las organizaciones que pertenezcan a una cuenta empresarial, o permitirlas únicamente para una organización epecífica. También puedes limitar el uso de acciones públicas, para que las personas solo puedan utilizar acciones locales que existen en tu organización.

Para obtener más información acerca de {% data variables.product.prodname_actions %}, consulta la sección "[Acerca de {% data variables.product.prodname_actions %}](/actions/getting-started-with-github-actions/about-github-actions)".

### Adminsitrar los permisos de {% data variables.product.prodname_actions %} para tu cuenta empresarial

Puedes inhabilitar todos los flujos de trabajo de una empresa o configurar una política que configure qué acciones pueden utilizarse en una organización.

{% data reusables.actions.actions-use-policy-settings %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.actions-tab %}
{% data reusables.actions.enterprise-actions-permissions %}
1. Haz clic en **Save ** (guardar).

### Permitir que se ejecuten acciones específicas

{% data reusables.actions.allow-specific-actions-intro %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.actions-tab %}
1. Debajo de **Políticas**, selecciona **Permitir las acciones seleccionadas** y agrega tus acciones requeridas a la lista. ![Agregar acciones a la lista de permitidos](/assets/images/help/organizations/enterprise-actions-policy-allow-list.png)

### Habilitar flujos de trabajo para las bifurcaciones de repositorios privados

{% data reusables.github-actions.private-repository-forks-overview %}

#### Configurar la política de bifurcaciones privadas para tu cuenta empresarial

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.actions-tab %}
{% data reusables.github-actions.private-repository-forks-configure %}

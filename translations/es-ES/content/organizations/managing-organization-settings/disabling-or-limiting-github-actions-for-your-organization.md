---
title: Inhabilitar o limitar GitHub Actions para tu organización
intro: 'Los propietarios de organización pueden inhabilitar, habilitar y limitar GitHub Actions para la misma.'
redirect_from:
  - /github/setting-up-and-managing-organizations-and-teams/disabling-or-limiting-github-actions-for-your-organization
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
  github-ae: '*'
topics:
  - Organizations
  - Teams
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

### Acerca de los permisos de {% data variables.product.prodname_actions %} para tu organización

{% data reusables.github-actions.disabling-github-actions %}Para obtener más información acerca de {% data variables.product.prodname_actions %}, consulta la sección "[Acerca de {% data variables.product.prodname_actions %}](/actions/getting-started-with-github-actions/about-github-actions)".

Puedes habilitar {% data variables.product.prodname_actions %} para todos los repositorios en tu organización. {% data reusables.github-actions.enabled-actions-description %}Puedes inhabilitar {% data variables.product.prodname_actions %} para todos los repositorios en tu organización. {% data reusables.github-actions.disabled-actions-description %}

De manera alterna, puedes habilitar {% data variables.product.prodname_actions %} para todos los repositorios en tu organización, pero limitando las acciones que un flujo de trabajo puede ejecutar. {% data reusables.github-actions.enabled-local-github-actions %}

{% if enterpriseServerVersions contains currentVersion and currentVersion ver_lt "enterprise-server@2.23" %}

### Administrar los permisos de {% data variables.product.prodname_actions %} para tu organización

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.settings-sidebar-actions %}
1. Debajo de **Acciones locales y de terceros**, selecciona una opción. ![Habilitar, inhabilitar o limitar acciones para esta organización](/assets/images/help/repository/enable-org-actions.png)
1. Haz clic en **Save ** (guardar).

{% endif %}

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" %}

### Administrar los permisos de {% data variables.product.prodname_actions %} para tu organización

Puedes inhabilitar todos los flujos de trabajo para una organización o configurar una política que configure qué acciones pueden utilizarse en una organización.

{% data reusables.actions.actions-use-policy-settings %}

{% note %}

**Nota:** Tal vez no puedas administrar estas configuraciones si la empresa que administra tu organización tiene una política que lo anule. Para obtener más información {% if currentVersion == "free-pro-team@latest" %}"[Requerir las políticas de {% data variables.product.prodname_actions %} en tu cuenta empresarial](/github/setting-up-and-managing-your-enterprise/enforcing-github-actions-policies-in-your-enterprise-account)."{% else %}"[Requerir las políticas de {% data variables.product.prodname_actions %} para tu empresa](/enterprise/admin/github-actions/enforcing-github-actions-policies-for-your-enterprise)."{% endif %}

{% endnote %}

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.settings-sidebar-actions %}
1. Debajo de **Políticas**, selecciona una opción. ![Configurar la política de acciones para esta organización](/assets/images/help/organizations/actions-policy.png)
1. Haz clic en **Save ** (guardar).

### Permitir que se ejecuten acciones específicas

{% data reusables.actions.allow-specific-actions-intro %}

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.settings-sidebar-actions %}
1. Debajo de **Políticas**, selecciona **Permitir las acciones seleccionadas** y agrega tus acciones requeridas a la lista. ![Agregar acciones a la lista de permitidos](/assets/images/help/organizations/actions-policy-allow-list.png)
1. Haz clic en **Save ** (guardar).

{% endif %}

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" %}
### Habilitar flujos de trabajo para las bifurcaciones de repositorios privados

{% data reusables.github-actions.private-repository-forks-overview %}

#### Configurar la política de bifurcaciones privadas para una organización

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.settings-sidebar-actions %}
{% data reusables.github-actions.private-repository-forks-configure %}
{% endif %}

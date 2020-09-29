---
title: Inhabilitar o limitar GitHub Actions para tu organización
intro: 'Los propietarios de organización pueden inhabilitar, habilitar y limitar GitHub Actions para la misma.'
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

### Acerca de los permisos de {% data variables.product.prodname_actions %} para tu organización

{% data reusables.github-actions.disabling-github-actions %}Para obtener más información acerca de {% data variables.product.prodname_actions %}, consulta la sección "[Acerca de {% data variables.product.prodname_actions %}](/actions/getting-started-with-github-actions/about-github-actions)".

Puedes habilitar {% data variables.product.prodname_actions %} para todos los repositorios en tu organización. {% data reusables.github-actions.enabled-actions-description %}Puedes inhabilitar {% data variables.product.prodname_actions %} para todos los repositorios en tu organización. {% data reusables.github-actions.disabled-actions-description %}

De manera alterna, puedes habilitar {% data variables.product.prodname_actions %} para todos los repositorios en tu organización, pero limitando las acciones que un flujo de trabajo puede ejecutar. {% data reusables.github-actions.enabled-local-github-actions %}

### Administrar los permisos de {% data variables.product.prodname_actions %} para tu organización

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.settings-sidebar-actions %}
1. Debajo de **Acciones locales y de terceros**, selecciona una opción. ![Habilitar, inhabilitar o limitar acciones para esta organización](/assets/images/help/repository/enable-org-actions.png)
1. Haz clic en **Save (Guardar)**.

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

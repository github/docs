---
title: Inhabilitar o limitar las acciones de GitHub para un repositorio
intro: 'Los dueños de repositorios pueden inhabilitar, habilitar y limitar {% data variables.product.prodname_actions %} para un repositorio específico.'
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
  github-ae: '*'
topics:
  - Repositories
redirect_from:
  - /github/administering-a-repository/disabling-or-limiting-github-actions-for-a-repository
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

### Acerca de los permisos de {% data variables.product.prodname_actions %} para tu repositorio

{% data reusables.github-actions.disabling-github-actions %}Para obtener más información acerca de {% data variables.product.prodname_actions %}, consulta la sección "[Acerca de {% data variables.product.prodname_actions %}](/actions/getting-started-with-github-actions/about-github-actions)".

Puedes habilitar {% data variables.product.prodname_actions %} para tu repositorio. {% data reusables.github-actions.enabled-actions-description %} Puedes inhabilitar {% data variables.product.prodname_actions %} totalmente para tu repositorio. {% data reusables.github-actions.disabled-actions-description %}

De manera alterna, puedes habilitar {% data variables.product.prodname_actions %} en tu repositorio, pero limitar las acciones que un flujo de trabajo puede ejecutar. {% data reusables.github-actions.enabled-local-github-actions %}

{% if enterpriseServerVersions contains currentVersion and currentVersion ver_lt "enterprise-server@2.23" %}

### Administrar los permisos de {% data variables.product.prodname_actions %} para tu repositorio

{% note %}

**Nota:** Tal vez no pueds administrar estas configuraciones si tu organización tiene una política de anulación o si la administra una cuenta empresarial que tiene dicha configuración. Para obtener más información, consulta la sección "[Inhabilitar o limitar las {% data variables.product.prodname_actions %} para tu organización](/organizations/managing-organization-settings/disabling-or-limiting-github-actions-for-your-organization)" o {% if currentVersion == "free-pro-team@latest" %}"[Requerir politicas de las {% data variables.product.prodname_actions %} en tu cuenta empresarial](/github/setting-up-and-managing-your-enterprise/enforcing-github-actions-policies-in-your-enterprise-account)".{% elsif currentVersion ver_gt "enterprise-server@2.21"%}"[Requerir políticas de las {% data variables.product.prodname_actions %} para tu empresa](/enterprise/admin/github-actions/enforcing-github-actions-policies-for-your-enterprise)".{% endif %}

{% endnote %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.settings-sidebar-actions %}
4. Selecciona una opción debajo de "Permisos de las acciones". ![Habilita, inhabilita o limita las acciones para este repositorio](/assets/images/help/repository/enable-repo-actions.png)

{% endif %}

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" %}

### Administrar los permisos de {% data variables.product.prodname_actions %} para tu repositorio

Puedes inhabilitar todos los flujos de trabajo para un repositorio o configurar una política que configure qué acciones pueden utilzarse en éste.

{% data reusables.actions.actions-use-policy-settings %}

{% note %}

**Nota:** Tal vez no pueds administrar estas configuraciones si tu organización tiene una política de anulación o si la administra una cuenta empresarial que tiene dicha configuración. Para obtener más información, consulta la sección "[Inhabilitar o limitar las {% data variables.product.prodname_actions %} para tu organización](/organizations/managing-organization-settings/disabling-or-limiting-github-actions-for-your-organization)" o {% if currentVersion == "free-pro-team@latest" %}"[Requerir politicas de las {% data variables.product.prodname_actions %} en tu cuenta empresarial](/github/setting-up-and-managing-your-enterprise/enforcing-github-actions-policies-in-your-enterprise-account)".{% elsif currentVersion ver_gt "enterprise-server@2.21" %}"[Requerir políticas de las {% data variables.product.prodname_actions %} para tu empresa](/enterprise/admin/github-actions/enforcing-github-actions-policies-for-your-enterprise)".

{% endif %}

{% endnote %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.settings-sidebar-actions %}
1. Debajo de **Permisos de las acciones**, selecciona una opción. ![Configurar la política de acciones para esta organización](/assets/images/help/repository/actions-policy.png)
1. Haz clic en **Save ** (guardar).

### Permitir que se ejecuten acciones específicas

{% data reusables.actions.allow-specific-actions-intro %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.settings-sidebar-actions %}
1. Debajo de **Permisos de las acciones**, selecciona **Permitir acciones seleccionadas** y agrega tus acciones requeridas a la lista. ![Agregar acciones a la lista de permitidos](/assets/images/help/repository/actions-policy-allow-list.png)
2. Haz clic en **Save ** (guardar).
{% endif %}

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" %}
### Habilitar flujos de trabajo para las bifurcaciones de repositorios privados

{% data reusables.github-actions.private-repository-forks-overview %}

#### Configurar la política de bifurcaciones privadas para un repositorio

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.settings-sidebar-actions %}
{% data reusables.github-actions.private-repository-forks-configure %}
{% endif %}

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.1" or currentVersion == "github-ae@next" %}
### Configurar los permisos del `GITHUB_TOKEN` para tu repositorio

{% data reusables.github-actions.workflow-permissions-intro %}

También pueden configurarse los permisos predeterminados en los ajustes de la organización. Si el predeterminado más restringido se seleccionó en la configuración de la organización, la misma opción se autoselecciona en tu configuración de repositorio y la opción permisiva se inhabilita.

{% data reusables.github-actions.workflow-permissions-modifying %}

#### Configurar los permisos predeterminados del `GITHUB_TOKEN`

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.settings-sidebar-actions %}
1. Debajo de **Permisos del flujo de trabajo**, elige si quieres que el `GITHUB_TOKEN` tenga permisos de lectura y escritura para todos los alcances o solo acceso de lectura para el alcance `contents`. ![Configurar los permisos del GITHUB_TOKEN para este repositorio](/assets/images/help/settings/actions-workflow-permissions-repository.png)
1. Da clic en **Guardar** para aplicar la configuración.
{% endif %}

---
title: Agregar ejecutores autoalojados
intro: 'Puedes agregar un ejecutor auto-hospedado a {% data variables.product.prodname_actions %}.'
redirect_from:
  - /github/automating-your-workflow-with-github-actions/adding-self-hosted-runners
  - /actions/automating-your-workflow-with-github-actions/adding-self-hosted-runners
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

Para obtener información sobre los sistemas operativos compatibles para los ejecutores autoalojados o el uso de ejecutores autoalojados con un servidor proxy, consulta "[Acerca de los ejecutores autoalojados](/github/automating-your-workflow-with-github-actions/about-self-hosted-runners)."

{% warning %}

**Advertencia:** {% data reusables.github-actions.self-hosted-runner-security %}

Para obtener más información, consulta "[Acerca de los ejecutores autoalojados](/github/automating-your-workflow-with-github-actions/about-self-hosted-runners#self-hosted-runner-security-with-public-repositories)."

{% endwarning %}

### Agregar un ejecutor auto-hospedado a un repositorio

Puedes agregar ejecutores auto-hospedados a un solo repositorio. Para agregar un ejecutor autoalojado a un repositorio de usuario, debes ser el propietario del repositorio. Para un repositorio de la organización, debes ser propietario de la organización o tener acceso de administrador al repositorio.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.settings-sidebar-actions %}
1. Debajo de "ejecutores auto-hospedados", da clic en **Agregar ejecutor**.
{% data reusables.github-actions.self-hosted-runner-configure %}
{% data reusables.github-actions.self-hosted-runner-check-installation-success %}

### Agregar un ejecutor auto-hospedado a una organización

Puedes agregar ejecutores auto-hospedados a nivel organizacional, en donde se podrán utilizar para procesar jobs para varios repositorios en una organización. Para agregar un ejecutor auto-hospedado a una organización, debes ser el dueño de la misma.

{% data reusables.organizations.navigate-to-org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.settings-sidebar-actions %}
1. Debajo de "Ejecutores auto-hospedados", da clic en **Agregar nuevo** y luego en **Ejecutor nuevo**.
{% data reusables.github-actions.self-hosted-runner-configure %}
{% data reusables.github-actions.self-hosted-runner-check-installation-success %}

### Agregar un ejecutor auto-hospedado a una empresa

Puedes agregar ejecutores auto-hospedados a una empresa, en donde pueden asignarse a organizaciones múltiples. Los administradores de la organización podrán controlar entonces qué repositorios pueden utilizarlo.

{% if currentVersion == "free-pro-team@latest" %}
Para agregar un ejecutor auto-hospedado a una cuenta empresarial, debes ser un propietario de la empresa.
{% else if currentVersion != "free-pro-team@latest" and currentVersion ver_gt "enterprise-server@2.21"%}
Para agregar un ejecutor auto-hospedado al nivel de una empresa de {% data variables.product.product_location %}, debes ser un administrador de sitio.
{% endif %}

{% if currentVersion == "free-pro-team@latest" %}
{% data reusables.enterprise-accounts.access-enterprise %}
{% else if currentVersion != "free-pro-team@latest" and currentVersion ver_gt "enterprise-server@2.21"%}
{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.business %}
{% endif %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.actions-tab %}
1. Da clic en la pestaña de **Ejecutores auto-hospedados**.
1. Da clic en **Agregar nuevo** y luego en **Ejecutor nuevo**. Los ejecutores nuevos se asignan al grupo predeterminado. Puedes modificar el grupo del ejecutor después de que lo hayas registrado. Para obtener más información, consulta la sección "[Administrar el acceso a los ejecutores auto-hospedados](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#moving-a-self-hosted-runner-to-a-group)".
{% data reusables.github-actions.self-hosted-runner-configure %}
{% data reusables.github-actions.self-hosted-runner-check-installation-success %}

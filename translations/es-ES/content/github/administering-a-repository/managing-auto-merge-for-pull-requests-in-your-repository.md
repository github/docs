---
title: Administrar la fusión automática para las solicitudes de cambios en tu repositorio
intro: Puedes permitir o dejar de permitir la fusión automática de solicitudes de cambio en tu repositorio.
product: '{% data reusables.gated-features.auto-merge %}'
versions:
  free-pro-team: '*'
  enterprise-server: '>=3.1'
  github-ae: '*'
permissions: Las personas con permisos de mantenedor pueden administrar las fusiones automáticas de solicitudes de cambios en un repositorio.
topics:
  - repositories
---

### Acerca de la fusión automática

If you allow auto-merge for pull requests in your repository, people with write permissions can configure individual pull requests in the repository to merge automatically when all merge requirements are met. {% if currentVersion == "free-pro-team@latest" or currentVersion == "github-ae@next" or currentVersion ver_gt "enterprise-server@3.1" %}If someone who does not have write permissions pushes changes to a pull request that has auto-merge enabled, auto-merge will be disabled for that pull request. {% endif %}For more information, see "[Automatically merging a pull request](/github/collaborating-with-issues-and-pull-requests/automatically-merging-a-pull-request)."

### Managing auto-merge

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
1. Debajo de "Botón para fusionar", selecciona o deselecciona **Permitir la fusión automática**. ![Casilla de verificación para permitir o dejar de permitir la fusión automática](/assets/images/help/pull_requests/allow-auto-merge-checkbox.png)

---
title: Administrar la fusión automática para las solicitudes de cambios en tu repositorio
intro: Puedes permitir o dejar de permitir la fusión automática de solicitudes de cambio en tu repositorio.
product: '{% data reusables.gated-features.auto-merge %}'
versions:
  free-pro-team: '*'
  enterprise-server: '>=3.1'
  github-ae: '*'
permissions: People with maintainer permissions can manage auto-merge for pull requests in a repository.
topics:
  - Repositories
---

### Acerca de la fusión automática

Si permites la fusión automática para las solicitudes de cambio en tu repositorio, las personas con permisos de escritura pueden configurar las solicitudes de extracción individuales en el repositorio para que se fusionen automáticamente cuando se cumplan todos los requisitos de fusión. {% if currentVersion == "free-pro-team@latest" or currentVersion == "github-ae@next" or currentVersion ver_gt "enterprise-server@3.1" %}Si alguien que no tiene permisos de escritura sube cambios a una solicitud de cambios que tiene habilitada la fusión automática, esta se inhabilitará para dicha solicitud de cambios. {% endif %}Para obtener más información, consulta la sección "[Fusionar una solicitud de cambios automáticamente](/github/collaborating-with-issues-and-pull-requests/automatically-merging-a-pull-request)".

### Administrar la fusión automática

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
1. Debajo de "Botón para fusionar", selecciona o deselecciona **Permitir la fusión automática**. ![Casilla de verificación para permitir o dejar de permitir la fusión automática](/assets/images/help/pull_requests/allow-auto-merge-checkbox.png)

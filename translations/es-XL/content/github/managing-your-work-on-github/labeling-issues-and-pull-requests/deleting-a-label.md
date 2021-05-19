---
title: Eliminar una etiqueta
intro: 'En los repositorios en los que tienes acceso de escritura, puedes eliminar una etiqueta si ya no la necesitas para clasificar las propuestas o las solicitudes de extracción.'
redirect_from:
  - /articles/deleting-a-label
  - /github/managing-your-work-on-github/deleting-a-label
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---
Al eliminar una etiqueta, esta se quitará de todas las propuestas o solicitudes de extracción en las que se la ha aplicado.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-issue-pr %}
{% data reusables.project-management.labels %}
{% data reusables.project-management.delete-label %}

### Leer más

- "[Aplicar etiquetas a las propuestas y solicitudes de extracción](/articles/applying-labels-to-issues-and-pull-requests)"
- "[Filtrar propuestas y solicitudes de extracción por etiquetas](/articles/filtering-issues-and-pull-requests-by-labels)"{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" %}
- "[Administrar etiquetas predeterminadas para los repositorios de tu organización](/articles/managing-default-labels-for-repositories-in-your-organization)"
{% endif %}

---
title: Editar una etiqueta
intro: 'En los repositorios a los que tienes acceso de escritura, puedes editar el nombre, color y descripción de una etiqueta existente.'
redirect_from:
  - /articles/editing-a-label
  - /github/managing-your-work-on-github/editing-a-label
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---
{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-issue-pr %}
{% data reusables.project-management.labels %}
{% data reusables.project-management.edit-label %}
{% data reusables.project-management.name-label %}
{% data reusables.project-management.label-description %}
{% data reusables.project-management.label-color-randomizer %}
{% data reusables.project-management.save-label %}

### Leer más

- "[Acerca de las etiquetas](/articles/about-labels)"
- "[Crear una etiqueta](/articles/creating-a-label)"
- "[Eliminar una etiqueta](/articles/deleting-a-label)"
- "[Aplicar etiquetas a las propuestas y solicitudes de extracción](/articles/applying-labels-to-issues-and-pull-requests)"
- "[Filtrar propuestas y solicitudes de extracción por etiquetas](/articles/filtering-issues-and-pull-requests-by-labels)"{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" %}
- "[Administrar etiquetas predeterminadas para los repositorios de tu organización](/articles/managing-default-labels-for-repositories-in-your-organization)"
{% endif %}

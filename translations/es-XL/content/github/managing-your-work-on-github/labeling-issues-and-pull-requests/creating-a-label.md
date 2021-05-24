---
title: Crear una etiqueta
intro: 'En los repositorios a los que tienes acceso de escritura, puedes crear etiquetas para organizar las propuestas y solicitudes de extracción.'
redirect_from:
  - /articles/creating-and-editing-labels-for-issues-and-pull-requests/
  - /articles/creating-a-label
  - /github/managing-your-work-on-github/creating-a-label
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---
{% tip %}

**Sugerencia:** También puedes crear una etiqueta en el menú desplegable Etiquetas dentro de una propuesta o solicitud de extracción.

{% endtip %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-issue-pr %}
{% data reusables.project-management.labels %}
4. A la derecha del campo de búsqueda, haz clic en **Nueva etiqueta**.
{% data reusables.project-management.name-label %}
{% data reusables.project-management.label-description %}
{% data reusables.project-management.label-color-randomizer %}
{% data reusables.project-management.create-label %}

### Leer más

- "[Acerca de las etiquetas](/articles/about-labels)"
- "[Aplicar etiquetas a las propuestas y solicitudes de extracción](/articles/applying-labels-to-issues-and-pull-requests)"
- "[Editar una etiqueta](/articles/editing-a-label)"
- "[Filtrar propuestas y solicitudes de extracción por etiquetas](/articles/filtering-issues-and-pull-requests-by-labels)"{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" %}
- "[Administrar etiquetas predeterminadas para los repositorios de tu organización](/articles/managing-default-labels-for-repositories-in-your-organization)"
{% endif %}

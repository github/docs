---
title: Cambiar la visibilidad del tablero de proyecto
intro: 'As an organization owner or project board admin, you can make a project board {% if currentVersion == "github-ae@latest" %}internal{% else %}public{% endif %} or private.'
redirect_from:
  - /articles/changing-project-board-visibility
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

{% data reusables.project-management.project-board-visibility %}

{% tip %}

**Tip:** When you make your project board {% if currentVersion == "github-ae@latest" %}internal{% else %}public{% endif %}, organization members are given read access by default. Puedes brindar a los miembros de la organización permisos de escritura o administración específicos al brindar acceso al tablero de proyecto a los equipos en los que están y al agregarlos en un tablero de proyecto como colaboradores. Para obtener más información, consulta "[Permisos de tablero de proyecto para una organización](/articles/project-board-permissions-for-an-organization)".

{% endtip %}

1. Navigate to the project board you want to make

{% if currentVersion == "github-ae@latest" %}internal{% else %}public{% endif %} or private.
{% data reusables.project-management.click-menu %}
{% data reusables.project-management.access-collaboration-settings %}
{% data reusables.project-management.choose-visibility %}
1. Haz clic en **Save ** (guardar).

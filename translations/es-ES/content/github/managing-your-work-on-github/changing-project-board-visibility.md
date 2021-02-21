---
title: Cambiar la visibilidad del tablero de proyecto
intro: 'Como propietario de una organización o administrador del tablero de proyecto, puedes convertir dicho tablero de proyecto en {% if currentVersion == "github-ae@latest" %}interno{% else %}público{% endif %} o privado.'
redirect_from:
  - /articles/changing-project-board-visibility
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

{% data reusables.project-management.project-board-visibility %}

{% tip %}

**Tip:** Cuando conviertas tu tablero de proyecto en {% if currentVersion == "github-ae@latest" %}interno{% else %}público{% endif %}, se les otorgará acceso de lectura a los miembros de la organización predeterminadamente. Puedes brindar a los miembros de la organización permisos de escritura o administración específicos al brindar acceso al tablero de proyecto a los equipos en los que están y al agregarlos en un tablero de proyecto como colaboradores. Para obtener más información, consulta "[Permisos de tablero de proyecto para una organización](/articles/project-board-permissions-for-an-organization)".

{% endtip %}

1. Navega hasta el tablero de proyecto que quieres convertir en

{% if currentVersion == "github-ae@latest" %}interno{% else %}público{% endif %} o privado.
{% data reusables.project-management.click-menu %}
{% data reusables.project-management.access-collaboration-settings %}
{% data reusables.project-management.choose-visibility %}
1. Haz clic en **Save ** (guardar).

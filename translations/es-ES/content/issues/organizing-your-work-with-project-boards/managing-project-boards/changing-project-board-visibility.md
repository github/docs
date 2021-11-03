---
title: Cambiar la visibilidad del tablero de proyecto
intro: 'Como propietario de una organización o administrador del tablero de proyecto, puedes convertir dicho tablero de proyecto en {% ifversion ghae %}interno{% else %}público{% endif %} o privado.'
redirect_from:
  - /github/managing-your-work-on-github/managing-project-boards/changing-project-board-visibility
  - /articles/changing-project-board-visibility
  - /github/managing-your-work-on-github/changing-project-board-visibility
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
shortTitle: Cambiar la visibilidad
---

{% data reusables.projects.project_boards_old %}

{% data reusables.project-management.project-board-visibility %}

{% tip %}

**Tip:** Cuando conviertas tu tablero de proyecto en {% ifversion ghae %}interno{% else %}público{% endif %}, se les otorgará acceso de lectura a los miembros de la organización predeterminadamente. Puedes brindar a los miembros de la organización permisos de escritura o administración específicos al brindar acceso al tablero de proyecto a los equipos en los que están y al agregarlos en un tablero de proyecto como colaboradores. Para obtener más información, consulta "[Permisos de tablero de proyecto para una organización](/articles/project-board-permissions-for-an-organization)".

{% endtip %}

1. Navega al tablero del proyecto que quieres hacer {% ifversion ghae %}interno{% else %}público{% endif %} o privado.
{% data reusables.project-management.click-menu %}
{% data reusables.project-management.access-collaboration-settings %}
{% data reusables.project-management.choose-visibility %}
1. Haz clic en **Save ** (guardar).

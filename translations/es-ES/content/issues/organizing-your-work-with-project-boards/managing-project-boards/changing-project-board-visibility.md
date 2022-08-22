---
title: 'Cambiar la visibilidad de los {% data variables.product.prodname_project_v1 %}'
intro: 'Como propietario de organización o administrador de {% data variables.projects.projects_v1_board %}, puedes hacer un {% data variables.projects.projects_v1_board %} {% ifversion ghae %}interno{% else %}público{% endif %} o privado.'
redirect_from:
  - /github/managing-your-work-on-github/managing-project-boards/changing-project-board-visibility
  - /articles/changing-project-board-visibility
  - /github/managing-your-work-on-github/changing-project-board-visibility
versions:
  feature: projects-v1
topics:
  - Pull requests
shortTitle: Cambiar la visibilidad
allowTitleToDifferFromFilename: true
---

{% data reusables.projects.project_boards_old %}

{% data reusables.project-management.project-board-visibility %}

{% note %}

**{% ifversion classic-project-visibility-permissions %}Notes{% else %}Note{% endif %}:** {% ifversion classic-project-visibility-permissions %}

* {% data reusables.projects.owners-can-limit-visibility-permissions %}
* {% endif %}When you make your {% data variables.projects.projects_v1_board %} {% ifversion ghae %}internal{% else %}public{% endif %}, organization members are given read access by default. Puedes otorgar permisos de escritura o administración a miembros específicos de la organización si les das acceso a los equipos en los que se encuentran, agregándolos al {% data variables.projects.projects_v1_board %} como colaborador. Para obtener más información, consulta la sección "[Permisos de los {% data variables.product.prodname_project_v1_caps %} para una organización](/articles/project-board-permissions-for-an-organization)".

{% endnote %}

1. Navega al tablero del proyecto que quieres hacer {% ifversion ghae %}interno{% else %}público{% endif %} o privado.
{% data reusables.project-management.click-menu %}
{% data reusables.project-management.access-collaboration-settings %}
{% data reusables.project-management.choose-visibility %}
1. Haz clic en **Save ** (guardar).

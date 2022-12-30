---
title: 'Cambio de la visibilidad de {% data variables.product.prodname_project_v1 %}'
intro: 'Como propietario de la organización o administrador de {% data variables.projects.projects_v1_board %}, puedes crear una instancia de {% data variables.projects.projects_v1_board %} {% ifversion ghae %}interna{% else %}pública{% endif %} o privada.'
redirect_from:
  - /github/managing-your-work-on-github/managing-project-boards/changing-project-board-visibility
  - /articles/changing-project-board-visibility
  - /github/managing-your-work-on-github/changing-project-board-visibility
versions:
  feature: projects-v1
topics:
  - Pull requests
shortTitle: Change visibility
allowTitleToDifferFromFilename: true
ms.openlocfilehash: 445675ee14c1d1fb47ded4321ae6ac8816fa6d6f
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 10/25/2022
ms.locfileid: '148109914'
---
{% data reusables.projects.project_boards_old %}

{% data reusables.project-management.project-board-visibility %}

{% note %}

**{% ifversion classic-project-visibility-permissions %}Notas{% else %}Nota{% endif %}:** {% ifversion classic-project-visibility-permissions %}

* {% data reusables.projects.owners-can-limit-visibility-permissions %}
* {% endif %}Al crear la instancia de {% data variables.projects.projects_v1_board %} {% ifversion ghae %}interna{% else %}pública{% endif %}, los miembros de la organización reciben acceso de lectura de forma predeterminada. Puedes asignar permisos de escritura o administración a miembros específicos de la organización si asignas acceso a los equipos en los que están, o bien si los agregas a la instancia de {% data variables.projects.projects_v1_board %} como colaboradores. Para más información, consulta "[Permisos de {% data variables.product.prodname_project_v1_caps %} para una organización](/articles/project-board-permissions-for-an-organization)".

{% endnote %}

1. Vaya al panel de proyecto que quiera convertir en {% ifversion ghae %}interno{% else %}público{% endif %} o privado.
{% data reusables.project-management.click-menu %} {% data reusables.project-management.access-collaboration-settings %} {% data reusables.project-management.choose-visibility %}
1. Haga clic en **Save**(Guardar).

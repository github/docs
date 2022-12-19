---
title: 'Deshabilitación de {% ifversion projects-v2 %}proyectos{% else %}paneles de proyecto{% endif %} en la organización'
intro: 'Los propietarios de la organización pueden desactivar instancias de {% data variables.projects.projects_v2 %} {% ifversion projects-v2 %}para toda la organización, instancias de {% data variables.projects.projects_v1_boards %} para toda la organización e instancias de {% data variables.projects.projects_v1_boards %} de nivel de repositorio {% else %}paneles de proyecto para toda la organización y paneles de proyecto de repositorio{% endif %} en una organización.'
redirect_from:
  - /github/managing-your-work-on-github/managing-project-boards/disabling-project-boards-in-your-organization
  - /articles/disabling-project-boards-in-your-organization
  - /github/managing-your-work-on-github/disabling-project-boards-in-your-organization
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
shortTitle: Disable projects
allowTitleToDifferFromFilename: true
ms.openlocfilehash: e1e2aed1e7c689bee83dabc4a6750f8976206f4a
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '147423328'
---
Una vez que inhabilites tableros de proyecto que se usan en toda la organización, ya no se podrán crear nuevos tableros de proyecto a nivel de la organización, y ya no se podrá acceder a ningún tablero de proyecto existente a nivel de la organización en su URL anterior. Los tableros de proyecto en los repositorios de la organización no se ven afectados. {% ifversion projects-v2 %}Estos valores se aplican a {% data variables.projects.projects_v2 %} y {% data variables.projects.projects_v1_boards %}.{% endif %}

Una vez que inhabilites tableros de proyecto de repositorios en una organización, ya no se podrán crear nuevos tableros de proyecto en ningún repositorio de la organización, y ya no se podrá acceder a ningún tablero de proyecto de los repositorios existentes en la organización en sus URL anteriores. Los tableros de proyecto a nivel de la organización no se ven afectados.


Al deshabilitar los paneles de proyecto, ya no verá información del panel de proyecto en escalas de tiempo ni [registros de auditoría](/organizations/keeping-your-organization-secure/reviewing-the-audit-log-for-your-organization).


{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-5658 %}
1. En la sección de "Planeación de código y automatización" de la barra lateral, haz clic en **{% octicon "table" aria-label="The table icon" %} Proyectos**.
{% endif %}
1. Decide si deseas inhabilitar los tableros de proyecto que se usan en toda la organización, los tableros de proyecto de los repositorios de la organización, o ambos. Luego, en "Proyectos":
    - Para deshabilitar los paneles de proyecto que se usan en toda la organización, anula la selección de **Habilitar proyectos para la organización**.
    - Para deshabilitar los paneles de proyecto de los repositorios en la organización, anula la selección de **Habilitar proyectos para todos los repositorios**.
  ![Casillas para deshabilitar los proyectos para una organización o para todos los repositorios de una organización](/assets/images/help/projects/disable-org-projects-checkbox.png)
1. Haga clic en **Save**(Guardar).

{% data reusables.organizations.disable_project_board_results %}

## Información adicional

{% ifversion projects-v2 %}- "[Acerca de {% data variables.product.prodname_projects_v2 %}](/issues/planning-and-tracking-with-projects/learning-about-projects/about-projects)"{% endif %}
- "[Acerca de {% data variables.product.prodname_projects_v1 %}](/articles/about-project-boards)"
- "[Cierre de una instancia de {% data variables.projects.projects_v1_board %}](/articles/closing-a-project-board)"
- "[Eliminación de una instancia de {% data variables.projects.projects_v1_board %}](/articles/deleting-a-project-board)"
- "[Deshabilitación de {% data variables.projects.projects_v1_boards %} en un repositorio](/articles/disabling-project-boards-in-a-repository)"

---
title: 'Vinculación de un repositorio a una instancia de {% data variables.product.prodname_project_v1 %}'
intro: 'Puedes vincular un repositorio a la instancia de {% data variables.projects.projects_v1_board %} de la cuenta personal o de la organización.'
redirect_from:
  - /github/managing-your-work-on-github/managing-project-boards/linking-a-repository-to-a-project-board
  - /articles/linking-a-repository-to-a-project-board
  - /github/managing-your-work-on-github/linking-a-repository-to-a-project-board
versions:
  feature: projects-v1
topics:
  - Pull requests
shortTitle: Link repository to board
allowTitleToDifferFromFilename: true
ms.openlocfilehash: d0893b64551be80577547b9791e7a7ed6a432de0
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 10/25/2022
ms.locfileid: '148110080'
---
{% data reusables.projects.project_boards_old %}

Cualquiera con permisos de escritura en una instancia de {% data variables.projects.projects_v1_board %} puede vincular repositorios propiedad de esa organización o cuenta personal a la instancia de {% data variables.projects.projects_v1_board %}. Para más información, consulta "[Permisos de {% data variables.product.prodname_project_v1_caps %} para una organización](/articles/project-board-permissions-for-an-organization/)" o "[Niveles de permisos para instancias de {% data variables.product.prodname_projects_v1 %} propiedad del usuario](/articles/permission-levels-for-user-owned-project-boards/)".

{% data reusables.project-management.link-repos-to-project-board %} Puedes agregar propuestas y solicitudes de extracción desde cualquier repositorio no vinculado escribiendo la URL de la propuesta o de la solicitud de extracción en una tarjeta. Para más información, consulta "[Adición de incidencias y solicitudes de incorporación de cambios a una instancia de {% data variables.product.prodname_project_v1 %}](/articles/adding-issues-and-pull-requests-to-a-project-board)".

1. Navega a la instancia de {% data variables.projects.projects_v1_board %} en la que quieras vincular un repositorio.
{% data reusables.project-management.click-menu %} {% data reusables.project-management.access-collaboration-settings %}
4. En la barra lateral de la izquierda, haga clic en **Linked repositories**.
![Opción del menú Linked repositories en la barra lateral izquierda](/assets/images/help/projects/project-board-linked-repositories-setting.png)
5. Haga clic en **Link a repository**.
![Botón Link a repository en la pestaña Linked repositories](/assets/images/help/projects/link-repository-button.png)
6. Busca el repositorio que quieras vincular.
![Campo de búsqueda en la ventana Link a repository](/assets/images/help/projects/search-to-link-repository.png)
7. Haga clic en **Link**. Para desvincular, haga clic en **Unlink**.
![Botón Link](/assets/images/help/projects/link-button.png)

{% note %}

**Nota:** Para poder vincular un repositorio a la instancia de {% data variables.projects.projects_v1_board %} propiedad de la organización o del usuario, es necesario habilitar las incidencias en el repositorio. Es decir, el repositorio tiene una pestaña de "Propuestas" (en los repositorios bifurcados, las propuestas se inhabilitan predeterminadamente).  Para obtener información sobre cómo habilitar o deshabilitar las incidencias para un repositorio, vea "[Deshabilitación de incidencias para un repositorio](/github/managing-your-work-on-github/disabling-issues)".

{% endnote %}

## Información adicional

- "[Acerca de {% data variables.product.prodname_projects_v1 %}](/articles/about-project-boards)"

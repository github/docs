---
title: 'Filtrado de tarjetas en una instancia de {% data variables.product.prodname_project_v1 %}'
intro: 'Puedes filtrar las tarjetas de una instancia de {% data variables.projects.projects_v1_board %} para buscar tarjetas específicas o ver un subconjunto de las tarjetas.'
redirect_from:
  - /github/managing-your-work-on-github/tracking-the-progress-of-your-work-with-project-boards/filtering-cards-on-a-project-board
  - /articles/filtering-cards-on-a-project-board
  - /github/managing-your-work-on-github/filtering-cards-on-a-project-board
versions:
  feature: projects-v1
topics:
  - Pull requests
shortTitle: 'Filter cards on {% data variables.product.prodname_project_v1 %}'
allowTitleToDifferFromFilename: true
ms.openlocfilehash: f203785a6fc18dc5f67b2ae62934aa10c2f6e8b8
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 10/25/2022
ms.locfileid: '148110033'
---
{% data reusables.projects.project_boards_old %}

En una tarjeta, puedes hacer clic en cualquier usuario asignado, hito o etiqueta para filtrar la instancia de {% data variables.projects.projects_v1_board %} por ese calificador. Para limpiar la búsqueda, puedes dar clic en el mismo asignado, hito o etiqueta nuevamente.

También puedes usar la barra de búsqueda "Filtrar tarjetas" de la parte superior de cada instancia de {% data variables.projects.projects_v1_board %} para buscar tarjetas. Puedes filtrar tarjetas usando los siguientes calificadores de búsqueda en cualquier combinación, o simplemente escribir el texto que deseas buscar.

- Filtrado de tarjetas por creador mediante `author:USERNAME`
- Filtrado de tarjetas por usuario asignado mediante `assignee:USERNAME` o `no:assignee`
- Filtrado de tarjetas por etiqueta mediante `label:LABEL`, `label:"MULTI-WORD LABEL NAME"` o `no:label`
- Filtrado por hito mediante `milestone:MY-MILESTONE`
- Filtrado de tarjetas por estado mediante `state:open`, `state:closed` o `state:merged`
- Filtrado por estado de revisión mediante `review:none`, `review:required`, `review:approved` o `review:changes_requested`
- Filtrado por estado de comprobación mediante `status:pending`, `status:success` o `status:failure`
- Filtrado de tarjetas por tipo mediante `type:issue`, `type:pr` o `type:note`
- Filtrado de tarjetas por estado y tipo mediante `is:open`, `is:closed` o `is:merged`; y `is:issue`, `is:pr` o `is:note`
- Filtrado de tarjetas por incidencias vinculadas a una solicitud de incorporación de cambios mediante una referencia de cierre con `linked:pr`
- Filtrado de tarjetas por repositorio en una instancia de {% data variables.projects.projects_v1_board %} de toda la organización mediante `repo:ORGANIZATION/REPOSITORY`

1. Navega a la instancia de {% data variables.projects.projects_v1_board %} que contiene las tarjetas que quieras filtrar.
2. Sobre las columnas de las tarjetas del proyecto, haz clic en la barra de búsqueda "Filtrar tarjetas" y escribe la consulta de búsqueda para filtrar las tarjetas.
![Barra de búsqueda Filtrar ](/assets/images/help/projects/filter-card-search-bar.png)

{% tip %}

**Sugerencia:** Puede arrastrar y colocar las tarjetas filtradas o usar los métodos abreviados de teclado para moverlas entre las columnas. {% data reusables.project-management.for-more-info-project-keyboard-shortcuts %}

{% endtip %}

## Información adicional

- "[Acerca de {% data variables.product.prodname_projects_v1 %}](/articles/about-project-boards)"
- "[Adición de incidencias y solicitudes de incorporación de cambios a una instancia de {% data variables.product.prodname_project_v1 %}](/articles/adding-issues-and-pull-requests-to-a-project-board)"
- "[Adición de notas a una instancia de {% data variables.product.prodname_project_v1 %}](/articles/adding-notes-to-a-project-board)"

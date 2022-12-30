---
title: 'Acerca de {% data variables.product.prodname_projects_v1 %}'
intro: '{% data variables.product.prodname_projects_v1_caps %} en {% data variables.product.product_name %} te ayudan a organizar y priorizar el trabajo. Puedes crear instancias de {% data variables.projects.projects_v1_boards %} para un trabajo con características específicas, hojas de ruta completas y hasta listas de comprobación de versiones. Con {% data variables.product.prodname_projects_v1 %}, tienes la flexibilidad de crear flujos de trabajo personalizados adaptados a tus necesidades.'
redirect_from:
  - /github/managing-your-work-on-github/managing-project-boards/about-project-boards
  - /articles/about-projects
  - /articles/about-project-boards
  - /github/managing-your-work-on-github/about-project-boards
versions:
  feature: projects-v1
topics:
  - Pull requests
allowTitleToDifferFromFilename: true
ms.openlocfilehash: c14ee749a2e97bb9ef608e1b2d548098f18af0d0
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107625'
---
{% data reusables.projects.project_boards_old %}

Las instancias de {% data variables.projects.projects_v1_boards_caps %} están formadas por incidencias, solicitudes de incorporación de cambios y notas que se categorizan como tarjetas en las columnas que elijas. Puedes arrastrar y soltar o usar los atajos del teclado para reordenar las tarjetas dentro de una columna, mover tarjetas de columna a columna y cambiar el orden de las columnas.

Las tarjetas de {% data variables.projects.projects_v1_board_caps %} contienen metadatos relevantes para las incidencias y las solicitudes de incorporación de cambios, como etiquetas, usuarios asignados, el estado y quién las ha abierto. {% data reusables.project-management.edit-in-project %}

Puedes crear notas en las columnas que sirvan como recordatorios de tareas, referencias a incidencias y solicitudes de incorporación de cambios desde cualquier repositorio de {% data variables.location.product_location %}, o bien para agregar información relacionada con el {% data variables.projects.projects_v1_board %}. Puedes crear una tarjeta de referencia para otra instancia de {% data variables.projects.projects_v1_board %} si agregas un enlace a una nota. Si la nota no es suficiente para tus necesidades, puedes convertirla en una propuesta. Para más información sobre cómo convertir notas en incidencias, consulta "[Adición de notas a una instancia de {% data variables.product.prodname_project_v1 %}](/articles/adding-notes-to-a-project-board)".

Tipos de tableros de proyecto:

- **Las instancias de {% data variables.projects.projects_v1_board %}** pueden contener incidencias y solicitudes de incorporación de cambios de cualquier repositorio personal.
- **Las instancias de {% data variables.projects.projects_v1_board %} para toda la organización** pueden contener incidencias y solicitudes de incorporación de cambios de cualquier repositorio que pertenezca a una organización.  {% data reusables.project-management.link-repos-to-project-board %} Para más información, consulta "[Vinculación de un repositorio a una instancia de {% data variables.product.prodname_project_v1 %}](/articles/linking-a-repository-to-a-project-board)".
- **Las instancias de {% data variables.projects.projects_v1_board %} de repositorio** tienen como ámbito incidencias y solicitudes de incorporación de cambios dentro de un único repositorio. También pueden incluir notas que hacen referencia a las propuestas y las solicitudes de extracción en otros repositorios.

## Creación y visualización de {% data variables.projects.projects_v1_boards %}

A fin de crear una instancia de {% data variables.projects.projects_v1_board %} para la organización, debes ser miembro de la organización. Los propietarios de la organización y los usuarios con permisos de administrador de {% data variables.projects.projects_v1_board %} pueden personalizar el acceso a la instancia de {% data variables.projects.projects_v1_board %}.

{% ifversion classic-project-visibility-permissions %}{% data reusables.projects.owners-can-limit-visibility-permissions %}{% endif %}

Si una instancia de {% data variables.projects.projects_v1_board %} propiedad de la organización incluye incidencias o solicitudes de incorporación de cambios de un repositorio del que no tienes permiso para ver, la tarjeta será censurada.  Para más información, consulta "[Permisos de {% data variables.product.prodname_project_v1_caps %} para una organización](/articles/project-board-permissions-for-an-organization)".

En la vista de actividad se muestra el historial reciente de la instancia de {% data variables.projects.projects_v1_board %}, como las tarjetas que alguien ha creado o movido entre las columnas. Para acceder a la vista de actividad, haz clic en **Menú** y desplázate hacia abajo.

Para buscar tarjetas específicas en una instancia de {% data variables.projects.projects_v1_board %} o ver un subconjunto de las tarjetas, puedes filtrar las tarjetas de {% data variables.projects.projects_v1_board %}. Para más información, consulta "[Filtrado de tarjetas en una instancia de {% data variables.product.prodname_project_v1 %}](/articles/filtering-cards-on-a-project-board)".

Para simplificar el flujo de trabajo y mantener las tareas completadas fuera de la instancia de {% data variables.projects.projects_v1_board %}, puedes archivar tarjetas. Para más información, consulta "[Archivado de tarjetas en una instancia de {% data variables.product.prodname_project_v1 %}](/articles/archiving-cards-on-a-project-board)".

Si ha completado todas las tareas de {% data variables.projects.projects_v1_board %} o ya no necesita usar los datos {% data variables.projects.projects_v1_board %}, puede cerrar los datos {% data variables.projects.projects_v1_board %}. Para más información, consulta "[Cierre de una instancia de {% data variables.product.prodname_project_v1 %}](/articles/closing-a-project-board)".

También puedes [deshabilitar {% data variables.projects.projects_v1_boards %} en un repositorio](/articles/disabling-project-boards-in-a-repository) o [deshabilitar {% data variables.projects.projects_v1_boards %} en la organización](/articles/disabling-project-boards-in-your-organization), si prefieres realizar el seguimiento del trabajo de otra manera.

{% data reusables.project-management.project-board-import-with-api %}

## Plantillas para {% data variables.projects.projects_v1_boards %}

Puedes usar plantillas para configurar rápidamente una nueva instancia de {% data variables.projects.projects_v1_board %}. Al usar una plantilla para crear una instancia de {% data variables.projects.projects_v1_board %}, el nuevo panel incluirá columnas, así como tarjetas con sugerencias para usar {% data variables.product.prodname_projects_v1 %}. También puedes elegir una plantilla con la automatización ya configurada.

| Plantilla | Descripción |
| --- | --- |
| Kanban básico | Hace un seguimiento de tus tareas con las columnas Tareas pendientes, En progreso y Hecho |
| Kanban automatizado | Las tarjetas se mueven automáticamente entre las columnas Tareas pendientes, En progreso y Hecho | 
| Kanba automatizado con revisión | Las tarjetas se mueven automáticamente entre las columnas Tareas pendientes, En progreso y Hecho, con disparos adicionales para el estado de la revisión de solicitud de extracción |
| Evaluación de error | Evalúa y prioriza errores con las columnas Tareas pendientes, Prioridad alta, Prioridad baja y Cerrado |

Para más información sobre la automatización de {% data variables.product.prodname_projects_v1 %}, consulta "[Acerca de la automatización de {% data variables.product.prodname_projects_v1 %}](/articles/about-automation-for-project-boards)".

![{% data variables.product.prodname_project_v1 %} con plantilla Kanban básica](/assets/images/help/projects/project-board-basic-kanban-template.png)

{% data reusables.project-management.copy-project-boards %}

## Información adicional

- "[Creación de una instancia de {% data variables.product.prodname_project_v1 %}](/articles/creating-a-project-board)"
- "[Edición de una instancia de {% data variables.product.prodname_project_v1 %}](/articles/editing-a-project-board)"{% ifversion fpt or ghec %}
- "[Copia de una instancia de {% data variables.product.prodname_project_v1 %}](/articles/copying-a-project-board)"{% endif %}
- "[Adición de incidencias y solicitudes de incorporación de cambios a una instancia de {% data variables.product.prodname_project_v1 %}](/articles/adding-issues-and-pull-requests-to-a-project-board)"
- "[Permisos de {% data variables.product.prodname_project_v1_caps %} para una organización](/articles/project-board-permissions-for-an-organization)".
- "[Métodos abreviados de teclado](/articles/keyboard-shortcuts/#project-boards)"

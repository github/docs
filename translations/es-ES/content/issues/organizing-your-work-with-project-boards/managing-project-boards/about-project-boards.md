---
title: 'Acerca de las {% data variables.product.prodname_projects_v1 %}'
intro: 'Los {% data variables.product.prodname_projects_v1_caps %} en {% data variables.product.product_name %} te permiten organizar y priorizar tu trabajo. Puedes crear {% data variables.projects.projects_v1_boards %} para trabajo de características específicas, itinerarios integrales o incluso listas de verificación de lanzamientos. Con {% data variables.product.prodname_projects_v1 %}, tienes la flexibilidad de crear flujos de trabajo personalizados que se acopñlen a tus necesidades.'
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
---

{% data reusables.projects.project_boards_old %}

Los {% data variables.projects.projects_v1_boards_caps %} se componen de propuestas, solicitudes de cambios y notas que se categorizan como tarjetas en las columnas de tu elección. Puedes arrastrar y soltar o usar los atajos del teclado para reordenar las tarjetas dentro de una columna, mover tarjetas de columna a columna y cambiar el orden de las columnas.

Las tarjetas de los {% data variables.projects.projects_v1_board_caps %} contienen metadatos relevantes para las propuestas y solicitudes de cambios, como etiquetas, asignados, el estado y quién la abrió. {% data reusables.project-management.edit-in-project %}

Puedes crear notas dentro de las columnas para que sirvan como recordatorios de tareas, referencias a las propuestas y solicitudes de cambio de cualquier repositorio en {% data variables.product.product_location %} o para agregar la información relacionada con el {% data variables.projects.projects_v1_board %}. Puedes crear una tarjeta de referencia para otro {% data variables.projects.projects_v1_board %} si agregas un enlace a una nota. Si la nota no es suficiente para tus necesidades, puedes convertirla en una propuesta. Para obtener más información sobre cómo convertir las notas en propuestas, consulta la sección "[Agregar notas a un {% data variables.product.prodname_project_v1 %}](/articles/adding-notes-to-a-project-board)".

Tipos de tableros de proyecto:

- **{% data variables.projects.projects_v1_board %} perteneciente a un usuario** puede contener propuestas y solicitudes de cambio de cualquier repositorio personal.
- **{% data variables.projects.projects_v1_board %} de toda la organización** puede contener propuestas y solicitudes de cambio de cualquier repositorio que le pertenezca a una organización.  {% data reusables.project-management.link-repos-to-project-board %} Para obtener más información, consulta la sección "[Enlazar un repositorio a un {% data variables.product.prodname_project_v1 %}](/articles/linking-a-repository-to-a-project-board)".
- **{% data variables.projects.projects_v1_board %} de repositorio** se le da un alcance para propuestas y solicitudes de cambios dentro de un repositorio específico. También pueden incluir notas que hacen referencia a las propuestas y las solicitudes de extracción en otros repositorios.

## Crear y ver los {% data variables.projects.projects_v1_boards %}

Para crear un {% data variables.projects.projects_v1_board %} de organización, debes ser miembro de ella. Los propietarios de las organizaciones y las personas con permisos administrativos de {% data variables.projects.projects_v1_board %} pueden personalizar el acceso al {% data variables.projects.projects_v1_board %}.

Si un {% data variables.projects.projects_v1_board %} perteneciente a una organización incluye propuestas o solicitudes de cambio de un repositorio en el cual no tienes permisos de visualización, la tarjeta se redactará.  Para obtener más información, consulta la sección "[Permisos de los {% data variables.product.prodname_project_v1_caps %} para una organización](/articles/project-board-permissions-for-an-organization)".

La vista de actividad muestra el historial reciente del {% data variables.projects.projects_v1_board %}, tal como las tarjetas que haya creado alguien o movido entre columnas. Para acceder a la vista actividad, haz clic en **Menú** y desplázate hacia abajo.

Para encontrar tarjetas específicas en un {% data variables.projects.projects_v1_board %} o vista de un subconjunto de las tarjetas, puedes filtrar las tarjetas de {% data variables.projects.projects_v1_board %}. Para obtener más información, consulta la sección "[Filtrar las tarjetas en un {% data variables.product.prodname_project_v1 %}](/articles/filtering-cards-on-a-project-board)".

Para simplificar tu flujo de trabajo y mantener las tareas completadas fuera de tu {% data variables.projects.projects_v1_board %}, puedes archivarlas. Para obtener más información, consulta la sección "[Archivar las tarjetas en un {% data variables.product.prodname_project_v1 %}](/articles/archiving-cards-on-a-project-board)".

Si completaste todas las tareas de tu {% data variables.projects.projects_v1_board %} o si ya no necesitas utilizar tu {% data variables.projects.projects_v1_board %}, puedes cerrar el {% data variables.projects.projects_v1_board %}. Para obtener más información, consulta la sección "[Cerrar un {% data variables.product.prodname_project_v1 %}](/articles/closing-a-project-board)"

También puedes [inhabilitar los {% data variables.projects.projects_v1_boards %} en un repositorio](/articles/disabling-project-boards-in-a-repository) o [inhabilitar los {% data variables.projects.projects_v1_boards %} en tu organización](/articles/disabling-project-boards-in-your-organization) si prefieres rastrear tu trabajo de otra forma.

{% data reusables.project-management.project-board-import-with-api %}

## Plantillas para los {% data variables.projects.projects_v1_boards %}

Puedes utilizar plantillas para configurar un {% data variables.projects.projects_v1_board %} nuevo. Cuando utilizas una plantilla para crear un {% data variables.projects.projects_v1_board %}, tu tablero nuevo incluirá columnas así como tarjetas con consejos para utilizar {% data variables.product.prodname_projects_v1 %}. También puedes elegir una plantilla con la automatización ya configurada.

| Plantilla                       | Descripción                                                                                                                                                                         |
| ------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Kanban básico                   | Hace un seguimiento de tus tareas con las columnas Tareas pendientes, En progreso y Hecho                                                                                           |
| Kanban automatizado             | Las tarjetas se mueven automáticamente entre las columnas Tareas pendientes, En progreso y Hecho                                                                                    |
| Kanba automatizado con revisión | Las tarjetas se mueven automáticamente entre las columnas Tareas pendientes, En progreso y Hecho, con disparos adicionales para el estado de la revisión de solicitud de extracción |
| Evaluación de error             | Evalúa y prioriza errores con las columnas Tareas pendientes, Prioridad alta, Prioridad baja y Cerrado                                                                              |

Para obtener más información sobre cómo automatizar los {% data variables.product.prodname_projects_v1 %}, consulta la sección "[Acerca de la automatización para los {% data variables.product.prodname_projects_v1 %}](/articles/about-automation-for-project-boards)".

![{% data variables.product.prodname_project_v1 %} con una plantilla básica de kanban](/assets/images/help/projects/project-board-basic-kanban-template.png)

{% data reusables.project-management.copy-project-boards %}

## Leer más

- "[Crear un {% data variables.product.prodname_project_v1 %}](/articles/creating-a-project-board)"
- "[Editar un {% data variables.product.prodname_project_v1 %}](/articles/editing-a-project-board)"{% ifversion fpt or ghec %}
- "[Copiar un {% data variables.product.prodname_project_v1 %}](/articles/copying-a-project-board)"{% endif %}
- "[Agregar propuestas y solicitudes de cambios a un {% data variables.product.prodname_project_v1 %}](/articles/adding-issues-and-pull-requests-to-a-project-board)"
- "[Permisos de un {% data variables.product.prodname_project_v1_caps %} para una organización](/articles/project-board-permissions-for-an-organization)"
- "[Atajos del teclado](/articles/keyboard-shortcuts/#project-boards)"

---
title: 'Acerca de las {% data variables.product.prodname_projects_v1 %}'
intro: '{% data variables.product.prodname_projects_v1_caps %} on {% data variables.product.product_name %} help you organize and prioritize your work. You can create {% data variables.projects.projects_v1_boards %} for specific feature work, comprehensive roadmaps, or even release checklists. With {% data variables.product.prodname_projects_v1 %}, you have the flexibility to create customized workflows that suit your needs.'
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

{% data variables.projects.projects_v1_boards_caps %} are made up of issues, pull requests, and notes that are categorized as cards in columns of your choosing. Puedes arrastrar y soltar o usar los atajos del teclado para reordenar las tarjetas dentro de una columna, mover tarjetas de columna a columna y cambiar el orden de las columnas.

{% data variables.projects.projects_v1_board_caps %} cards contain relevant metadata for issues and pull requests, like labels, assignees, the status, and who opened it. {% data reusables.project-management.edit-in-project %}

You can create notes within columns to serve as task reminders, references to issues and pull requests from any repository on {% data variables.product.product_location %}, or to add information related to the {% data variables.projects.projects_v1_board %}. You can create a reference card for another {% data variables.projects.projects_v1_board %} by adding a link to a note. Si la nota no es suficiente para tus necesidades, puedes convertirla en una propuesta. For more information on converting notes to issues, see "[Adding notes to a {% data variables.product.prodname_project_v1 %}](/articles/adding-notes-to-a-project-board)."

Tipos de tableros de proyecto:

- **User-owned {% data variables.projects.projects_v1_board %}** can contain issues and pull requests from any personal repository.
- **Organization-wide {% data variables.projects.projects_v1_board %}** can contain issues and pull requests from any repository that belongs to an organization.  {% data reusables.project-management.link-repos-to-project-board %} For more information, see "[Linking a repository to a {% data variables.product.prodname_project_v1 %}](/articles/linking-a-repository-to-a-project-board)."
- **Repository {% data variables.projects.projects_v1_board %}** are scoped to issues and pull requests within a single repository. También pueden incluir notas que hacen referencia a las propuestas y las solicitudes de extracción en otros repositorios.

## Creating and viewing {% data variables.projects.projects_v1_boards %}

To create a {% data variables.projects.projects_v1_board %} for your organization, you must be an organization member. Organization owners and people with {% data variables.projects.projects_v1_board %} admin permissions can customize access to the {% data variables.projects.projects_v1_board %}.

If an organization-owned {% data variables.projects.projects_v1_board %} includes issues or pull requests from a repository that you don't have permission to view, the card will be redacted.  For more information, see "[{% data variables.product.prodname_project_v1_caps %} permissions for an organization](/articles/project-board-permissions-for-an-organization)."

The activity view shows the {% data variables.projects.projects_v1_board %}'s recent history, such as cards someone created or moved between columns. Para acceder a la vista actividad, haz clic en **Menú** y desplázate hacia abajo.

To find specific cards on a {% data variables.projects.projects_v1_board %} or view a subset of the cards, you can filter {% data variables.projects.projects_v1_board %} cards. For more information, see "[Filtering cards on a {% data variables.product.prodname_project_v1 %}](/articles/filtering-cards-on-a-project-board)."

To simplify your workflow and keep completed tasks off your {% data variables.projects.projects_v1_board %}, you can archive cards. For more information, see "[Archiving cards on a {% data variables.product.prodname_project_v1 %}](/articles/archiving-cards-on-a-project-board)."

If you've completed all of your {% data variables.projects.projects_v1_board %} tasks or no longer need to use your {% data variables.projects.projects_v1_board %}, you can close the {% data variables.projects.projects_v1_board %}. Para obtener más información, consulta la sección "[Cerrar un {% data variables.product.prodname_project_v1 %}](/articles/closing-a-project-board)"

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
- "[{% data variables.product.prodname_project_v1_caps %} permissions for an organization](/articles/project-board-permissions-for-an-organization)"
- "[Atajos del teclado](/articles/keyboard-shortcuts/#project-boards)"

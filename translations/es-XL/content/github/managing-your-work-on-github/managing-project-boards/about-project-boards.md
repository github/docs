---
title: Acerca de los tableros de proyecto
intro: 'Los tableros de proyecto en {% data variables.product.product_name %} te ayudan a organizar y priorizar tu trabajo. Puedes crear tableros de proyecto para un trabajo con características específicas, hojas de ruta completas y hasta listas de verificación de lanzamientos. Con los tableros de proyecto, tienes la flexibilidad de crear flujos de trabajo personalizados que se adapten a tus necesidades.'
redirect_from:
  - /articles/about-projects/
  - /articles/about-project-boards
  - /github/managing-your-work-on-github/about-project-boards
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Pull requests
---
Los tableros de proyecto están compuestos por propuestas, solicitudes de extracción y notas que se categorizan como tarjetas en columnas a tu elección. Puedes arrastrar y soltar o usar los atajos del teclado para reordenar las tarjetas dentro de una columna, mover tarjetas de columna a columna y cambiar el orden de las columnas.

Las tarjetas del tablero de proyecto contienen metadatos relevantes para las propuestas y las solicitudes de extracción, como etiquetas, asignatarios, el estado y quién la abrió. {% data reusables.project-management.edit-in-project %}

También puedes crear notas dentro de las columnas para servir como recordatorios de tarea, referencias a propuestas y solicitudes de extracción desde cualquier repositorio en {% data variables.product.product_name %}, o agregar información relacionada con tu tablero de proyecto. Puedes crear una tarjeta de referencia para otro tablero de proyecto agregando un enlace a una nota. Si la nota no es suficiente para tus necesidades, puedes convertirla en una propuesta. Para obtener más información sobre cómo convertir las notas del tablero de proyecto en propuestas, consulta "[Agregar notas a un tablero de proyecto](/articles/adding-notes-to-a-project-board)".

Tipos de tableros de proyecto:

- Los **tableros de proyecto propiedad del usuario** pueden contener propuestas y solicitudes de extracción de cualquier repositorio personal.
- Los **tableros de proyecto para toda la organización** pueden contener propuestas y solicitudes de extracción de cualquier repositorio que pertenezca a una organización.  {% data reusables.project-management.link-repos-to-project-board %} Para obtener más información, consulta "[Enlazar un repositorio a un tablero de proyecto](/articles/linking-a-repository-to-a-project-board)".
- Los **tableros de proyecto para un repositorio** están limitados a las propuestas y las solicitudes de extracción dentro de un único repositorio. También pueden incluir notas que hacen referencia a las propuestas y las solicitudes de extracción en otros repositorios.

### Crear y ver tableros de proyecto

Para crear un tablero de proyecto para tu organización, debes ser un miembro de la organización. Los propietarios de la organización y las personas con permisos de administrador para el tablero de proyecto pueden personalizar el acceso al tablero de proyecto.

Si un tablero de proyecto propiedad de la organización incluye propuestas o solicitudes de extracción de un repositorio del que no tienes permiso para ver, la tarjeta será censurada.  Para obtener más información, consulta "[Permisos de tablero de proyecto para una organización](/articles/project-board-permissions-for-an-organization)".

La vista actividad muestra el historial reciente del tablero de proyecto, como las tarjetas que alguien creó o movió entre las columnas. Para acceder a la vista actividad, haz clic en **Menú** y desplázate hacia abajo.

Para encontrar tarjetas específicas en un tablero de proyecto o para ver un subconjunto de tarjetas, puedes filtrar las tarjetas del tablero de proyecto. Para obtener más información, consulta "[Filtrar tarjetas en un tablero de proyecto](/articles/filtering-cards-on-a-project-board)".

Para simplificar tu flujo de trabajo y para mantener las tareas completadas al margen de tu tablero de proyecto, puedes archivar tarjetas. Para obtener más información, consulta "[Archivar tarjetas en un tablero de proyecto](/articles/archiving-cards-on-a-project-board)".

Si has completado todas las tareas de tu tablero de proyecto o ya no necesitas usar tu tablero de proyecto, puedes cerrar el tablero de proyecto. Para obtener más información, consulta "[Cerrar un tablero de proyecto](/articles/closing-a-project-board)".

También puedes [desactivar tableros de proyecto en un repositorio](/articles/disabling-project-boards-in-a-repository) o [desactivar tableros de proyecto en tu organización](/articles/disabling-project-boards-in-your-organization), si prefieres hacer un seguimiento de tu trabajo de manera diferente.

{% data reusables.project-management.project-board-import-with-api %}

### Plantillas para tableros de proyecto

Puedes usar plantillas para configurar de forma rápida un nuevo tablero de proyecto. Cuando usas una plantilla para crear un tablero de proyecto, tu nuevo tablero incluirá columnas, así como tarjetas con sugerencias para usar los tableros de proyecto. También puedes elegir una plantilla con la automatización ya configurada.

| Plantilla                       | Descripción                                                                                                                                                                         |
| ------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Kanban básico                   | Hace un seguimiento de tus tareas con las columnas Tareas pendientes, En progreso y Hecho                                                                                           |
| Kanban automatizado             | Las tarjetas se mueven automáticamente entre las columnas Tareas pendientes, En progreso y Hecho                                                                                    |
| Kanba automatizado con revisión | Las tarjetas se mueven automáticamente entre las columnas Tareas pendientes, En progreso y Hecho, con disparos adicionales para el estado de la revisión de solicitud de extracción |
| Evaluación de error             | Evalúa y prioriza errores con las columnas Tareas pendientes, Prioridad alta, Prioridad baja y Cerrado                                                                              |

Para obtener más información, consulta "[Acerca de la automatización para tableros de proyecto](/articles/about-automation-for-project-boards)".

![Tablero de proyecto con plantilla de kanban básico](/assets/images/help/projects/project-board-basic-kanban-template.png)

{% data reusables.project-management.copy-project-boards %}

### Leer más

- "[Crear un tablero de proyecto](/articles/creating-a-project-board)"
- "[Editar un tablero de proyecto](/articles/editing-a-project-board)"{% if currentVersion == "free-pro-team@latest" %}
- "[Copying a project board](/articles/copying-a-project-board)"{% endif %}
- "[Agregar propuestas y solicitudes de extracción a un tablero de proyecto](/articles/adding-issues-and-pull-requests-to-a-project-board)"
- [Permisos de tablero de proyecto para una organización](/articles/project-board-permissions-for-an-organization)"
- "[Atajos del teclado](/articles/keyboard-shortcuts/#project-boards)"

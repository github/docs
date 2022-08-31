---
title: 'Copiar un {% data variables.product.prodname_project_v1 %}'
intro: 'Puedes copiar un {% data variables.projects.projects_v1_board %} para crear un proyecto nuevo rápidamente. El copiar {% data variables.projects.projects_v1_boards %} altamente personalizados o que se utilizan frecuentemente ayuda a estandarizar tu flujo de trabajo,.'
redirect_from:
  - /github/managing-your-work-on-github/managing-project-boards/copying-a-project-board
  - /articles/copying-a-project-board
  - /github/managing-your-work-on-github/copying-a-project-board
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Pull requests
allowTitleToDifferFromFilename: true
---

{% data reusables.projects.project_boards_old %}

El copiar un {% data variables.projects.projects_v1_board %} te permite reutilizar el título, descripción y configuración de automatización de un {% data variables.projects.projects_v1_board %}. Puedes copiar {% data variables.projects.projects_v1_boards %} para eliminar el proceso manual de crear un {% data variables.projects.projects_v1_boards %} para los flujos de trabajo similares.

Debes tener acceso de lectura a un {% data variables.projects.projects_v1_board %} para copiarlo a un repositorio u organización en donde tengas acceso de escritura.

Cuando copias un {% data variables.projects.projects_v1_board %} a una organización, la visibilidad del {% data variables.projects.projects_v1_board %} será privada, predeterminadamente, con una opción para cambiar dicha visibilidad. Para obtener más información, consulta la sección "[Cambiar la visibilidad del {% data variables.product.prodname_project_v1 %}](/articles/changing-project-board-visibility/)".

La automatización de un {% data variables.projects.projects_v1_board %} también se habilita predeterminadamente. Para obtener más información, consulta la sección "[Acerca de la automatización para los {% data variables.product.prodname_projects_v1 %}](/articles/about-automation-for-project-boards/)".

1. Navega al {% data variables.projects.projects_v1_board %} que quieras copiar.
{% data reusables.project-management.click-menu %}
3. Haz clic en {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %}, luego haz clic en **Copy** (Copiar). ![Opción para copiar en el menú desplegable desde la barra lateral del tablero de proyecto](/assets/images/help/projects/project-board-copy-setting.png)
4. Debajo de "Owner" (Propietario), usa el menú desplegable y haz clic en el repositorio o la organización donde deseas copiar el tablero de proyecto. ![Selecciona el propietario del tablero de proyecto copiado desde el menú desplegable](/assets/images/help/projects/copied-project-board-owner.png)
5. Opcionalmente, debajo de "Nombre del tablero de proyecto", escribe el nombre del {% data variables.projects.projects_v1_board %} copiado. ![Campo para escribir un nombre para el tablero de proyecto copiado](/assets/images/help/projects/copied-project-board-name.png)
6. Opcionalmente, debajo de "Description" (Descripción), escribe una descripción del tablero de proyecto copiado que verán otras personas. ![Campo para escribir una descripción para el tablero de proyecto copiado](/assets/images/help/projects/copied-project-board-description.png)
7. Opcionalmente, debajo de "Automation settings " (Parámetros de automatización), selecciona si deseas copiar los flujos de trabajo automáticos configurados. Esta opción está habilitada por defecto. Para obtener más información, consulta "[Acerca de la automatización para tableros de proyecto](/articles/about-automation-for-project-boards/)". ![Selecciona los parámetros de automatización para el tablero de proyecto copiado](/assets/images/help/projects/copied-project-board-automation-settings.png)
{% data reusables.project-management.choose-visibility %}
9. Haz clic en **Copy project** (Copiar proyecto). ![Botón para confirmar copia](/assets/images/help/projects/confirm-copy-project-board.png)

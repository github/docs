---
title: 'Configurar la automatización para los {% data variables.product.prodname_projects_v1 %}'
intro: 'Puedes configurar flujos de trabajo automáticos para mover propuestas y solicitudes de cambio a una columna de un {% data variables.projects.projects_v1_board %} cuando ocurre un evento específico.'
redirect_from:
  - /github/managing-your-work-on-github/managing-project-boards/configuring-automation-for-project-boards
  - /articles/configuring-automation-for-project-boards
  - /github/managing-your-work-on-github/configuring-automation-for-project-boards
versions:
  feature: projects-v1
topics:
  - Pull requests
  - Projects
  - Issues
  - Project management
shortTitle: Configurar la automatización
type: how_to
allowTitleToDifferFromFilename: true
---

{% data reusables.projects.project_boards_old %}

{% data reusables.project-management.automate-project-board-permissions %} Para obtener más información, consulta la sección "[Acerca de la automatización para los {% data variables.product.prodname_projects_v1 %}](/articles/about-automation-for-project-boards)".

{% data reusables.project-management.use-automated-template %}

{% data reusables.project-management.resync-automation %}

{% tip %}

**Sugerencia** Para editar columnas que ya tienen configurada la automatización, haz clic en **Manage** (Administrar) en la parte inferior de la columna.

{% endtip %}

1. Navega al {% data variables.projects.projects_v1_board %} que quieras automatizar.
2. En la columna que deseas automatizar, haz clic en {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %}. ![Icono Editar](/assets/images/help/projects/edit-column-button.png)
3. Haz clic en **Manage automation** (Administrar automatización). ![Botón Manage automation (Administrar automatización)](/assets/images/help/projects/manage-automation-button.png)
4. En el menú desplegable Preset (Preestablecer), selecciona el preestablecimiento de la automatización. ![Selecciona preestablecer la automatización desde el menú](/assets/images/help/projects/select-automation.png)
5. Selecciona las automatizaciones del flujo de trabajo que deseas configurar para la columna. ![Lista de opciones para automatizar la columna](/assets/images/help/projects/select-automation-options-existing-column.png)
6. Haz clic en **Update automation** (Actualizar automatización).

## Leer más
- "[Acerca de la automatización para los {% data variables.product.prodname_projects_v1 %}](/articles/about-automation-for-project-boards)"

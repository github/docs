---
title: Configurar la automatización para tableros de proyecto
intro: Puedes establecer flujos de trabajo automáticos para mover propuestas y solicitudes de extracción a una columna de tablero de proyecto cuando se produce un evento especificado.
redirect_from:
  - /articles/configuring-automation-for-project-boards
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

{% data reusables.project-management.automate-project-board-permissions %} Para obtener más información, consulta "[Acerca de la automatización para tableros de proyecto](/articles/about-automation-for-project-boards)".

{% data reusables.project-management.use-automated-template %}

{% data reusables.project-management.resync-automation %}

{% tip %}

**Sugerencia** Para editar columnas que ya tienen configurada la automatización, haz clic en **Manage** (Administrar) en la parte inferior de la columna.

{% endtip %}

1. Dirígete al tablero de proyecto que deseas automatizar.
2. En la columna que deseas automatizar, haz clic en {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %}. ![Icono Editar](/assets/images/help/projects/edit-column-button.png)
3. Haz clic en **Manage automation** (Administrar automatización). ![Botón Manage automation (Administrar automatización)](/assets/images/help/projects/manage-automation-button.png)
4. En el menú desplegable Preset (Preestablecer), selecciona el preestablecimiento de la automatización. ![Selecciona preestablecer la automatización desde el menú](/assets/images/help/projects/select-automation.png)
5. Selecciona las automatizaciones del flujo de trabajo que deseas configurar para la columna. ![Lista de opciones para automatizar la columna](/assets/images/help/projects/select-automation-options-existing-column.png)
6. Haz clic en **Update automation** (Actualizar automatización).

### Further reading
- "[Acerca de la automatización de los tableros de proyecto](/articles/about-automation-for-project-boards)"

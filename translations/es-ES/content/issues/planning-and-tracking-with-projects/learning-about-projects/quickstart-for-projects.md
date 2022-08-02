---
title: 'Guía de inicio rápido para {% data variables.product.prodname_projects_v2 %}'
intro: 'Experience the speed, flexibility, and customization of {% data variables.product.prodname_projects_v2 %} by creating a project in this interactive guide.'
allowTitleToDifferFromFilename: true
miniTocMaxHeadingLevel: 3
versions:
  feature: projects-v2
redirect_from:
  - /issues/trying-out-the-new-projects-experience/quickstart
type: quick_start
topics:
  - Projects
---

## Introducción

This guide demonstrates how to use {% data variables.product.prodname_projects_v2 %} to plan and track work. En esta guía, crearás un proyecto nueuvo y agregarás un campo personalizado para rastrear prioridades para tus tareas. También aprenderás cómo crear las vistas guardadas que te ayudarán a comunicar las prioridades y el progreso con tus colaboradores.

## Prerrequisitos

Puedes ya sea crear un proyecto de organización o de usuario. Para crear un proyecto de organización, necesitas una organización de {% data variables.product.prodname_dotcom %}. Para obtener más información sobre cómo crear una organización, consulta la sección "[Crear una organización nueva desde cero](/organizations/collaborating-with-groups-in-organizations/creating-a-new-organization-from-scratch)".

En esta guía agregarás propuestas existentes desde repositorios que le pertenecen a tu organización (para los proyectos organizacionales) o a ti mismo (para proyectos de usuario) a tu proyecto nuevo. Para obtener más información sobre cómo crear propuestas, consulta la sección "[Crear una propuesta](/issues/tracking-your-work-with-issues/creating-an-issue)".

## Crear un proyecto

Primero, crea un proyecto organizacional o de usuario.

### Crear un proyecto organizacional

{% data reusables.projects.create-project %}

### Crear un proyecto de usuario

{% data reusables.projects.create-user-project %}

## Configurar tu descripción de proyecto y README

{% data reusables.projects.project-description %}

## Agregar propuestas a tu proyecto

A continuación, agrega algunas propuestas a tu proyecto.

{% data reusables.projects.add-item-via-paste %}

Repite los pasos anteriores algunas veces para agregar propuestas múltiples a tu proyecto.

For more information and other ways to add issues to your project, or about other items you can add to your project, see "[Adding items to your project](/issues/planning-and-tracking-with-projects/managing-items-in-your-project/adding-items-to-your-project)."

## Agregar borradores de propuesta a tu proyecto

Posteriormente, agrega un borrador de propuesta a tu proyecto.

{% data reusables.projects.add-draft-issue %}

## Adding an iteration field

Next, create an iteration field so you can plan and track your work over repeating blocks of time. Iterations can be configured to suit how you and your team works, with customizable lengths and the ability to insert breaks.

{% data reusables.projects.new-field %}
1. Select **Iteration** ![Screenshot showing the iteration option](/assets/images/help/projects-v2/new-field-iteration.png)
3. Para cambiar la duración de cada iteración, escribe un número nuevo y luego selecciona el menú desplegable para hacer clic en ya sea **días** o **semanas**. ![Screenshot showing the iteration duration](/assets/images/help/projects-v2/iteration-field-duration.png)
4. Haz clic en **Save ** (guardar). ![Screenshot showing save button](/assets/images/help/projects-v2/new-field-save-and-create.png)

## Crear un campo para rastrear la prioridad

Now, create a custom field named `Priority` and containing the values: `High`, `Medium`, or `Low`.

{% data reusables.projects.new-field %}
1. Select **Single select** ![Screenshot showing the single select option](/assets/images/help/projects-v2/new-field-single-select.png)
1. Below "Options", type the first option, "High". ![Screenshot showing the single select option](/assets/images/help/projects-v2/priority-example.png)
1. To add additional fields, for "Medium" and "Low", click **Add option**.
1. Haz clic en **Save ** (guardar). ![Screenshot showing save button](/assets/images/help/projects-v2/new-field-save.png)

Especificar una prioridad para todas las propuestas de tu proyecto.

![Prioridades de ejemplo](/assets/images/help/projects/priority_example.png)

## Agrupar propuestas por rioridad

A continuación, agrupa todos los elementos en tu proyecto por prioridad para hacer más fácil el poder enfocarse en los elementos de prioridad alta.

{% data reusables.projects.open-view-menu %}
1. Click {% octicon "rows" aria-label="the rows icon" %} **Group**. ![Screenshot showing the group menu item](/assets/images/help/projects-v2/group-menu-item.png)
1. Click **Priority**. ![Screenshot showing the group menu](/assets/images/help/projects-v2/group-menu.png)

Ahora, mueve las propuestas entre los grupos para cambiar su prioridad.

1. Elige una propuesta.
2. Arrástrala y suéltala en un grupo de prioridad diferente. Cuando lo haces, la prioridad de esta propuesta cambiará para ser la prioridad de este grupo nuevo.

![Mover la propuesta entre grupos](/assets/images/help/projects/move_between_group.gif)

## Guardar la vista de prioridades

Cuando agrupas tus propuestas por prioridad en el paso anterior, tu proyecto mostró un indicador para mostrar que la vista se modificó. Guarda estos cambios para que tus colaboradores también vean las tareas agrupadas por prioridad.

{% data reusables.projects.save-view %}

Pudes compartir la URL con tu equipo para mantener a todos alineados con las prioridades del proyecto.

Cuando guardas una vista, cualquiera que abra el proyecto verá la vista guardada. Aquí, agrupaste por prioridad, pero también puedes agregar otros modificadores, tales como clasificar, filtrar o diseño. Luego, crearás una vista nueva con el diseño modificado.

## Agregar un diseño de tablero

Para ver el progreso de las propuestas de tu proyecto, puedes cambiar al diseño de tablero.

El diseño de tablero se basa en el campo de estado, así que especifica un estado para cada propuesta en tu proyecto.

![Estado de ejemplo](/assets/images/help/projects/status_example.png)

Posteriormente, crea una vista nueva.

{% data reusables.projects.new-view %}

Ahora, cambia al diseño de tablero.

{% data reusables.projects.open-view-menu %}
1. Under "Layout", click **Board**. ![Screenshot showing layout option](/assets/images/help/projects-v2/table-or-board.png)

![Prioridades de ejemplo](/assets/images/help/projects/example_board.png)

Cuando cambiaste el diseño, tu proyecto mostró un indicador para mostrar que la vista se modificó. Guarda esta vista para que tanto tus colaboradores como tú puedan acceder fácilmente a ella en el futuro.

{% data reusables.projects.save-view %}

Para indicar la propuesta de la vista, dale un nombre descriptivo.

{% data reusables.projects.open-view-menu %}
1. Click {% octicon "pencil" aria-label="the pencil icon" %} **Rename view**. ![Screenshot showing the rename menu item](/assets/images/help/projects-v2/rename-view.png)
1. Type the new name for your view.
1. To save changes, press <kbd>Return</kbd>.

![Prioridades de ejemplo](/assets/images/help/projects/project-view-switch.gif)

## Configurar la automatización integrada

Finalmente, agrega un flujo de trabajo integrado para configurar el estado en **Por hacer** cuando se agrega un elemento a tu proyecto.

1. In the top-right, click {% octicon "kebab-horizontal" aria-label="The menu icon" %} to open the menu. ![Screenshot showing the menu icon](/assets/images/help/projects-v2/open-menu.png)
1. En el menú, haz clic en {% octicon "workflow" aria-label="The workflow icon" %} **Flujos de trabajo**. ![Screenshot showing the 'Workflows' menu item](/assets/images/help/projects-v2/workflows-menu-item.png)
1. Debajo de **Flujos de trabajo predeterminados**, haz clic en **Elemento agregado al proyecto**. ![Screenshot showing default workflows](/assets/images/help/projects-v2/default-workflows.png)
1. Junto a **Cuándo**, asegúrate de que tanto `issues` como `pull requests` estén seleccionados. ![Screenshot showing the "when" configuration for a workflow](/assets/images/help/projects-v2/workflow-when.png)
1. Junto a **Configurar**, selecciona **Estado: Por hacer**. ![Screenshot showing the "set" configuration for a workflow](/assets/images/help/projects-v2/workflow-set.png)
1. Haz clic en el alternador de **Inhabilitado** para habilitar el flujo de trabajo. ![Screenshot showing the "enable" control for a workflow](/assets/images/help/projects-v2/workflow-enable.png)

## Leer más

- "[Adding items to your project](/issues/planning-and-tracking-with-projects/managing-items-in-your-project/adding-items-to-your-project)"
- "[Customizing a view](/issues/planning-and-tracking-with-projects/customizing-views-in-your-project/customizing-a-view)"

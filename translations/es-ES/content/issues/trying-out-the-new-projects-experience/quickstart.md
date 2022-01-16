---
title: Inicio rápido para los proyectos (beta)
intro: 'Experimenta la velocidad, flexibilidad y personalización de proyectos (beta) creando un proyecto en esta guía interactiva.'
allowTitleToDifferFromFilename: true
miniTocMaxHeadingLevel: 3
versions:
  fpt: '*'
  ghec: '*'
type: quick_start
topics:
  - Projects
---

{% data reusables.projects.projects-beta %}

## Introducción

Esta guía te demuestra cómo utilizar los proyectos (beta) para planear y rastrear el trabajo. En esta guía, crearás un proyecto nueuvo y agregarás un campo personalizado para rastrear prioridades para tus tareas. También aprenderás cómo crear las vistas guardadas que te ayudarán a comunicar las prioridades y el progreso con tus colaboradores.

## Prerrequisitos

Puedes ya sea crear un proyecto de organización o de usuario. Para crear un proyecto de organización, necesitas una organización de {% data variables.product.prodname_dotcom %}. Para obtener más información sobre cómo crear una organización, consulta la sección "[Crear una organización nueva desde cero](/organizations/collaborating-with-groups-in-organizations/creating-a-new-organization-from-scratch)".

En esta guía agregarás propuestas existentes desde repositorios que le pertenecen a tu organización (para los proyectos organizacionales) o a ti mismo (para proyectos de usuario) a tu proyecto nuevo. Para obtener más información sobre cómo crear propuestas, consulta la sección "[Crear una propuesta](/issues/tracking-your-work-with-issues/creating-an-issue)".

## Crear un proyecto

Primero, crea un proyecto organizacional o de usuario.

### Crear un proyecto organizacional

{% data reusables.projects.create-project %}

### Crear un proyecto de usuario

{% data reusables.projects.create-user-project %}

## Agregar propuestas a tu proyecto

A continuación, agrega algunas propuestas a tu proyecto.

Cuando inicializa tu proyecto nuevo, te pide agregar elementos al mismo. Si pierdes esta vista o quieres agregar más propuestas posteriormente, coloca tu cursor en la fila inferior del proyecto, junto al {% octicon "plus" aria-label="plus icon" %}.

1. Teclea `#`.
2. Selecciona el repositorio en donde se encuentra tu propuesta. Para reducir las opciones, puedes comenzar a teclear parte del nombre del repositorio.
3. Seleciona tu propuesta. Para reducir las opciones, puedes comenzar a teclear parte del título de la propuesta.

Repite los pasos anteriores algunas veces para agregar propuestas múltiples a tu proyecto.

Para obtener más información sobre otras formas de agregar usuarios a tu proyecto o acerca de otros elementos que puedes agregar a tu proyecto, consulta la sección "[Crear un proyecto](/issues/trying-out-the-new-projects-experience/creating-a-project#adding-items-to-your-project)".

## Crear un campo para rastrear la prioridad

Ahora, crea un campo personalizado que se llame `Priority` para que contenga los valores: `High`, `Medium`, o `Low`.

1. {% data reusables.projects.open-command-palette %}
2. Comienza a teclear cualqueir parte de "Crear campo nuevo".
3. Selecciona **Crear campo nuevo**.
4. En la ventana emergente resultante, ingresa `Priority` en la caja de texto.
5. En el menú desplegable, selecciona **Selección simple**.
6. Agrega opciones para `High`, `Medium`, y `Low`. También puedes incluir emojis en tus opciones. ![Ejemplo de campo de seleccións sencilla nueva](/assets/images/help/projects/new-single-select-field.png)
7. Haz clic en **Save ** (guardar).

Especificar una prioridad para todas las propuestas de tu proyecto.

![Prioridades de ejemplo](/assets/images/help/projects/priority_example.png)

## Agrupar propuestas por rioridad

A continuación, agrupa todos los elementos en tu proyecto por prioridad para hacer más fácil el poder enfocarse en los elementos de prioridad alta.

1. {% data reusables.projects.open-command-palette %}
2. Comienza a teclar cualquier parte de "Group by".
3. Selecciona **Group by: Priority**.

Ahora, mueve las propuestas entre los grupos para cambiar su prioridad.

1. Elige una propuesta.
2. Arrástrala y suéltala en un grupo de prioridad diferente. Cuando lo haces, la prioridad de esta propuesta cambiará para ser la prioridad de este grupo nuevo.

![Mover la propuesta entre grupos](/assets/images/help/projects/move_between_group.gif)

## Guardar la vista de prioridades

Cuando agrupas tus propuestas por prioridad en el paso anterior, tu proyecto mostró un indicador para mostrar que la vista se modificó. Guarda estos cambios para que tus colaboradores también vean las tareas agrupadas por prioridad.

1. Selecciona el menú desplegable junto al nombre de l vista.
2. Haz clic en **Guardar cambios**.

Para indicar la propuesta de la vista, dale un nombre descriptivo.

1. Coloca tu cursor en el nombre de la vista actual, **Vista 1**.
2. Reemplaza el texto existente con el nombre nuevo, `Priorities`.

Pudes compartir la URL con tu equipo para mantener a todos alineados con las prioridades del proyecto.

Cuando guardas una vista, cualquiera que abra el proyecto verá la vista guardada. Aquí, agrupaste por prioridad, pero también puedes agregar otros modificadores, tales como clasificar, filtrar o diseño. Luego, crearás una vista nueva con el diseño modificado.

## Agregar un diseño de tablero

Para ver el progreso de las propuestas de tu proyecto, puedes cambiar al diseño de tablero.

El diseño de tablero se basa en el campo de estado, así que especifica un estado para cada propuesta en tu proyecto.

![Estado de ejemplo](/assets/images/help/projects/status_example.png)

Posteriormente, crea una vista nueva.

1. Haz clic en {% octicon "plus" aria-label="the plus icon" %} **Vista nueva** junto a la vista que hasta el extremo derecho.

Ahora, cambia al diseño de tablero.

1. {% data reusables.projects.open-command-palette %}
2. Comienza a teclear cualquier parte de "Switch layout: Board".
3. Selecciona **Switch layout: Board**. ![Prioridades de ejemplo](/assets/images/help/projects/example_board.png)

Cuando cambiaste el diseño, tu proyecto mostró un indicador para mostrar que la vista se modificó. Guarda esta vista para que tanto tus colaboradores como tú puedan acceder fácilmente a ella en el futuro.

1. Selecciona el menú desplegable junto al nombre de l vista.
2. Haz clic en **Guardar cambios**.

Para indicar la propuesta de la vista, dale un nombre descriptivo.

1. Coloca tu cursor en el nombre de la vista acuta, **Vista 2**.
2. Reemplaza el texto existente con el nombre nuevo, `Progress`.

![Prioridades de ejemplo](/assets/images/help/projects/project-view-switch.gif)

## Configurar la automatización integrada

Finalmente, agrega un flujo de trabajo integrado para configurar el estado en **Por hacer** cuando se agrega un elemento a tu proyecto.

1. In your project, click {% octicon "workflow" aria-label="the workflow icon" %}.
2. Debajo de **Flujos de trabajo predeterminados**, haz clic en **Elemento agregado al proyecto**.
3. Junto a **Cuándo**, asegúrate de que tanto `issues` como `pull requests` estén seleccionados.
4. Junto a **Configurar**, selecciona **Estado: Por hacer**.
5. Haz clic en el alternador de **Inhabilitado** para habilitar el flujo de trabajo.

## Pasos siguientes

Puedes utilizar los proyectos para una gama extensa de propósitos. Por ejemplo:

- Rastrear el trabajo para un lanzamiento
- Planear una racha rápida
- Priorizar algo pendiente

Aquí tienes algunos recursos útiles para que tomes tus siguientes pasos con {% data variables.product.prodname_github_issues %}:

- Para proporcionar retroalimentación acerca de la experiencia (beta) en los proyectos, dirígete al [Repositorio de retroalimentación de GitHub](https://github.com/github/feedback/discussions/categories/issues-feedback).
- Para aprender más sobre los proyectos que te pueden ayudar con el rastreo y la planeación, consulta la sección "[Acerca de los proyectos](/issues/trying-out-the-new-projects-experience/about-projects)".
- Para aprender más sobre los cambios y elementos que puedes agregar a tu proyecto, consulta la sección "[Crear un proyecto](/issues/trying-out-the-new-projects-experience/creating-a-project)".
- Para aprender sobre más formas en las que se puede mostrar la información que necesitas, consulta la sección "[Personalizar tus vistas de proyecto](/issues/trying-out-the-new-projects-experience/customizing-your-project-views)".

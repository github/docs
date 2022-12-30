---
title: Inicio rápido para los proyectos (beta)
intro: Experimenta la velocidad, flexibilidad y personalización de proyectos (beta) creando un proyecto en esta guía interactiva.
allowTitleToDifferFromFilename: true
miniTocMaxHeadingLevel: 3
versions:
  fpt: '*'
  ghec: '*'
type: quick_start
topics:
- Projects
ms.openlocfilehash: 3baf341d38b59e20e6fe1e677e338d6bec1d57da
ms.sourcegitcommit: 22d665055b1bee7a5df630385e734e3a149fc720
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 07/13/2022
ms.locfileid: "145135318"
---
{% data reusables.projects.projects-beta %}

## <a name="introduction"></a>Introducción

Esta guía te demuestra cómo utilizar los proyectos (beta) para planear y rastrear el trabajo. En esta guía, crearás un proyecto nueuvo y agregarás un campo personalizado para rastrear prioridades para tus tareas. También aprenderás cómo crear las vistas guardadas que te ayudarán a comunicar las prioridades y el progreso con tus colaboradores.

## <a name="prerequisites"></a>Requisitos previos

Puedes ya sea crear un proyecto de organización o de usuario. Para crear un proyecto de organización, necesitas una organización de {% data variables.product.prodname_dotcom %}. Para obtener más información sobre la creación de una organización, consulte "[Creación de una organización desde cero](/organizations/collaborating-with-groups-in-organizations/creating-a-new-organization-from-scratch)".

En esta guía agregarás propuestas existentes desde repositorios que le pertenecen a tu organización (para los proyectos organizacionales) o a ti mismo (para proyectos de usuario) a tu proyecto nuevo. Para obtener más información sobre cómo crear incidencias, vea "[Creación de una incidencia](/issues/tracking-your-work-with-issues/creating-an-issue)".

## <a name="creating-a-project"></a>Creación de un proyecto

Primero, crea un proyecto organizacional o de usuario.

### <a name="creating-an-organization-project"></a>Crear un proyecto organizacional

{% data reusables.projects.create-project %}

### <a name="creating-a-user-project"></a>Crear un proyecto de usuario

{% data reusables.projects.create-user-project %}

## <a name="setting-your-project-description-and-readme"></a>Configurar tu descripción de proyecto y README

{% data reusables.projects.project-description %}

## <a name="adding-issues-to-your-project"></a>Agregar propuestas a tu proyecto

A continuación, agrega algunas propuestas a tu proyecto.

Cuando inicializa tu proyecto nuevo, te pide agregar elementos al mismo. Si pierdes esta vista o quieres agregar más propuestas posteriormente, coloca tu cursor en la fila inferior del proyecto, junto al {% octicon "plus" aria-label="plus icon" %}.

1. Escriba `#`.
2. Selecciona el repositorio en donde se encuentra tu propuesta. Para reducir las opciones, puedes comenzar a teclear parte del nombre del repositorio.
3. Seleciona tu propuesta. Para reducir las opciones, puedes comenzar a teclear parte del título de la propuesta.

Repite los pasos anteriores algunas veces para agregar propuestas múltiples a tu proyecto.

Para obtener más información sobre otras formas de agregar problemas al proyecto o sobre otros elementos que puede agregar, vea "[Creación de un proyecto](/issues/trying-out-the-new-projects-experience/creating-a-project#adding-items-to-your-project)".

## <a name="adding-draft-issues-to-your-project"></a>Agregar borradores de propuesta a tu proyecto

Posteriormente, agrega un borrador de propuesta a tu proyecto.

1. Coloca tu cursor en la fila inferior del proyecto, junto al {% octicon "plus" aria-label="plus icon" %}.
1. Escriba su idea y presione **Enter** (Entrar).
1. Haz clic en el título del borrador de propuesta. En la cuadro de entrada de Markdown que se muestra, introduzca más información sobre su idea y luego haga clic en **Save** (Guardar).

## <a name="creating-a-field-to-track-priority"></a>Crear un campo para rastrear la prioridad

Ahora, cree un campo personalizado denominado `Priority` que contenga los valores `High`, `Medium` o `Low`.

1. {% data reusables.projects.open-command-palette %}
2. Comienza a teclear cualqueir parte de "Crear campo nuevo".
3. Seleccione **Create new field** (Crear nuevo campo).
4. En el elemento emergente resultante, escriba `Priority` en el cuadro de texto.
5. En la lista desplegable, seleccione **Single select** (Selección única).
6. Agregue las opciones `High`, `Medium` y `Low`. También puedes incluir emojis en tus opciones.
   ![Ejemplo de un nuevo campo de selección única](/assets/images/help/projects/new-single-select-field.png)
7. Haga clic en **Save**(Guardar).

Especificar una prioridad para todas las propuestas de tu proyecto.

![Prioridades de ejemplo](/assets/images/help/projects/priority_example.png)

## <a name="grouping-issues-by-priority"></a>Agrupar propuestas por rioridad

A continuación, agrupa todos los elementos en tu proyecto por prioridad para hacer más fácil el poder enfocarse en los elementos de prioridad alta.

1. {% data reusables.projects.open-command-palette %}
2. Comienza a teclar cualquier parte de "Group by".
3. Seleccione **Group by: Priority** (Agrupar por: Prioridad).

Ahora, mueve las propuestas entre los grupos para cambiar su prioridad.

1. Elige una propuesta.
2. Arrástrala y suéltala en un grupo de prioridad diferente. Cuando lo haces, la prioridad de esta propuesta cambiará para ser la prioridad de este grupo nuevo.

![Mover la propuesta entre grupos](/assets/images/help/projects/move_between_group.gif)

## <a name="saving-the-priority-view"></a>Guardar la vista de prioridades

Cuando agrupas tus propuestas por prioridad en el paso anterior, tu proyecto mostró un indicador para mostrar que la vista se modificó. Guarda estos cambios para que tus colaboradores también vean las tareas agrupadas por prioridad.

1. Selecciona el menú desplegable junto al nombre de l vista.
2. Haga clic en **Guardar cambios**.

Para indicar la propuesta de la vista, dale un nombre descriptivo.

1. Coloque el cursor sobre el nombre de la vista actual, **View 1**.
2. Reemplace el texto existente por el nuevo nombre, `Priorities`.

Pudes compartir la URL con tu equipo para mantener a todos alineados con las prioridades del proyecto.

Cuando guardas una vista, cualquiera que abra el proyecto verá la vista guardada. Aquí, agrupaste por prioridad, pero también puedes agregar otros modificadores, tales como clasificar, filtrar o diseño. Luego, crearás una vista nueva con el diseño modificado.

## <a name="adding-a-board-layout"></a>Agregar un diseño de tablero

Para ver el progreso de las propuestas de tu proyecto, puedes cambiar al diseño de tablero.

El diseño de tablero se basa en el campo de estado, así que especifica un estado para cada propuesta en tu proyecto.

![Estado de ejemplo](/assets/images/help/projects/status_example.png)

Posteriormente, crea una vista nueva.

1. Haga clic en {% octicon "plus" aria-label="the plus icon" %} **New view** (Nueva vista) junto a la vista que está en el extremo derecho.

Ahora, cambia al diseño de tablero.

1. {% data reusables.projects.open-command-palette %}
2. Comienza a teclear cualquier parte de "Switch layout: Board".
3. Seleccione **Switch layout: Board** (Cambiar diseño: Panel).
   ![Prioridades de ejemplo](/assets/images/help/projects/example_board.png)

Cuando cambiaste el diseño, tu proyecto mostró un indicador para mostrar que la vista se modificó. Guarda esta vista para que tanto tus colaboradores como tú puedan acceder fácilmente a ella en el futuro.

1. Selecciona el menú desplegable junto al nombre de l vista.
2. Haga clic en **Guardar cambios**.

Para indicar la propuesta de la vista, dale un nombre descriptivo.

1. Coloque el cursor sobre el nombre de la vista actual, **View 2**.
2. Reemplace el texto existente por el nuevo nombre, `Progress`.

![Prioridades de ejemplo](/assets/images/help/projects/project-view-switch.gif)

## <a name="configure-built-in-automation"></a>Configurar la automatización integrada

Finalmente, agregue un flujo de trabajo integrado para establecer el estado en **Todo** (Pendiente) cuando se agrega un elemento al proyecto.

1. En tu proyecto, haz clic en {% octicon "workflow" aria-label="the workflow icon" %}.
2. En **Default workflows** (Flujos de trabajo predeterminados), haga clic en **Item added to project** (Elemento agregado al proyecto).
3. Junto a **When** (Cuándo), asegúrese de que `issues` y `pull requests` están seleccionados.
4. Junto a **Set** (Establecer), seleccione **Status:Todo** (Estado: Pendiente).
5. Haga clic en el botón de alternancia **Disabled** (Deshabilitado) para habilitar el flujo de trabajo.

## <a name="next-steps"></a>Pasos siguientes

Puedes utilizar los proyectos para una gama extensa de propósitos. Por ejemplo:

- Rastrear el trabajo para un lanzamiento
- Planear una racha rápida
- Priorizar algo pendiente

Estos son algunos recursos útiles para que realice los siguientes pasos con {% data variables.product.prodname_github_issues %}:

- Para proporcionar comentarios sobre su experiencia con los proyectos (beta), vaya al [repositorio de comentarios de GitHub](https://github.com/github/feedback/discussions/categories/issues-feedback).
- Para obtener más información sobre cómo los proyectos pueden ayudarle con la planificación y el seguimiento, consulte "[Acerca de los proyectos](/issues/trying-out-the-new-projects-experience/about-projects)".
- Para obtener más información sobre los campos y elementos que puede agregar al proyecto, consulte "[Creación de un proyecto](/issues/trying-out-the-new-projects-experience/creating-a-project)".
- Para obtener más información sobre las distintas formas de mostrar la información que necesita, consulte "[Personalización de las vistas del proyecto](/issues/trying-out-the-new-projects-experience/customizing-your-project-views)".

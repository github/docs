---
title: 'Inicio rápido para {% data variables.product.prodname_projects_v2 %}'
intro: 'Experimenta la velocidad, flexibilidad y personalización de {% data variables.product.prodname_projects_v2 %} mediante la creación de un proyecto en esta guía interactiva.'
allowTitleToDifferFromFilename: true
miniTocMaxHeadingLevel: 3
versions:
  feature: projects-v2
redirect_from:
  - /issues/trying-out-the-new-projects-experience/quickstart
type: quick_start
topics:
  - Projects
ms.openlocfilehash: 39798565419acaa831a996a0c86cc62f367f4bb7
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 10/25/2022
ms.locfileid: '148110072'
---
## Introducción

En esta guía se muestra cómo usar {% data variables.product.prodname_projects_v2 %} para planificar y supervisar el trabajo. En esta guía, crearás un proyecto nueuvo y agregarás un campo personalizado para rastrear prioridades para tus tareas. También aprenderás cómo crear las vistas guardadas que te ayudarán a comunicar las prioridades y el progreso con tus colaboradores.

## Requisitos previos

Puedes ya sea crear un proyecto de organización o de usuario. Para crear un proyecto de organización, necesitas una organización de {% data variables.product.prodname_dotcom %}. Para obtener más información sobre la creación de una organización, consulte "[Creación de una organización desde cero](/organizations/collaborating-with-groups-in-organizations/creating-a-new-organization-from-scratch)".

En esta guía agregarás propuestas existentes desde repositorios que le pertenecen a tu organización (para los proyectos organizacionales) o a ti mismo (para proyectos de usuario) a tu proyecto nuevo. Para obtener más información sobre cómo crear incidencias, vea "[Creación de una incidencia](/issues/tracking-your-work-with-issues/creating-an-issue)".

## Creación de un proyecto

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

Para más información sobre otras formas de agregar incidencias al proyecto, o bien sobre otros elementos que puedes agregar, consulta "[Adición de elementos a un proyecto](/issues/planning-and-tracking-with-projects/managing-items-in-your-project/adding-items-to-your-project)".

## Agregar borradores de propuesta a tu proyecto

Posteriormente, agrega un borrador de propuesta a tu proyecto.

{% data reusables.projects.add-draft-issue %}

## Adición de un campo de iteración

A continuación, crea un campo de iteración para que puedas planificar y realizar el seguimiento del trabajo en bloques de tiempo repetidos. Las iteraciones se pueden configurar para adaptarlas a tu trabajo y al del equipo, con longitudes personalizables y la capacidad de insertar saltos.

{% data reusables.projects.new-field %}
1. Selecciona **Iteración**
   ![Captura de pantalla en la que se muestra la opción Iteración](/assets/images/help/projects-v2/new-field-iteration.png)
3. Para cambiar la duración de cada iteración, escribe un nuevo número y, a continuación, selecciona la lista desplegable y haz clic en **días** o **semanas**.
   ![Captura de pantalla en la que se muestra la duración de la iteración](/assets/images/help/projects-v2/iteration-field-duration.png)
4. Haga clic en **Save**(Guardar).
   ![Captura de pantalla en la que se muestra el botón Guardar](/assets/images/help/projects-v2/new-field-save-and-create.png)

## Crear un campo para rastrear la prioridad

Ahora, crea un campo personalizado denominado `Priority` y que contenga los valores: `High`, `Medium` o `Low`.

{% data reusables.projects.new-field %}
1. Selecciona **Selección única**
   ![Captura de pantalla en la que se muestra la opción de selección única](/assets/images/help/projects-v2/new-field-single-select.png)
1. Debajo de "Opciones", escribe la primera opción, "Alto".
   ![Captura de pantalla en la que se muestra la opción de selección única](/assets/images/help/projects-v2/priority-example.png)
1. Para agregar campos adicionales, para "Medio" y "Bajo", haz clic en **Agregar opción**.
1. Haga clic en **Save**(Guardar).
   ![Captura de pantalla en la que se muestra el botón Guardar](/assets/images/help/projects-v2/new-field-save.png)

Especificar una prioridad para todas las propuestas de tu proyecto.

![Prioridades de ejemplo](/assets/images/help/projects/priority_example.png)

## Agrupar propuestas por rioridad

A continuación, agrupa todos los elementos en tu proyecto por prioridad para hacer más fácil el poder enfocarse en los elementos de prioridad alta.

{% data reusables.projects.open-view-menu %}
1. Haz clic en {% octicon "rows" aria-label="the rows icon" %} **Agrupar**.
   ![Captura de pantalla en la que se muestra el elemento de menú Agrupar](/assets/images/help/projects-v2/group-menu-item.png)
1. Haz clic en **Prioridad**.
   ![Captura de pantalla en la que se muestra el menú Agrupar](/assets/images/help/projects-v2/group-menu.png)

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
1. En "Diseño", haz clic en **Panel**.
   ![Captura de pantalla en la que se muestra la opción Diseño](/assets/images/help/projects-v2/table-or-board.png)

![Prioridades de ejemplo](/assets/images/help/projects/example_board.png)

Cuando cambiaste el diseño, tu proyecto mostró un indicador para mostrar que la vista se modificó. Guarda esta vista para que tanto tus colaboradores como tú puedan acceder fácilmente a ella en el futuro.

{% data reusables.projects.save-view %}

Para indicar la propuesta de la vista, dale un nombre descriptivo.

{% data reusables.projects.open-view-menu %}
1. Haz clic en {% octicon "pencil" aria-label="the pencil icon" %} **Cambiar nombre de vista**.
   ![Captura de pantalla en la que se muestra el elemento de menú Cambiar de nombre](/assets/images/help/projects-v2/rename-view.png)
1. Escribe el nuevo nombre de la vista.
1. Para guardar los cambios, presiona <kbd>Intro</kbd>.

![Prioridades de ejemplo](/assets/images/help/projects/project-view-switch.gif)

## Configurar la automatización integrada

Finalmente, agregue un flujo de trabajo integrado para establecer el estado en **Todo** (Pendiente) cuando se agrega un elemento al proyecto.

1. En la parte superior derecha, haz clic en {% octicon "kebab-horizontal" aria-label="The menu icon" %} para abrir el menú.
  ![Captura de pantalla en la que se muestra el icono de menú](/assets/images/help/projects-v2/open-menu.png)
1. En el menú, haz clic en {% octicon "workflow" aria-label="The workflow icon" %} **Flujos de trabajo**.
  ![Captura de pantalla en la que se muestra el elemento de menú "Flujos de trabajo"](/assets/images/help/projects-v2/workflows-menu-item.png)
1. En **Default workflows** (Flujos de trabajo predeterminados), haga clic en **Item added to project** (Elemento agregado al proyecto).
  ![Captura de pantalla en la que se muestran los flujos de trabajo predeterminados](/assets/images/help/projects-v2/default-workflows.png)
1. Junto a **When** (Cuándo), asegúrese de que `issues` y `pull requests` están seleccionados.
  ![Captura de pantalla en la que se muestra la configuración "cuando" para un flujo de trabajo](/assets/images/help/projects-v2/workflow-when.png)
1. Junto a **Set** (Establecer), seleccione **Status:Todo** (Estado: Pendiente).
  ![Captura de pantalla en la que se muestra la configuración "establecer" para un flujo de trabajo](/assets/images/help/projects-v2/workflow-set.png)
1. Haga clic en el botón de alternancia **Disabled** (Deshabilitado) para habilitar el flujo de trabajo.
  ![Captura de pantalla en la que se muestra la configuración "habilitar" para un flujo de trabajo](/assets/images/help/projects-v2/workflow-enable.png)

## Información adicional

- "[Adición de elementos al proyecto](/issues/planning-and-tracking-with-projects/managing-items-in-your-project/adding-items-to-your-project)"
- "[Personalización de una vista](/issues/planning-and-tracking-with-projects/customizing-views-in-your-project/customizing-a-view)"

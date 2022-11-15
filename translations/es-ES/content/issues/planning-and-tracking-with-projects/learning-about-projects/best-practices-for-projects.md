---
title: 'Procedimientos recomendados para {% data variables.product.prodname_projects_v2 %}'
intro: Aprende sugerencias para administrar los proyectos.
allowTitleToDifferFromFilename: true
miniTocMaxHeadingLevel: 3
versions:
  feature: projects-v2
redirect_from:
  - /issues/trying-out-the-new-projects-experience/best-practices-for-managing-projects
type: overview
topics:
  - Projects
  - Issues
  - Project management
ms.openlocfilehash: 1473e08a8a6d3bf4df480b4b5ce6930753a04491
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 10/25/2022
ms.locfileid: '148106769'
---
Puedes usar {% data variables.product.prodname_projects_v2 %} para administrar tu trabajo en {% data variables.product.company_short %}, donde se encuentran tus incidencias y solicitudes de incorporación de cambios. Lee los tips para administrar tus proyectos de forma eficaz y eficiente. Para más información sobre {% data variables.product.prodname_projects_v2 %}, consulta "[Acerca de {% data variables.product.prodname_projects_v2 %}](/issues/planning-and-tracking-with-projects/learning-about-projects/about-projects)".

## Desglosa las propuestas grandes en unas más pequeñas

El desglosar una propuesta grande en propuestas más pequeñas hace el trabajo más administrable y habilita a los miembros del equipo para que trabajen en paralelo. Esto también conlleva a tener solicitudes de cambios más pequeñas, las cuales se pueden revisar con mayor facilidad.

Para rastrear cómo las propuestas más pequeñas encajan en una meta más grande, utiliza listas de tareas, hitos o etiquetas. Para obtener más información, consulte "[Acerca de las listas de tareas](/issues/tracking-your-work-with-issues/creating-issues/about-task-lists)", "[Acerca de los hitos](/issues/using-labels-and-milestones-to-track-work/about-milestones)" y "[Administración de etiquetas](/issues/using-labels-and-milestones-to-track-work/managing-labels)".

## Comunicarse

Las propuestas y solicitudes de cambio incluyen características integradas que te permiten comunicarte fácilmente con tus colaboradores. Use @mentions para alertar a una persona o a todo el equipo sobre un comentario. Asigna colaboradores a las propuestas para comunicar las responsabilidades. Enlaza las propuestas o solicitudes de cambio relacionadas para comunicar cómo están conectadas.

## Utilizar la descripción y el README

Utiliza la descripción y el README de tu proyecto para compartir información sobre este.

Por ejemplo:

- Para explicar el propósito del proyecto.
- Para describir las vistas del proyecto y cómo utilizarlas.
- Para incluir enlaces relevantes y personas a contactar para recibir más información.

Los README de los proyectos son compatibles con el lenguaje de marcado, lo cual te permite utilizar imágenes y formatos avanzados, tales como enlaces, listas y encabezados. 

Para más información, consulta "[Creación de una instancia de {% data variables.projects.project_v2 %}](/issues/planning-and-tracking-with-projects/creating-projects/creating-a-project)".

## Utiliza las vistas

Utiliza las vistas de proyecto para mirarlo desde diferentes ángulos.

Por ejemplo:

- Filtra por estado para ver los elementos que no se marcaron como favoritos
- Agrupar por un campo de prioridad personalizado para monitorear el volumen de los elementos de prioridad alta
- Ordena por un campo personalizado de fecha para ver los elementos con la fecha de envío destino más cercana

Para más información, consulta "[Personalización de una vista](/issues/planning-and-tracking-with-projects/customizing-views-in-your-project/customizing-a-view)".

## Ten una fuente única de la verdad

Para prevenir que la información se desincronice, manten una fuente única de verdad. Por ejemplo, rastrea una fecha de envío destino en una sola ubicación en vez de que se propague a través de campos múltiples. Posteriormente, si la fecha de envío destino cambia, solo necesitas actualizar la fecha en una ubicación.

Las instancias de {% data variables.product.prodname_projects_v2 %} se mantienen actualizadas de forma automática con los datos de {% data variables.product.company_short %}, como usuarios asignados, hitos y etiquetas. Cuando uno de estos campos cambia en una propuesta o solicitud de cambios, este cambio se refleja automáticamente en tu proyecto.

## Utiliza la automatización

Puedes automatizar las tareas para pasar menos tiempo ocupado en el trabajo y más en el proyecto mismo. Entre menos tengas que recordar para hacer manualmente, será más probable que tu proyecto se mantenga actualizado.

{% data variables.product.prodname_projects_v2 %} ofrece flujos de trabajo integrados. Por ejemplo, cuando se cierra una propuesta, puedes configurar el estado automáticamente a "Hecho". {% ifversion projects-v2-auto-archive %}También puedes configurar los flujos de trabajo integrados para que se archiven elementos automáticamente cuando cumplan unos determinados criterios.{% endif %}

Adicionalmente, {% data variables.product.prodname_actions %} y la API de GraphQL te permiten automatizar las tareas rutinarias de administración de proyectos. Por ejemplo, para hacer un seguimiento de las solicitudes de incorporación de cambios que están esperando una revisión, puede crear un flujo de trabajo que agregue una solicitud de incorporación de cambios a un proyecto y configure el estado en "needs review" (necesita revisión). Este proceso se puede activar automáticamente al marcar una solicitud de incorporación de cambios como "ready for review" (lista para la revisión).

- Para obtener más información sobre los flujos de trabajo integrados, consulta "[Uso de las automatizaciones integradas](/issues/planning-and-tracking-with-projects/automating-your-project/using-the-built-in-automations)".{% ifversion projects-v2-auto-archive %}
- Para obtener más información sobre cómo archivar elementos automáticamente, consulta "[Archivado automático de elementos](/issues/planning-and-tracking-with-projects/automating-your-project/archiving-items-automatically)".{% endif %}
- Para obtener un flujo de trabajo de ejemplo, consulta "[Automatización de {% data variables.product.prodname_projects_v2 %} mediante acciones](/issues/planning-and-tracking-with-projects/automating-your-project/automating-projects-using-actions)".
- Para más información sobre la API, consulta "[Uso de la API para administrar {% data variables.product.prodname_projects_v2 %}](/issues/planning-and-tracking-with-projects/automating-your-project/using-the-api-to-manage-projects)".
- Para obtener más información sobre {% data variables.product.prodname_actions %}, consulte "[{% data variables.product.prodname_actions %}](/actions)".

## Utilizar tipos de campo diferentes

Toma ventaja de los diversos tipos de campo para satisfacer tus necesidades.

Utiliza el campo de iteración para programar trabajo o crear una línea de tiempo. Puedes agrupar por iteración para ver si los elementos se balancean entre iteraciones o puedes filtrarlos para enfocarte en una iteración simple. Los campos de iteración también te permiten ver el trabajo que completaste en las iteraciones pasadas, lo cual puede ayudarte con la planeación rápida y puede reflejar los logros de tu equipo. Los campos de iteración también son compatibles con pausas para mostrar cuándo tú y tu equipo toman un descanso de ellas. Para más información, consulta "[Acerca de los campos de iteración](/issues/planning-and-tracking-with-projects/understanding-field-types/about-iteration-fields)".

Utiliza un campo de selección simple para rastrear la información de una tarea con base en una lista de valores preconfigurados. Por ejemplo, rastrea la prioridad o fase de un proyecto. Ya que los valores se seleccionan desde una lista preconfigurada, puedes agrupar, filtrar o enfocarte fácilmente en elementos con un valor específico.

Para más información sobre los diferentes tipos de campo, consulta "[Descripción de los tipos de campo](/issues/planning-and-tracking-with-projects/understanding-field-types)".

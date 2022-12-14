---
title: Mejores prácticas para administrar proyectos (beta)
intro: Consejos para administrar tus proyectos en {% data variables.product.company_short %}.
allowTitleToDifferFromFilename: true
miniTocMaxHeadingLevel: 3
versions:
  fpt: '*'
  ghec: '*'
type: overview
topics:
- Projects
- Issues
- Project management
ms.openlocfilehash: 70c50bf58f99575759b91fb520fa3275127d9a49
ms.sourcegitcommit: 22d665055b1bee7a5df630385e734e3a149fc720
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 07/13/2022
ms.locfileid: "145135367"
---
{% data reusables.projects.projects-beta %}

Puedes utilizar proyectos para administrar tu trabajo en {% data variables.product.company_short %}, donde viven tus propuestas y solicitudes de cambios. Lee los tips para administrar tus proyectos de forma eficaz y eficiente. Para obtener más información sobre los proyectos, consulte "[Acerca de los proyectos](/issues/trying-out-the-new-projects-experience/about-projects)".

## <a name="break-down-large-issues-into-smaller-issues"></a>Desglosa las propuestas grandes en unas más pequeñas

El desglosar una propuesta grande en propuestas más pequeñas hace el trabajo más administrable y habilita a los miembros del equipo para que trabajen en paralelo. Esto también conlleva a tener solicitudes de cambios más pequeñas, las cuales se pueden revisar con mayor facilidad.

Para rastrear cómo las propuestas más pequeñas encajan en una meta más grande, utiliza listas de tareas, hitos o etiquetas. Para obtener más información, consulte "[Acerca de las listas de tareas](/issues/tracking-your-work-with-issues/creating-issues/about-task-lists)", "[Acerca de los hitos](/issues/using-labels-and-milestones-to-track-work/about-milestones)" y "[Administración de etiquetas](/issues/using-labels-and-milestones-to-track-work/managing-labels)".

## <a name="communicate"></a>Comunicarse

Las propuestas y solicitudes de cambio incluyen características integradas que te permiten comunicarte fácilmente con tus colaboradores. Use @mentions para alertar a una persona o a todo el equipo sobre un comentario. Asigna colaboradores a las propuestas para comunicar las responsabilidades. Enlaza las propuestas o solicitudes de cambio relacionadas para comunicar cómo están conectadas.

## <a name="make-use-of-the-description-and-readme"></a>Utilizar la descripción y el README

Utiliza la descripción y el README de tu proyecto para compartir información sobre este.

Por ejemplo:

- Para explicar el propósito del proyecto.
- Para describir las vistas del proyecto y cómo utilizarlas.
- Para incluir enlaces relevantes y personas a contactar para recibir más información.

Los README de los proyectos son compatibles con el lenguaje de marcado, lo cual te permite utilizar imágenes y formatos avanzados, tales como enlaces, listas y encabezados. 

Para obtener más información, consulte "[Creación de un proyecto (beta)](/issues/trying-out-the-new-projects-experience/creating-a-project#updating-your-project-description-and-readme)".

## <a name="use-views"></a>Utiliza las vistas

Utiliza las vistas de proyecto para mirarlo desde diferentes ángulos.

Por ejemplo:

- Filtra por estado para ver los elementos que no se marcaron como favoritos
- Agrupar por un campo de prioridad personalizado para monitorear el volumen de los elementos de prioridad alta
- Ordena por un campo personalizado de fecha para ver los elementos con la fecha de envío destino más cercana

Para obtener más información, consulte "[Personalización de las vistas del proyecto](/issues/trying-out-the-new-projects-experience/customizing-your-project-views)".

## <a name="have-a-single-source-of-truth"></a>Ten una fuente única de la verdad

Para prevenir que la información se desincronice, manten una fuente única de verdad. Por ejemplo, rastrea una fecha de envío destino en una sola ubicación en vez de que se propague a través de campos múltiples. Posteriormente, si la fecha de envío destino cambia, solo necesitas actualizar la fecha en una ubicación.

Los proyectos de {% data variables.product.company_short %} se actualizan automáticamente con los datos de {% data variables.product.company_short %}, tales como los asignados, hitos y etiquetas. Cuando uno de estos campos cambia en una propuesta o solicitud de cambios, este cambio se refleja automáticamente en tu proyecto.

## <a name="use-automation"></a>Utiliza la automatización

Puedes automatizar las tareas para pasar menos tiempo ocupado en el trabajo y más en el proyecto mismo. Entre menos tengas que recordar para hacer manualmente, será más probable que tu proyecto se mantenga actualizado.

Los proyectos (beta) ofrecen flujos de trabajo integrados. Por ejemplo, cuando se cierra una propuesta, puedes configurar el estado automáticamente a "Hecho".

Adicionalmente, {% data variables.product.prodname_actions %} y la API de GraphQL te permiten automatizar las tareas rutinarias de administración de proyectos. Por ejemplo, para hacer un seguimiento de las solicitudes de incorporación de cambios que están esperando una revisión, puede crear un flujo de trabajo que agregue una solicitud de incorporación de cambios a un proyecto y configure el estado en "needs review" (necesita revisión). Este proceso se puede activar automáticamente al marcar una solicitud de incorporación de cambios como "ready for review" (lista para la revisión).

- Para ver un ejemplo de flujo de trabajo, consulte "[Automatización de proyectos](/issues/trying-out-the-new-projects-experience/automating-projects)".
- Para obtener más información sobre la API, consulte "[Uso de la API para administrar proyectos](/issues/trying-out-the-new-projects-experience/using-the-api-to-manage-projects)".
- Para obtener más información sobre {% data variables.product.prodname_actions %}, consulte "[{% data variables.product.prodname_actions %}](/actions)".

## <a name="use-different-field-types"></a>Utilizar tipos de campo diferentes

Toma ventaja de los diversos tipos de campo para satisfacer tus necesidades.

Utiliza el campo de iteración para programar trabajo o crear una línea de tiempo. Puedes agrupar por iteración para ver si los elementos se balancean entre iteraciones o puedes filtrarlos para enfocarte en una iteración simple. Los campos de iteración también te permiten ver el trabajo que completaste en las iteraciones pasadas, lo cual puede ayudarte con la planeación rápida y puede reflejar los logros de tu equipo. Los campos de iteración también son compatibles con pausas para mostrar cuándo tú y tu equipo toman un descanso de ellas. Para obtener más información, consulte "[Administración de iteraciones en proyectos](/issues/trying-out-the-new-projects-experience/managing-iterations)".

Utiliza un campo de selección simple para rastrear la información de una tarea con base en una lista de valores preconfigurados. Por ejemplo, rastrea la prioridad o fase de un proyecto. Ya que los valores se seleccionan desde una lista preconfigurada, puedes agrupar, filtrar o enfocarte fácilmente en elementos con un valor específico.

Para obtener más información sobre los diferentes tipos de campo, consulte "[Creación de un proyecto (beta)](/issues/trying-out-the-new-projects-experience/creating-a-project#adding-custom-fields)".

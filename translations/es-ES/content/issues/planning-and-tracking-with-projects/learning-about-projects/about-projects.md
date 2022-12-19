---
title: 'Acerca de {% data variables.product.prodname_projects_v2 %}'
intro: '{% data variables.product.prodname_projects_v2 %} es una herramienta adaptable y flexible para la planificación y el seguimiento del trabajo en {% data variables.product.company_short %}.'
allowTitleToDifferFromFilename: true
miniTocMaxHeadingLevel: 3
versions:
  feature: projects-v2
redirect_from:
  - /issues/trying-out-the-new-projects-experience/about-projects
type: overview
topics:
  - Projects
ms.openlocfilehash: 3190379652fe1c95b8ea6ec7f864c44b72d9a7f7
ms.sourcegitcommit: f5ec7f52d2945ba8b7c14f8f604e4784a8feda19
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 11/22/2022
ms.locfileid: '148180765'
---
## Acerca de {% data variables.product.prodname_projects_v2 %}

Un proyecto es una hoja de cálculo adaptable que se integra con las incidencias y solicitudes de incorporación de cambios en {% data variables.product.company_short %} para ayudarte a planear y realizar el seguimiento del trabajo de forma eficaz. Puedes crear y personalizar varias vistas mediante el filtrado, la ordenación y la agrupación de las incidencias y solicitudes de incorporación de cambios, la adición de campos personalizados para realizar el seguimiento de metadatos específicos del equipo y visualizar el trabajo con gráficos configurables. En lugar de aplicar una metodología específica, un proyecto proporciona características flexibles que puedes personalizar en función de las necesidades y los procesos del equipo.

### Mantenerse actualizado

Los proyectos se crean a partir de las incidencias y las solicitudes de incorporación de cambios que agregas, lo que crea referencias directas entre el proyecto y el trabajo. La información se sincroniza automáticamente con el proyecto a medida que realizas cambios, y se actualizan las vistas y los gráficos. Esta integración es bidireccional, por lo que, cuando cambies la información sobre una solicitud de incorporación de cambios o incidencia del proyecto, la solicitud de incorporación de cambios o la incidencia reflejará la información. Por ejemplo, si cambias un usuario asignado en el proyecto, ese cambio se muestra en la incidencia. Puedes ampliar aún más esta integración, agrupar el proyecto por usuario asignado y realizar cambios en la asignación de incidencias si las arrastras a los distintos grupos.

### Adición de metadatos a los elementos

Puedes usar campos personalizados para agregar metadatos a incidencias, solicitudes de incorporación de cambios y borradores de incidencias, y crear una vista más completa de los atributos de los elementos. No estás limitado a los metadatos integrados (usuarios asignados, hitos, etiquetas, etc.) que existen actualmente para las incidencias y las solicitudes de incorporación de cambios. Por ejemplo, puedes agregar los siguientes metadatos como campos personalizados:

- Campo de fecha para realizar un seguimiento de las fechas de envío de destino.
- Campo numérico para realizar un seguimiento de la complejidad de una tarea.
- Un único campo de selección para realizar un seguimiento de si una tarea es baja, media o alta prioridad.
- Un campo de texto para agregar una nota rápida.
- Un campo de iteración para planear el trabajo semana a semana, incluida la compatibilidad con interrupciones.

{% ifversion projects-v2-tasklists %}

### Exploración de las relaciones entre incidencias

{% data reusables.projects.tasklists-release-stage %}

Puedes usar listas de tareas para crear jerarquías de incidencias, dividir las incidencias en subtareas más pequeñas y crear nuevas relaciones entre las incidencias. Para obtener más información, consulta "[Acerca de las listas de tareas](/issues/tracking-your-work-with-issues/about-tasklists)".

Estas relaciones se muestran en la incidencia, así como los campos Seguido por y Siguiendo de los proyectos. Puedes filtrar por incidencias cuyo seguimiento realiza otra incidencia y también puedes agrupar las vistas de tabla por el campo Seguido por para mostrar todas las incidencias primarias con una lista de sus subtareas.

{% endif %}

### Visualizar tu proyecto desde perspectivas diferentes

Responde rápidamente a las preguntas más urgentes mediante la adaptación de la vista del proyecto para que proporcione la información que necesitas. Puedes guardar estas vistas, lo que te permite volver rápidamente a ellas según sea necesario y ponerlas a disposición del equipo. Las vistas no solo permiten limitar el ámbito de los elementos enumerados, sino que también ofrecen dos opciones de diseño diferentes.

Puedes ver tu proyecto como un diseño de tabla de densidad alta:

![Tabla de proyectos](/assets/images/help/issues/projects_table.png)

O como un tablero:

![Tablero de proyectos](/assets/images/help/issues/projects_board.png)

Para ayudar a que te enfoques en aspectos específicos de tu proyecto, puedes agrupar, clasificar o filtrar elementos:

![Vista de proyecto](/assets/images/help/issues/project_view.png)

Para más información, consulta "[Personalización de una vista](/issues/planning-and-tracking-with-projects/customizing-views-in-your-project/customizing-a-view)".

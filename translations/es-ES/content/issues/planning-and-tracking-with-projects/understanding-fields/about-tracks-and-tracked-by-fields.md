---
title: Acerca de los campos Sigue a y Seguido por
shortTitle: About Tracks and Tracked by fields
intro: Puedes ver las subtareas de las incidencias de los proyectos.
miniTocMaxHeadingLevel: 3
versions:
  feature: projects-v2-tasklists
type: tutorial
topics:
  - Projects
ms.openlocfilehash: 44c1fcf3ed4495b57a0f2dbe3e92076f0e815502
ms.sourcegitcommit: f5ec7f52d2945ba8b7c14f8f604e4784a8feda19
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 11/22/2022
ms.locfileid: '148180749'
---
{% data reusables.projects.tasklists-release-stage %}

Puedes habilitar los campos Sigue a y Seguido por en los proyectos para ver las relaciones entre las incidencias a medida que agregas subtareas en listas de tareas. Para obtener más información sobre cómo crear jerarquías de incidencias en listas de tareas, consulta "[Acerca de las listas de tareas](/issues/tracking-your-work-with-issues/about-tasklists)".

El campo Seguido por se puede usar para agrupar elementos, creando una vista que muestre claramente las subtareas de cada incidencia y el trabajo necesario para completarlas. Para obtener más información, consulta "[Agrupar por valores de campo en el diseño de tabla](/issues/planning-and-tracking-with-projects/customizing-views-in-your-project/customizing-a-view#grouping-by-field-values-in-table-layout)".

También puedes filtrar por el campo Seguido por para mostrar solo los elementos de los que se realiza un seguimiento por incidencias específicas. Empieza escribiendo "tracked-by" y selecciona una incidencia de la lista o, si conoces el repositorio y el número de incidencia, puedes escribir el filtro siguiente en su totalidad.

```
tracked-by:"<OWNER>/<REPO>#<ISSUE NUMBER>"
```

Para usar el filtro, reemplaza `<OWNER>` por el propietario del repositorio, `<REPO>` por el nombre del repositorio y `<ISSUE NUMBER>` por el número de incidencia. Para obtener más información, consulta "[Filtrar proyectos](/issues/planning-and-tracking-with-projects/customizing-views-in-your-project/filtering-projects)".

### Habilitación del campo Seguido por

Puedes habilitar el campo Seguido por para ver qué incidencias están realizando un seguimiento de un elemento en el proyecto.

1. En la vista de tabla, en el encabezado de campo del extremo derecho, haz clic en {% octicon "plus" aria-label="the plus icon" %}.
   
   ![Captura de pantalla en la que se muestra el botón Nuevo campo](/assets/images/help/projects-v2/new-field-button.png)
   
1. En "Campos ocultos", haz clic en **Seguido por**.
   
   ![Captura de pantalla en la que se muestra el menú del campo](/assets/images/help/projects-v2/select-tracked-by-field.png)
   

### Habilitación del campo Sigue a

Puede habilitar el campo Sigue a para ver a qué otras incidencias realiza un seguimiento un elemento del proyecto.

1. En la vista de tabla, en el encabezado de campo del extremo derecho, haz clic en {% octicon "plus" aria-label="the plus icon" %}.
   
   ![Captura de pantalla en la que se muestra el botón Nuevo campo](/assets/images/help/projects-v2/new-field-button.png)
   
1. En "Campos ocultos", haz clic en **Sigue a**.
   
   ![Captura de pantalla en la que se muestra el menú del campo](/assets/images/help/projects-v2/select-tracks-field.png)
   

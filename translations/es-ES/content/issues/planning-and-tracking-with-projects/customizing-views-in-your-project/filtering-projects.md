---
title: 'Filtrado de {% data variables.projects.projects_v2 %}'
intro: Usa filtros para elegir qué elementos aparecen en las vistas del proyecto.
miniTocMaxHeadingLevel: 3
versions:
  feature: projects-v2
redirect_from:
  - /issues/trying-out-the-new-projects-experience/filtering-projects
type: tutorial
topics:
  - Projects
allowTitleToDifferFromFilename: true
ms.openlocfilehash: 680d6cff10dfc063ebaef0ebc9f8f7d0c15ba2e7
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 11/09/2022
ms.locfileid: '148158945'
---
Puede personalizar las vistas mediante filtros para los metadatos de elementos, como los usuarios asignados y las etiquetas aplicadas a incidencias, así como por los campos del proyecto. Puede combinar filtros y guardarlos como vistas. Para más información, vea "[Personalización de las vistas del proyecto](/issues/planning-and-tracking-with-projects/customizing-views-in-your-project/customizing-a-view)".

Para filtrar un proyecto, haga clic en {% octicon "filter" aria-label="The Filter icon" %} y empiece a escribir los campos y valores por los que quiera filtrar. Conforme teclees, se mostrarán los posibles valores. También puedes abrir la paleta de comandos del proyecto si presionas {% data variables.projects.command-palette-shortcut %} y escribes "Filtrar por" para elegir entre los filtros disponibles.

El uso de varios filtros actuará como un filtro AND lógico. Por ejemplo, `label:bug status:"In progress"` devolverá elementos con la etiqueta `bug` con el estado "En curso". {% data variables.product.prodname_projects_v2 %} no admite actualmente filtros OR lógicos en varios campos.

Los mismos filtros están disponibles para los gráficos que se crean mediante conclusiones para {% data variables.product.prodname_projects_v2 %}, lo que te permite filtrar los datos usados para crear los gráficos. Para más información, vea "[Uso de conclusiones con proyectos](/issues/planning-and-tracking-with-projects/viewing-insights-from-your-project/about-insights-for-projects)".

Al filtrar una vista y, luego, agregar un elemento, los metadatos filtrados se aplicarán al elemento agregado. Por ejemplo, si vas a filtrar por `status:"In progress"` y agregas un elemento, el nuevo elemento tendrá su estado establecido en "En curso".

## Filtrar elementos

Haz clic en el {% octicon "filter" aria-label="the filter icon" %} en la parte superior de la tabla para mostrar la barra de "Filtrar por palabra clave o por campo". Comienza a teclear el nombre de campo y valor por el cuál quieras filtrar. Conforme teclees, se mostrarán los posibles valores.

{% data reusables.projects.projects-filters %}

Como alternativa, presiona {% data variables.projects.command-palette-shortcut %} para abrir la paleta de comandos del proyecto y empieza a escribir "Filtrar por".

En el diseño del tablero, puedes hacer clic en los datos del elemento o filtrar los elementos con este valor. Por ejemplo, haz clic en un asignado para mostrar únicamente los elementos de este. Para eliminar el filtro, haz clic en los datos de el elemento nuevamente.

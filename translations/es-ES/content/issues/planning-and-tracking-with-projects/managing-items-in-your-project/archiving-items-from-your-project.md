---
title: 'Archivado de elementos de {% data variables.projects.project_v2 %}'
shortTitle: Archiving items
intro: 'Puedes archivar elementos, mantenerlos disponibles para restaurarlos, o bien eliminarlos permanentemente.'
miniTocMaxHeadingLevel: 2
versions:
  feature: projects-v2
type: tutorial
topics:
  - Projects
allowTitleToDifferFromFilename: true
ms.openlocfilehash: 2348805c920e456e2b8388c2ac41d4badd757703
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107721'
---
## Archivado de elementos

Puedes archivar un elemento para mantener el contexto sobre este en el proyecto, pero eliminarlo de las vistas del proyecto. {% ifversion projects-v2-auto-archive %}También puedes configurar los flujos de trabajo integrados del proyecto de modo que se archiven automáticamente los elementos que cumplan determinados criterios. Para obtener más información, consulta "[Archivado automático de elementos](/issues/planning-and-tracking-with-projects/automating-your-project/archiving-items-automatically)".{% endif %}

{% data reusables.projects.select-an-item %} {% data reusables.projects.open-item-menu %}
1. Haga clic en **Archive** (Archivar).
   ![Captura de pantalla en la que se muestra la opción Archivar](/assets/images/help/projects-v2/archive-menu-item.png)
1. Cuando se te solicite, haz clic en **Archivar** para confirmar la elección.
   ![Captura de pantalla en la que se muestra la pregunta Archivar](/assets/images/help/projects-v2/archive-item-prompt.png)

## Restaurar los elementos archivados

1. Navegar a tu proyecto.
1. En la parte superior derecha, haz clic en {% octicon "kebab-horizontal" aria-label="The menu icon" %} para abrir el menú.
  ![Captura de pantalla en la que se muestra el icono de menú](/assets/images/help/projects-v2/open-menu.png)
1. En el menú, haz clic en {% octicon "archive" aria-label="The archive icon" %} **Elementos archivados**.
  ![Captura de pantalla en la que se muestra el elemento de menú "Elementos archivados"](/assets/images/help/projects-v2/archived-items-menu-item.png)
1. Opcionalmente, para filtrar los elementos archivados mostrados, escribe el filtro en el cuadro de texto situado encima de la lista de elementos. Para más información sobre los filtros disponibles, consulta "[Filtrado de proyectos](/issues/planning-and-tracking-with-projects/customizing-views-in-your-project/filtering-projects)".
   ![Captura de pantalla que muestra el campo para filtrar elementos archivados](/assets/images/help/issues/filter-archived-items.png)   
1. A la izquierda de cada uno de los títulos de los elementos, selecciona aquellos que quieres restaurar.
   ![Captura de pantalla que muestra las casillas situadas junto a los elementos archivados](/assets/images/help/issues/select-archived-item.png)   
1. Para restaurar los elementos seleccionados, encima de la lista de elementos, haz clic en **Restaurar**. 
   ![Captura de pantalla que muestra el botón "Restaurar"](/assets/images/help/issues/restore-archived-item-button.png)

## Eliminar elementos

Puedes borrar un elemento para eliminarlo por completo del proyecto.

{% data reusables.projects.select-an-item %} {% data reusables.projects.open-item-menu %}
1. Haz clic en **Eliminar del proyecto**.
   ![Captura de pantalla en la que se muestra la opción Eliminar](/assets/images/help/projects-v2/delete-menu-item.png)
1. Cuando se te solicite, haz clic en **Eliminar** para confirmar la elección.
   ![Captura de pantalla en la que se muestra la pregunta Eliminar](/assets/images/help/projects-v2/delete-item-prompt.png)

---
title: Archivado automático de elementos
shortTitle: Archiving automatically
intro: Puedes configurar los flujos de trabajo integrados del proyecto para archivar automáticamente los elementos que cumplan criterios específicos.
miniTocMaxHeadingLevel: 3
versions:
  feature: projects-v2-auto-archive
type: tutorial
topics:
  - Projects
ms.openlocfilehash: 75346021f51cb8cc373b4a50aef43e0b5c7646dc
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107225'
---
{% note %}

**Nota:** Los flujos de trabajo integrados están disponibles como parte de una versión beta limitada.

{% endnote %}

## Acerca del archivado automático de elementos

Puedes configurar los flujos de trabajo integrados del proyecto para archivar automáticamente los elementos. El archivado de elementos permitirá mantenerse por debajo del límite de {% data variables.projects.item_limit %} elementos de cada proyecto.

Puedes usar los filtros `is`, `reason` y `last-updated` para especificar cuándo se debe archivar un elemento.

Al habilitar el archivado automático para problemas o solicitudes de incorporación de cambios, también se archivarán los elementos del proyecto que cumplan los criterios. Puede producirse algún retraso en el archivado de un número elevado de elementos que ya cumplen los criterios.

Los proyectos también tienen un límite en el número de elementos archivados que pueden contener. El proyecto puede contener hasta {% data variables.projects.archived_item_limit %} elementos archivados. Para obtener más información sobre cómo eliminar elementos de forma permanente, consulta "[Eliminación de elementos ](/issues/planning-and-tracking-with-projects/managing-items-in-your-project/archiving-items-from-your-project#deleting-items)".

## Configuración del archivado automático en el proyecto

{% data reusables.projects.access-workflows %}
1. En la lista "Flujos de trabajo predeterminados", haz clic en **Archivado automático de elementos**.
   
   ![Captura de pantalla en la que se muestran los flujos de trabajo de archivado automático](/assets/images/help/projects-v2/archive-workflows.png)
   
1. Junto a **Cuándo**, comprueba los tipos de elemento que quieres archivar automáticamente.
   
   ![Captura de pantalla en la que se muestra la configuración "cuando" para un flujo de trabajo](/assets/images/help/projects-v2/workflow-when-archive.png)

1. Junto a {% octicon "filter" aria-label="The filter icon" %}, escribe los criterios de filtro que quieres usar para archivar automáticamente los elementos. Solo puedes usar los filtros `is`, `reason` y `last-updated`. Para obtener más información sobre la sintaxis de filtrado, consulta [Filtrado de proyectos](/issues/planning-and-tracking-with-projects/customizing-views-in-your-project/filtering-projects).
   
   ![Captura de pantalla en la que se muestra el área de texto de filtro](/assets/images/help/projects-v2/auto-archive-filter.png)
   
1. Si el flujo de trabajo está deshabilitado, haz clic en el botón de alternancia situado junto a **Desactivado** para habilitarlo.
   
   ![Captura de pantalla en la que se muestra el control "Activado/Desactivado" para un flujo de trabajo](/assets/images/help/projects-v2/workflow-enable.png)
   

## Información adicional

* "[Archivado de elementos de tu proyecto](/issues/planning-and-tracking-with-projects/managing-items-in-your-project/archiving-items-from-your-project)"
* "[Uso de las automatizaciones integradas](/issues/planning-and-tracking-with-projects/automating-your-project/using-the-built-in-automations)"

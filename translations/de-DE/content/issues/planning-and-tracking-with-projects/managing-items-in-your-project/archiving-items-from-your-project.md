---
title: 'Archivieren von Elementen aus deinem {% data variables.projects.project_v2 %}'
shortTitle: Archiving items
intro: 'Du kannst Elemente archivieren, sie zur Wiederherstellung verfügbar halten oder sie endgültig löschen.'
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
ms.contentlocale: de-DE
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107717'
---
## Archivieren von Elementen

Du kannst ein Element archivieren, um den Kontext für das Element im Projekt beizubehalten, das Element selbst jedoch aus den Projektansichten zu entfernen. {% ifversion projects-v2-auto-archive %}Du kannst die integrierten Workflows deines Projekts auch so konfigurieren, dass Elemente automatisch archiviert werden, die bestimmten Kriterien entsprechen. Weitere Informationen findest du unter [Automatisches Archivieren von Elementen](/issues/planning-and-tracking-with-projects/automating-your-project/archiving-items-automatically).{% endif %}

{% data reusables.projects.select-an-item %} {% data reusables.projects.open-item-menu %}
1. Klicke auf **Archive** (Archivieren).
   ![Screenshot der Option „Archivieren“](/assets/images/help/projects-v2/archive-menu-item.png)
1. Bestätige bei entsprechender Aufforderung deine Wahl, indem du auf **Archivieren** klickst.
   ![Screenshot der Aufforderung zum Archivieren](/assets/images/help/projects-v2/archive-item-prompt.png)

## Wiederherstellen archivierter Elemente

1. Navigiere zu deinem Projekt.
1. Klicke rechts oben auf {% octicon "kebab-horizontal" aria-label="The menu icon" %}, um das Menü zu öffnen.
  ![Screenshot des Menüsymbols](/assets/images/help/projects-v2/open-menu.png)
1. Klicke im Menü auf {% octicon "archive" aria-label="The archive icon" %} **Archivierte Elemente**.
  ![Screenshot des Menüelements „Archivierte Elemente“](/assets/images/help/projects-v2/archived-items-menu-item.png)
1. Um die angezeigten archivierten Elemente zu filtern, kannst du deinen Filter in das Textfeld über der Liste mit den Elementen eingeben. Weitere Informationen zu den verfügbaren Filtern findest du unter [Filtern von Projekten](/issues/planning-and-tracking-with-projects/customizing-views-in-your-project/filtering-projects).
   ![Screenshot des Felds zum Filtern archivierter Elemente](/assets/images/help/issues/filter-archived-items.png)   
1. Wähle links neben jedem Elementtitel die Elemente aus, die du wiederherstellen möchtest.
   ![Screenshot mit Kontrollkästchen neben archivierten Elementen](/assets/images/help/issues/select-archived-item.png)   
1. Um die ausgewählten Elemente wiederherzustellen, klicke oberhalb der Liste der Elemente auf **Wiederherstellen**. 
   ![Screenshot mit der Schaltfläche „Wiederherstellen“](/assets/images/help/issues/restore-archived-item-button.png)

## Löschen von Elementen

Du kannst ein Element löschen, um es vollständig aus dem Projekt zu entfernen.

{% data reusables.projects.select-an-item %} {% data reusables.projects.open-item-menu %}
1. Klicke auf **Aus Projekt löschen**.
   ![Screenshot der Löschoption](/assets/images/help/projects-v2/delete-menu-item.png)
1. Bestätige bei entsprechender Aufforderung deine Wahl, indem du auf **Löschen** klickst.
   ![Screenshot der Aufforderung zum Löschen](/assets/images/help/projects-v2/delete-item-prompt.png)

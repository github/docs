---
title: Automatisches Archivieren von Elementen
shortTitle: Archiving automatically
intro: 'Du kannst die integrierten Workflows deines Projekts so konfigurieren, dass Elemente, die bestimmte Kriterien erfüllen, automatisch archiviert werden.'
miniTocMaxHeadingLevel: 3
versions:
  feature: projects-v2-auto-archive
type: tutorial
topics:
  - Projects
ms.openlocfilehash: 75346021f51cb8cc373b4a50aef43e0b5c7646dc
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107221'
---
{% note %}

**Hinweis:** Integrierte Workflows sind im Rahmen einer Betaversion mit eingeschränkten Funktionen verfügbar.

{% endnote %}

## Informationen zum automatischen Archivieren von Elementen

Du kannst die integrierten Workflows deines Projekts so konfigurieren, dass Elemente automatisch archiviert werden. Das Archivieren von Elementen trägt dazu bei, die Obergrenze von {% data variables.projects.item_limit %} Elementen in jedem Projekt einzuhalten.

Du kannst mit den Filtern `is`, `reason` und `last-updated` festlegen, wann ein Element archiviert werden soll.

Wenn du die automatische Archivierung für Issues oder Pull Requests aktivierst, werden auch Elemente in deinem Projekt archiviert, die bereits deinen Kriterien entsprechen. Bei der Archivierung einer großen Anzahl von Elementen, die die Kriterien bereits erfüllen, kann es zu einer gewissen Verzögerung kommen.

Für Projekte gilt außerdem eine Obergrenze für die Anzahl an archivierten Objekten, die sie enthalten können. Dein Projekt kann bis zu {% data variables.projects.archived_item_limit %} archivierte Elemente enthalten. Weitere Informationen zum dauerhaften Löschen von Elementen findest du unter [Löschen von Elementen ](/issues/planning-and-tracking-with-projects/managing-items-in-your-project/archiving-items-from-your-project#deleting-items).

## Konfigurieren der automatischen Archivierung in deinem Projekt

{% data reusables.projects.access-workflows %}
1. Klicke in der Liste „Standardworkflows“ auf **Elemente automatisch archivieren**.
   
   ![Screenshot der Funktion zum automatischen Archivieren von Workflows](/assets/images/help/projects-v2/archive-workflows.png)
   
1. Aktiviere neben **Wann** die Elementtypen, die du automatisch archivieren möchtest.
   
   ![Screenshot der Konfiguration von „Wann“ für einen Workflow](/assets/images/help/projects-v2/workflow-when-archive.png)

1. Gib neben {% octicon "filter" aria-label="The filter icon" %} die Filterkriterien ein, die du für die automatische Archivierung von Elementen verwenden möchtest. Du kannst nur die Filter `is`, `reason` und `last-updated` verwenden. Weitere Informationen zur Filtersyntax findest du unter [Filtern von Projekten](/issues/planning-and-tracking-with-projects/customizing-views-in-your-project/filtering-projects).
   
   ![Screenshot des Filtertextbereichs](/assets/images/help/projects-v2/auto-archive-filter.png)
   
1. Wenn der Workflow deaktiviert ist, klicke auf die Umschaltfläche neben **Aus**, um den Workflow zu aktivieren.
   
   ![Screenshot der Umschaltfläche „Ein/Aus“ für einen Workflow](/assets/images/help/projects-v2/workflow-enable.png)
   

## Weitere Informationsquellen

* [Archivieren von Elementen aus deinem Projekt](/issues/planning-and-tracking-with-projects/managing-items-in-your-project/archiving-items-from-your-project)
* [Verwenden der integrierten Automatisierungen](/issues/planning-and-tracking-with-projects/automating-your-project/using-the-built-in-automations)

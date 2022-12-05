---
title: 'Archivieren von Karten für ein {% data variables.product.prodname_project_v1 %}'
intro: 'Du kannst {% data variables.projects.projects_v1_board %}karten archivieren, um deinen Workflow übersichtlich zu halten, ohne die Verlaufsinformationen eines Projekts zu verlieren.'
redirect_from:
  - /github/managing-your-work-on-github/tracking-the-progress-of-your-work-with-project-boards/archiving-cards-on-a-project-board
  - /articles/archiving-cards-on-a-project-board
  - /github/managing-your-work-on-github/archiving-cards-on-a-project-board
versions:
  feature: projects-v1
topics:
  - Pull requests
shortTitle: 'Archive cards on {% data variables.product.prodname_project_v1 %}'
allowTitleToDifferFromFilename: true
ms.openlocfilehash: bef90f56a55d6d087c21603586def91ec2f1c9ed
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 10/25/2022
ms.locfileid: '148109689'
---
{% data reusables.projects.project_boards_old %}

Die Automatisierung in deinem {% data variables.projects.projects_v1_board %} gilt nicht für archivierte {% data variables.projects.projects_v1_board %}karten. Wenn du beispielsweise einen Issue im Archiv eines {% data variables.projects.projects_v1_board %}s schließt, wird die archivierte Karte nicht automatisch in die Spalte „Fertig“ verschoben. Wenn du eine Karte aus dem {% data variables.projects.projects_v1_board %}archiv wiederherstellst, befindet sich die Karte wieder in der Spalte, aus der sie archiviert wurde.

## Archivieren von Karten auf einem {% data variables.projects.projects_v1_board %}

1. Suche in einem {% data variables.projects.projects_v1_board %} die Karte, die du archivieren möchtest, und klicke dann auf {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %}.
![Liste der Optionen für das Bearbeiten eines Projektboard-Tickets](/assets/images/help/projects/select-archiving-options-project-board-card.png)
2. Klicke auf **Archive** (Archivieren).
![Option zum Archivieren aus Menü auswählen](/assets/images/help/projects/archive-project-board-card.png)

## Wiederherstellen von Karten auf einem {% data variables.projects.projects_v1_board %} über die Randleiste

{% data reusables.project-management.click-menu %}
2. Klicke auf {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %} und dann auf **View archive** (Archiv anzeigen).
  ![Option zum Anzeigen des Archivs aus Menü auswählen](/assets/images/help/projects/select-view-archive-option-project-board-card.png)
3. Klicke oberhalb der {% data variables.projects.projects_v1_board %}karte, die du archivieren möchtest, auf **Wiederherstellen**.
  ![Wiederherstellung des Projektboard-Tickets auswählen](/assets/images/help/projects/restore-card.png)

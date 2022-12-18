---
title: 'Erneutes Öffnen eines geschlossenen {% data variables.product.prodname_project_v1 %}'
intro: 'Du kannst ein geschlossenes {% data variables.projects.projects_v1_board %} erneut öffnen und eine beliebige für das {% data variables.projects.projects_v1_board %} konfigurierte Workflowautomatisierung neu starten.'
redirect_from:
  - /github/managing-your-work-on-github/managing-project-boards/reopening-a-closed-project-board
  - /articles/reopening-a-closed-project-board
  - /github/managing-your-work-on-github/reopening-a-closed-project-board
versions:
  feature: projects-v1
topics:
  - Pull requests
shortTitle: 'Reopen {% data variables.product.prodname_project_v1 %}'
allowTitleToDifferFromFilename: true
ms.openlocfilehash: e0101378c0b7049f7cba5e04dd28231a1237d0c5
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 10/25/2022
ms.locfileid: '148109574'
---
{% data reusables.projects.project_boards_old %}

Du kannst ein geschlossenes {% data variables.projects.projects_v1_board %} erneut öffnen und eine beliebige für das {% data variables.projects.projects_v1_board %} konfigurierte Workflowautomatisierung neu starten. Weitere Informationen findest du unter [Schließen eines {% data variables.product.prodname_project_v1 %}](/articles/closing-a-project-board).

Wenn du ein {% data variables.projects.projects_v1_board %} erneut öffnest, hast Du die Möglichkeit, die Automatisierung zu *synchronisieren*. Dadurch wird die Position der Karten auf dem Projektboard entsprechend den für das Board konfigurierten Automatisierungseinstellungen aktualisiert.

1. Navigiere zu dem {% data variables.projects.projects_v1_board %}, das du erneut öffnen möchtest.
{% data reusables.project-management.click-menu %}
3. Wähle aus, ob die Automatisierung für dein {% data variables.projects.projects_v1_board %} synchronisiert werden soll oder beim erneuten Öffnen deines {% data variables.projects.projects_v1_board %} keine Synchronisierung erfolgen soll.
    - Klicke auf **Reopen and sync project** (Projekt erneut öffnen und synchronisieren), um dein {% data variables.projects.projects_v1_board %} erneut zu öffnen und die Automatisierung zu synchronisieren.
  ![Schaltfläche „Reopen and sync project“ (Projekt erneut öffnen und synchronisieren) auswählen](/assets/images/help/projects/reopen-and-sync-project.png)
    - Klicke auf **Reopen only** (Nur erneut öffnen), um dein {% data variables.projects.projects_v1_board %} erneut zu öffnen, ohne die Automatisierung zu synchronisieren. Klicke dann auf **Reopen only** (Nur erneut öffnen).
  ![Dropdownmenü zum erneuten Öffnen eines geschlossenen Projektboards](/assets/images/help/projects/reopen-closed-project-board-drop-down-menu.png)

## Weiterführende Themen

- [Konfigurieren der Automatisierung für {% data variables.product.prodname_projects_v1 %}](/articles/configuring-automation-for-project-boards)

---
title: 'Kopieren eines {% data variables.product.prodname_project_v1 %}s'
intro: 'Du kannst ein {% data variables.projects.projects_v1_board %} kopieren, um schnell ein neues Projekt zu erstellen. Das Kopieren häufig verwendeter oder hoch angepasster {% data variables.projects.projects_v1_boards %} unterstützt die Standardisierung deines Workflows.'
redirect_from:
  - /github/managing-your-work-on-github/managing-project-boards/copying-a-project-board
  - /articles/copying-a-project-board
  - /github/managing-your-work-on-github/copying-a-project-board
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Pull requests
allowTitleToDifferFromFilename: true
ms.openlocfilehash: 33f2822f338a2210c87ec9baad986231f11fe310
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 10/25/2022
ms.locfileid: '148108378'
---
{% data reusables.projects.project_boards_old %}

Durch das Kopieren eines {% data variables.projects.projects_v1_board %} kannst du den Titel, die Beschreibung und die Automatisierungskonfiguration eines {% data variables.projects.projects_v1_board %}s wiederverwenden. Du kannst {% data variables.projects.projects_v1_boards %} kopieren. Dadurch entfällt der manuelle Prozess zum Erstellen neuer {% data variables.projects.projects_v1_boards %} für ähnliche Workflows.

Du benötigst Lesezugriff für ein {% data variables.projects.projects_v1_board %}, um es in ein Repository oder eine Organisation zu kopieren, für das bzw. die du Schreibzugriff hast.

Wenn du ein {% data variables.projects.projects_v1_board %} in eine Organisation kopierst, wird die Sichtbarkeit des {% data variables.projects.projects_v1_board %}s standardmäßig auf privat festgelegt, kann jedoch über eine entsprechende Option geändert werden. Weitere Informationen findest du unter [Ändern der Sichtbarkeit des {% data variables.product.prodname_project_v1 %}s](/articles/changing-project-board-visibility/).

Die Automatisierung eines {% data variables.projects.projects_v1_board %} ist ebenfalls standardmäßig aktiviert. Weitere Informationen findest du unter [Informationen zur Automatisierung für {% data variables.product.prodname_projects_v1 %}](/articles/about-automation-for-project-boards/).

1. Navigiere zu dem {% data variables.projects.projects_v1_board %}, das du kopieren möchtest.
{% data reusables.project-management.click-menu %}
3. Klicke auf {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %} und dann auf **Kopieren**.
![Option „Kopieren“ im Dropdownmenü auf der Projektboard-Randleiste](/assets/images/help/projects/project-board-copy-setting.png)
4. Klicke im Dropdownmenü unter „Besitzer“ auf das Repository oder die Organisation, in das bzw. die du das Projektboard kopieren möchtest.
![Besitzer von kopiertem Projektboard aus Dropdownmenü auswählen](/assets/images/help/projects/copied-project-board-owner.png)
5. Gib wahlweise unter „Projekt board name“ (Name des Projektboards) den Namen des kopierten {% data variables.projects.projects_v1_board %}s ein.
![Feld zum Eingeben eines Namens für das kopierte Projektboard](/assets/images/help/projects/copied-project-board-name.png)
6. Wahlweise kannst du unter „Beschreibung“ eine Beschreibung des kopierten Projektboards eingeben, die anderen Benutzern angezeigt wird.
![Feld zum Eingeben einer Beschreibung für das kopierte Projektboard](/assets/images/help/projects/copied-project-board-description.png)
7. Wahlweise kannst du unter „Automation settings“ (Automatisierungseinstellungen) auswählen, ob du die konfigurierten automatischen Workflows kopieren möchtest. Diese Option ist standardmäßig aktiviert. Weitere Informationen findest du unter [Informationen zur Automatisierung für Projektboards](/articles/about-automation-for-project-boards/).
![Auswählen von Automatisierungseinstellungen für das kopierte Projektboard](/assets/images/help/projects/copied-project-board-automation-settings.png) {% data reusables.project-management.choose-visibility %}
9. Klicke auf **Projekt kopieren**.
![Schaltfläche zum Bestätigen des Kopiervorgangs](/assets/images/help/projects/confirm-copy-project-board.png)

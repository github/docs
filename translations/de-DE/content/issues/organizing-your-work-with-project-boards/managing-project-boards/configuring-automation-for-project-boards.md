---
title: 'Konfigurieren der Automatisierung für {% data variables.product.prodname_projects_v1 %}'
intro: 'Du kannst automatische Workflows einrichten, die Issues und Pull Requests in eine {% data variables.projects.projects_v1_board %}-Spalte verschieben, wenn ein festgelegtes Ereignis auftritt.'
redirect_from:
  - /github/managing-your-work-on-github/managing-project-boards/configuring-automation-for-project-boards
  - /articles/configuring-automation-for-project-boards
  - /github/managing-your-work-on-github/configuring-automation-for-project-boards
versions:
  feature: projects-v1
topics:
  - Pull requests
  - Projects
  - Issues
  - Project management
shortTitle: Configure automation
type: how_to
allowTitleToDifferFromFilename: true
ms.openlocfilehash: faf559c3423178b43f3b524bbf3cdc41acd18a92
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 10/25/2022
ms.locfileid: '148109700'
---
{% data reusables.projects.project_boards_old %}

{% data reusables.project-management.automate-project-board-permissions %} Weitere Informationen findest Du in den [Informationen zur Automatisierung für {% data variables.product.prodname_projects_v1 %}](/articles/about-automation-for-project-boards).

{% data reusables.project-management.use-automated-template %}

{% data reusables.project-management.resync-automation %}

{% tip %}

**Tipp**: Klicke zum Bearbeiten von Spalten, für die die Automatisierung bereits konfiguriert ist, unten in der Spalte auf **Manage** (Verwalten).

{% endtip %}

1. Navigiere zu dem {% data variables.projects.projects_v1_board %}, das du automatisieren möchtest.
2. Klicke in der Spalte, die du automatisieren möchtest, auf {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %}.
![Symbol „Bearbeiten“](/assets/images/help/projects/edit-column-button.png)
3. Klicke auf **Manage automation** (Automatisierung verwalten).
![Schaltfläche „Manage automation“ (Automatisierung verwalten)](/assets/images/help/projects/manage-automation-button.png)
4. Wähle im Dropdownmenü „Preset“ (Voreinstellung) eine Voreinstellung für die Automatisierung aus.
![Voreinstellung für Automatisierung aus Menü auswählen](/assets/images/help/projects/select-automation.png)
5. Wähle die Workflow-Automatisierungen aus, die du für die Spalte konfigurieren möchtest.
![Liste der Optionen für die Automatisierung der Spalte](/assets/images/help/projects/select-automation-options-existing-column.png)
6. Klicke auf **Update automation** (Automatisierung aktualisieren).

## Weiterführende Themen
- [Informationen zur Automatisierung für {% data variables.product.prodname_projects_v1 %}](/articles/about-automation-for-project-boards)

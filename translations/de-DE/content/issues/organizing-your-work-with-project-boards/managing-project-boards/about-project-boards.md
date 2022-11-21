---
title: 'Informationen zu {% data variables.product.prodname_projects_v1 %}'
intro: '{% data variables.product.prodname_projects_v1_caps %} auf {% data variables.product.product_name %} helfen dir beim Organisieren und Priorisieren deiner Arbeit. Du kannst {% data variables.projects.projects_v1_boards %} für die Arbeit an bestimmten Features, für umfassende Roadmaps oder auch für Releaseprüflisten erstellen. Mit {% data variables.product.prodname_projects_v1 %} besitzt du die Flexibilität, angepasste Workflows zu erstellen, die deinen Anforderungen entsprechen.'
redirect_from:
  - /github/managing-your-work-on-github/managing-project-boards/about-project-boards
  - /articles/about-projects
  - /articles/about-project-boards
  - /github/managing-your-work-on-github/about-project-boards
versions:
  feature: projects-v1
topics:
  - Pull requests
allowTitleToDifferFromFilename: true
ms.openlocfilehash: c14ee749a2e97bb9ef608e1b2d548098f18af0d0
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107621'
---
{% data reusables.projects.project_boards_old %}

{% data variables.projects.projects_v1_boards_caps %} bestehen aus Issues, Pull Requests und Notizen, die als Karten in Spalten deiner Wahl kategorisiert werden. Du kannst per Drag-and-Drop oder Tastenkürzel Tickets innerhalb einer Spalte neu anordnen, Tickets von Spalte zu Spalte verschieben und die Reihenfolge der Spalten ändern.

{% data variables.projects.projects_v1_board_caps %}karten enthalten relevante Metadaten für Issues und Pull Requests, wie Kennzeichnungen, Bearbeiter*innen, Status und die öffnende Person. {% data reusables.project-management.edit-in-project %}

Du kannst innerhalb von Spalten Notizen erstellen, die als Erinnerungen an Aufgaben oder Verweise auf Issues und Pull Requests aus einem beliebigen Repository auf {% data variables.location.product_location %} dienen. Zudem kannst du dem {% data variables.projects.projects_v1_board %} über Notizen auch relevante Informationen hinzufügen. Du kannst eine Referenzkarte für ein anderes {% data variables.projects.projects_v1_board %} erstellen, indem du einer Notiz einen Link hinzufügst. Wenn die Notiz für deine Bedürfnisse nicht ausreicht, kannst du sie in ein Issue konvertieren. Weitere Informationen zum Konvertieren von Notizen in Issues findest du unter [Hinzufügen von Notizen zu einem {% data variables.product.prodname_project_v1 %}](/articles/adding-notes-to-a-project-board).

Arten von Projektboards:

- **Benutzereigene {% data variables.projects.projects_v1_board %}s** können Issues und Pull Requests aus jedem persönlichen Repository enthalten.
- **Organisationsweite {% data variables.projects.projects_v1_board %}s** können Issues und Pull Requests aus einem beliebigen Repository enthalten, das zu einer Organisation gehört.  {% data reusables.project-management.link-repos-to-project-board %} Weitere Informationen findest du unter [Verknüpfen eines Repositorys mit einem {% data variables.product.prodname_project_v1 %}](/articles/linking-a-repository-to-a-project-board).
- **Repository-{% data variables.projects.projects_v1_board %}s** sind auf Issues und Pull Requests innerhalb eines einzelnen Repositorys festgelegt. Du kannst auch Hinweise enthalten, die auf Issues und Pull Requests in anderen Repositorys verweisen.

## Erstellen und Anzeigen eines benutzereigenen {% data variables.projects.projects_v1_boards %}

Zum Erstellen eines {% data variables.projects.projects_v1_board %}s für deine Organisation musst du ein Organisationsmitglied sein. Organisationsbesitzer*innen und Personen mit {% data variables.projects.projects_v1_board %}-Administratorberechtigungen können den Zugriff auf das {% data variables.projects.projects_v1_board %} anpassen.

{% ifversion classic-project-visibility-permissions %}{% data reusables.projects.owners-can-limit-visibility-permissions %}{% endif %}

Wenn ein organisationseigenes {% data variables.projects.projects_v1_board %} Issues oder Pull Requests aus einem Repository enthält, für das du keine Leseberechtigung hast, wird die Karte zensiert.  Weitere Informationen findest du unter [{% data variables.product.prodname_project_v1_caps %}-Berechtigungen für eine Organisation](/articles/project-board-permissions-for-an-organization).

In der Aktivitätsansicht wird der aktuelle Verlauf des {% data variables.projects.projects_v1_board %}s angezeigt, z. B. Karten, die von jemandem erstellt oder zwischen den Spalten verschoben wurden. Um auf die Aktivitätsansicht zuzugreifen, klicke auf **Menü**, und scrolle nach unten.

Du kannst {% data variables.projects.projects_v1_board %}karten filtern, um auf einem {% data variables.projects.projects_v1_board %} nach bestimmten Karten zu suchen oder eine Teilmenge der Karten anzuzeigen. Weitere Informationen findest du unter [Filtern von Karten auf einem {% data variables.product.prodname_project_v1 %}](/articles/filtering-cards-on-a-project-board).

Du kannst Karten archivieren, um deinen Workflow zu vereinfachen und abgeschlossene Aufgaben aus deinem {% data variables.projects.projects_v1_board %} beizubehalten. Weitere Informationen findest du unter [Archivieren von Karten auf einem {% data variables.product.prodname_project_v1 %}](/articles/archiving-cards-on-a-project-board).

Wenn du alle deine {% data variables.projects.projects_v1_board %}aufgaben abgeschlossen hast oder das {% data variables.projects.projects_v1_board %} nicht mehr benötigst, kannst du das {% data variables.projects.projects_v1_board %} schließen. Weitere Informationen findest du unter [Schließen eines {% data variables.product.prodname_project_v1 %}](/articles/closing-a-project-board).

Du kannst auch [{% data variables.projects.projects_v1_boards %} in einem Repository](/articles/disabling-project-boards-in-a-repository) oder [{% data variables.projects.projects_v1_boards %} in deiner Organisation deaktivieren](/articles/disabling-project-boards-in-your-organization), wenn du deine Arbeit auf andere Weise nachverfolgen möchtest.

{% data reusables.project-management.project-board-import-with-api %}

## Vorlagen für {% data variables.projects.projects_v1_boards %}

Du kannst Vorlagen verwenden, um schnell ein neues {% data variables.projects.projects_v1_board %} einzurichten. Wenn du eine Vorlage zum Erstellen eines {% data variables.projects.projects_v1_board %} verwendest, enthält dein neues Board Spalten sowie Karten mit Tipps für die Verwendung von {% data variables.product.prodname_projects_v1 %}. Du kannst auch eine Vorlage mit bereits konfigurierter Automatisierung wählen.

| Vorlage | BESCHREIBUNG |
| --- | --- |
| Grundlegendes Kanban | Verfolge deine Aufgaben mit den Spalten „Zu Bearbeiten“, „In Bearbeitung“ oder „Abgeschlossen“ |
| Automatisiertes Kanban | Tickets werden automatisch zwischen den Spalten „Zu Bearbeiten“, „In Bearbeitung“ oder „Abgeschlossen“ verschoben | 
| Automatisiertes Kanban mit Review | Tickets werden automatisch zwischen den Spalten „Zu Bearbeiten“, „In Bearbeitung“ oder „Abgeschlossen“ verschoben, mit zusätzlichen Auslösern für den Pull-Request-Status |
| Fehler-Selektion | Selektiere und priorisiere Fehler mit den Spalten „Zu Bearbeiten“, „Hohe Priorität“, „Niedrige Priorität“ und „Abgeschlossen“ |

Weitere Informationen zur Automatisierung für {% data variables.product.prodname_projects_v1 %} findest du unter [Informationen zur Automatisierung für {% data variables.product.prodname_projects_v1 %}](/articles/about-automation-for-project-boards).

![{% data variables.product.prodname_project_v1 %} mit Vorlage für grundlegendes Kanban](/assets/images/help/projects/project-board-basic-kanban-template.png)

{% data reusables.project-management.copy-project-boards %}

## Weiterführende Themen

- [Erstellen eines {% data variables.product.prodname_project_v1 %}](/articles/creating-a-project-board)
- [Bearbeiten eines {% data variables.product.prodname_project_v1 %}](/articles/editing-a-project-board){% ifversion fpt or ghec %}
- [Kopieren eines {% data variables.product.prodname_project_v1 %}](/articles/copying-a-project-board){% endif %}
- [Hinzufügen von Issues und Pull Requests zu einem {% data variables.product.prodname_project_v1 %}](/articles/adding-issues-and-pull-requests-to-a-project-board)
- [{% data variables.product.prodname_project_v1_caps %}-Berechtigungen für eine Organisation](/articles/project-board-permissions-for-an-organization)
- [Tastenkombinationen](/articles/keyboard-shortcuts/#project-boards)

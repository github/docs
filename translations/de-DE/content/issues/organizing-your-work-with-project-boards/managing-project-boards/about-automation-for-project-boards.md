---
title: 'Informationen zur Automatisierung für {% data variables.product.prodname_projects_v1 %}'
intro: 'Du kannst automatische Workflows konfigurieren, um zu gewährleisten, dass der Status der {% data variables.projects.projects_v1_board %}karten mit den zugehörigen Issues und Pull Requests synchronisiert wird.'
redirect_from:
  - /github/managing-your-work-on-github/managing-project-boards/about-automation-for-project-boards
  - /articles/about-automation-for-project-boards
  - /github/managing-your-work-on-github/about-automation-for-project-boards
versions:
  feature: projects-v1
topics:
  - Pull requests
shortTitle: 'Automation for {% data variables.product.prodname_projects_v1 %}'
allowTitleToDifferFromFilename: true
ms.openlocfilehash: 28c4719cca14dff54d971b9a081837c172f4da76
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 10/25/2022
ms.locfileid: '148108403'
---
{% data reusables.projects.project_boards_old %}

{% data reusables.project-management.automate-project-board-permissions %} Weitere Informationen findest du unter [{% data variables.product.prodname_projects_v1_caps %}-Berechtigungen für eine Organisation](/articles/project-board-permissions-for-an-organization).

Du kannst Aktionen basierend auf auslösenden Ereignissen für {% data variables.projects.projects_v1_board %}spalten automatisieren. Dadurch werden einige der manuellen Aufgaben beim Verwalten von {% data variables.projects.projects_v1_board %}s entfernt. So kannst du beispielsweise eine „Zu Bearbeiten“-Spalte konfigurieren, der alle neuen Issues oder Pull Requests, die du einem {% data variables.projects.projects_v1_board %} hinzufügst, automatisch hinzugefügt werden. Weitere Informationen findest du unter [Konfigurieren der Automatisierung für {% data variables.product.prodname_projects_v1 %}](/articles/configuring-automation-for-project-boards).  

{% data reusables.project-management.use-automated-template %}

{% data reusables.project-management.copy-project-boards %}

{% data variables.projects.projects_v1_board_caps %}automatisierung kann auch dazu beitragen, Teams ein gemeinsames Verständnis für den Zweck eines {% data variables.projects.projects_v1_board %}s und den Entwicklungsprozess des Teams zu vermitteln, indem ein Standardworkflow für bestimmte Aktionen erstellt wird.

{% data reusables.project-management.resync-automation %}

## Automatisierungsoptionen

| Spaltenvoreinstellung | Konfigurationsoptionen |
| --- | --- |
| Folgendes ist zu erledigen | <ul><li>Alle neu hinzugefügten Issues hierhin verschieben</li><li>Alle neu hinzugefügten Pull Requests hierhin verschieben</li><li>Alle erneut geöffneten Issues hierhin verschieben</li><li>Alle erneut geöffneten Pull Requests hierhin verschieben</li></ul> |
| In Bearbeitung | <ul><li>Alle erneut geöffneten Pull Requests hierhin verschieben</li><li>Alle erneut geöffneten Issues hierhin verschieben</li><li>Alle erneut geöffneten Pull Requests hierhin verschieben</li><li>Alle Pull Requests, die der Mindestanzahl der erforderlichen Reviews des Basis-Branch entsprechen, hierhin verschieben</li><li>Alle Pull Requests, die der Mindestanzahl der erforderlichen Reviews des Basis-Branch nicht mehr entsprechen, hierhin verschieben</li></ul> |
| Fertig | <ul><li>Alle abgeschlossenen Issues hierhin verschieben</li><li>Alle zusammengeführten Pull Requests hierhin verschieben</li><li>Alle abgeschlossenen, nicht zusammengeführten Pull Requests hierhin verschieben</li></ul> |

## Projektfortschrittsverfolgung

Du kannst den Fortschritt auf deinem {% data variables.projects.projects_v1_board %} nachverfolgen. Tickets in den Spalten „Zu Bearbeiten“, „In Bearbeitung“ oder „Abgeschlossen“ zählen zum Gesamtprojektfortschritt. {% data reusables.project-management.project-progress-locations %}

Weitere Informationen findest du unter [Nachverfolgen des Fortschritts auf deinem {% data variables.product.prodname_project_v1 %}](/github/managing-your-work-on-github/tracking-progress-on-your-project-board).

## Weiterführende Themen
- [Konfigurieren der Automatisierung für {% data variables.product.prodname_projects_v1 %}](/articles/configuring-automation-for-project-boards){% ifversion fpt or ghec %}
- [Kopieren eines {% data variables.product.prodname_project_v1 %}](/articles/copying-a-project-board){% endif %}

---
title: Informationen zur Automatisierung für Projektboards
intro: 'Du kannst automatische Workflows konfigurieren, um zu gewährleisten, dass der Status der Projektboard-Tickets mit den zugehörigen Issues und Pull Requests synchronisiert wird.'
redirect_from:
  - /github/managing-your-work-on-github/managing-project-boards/about-automation-for-project-boards
  - /articles/about-automation-for-project-boards
  - /github/managing-your-work-on-github/about-automation-for-project-boards
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Pull requests
---

{% data reusables.project-management.automate-project-board-permissions %}  Weitere Informationen findest Du unter „[Projektboardberechtigungen für eine Organisation](/articles/project-board-permissions-for-an-organization).“

Du kannst Aktionen basierend auf dem Auslösen von Ereignissen für Projektboardspalten automatisieren. Dadurch entfallen einige der manuellen Aufgaben bei der Verwaltung eines Projektboards. So kannst Du beispielsweise eine „Zu Bearbeiten“-Spalte konfigurieren, zu der alle neuen Issues oder Pull Requests, die Du zu einem Projektboard hinzufügst, automatisch hinzugefügt werden. Weitere Informationen findest Du unter „[Automatisierung für Projektboards konfigurieren](/articles/configuring-automation-for-project-boards).“

{% data reusables.project-management.use-automated-template %}

{% data reusables.project-management.copy-project-boards %}

Durch die Automatisierung von Projektboards können Teams auch ein gemeinsames Verständnis für den Zweck eines Projektboards und den Entwicklungsprozess des Teams durch die Erstellung eines Standardworkflows für bestimmte Aktionen entwickeln.

{% data reusables.project-management.resync-automation %}

### Automatisierungsoptionen

| Spaltenvoreinstellung | Konfigurationsoptionen    |
| --------------------- | ------------------------- |
| Zu Bearbeiten         | <ul><li>Alle neu hinzugefügten Issues hierhin verschieben</li><li>Alle neu hinzugefügten Pull Requests hierhin verschieben</li><li>Alle erneut geöffneten Issues hierhin verschieben</li><li>Alle erneut geöffneten Pull Requests hierhin verschieben</li></ul> |
| In progress           | <ul><li>Alle erneut geöffneten Pull Requests hierhin verschieben</li><li>Alle erneut geöffneten Issues hierhin verschieben</li><li>Alle erneut geöffneten Pull Requests hierhin verschieben</li><li>Alle Pull Requests, die der Mindestanzahl der erforderlichen Reviews des Basis-Branch entsprechen, hierhin verschieben</li><li>Alle Pull Requests, die der Mindestanzahl der erforderlichen Reviews des Basis-Branch nicht mehr entsprechen, hierhin verschieben</li></ul> |
| Done (Erledigt)       | <ul><li>Alle abgeschlossenen Issues hierhin verschieben</li><li>Alle zusammengeführten Pull Requests hierhin verschieben</li><li>Alle abgeschlossenen, nicht zusammengeführten Pull Requests hierhin verschieben</li></ul> |

### Projektfortschrittsverfolgung

You can track the progress on your project board. Cards in the "To do", "In progress", or "Done" columns count toward the overall project progress. {% data reusables.project-management.project-progress-locations %}

For more information, see "[Tracking progress on your project board](/github/managing-your-work-on-github/tracking-progress-on-your-project-board)."

### Weiterführende Informationen
- „[Automatisierung für Projektboards konfigurieren](/articles/configuring-automation-for-project-boards)“{% if currentVersion == "free-pro-team@latest" %}
- „[Ein Projektboard kopieren](/articles/copying-a-project-board)“{% endif %}

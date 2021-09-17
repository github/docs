---
title: Informationen zu Projektboards
intro: 'Mit Projektboards auf {% data variables.product.product_name %} können Sie Ihre Arbeit organisieren und priorisieren. Du kannst Projektboards für die Arbeit an bestimmten Funktionen, für umfassende Roadmaps oder sogar für Checklisten für Releases erstellen. Projektboards bieten Dir die Flexibilität, individuelle Workflows nach Deinen Bedürfnissen zu erstellen.'
redirect_from:
  - /github/managing-your-work-on-github/managing-project-boards/about-project-boards
  - /articles/about-projects/
  - /articles/about-project-boards
  - /github/managing-your-work-on-github/about-project-boards
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Pull requests
---

Projektboards bestehen aus Issues, Pull Requests und Hinweisen, die als Tickets in Spalten Deiner Wahl kategorisiert werden. Du kannst per Drag-and-Drop oder Tastenkürzel Tickets innerhalb einer Spalte neu anordnen, Tickets von Spalte zu Spalte verschieben und die Reihenfolge der Spalten ändern.

Projektboard-Tickets enthalten relevante Metadaten für Issues und Pull Requests, wie Kennzeichnungen, Bearbeiter, Status und den öffnenden Benutzer. {% data reusables.project-management.edit-in-project %}

Sie können außerdem Hinweise innerhalb von Spalten erstellen und als Erinnerungen an Aufgaben oder Verweise auf Issues und Pull Requests aus einem beliebigen Repository auf {% data variables.product.product_name %} verwenden. Über Hinweise können Sie auch zugehörige Informationen zum Projektboard hinzufügen. Du kannst ein Referenzticket für ein anderes Projektboard erstellen, indem Du eine Verknüpfung zu einem Hinweis hinzufügst. Wenn der Hinweis für Deine Bedürfnisse nicht ausreicht, kannst Du ihn in einen Issue umwandeln. Weitere Informationen zur Konvertierung von Hinweisen im Projektboard in Issues findest Du unter „[Hinweise zu einem Projektboard hinzufügen](/articles/adding-notes-to-a-project-board).“

Arten von Projektboards:

- **Benutzereigene Projektboards** können Issues und Pull Requests aus jedem persönlichen Repository enthalten.
- **Organisationsweite Projektboards** können Issues und Pull Requests aus jedem Repository enthalten, das einer Organisation gehört.  {% data reusables.project-management.link-repos-to-project-board %} Weitere Informationen findest Du unter „[Ein Repository mit einem Projektboard verknüpfen](/articles/linking-a-repository-to-a-project-board).“
- **Repository-Projektboards** sind auf Issues und Pull Requests innerhalb eines einzelnen Repositorys ausgerichtet. Sie können auch Hinweise enthalten, die auf Issues und Pull Requests in anderen Repositorys verweisen.

### Projektboards erstellen und anzeigen

Um ein Projektboard für Deine Organisation zu erstellen, musst Du Mitglied der Organisation sein. Organisationsinhaber und Personen mit Administratorberechtigungen für Projektboards können den Zugriff auf das Projektboard anpassen.

Wenn ein organisationseigenes Projektboard Issues oder Pull Requests aus einem Repository enthält, für das Du keine Leseberechtigung hast, wird das Ticket zensiert.  Weitere Informationen finden Sie unter „[Projektboardberechtigungen für eine Organisation](/articles/project-board-permissions-for-an-organization)“.

In der Aktivitätsansicht wird der aktuelle Verlauf des Projektboards angezeigt, z. B. Tickets, die von jemandem erstellt oder zwischen den Spalten verschoben wurden. Um auf die Aktivitätsansicht zuzugreifen, klicke auf **Menu** (Menü), und blättere nach unten.

Um bestimmte Tickets auf einem Projektboard zu finden oder eine Teilmenge der Tickets anzuzeigen, kannst Du Projektboard-Tickets filtern. Weitere Informationen findest Du unter „[Tickets auf einem Projektboard filtern](/articles/filtering-cards-on-a-project-board).“

Um Deinen Workflow zu vereinfachen und erledigte Aufgaben auf Deinem Projektboard auszublenden, kannst Du Tickets archivieren. Weitere Informationen findest Du unter „[Tickets auf einem Projektboard archivieren](/articles/archiving-cards-on-a-project-board).“

Wenn Du alle Aufgaben Deines Projektboards abgeschlossen hast oder ein Projektboard nicht mehr benötigst, kannst Du es schließen. Weitere Informationen findest Du unter „[Ein Projektboard schließen](/articles/closing-a-project-board).“

Du kannst außerdem [Projektboards in einem Repository deaktivieren](/articles/disabling-project-boards-in-a-repository) oder [Projektboards in Deiner Organisation deaktivieren](/articles/disabling-project-boards-in-your-organization), wenn Du Deine Arbeit auf andere Weise verfolgen möchtest.

{% data reusables.project-management.project-board-import-with-api %}

### Vorlagen für Projektboards

Mit Vorlagen kannst Du schnell ein neues Projektboard erstellen. Wenn Du eine Vorlage für die Erstellung eines Projektboards verwendest, enthält Dein neues Board Spalten sowie Tickets mit Tipps zur Verwendung von Projektboards. Du kannst auch eine Vorlage mit bereits konfigurierter Automatisierung wählen.

| Vorlage                           | Beschreibung                                                                                                                                                              |
| --------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Grundlegendes Kanban              | Verfolge Deine Aufgaben mit den Spalten „Zu Bearbeiten“, „In Bearbeitung“ oder „Abgeschlossen“                                                                            |
| Automatisiertes Kanban            | Tickets werden automatisch zwischen den Spalten „Zu Bearbeiten“, „In Bearbeitung“ oder „Abgeschlossen“ verschoben                                                         |
| Automatisiertes Kanban mit Review | Tickets werden automatisch zwischen den Spalten „Zu Bearbeiten“, „In Bearbeitung“ oder „Abgeschlossen“ verschoben, mit zusätzlichen Auslösern für den Pull-Request-Status |
| Fehler-Selektion                  | Selektiere und priorisiere Fehler mit den Spalten „Zu Bearbeiten“, „Hohe Priorität“, „Niedrige Priorität“ und „Abgeschlossen“                                             |

Weitere Informationen zur Automatisierung von Projektboards findest Du unter „[Informationen zur Automatisierung für Projektboards](/articles/about-automation-for-project-boards).“

![Projektboard mit Vorlage für grundlegendes Kanban](/assets/images/help/projects/project-board-basic-kanban-template.png)

{% data reusables.project-management.copy-project-boards %}

### Weiterführende Informationen

- „[Ein Projektboard erstellen](/articles/creating-a-project-board)“
- „[Ein Projektboard bearbeiten](/articles/editing-a-project-board)“{% if currentVersion == "free-pro-team@latest" %}
- „[Ein Projektboard kopieren](/articles/copying-a-project-board)“{% endif %}
- „[Issues und Pull Requests zu einem Projektboard hinzufügen](/articles/adding-issues-and-pull-requests-to-a-project-board)“
- „[Projektboardberechtigungen für eine Organisation](/articles/project-board-permissions-for-an-organization)“
- „[Tastenkürzel](/articles/keyboard-shortcuts/#project-boards)“

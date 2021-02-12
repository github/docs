---
title: Berechtigungsebenen für Benutzer-Projektboards
intro: 'Ein Projektboard, das einem Benutzerkonto gehört, hat zwei Berechtigungsebenen: den Projektboard-Inhaber und die Mitarbeiter.'
redirect_from:
  - /articles/permission-levels-for-user-owned-project-boards
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

### Überblick über die Berechtigungen

Es gibt nur einen Inhaber eines Benutzer-Projektboards. Diese Berechtigung kann nicht mit einem anderen Benutzerkonto geteilt werden. Neben dem Inhaber können auch andere Personen an Projektboards mitarbeiten.

Für Projektboard-Mitarbeiter gibt es drei Berechtigungsstufen:

{% data reusables.project-management.project-board-permissions %}

### Inhaber- und Administratorberechtigungen für ein Benutzer-Projektboard

Der Projektboard-Inhaber und die Mitarbeiter mit Administratorzugriff besitzen die vollständige Kontrolle über das Projektboard. Neben den Berechtigungen, die auch Projektboard-Mitarbeitern erteilt werden, stehen einem Projektboard-Inhaber und Mitarbeitern mit Administratorzugriff zusätzlich folgende Möglichkeiten zur Verfügung:

- [Mitarbeiter verwalten, anzeigen und hinzufügen](/articles/managing-access-to-your-user-account-s-project-boards)
- [Configure a project board as {% if currentVersion == "github-ae@latest" %}internal{% else %}public{% endif %} or private](/articles/changing-project-board-visibility)
- [Ein Projektboard löschen](/articles/deleting-a-project-board/)
- [Ein Projektboard schließen](/articles/closing-a-project-board/)
- [Ein geschlossenes Projektboard erneut öffnen](/articles/reopening-a-closed-project-board)

### Lese- und Schreibberechtigungen für ein Benutzer-Projektboard

Mitarbeiter mit Lesezugriff auf ein Benutzer-Projektboard können Folgendes tun:

- Ein Projektboard anzeigen
- Ein Projektboard kopieren
- Tickets auf einem Projektboard filtern

Mitarbeiter mit Schreibzugriff auf ein Benutzer-Projektboard können Folgendes tun:

- Ein Projektboard anzeigen
- Ein Projektboard kopieren
- Tickets auf einem Projektboard filtern
- Ein Projektboard bearbeiten
- Ein Repository mit einem Projektboard verknüpfen
- Automatisierung für Projektboards konfigurieren
- Ein Projektboard kopieren
- Issues und Pull Requests zu einem Projektboard hinzufügen
- Hinweise zu einem Projektboard hinzufügen
- Fortschritt in Deinem Projektboard verfolgen
- Tickets auf einem Projektboard archivieren

### Sichtbarkeit des Projektboards

You can change the project board's visibility from private to {% if currentVersion == "github-ae@latest" %}internal{% else %}public{% endif %} and back again. Standardmäßig sind Benutzer-Projektboards privat. Weitere Informationen finden Sie unter „[Sichtbarkeit des Projektboards ändern](/articles/changing-project-board-visibility)“.

### Weiterführende Informationen

  - „[Zugriff auf die Projektboards Deines Benutzerkontos verwalten](/articles/managing-access-to-your-user-account-s-project-boards)“

---
title: Projektboardberechtigungen für eine Organisation
intro: 'Organisationsinhaber und Personen mit Projektboard-Administratorberechtigungen können anpassen, wer Lese-, Schreib- und Administratorberechtigungen für die Projektboards Deiner Organisation hat.'
redirect_from:
  - /articles/project-board-permissions-for-an-organization
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

### Überblick über die Berechtigungen

Bei Projektboards gibt es für Benutzer und Teams drei Berechtigungsstufen:

{% data reusables.project-management.project-board-permissions %}

Organisationsinhaber und Personen mit Administratorberechtigungen können einer Person den Zugriff auf ein Projektboard der Organisation als Einzelperson, als externer Mitarbeiter oder Organisationsmitglied oder über ihre Mitgliedschaft in einem Team oder einer Organisation gewähren. Ein externer Mitarbeiter ist eine Person, die kein Organisationsmitglied ist, aber die Berechtigungen für die Mitarbeit in Deiner Organisation besitzt.

Organisationsinhaber und Personen mit Administratorberechtigungen für ein Projektboard können außerdem Folgendes tun:
- Standardberechtigungen für das Projektboard für alle Organisationsmitglieder festlegen
- den Zugriff auf das Projektboard für Organisationsmitglieder, Teams und externe Mitarbeiter verwalten Weitere Informationen findest Du unter „[Teamzugriff auf ein Projektboard einer Organisation verwalten](/articles/managing-team-access-to-an-organization-project-board)“, „[Zugriff einer Einzelperson auf das Projektboard einer Organisation verwalten](/articles/managing-an-individual-s-access-to-an-organization-project-board)“ oder „[Zugriff auf ein Projektboard für Organisationsmitglieder verwalten](/articles/managing-access-to-a-project-board-for-organization-members),“
- die Sichtbarkeit des Projektboards verwalten (siehe „[Zugriff auf ein Projektboard für Organisationsmitglieder verwalten](/articles/managing-access-to-a-project-board-for-organization-members)“)

### Berechtigungen für Projektboards kaskadieren

{% data reusables.project-management.cascading-permissions %}

Wenn ein Organisationsinhaber beispielsweise allen Organisationsmitgliedern Leseberechtigungen für ein Projektboard erteilt hat und ein Projektboard-Administrator einem Organisationsmitglied Schreibberechtigungen als einzelner Mitarbeiter für dieses Projektboard erteilt, würde diese Person Schreibberechtigungen für das Projektboard haben.

### Sichtbarkeit des Projektboards

{% data reusables.project-management.project-board-visibility %} You can change the project board's visibility from private to {% if currentVersion == "github-ae@latest" %}internal{% else %}public{% endif %} and back again. Weitere Informationen finden Sie unter „[Sichtbarkeit des Projektboards ändern](/articles/changing-project-board-visibility)“.

### Weiterführende Informationen

- „[Sichtbarkeit des Projektboards ändern](/articles/changing-project-board-visibility)“
- „[Zugriff einer Einzelperson auf das Projektboard einer Organisation verwalten](/articles/managing-an-individual-s-access-to-an-organization-project-board)“
- „[Teamzugriff auf ein Projektboard einer Organisation verwalten](/articles/managing-team-access-to-an-organization-project-board)“
- „[Zugriff auf ein Projektboard für Organisationsmitglieder verwalten](/articles/managing-access-to-a-project-board-for-organization-members)“

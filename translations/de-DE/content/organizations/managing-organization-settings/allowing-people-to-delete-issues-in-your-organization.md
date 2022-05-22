---
title: Personen das Löschen von Issues in Deiner Organisation erlauben
intro: 'Organisationsinhaber können es bestimmten Personen erlauben, Issues in Repositorys zu löschen, die Deiner Organisation gehören.'
redirect_from:
  - /articles/allowing-people-to-delete-issues-in-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/allowing-people-to-delete-issues-in-your-organization
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Organizations
  - Teams
---

Standardmäßig können Issues in den Repositorys einer Organisation nicht gelöscht werden. Ein Organisationsinhaber muss diese Funktion erst für alle Repositorys der Organisation aktivieren.

Nach der Aktivierung können Organisationsinhaber und Personen mit Administratorberechtigungen für ein Repository der Organisation Issues löschen. Zu den Personen mit Administratorberechtigungen für ein Repository gehören Organisationsmitglieder und externe Mitarbeiter mit Administratorberechtigungen. Weitere Informationen findest Du unter „[Repository-Berechtigungsebenen für eine Organisation](/articles/repository-permission-levels-for-an-organization/)“ und „[Einen Issue löschen](/articles/deleting-an-issue).“

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.member-privileges %}
5. Wähle unter „Issue deletion“ (Issue-Löschung) die Option **Allow members to delete issues for this organization** (Mitgliedern das Löschen von Issues für diese Organisation erlauben) aus. ![Kontrollkästchen, um Personen das Löschen von Issues zu erlauben](/assets/images/help/settings/issue-deletion.png)
6. Klicke auf **Save** (Speichern).

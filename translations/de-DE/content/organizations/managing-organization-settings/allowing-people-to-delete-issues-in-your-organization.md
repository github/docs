---
title: Personen das Löschen von Issues in Deiner Organisation erlauben
intro: 'Organisationsinhaber können es bestimmten Personen erlauben, Issues in Repositorys zu löschen, die Deiner Organisation gehören.'
redirect_from:
  - /articles/allowing-people-to-delete-issues-in-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/allowing-people-to-delete-issues-in-your-organization
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Allow issue deletion
---

Standardmäßig können Issues in den Repositorys einer Organisation nicht gelöscht werden. Ein Organisationsinhaber muss diese Funktion erst für alle Repositorys der Organisation aktivieren.

Once enabled, organization owners and people with admin access in an organization-owned repository can delete issues. People with admin access in a repository include organization members and outside collaborators who were given admin access. For more information, see "[Repository roles for an organization](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization)" and "[Deleting an issue](/articles/deleting-an-issue)."

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.member-privileges %}
5. Wähle unter „Issue deletion“ (Issue-Löschung) die Option **Allow members to delete issues for this organization** (Mitgliedern das Löschen von Issues für diese Organisation erlauben) aus. ![Kontrollkästchen, um Personen das Löschen von Issues zu erlauben](/assets/images/help/settings/issue-deletion.png)
6. Klicke auf **Save** (Speichern).

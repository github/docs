---
title: Administratorenteams zu verbesserten Organisationsberechtigungen migrieren
intro: 'Wenn Deine Organisation nach September 2015 erstellt wurde, verfügt sie standardmäßig über verbesserte Organisationsberechtigungen. Organisationen, die vor September 2015 erstellt wurden, müssen ältere Inhaber- und Administratorenteams möglicherweise auf das verbesserte Berechtigungsmodell migrieren. Mitglieder der alten Administratorenteams behalten automatisch die Fähigkeit, Repositorys zu erstellen, bis diese Teams zu dem verbesserten Organisationsberechtigungsmodell migriert wurden.'
redirect_from:
  - /articles/migrating-your-previous-admin-teams-to-the-improved-organization-permissions/
  - /articles/migrating-admin-teams-to-improved-organization-permissions
  - /github/setting-up-and-managing-organizations-and-teams/migrating-admin-teams-to-improved-organization-permissions
versions:
  free-pro-team: '*'
  enterprise-server: '*'
topics:
  - Organizations
  - Teams
---

Standardmäßig können alle Organisationsmitglieder Repositorys erstellen. Wenn Du die [Berechtigungen zur Repository-Erstellung](/articles/restricting-repository-creation-in-your-organization) auf Organisationsinhaber beschränkst und Deine Organisation unter der alten Struktur der Organisationsberechtigungen erstellt wurde, können Mitglieder der früheren Administratorenteams nach wie vor Repositorys erstellen.

Frühere Administratorenteams sind Teams, die mit der Administrator-Berechtigungsebene unter der alten Struktur der Organisationsberechtigungen erstellt wurden. Mitglieder dieser Teams konnten Repositorys für die Organisation erstellen, und wir haben diese Fähigkeit in der optimierten Struktur der Organisationsberechtigungen beibehalten.

Du kannst diese Berechtigung entfernen, indem Du Deine früheren Administratorenteams auf die optimierten Organisationsberechtigungen migrierst.

Weitere Informationen finden Sie unter„[Berechtigungsebenen für die Repositorys einer Organisation](/articles/repository-permission-levels-for-an-organization)“.

{% warning %}

**Warnung:** Wenn Deine Organisation [die Berechtigungen zur Repository-Erstellung](/articles/restricting-repository-creation-in-your-organization) für alle Mitglieder deaktiviert hat, verlieren möglicherweise einige Mitglieder der früheren Administratorenteams die Berechtigungen zur Repository-Erstellung. Wenn Deine Organisation die Repository-Erstellung für Mitglieder aktiviert hat, wirkt sich die Migration der früheren Administratorenteams zu den optimierten Organisationsberechtigungen nicht auf die Fähigkeit dieser Teammitglieder aus, Repositorys zu erstellen.

{% endwarning %}

### Alle früheren Administratorenteams der Organisation migrieren

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.teams_sidebar %}
1. Überprüfe die früheren Administratorenteams Deiner Organisation, und klicke dann auf **Migrate all teams** (Alle Teams migrieren). ![Schaltfläche „Migrate all teams" (Migration aller Teams)](/assets/images/help/teams/migrate-all-legacy-admin-teams.png)
1. Lies die Informationen zu den Änderungen, die sich für die Berechtigungen der Mitglieder dieser Teams möglicherweise ergeben, und klicke dann auf **Migrate all teams** (Alle Teams migrieren). ![Schaltfläche „Confirm migration" (Migration bestätigen)](/assets/images/help/teams/confirm-migrate-all-legacy-admin-teams.png)

### Ein einzelnes Administratorenteam migrieren

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.specific_team %}
1. Klicke im Teambeschreibungsfeld auf **Migrate team** (Team migrieren). ![Schaltfläche „Migrate team“ (Team migrieren)](/assets/images/help/teams/migrate-a-legacy-admin-team.png)

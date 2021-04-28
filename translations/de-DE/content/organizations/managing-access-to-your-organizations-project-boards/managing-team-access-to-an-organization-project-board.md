---
title: Teamzugriff auf ein Projektboard einer Organisation verwalten
intro: 'Als Organisationsinhaber oder Projektboard-Administrator kannst Du einem Team Zugriff auf ein Projektboard Deiner Organisation gewähren.'
redirect_from:
  - /articles/managing-team-access-to-an-organization-project-board
  - /github/setting-up-and-managing-organizations-and-teams/managing-team-access-to-an-organization-project-board
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - organisationen
  - teams
---

{% warning %}

**Warnungen:**
- Du kannst die Berechtigungsebene eines Teams ändern, wenn das Team direkten Zugriff auf ein Projektboard hat. Wenn der Zugriff des Teams auf das Projektboard von einem übergeordneten Team übernommen wird, musst Du den Zugriff des übergeordneten Teams auf das Projektboard ändern.
- Wenn Du einem übergeordneten Team den Zugriff auf ein Projektboard gewährst oder entziehst, erhalten oder verlieren auch die untergeordneten Teams den Zugriff auf das Projektboard. Weitere Informationen finden Sie unter „[Informationen zu Teams](/articles/about-teams)“.

{% endwarning %}

### Einem Team Zugriff auf ein Projektboard gewähren

Du kannst einem gesamten Team die gleiche Berechtigungsebene für ein Projektboard zuweisen.

{% note %}

**Hinweis:** {% data reusables.project-management.cascading-permissions %} Wenn ein Organisationsinhaber beispielsweise einem Team Leseberechtigung für ein Projektboard erteilt hat und ein Projektboard-Administrator einem Mitglied dieses Teams Administratorberechtigungen als einzelner Mitarbeiter für dieses Projektboard erteilt, würde diese Person Administratorberechtigungen für das Projektboard haben. Weitere Informationen findest Du unter „[Projektboardberechtigungen für eine Organisation](/articles/project-board-permissions-for-an-organization).“

{% endnote %}

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.organization-wide-project %}
{% data reusables.project-management.select-project %}
{% data reusables.project-management.click-menu %}
{% data reusables.project-management.access-collaboration-settings %}
8. Klicke auf der linken Seitenleiste auf **Teams** (Teams).
9. Um ein Team hinzuzufügen, klicke auf **Add a team: Select team** (Ein Team hinzufügen: Team auswählen). Wähle dann ein Team aus dem Dropdownmenü aus, oder suche nach dem Team, das Du hinzufügen möchtest. ![Dropdownmenü zum Hinzufügen von Teams mit Liste der Teams der Organisation](/assets/images/help/projects/add-a-team.png)
10. Wähle im Dropdownmenü neben dem Teamnamen die gewünschte Berechtigungsebene aus: **Read** (Lesen), **Write** (Schreiben) oder **Admin** (Administrator). ![Dropdownmenü mit Teamberechtigungen mit Lese-, Schreib- und Administrator-Optionen](/assets/images/help/projects/org-project-team-choose-permissions.png)

### Den Zugriff eines Teams auf ein Projektboard konfigurieren

Wenn der Zugriff eines Teams auf ein Projektboard von einem übergeordneten Team geerbt wird, musst Du den Zugriff des übergeordneten Teams auf das Projektboard ändern, um den Zugriff für die untergeordneten Teams zu aktualisieren.

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.specific_team %}
4. Klicke oberhalb der Unterhaltungen des Teams auf {% octicon "project" aria-label="The Projects icon" %} **Projects** (Projekte). ![Registerkarte mit Team-Repositorys](/assets/images/help/organizations/team-project-board-button.png)
5. Um die Berechtigungsstufen für ein Projektboard anzupassen, benutze das Dropdownmenü rechts neben dem anzupassenden Projektboard. Um ein Projektboard zu entfernen, klicke **{% octicon "trashcan" aria-label="The trashcan icon" %}**. ![Mülleimer-Schaltfläche zum Entfernen eines Projektboards aus dem Team](/assets/images/help/organizations/trash-button.png)

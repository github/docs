---
title: Benutzer aus Teams und aus Organisationen entfernen
intro: 'Wenn ein Mitglied Ihrer Organisation nicht mehr auf bestimmte Repositorys zugreifen muss, können Sie es aus dem Team entfernen, das diesen Zugriff ermöglicht. Wenn ein Mitglied Ihrer Organisation nicht mehr auf Repositorys zugreifen muss, die der Organisation gehören, können Sie es aus der Organisation entfernen.'
redirect_from:
  - /enterprise/admin/user-management/removing-users-from-teams-and-organizations
  - /admin/user-management/removing-users-from-teams-and-organizations
versions:
  enterprise-server: '*'
type: how_to
topics:
  - Access management
  - Accounts
  - Enterprise
  - Teams
---
Nur Inhaber oder Teamadministratoren können Organisationsmitglieder entfernen. Wenn ein Benutzer aus einem Team oder aus einer Organisation entfernt wird, bleiben seine Issues, Pull Requests und Kommentare in den Repositorys der Organisation erhalten und sind ihm weiterhin zugeordnet.

{% warning %}

**Warnung**: Wenn Sie einen Benutzer aus einer Organisation entfernen, verliert dieser den Zugriff auf private Forks, über die er für die **privaten Repositorys** Ihrer Organisation verfügt. Er besitzt ggf. weiterhin lokale Kopien dieser Forks. Allerdings ist er nicht in der Lage, sie mit den Repositorys Ihrer Organisation zu synchronisieren. Sie sind dafür verantwortlich, dass die Personen, denen Sie den Zugriff auf ein Repository entziehen, vertrauliche Informationen oder geistiges Eigentum von ihren Systemen löschen. Wenn der aus Ihrer Organisation entfernte Benutzer ein Organisationsmitglied war, kann sein Zugriff auf die privaten Forks der Organisations-Repositorys wiederhergestellt werden, wenn der Benutzer innerhalb von drei Monaten, nachdem er aus einer Organisation entfernt wurde, [wieder als ein Organisationsmitglied eingesetzt wird](/articles/reinstating-a-former-member-of-your-organization).

{% endwarning %}

### Teammitglied entfernen

{% warning %}

**Hinweis:** {% data reusables.enterprise_management_console.badge_indicator %}

Wenden Sie sich an Ihren LDAP-Administrator, um ein vorhandenes Mitglied eines mit einer LDAP-Gruppe synchronisierten Teams zu entfernen.

{% endwarning %}

{% data reusables.profile.enterprise_access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.specific_team %}
4. Wähle die Person(en) aus, die Du entfernen möchtest. ![Kontrollkästchen neben dem Organisationsmitglied](/assets/images/help/teams/team-member-check-box.png)
5. Klicke im Dropdownmenü über der Liste der Teammitglieder auf **Remove from team** (Aus Team entfernen). ![Dropdownmenü mit Option zum Ändern der Rolle](/assets/images/help/teams/bulk-edit-drop-down.png)

### Benutzer aus einer Organisation entfernen

{% data reusables.profile.enterprise_access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.people %}
4. Aktivieren Sie das Kontrollkästchen neben dem Namen des Benutzers, der aus der Organisation entfernt werden soll.![Kontrollkästchen zum Entfernen des Benutzers](/assets/images/help/organizations/Organization-remove-user.png)
5. Klicken Sie im oberen Bereich der Seite unterhalb des Namens der Organisation auf **Remove from organization** (Aus Organisation entfernen). ![Schaltfläche „Remove from organization“ (Aus Organisation entfernen)](/assets/images/help/organizations/Organization-remove-from-organization-button.png)

{% data reusables.organizations.data_saved_for_reinstating_a_former_org_member %}

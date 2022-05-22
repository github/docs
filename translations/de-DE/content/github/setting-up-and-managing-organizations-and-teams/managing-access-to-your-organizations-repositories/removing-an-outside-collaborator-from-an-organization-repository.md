---
title: Externen Mitarbeiter von einem Organisationsrepository entfernen
intro: Organisationsinhaber und Repository-Administratoren können den Zugriff eines externen Mitarbeiters auf ein Repository entfernen.
redirect_from:
  - /articles/removing-an-outside-collaborator-from-an-organization-repository
  - /github/setting-up-and-managing-organizations-and-teams/removing-an-outside-collaborator-from-an-organization-repository
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - organisationen
  - teams
---
{% if currentVersion == "free-pro-team@latest" %}

{% warning %}

**Warnung:**
- Beim Entfernen eines externen Mitarbeiters von einem privaten Repository wird die Anzahl der bezahlten Lizenzen nicht automatisch angepasst. Um nach dem Entfernen von Benutzern aus der Organisation für weniger Lizenzen zu bezahlen, folge den Schritten im Artikel „[Die bezahlten Benutzer Deiner Organisation heruntersetzen](/articles/downgrading-your-organization-s-paid-seats)."

- Sie sind dafür verantwortlich, dass die Personen, denen Sie den Zugriff auf ein Repository entziehen, vertrauliche Informationen oder geistiges Eigentum von ihren Systemen löschen.

{% endwarning %}

{% endif %}

Beim Entfernen eines Mitarbeiters werden zwar dessen Forks privater Repositorys gelöscht, seine lokalen Klone Deiner Repositorys behält er aber.

### Externe Mitarbeiter von allen Repositorys einer Organisation entfernen

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.people %}
{% data reusables.organizations.people_tab_outside_collaborators %}
5. Wähle die externen Mitarbeiter aus, die Du aus der Organisation entfernen möchtest. ![Liste der externen Mitarbeiter mit zwei ausgewählten Mitarbeitern](/assets/images/help/teams/list-of-outside-collaborators-selected-bulk.png)
6. Klicke im Dropdownmenü über der Liste der externen Mitarbeiter auf **Remove from all repositories** (Von allen Repositorys entfernen). ![Dropdownmenü mit Option zum Entfernen externer Mitarbeiter ](/assets/images/help/teams/user-bulk-management-options-for-outside-collaborators.png)
7. Prüfe die Liste der externen Mitarbeiter, die aus der Organisation entfernt werden, und klicke dann auf **Remove outside collaborators** (Externe Mitarbeiter entfernen). ![Liste der externen Mitarbeiter, die entfernt werden, und Schaltfläche „Remove outside collaborators“ (Externe Mitarbeiter entfernen)](/assets/images/help/teams/confirm-remove-outside-collaborators-bulk.png)

### Externen Mitarbeiter von einem bestimmten Repository einer Organisation entfernen

Wenn Du einen externen Mitarbeiter nur von bestimmten Repositorys Deiner Organisation entfernen möchtest, kannst Du dessen Zugriff auf die einzelnen Repositorys nacheinander entziehen.

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.people %}
{% data reusables.organizations.people_tab_outside_collaborators %}
5. Klicken Sie rechts neben dem Benutzernamen der Person, die Sie entfernen möchten, im Dropdownmenü {% octicon "gear" aria-label="The Settings gear" %} auf **Manage** (Verwalten). ![Schaltfläche „Manage access“ (Zugriff verwalten)](/assets/images/help/organizations/member-manage-access.png)
6. Klicke rechts neben dem Repository, aus dem Du den externen Mitarbeiter entfernen möchtest, auf **Manage access** (Zugriff verwalten). ![Auswahl der Schaltfläche „Manage access“ (Zugriff verwalten) neben einem Repository, auf das der externe Mitarbeiter Zugriff hat](/assets/images/help/organizations/second-manage-access-selection-for-collaborator.png)
7. Wenn Du den Zugriff des externen Mitarbeiters auf das Repository vollständig entziehen möchtest, klicke in der rechten oberen Ecke auf **Remove access to this repository** (Zugriff auf dieses Repository entfernen). ![Schaltfläche „Remove access to this repository“ (Zugriff auf dieses Repository entfernen)](/assets/images/help/organizations/remove-access-to-this-repository.png)
8. Klicke zur Bestätigung auf **Remove access** (Zugriff entfernen). ![Bestätigung des Entfernens des externen Mitarbeiters vom Repository](/assets/images/help/teams/confirm-remove-outside-collaborator-from-a-repository.png)

### Weiterführende Informationen

- „[Externe Mitarbeiter zu Organisations-Repositorys hinzufügen](/articles/adding-outside-collaborators-to-repositories-in-your-organization)“
- „[Ein Organisationsmitglied in einen externen Mitarbeiter umwandeln](/articles/converting-an-organization-member-to-an-outside-collaborator)“

---
title: Den Teamzugriff auf ein Repository einer Organisation verwalten
intro: 'Du kannst einem Team Zugriff auf ein Repository gewähren, einem Team den Zugriff auf ein Repository entziehen oder die Berechtigungsebene eines Teams für ein Repository ändern.'
redirect_from:
  - /articles/managing-team-access-to-an-organization-repository-early-access-program/
  - /articles/managing-team-access-to-an-organization-repository
  - /github/setting-up-and-managing-organizations-and-teams/managing-team-access-to-an-organization-repository
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Organizations
  - Teams
---

Personen mit Administratorzugriff auf ein Repository können den Zugriff eines Teams auf das Repository verwalten. Team-Betreuer können einem Team den Zugriff auf ein Repository entziehen.

{% warning %}

**Warnungen:**
- Du kannst die Berechtigungsebene eines Teams ändern, wenn das Team direkten Zugriff auf ein Repository hat. Wenn der Zugriff des Teams auf das Repository von einem übergeordneten Team geerbt wird, musst Du den Zugriff des übergeordneten Teams auf das Repository ändern.
- Wenn Du einem übergeordneten Team den Zugriff auf ein Repository gewährst oder entziehst, erhalten oder verlieren auch die untergeordneten Teams den Zugriff auf das Repository. Weitere Informationen finden Sie unter „[Informationen zu Teams](/articles/about-teams)“.

{% endwarning %}

### Einem Team Zugriff auf ein Repository gewähren

{% data reusables.profile.access_org %}
{% data reusables.user_settings.access_org %}
{% data reusables.organizations.specific_team %}
{% data reusables.organizations.team-repositories-tab %}
5. Klicke oberhalb der Liste der Repositorys auf **Add repository** (Repository hinzufügen). ![Schaltfläche „Add repository“ (Repository hinzufügen)](/assets/images/help/organizations/add-repositories-button.png)
6. Gib den Namen des Repositorys ein, und klicke dann auf **Add repository to team** (Repository zu Team hinzufügen). ![Repository-Suchfeld](/assets/images/help/organizations/team-repositories-add.png)
7. Optional kannst Du im Dropdownmenü rechts neben dem Repository-Namen eine andere Berechtigungsebene für das Team auswählen. ![Dropdownmenü mit Zugriffsebene für Repository](/assets/images/help/organizations/team-repositories-change-permission-level.png)

### Einem Team den Zugriff auf ein Repository entziehen

Du kannst einem Team den Zugriff auf ein Repository entziehen, wenn das Team direkten Zugriff auf ein Repository hat. Wenn der Zugriff des Teams auf das Repository von einem übergeordneten Team geerbt wird, musst Du das Repository vom übergeordneten Team entfernen, um es auch von den untergeordneten Teams zu entfernen.

{% data reusables.repositories.deleted_forks_from_private_repositories_warning %}

{% data reusables.profile.access_org %}
{% data reusables.user_settings.access_org %}
{% data reusables.organizations.specific_team %}
{% data reusables.organizations.team-repositories-tab %}
5. Wähle alle Repositorys aus, die Du vom Team entfernen möchtest. ![Liste der Team-Repositorys mit aktivierten Kontrollkästchen für einige Repositorys](/assets/images/help/teams/select-team-repositories-bulk.png)
6. Klicke im Dropdownmenü oberhalb der Liste der Repositorys auf **Remove from team** (Aus Team entfernen). ![Dropdownmenü mit Option zum Entfernen eines Repositorys von einem Team](/assets/images/help/teams/remove-team-repo-dropdown.png)
7. Prüfe die zum Entfernen ausgewählten Repositorys, und klicke auf **Remove repositories** (Repositorys entfernen). ![Modalfeld mit einer Liste der Repositorys, auf die das Team nicht mehr zugreifen kann](/assets/images/help/teams/confirm-remove-team-repos.png)

### Weiterführende Informationen

- „[Berechtigungsebenen für die Repositorys einer Organisation](/articles/repository-permission-levels-for-an-organization)“

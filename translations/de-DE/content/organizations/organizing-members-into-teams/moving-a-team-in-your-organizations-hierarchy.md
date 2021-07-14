---
title: Team innerhalb der Hierarchie Deiner Organisation verschieben
intro: Team-Betreuer und Organisationsinhaber können ein Team einem übergeordneten Team unterordnen oder das übergeordnete Team eines untergeordneten Teams ändern oder entfernen.
redirect_from:
  - /articles/changing-a-team-s-parent/
  - /articles/moving-a-team-in-your-organization-s-hierarchy
  - /articles/moving-a-team-in-your-organizations-hierarchy
  - /github/setting-up-and-managing-organizations-and-teams/moving-a-team-in-your-organizations-hierarchy
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Organizations
  - Teams
---

Organisationsinhaber können das übergeordnete Team jedes Teams ändern. Team-Betreuer können das übergeordnete Team eines Teams ändern, wenn sie sowohl im untergeordneten als auch im übergeordneten Team Betreuer sind. Team-Betreuer ohne Betreuer-Berechtigungen im untergeordneten Team können das Hinzufügen eines übergeordneten oder untergeordneten Teams anfordern. Weitere Informationen findest Du unter „[Hinzufügen oder Ändern eines übergeordneten Teams anfordern](/articles/requesting-to-add-or-change-a-parent-team)“ und „[Hinzufügen eines untergeordneten Teams anfordern](/articles/requesting-to-add-a-child-team).“

{% data reusables.organizations.child-team-inherits-permissions %}

{% tip %}

**Tipps:**
- Du kannst das übergeordnete Team eines Teams nicht zu einem nichtöffentlichen Team ändern. Weitere Informationen finden Sie unter „[Informationen zu Teams](/articles/about-teams)“.
- Du kannst ein übergeordnetes Team nicht unterhalb eines seiner untergeordneten Teams einordnen.

{% endtip %}

{% data reusables.profile.access_org %}
{% data reusables.user_settings.access_org %}
{% data reusables.organizations.teams %}
4. Klicke in der Liste der Teams auf den Namen des Teams, dessen übergeordnetes Team Du ändern möchtest. ![Liste der Teams der Organisation](/assets/images/help/teams/click-team-name.png)
{% data reusables.organizations.team_settings %}
6. Wähle im Dropdownmenü ein übergeordnetes Team oder, um ein vorhandenes übergeordnetes Team zu entfernen, wähle **Clear selected value** (Ausgewählten Wert löschen) aus. ![Dropdownmenü mit einer Liste der Organisationsteams](/assets/images/help/teams/choose-parent-team.png)
7. Klicke auf **Update** (Aktualisieren).
{% data reusables.repositories.changed-repository-access-permissions %}
9. Klicke auf **Confirm new parent team** (Neues übergeordnetes Team bestätigen). ![Modales Feld mit Informationen zu den Änderungen an den Berechtigungen für den Repositoryzugriff](/assets/images/help/teams/confirm-new-parent-team.png)

### Weiterführende Informationen

- „[Informationen zu Teams](/articles/about-teams)“

---
title: Ein Team erstellen
intro: Du kannst unabhängige oder untergeordnete Teams erstellen, um Repository-Berechtigungen und Erwähnungen für Personengruppen zu verwalten.
redirect_from:
  - /articles/creating-a-team-early-access-program/
  - /articles/creating-a-team
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

Nur Organisationsinhaber und Betreuer eines übergeordneten Teams können ein neues untergeordnetes Team unter einem übergeordneten Team erstellen. Inhaber können auch die Berechtigungen für die Erstellung aller Teams in einer Organisation einschränken. Weitere Informationen findest Du unter „[Berechtigungen für die Teamerstellung in Deiner Organisation festlegen](/articles/setting-team-creation-permissions-in-your-organization).“

{% data reusables.organizations.team-synchronization %}

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.new_team %}
{% data reusables.organizations.team_name %}
{% data reusables.organizations.team_description %}
{% data reusables.organizations.create-team-choose-parent %}
{% if currentVersion == "free-pro-team@latest" %}
1. Wenn Deine Organisations oder Dein Enterprise-Konto optional die Teamsynchronisierung verwendet, kannst Du für das Verbinden einer Identitätsanbieter-Gruppe mit Deinem Team das Dropdownmenü „Identity Provider Groups" (Identitätsanbieter-Gruppen) benutzen und bis zu 5 Gruppen auswählen. Weitere Informationen findest Du unter „[Ein Team mit einer Identitätsanbieter-Gruppe synchronisieren](/github/setting-up-and-managing-organizations-and-teams/synchronizing-a-team-with-an-identity-provider-group)." ![Dropdownmenü zur Auswahl einer Identitätsanbieter-Gruppe](/assets/images/help/teams/choose-an-idp-group.png)
{% endif %}
{% data reusables.organizations.team_visibility %}
{% data reusables.organizations.create_team %}
9. Optional kannst Du [dem Team Zugriff auf die Repositorys der Organisation gewähren](/articles/managing-team-access-to-an-organization-repository)“.

### Weiterführende Informationen

- „[Informationen zu Teams](/articles/about-teams)“
- „[Team-Sichtbarkeit ändern](/articles/changing-team-visibility)“
- „[Team innerhalb der Hierarchie Deiner Organisation verschieben](/articles/moving-a-team-in-your-organization-s-hierarchy)“

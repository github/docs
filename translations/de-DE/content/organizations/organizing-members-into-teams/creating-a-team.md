---
title: Ein Team erstellen
intro: 'Du kannst unabhängige oder untergeordnete Teams erstellen, um Repository-Berechtigungen und Erwähnungen für Personengruppen zu verwalten.'
redirect_from:
  - /articles/creating-a-team-early-access-program/
  - /articles/creating-a-team
  - /github/setting-up-and-managing-organizations-and-teams/creating-a-team
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
topics:
  - Organizations
  - Teams
---

Nur Organisationsinhaber und Betreuer eines übergeordneten Teams können ein neues untergeordnetes Team unter einem übergeordneten Team erstellen. Inhaber können auch die Berechtigungen für die Erstellung aller Teams in einer Organisation einschränken. Weitere Informationen findest Du unter „[Berechtigungen für die Teamerstellung in Deiner Organisation festlegen](/articles/setting-team-creation-permissions-in-your-organization).“

{% data reusables.organizations.team-synchronization %}

{% data reusables.profile.access_org %}
{% data reusables.user_settings.access_org %}
{% data reusables.organizations.new_team %}
{% data reusables.organizations.team_name %}
{% data reusables.organizations.team_description %}
{% data reusables.organizations.create-team-choose-parent %}
{% ifversion fpt %}
1. Optionally, if your organization or enterprise account uses team synchronization or your enterprise uses {% data variables.product.prodname_emus %}, connect an identity provider group to your team.
    * If your enterprise uses {% data variables.product.prodname_emus %}, use the "Identity Provider Groups" drop-down menu, and select a single identity provider group to connect to the new team. For more information, "[Managing team memberships with identity provider groups](/github/setting-up-and-managing-your-enterprise/managing-your-enterprise-users-with-your-identity-provider/managing-team-memberships-with-identity-provider-groups)."
    * If your organization or enterprise account uses team synchronization, use the "Identity Provider Groups" drop-down menu, and select up to five identity provider groups to connect to the new team. Weitere Informationen findest Du unter „[Ein Team mit einer Identitätsanbieter-Gruppe synchronisieren](/organizations/organizing-members-into-teams/synchronizing-a-team-with-an-identity-provider-group)." ![Dropdownmenü zur Auswahl einer Identitätsanbieter-Gruppe](/assets/images/help/teams/choose-an-idp-group.png)
{% endif %}
{% data reusables.organizations.team_visibility %}
{% data reusables.organizations.create_team %}
1. Optional kannst Du [dem Team Zugriff auf die Repositorys der Organisation gewähren](/articles/managing-team-access-to-an-organization-repository)“.

## Weiterführende Informationen

- „[Informationen zu Teams](/articles/about-teams)“
- „[Team-Sichtbarkeit ändern](/articles/changing-team-visibility)“
- „[Team innerhalb der Hierarchie Deiner Organisation verschieben](/articles/moving-a-team-in-your-organization-s-hierarchy)“

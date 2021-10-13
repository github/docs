---
title: Organisationsmitglieder zu einem Team hinzufügen
intro: 'Benutzer mit Inhaber- oder Team-Betreuer-Berechtigungen können Organisationsmitglieder zu Teams hinzufügen. Benutzer mit Inhaberberechtigungen können auch {% ifversion fpt %}Nicht-Mitglieder zu einem Team und zur Organisation einladen{% else %}Nicht-Mitglieder zu einem Team und zur Organisation hinzufügen.{% endif %}'
redirect_from:
  - /articles/adding-organization-members-to-a-team-early-access-program/
  - /articles/adding-organization-members-to-a-team
  - /github/setting-up-and-managing-organizations-and-teams/adding-organization-members-to-a-team
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
topics:
  - Organizations
  - Teams
shortTitle: Add members to a team
---

{% data reusables.organizations.team-synchronization %}

{% data reusables.profile.access_org %}
{% data reusables.user_settings.access_org %}
{% data reusables.organizations.specific_team %}
{% data reusables.organizations.team_members_tab %}
6. Klicke oberhalb der Liste der Teammitglieder auf **Add a member** (Ein Mitglied hinzufügen). ![Schaltfläche „Add member“ (Mitglied hinzufügen)](/assets/images/help/teams/add-member-button.png)
{% data reusables.organizations.invite_to_team %}
{% data reusables.organizations.review-team-repository-access %}

{% ifversion fpt %}{% data reusables.organizations.cancel_org_invite %}{% endif %}

## Weiterführende Informationen

- „[Informationen zu Teams](/articles/about-teams)“
- „[Den Teamzugriff auf ein Repository einer Organisation verwalten](/articles/managing-team-access-to-an-organization-repository)“

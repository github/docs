---
title: Personen zu Teams hinzufügen
redirect_from:
  - /enterprise/admin/articles/adding-teams/
  - /enterprise/admin/articles/adding-or-inviting-people-to-teams/
  - /enterprise/admin/guides/user-management/adding-or-inviting-people-to-teams/
  - /enterprise/admin/user-management/adding-people-to-teams
intro: 'Nach der Erstellung eines Teams können Organisationsadministratoren Benutzer von {% data variables.product.product_location %} zum Team hinzufügen und festlegen, auf welche Repositorys sie zugreifen dürfen.'
versions:
  enterprise-server: '*'
type: how_to
topics:
  - Access management
  - Enterprise
  - Teams
  - User account
---

Jedes Team besitzt seine eigenen individuell festgelegten [Zugriffsberechtigungen für Repositorys, die Ihrer Organisation gehören](/articles/permission-levels-for-an-organization).

- Mitglieder mit der Inhaberrolle können Organisationsmitglieder aus allen Teams hinzufügen oder entfernen.
- Teammitglieder, die Administratorberechtigungen erteilen, können nur die Teammitgliedschaft und die Repositorys für das jeweilige Team ändern.

### Team einrichten

{% data reusables.profile.enterprise_access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.specific_team %}
{% data reusables.organizations.invite_to_team %}
{% data reusables.organizations.review-team-repository-access %}

### Teams zu LDAP-Gruppen (für Instanzen mit LDAP-Synchronisierung für die Benutzerauthentifizierung) zuordnen

{% data reusables.enterprise_management_console.badge_indicator %}

Um ein neues Mitglied zu einem mit einer LDAP-Gruppe synchronisierten Team hinzuzufügen, fügen Sie den Benutzer als ein Mitglied der LDAP-Gruppe hinzu, oder wenden Sie sich an Ihren LDAP-Administrator.

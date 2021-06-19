---
title: Zugriff einer Einzelperson auf das Projektboard einer Organisation verwalten
intro: Als Organisationsinhaber oder Projektboard-Administrator kannst Du den Zugriff einzelner Mitglieder auf ein Projektboard Deiner Organisation verwalten.
redirect_from:
  - /articles/managing-an-individual-s-access-to-an-organization-project-board
  - /articles/managing-an-individuals-access-to-an-organization-project-board
  - /github/setting-up-and-managing-organizations-and-teams/managing-an-individuals-access-to-an-organization-project-board
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - organisationen
  - teams
---
{% note %}

**Hinweis:** {% data reusables.project-management.cascading-permissions %} Weitere Informationen findest Du unter „[Projektboardberechtigungen für eine Organisation](/articles/project-board-permissions-for-an-organization).“

{% endnote %}

### Einem Organisationsmitglied Zugriff auf ein Projektboard gewähren

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.organization-wide-project %}
{% data reusables.project-management.select-project %}
{% data reusables.project-management.click-menu %}
{% data reusables.project-management.access-collaboration-settings %}
{% data reusables.project-management.collaborator-option %}
9. Under "Search by username, full name or email address", type the collaborator's name, username, or
{% data variables.product.prodname_dotcom %} email.
   ![Der Bereich „Collaborators“ (Mitarbeiter) mit Octocat-Benutzernamen im Suchfeld](/assets/images/help/projects/org-project-collaborators-find-name.png)
{% data reusables.project-management.add-collaborator %}
{% data reusables.project-management.collaborator-permissions %}

### Den Zugriff eines Organisationsmitglieds auf ein Projektboard ändern

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.organization-wide-project %}
{% data reusables.project-management.select-project %}
{% data reusables.project-management.click-menu %}
{% data reusables.project-management.access-collaboration-settings %}
{% data reusables.project-management.collaborator-option %}
{% data reusables.project-management.collaborator-permissions %}

### Einem Organisationsmitglied den Zugriff auf ein Projektboard entziehen

Wenn Du einen Mitarbeiter von einem Projektboard entfernst, kann er je nach den Berechtigungen seiner anderen Rollen möglicherweise dennoch weiterhin auf das Projektboard zugreifen. Um den Zugriff auf ein Projektboard komplett zu verhindern, musst Du den Zugriff für jede Rolle dieses Mitarbeiters entfernen. Eine Person kann beispielsweise als Organisationsmitglied oder Teammitglied Zugriff auf das Projektboard haben. Weitere Informationen finden Sie unter „[Projektboardberechtigungen für eine Organisation](/articles/project-board-permissions-for-an-organization)“.

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.organization-wide-project %}
{% data reusables.project-management.select-project %}
{% data reusables.project-management.click-menu %}
{% data reusables.project-management.access-collaboration-settings %}
{% data reusables.project-management.collaborator-option %}
{% data reusables.project-management.remove-collaborator %}

### Weiterführende Informationen

- „[Projektboardberechtigungen für eine Organisation](/articles/project-board-permissions-for-an-organization)“

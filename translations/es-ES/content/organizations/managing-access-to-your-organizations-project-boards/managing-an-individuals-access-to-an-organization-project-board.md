---
title: 'Managing an individual’s access to an organization {% data variables.product.prodname_project_v1 %}'
intro: 'As an organization owner or {% data variables.projects.projects_v1_board %} admin, you can manage an individual member''s access to a {% data variables.projects.projects_v1_board %} owned by your organization.'
redirect_from:
  - /articles/managing-an-individual-s-access-to-an-organization-project-board
  - /articles/managing-an-individuals-access-to-an-organization-project-board
  - /github/setting-up-and-managing-organizations-and-teams/managing-an-individuals-access-to-an-organization-project-board
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Administrar el acceso individual
allowTitleToDifferFromFilename: true
---

{% data reusables.projects.project_boards_old %}

{% note %}

**Note:** {% data reusables.project-management.cascading-permissions %} For more information, see "[{% data variables.product.prodname_project_v1_caps %} permissions for an organization](/articles/project-board-permissions-for-an-organization)."

{% endnote %}

## Giving an organization member access to a {% data variables.projects.projects_v1_board %}

{% data reusables.profile.access_org %}
{% data reusables.user-settings.access_org %}
{% data reusables.organizations.organization-wide-project %}{% ifversion projects-v2 %}
1. Haz clic en **Proyectos (clásico)**{% endif %}
{% data reusables.project-management.select-project %}
{% data reusables.project-management.click-menu %}
{% data reusables.project-management.access-collaboration-settings %}
{% data reusables.project-management.collaborator-option %}
9. Debajo de "Search by username, full name or email address" (Buscar por nombre de usuario, nombre completo o dirección de correo electrónico), escribe el nombre, el nombre de usuario o el correo electrónico del colaborador {% data variables.product.prodname_dotcom %}. ![La sección Collaborators (Colaboradores) con el nombre de usuario de Octocat ingresado en el campo de búsqueda](/assets/images/help/projects/org-project-collaborators-find-name.png)
{% data reusables.project-management.add-collaborator %}
{% data reusables.project-management.collaborator-permissions %}

## Changing an organization member's access to a {% data variables.projects.projects_v1_board %}

{% data reusables.profile.access_org %}
{% data reusables.user-settings.access_org %}
{% data reusables.organizations.organization-wide-project %}{% ifversion projects-v2 %}
1. Haz clic en **Proyectos (clásico)**{% endif %}
{% data reusables.project-management.select-project %}
{% data reusables.project-management.click-menu %}
{% data reusables.project-management.access-collaboration-settings %}
{% data reusables.project-management.collaborator-option %}
{% data reusables.project-management.collaborator-permissions %}

## Removing an organization member's access to a {% data variables.projects.projects_v1_board %}

When you remove a collaborator from a {% data variables.projects.projects_v1_board %}, they may still retain access to the board based on the permissions they have for other roles. To completely remove access to a {% data variables.projects.projects_v1_board %}, you must remove access for each role the person has. For instance, a person may have access to the {% data variables.projects.projects_v1_board %} as an organization member or team member. For more information, see "[{% data variables.product.prodname_project_v1_caps %} permissions for an organization](/articles/project-board-permissions-for-an-organization)."

{% data reusables.profile.access_org %}
{% data reusables.user-settings.access_org %}
{% data reusables.organizations.organization-wide-project %}{% ifversion projects-v2 %}
1. Haz clic en **Proyectos (clásico)**{% endif %}
{% data reusables.project-management.select-project %}
{% data reusables.project-management.click-menu %}
{% data reusables.project-management.access-collaboration-settings %}
{% data reusables.project-management.collaborator-option %}
{% data reusables.project-management.remove-collaborator %}

## Leer más

- "[{% data variables.product.prodname_project_v1_caps %} permissions for an organization](/articles/project-board-permissions-for-an-organization)"

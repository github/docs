---
title: 'Agregar un colaborador externo a un {% data variables.product.prodname_project_v1 %} en tu organización'
intro: 'Como propietario de organización o administrador de {% data variables.projects.projects_v1_board %}, puedes agregar a un colaborador externo y personalizar sus permisos para un {% data variables.projects.projects_v1_board %}.'
redirect_from:
  - /articles/adding-an-outside-collaborator-to-a-project-board-in-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/adding-an-outside-collaborator-to-a-project-board-in-your-organization
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Agregar un colaborador
allowTitleToDifferFromFilename: true
---

{% data reusables.projects.project_boards_old %}

Un colaborador externo es una persona que no es explícitamente un miembro de tu organización, pero tiene permisos para un {% data variables.projects.projects_v1_board %} en esta.

{% data reusables.profile.access_org %}
{% data reusables.user-settings.access_org %}
{% data reusables.organizations.organization-wide-project %}{% ifversion projects-v2 %}
1. Haz clic en **Proyectos (clásico)**{% endif %}
{% data reusables.project-management.select-project %}
{% data reusables.project-management.click-menu %}
{% data reusables.project-management.access-collaboration-settings %}
{% data reusables.project-management.collaborator-option %}
9. Debajo de "Search by username, full name or email address" (Buscar por nombre de usuario, nombre completo o dirección de correo electrónico), escribe el nombre, nombre de usuario o correo electrónico del colaborador externo {% data variables.product.prodname_dotcom %}. ![La sección Collaborators (Colaboradores) con el nombre de usuario de Octocat ingresado en el campo de búsqueda](/assets/images/help/projects/org-project-collaborators-find-name.png)
{% data reusables.project-management.add-collaborator %}
{% data reusables.project-management.collaborator-permissions %}

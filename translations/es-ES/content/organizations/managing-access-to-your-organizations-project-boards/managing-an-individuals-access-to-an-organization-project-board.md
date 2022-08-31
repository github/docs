---
title: 'Administrar el acceso de un individuo al {% data variables.product.prodname_project_v1 %} de una organización'
intro: 'Como propietario de una organización o administrador de un {% data variables.projects.projects_v1_board %}, puedes administrar el acceso individual de un miembro a un {% data variables.projects.projects_v1_board %} que le pertenezca a tu organización.'
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

**Nota:** {% data reusables.project-management.cascading-permissions %} Para obtener más información, consulta la sección "[Permisos de {% data variables.product.prodname_project_v1_caps %} para una organización](/articles/project-board-permissions-for-an-organization)".

{% endnote %}

## Proporcionar a un miembro de la organización acceso a un {% data variables.projects.projects_v1_board %}

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

## Cambiar el acceso de un miembro de una organización a un {% data variables.projects.projects_v1_board %}

{% data reusables.profile.access_org %}
{% data reusables.user-settings.access_org %}
{% data reusables.organizations.organization-wide-project %}{% ifversion projects-v2 %}
1. Haz clic en **Proyectos (clásico)**{% endif %}
{% data reusables.project-management.select-project %}
{% data reusables.project-management.click-menu %}
{% data reusables.project-management.access-collaboration-settings %}
{% data reusables.project-management.collaborator-option %}
{% data reusables.project-management.collaborator-permissions %}

## Eliminar el acceso de un miembro de una organización para un {% data variables.projects.projects_v1_board %}

Cuando eliminas a un colaborador de un {% data variables.projects.projects_v1_board %}, aún podrían retener el acceso al tablero con base en los permisos que tengan para otros roles. Para eliminar el acceso a un {% data variables.projects.projects_v1_board %} completamente, debes eliminar el acceso para cada rol que tenga la persona. Por ejemplo, una persona podría tener acceso al {% data variables.projects.projects_v1_board %} como miembro de una organización o de un equipo. Para obtener más información, consulta la sección "[Permisos de los {% data variables.product.prodname_project_v1_caps %} para una organización](/articles/project-board-permissions-for-an-organization)".

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

- "[Permisos de un {% data variables.product.prodname_project_v1_caps %} para una organización](/articles/project-board-permissions-for-an-organization)"

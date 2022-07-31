---
title: 'Administrar el acceso a un {% data variables.product.prodname_project_v1 %} para los miembros de la organización'
intro: 'Como propietario de organización o administrador de {% data variables.projects.projects_v1_board %}, puedes configurar un nivel de permisos predeterminado para un {% data variables.projects.projects_v1_board %} para todos los miembros de una organización.'
redirect_from:
  - /articles/managing-access-to-a-project-board-for-organization-members
  - /github/setting-up-and-managing-organizations-and-teams/managing-access-to-a-project-board-for-organization-members
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Administrar el acceso para miembros
allowTitleToDifferFromFilename: true
---

{% data reusables.projects.project_boards_old %}

Predeterminadamente, los miembros de las organizaciones tienen acceso de escritura a los {% data variables.projects.projects_v1_boards %} de estas, a menos de que los propietarios de ellas o los administradores de {% data variables.projects.projects_v1_board %} configuren permisos diferentes para los {% data variables.projects.projects_v1_boards %} específicos.

## Configurar un nivel de permiso base para todos los miembros de la organización

{% tip %}

**Tip:** Puedes darle a un miembro de una organización permisos superiores para un {% data variables.projects.projects_v1_board %}. Para obtener más información, consulta "[Permisos de tablero de proyecto para una organización](/articles/project-board-permissions-for-an-organization)".

{% endtip %}

{% data reusables.profile.access_org %}
{% data reusables.user-settings.access_org %}
{% data reusables.organizations.organization-wide-project %}{% ifversion projects-v2 %}
1. Haz clic en **Proyectos (clásico)**{% endif %}
{% data reusables.project-management.select-project %}
{% data reusables.project-management.click-menu %}
{% data reusables.project-management.access-collaboration-settings %}
8. Debajo de "Organization member permission" (Permiso para miembro de la organización), elige un nivel base de permiso para todos los miembros de la organización: **Read** (Lectura), **Write** (Escritura), **Administrar** o **None** (Ninguno). ![Opciones de permiso base a un tablero de proyecto para todos los miembros de una organización](/assets/images/help/projects/baseline-project-permissions-for-organization-members.png)
9. Haz clic en **Save ** (guardar).

## Leer más

- "[Administrar el acceso de un individuo al {% data variables.product.prodname_project_v1 %} de una organización](/articles/managing-an-individual-s-access-to-an-organization-project-board)"
- "[Administrar el acceso del equipo al {% data variables.product.prodname_project_v1 %} de una organización](/articles/managing-team-access-to-an-organization-project-board)"
- "[{% data variables.product.prodname_project_v1_caps %} permissions for an organization](/articles/project-board-permissions-for-an-organization)"

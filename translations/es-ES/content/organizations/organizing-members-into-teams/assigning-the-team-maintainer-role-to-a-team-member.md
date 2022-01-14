---
title: Assigning the team maintainer role to a team member
intro: You can give a team member the ability to manage team membership and settings by assigning the team maintainer role.
redirect_from:
  - /articles/giving-team-maintainer-permissions-to-an-organization-member-early-access-program
  - /articles/giving-team-maintainer-permissions-to-an-organization-member
  - /github/setting-up-and-managing-organizations-and-teams/giving-team-maintainer-permissions-to-an-organization-member
  - /organizations/managing-peoples-access-to-your-organization-with-roles/giving-team-maintainer-permissions-to-an-organization-member
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Team maintainers
permissions: Organization owners can promote team members to team maintainers.
---

## About team maintainers

People with the team maintainer role can manage team membership and settings.

- [Cambiar el nombre y la descripción del equipo](/articles/renaming-a-team)
- [Cambiar la visibilidad del equipo](/articles/changing-team-visibility)
- [Solicitar agregar un equipo hijo](/articles/requesting-to-add-a-child-team)
- [Solicitar agregar o cambiar un equipo padre](/articles/requesting-to-add-or-change-a-parent-team)
- [Configurar la imagen de perfil del equipo](/articles/setting-your-team-s-profile-picture)
- [Editar debates de equipo](/articles/managing-disruptive-comments/#editing-a-comment)
- [Eliminar debates de equipo](/articles/managing-disruptive-comments/#deleting-a-comment)
- [Agregar a miembros de la organización al equipo](/articles/adding-organization-members-to-a-team)
- [Eliminar a miembros de la organización del equipo](/articles/removing-organization-members-from-a-team)
- Eliminar el acceso del equipo a los repositorios {% ifversion fpt or ghes or ghae or ghec %}
- [Administrar una tarea de revisión de código para el equipo](/organizations/organizing-members-into-teams/managing-code-review-assignment-for-your-team){% endif %}{% ifversion fpt or ghec %}
- [Administrar los recordatorios programados para las solicitudes de extracción](/organizations/organizing-members-into-teams/managing-scheduled-reminders-for-your-team){% endif %}


## Promover un miembro de la organización a mantenedor del equipo

Before you can promote an organization member to team maintainer, the person must already be a member of the team.

{% data reusables.profile.access_org %}
{% data reusables.user_settings.access_org %}
{% data reusables.organizations.specific_team %}
{% data reusables.organizations.team_members_tab %}
4. Selecciona la persona o las personas que desees promover a mantenedor del equipo. ![Casilla junto al miembro de la organización](/assets/images/help/teams/team-member-check-box.png)
5. Por encima de la lista de miembros del equipo, utiliza el menú desplegable y haz clic en **Change role...** (Cambiar rol). ![Menú desplegable con opción para cambiar el rol](/assets/images/help/teams/bulk-edit-drop-down.png)
6. Selecciona un rol nuevo y haz clic en **Change role** (Cambiar rol). ![Botones Radio para los roles de Mantenedor o Miembro](/assets/images/help/teams/team-role-modal.png)

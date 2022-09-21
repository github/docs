---
title: Asignar el rol de mantenedor de equipo a un miembro del equipo
intro: Puedes otorgar a los miembros del equipo la capacidad de administrar las membrecías y ajustes del mismo si les asignas el rol de mantenedor de equipo.
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
ms.openlocfilehash: 2408d8c12718375d777432be03d6e19f7d6d04b5
ms.sourcegitcommit: 76b840f45ba85fb79a7f0c1eb43bc663b3eadf2b
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/12/2022
ms.locfileid: '145126174'
---
## Acerca de los mantenedores de equipo

Las personas con el rol de mantenedor de equipo pueden administrar la membrecía y ajustes de este.

- [Renombrar un equipo](/articles/renaming-a-team)
- [Cambiar la visibilidad del equipo](/articles/changing-team-visibility)
- [Solicitar agregar un equipo hijo](/articles/requesting-to-add-a-child-team)
- [Solicitar agregar o cambiar un equipo padre](/articles/requesting-to-add-or-change-a-parent-team)
- [Configurar la imagen de perfil de tu equipo](/articles/setting-your-team-s-profile-picture)
- [Editar un comentario](/articles/managing-disruptive-comments/#editing-a-comment)
- [Eliminar un comentario](/articles/managing-disruptive-comments/#deleting-a-comment)
- [Agregar a miembros de la organización a un equipo](/articles/adding-organization-members-to-a-team)
- [Eliminar de un equipo a miembros de la organización](/articles/removing-organization-members-from-a-team)
- Quitar el acceso del equipo a los repositorios.
- [Administración de asignaciones de revisión de código para un equipo](/organizations/organizing-members-into-teams/managing-code-review-assignment-for-your-team){% ifversion fpt or ghec %}
- [Administrar recordatorios programados para tu equipo](/organizations/organizing-members-into-teams/managing-scheduled-reminders-for-your-team){% endif %}

## Promover un miembro de la organización a mantenedor del equipo

Antes de que puedas promover a un miembro de la organización a mantenedor de equipo, esta persona debe ser primero un miembro de dicho equipo.

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.specific_team %} {% data reusables.organizations.team_members_tab %}
4. Selecciona la persona o las personas que desees promover a mantenedor del equipo.
![Casilla junto al miembro de la organización](/assets/images/help/teams/team-member-check-box.png)
5. Encima de la lista de miembros del equipo, use el menú desplegable y haga clic en **Change role...** (Cambiar rol...). ![Menú desplegable con opción para cambiar el rol](/assets/images/help/teams/bulk-edit-drop-down.png)
6. Seleccione un nuevo rol y haga clic en **Change role** (Cambiar rol).
![Botones de radio para los roles de responsable de mantenimiento o miembro](/assets/images/help/teams/team-role-modal.png)

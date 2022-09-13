---
title: Eliminar usuarios de equipos y organizaciones
intro: 'Si un miembro de tu organización ya no necesita acceso a ciertos repositorios, puedes eliminarlo del equipo que permite ese acceso. Si un miembro de tu organización ya no necesita acceso a ningún repositorio que le pertenezca a tu organización, puedes eliminarlo de la organización.'
redirect_from:
  - /enterprise/admin/user-management/removing-users-from-teams-and-organizations
  - /admin/user-management/removing-users-from-teams-and-organizations
versions:
  ghes: '*'
  ghae: '*'
type: how_to
topics:
  - Access management
  - Accounts
  - Enterprise
  - Teams
shortTitle: Remove user membership
ms.openlocfilehash: 575cc032786b2bbbf264104002f503b5061df8e6
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/11/2022
ms.locfileid: '145116297'
---
Solo los propietarios o los administradores del equipo pueden eliminar miembros de la organización. Cuando se elimina un usuario de un equipo o una organización, sus propuestas, solicitudes de extracción y comentarios en los repositorios de la organización permanecen intactos y siguen siendo atribuidos al usuario.

{% warning %}

**Advertencia**: Al quitar a un usuario de una organización, perderá el acceso a cualquier bifurcación privada que tenga de los **repositorios privados** de la organización. Puede seguir teniendo copias locales de esas bifurcaciones. Sin embargo, no podrá sincronizarlas con los repositorios de tu organización. Eres responsable de asegurar que las personas que perdieron el acceso a un repositorio borren cualquier información confidencial o propiedad intelectual. Si el usuario que se ha quitado de la organización era miembro de la organización, su acceso a bifurcaciones privadas de repositorios de la organización se puede restaurar si el usuario se [restablece como miembro](/articles/reinstating-a-former-member-of-your-organization) de la organización en un plazo de tres meses después de haberlo quitado.

{% endwarning %}

## Eliminar un miembro del equipo

{% ifversion ghes %}

{% warning %}

**Nota:** {% data reusables.enterprise_management_console.badge_indicator %}

Para eliminar un miembro existente de un equipo sincronizado a un grupo LDAP, comunícate con tu administrador LDAP.

{% endwarning %}

{% endif %}

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.specific_team %}
4. Selecciona la persona o las personas que quieres eliminar.
![Casilla junto al miembro de la organización](/assets/images/help/teams/team-member-check-box.png)
5. Encima de la lista de miembros del equipo, use el menú desplegable y haga clic en **Remove from team** (Quitar del equipo).
![Menú desplegable con opción para cambiar el rol](/assets/images/help/teams/bulk-edit-drop-down.png)

## Eliminar un usuario de una organización

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.people %}
4. Al lado del nombre de los usuarios que quieras eliminar de la organización, haz clic en la casilla de verificación.
![Casilla Eliminar usuario](/assets/images/help/organizations/Organization-remove-user.png)
5. En la parte superior de la página, debajo del nombre de la organización, haga clic en **Quitar de la organización**.
![Botón Quitar de la organización](/assets/images/help/organizations/Organization-remove-from-organization-button.png)

{% data reusables.organizations.data_saved_for_reinstating_a_former_org_member %}

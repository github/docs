---
title: Administrar el acceso de equipo a un repositorio de la organización
intro: Puedes darle acceso de equipo a un repositorio, eliminar el acceso del equipo sobre un repositorio, o cambiar el nivel de permiso del equipo sobre un repositorio.
redirect_from:
- /articles/managing-team-access-to-an-organization-repository-early-access-program
- /articles/managing-team-access-to-an-organization-repository
- /github/setting-up-and-managing-organizations-and-teams/managing-team-access-to-an-organization-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
- Organizations
- Teams
shortTitle: Manage team access
ms.openlocfilehash: 34f912f4d5c55df30629b7b56200bef25281bf2d
ms.sourcegitcommit: 72e1c60459a610944184ca00e3ae60bf1f5fc6db
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/09/2022
ms.locfileid: "147878611"
---
Las personas con acceso de administrador a un repositorio pueden administrar el acceso del equipo a un repositorio. Los mantenedores del equipo pueden eliminar el acceso de un equipo a un repositorio si el equipo tiene acceso directo. Si el acceso del equipo al repositorio se hereda de un equipo primario, los mantenedores pueden optar por restablecer el permiso actual para que coincida con el permiso del equipo primario.

{% warning %}

**Advertencias:**
- Puedes cambiar el nivel de permiso de un equipo si el equipo tiene acceso directo a un repositorio. Si el acceso del equipo a un repositorio se hereda de un equipo padre, debes cambiar el acceso del equipo padre al repositorio.
- Si agregas o eliminas el acceso al repositorio de un equipo padre, cada uno de sus equipos hijos también recibirá o perderá el acceso al repositorio. Para más información, vea "[Acerca de los equipos](/articles/about-teams)".

{% endwarning %}

## Otorgarle a un equipo acceso a un repositorio

{% ifversion fpt or ghec or ghes > 3.3 or ghae-issue-5974 %} Puede otorgar acceso a un equipo a un repositorio o cambiar el nivel de acceso de dicho equipo a un repositorio en la configuración del repositorio. Para obtener más información, vea "[Administración de equipos y personas con acceso al repositorio](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/managing-teams-and-people-with-access-to-your-repository#inviting-a-team-or-person)". {% else %} {% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.specific_team %} {% data reusables.organizations.team-repositories-tab %}
5. Encima de la lista de repositorios, haga clic en **Add repository** (Agregar repositorio).
  ![Botón Agregar repositorio](/assets/images/help/organizations/add-repositories-button.png)
6. Escriba el nombre de un repositorio y luego haga clic en **Add repository to team** (Agregar repositorio al equipo).
  ![Campo para buscar un repositorio](/assets/images/help/organizations/team-repositories-add.png)
7. De forma opcional, a la derecha del nombre del repositorio, utiliza el menú desplegable y elige un nivel de permiso diferente para el equipo.
  ![Menú desplegable de nivel de acceso a un repositorio](/assets/images/help/organizations/team-repositories-change-permission-level.png) {% endif %}
## Eliminar el acceso de un equipo a un repositorio

{% ifversion fpt or ghec or ghes > 3.3 or ghae-issue-5974 %} Puede eliminar el acceso de un equipo a un repositorio de la organización en la configuración del repositorio. Para obtener más información, vea "[Administración de equipos y personas con acceso al repositorio](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/managing-teams-and-people-with-access-to-your-repository#removing-access-for-a-team-or-person)".

Si un equipo tiene acceso directo a un repositorio, puedes eliminar el acceso de dicho equipo a este. Si el acceso de un equipo al repositorio se hereda de un equipo padre, debes eliminar el repositorio del equipo padre para poder eliminar el repositorio de los equipos hijos.

{% data reusables.repositories.deleted_forks_from_private_repositories_warning %}

{% else %}

Puedes eliminar el acceso de un equipo a un repositorio si el equipo tiene acceso directo a un repositorio. Si el acceso de un equipo al repositorio se hereda de un equipo padre, debes eliminar el repositorio del equipo padre para poder eliminar el repositorio de los equipos hijos.

{% data reusables.repositories.deleted_forks_from_private_repositories_warning %}

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.specific_team %} {% data reusables.organizations.team-repositories-tab %}
5. Selecciona el repositorio o los repositorios que deseas eliminar del equipo.
  ![Lista de repositorios de equipo con las casillas de verificación para algunos repositorios seleccionados](/assets/images/help/teams/select-team-repositories-bulk.png)
6. Encima de la lista de repositorios, utilice el menú desplegable y haga clic en **Remove from team** (Eliminar del equipo).
  ![Menú desplegable con la opción de eliminar un repositorio de un equipo](/assets/images/help/teams/remove-team-repo-dropdown.png)
7. Revise los repositorios que se eliminarán del equipo y después haga clic en **Remove repositories** (Eliminar repositorios).
  ![Casilla modal con una lista de repositorios a los que el equipo ya no tiene acceso](/assets/images/help/teams/confirm-remove-team-repos.png) {% endif %}
## Información adicional

- "[Roles de repositorio para una organización](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization)"

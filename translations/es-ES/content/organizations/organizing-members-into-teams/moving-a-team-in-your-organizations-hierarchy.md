---
title: Mover un equipo en la jerarquía de tu organización
intro: 'Los mantenedores del equipo y los propietarios de la organización pueden anidar un equipo bajo un equipo padre, o cambiar o eliminar un equipo padre de un equipo anidado.'
redirect_from:
  - /articles/changing-a-team-s-parent
  - /articles/moving-a-team-in-your-organization-s-hierarchy
  - /articles/moving-a-team-in-your-organizations-hierarchy
  - /github/setting-up-and-managing-organizations-and-teams/moving-a-team-in-your-organizations-hierarchy
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Move a team
ms.openlocfilehash: 205ab40d04d613c54b498b9712e5f199e1433558
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '145126166'
---
Los propietarios de la organización pueden cambiar el padre de cualquier equipo. Los mantenedores del equipo pueden cambiar el equipo padre de un equipo si son mantenedores tanto en el equipo hijo como en el equipo padre. Los mantenedores del equipo sin permisos de mantenedor en el equipo hijo puede solicitar agregar un equipo padre o hijo. Para obtener más información, consulte "[Solicitar agregar o cambiar un equipo primario](/articles/requesting-to-add-or-change-a-parent-team)" y "[Solicitar agregar un equipo secundario](/articles/requesting-to-add-a-child-team)".

{% data reusables.organizations.child-team-inherits-permissions %}

{% tip %}

**Sugerencias:**
- No puedes cambiar el equipo padre de un equipo a un equipo secreto. Para más información, vea "[Acerca de los equipos](/articles/about-teams)".
- No puedes anidar un equipo padre debajo de uno de sus equipos hijos.

{% endtip %}

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.teams %}
4. En la lista de equipos, haz clic en el nombre del equipo cuyo padre deseas cambiar.
  ![Lista de equipos de la organización](/assets/images/help/teams/click-team-name.png) {% data reusables.organizations.team_settings %}
6. Utilice el menú desplegable para elegir un equipo primario, o para eliminar un equipo primario existente, seleccione **Clear selected value**.
  ![Menú desplegable que enumera los equipos de la organización](/assets/images/help/teams/choose-parent-team.png)
7. Haga clic en **Update**(Actualizar).
{% data reusables.repositories.changed-repository-access-permissions %}
9. Haga clic en **Confirm new parent team**.
  ![Casilla modal con información acerca de los cambios en los permisos de acceso del repositorio](/assets/images/help/teams/confirm-new-parent-team.png)

## Información adicional

- "[Acerca de los equipos](/articles/about-teams)"

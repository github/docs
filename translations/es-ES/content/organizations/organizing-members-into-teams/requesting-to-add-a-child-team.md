---
title: Solicitar agregar un equipo hijo
intro: 'Si tienes permisos de mantenedor en un equipo, puedes solicitar anidar un equipo existente en tu equipo en la jerarquía de tu organización.'
redirect_from:
  - /articles/requesting-to-add-a-child-team
  - /github/setting-up-and-managing-organizations-and-teams/requesting-to-add-a-child-team
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Add a child team
ms.openlocfilehash: e8012645bb4cdedc2a3aa8f7196adc18253a2600
ms.sourcegitcommit: 505b84dc7227e8a5d518a71eb5c7eaa65b38ce0e
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/10/2022
ms.locfileid: '147879384'
---
Cuando solicitas agregar un equipo como hijo, se envía una solicitud a los mantenedores del equipo hijo. Una vez que un mantenedor del equipo hijo aprueba tu solicitud, el equipo hijo se anida en el equipo padre de la jerarquía de tu organización.

Si eres propietario de una organización o tienes permisos de mantenedor del equipo tanto en el equipo hijo como en el equipo padre, puedes agregar el equipo hijo sin solicitar aprobación o modificar el padre del equipo hijo desde la página de configuraciones del equipo hijo. Para obtener más información, vea "[Trasladar un equipo en la jerarquía de la organización](/articles/moving-a-team-in-your-organization-s-hierarchy)".

{% data reusables.organizations.child-team-inherits-permissions %}

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.teams %}
4. En la lista de equipos, haz clic en el nombre del equipo al que quieres agregar el equipo hijo.
  ![Lista de los equipos de la organización](/assets/images/help/teams/click-team-name.png)
5. En la parte superior de la página del equipo, haga clic en {% octicon "people" aria-label="The people icon" %} **Teams** (Equipos).
  ![Pestaña de equipos en la página de un equipo](/assets/images/help/teams/team-teams-tab.png)
6. Haga clic en **Add a team** (Agregar un equipo).
  ![Botón de agregar un equipo en una página de equipo](/assets/images/help/teams/add-a-team.png)
7. Escribe el nombre del equipo que quieres agregar como equipo hijo y selecciónalo desde la lista desplegable.
  ![Cuadro de texto para escribir y menú desplegable para seleccionar el nombre del equipo secundario](/assets/images/help/teams/type-child-team-name.png) {% data reusables.repositories.changed-repository-access-permissions %}
9. Haga clic en **Confirm changes** (Confirmar cambios) a fin de enviar una solicitud para agregar el equipo secundario.
  ![Casilla modal con información acerca de los cambios en los permisos de acceso del repositorio](/assets/images/help/teams/confirm-new-parent-team.png)

## Información adicional

- "[Acerca de los equipos](/articles/about-teams)"
- "[Mover un equipo en la jerarquía de su organización](/articles/moving-a-team-in-your-organization-s-hierarchy)"
- "[Solicitar agregar o cambiar un equipo primario](/articles/requesting-to-add-or-change-a-parent-team)"

---
title: Agregar miembros de la organización a un equipo
intro: 'Las personas con permisos de propietario o mantenedor del equipo pueden agregar miembros de la organización a los equipos. Las personas con permisos de propietario también pueden {% ifversion fpt or ghec %} invitar a personas que no son miembros a unirse{% else %}incorporar a personas que no son miembros a{% endif %} un equipo y la organización.'
redirect_from:
  - /articles/adding-organization-members-to-a-team-early-access-program
  - /articles/adding-organization-members-to-a-team
  - /github/setting-up-and-managing-organizations-and-teams/adding-organization-members-to-a-team
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Add members to a team
ms.openlocfilehash: 0a0dcd6b925c2209ae583197963db84ba881c7ff
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '145126175'
---
{% data reusables.organizations.team-synchronization %}

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.specific_team %} {% data reusables.organizations.team_members_tab %}
6. Encima de la lista de miembros del equipo, haga clic en **Agregar un miembro**.
![Botón para agregar un miembro](/assets/images/help/teams/add-member-button.png) {% data reusables.organizations.invite_to_team %} {% data reusables.organizations.review-team-repository-access %}

{% ifversion fpt or ghec %}{% data reusables.organizations.cancel_org_invite %}{% endif %}

## Información adicional

- "[Acerca de los equipos](/articles/about-teams)"
- "[Administrar el acceso de equipo a un repositorio de la organización](/articles/managing-team-access-to-an-organization-repository)"

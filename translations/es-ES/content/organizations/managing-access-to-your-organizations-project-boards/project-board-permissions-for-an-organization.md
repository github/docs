---
title: 'Permisos de {% data variables.product.prodname_project_v1_caps %} para una organización'
intro: 'Los propietarios de la organización y los usuarios con permisos de administrador de {% data variables.projects.projects_v1_board %} pueden personalizar quién tiene permisos de lectura, escritura y administración en las instancias de {% data variables.projects.projects_v1_boards %} de la organización.'
redirect_from:
  - /articles/project-board-permissions-for-an-organization
  - /github/setting-up-and-managing-organizations-and-teams/project-board-permissions-for-an-organization
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: '{% data variables.product.prodname_project_v1_caps %} permissions'
allowTitleToDifferFromFilename: true
ms.openlocfilehash: fbc3ec7db52d6b4a417a4e9e93aea9ae717e2fca
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '147614211'
---
{% data reusables.projects.project_boards_old %}

## Introducción sobre los permisos

Hay tres niveles de permisos para una instancia de {% data variables.projects.projects_v1_board %} para usuarios y equipos:

{% data reusables.project-management.project-board-permissions %}

Los propietarios de la organización y los usuarios con permisos de administrador pueden conceder acceso a un usuario a una instancia de {% data variables.projects.projects_v1_board %} de la organización de manera individual, como un colaborador externo o como miembro de la organización, o bien mediante su pertenencia a un equipo o una organización. Un colaborador externo es alguien que no es miembro de la organización pero a quien le han otorgado permisos para colaborar en tu organización.

Los propietarios de la organización y los usuarios con permisos de administrador para una instancia de {% data variables.projects.projects_v1_board %} también pueden hacer lo siguiente:
- Configurar permisos predeterminados a un tablero de proyecto para todos los miembros de la organización.
- Administrar el acceso al tablero de proyecto para los miembros de la organización, los equipos y los colaboradores externos. Para más información, consulta "[Administración del acceso de equipo a una instancia de {% data variables.product.prodname_project_v1 %} de la organización](/articles/managing-team-access-to-an-organization-project-board)", "[Administración del acceso de un individuo a una instancia de {% data variables.product.prodname_project_v1 %} de la organización](/articles/managing-an-individual-s-access-to-an-organization-project-board)" o "[Administración del acceso a una instancia de {% data variables.product.prodname_project_v1 %} para los miembros de la organización](/articles/managing-access-to-a-project-board-for-organization-members)".
- Administrar la visibilidad del tablero de proyecto. Para más información, consulta "[Administración del acceso a una instancia de {% data variables.product.prodname_project_v1 %} para los miembros de la organización](/articles/managing-access-to-a-project-board-for-organization-members)".

## Permisos en cascada para {% data variables.projects.projects_v1_boards %}

{% data reusables.project-management.cascading-permissions %}

Por ejemplo, si el propietario de una organización ha concedido a todos los miembros de la organización permisos de lectura para una instancia de {% data variables.projects.projects_v1_board %} y un administrador de {% data variables.projects.projects_v1_board %} le concede a un miembro de la organización permisos de escritura para ese panel como colaborador individual, esa persona tendría permisos de escritura para la instancia de {% data variables.projects.projects_v1_board %}.

## Visibilidad de {% data variables.projects.projects_v1_board_caps %}

{% ifversion classic-project-visibility-permissions %}{% data reusables.projects.owners-can-limit-visibility-permissions %}{% endif %}

{% data reusables.project-management.project-board-visibility %} Puedes cambiar la visibilidad de la instancia de {% data variables.projects.projects_v1_board %} de privada a {% ifversion ghae %}interna{% else %}pública{% endif %} y viceversa. Para más información, consulta "[Cambio de la visibilidad de {% data variables.product.prodname_project_v1 %}](/articles/changing-project-board-visibility)".

## Información adicional

- "[Cambio de la visibilidad de {% data variables.product.prodname_project_v1 %}](/articles/changing-project-board-visibility)"
- "[Administración del acceso de un individuo a una instancia de {% data variables.product.prodname_project_v1 %} de la organización](/articles/managing-an-individual-s-access-to-an-organization-project-board)"
- "[Administración del acceso de un equipo a una instancia de {% data variables.product.prodname_project_v1 %} de la organización](/articles/managing-team-access-to-an-organization-project-board)"
- "[Administración del acceso a una instancia de {% data variables.product.prodname_project_v1 %} para los miembros de la organización](/articles/managing-access-to-a-project-board-for-organization-members)"

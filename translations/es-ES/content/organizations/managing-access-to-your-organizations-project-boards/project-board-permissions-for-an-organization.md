---
title: 'Permisos de {% data variables.product.prodname_project_v1_caps %} para una organización'
intro: 'Los propietarios de organizaciones y las personas con permisos administrativos en un {% data variables.projects.projects_v1_board %} pueden personalizar quién tiene permisos de lectura, escritura y administrador para los {% data variables.projects.projects_v1_boards %} de tu organización.'
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
shortTitle: 'Permisos de la {% data variables.product.prodname_project_v1_caps %}'
allowTitleToDifferFromFilename: true
---

{% data reusables.projects.project_boards_old %}

## Resumen de permisos

Existen tres niveles de permisos para un {% data variables.projects.projects_v1_board %} para las personas y equipos:

{% data reusables.project-management.project-board-permissions %}

Los propietarios de las organizaciones y las personas con permisos administrativos pueden otorgar a una persona acceso individual al {% data variables.projects.projects_v1_board %} de una organización, ya sea como colaborador externo o miembro de la organización, o mediante su membrecía en una organización o equipo. Un colaborador externo es alguien que no es miembro de la organización pero a quien le han otorgado permisos para colaborar en tu organización.

Los propietarios de las organizaciones o las personas con permisos administrativos para un {% data variables.projects.projects_v1_board %} también pueden:
- Configurar permisos predeterminados a un tablero de proyecto para todos los miembros de la organización.
- Administrar el acceso al tablero de proyecto para los miembros de la organización, los equipos y los colaboradores externos. Para obtener más información, consulta las secciones "[Administrar el acceso de un equipo al {% data variables.product.prodname_project_v1 %} de una organización](/articles/managing-team-access-to-an-organization-project-board)", "[Administrar el acceso individual al {% data variables.product.prodname_project_v1 %} de una organización](/articles/managing-an-individual-s-access-to-an-organization-project-board)" o "[Administrar el acceso a un {% data variables.product.prodname_project_v1 %} para los miembros de una organización](/articles/managing-access-to-a-project-board-for-organization-members)".
- Administrar la visibilidad del tablero de proyecto. Para obtener más información, consulta la sección "[Administrar el acceso a un {% data variables.product.prodname_project_v1 %} para los miembros de una organización](/articles/managing-access-to-a-project-board-for-organization-members)".

## Permisos de cascada para los {% data variables.projects.projects_v1_boards %}

{% data reusables.project-management.cascading-permissions %}

Por ejemplo, si un propietario de organización ha otorgado a permisos de lectura a todos sus miembros para un {% data variables.projects.projects_v1_board %} y un administrador de {% data variables.projects.projects_v1_board %} otorga permisos de escritura a un miembro de la organización para dicho tablero como colaborador individual, esta persona tendría permisos de escritura en el {% data variables.projects.projects_v1_board %}.

## Visibilidad de {% data variables.projects.projects_v1_board_caps %}

{% data reusables.project-management.project-board-visibility %} Puedes cambiar la visibilidad del {% data variables.projects.projects_v1_board %} de privado a {% ifversion ghae %}interno{% else %}público{% endif %} y de vuelta. Para obtener más información, consulta la sección "[Cambiar la visibilidad de un {% data variables.product.prodname_project_v1 %}](/articles/changing-project-board-visibility)".

## Leer más

- "[Cambiar la visibilidad de un {% data variables.product.prodname_project_v1 %}](/articles/changing-project-board-visibility)"
- "[Administrar el acceso de un individuo al {% data variables.product.prodname_project_v1 %} de una organización](/articles/managing-an-individual-s-access-to-an-organization-project-board)"
- "[Administrar el acceso del equipo al {% data variables.product.prodname_project_v1 %} de una organización](/articles/managing-team-access-to-an-organization-project-board)"
- "[Administrar el acceso a un {% data variables.product.prodname_project_v1 %} para los miembros de la organización](/articles/managing-access-to-a-project-board-for-organization-members)"

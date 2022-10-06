---
title: 'Administración del acceso de un individuo a una instancia de {% data variables.product.prodname_project_v1 %} de la organización'
intro: 'Como propietario de la organización o administrador de {% data variables.projects.projects_v1_board %}, puedes administrar el acceso de un miembro individual a una instancia de {% data variables.projects.projects_v1_board %} propiedad de la organización.'
redirect_from:
  - /articles/managing-an-individual-s-access-to-an-organization-project-board
  - /articles/managing-an-individuals-access-to-an-organization-project-board
  - /github/setting-up-and-managing-organizations-and-teams/managing-an-individuals-access-to-an-organization-project-board
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Manage individual access
allowTitleToDifferFromFilename: true
ms.openlocfilehash: 3fd77225e83df2124e8e026453b539f6961ff473
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '147422896'
---
{% data reusables.projects.project_boards_old %}

{% note %}

**Nota:** {% data reusables.project-management.cascading-permissions %} Para más información, consulta "[Permisos de {% data variables.product.prodname_project_v1_caps %} para una organización](/articles/project-board-permissions-for-an-organization)". 

{% endnote %}

## Concesión a un miembro de la organización de acceso a una instancia de {% data variables.projects.projects_v1_board %}

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.organization-wide-project %}{% ifversion projects-v2 %}
1. Haz clic en **Proyectos (clásico)** {% endif %} {% data reusables.project-management.select-project %} {% data reusables.project-management.click-menu %} {% data reusables.project-management.access-collaboration-settings %} {% data reusables.project-management.collaborator-option %}
9. Debajo de "Search by username, full name or email address" (Buscar por nombre de usuario, nombre completo o dirección de correo electrónico), escribe el nombre, el nombre de usuario o el correo electrónico del colaborador {% data variables.product.prodname_dotcom %}.
   ![La sección Collaborators con el nombre de usuario de Octocat escrito en el campo de búsqueda](/assets/images/help/projects/org-project-collaborators-find-name.png) {% data reusables.project-management.add-collaborator %} {% data reusables.project-management.collaborator-permissions %}

## Cambio del acceso de un miembro de la organización a una instancia de {% data variables.projects.projects_v1_board %}

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.organization-wide-project %}{% ifversion projects-v2 %}
1. Haz clic en **Proyectos (clásico)** {% endif %} {% data reusables.project-management.select-project %} {% data reusables.project-management.click-menu %} {% data reusables.project-management.access-collaboration-settings %} {% data reusables.project-management.collaborator-option %} {% data reusables.project-management.collaborator-permissions %}

## Eliminación del acceso de un miembro de la organización a una instancia de {% data variables.projects.projects_v1_board %}

Cuando eliminas a un colaborador de una instancia de {% data variables.projects.projects_v1_board %}, es posible que conserve acceso al un tablero según los permisos que tenga para otros roles. Para eliminar definitivamente el acceso a una instancia de {% data variables.projects.projects_v1_board %}, debes eliminar el acceso para cada rol que tenga ese usuario. Por ejemplo, un usuario puede tener acceso a la instancia de {% data variables.projects.projects_v1_board %} como miembro de una organización o un equipo. Para más información, consulta "[Permisos de {% data variables.product.prodname_project_v1_caps %} para una organización](/articles/project-board-permissions-for-an-organization)".

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.organization-wide-project %}{% ifversion projects-v2 %}
1. Haz clic en **Proyectos (clásico)** {% endif %} {% data reusables.project-management.select-project %} {% data reusables.project-management.click-menu %} {% data reusables.project-management.access-collaboration-settings %} {% data reusables.project-management.collaborator-option %} {% data reusables.project-management.remove-collaborator %}

## Información adicional

- "[Permisos de {% data variables.product.prodname_project_v1_caps %} para una organización](/articles/project-board-permissions-for-an-organization)".

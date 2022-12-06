---
title: 'Adición de un colaborador externo a una instancia de {% data variables.product.prodname_project_v1 %} en la organización'
intro: 'Como propietario de la organización o administrador de {% data variables.projects.projects_v1_board %}, puedes agregar un colaborador externo a una instancia de {% data variables.projects.projects_v1_board %} y personalizar sus permisos.'
redirect_from:
  - /articles/adding-an-outside-collaborator-to-a-project-board-in-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/adding-an-outside-collaborator-to-a-project-board-in-your-organization
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Add a collaborator
allowTitleToDifferFromFilename: true
ms.openlocfilehash: 517e0c6f71d1b70eb19dc85dfe3334ff0144c814
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 10/25/2022
ms.locfileid: '148110137'
---
{% data reusables.projects.project_boards_old %}

Un colaborador externo es alguien que no es explícitamente un miembro de tu organización, pero que tiene permisos para una instancia de {% data variables.projects.projects_v1_board %} en tu organización.

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.organization-wide-project %}{% ifversion projects-v2 %}
1. Haz clic en **Proyectos (clásico)** {% endif %} {% data reusables.project-management.select-project %} {% data reusables.project-management.click-menu %} {% data reusables.project-management.access-collaboration-settings %} {% data reusables.project-management.collaborator-option %}
9. Debajo de "Search by username, full name or email address" (Buscar por nombre de usuario, nombre completo o dirección de correo electrónico), escribe el nombre, nombre de usuario o correo electrónico del colaborador externo {% data variables.product.prodname_dotcom %}.
   ![La sección Collaborators (Colaboradores) con el nombre de usuario de Octocat escrito en el campo de búsqueda](/assets/images/help/projects/org-project-collaborators-find-name.png) {% data reusables.project-management.add-collaborator %} {% data reusables.project-management.collaborator-permissions %}

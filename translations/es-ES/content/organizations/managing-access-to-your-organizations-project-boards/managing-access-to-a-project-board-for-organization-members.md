---
title: 'Administración del acceso a una instancia de {% data variables.product.prodname_project_v1 %} para los miembros de la organización'
intro: 'Como propietario de la organización o administrador de {% data variables.projects.projects_v1_board %}, puedes establecer un nivel de permiso predeterminado para una instancia de {% data variables.projects.projects_v1_board %} para todos los miembros de la organización.'
redirect_from:
  - /articles/managing-access-to-a-project-board-for-organization-members
  - /github/setting-up-and-managing-organizations-and-teams/managing-access-to-a-project-board-for-organization-members
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Manage access for members
allowTitleToDifferFromFilename: true
ms.openlocfilehash: 4c0b280f6c1b28532b191282db465b5ae5b3c274
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 10/25/2022
ms.locfileid: '148110004'
---
{% data reusables.projects.project_boards_old %}

De forma predeterminada, los miembros de la organización tienen acceso de escritura a las instancias de {% data variables.projects.projects_v1_boards %} de su organización, a menos que los propietarios de la organización o los administradores de {% data variables.projects.projects_v1_board %} establezcan permisos diferentes para instancias de {% data variables.projects.projects_v1_boards %} específicas.

## Configurar un nivel de permiso base para todos los miembros de la organización

{% tip %}

**Sugerencia:** Puedes conceder a un miembro de la organización permisos más elevados para {% data variables.projects.projects_v1_board %}. Para más información, vea "[Permisos de panel de proyecto para una organización](/articles/project-board-permissions-for-an-organization)".

{% endtip %}

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.organization-wide-project %}{% ifversion projects-v2 %}
1. Haz clic en **Proyectos (clásico)** {% endif %} {% data reusables.project-management.select-project %} {% data reusables.project-management.click-menu %} {% data reusables.project-management.access-collaboration-settings %}
8. En "Organization member permission" (Permiso de miembro de la organización), elija un nivel de permiso de referencia para todos los miembros de la organización: **Lectura**, **Escritura**, **Administrador** o **Ninguno**.
![Opciones de permiso de referencia a un panel de proyecto para todos los miembros de una organización](/assets/images/help/projects/baseline-project-permissions-for-organization-members.png)
9. Haga clic en **Save**(Guardar).

## Información adicional

- "[Administración del acceso de un individuo a una instancia de {% data variables.product.prodname_project_v1 %} de la organización](/articles/managing-an-individual-s-access-to-an-organization-project-board)"
- "[Administración del acceso de un equipo a una instancia de {% data variables.product.prodname_project_v1 %} de la organización](/articles/managing-team-access-to-an-organization-project-board)"
- "[Permisos de {% data variables.product.prodname_project_v1_caps %} para una organización](/articles/project-board-permissions-for-an-organization)".

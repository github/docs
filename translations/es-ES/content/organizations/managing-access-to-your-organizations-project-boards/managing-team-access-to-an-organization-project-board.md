---
title: 'Administración del acceso de un equipo a una instancia de {% data variables.product.prodname_project_v1 %} de la organización'
intro: 'Como propietario de la organización o administrador de {% data variables.projects.projects_v1_board %}, puedes asignar a un equipo acceso a una instancia de {% data variables.projects.projects_v1_board %} propiedad de la organización.'
redirect_from:
  - /articles/managing-team-access-to-an-organization-project-board
  - /github/setting-up-and-managing-organizations-and-teams/managing-team-access-to-an-organization-project-board
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Manage team access
allowTitleToDifferFromFilename: true
ms.openlocfilehash: c49fab76bbf286f865e3845356213bc1af18b20a
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 10/25/2022
ms.locfileid: '148110008'
---
{% data reusables.projects.project_boards_old %}

{% warning %}

**Advertencias:**
- Puedes cambiar el nivel de permiso de un equipo si el equipo tiene acceso directo a una instancia de {% data variables.projects.projects_v1_board %}. Si el acceso del equipo a la instancia de {% data variables.projects.projects_v1_board %} se hereda de un equipo primario, tendrás que cambiar el acceso del equipo primario a la instancia de {% data variables.projects.projects_v1_board %}.
- Si agregas o quitas el acceso a la instancia de {% data variables.projects.projects_v1_board %} para un equipo primario, cada uno de sus equipos secundarios también recibirá o perderá el acceso a la instancia de {% data variables.projects.projects_v1_board %}. Para más información, vea "[Acerca de los equipos](/articles/about-teams)".

{% endwarning %}

## Asignación de acceso a una instancia de {% data variables.projects.projects_v1_board %} a un equipo

Puedes asignar a un equipo completo el mismo nivel de permiso para una instancia de {% data variables.projects.projects_v1_board %}.

{% note %}

**Nota:** {% data reusables.project-management.cascading-permissions %} Por ejemplo, si un propietario de la organización le ha otorgado a un equipo permisos de lectura a una instancia de {% data variables.projects.projects_v1_board %} y un administrador de {% data variables.projects.projects_v1_board %} le otorga a uno de los miembros del equipo permisos de administrador a ese panel como colaborador individual, esa persona tendría permisos de administrador para la instancia de {% data variables.projects.projects_v1_board %}. Para más información, consulta "[Permisos de {% data variables.product.prodname_project_v1_caps %} para una organización](/articles/project-board-permissions-for-an-organization)".

{% endnote %}

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.organization-wide-project %}{% ifversion projects-v2 %}
1. Haz clic en **Proyectos (clásico)** {% endif %} {% data reusables.project-management.select-project %} {% data reusables.project-management.click-menu %} {% data reusables.project-management.access-collaboration-settings %}
8. En la barra lateral de la izquierda, haga clic en **Teams** (Equipo).
9. Para agregar un equipo, haz clic en **Add a team: Select team** (Agregar un equipo: Seleccionar equipo). Después, elige un equipo del menú desplegable o busca el equipo que deseas agregar.
 ![Menú desplegable para agregar un equipo con una lista de equipos en la organización](/assets/images/help/projects/add-a-team.png)
10. Junto al nombre del equipo, usa el menú desplegable para seleccionar el nivel de permiso deseado: **Read** (Lectura), **Write** (Escritura) o **Admin** (Administración). ![Menú desplegable de permisos del equipo con opciones de escritura, lectura y administración](/assets/images/help/projects/org-project-team-choose-permissions.png)

## Configuración del acceso de un equipo a una instancia de {% data variables.projects.projects_v1_board %}

Si el acceso de un equipo a la instancia de {% data variables.projects.projects_v1_board %} se hereda de un equipo primario, tendrás que cambiar el acceso del equipo primario a la instancia de {% data variables.projects.projects_v1_board %} para actualizar el acceso a los equipos secundarios.

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.specific_team %}
4. Encima de la conversación del equipo, haz clic en {% octicon "project" aria-label="The Projects icon" %} **Projects** (Proyectos).
  ![La pestaña de repositorios del equipo](/assets/images/help/organizations/team-project-board-button.png)
5. Para cambiar los niveles de permiso, usa el menú desplegable situado a la derecha de la instancia de {% data variables.projects.projects_v1_board %} que quieres actualizar. Para quitar una instancia de {% data variables.projects.projects_v1_board %}, haz clic en **{% octicon "trash" aria-label="The trash icon" %}** .
  ![Botón para eliminar un panel de proyecto de la papelera del equipo](/assets/images/help/organizations/trash-button.png)

{% ifversion projects-v2-add-to-team %}

## Información adicional

- [Incorporación del proyecto a un equipo](/issues/planning-and-tracking-with-projects/managing-your-project/adding-your-project-to-a-team)


{% endif %}

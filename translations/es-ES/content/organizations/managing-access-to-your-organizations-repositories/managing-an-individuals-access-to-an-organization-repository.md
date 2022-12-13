---
title: Administrar el acceso de una persona a un repositorio de una organización
intro: Puedes administrar el acceso de una persona a un repositorio propiedad de tu organización.
redirect_from:
- /articles/managing-an-individual-s-access-to-an-organization-repository-early-access-program
- /articles/managing-an-individual-s-access-to-an-organization-repository
- /articles/managing-an-individuals-access-to-an-organization-repository
- /github/setting-up-and-managing-organizations-and-teams/managing-an-individuals-access-to-an-organization-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
- Organizations
- Teams
shortTitle: Manage individual access
permissions: People with admin access to a repository can manage access to the repository.
ms.openlocfilehash: 90a9df66f0cd4089634b2d29dd798b37629bbb7b
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: "145135000"
---
## Acerca del acceso a los repositorios de la organización

Cuando eliminas a un colaborador de un repositorio en tu organización, el colaborador pierde el acceso de lectura y escritura al repositorio. Si el repositorio es privado y el colaborador ha bifurcado el repositorio, entonces su bifurcación también se elimina, pero el colaborador conservará cualquier clon local de tu repositorio.

{% data reusables.repositories.deleted_forks_from_private_repositories_warning %}

{% ifversion fpt or ghec or ghes > 3.3 or ghae-issue-5974 %}
## Administrar el acceso de una persona a un repositorio de una organización
Puedes otorgarle a alguien acceso a un repositorio o cambiar su nivel de acceso a este en tus ajustes de repositorio. Para obtener más información, vea "[Administración de equipos y personas con acceso al repositorio](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/managing-teams-and-people-with-access-to-your-repository)".
{% else %}
## Otorgar acceso a un repositorio

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.repositories.navigate-to-manage-access %} {% data reusables.organizations.invite-teams-or-people %}
1. En el campo de búsqueda, comienza a teclear el nombre de la persona que desees invitar y luego haz clic en un nombre de la lista de coincidencias.
  ![Campo de búsqueda para escribir el nombre del equipo o la persona que va a invitar al repositorio](/assets/images/help/repository/manage-access-invite-search-field.png)
6. En "Choose a role" (Elegir un rol), seleccione el rol de repositorio que va a asignar a la persona y luego haga clic en **Add NAME to REPOSITORY** (Agregar NOMBRE al REPOSITORIO).
  ![Seleccionar los permisos para el equipo o la persona](/assets/images/help/repository/manage-access-invite-choose-role-add.png)

## Administrar el acceso de una persona a un repositorio de una organización

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.people %}
4. Haga clic en **Members** (Miembros) o **Outside collaborators** (Colaboradores externos) para administrar personas con diferentes tipos de acceso. ![Botón para invitar a miembros o colaboradores externos a una organización](/assets/images/help/organizations/select-outside-collaborators.png)
5. A la derecha del nombre de la persona que le gustaría administrar, use el menú desplegable {% octicon "gear" aria-label="The Settings gear" %}, y haga clic en **Manage** (Administrar).
  ![El enlace de administración de acceso](/assets/images/help/organizations/member-manage-access.png)
6. En la página "Manage access" (Administrar acceso), junto al repositorio, haga clic en **Manage access** (Administrar acceso).
![Botón de administración de acceso a un repositorio](/assets/images/help/organizations/repository-manage-access.png)
7. Revisa el acceso de la persona a un repositorio determinado, como si fuera un colaborador o si tuviera acceso a un repositorio por medio de una membresía de equipo.
![Matriz de acceso a repositorio para el usuario](/assets/images/help/organizations/repository-access-matrix-for-user.png) {% endif %}
## Información adicional

{% ifversion fpt or ghec %}: "[Limitar las interacciones con el repositorio](/articles/limiting-interactions-with-your-repository)"{% endif %}
- "[Roles de repositorio para una organización](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization)"

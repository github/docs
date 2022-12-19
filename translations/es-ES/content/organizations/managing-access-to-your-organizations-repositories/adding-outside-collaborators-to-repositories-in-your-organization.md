---
title: Agregar colaboradores externos a los repositorios en tu organización
intro: Puedes permitir que las personas que no son miembros de tu organización accedan a los repositorios que le pertenecen a ella.
redirect_from:
- /articles/adding-outside-collaborators-to-repositories-in-your-organization
- /github/setting-up-and-managing-organizations-and-teams/adding-outside-collaborators-to-repositories-in-your-organization
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
- Organizations
- Teams
shortTitle: Add outside collaborator
permissions: People with admin access to a repository can add an outside collaborator to the repository.
ms.openlocfilehash: caac79aba845f433effd3a3461e739d07cee135b
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: "145135013"
---
## Acerca de los colaboradores externos

Un colaborador externo es una persona que no es miembro de tu organización, pero tiene acceso a uno o más repositorios de ella. Puedes elegir el nivel de acceso que quieras otorgar a cada colaborador externo. {% data reusables.organizations.outside_collaborator_forks %}

{% data reusables.organizations.outside-collaborators-use-seats %}

{% ifversion fpt %} Las organizaciones que utilizan {% data variables.product.prodname_ghe_cloud %} pueden restringir la capacidad para invitar a colaboradores. Para obtener más información, consulte "[Configurar permisos para agregar colaboradores externos](/enterprise-cloud@latest/organizations/managing-organization-settings/setting-permissions-for-adding-outside-collaborators)" en la documentación de {% data variables.product.prodname_ghe_cloud %}.
{% else %} Un propietario de una organización puede restringir la capacidad de invitar a colaboradores. Para obtener más información, consulte "[Configurar permisos para agregar colaboradores externos](/organizations/managing-organization-settings/setting-permissions-for-adding-outside-collaborators)".
{% endif %}

{% ifversion ghes %} Antes de agregar a un usuario como colaborador externo en un repositorio, esta persona debe tener una cuenta personal en {% data variables.product.product_location %}. Si tu empresa utiliza un sistema de autenticación externo tal como SAML o LDAP, la persona que quieras agregar deberá iniciar sesión a través de dicho sistema para crear una cuenta. Si la persona no tiene acceso al sistema de autenticación y la autenticación integrada está habilitada en tu empresa, un administrador de sitio puede crear una cuenta para dicha persona. Para obtener más información, consulta "[Configuración de la autenticación integrada](/admin/identity-and-access-management/using-built-in-authentication/configuring-built-in-authentication)".
{% endif %}

{% ifversion not ghae %} Si la organización requiere autenticación en dos fases, todos los colaboradores externos deben habilitarla antes de aceptar su invitación para colaborar en un repositorio. Para más información, vea "[Exigencia de la autenticación en dos fases en la organización](/organizations/keeping-your-organization-secure/managing-two-factor-authentication-for-your-organization/requiring-two-factor-authentication-in-your-organization)".
{% endif %}

## Agregar colaboradores externos a un repositorio

{% ifversion fpt or ghec or ghes > 3.3 or ghae-issue-5974 %} Puede conceder acceso al repositorio a colaboradores externos en la configuración del repositorio. Para obtener más información, consulte "[Administración de equipos y personas con acceso al repositorio](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/managing-teams-and-people-with-access-to-your-repository#inviting-a-team-or-person)". {% else %} {% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %}
5. En la barra lateral de la izquierda, haga clic en **Collaborators & teams**.
  ![Barra lateral de configuración del repositorio con la opción Collaborators & teams resaltada](/assets/images/help/repository/org-repo-settings-collaborators-and-teams.png)
6. En "Collaborators", escriba el nombre de la persona a la que le gustaría brindar acceso al repositorio y haga clic en **Add collaborator**.
![La sección Collaborators con el nombre de usuario de Octocat en el campo de búsqueda](/assets/images/help/repository/org-repo-collaborators-find-name.png)
7. Junto al nombre del colaborador nuevo, utiliza el menú desplegable y selecciona el nivel de acceso adecuado.
![El selector de permisos del repositorio](/assets/images/help/repository/org-repo-collaborators-choose-permissions.png) {% endif %}

---
title: Establecimiento de permisos base para una organización
intro: Puedes configurar permisos base para los repositorios que pertenezcan a una organización.
permissions: Organization owners can set base permissions for an organization.
redirect_from:
- /github/setting-up-and-managing-organizations-and-teams/setting-base-permissions-for-an-organization
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
- Organizations
- Teams
shortTitle: Set base permissions
ms.openlocfilehash: 734ced023e4a1043634650ff3e4305727397095c
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: "146179931"
---
## Acerca de los permisos base para una organización

Puedes configurar permisos base que apliquen a todos los miembros de una organización cuando accedan a cualquiera de los repositorios de la misma. Los permisos base no aplican para los colaboradores externos.

{% ifversion fpt or ghec %}De forma predeterminada, los miembros de una organización tendrán permisos de **lectura** en los repositorios de la organización.{% endif %}

Si alguien con permisos administrativos en un repositorio de una organización otorga un nivel de acceso superior a un miembro para dicho repositorio, este nivel de acceso superior anulará el permiso base.

{% ifversion custom-repository-roles %} Si has creado un rol de repositorio personalizado con un rol heredado que tiene un nivel de acceso inferior a los permisos básicos de la organización, cualquier miembro asignado a ese rol tendrá de forma predeterminada los permisos básicos de la organización, en lugar de los del rol heredado. Para más información, vea "[Administración de roles de repositorio personalizados para una organización](/organizations/managing-peoples-access-to-your-organization-with-roles/managing-custom-repository-roles-for-an-organization)".
{% endif %}

## Configurar los permisos base

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.member-privileges %}
5. Debajo de "Permisos Base", utiliza el menú desplegable para seleccionar los nuevos permisos base.
  ![Selección del nuevo nivel de permiso desde el menú desplegable de permisos base](/assets/images/help/organizations/base-permissions-drop-down.png)
6. Examine los cambios. Para confirmarlo, haga clic en **Cambiar permiso predeterminado a PERMISO**.
  ![Revisión y confirmación del cambio de permisos base](/assets/images/help/organizations/base-permissions-confirm.png)

## Información adicional

- "[Roles de repositorio para una organización](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization)"
- "[Adición de colaboradores externos a los repositorios en la organización](/organizations/managing-access-to-your-organizations-repositories/adding-outside-collaborators-to-repositories-in-your-organization)"

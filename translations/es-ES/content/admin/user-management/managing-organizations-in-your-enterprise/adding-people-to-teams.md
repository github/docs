---
title: Agregar personas a los equipos
redirect_from:
  - /enterprise/admin/articles/adding-teams
  - /enterprise/admin/articles/adding-or-inviting-people-to-teams
  - /enterprise/admin/guides/user-management/adding-or-inviting-people-to-teams
  - /enterprise/admin/user-management/adding-people-to-teams
  - /admin/user-management/adding-people-to-teams
intro: 'Una vez que se ha creado un equipo, los administradores de la organización pueden agregar usuarios desde {% data variables.product.product_location %} al equipo y determinar a qué repositorios tienen acceso.'
versions:
  ghes: '*'
  ghae: '*'
type: how_to
topics:
  - Access management
  - Enterprise
  - Teams
  - User account
ms.openlocfilehash: 1246641db416630d0faed75821078618a4399eb8
ms.sourcegitcommit: 5f9527483381cfb1e41f2322f67c80554750a47d
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/11/2022
ms.locfileid: '147884257'
---
Cada equipo tiene sus propios [permisos de acceso para los repositorios que pertenecen a su organización](/articles/permission-levels-for-an-organization) definidos individualmente.

- Los miembros con el rol de propietario pueden agregar o eliminar miembros existentes de la organización de todos los equipos.
- Los miembros de equipos que dan permisos de administración solo pueden modificar los repositorios y las membresías de equipos para ese equipo.

## Configurar un equipo

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.specific_team %} {% data reusables.organizations.invite_to_team %} {% data reusables.organizations.review-team-repository-access %}

{% ifversion ghes %}

## Asignar equipos a los grupos LDAP (para instancias que usan la sincronización LDAP para la autenticación de usuario)

{% data reusables.enterprise_management_console.badge_indicator %}

Para agregar un nuevo miembro a un equipo sincronizado con un grupo LDAP, agrega el usuario como un miembro del grupo LDAP o comunícate con el administrador LDAP.

{% endif %}

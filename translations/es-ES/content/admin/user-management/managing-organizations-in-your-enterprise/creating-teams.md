---
title: Creación de equipos
intro: 'Los equipos les permiten a las organizaciones crear grupos de miembros y controlar el acceso a los repositorios. A los miembros del equipo se les pueden otorgar permisos de lectura, escritura o administración para repositorios específicos.'
redirect_from:
  - /enterprise/admin/user-management/creating-teams
  - /admin/user-management/creating-teams
versions:
  ghes: '*'
  ghae: '*'
type: how_to
topics:
  - Access management
  - Enterprise
  - Teams
  - User account
ms.openlocfilehash: 83db75485e7967941fdcd3ab651e638aa1eabb3f
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '146332340'
---
Los equipos son básicos para muchas de las características colaborativas de {% data variables.product.prodname_dotcom %}, como las @mentions de equipo para notificar a las partes correspondientes que quiere solicitar su colaboración o atención. Para más información, vea "[Roles en una organización](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization)".

Un equipo puede representar a un grupo dentro de tu empresa o incluir personas con ciertos intereses o experiencia. Por ejemplo, un equipo de expertos en accesibilidad en {% data variables.product.product_location %} podría estar formado por personas de diferentes departamentos. Los equipos pueden representar inquietudes de carácter funcional que complementan la jerarquía divisional existente de una empresa.

Las organizaciones pueden crear varios niveles de equipos anidados para reflejar la estructura de jerarquía de una empresa o grupo. Para más información, vea "[Acerca de los equipos](/enterprise/user/articles/about-teams/#nested-teams)".

## Crear un equipo

Una combinación prudente de equipos es una manera eficaz de controlar el acceso a los repositorios. Por ejemplo, si la organización solo permite que el equipo de ingeniería de versiones inserte código en la rama predeterminada de cualquier repositorio, podría otorgar únicamente a este equipo permisos de **administrador** para los repositorios de la organización y permisos de **lectura** a los demás equipos.

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.new_team %} {% data reusables.organizations.team_name %} {% data reusables.organizations.team_description %} {% data reusables.organizations.team_visibility %} {% data reusables.organizations.create-team-choose-parent %} {% data reusables.organizations.create_team %}

{% ifversion ghes %}

## Crear equipos con la sincronización LDAP activada

Las instancias que usan LDAP para la autenticación de usuarios pueden usar la sincronización LDAP para administrar los miembros de un equipo. Al establecer el **nombre distintivo** (DN) del grupo en el campo **Grupo LDAP**, se asignará un equipo a un grupo LDAP en el servidor LDAP. Si usa la sincronización LDAP para administrar los miembros de un equipo, no podrá administrar el equipo dentro de {% data variables.product.product_location %}. Cuando la sincronización LDAP está activada, el equipo asignado sincroniza sus miembros en segundo plano de manera periódica con el intervalo configurado. Para más información, vea ["Habilitación de la sincronización LDAP](/enterprise/admin/authentication/using-ldap#enabling-ldap-sync)".

Debes ser un administrador de sitio y un propietario de organización para crear un equipo con la sincronización LDAP habilitada.

{% data reusables.enterprise_user_management.ldap-sync-nested-teams %}

{% warning %}

**Notas:**
- La sincronización LDAP solo administra la lista de miembros del equipo. Debes administrar los permisos y repositorios del equipo desde dentro del {% data variables.product.prodname_ghe_server %}.
- Si se elimina un grupo LDAP asignado a un DN, o si se borra un grupo LDAP, todos los miembros se eliminan del equipo sincronizado del {% data variables.product.prodname_ghe_server %}. Para corregirlo, asigne el equipo a un nuevo DN, vuelva a agregar los miembros del equipo y [sincronice manualmente la asignación](/enterprise/admin/authentication/using-ldap#manually-syncing-ldap-accounts).
- Si se elimina a una persona de un repositorio cuando la sincronización LDAP está activada, perderá el acceso, pero sus bifurcaciones no se borrarán. Si se agrega a esa persona a un equipo con acceso al repositorio original de la organización dentro de los tres meses posteriores, en la siguiente sincronización, se reestablecerá automáticamente su acceso a las bifurcaciones.

{% endwarning %}

1. Asegúrese de que la [sincronización LDAP está habilitada](/enterprise/admin/authentication/using-ldap#enabling-ldap-sync).
{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.new_team %} {% data reusables.organizations.team_name %}
6. Busca el DN de un grupo LDAP al que asignar el equipo. Si no conoces el DN, escribe el nombre del grupo LDAP. El {% data variables.product.prodname_ghe_server %} buscará y completará automáticamente cualquier coincidencia.
![Asignación al DN del grupo de LDAP](/assets/images/enterprise/orgs-and-teams/ldap-group-mapping.png) {% data reusables.organizations.team_description %} {% data reusables.organizations.team_visibility %} {% data reusables.organizations.create-team-choose-parent %} {% data reusables.organizations.create_team %}

{% endif %}

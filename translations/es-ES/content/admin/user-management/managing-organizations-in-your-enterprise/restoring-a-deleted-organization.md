---
title: Restauración de una organización eliminada
intro: 'Puedes restaurar parcialmente una organización que se haya eliminado anteriormente en {% data variables.product.product_location %}.'
versions:
  ghes: '*'
type: how_to
topics:
  - Administrator
  - Enterprise
  - Organizations
shortTitle: Restore organization
permissions: 'Site administers can restore an organization on {% data variables.product.product_name %}.'
ms.openlocfilehash: 1963b1e55a9c8047c19bafd087162caa8d5085f2
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '147063758'
---
## Acerca de la restauración de organizaciones

Puede usar el panel de administración del sitio para restaurar una organización que se eliminó anteriormente en {% data variables.product.product_location %}, siempre y cuando los índices de Elasticsearch del registro de auditoría contengan los datos del evento `org.delete`.

Inmediatamente después de restaurar una organización, esta no será exactamente igual que antes de eliminarla. Tendrá que restaurar manualmente los repositorios que eran propiedad de esa organización. Para obtener más información, consulte "[Restauración de un repositorio eliminado](/admin/user-management/managing-repositories-in-your-enterprise/restoring-a-deleted-repository)".

También puede usar el registro de auditoría para que le ayude a volver a agregar manualmente equipos y miembros de la organización. Para obtener más información, consulte "[Restauración de miembros y equipos](#restoring-members-and-teams)".

## Restauración de una organización

{% data reusables.enterprise_site_admin_settings.access-settings %}
1. En "Search users, organizations, enterprises, teams, repositories, gists, and applications", busque la organización.

  ![Captura de pantalla del campo de búsqueda y el botón Search](/assets/images/enterprise/stafftools/search-field.png)

1. En "Deleted accounts", a la derecha de la organización que desea restaurar, seleccione el menú desplegable {% octicon "kebab-horizontal" aria-label="The edit icon" %} y haga clic en **Recreate**.

   ![Captura de pantalla del menú desplegable de una organización eliminada](/assets/images/enterprise/stafftools/recreate-organization.png)

## Restauración de miembros y equipos

Puede usar el registro de auditoría para buscar una lista de los miembros y equipos anteriores de la organización y volver a crearlos manualmente. Para obtener más información sobre el uso del registro de auditoría, consulte "[Auditoría de usuarios en toda la empresa](/admin/user-management/managing-users-in-your-enterprise/auditing-users-across-your-enterprise)".

En todas las frases de búsqueda siguientes, reemplace ORGANIZATION por el nombre de la organización y TEAM por el nombre del equipo.

### Restauración de miembros de la organización

1. Para buscar todos los usuarios que se agregaron y quitaron de la organización, busque `action:org.add_member org:ORGANIZATION` y `action:org.remove_member org:ORGANIZATION` en el registro de auditoría.
1. Agregue manualmente cada usuario, que todavía debe ser miembro, a la organización. Para obtener más información, consulte "[Agregar personas a su organización](/organizations/managing-membership-in-your-organization/adding-people-to-your-organization)".

### Restauración de equipos

1. Para buscar el nombre de cada equipo, busque `action:team.create org:ORGANIZATION` en el registro de auditoría.
1. Vuelva a crear el equipo manualmente. Para obtener más información, consulte "[Creación de un equipo](/organizations/organizing-members-into-teams/creating-a-team)".
1. Para buscar los miembros que se han agregado a cada equipo, busque `action:team.add_member team:"ORGANIZATION/TEAM"`.
1. Vuelva a agregar manualmente los miembros del equipo. Para obtener más información, consulte "[Adición de miembros de la organización a un equipo](/organizations/organizing-members-into-teams/adding-organization-members-to-a-team)".
1. Para buscar los repositorios a los que se concedió acceso al equipo, busque `action:team.add_repository team:"ORGANIZATION/TEAM"`.
1. Para buscar el nivel de acceso que se concedió al equipo para cada repositorio, busque `action:team.update_repository_permission team:"ORGANIZATION/TEAM"`.
1. Vuelva a conceder acceso al equipo manualmente. Para obtener más información, consulte "[Administración del acceso de equipo a un repositorio de la organización](/organizations/managing-access-to-your-organizations-repositories/managing-team-access-to-an-organization-repository)".

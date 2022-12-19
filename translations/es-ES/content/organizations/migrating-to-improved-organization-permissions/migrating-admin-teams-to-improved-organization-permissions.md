---
title: Migrar los equipos de administradores a permisos de organización mejorados
intro: 'Si tu organización fue creada después de septiembre de 2015, tu organización ha mejorado los permisos de la organización por defecto. Las organizaciones creadas antes de septiembre de 2015 pueden necesitar migrar a los antiguos equipos de propietarios y administradores al modelo mejorado de permisos. Los miembros de los equipos de administradores heredados conservan de forma automática la capacidad para crear repositorios hasta que esos equipos sean migrados al modelo mejorado de permisos de la organización.'
redirect_from:
  - /articles/migrating-your-previous-admin-teams-to-the-improved-organization-permissions
  - /articles/migrating-admin-teams-to-improved-organization-permissions
  - /github/setting-up-and-managing-organizations-and-teams/migrating-admin-teams-to-improved-organization-permissions
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Migrate admin team
ms.openlocfilehash: 32a3bd684d2ed81d1ba492b4e343af3e03390364
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '145126187'
---
Por defecto, todos los miembros de la organización pueden crear repositorios. Si limita los [permisos de creación de repositorios](/articles/restricting-repository-creation-in-your-organization) a los propietarios de la organización y esta se ha creado en el marco de permisos de organización heredados, los miembros de los equipos de administración heredados todavía podrán crear repositorios.

Los equipos de administración heredados son equipos que fueron creados con el nivel de permiso de administración dentro de la estructura heredada de permisos de organización. Los miembros de estos equipos pudieron crear repositorios para la organización, y hemos conservado esta capacidad en la estructura mejorada de permisos de la organización.

Puedes eliminar esta capacidad al migrar tus equipos de administradores heredados a los permisos mejorados de la organización.

Para más información, vea "[Roles de repositorio para una organización](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization)".

{% warning %}

**Advertencia:** Si en la organización han deshabilitado los [permisos de creación de repositorios](/articles/restricting-repository-creation-in-your-organization) para todos los miembros, algunos miembros de los equipos de administración heredados pueden perder los permisos de creación de repositorios. Si tu organización ha habilitado la creación de repositorio de miembro, migrar los equipos de administradores heredados a los permisos mejorados de la organización no afectará la capacidad de los miembros del equipo de crear repositorios.

{% endwarning %}

## Migrar todos tus equipos de administradores heredados de tu organización

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.teams_sidebar %}
1. Revise los equipos de administración heredados de la organización y, después, haga clic en **Migrar todos los equipos**.
  ![Botón Migrar todos los equipos](/assets/images/help/teams/migrate-all-legacy-admin-teams.png)
1. Lea la información sobre los posibles cambios en los permisos para los miembros de estos equipos y, después, haga clic en **Migrar todos los equipos.** 
  ![Botón Confirmar migración](/assets/images/help/teams/confirm-migrate-all-legacy-admin-teams.png).

## Migrar un equipo de administradores único

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.specific_team %}
1. En el cuadro de descripción del equipo, haga clic en **Migrar equipo**.
  ![Botón Migrar equipo](/assets/images/help/teams/migrate-a-legacy-admin-team.png)

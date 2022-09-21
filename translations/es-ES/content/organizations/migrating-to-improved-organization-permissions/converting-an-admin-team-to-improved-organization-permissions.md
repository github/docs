---
title: Convertir un equipo de administradores a los permisos de organización mejorados
intro: 'Si tu organización fue creada después de septiembre de 2015, tu organización ha mejorado los permisos de la organización por defecto. Las organizaciones creadas antes de septiembre de 2015 pueden necesitar migrar a los antiguos equipos de propietarios y administradores al modelo mejorado de permisos. Los miembros de los equipos de administradores heredados conservan de forma automática la capacidad para crear repositorios hasta que esos equipos sean migrados al modelo mejorado de permisos de la organización.'
redirect_from:
  - /articles/converting-your-previous-admin-team-to-the-improved-organization-permissions
  - /articles/converting-an-admin-team-to-improved-organization-permissions
  - /github/setting-up-and-managing-organizations-and-teams/converting-an-admin-team-to-improved-organization-permissions
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Convert admin team
ms.openlocfilehash: 183ccd5d1252265ed6ac94924703ceb75ed8adad
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/10/2022
ms.locfileid: '145126190'
---
Puedes eliminar la capacidad de los miembros del equipo de administración heredado para crear repositorios al crear un nuevo equipo para esos miembros, asegurándote de que el equipo tenga el acceso necesario a los repositorios de la organización, y eliminando el equipo de administración heredado.

Para más información, vea "[Roles de repositorio para una organización](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization)".

{% warning %}

**Advertencias:**
- Si hay miembros de su equipo de administración heredados que no son miembros de otros equipos, la eliminación del equipo eliminará a esos miembros de la organización. Antes de eliminar el equipo, asegúrate de que los miembros ya sean miembros directos de la organización, o que tengan acceso de colaborador a los repositorios necesarios.
- Para evitar la pérdida de bifurcaciones privadas realizadas por los miembros del equipo de administradores heredado, debes seguir los pasos 1-3 a continuación antes de eliminar el equipo de administradores heredado.
- Como "administrador" es un término para los miembros de la organización con [acceso específico a determinados repositorios](/articles/repository-permission-levels-for-an-organization) de la organización, se recomienda evitar ese término en cualquier nombre de equipo que decida.

{% endwarning %}

1. [Cree un equipo](/articles/creating-a-team).
2. [Agregue cada uno de los miembros](/articles/adding-organization-members-to-a-team) del equipo de administración heredado al equipo nuevo.
3. [Conceda al nuevo equipo acceso equivalente](/articles/managing-team-access-to-an-organization-repository) a cada uno de los repositorios a los que podría acceder el equipo heredado.
4. [Elimine el equipo de administración heredado](/articles/deleting-a-team).

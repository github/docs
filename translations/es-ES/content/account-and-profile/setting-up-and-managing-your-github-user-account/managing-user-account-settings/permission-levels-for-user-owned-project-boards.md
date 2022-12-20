---
title: Niveles de permiso para tableros de proyecto propiedad del usuario
intro: 'A project board owned by a personal account has two permission levels: the project board owner and collaborators.'
redirect_from:
- /articles/permission-levels-for-user-owned-project-boards
- /github/setting-up-and-managing-your-github-user-account/permission-levels-for-user-owned-project-boards
- /github/setting-up-and-managing-your-github-user-account/managing-user-account-settings/permission-levels-for-user-owned-project-boards
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
- Accounts
shortTitle: Permission user project boards
ms.openlocfilehash: 535ef830e9ee0d8d5a3bb81ea208711cf4060943
ms.sourcegitcommit: 67064b14c9d4d18819db8f6398358b77a1c8002a
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 05/17/2022
ms.locfileid: "145091919"
---
## <a name="permissions-overview"></a>Introducción sobre los permisos

Solamente hay un único propietario de un panel de proyecto propiedad de un usuario; este permiso no puede compartirse con otra cuenta personal. Además del propietario, otras personas pueden colaborar en tableros de proyecto.

Hay tres niveles de permisos para los colaboradores de un tablero de proyecto:

{% data reusables.project-management.project-board-permissions %}

## <a name="owner-and-admin-permissions-for-a-user-owned-project-board"></a>Permisos de propietario y de administrador para un tablero de proyecto propiedad del usuario

El propietario del tablero de proyecto y los colaboradores con acceso de administrador tienen control completo del tablero de proyecto. Además de todos los permisos admitidos por los colaboradores del tablero de proyecto, un propietario y un colaborador de un tablero de proyecto con acceso de administrador pueden:

- [Administración, visualización y adición de colaboradores](/articles/managing-access-to-your-user-account-s-project-boards)
- [Configuración de un panel de proyecto como {% ifversion ghae %}interno{% else %}público{% endif %} o privado](/articles/changing-project-board-visibility)
- [Eliminación de un panel de proyecto](/articles/deleting-a-project-board/)
- [Cierre de un panel de proyecto](/articles/closing-a-project-board/)
- [Reapertura de un panel de proyecto cerrado](/articles/reopening-a-closed-project-board)

## <a name="read-and-write-permissions-for-a-user-owned-project-board"></a>Permisos de lectura y escritura para un tablero de proyecto propiedad del usuario

Los colaboradores con acceso de lectura a un tablero de proyecto propiedad del usuario pueden:

- Ver un tablero de proyecto
- Copiar un tablero de proyecto
- Filtrar tarjetas en un tablero de proyecto

Los colaboradores con acceso de escritura a un tablero de proyecto propiedad del usuario pueden:

- Ver un tablero de proyecto
- Copiar un tablero de proyecto
- Filtrar tarjetas en un tablero de proyecto
- Editar un tablero de proyecto
- Vincular un repositorio a un tablero de proyecto
- Configurar la automatización de tableros de proyecto
- Copiar un tablero de proyecto
- Agregar propuestas y solicitudes de extracción a un tablero de proyecto
- Agregar notas a un tablero de proyecto
- Rastrear el avance de un tablero de proyecto
- Archivar tarjetas en un tablero de proyecto

## <a name="project-board-visibility"></a>Visibilidad del tablero de proyecto

Puede cambiar la visibilidad del panel del proyecto de privado a {% ifversion ghae %}interno{% else %}público{% endif %} y viceversa. Por defecto, los tableros de proyecto propiedad del usuario son privados. Para más información, vea "[Cambio de la visibilidad del panel de proyecto](/articles/changing-project-board-visibility)".

## <a name="further-reading"></a>Información adicional

  - "[Administración del acceso a los paneles de proyecto de la cuenta personal](/articles/managing-access-to-your-user-account-s-project-boards)"

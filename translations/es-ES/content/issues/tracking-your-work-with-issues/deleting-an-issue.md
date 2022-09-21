---
title: Eliminar una propuesta
intro: Los usuarios con permisos de administración en un repositorio determinado pueden eliminar una propuesta de manera permanente de ese repositorio.
redirect_from:
  - /github/managing-your-work-on-github/managing-your-work-with-issues-and-pull-requests/deleting-an-issue
  - /articles/deleting-an-issue
  - /github/managing-your-work-on-github/deleting-an-issue
  - /issues/tracking-your-work-with-issues/creating-issues/deleting-an-issue
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
ms.openlocfilehash: 140bd1fdb272dd3203b993cf5f5f7038963fafe2
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '146774576'
---
La capacidad de eliminar incidencias depende de si el repositorio es propiedad de una cuenta personal o de una organización:
- La única cuenta que puede eliminar incidencias en un repositorio propiedad de una cuenta personal es esa cuenta en cuestión.
- Solo las cuentas con permisos de administrador o propietario pueden eliminar incidencias en un repositorio propiedad de una organización.

  Para eliminar una incidencia en un repositorio propiedad de una organización, un propietario de la organización debe habilitar la eliminación de incidencias para los repositorios de la organización. Para más información, vea "[Permitir que los usuarios eliminen incidencias en las organización](/articles/allowing-people-to-delete-issues-in-your-organization)" y "[Roles de repositorio para una organización](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization)".

Los colaboradores no reciben una notificación cuando se eliminan incidencias. Al visitar la dirección URL de una incidencia eliminada, los colaboradores verán un mensaje en el que se indica que no se encuentra la página web (pero pueden usar la API para determinar que se eliminó). Los usuarios con permisos de propietario o de administración en el repositorio verán también el nombre de usuario de la persona que eliminó la propuesta y la fecha en que se la eliminó.

1. Dirígete a la propuesta que deseas eliminar.
2. En la barra lateral de la derecha, en "Notificaciones", haga clic en **Eliminar incidencia**.
![Texto "Eliminar incidencia" resaltado al final de la barra lateral derecha de la página de la incidencia](/assets/images/help/issues/delete-issue.png)
4. Para confirmar la eliminación, haga clic en **Eliminar esta incidencia**.

## Información adicional

- "[Vinculación de una solicitud de incorporación de cambios a una incidencia](/github/managing-your-work-on-github/linking-a-pull-request-to-an-issue)"

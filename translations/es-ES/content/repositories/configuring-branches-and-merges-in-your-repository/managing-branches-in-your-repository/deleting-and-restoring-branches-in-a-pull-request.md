---
title: Eliminar y restaurar ramas en una solicitud de extracción
intro: 'Si tienes acceso de escritura en un repositorio, puedes eliminar las ramas asociadas con solicitudes de extracción cerradas o fusionadas. No puedes eliminar las ramas asociadas con solicitudes de extracción abiertas.'
redirect_from:
  - /articles/tidying-up-pull-requests
  - /articles/restoring-branches-in-a-pull-request
  - /articles/deleting-unused-branches
  - /articles/deleting-and-restoring-branches-in-a-pull-request
  - /github/administering-a-repository/deleting-and-restoring-branches-in-a-pull-request
  - /github/administering-a-repository/managing-branches-in-your-repository/deleting-and-restoring-branches-in-a-pull-request
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: Delete & restore branches
ms.openlocfilehash: 48007869ae43d39553e0f8948f90e89b7fb73af0
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '145136945'
---
## Borrar la rama utilizada para una solicitud de extracción

Puedes borrar la rama que se asocia con una solicitud de extracción si la han fusionado o cerrado y no hay ninguna otra solicitud de extracción abierta que haga referencia a dicha rama. Para obtener información sobre el cierre de ramas que no están asociadas a solicitudes de incorporación de cambios, vea "[Creación y eliminación de ramas dentro del repositorio](/github/collaborating-with-issues-and-pull-requests/creating-and-deleting-branches-within-your-repository#deleting-a-branch)".

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-pr %} {% data reusables.repositories.list-closed-pull-requests %}
4. En la lista de solicitudes de extracción, haz clic en la solicitud de extracción que se asocie con la rama que deseas eliminar.
5. Junto a la parte inferior de la solicitud de incorporación de cambios, haga clic en **Eliminar rama**.
   ![Botón Eliminar rama](/assets/images/help/pull_requests/delete_branch_button.png)

   Este botón no se muestra si hay alguna solicitud de extracción abierta para esta rama actualmente.

## Restaurar una rama eliminada

Puedes restaurar la rama de encabezado de una solicitud de extracción cerrada.

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-pr %} {% data reusables.repositories.list-closed-pull-requests %}
4. En la lista de solicitudes de extracción, haz clic en la solicitud de extracción que se asocie con la rama que deseas restaurar.
5. Junto a la parte inferior de la solicitud de incorporación de cambios, haga clic en **Restaurar rama**.
   ![Botón para restaurar la rama eliminada](/assets/images/help/branches/branches-restore-deleted.png)

## Información adicional

- "[Creación y eliminación de ramas en el repositorio](/github/collaborating-with-issues-and-pull-requests/creating-and-deleting-branches-within-your-repository)"
- "[Administración de la eliminación automática de ramas](/github/administering-a-repository/managing-the-automatic-deletion-of-branches)"

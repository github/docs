---
title: Administrar la eliminación automática de ramas
intro: Puedes hacer que se eliminen automáticamente ramas centrales después de que se fusionen solicitudes de extracción en tu repositorio.
redirect_from:
  - /articles/managing-the-automatic-deletion-of-branches
  - /github/administering-a-repository/managing-the-automatic-deletion-of-branches
  - /github/administering-a-repository/configuring-pull-request-merges/managing-the-automatic-deletion-of-branches
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: Automatic branch deletion
ms.openlocfilehash: feaeb7c2178beab4dc23a310df6924c6e1c52e0f
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/11/2022
ms.locfileid: '147882461'
---
Cualquier persona con permisos de administrador a un repositorio puede habilitar e inhabilitar la eliminación automática de ramas.

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %}
3. En {% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-6069 %}"Pull Requests" (Solicitudes de incorporación de cambios){% else %}"Merge button" (Botón Combinar){% endif %}, seleccione o anule la selección de **Automatically delete head branches** (Eliminar automáticamente las ramas principales).
  ![Casilla para habilitar o deshabilitar la eliminación automática de ramas](/assets/images/help/repository/automatically-delete-branches.png)

## Información adicional
- "[Combinación de una solicitud de incorporación de cambios](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/merging-a-pull-request)"
- "[Creación y eliminación de ramas en el repositorio](/articles/creating-and-deleting-branches-within-your-repository)"

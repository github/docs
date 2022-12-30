---
title: Permitir cambios para una rama de solicitud de extracción creada desde una bifurcación
intro: 'Para tener una mejor colaboración, puedes permitir confirmaciones en ramas que hayas creado a partir de bifurcaciones que pertenezcan a tu cuenta personal.'
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/working-with-forks/allowing-changes-to-a-pull-request-branch-created-from-a-fork
  - /articles/allowing-changes-to-a-pull-request-branch-created-from-a-fork
  - /github/collaborating-with-issues-and-pull-requests/allowing-changes-to-a-pull-request-branch-created-from-a-fork
  - /github/collaborating-with-pull-requests/working-with-forks/allowing-changes-to-a-pull-request-branch-created-from-a-fork
permissions: People with push access to the upstream repository of a fork owned by a personal account can commit to the forked branches.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
shortTitle: Allow changes to a branch
ms.openlocfilehash: 26255f5aeab3bcaa5ecc1aa6cf865981990c456a
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/10/2022
ms.locfileid: '145139178'
---
Solo los autores de las solicitudes de extracción pueden otorgar permisos a los mantenedores del repositorio ascendente, o a aquellos con acceso de escritura en dicho repositorio, para realizar confirmaciones de cambios en sus solicitudes de extracción para comparar ramas en una bifurcación propiedad de un usuario. Para más información sobre los repositorios ascendentes, vea "[Acerca de las bifurcaciones](/pull-requests/collaborating-with-pull-requests/working-with-forks/about-forks)".

Los autores de las solicitudes de extracción pueden otorgar estos permisos antes o después de crear dicha solicitud inicial. desde una bifurcación propiedad de un usuario. Para más información, vea "[Creación de una solicitud de incorporación de cambios a partir de una bifurcación](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request-from-a-fork)".

Puedes establecer permisos de confirmación al crear por primera vez una solicitud de extracción desde una bifurcación. Para más información, vea "[Creación de una solicitud de incorporación de cambios a partir de una bifurcación](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request-from-a-fork)". Además, puedes modificar una solicitud de extracción existente para permitir que los mantenedores de un repositorio realicen confirmaciones a tu rama.

## Habilitar permisos del mantenedor del repositorio en solicitudes de extracción existentes

1. En {% data variables.product.product_name %}, desplázate hasta la página principal del repositorio ascendente de tu solicitud de extracción.
2. En el nombre del repositorio ascendente, haga clic en {% octicon "git-pull-request" aria-label="The pull request icon" %} **Solicitudes de incorporación de cambios**.
![Selección de la pestaña de incidencias y solicitudes de incorporación de cambios](/assets/images/help/repository/repo-tabs-pull-requests.png)
3. En la lista de solicitudes de extracción, desplázate hasta la solicitud de extracción en la que deseas realizar las confirmaciones.
{% data reusables.repositories.allow-maintainers-user-forks %}

  ![allow-maintainers-to-make-edits-sidebar-checkbox](/assets/images/help/pull_requests/allow-maintainers-to-make-edits-sidebar-checkbox.png)

## Información adicional

- "[Confirmación de cambios en una rama de solicitud de incorporación de cambios creada a partir de una bifurcación](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/committing-changes-to-a-pull-request-branch-created-from-a-fork)"

---
title: Administrar la fusión automática para las solicitudes de cambios en tu repositorio
intro: Puedes permitir o dejar de permitir la fusión automática de solicitudes de cambio en tu repositorio.
product: '{% data reusables.gated-features.auto-merge %}'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
permissions: People with maintainer permissions can manage auto-merge for pull requests in a repository.
topics:
  - Repositories
redirect_from:
  - /github/administering-a-repository/managing-auto-merge-for-pull-requests-in-your-repository
  - /github/administering-a-repository/configuring-pull-request-merges/managing-auto-merge-for-pull-requests-in-your-repository
shortTitle: Manage auto merge
ms.openlocfilehash: 4d0f0d465ea3c8551dc909d56620a06ee9864c1c
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/11/2022
ms.locfileid: '147883445'
---
## Acerca de la fusión automática

Si permites la fusión automática para las solicitudes de cambio en tu repositorio, las personas con permisos de escritura pueden configurar las solicitudes de extracción individuales en el repositorio para que se fusionen automáticamente cuando se cumplan todos los requisitos de fusión. Si alguien que no tiene permisos de escritura inserta cambios en una solicitud de incorporación de cambios que tiene la combinación automática habilitada, esta se deshabilitará para dicha solicitud de incorporación de cambios. Para más información, vea "[Combinación automática de una solicitud de incorporación de cambios](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/automatically-merging-a-pull-request)".

## Administrar la fusión automática

{% data reusables.pull_requests.auto-merge-requires-branch-protection %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %}
1. En {% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-6069 %}"Pull Requests"{% else %}el "Botón Merge"{% endif %}, seleccione **Allow auto-merge** o anule su selección.
  ![Casilla de verificación para permitir o no permitir la combinación automática](/assets/images/help/pull_requests/allow-auto-merge-checkbox.png)

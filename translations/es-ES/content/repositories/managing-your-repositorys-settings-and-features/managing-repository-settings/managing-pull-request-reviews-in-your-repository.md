---
title: Administración de revisiones de solicitudes de incorporación de cambios en el repositorio
intro: Puedes limitar qué usuarios pueden aprobar o solicitar cambios en las solicitudes de incorporación de cambios en el repositorio público.
versions:
  feature: pull-request-approval-limit
permissions: Repository administrators can limit which users can approve or request changes to a pull request in a public repository.
topics:
  - Repositories
  - Pull requests
shortTitle: Manage pull request reviews
ms.openlocfilehash: 81c58a856e7dddc316a41413d4c7787bf463cf7c
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/11/2022
ms.locfileid: '145136710'
---
## Acerca de los límites de revisión de código

Predeterminadamente, en los repositorios públicos, cualquier usuario puede emitir revisiones que aprueben o soliciten cambios a una solicitud de cambios.

Puede limitar qué usuarios pueden enviar revisiones que aprueben o soliciten cambios en las solicitudes de incorporación de cambios en el repositorio público. Al habilitar los límites de revisión de código, cualquier usuario puede comentar las solicitudes de incorporación de cambios en el repositorio público, pero solo los que tenga acceso de lectura o superior pueden aprobar solicitudes de incorporación de cambios o cambios de solicitud.

También puede habilitar los límites de revisión de código para una organización. Si habilita los límites de una organización, invalidará los límites de repositorios individuales que pertenecen a la organización. Para más información, vea "[Administración de revisiones de solicitudes de incorporación de cambios en la organización](/organizations/managing-organization-settings/managing-pull-request-reviews-in-your-organization)".

## Habilitar los límites de revisión de código

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %}
1. En **Acceso**, haga clic en **Opciones de moderación**.
![Configuración de opciones de moderación en el repositorio](/assets/images/help/repository/access-settings-repositories.png)
1. En **Opciones de moderación**, haga clic en **Límites de revisión de código**.
![Límites de revisión de código en el repositorio](/assets/images/help/repository/code-review-limits-repositories.png)
1. Seleccione o anule la selección de **Limitar a los usuarios con acceso de lectura o superior concedido de forma explícita**.
![Limitación de la revisión en el repositorio](/assets/images/help/repository/limit-reviews-in-repository.png)

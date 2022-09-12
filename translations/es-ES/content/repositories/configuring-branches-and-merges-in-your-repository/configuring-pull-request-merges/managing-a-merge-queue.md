---
title: Administración de una cola de fusión mediante combinación
intro: Puedes aumentar la velocidad de desarrollo con una cola de fusión mediante combinación para las solicitudes de incorporación de cambios en el repositorio.
versions:
  fpt: '*'
  ghec: '*'
permissions: People with admin permissions can manage merge queues for pull requests targeting selected branches of a repository.
topics:
  - Repositories
  - Pull requests
shortTitle: Managing merge queue
redirect_from:
  - /repositories/configuring-branches-and-merges-in-your-repository/configuring-pull-request-merges/using-a-merge-queue
ms.openlocfilehash: 2cdbbdc72dde5c9970d49f7060e5cb583b6dd1dd
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '147496496'
---
{% data reusables.pull_requests.merge-queue-beta %}

## Acerca de las colas de fusión mediante combinación

{% data reusables.pull_requests.merge-queue-overview %}

La cola de fusión mediante combinación crea ramas temporales con un prefijo especial para validar los cambios de la solicitud de incorporación de cambios. Los cambios en la solicitud de incorporación de cambios se agrupan en un `merge_group` con la versión más reciente de `base_branch`, así como los cambios anteriores en la cola. {% data variables.product.product_name %} combinará todos estos cambios en `base_branch` una vez que se superen las comprobaciones necesarias para las protecciones de rama de `base_branch`.


Para obtener información sobre los métodos de combinación, vea "[Acerca de las combinaciones de solicitudes de incorporación de cambios](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/about-pull-request-merges)".

{% note %}

**Nota:**

* No se puede habilitar una cola de fusión mediante combinación con reglas de protección de rama en las que se usan caracteres comodín (`*`) en el patrón de nombre de rama.

{% endnote %}

{% data reusables.pull_requests.merge-queue-reject %}

### Desencadenamiento de comprobaciones del grupo de fusión mediante combinación con {% data variables.product.prodname_actions %}

Puedes usar el evento `merge_group` para desencadenar tu flujo de trabajo de {% data variables.product.prodname_actions %} cuando se agrega una solicitud de incorporación de cambios a una cola de fusión. Ten en cuenta que se trata de un evento diferente a los eventos `pull_request` y `push`.

Un flujo de trabajo que informa de una comprobación requerida por las protecciones de la rama de destino tendría este aspecto:

```yaml
on:
  pull_request:
  merge_group:
```

Para más información, consulta "[Eventos que desencadenan flujos de trabajo](/actions/using-workflows/events-that-trigger-workflows#merge-group)".

### Desencadenamiento de comprobaciones del grupo de fusión mediante combinación con otros proveedores de CI

Con otros proveedores de CI, es posible que tengas que actualizar tu configuración de CI para que se ejecute cuando se crea una rama que comience con el prefijo especial `gh-readonly-queue/{base_branch}`.

## Administración de una cola de fusión mediante combinación

Los administradores del repositorio pueden exigir una combinación si habilitan el valor de protección de rama "Require merge queue" en las reglas de protección de la rama base.

Para obtener información sobre cómo habilitar la configuración de protección de colas de fusión mediante combinación, vea "[Administración de una regla de protección de rama](/repositories/configuring-branches-and-merges-in-your-repository/defining-the-mergeability-of-pull-requests/managing-a-branch-protection-rule#creating-a-branch-protection-rule)".

## Información adicional

* "[Combinación de una solicitud de incorporación de cambios con una cola de fusión mediante combinación](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/merging-a-pull-request-with-a-merge-queue)"
* "[Acerca de las ramas protegidas](/repositories/configuring-branches-and-merges-in-your-repository/defining-the-mergeability-of-pull-requests/about-protected-branches)"

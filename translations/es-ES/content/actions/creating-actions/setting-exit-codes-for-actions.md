---
title: Establecimiento de códigos de salida para acciones
shortTitle: Set exit codes
intro: 'Puedes usar códigos de salida para establecer el estado de una acción. {% data variables.product.prodname_dotcom %} muestra los estados para indicar las acciones que se pasan o fallan.'
redirect_from:
  - /actions/building-actions/setting-exit-codes-for-actions
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: how_to
ms.openlocfilehash: 394b17dc03c4998797df222fe7c81c3269003ec9
ms.sourcegitcommit: d3929a033c42c99b153910685256d079d7d87467
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 10/27/2022
ms.locfileid: '148114281'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Acerca de los códigos de salida

{% data variables.product.prodname_dotcom %} usa el código de salida para establecer el estado de la ejecución de comprobación de la acción, que puede ser `success` o `failure`.

Estado de salida | Estado de ejecución de verificación | Descripción
------------|------------------|------------
`0` | `success` | La acción se completó correctamente y pueden comenzar otras tareas que dependen de ella.
Valor diferente a zero (cualquier número entero que no sea 0)| `failure` | Cualquier otro código de salida indica que la acción fracasó. Cuando una acción falla, todas las acciones simultáneas se cancelan y las acciones futuras se omiten. La ejecución de comprobación y el conjunto de comprobaciones obtienen un estado `failure`.

## Establecer un código de salida fallida en una acción JavaScript

Si va a crear una acción de JavaScript, puede usar el paquete [`@actions/core`](https://github.com/actions/toolkit/tree/main/packages/core) del kit de herramientas de acciones para registrar un mensaje y establecer un código de salida de error. Por ejemplo:

```javascript
try {
  // something
} catch (error) {
  core.setFailed(error.message);
}
```

Para obtener más información, vea "[Creación de una acción de JavaScript](/articles/creating-a-javascript-action)".

## Establecer un código de salida fallida en una acción de contenedor Docker

Si va a crear una acción de contenedor de Docker, puede establecer un código de salida de error en el script `entrypoint.sh`. Por ejemplo:

```
if <condition> ; then
  echo "Game over!"
  exit 1
fi
```

Para obtener más información, vea "[Creación de una acción de contenedor de Docker](/articles/creating-a-docker-container-action)".

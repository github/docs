---
ms.openlocfilehash: 03c7480afe114a1f9fa676f6872be9081289295a
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/10/2022
ms.locfileid: "146688944"
---
Algunos eventos tienen tipos de actividad que te proporcionan más control sobre cuándo debería ejecutarse tu flujo de trabajo. Use `on.<event_name>.types` para definir el tipo de actividad de evento que desencadenará una ejecución de flujo de trabajo.

Por ejemplo, el evento `issue_comment` tiene los tipos de actividad `created`, `edited` y `deleted`. Si el flujo de trabajo desencadena el evento `label`, se ejecutará cada vez que se cree, edite o elimine una etiqueta. Si especifica el tipo de actividad `created` para el evento `label`, el flujo de trabajo se ejecutará cuando se cree una etiqueta pero no cuando se edite o elimine.

```yaml
on:
  label:
    types:
      - created
```

Si especificas tipos de actividad múltiples, solo uno de ellos necesitará ocurrir para que se active tu flujo de trabajo. Si ocurren tipos de actividad de eventos activadores múltiples al mismo tiempo para tu flujo de trabajo, se activarán ejecuciones de flujo de trabajo múltiples. Por ejemplo, el siguiente flujo de trabajo se activa cuando se abre o etiqueta una propuesta. Si se abre una propuesta con dos etiquetas, iniciarán tres ejecuciones de flujo de trabajo: una para el evento de la propuesta abierta y dos para los eventos etiquetados de las dos propuestas.

```yaml
on:
  issues:
    types:
      - opened
      - labeled
```

Para más información sobre cada evento y sus tipos de actividad, vea "[Eventos que desencadenan flujos de trabajo](/actions/using-workflows/events-that-trigger-workflows)".

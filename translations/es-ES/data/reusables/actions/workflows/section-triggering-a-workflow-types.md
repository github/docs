---
ms.openlocfilehash: 67b4dd3749936efb6a7eef53fc38543c3c8a6451
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/10/2022
ms.locfileid: "147879350"
---
Usa `on.<event_name>.types` para definir el tipo de actividad que desencadenará una ejecución de flujo de trabajo. La mayoría de los eventos GitHub son activados por más de un tipo de actividad.  Por ejemplo, `label` se desencadena cuando una etiqueta es `created`, `edited` o `deleted`. La palabra clave `types` te permite reducir la actividad que hace que se ejecute el flujo de trabajo. Cuando solo un tipo de actividad desencadena un evento de webhook, la palabra clave `types` no es necesaria.

Puedes usar una matriz de eventos `types`. Para obtener más información sobre cada evento y sus tipos de actividad, consulta "[Eventos que desencadenan flujos de trabajo](/actions/using-workflows/events-that-trigger-workflows#available-events)".

```yaml
on:
  label:
    types: [created, edited]
```

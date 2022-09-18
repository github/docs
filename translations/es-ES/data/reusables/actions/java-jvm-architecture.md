---
ms.openlocfilehash: f51b958c86c6ede52591986f9d208864612047db
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: "145069591"
---
### Especificar la versión y la arquitectura de JVM

El flujo de trabajo de inicio configura `PATH` para que contenga OpenJDK 8 para la plataforma x64. Si quieres usar una versión diferente de Java o tener como destino una arquitectura diferente (`x64` o `x86`), puedes usar la acción `setup-java` para elegir un entorno de ejecución de Java diferente.

Por ejemplo, para usar la versión 11 del JDK proporcionado por Adoptium para la plataforma x64, puedes usar la acción `setup-java` y configurar los parámetros `java-version`, `distribution` y `architecture` en `'11'``'adopt'` y `x64`.

```yaml{:copy}
steps:
  - uses: {% data reusables.actions.action-checkout %}
  - name: Set up JDK 11 for x64
    uses: {% data reusables.actions.action-setup-java %}
    with:
      java-version: '11'
      distribution: 'adopt'
      architecture: x64
```

Para obtener más información, consulta la acción [`setup-java`](https://github.com/actions/setup-java).

---
ms.openlocfilehash: a35ad50ac71e34c7aecdc8f58720f962375acabd
ms.sourcegitcommit: 5f9527483381cfb1e41f2322f67c80554750a47d
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/11/2022
ms.locfileid: "145069397"
---

Cuando utilice el evento `workflow_run`, puede especificar qué ramas debe ejecutar el flujo de trabajo activador para que se active tu flujo.

Los filtros `branches` y `branches-ignore` aceptan patrones globales que usan caracteres como `*`, `**`, `+`, `?` y `!`, entre otros, para que coincidan con más de un nombre de rama. Si un nombre contiene cualquiera de estos caracteres y quiere una coincidencia literal, necesita *escapar* a cada uno de estos caracteres especiales con `\`. Para obtener más información sobre los patrones globales, consulte la "[Hoja de referencia rápida de patrones de filtro](/actions/using-workflows/workflow-syntax-for-github-actions#filter-pattern-cheat-sheet)".

Por ejemplo, un flujo de trabajo con el siguiente activador solo se ejecutará cuando el flujo de trabajo `Build` se ejecute en una rama cuyo nombre empiece por `releases/`:

```yaml
on:
  workflow_run:
    workflows: ["Build"]
    types: [requested]
    branches:
      - 'releases/**'
```

Un flujo de trabajo con el siguiente activador solo se ejecutará cuando el flujo de trabajo `Build` se ejecute en una rama cuyo nombre empiece por `canary`:

```yaml
on:
  workflow_run:
    workflows: ["Build"]
    types: [requested]
    branches-ignore:
      - "canary"
```

No puede usar los filtros `branches` y `branches-ignore` para el mismo evento de un flujo de trabajo. Si quiere tanto incluir como excluir patrones de rama para un solo evento, utilice el filtro `branches` junto con el carácter `!` para indicar qué ramas deberían excluirse.

El orden en que defines los patrones importa.

- El tener una coincidencia de patrón negativo (con prefijo `!`) después de una coincidencia positiva hará que se excluya la rama.
- El tener un patrón de coincidencia positivo después de una coincidencia negativa hará que se incluya la rama nuevamente.

Por ejemplo, un flujo de trabajo con el siguiente activador se ejecutará cuando el flujo de trabajo `Build` se ejecute en una cuyo nombre sea `releases/10` o `releases/beta/mona`, pero no `releases/10-alpha`, `releases/beta/3-alpha` ni `main`.

```yaml
on:
  workflow_run:
    workflows: ["Build"]
    types: [requested]
    branches:
      - 'releases/**'
      - '!releases/**-alpha'
```

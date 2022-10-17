---
ms.openlocfilehash: 9a29d1039a0929c7366eeb4624e1fb6fb8a2e4f9
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: "147529340"
---
Puedes especificar varias variables para crear una matriz multidimensional. Se ejecutará un trabajo para cada combinación posible de las variables.

Por ejemplo, el flujo de trabajo siguiente especifica dos variables:

- Dos sistemas operativos especificados en la variable `os`
- Tres versiones de Node.js especificadas en la variable `version`

El flujo de trabajo ejecutará seis trabajos, uno para cada combinación de las variables `os` y `version`. Cada trabajo establecerá el valor `runs-on` en el valor `os` actual y pasará el valor `version` actual a la acción `actions/setup-node`.

```yaml
jobs:
  example_matrix:
    strategy:
      matrix:
        os: [ubuntu-22.04, ubuntu-20.04]
        version: [10, 12, 14]
    runs-on: {% raw %}${{ matrix.os }}{% endraw %}
    steps:
      - uses: {% data reusables.actions.action-setup-node %}
        with:
          node-version: {% raw %}${{ matrix.version }}{% endraw %}
```

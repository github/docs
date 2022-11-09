---
ms.openlocfilehash: 00fcbabef5e440a27a495ab562cf7ccc43a7e030
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/11/2022
ms.locfileid: "145114177"
---
Puedes especificar una variable para crear una matriz de una sola dimensión.

Por ejemplo, el flujo de trabajo siguiente define la variable `version` con los valores `[10, 12, 14]`. El flujo de trabajo ejecutará tres trabajos, uno para cada valor de la variable. Cada trabajo tendrá acceso al valor `version` mediante el contexto `matrix.version` y pasará el valor como `node-version` a la acción `actions/setup-node`.

```yaml
jobs:
  example_matrix:
    strategy:
      matrix:
        version: [10, 12, 14]
    steps:
      - uses: {% data reusables.actions.action-setup-node %}
        with:
          node-version: {% raw %}${{ matrix.version }}{% endraw %}
```

---
ms.openlocfilehash: 00fcbabef5e440a27a495ab562cf7ccc43a7e030
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/11/2022
ms.locfileid: "145094342"
---
Você pode especificar uma única variável para criar uma matriz unidimensional.

Por exemplo, o fluxo de trabalho a seguir define a variável `version` com os valores `[10, 12, 14]`. O fluxo de trabalho executará três trabalhos, um para cada valor na variável. Cada trabalho acessará o valor `version` por meio do contexto `matrix.version` e passará o valor como `node-version` à ação `actions/setup-node`.

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

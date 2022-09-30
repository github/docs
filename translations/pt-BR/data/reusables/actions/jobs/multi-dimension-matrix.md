---
ms.openlocfilehash: 9a29d1039a0929c7366eeb4624e1fb6fb8a2e4f9
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: "147529333"
---
Você pode especificar diversas variáveis para criar uma matriz multidimensional. Um trabalho será executado para cada combinação possível das variáveis.

Por exemplo, o fluxo de trabalho a seguir especifica duas variáveis:

- Dois sistemas operacionais especificados na variável `os`
- Três versões do Node.js especificadas na variável `version`

O fluxo de trabalho executará seis trabalhos, um para cada combinação entre as variáveis `os` e `version`. Cada trabalho definirá o valor `runs-on` como o valor atual `os` e passará o valor atual `version` para a ação `actions/setup-node`.

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

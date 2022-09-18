---
ms.openlocfilehash: c999fec9a5ab78a42f78c5d7312f54a62b81cbef
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/11/2022
ms.locfileid: "147883088"
---
Por ejemplo, el siguiente flujo de trabajo ejecutará seis trabajos, uno para cada combinación de `os` y `node`. Cuando se ejecute el trabajo para el valor de `os` de `windows-latest` y el valor de `node` de `16`, se incluirá en el trabajo una variable adicional denominada `npm` con el valor de `6`.

```yaml
jobs:
  example_matrix:
    strategy:
      matrix:
        os: [windows-latest, ubuntu-latest]
        node: [12, 14, 16]
        include:
          - os: windows-latest
            node: 16
            npm: 6
    runs-on: {% raw %}${{ matrix.os }}{% endraw %}
    steps:
      - uses: {% data reusables.actions.action-setup-node %}
        with:
          node-version: {% raw %}${{ matrix.node }}{% endraw %}
      - if: {% raw %}${{ matrix.npm }}{% endraw %}
        run: npm install -g npm@{% raw %}${{ matrix.npm }}{% endraw %}
      - run: npm --version
```

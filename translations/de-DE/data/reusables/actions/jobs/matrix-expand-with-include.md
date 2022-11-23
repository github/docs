---
ms.openlocfilehash: c999fec9a5ab78a42f78c5d7312f54a62b81cbef
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/11/2022
ms.locfileid: "147883084"
---
Beispielsweise führt der folgende Workflow sechs Aufträge aus, einen für jede Kombination von `os` und `node`. Wenn der Auftrag für den `os`-Wert von `windows-latest` und den `node`-Wert von `16` ausgeführt wird, wird eine zusätzliche Variable namens `npm` mit dem Wert `6` in den Auftrag einbezogen.

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

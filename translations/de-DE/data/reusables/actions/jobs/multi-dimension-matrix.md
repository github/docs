---
ms.openlocfilehash: 9a29d1039a0929c7366eeb4624e1fb6fb8a2e4f9
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: "147529336"
---
Du kannst mehrere Variablen angeben, um eine mehrdimensionale Matrix zu erstellen. Für jede mögliche Kombination der Variablen wird ein Auftrag ausgeführt.

Der folgende Workflow gibt beispielsweise zwei Variablen an:

- Zwei Betriebssysteme, die in der Variable `os` angegeben sind
- Drei Node.js-Versionen, die in der Variable `version` angegeben sind

Der Workflow führt sechs Aufträge aus, einen für jede Kombination der Variablen `os` und `version`. Jeder Auftrag legt den Wert `runs-on` auf den aktuellen Wert `os` fest und übergibt den aktuellen Wert `version` an die Aktion `actions/setup-node`.

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

---
ms.openlocfilehash: 00fcbabef5e440a27a495ab562cf7ccc43a7e030
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/11/2022
ms.locfileid: "145103683"
---
Du kannst eine einzelne Variable angeben, um eine Matrix mit einer einzelnen Dimension zu erstellen.

Der folgende Workflow definiert beispielsweise die Variable `version` mit den Werten `[10, 12, 14]`. Dieser Workflow führt drei Aufträge aus, einen für jeden Wert in der Variablen. Jeder Auftrag greift über den `matrix.version`-Kontext auf den `version`-Wert zu und übergibt den Wert als `node-version` an die `actions/setup-node`-Aktion.

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

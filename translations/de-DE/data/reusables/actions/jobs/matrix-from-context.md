---
ms.openlocfilehash: 9a9d2b4deb488e7b8fa5f0df2377e7d5ca57d194
ms.sourcegitcommit: 5f9527483381cfb1e41f2322f67c80554750a47d
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/11/2022
ms.locfileid: "147884437"
---
Du kannst Kontexte verwenden, um Matrizen zu erstellen. Weitere Informationen zu Kontexten findest du unter [Kontexte](/actions/learn-github-actions/contexts).

Beispielsweise wird der folgende Workflow für das `repository_dispatch`-Ereignis ausgelöst und verwendet Informationen aus der Ereignisnutzlast, um die Matrix zu erstellen. Wenn ein Repositorydispatchereignis mit einer Nutzlast wie der folgenden erstellt wird, hat die Matrixvariable `version` einen Wert von `[12, 14, 16]`. Weitere Informationen zum `repository_dispatch`-Trigger findest du unter [Ereignisse, die Workflows auslösen](/actions/using-workflows/events-that-trigger-workflows#repository_dispatch).

```json
{
  "event_type": "test",
  "client_payload": {
    "versions": [12, 14, 16]
  }
}
```

```yaml
on:
  repository_dispatch:
    types:
      - test
 
jobs:
  example_matrix:
    runs-on: ubuntu-latest
    strategy:
      matrix:
        version: {% raw %}${{ github.event.client_payload.versions }}{% endraw %}
    steps:
      - uses: {% data reusables.actions.action-setup-node %}
        with:
          node-version: {% raw %}${{ matrix.version }}{% endraw %}
```

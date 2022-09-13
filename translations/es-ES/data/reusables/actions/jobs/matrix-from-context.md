---
ms.openlocfilehash: 9a9d2b4deb488e7b8fa5f0df2377e7d5ca57d194
ms.sourcegitcommit: 5f9527483381cfb1e41f2322f67c80554750a47d
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/11/2022
ms.locfileid: "147884441"
---
Puedes usar contextos para crear matrices. Para obtener más información sobre los contextos, vea "[Contextos](/actions/learn-github-actions/contexts)".

Por ejemplo, el flujo de trabajo siguiente desencadena el evento `repository_dispatch` y usa información de la carga del evento para compilar la matriz. Cuando se crea un evento de distribución de repositorio con una carga como la siguiente, la variable de matriz `version` tendrá un valor de `[12, 14, 16]`. Para obtener más información sobre el evento `repository_dispatch`, consulta «[Eventos que desencadenan flujos de trabajo](/actions/using-workflows/events-that-trigger-workflows#repository_dispatch)».

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

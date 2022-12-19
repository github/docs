---
ms.openlocfilehash: 9a9d2b4deb488e7b8fa5f0df2377e7d5ca57d194
ms.sourcegitcommit: 5f9527483381cfb1e41f2322f67c80554750a47d
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/11/2022
ms.locfileid: "147884434"
---
Você pode usar contextos para criar matrizes. Para obter mais informações sobre contextos, confira "[Contextos](/actions/learn-github-actions/contexts)".

Por exemplo, o fluxo de trabalho a seguir dispara no evento `repository_dispatch` e usa informações do conteúdo do evento para criar a matriz. Quando um evento de expedição de repositório é criado com um conteúdo como o abaixo, a variável da matriz `version` terá um valor de `[12, 14, 16]`. Para obter mais informações sobre o gatilho `repository_dispatch`, confira "[Eventos que disparam fluxos de trabalho](/actions/using-workflows/events-that-trigger-workflows#repository_dispatch)".

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

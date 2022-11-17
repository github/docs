---
ms.openlocfilehash: 9a9d2b4deb488e7b8fa5f0df2377e7d5ca57d194
ms.sourcegitcommit: 5f9527483381cfb1e41f2322f67c80554750a47d
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/11/2022
ms.locfileid: "147884436"
---
Vous pouvez utiliser des contextes pour créer des matrices. Pour plus d’informations sur les contextes, consultez « [Contextes](/actions/learn-github-actions/contexts) ».

Par exemple, le workflow suivant se déclenche sur l’événement `repository_dispatch` et utilise les informations de la charge utile de l’événement pour générer la matrice. Lorsqu’un événement de répartition de référentiel est créé avec une charge utile comme celle ci-dessous, la variable de matrice `version` a la valeur `[12, 14, 16]`. Pour plus d’informations sur le déclencheur `repository_dispatch`, consultez « [Événements qui déclenchent des workflows](/actions/using-workflows/events-that-trigger-workflows#repository_dispatch) ».

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

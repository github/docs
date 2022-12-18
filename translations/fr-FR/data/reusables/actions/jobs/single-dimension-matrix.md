---
ms.openlocfilehash: 00fcbabef5e440a27a495ab562cf7ccc43a7e030
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/11/2022
ms.locfileid: "145103682"
---
Vous pouvez spécifier une seule variable pour créer une matrice unidimensionnelle.

Par exemple, le workflow suivant définit la variable `version` avec les valeurs `[10, 12, 14]`. Le workflow exécute trois travaux, un pour chaque valeur de la variable. Chaque travail accède à la valeur `version` via le contexte `matrix.version`, et passe la valeur en tant que `node-version` à l’action `actions/setup-node`.

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

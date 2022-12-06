---
ms.openlocfilehash: 9a29d1039a0929c7366eeb4624e1fb6fb8a2e4f9
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: "147529335"
---
Vous pouvez spécifier plusieurs variables pour créer une matrice multidimensionnelle. Un travail s’exécute pour chaque combinaison possible des variables.

Par exemple, le workflow suivant spécifie deux variables :

- Deux systèmes d’exploitation spécifiés dans la variable `os`
- Trois versions de Node.js spécifiées dans la variable `version`

Le workflow exécute six travaux, un pour chaque combinaison des variables `os` et `version`. Chaque travail affecte la valeur `runs-on` à la valeur `os` actuelle, et passe la valeur `version` actuelle à l’action `actions/setup-node`.

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

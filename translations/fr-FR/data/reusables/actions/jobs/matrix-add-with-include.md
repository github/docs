---
ms.openlocfilehash: d0e9408a29307848c49c9d0889c96b054e1d1222
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: "147062161"
---
Par exemple, cette matrice exécutera 10 travaux, un pour chaque combinaison de `os` et `version` dans la matrice, plus un travail pour la valeur `os` de `windows-latest` et la valeur `version` de `17`.

```yaml
jobs:
  example_matrix:
    strategy:
      matrix:
        os: [macos-latest, windows-latest, ubuntu-latest]
        version: [12, 14, 16]
        include:
          - os: windows-latest
            version: 17
```

Si vous ne spécifiez aucune variable de matrice, toutes les configurations sous `include` sont exécutées. Par exemple, le workflow suivant exécuterait deux travaux, un pour chaque entrée `include`. Cela vous permet de tirer parti de la stratégie de matrice sans avoir une matrice entièrement remplie.

```yaml
jobs:
  includes_only:
    runs-on: ubuntu-latest
    strategy:
      matrix:
        include:
          - site: "production"
            datacenter: "site-a"
          - site: "staging"
            datacenter: "site-b"

```

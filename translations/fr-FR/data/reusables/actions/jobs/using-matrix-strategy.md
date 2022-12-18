---
ms.openlocfilehash: 02f279903abd69f50ad55aa88462c9c8e4b9a1a8
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/10/2022
ms.locfileid: "145087286"
---
Utilisez `jobs.<job_id>.strategy.matrix` pour définir une matrice de différentes configurations de travail. Dans votre matrice, définissez une ou plusieurs variables suivies d’un tableau de valeurs. Par exemple, la matrice suivante a une variable appelée `version` avec la valeur `[10, 12, 14]`, et une variable appelée `os` avec la valeur `[ubuntu-latest, windows-latest]` :

```yaml
jobs:
  example_matrix:
    strategy:
      matrix:
        version: [10, 12, 14]
        os: [ubuntu-latest, windows-latest]
```

Un travail s’exécute pour chaque combinaison possible des variables. Dans cet exemple, le workflow exécute six travaux, un pour chaque combinaison des variables `os` et `version`. 

Par défaut, {% data variables.product.product_name %} optimise le nombre de travaux exécutés en parallèle en fonction de la disponibilité des exécuteurs. L’ordre des variables dans la matrice détermine l’ordre dans lequel les travaux sont créés. La première variable que vous définissez est le premier travail créé dans votre exécution de workflow. Par exemple, la matrice ci-dessus crée les travaux dans l’ordre suivant :

- `{version: 10, os: ubuntu-latest}`
- `{version: 10, os: windows-latest}`
- `{version: 12, os: ubuntu-latest}`
- `{version: 12, os: windows-latest}`
- `{version: 14, os: ubuntu-latest}`
- `{version: 14, os: windows-latest}`

Une matrice génère au maximum 256 travaux par exécution de workflow. Cette limite s’applique aux exécuteurs hébergés sur {% data variables.product.product_name %} et à ceux qui sont autohébergés.

Les variables que vous définissez deviennent des propriétés dans le contexte `matrix`. Vous pouvez référencer la propriété dans d’autres zones de votre fichier de workflow. Dans cet exemple, vous pouvez utiliser `matrix.version` et `matrix.os` pour accéder aux valeurs actuelles de `version` et `os` utilisées par le travail. Pour plus d’informations, consultez « [Contextes](/actions/learn-github-actions/contexts) ».

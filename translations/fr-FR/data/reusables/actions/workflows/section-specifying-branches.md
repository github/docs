---
ms.openlocfilehash: a35ad50ac71e34c7aecdc8f58720f962375acabd
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/10/2022
ms.locfileid: "145066451"
---

Lorsque vous utilisez l’événement `workflow_run`, vous pouvez spécifier les branches sur lesquelles le workflow déclencheur doit s’exécuter afin de déclencher votre workflow.

Les filtres `branches` et `branches-ignore` acceptent les modèles Glob qui utilisent des caractères tels que `*`, `**`, `+`, `?`, `!` et certains autres pour correspondre à plusieurs noms de branches. Si un nom contient l’un de ces caractères et que vous souhaitez une correspondance littérale, vous devez *échapper* chacun de ces caractères spéciaux avec `\`. Pour plus d’informations sur les modèles Glob, consultez la « [Aide-mémoire de modèle de filtre](/actions/using-workflows/workflow-syntax-for-github-actions#filter-pattern-cheat-sheet) ».

Par exemple, un workflow avec le déclencheur suivant s’exécute uniquement lorsque le workflow nommé `Build` s’exécute sur une branche dont le nom commence par `releases/` :

```yaml
on:
  workflow_run:
    workflows: ["Build"]
    types: [requested]
    branches:
      - 'releases/**'
```

Un workflow avec le déclencheur suivant s’exécute uniquement lorsque le workflow nommé `Build` s’exécute sur une branche qui n’est pas nommée `canary` :

```yaml
on:
  workflow_run:
    workflows: ["Build"]
    types: [requested]
    branches-ignore:
      - "canary"
```

Vous ne pouvez pas utiliser les filtres `branches` et `branches-ignore` en même temps pour le même événement dans un workflow. Si vous souhaitez à la fois inclure et exclure des modèles de branche pour un seul événement, utilisez le filtre `branches` avec le caractère `!` pour indiquer les branches à exclure.

L’ordre dans lequel vous définissez les modèles est important.

- Un modèle négatif de correspondance (préfixé avec `!`) après une correspondance positive exclut la branche.
- Un modèle positif de correspondance après une correspondance négative inclut à nouveau la branche.

Par exemple, un workflow avec le déclencheur suivant s’exécute lorsque le workflow nommé `Build` s’exécute sur une branche nommée `releases/10` ou `releases/beta/mona`, mais pas `releases/10-alpha`, `releases/beta/3-alpha` ni `main`.

```yaml
on:
  workflow_run:
    workflows: ["Build"]
    types: [requested]
    branches:
      - 'releases/**'
      - '!releases/**-alpha'
```

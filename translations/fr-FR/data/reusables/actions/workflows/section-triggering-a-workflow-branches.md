---
ms.openlocfilehash: 476305b7c40430f20edb235a1c1ce73482464c90
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: "146064234"
---
Quand vous utilisez les événements `pull_request` et `pull_request_target` vous pouvez configurer un workflow afin qu’il s’exécute uniquement pour les demandes de tirage (pull requests) qui ciblent des branches spécifiques.

Utilisez le filtre `branches` quand vous souhaitez inclure des modèles de noms de branches, ou quand vous souhaitez à la fois inclure et exclure des modèles de noms de branches. Utilisez le filtre `branches-ignore` quand vous souhaitez exclure uniquement les modèles de nom de branche. Vous ne pouvez pas utiliser à la fois les filtres `branches` et `branches-ignore` pour le même événement dans un workflow.

Si vous définissez à la fois `branches`/`branches-ignore` et [`paths`](#onpushpull_requestpull_request_targetpathspaths-ignore), le workflow s’exécute uniquement quand les deux filtres sont satisfaits.

Les mots clés `branches` et `branches-ignore` acceptent les modèles Glob qui utilisent des caractères tels que `*`, `**`, `+`, `?`, `!` et certains autres pour correspondre à plusieurs noms de branches. Si un nom contient l’un de ces caractères et si vous souhaitez une correspondance littérale, vous devez utiliser le caractère d’échappement `\` avec chacun de ces caractères spéciaux. Pour plus d’informations sur les modèles Glob, consultez l’« [Aide-mémoire de modèle de filtre](/actions/using-workflows/workflow-syntax-for-github-actions#filter-pattern-cheat-sheet) ».

#### Exemple : Inclusion de branches

Les modèles définis dans `branches` sont évalués par rapport au nom de la référence Git. Par exemple, le workflow suivant s’exécute chaque fois qu’il existe un événement `pull_request` pour une demande de tirage qui cible :

- Une branche nommée `main` (`refs/heads/main`)
- Une branche nommée `mona/octocat` (`refs/heads/mona/octocat`)
- Une branche dont le nom commence par `releases/`, par exemple `releases/10` (`refs/heads/releases/10`)

```yaml
on:
  pull_request:
    # Sequence of patterns matched against refs/heads
    branches:    
      - main
      - 'mona/octocat'
      - 'releases/**'
```

#### Exemple : Exclusion de branches

Quand un modèle correspond au modèle `branches-ignore`, le workflow ne s’exécute pas. Les modèles définis dans `branches` sont évalués par rapport au nom de la référence Git. Par exemple, le workflow suivant s’exécute chaque fois qu’il existe un événement `pull_request`, sauf si la demande de tirage cible :

- Une branche nommée `mona/octocat` (`refs/heads/mona/octocat`)
- Une branche dont le nom correspond à `releases/**-alpha`, par exemple `releases/beta/3-alpha` (`refs/heads/releases/beta/3-alpha`)

```yaml
on:
  pull_request:
    # Sequence of patterns matched against refs/heads
    branches-ignore:    
      - 'mona/octocat'
      - 'releases/**-alpha'
```

#### Exemple : Inclusion et exclusion de branches

Vous ne pouvez pas utiliser `branches` et `branches-ignore` pour filtrer le même événement dans un seul workflow. Si vous souhaitez à la fois inclure et exclure des modèles de branche pour un seul événement, utilisez le filtre `branches` avec le caractère `!` pour indiquer les branches à exclure.

Si vous définissez une branche avec le caractère `!`, vous devez également définir au moins une branche sans le caractère `!`. Si vous souhaitez uniquement exclure des branches, utilisez `branches-ignore` à la place.

L’ordre dans lequel vous définissez les modèles est important.

- Un modèle de correspondance négative (préfixé avec `!`) après une correspondance positive exclut la référence Git.
- Un modèle de correspondance positive après une correspondance négative inclut à nouveau la référence Git.

Le workflow suivant s’exécute sur les événements `pull_request` pour les demandes de tirage qui ciblent `releases/10` ou `releases/beta/mona`, mais pas pour les demandes de tirage qui ciblent `releases/10-alpha` ou `releases/beta/3-alpha`, car le modèle négatif `!releases/**-alpha` suit le modèle positif.

```yaml
on:
  pull_request:
    branches:    
      - 'releases/**'
      - '!releases/**-alpha'
```

---
ms.openlocfilehash: 4e50754bfa8075681d503e689df630855eedbbab
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/10/2022
ms.locfileid: "145086220"
---

Lorsque vous utilisez l’événement `push`, vous pouvez configurer un workflow pour qu’il s’exécute sur des branches ou des étiquettes spécifiques.

Utilisez le filtre `branches` lorsque vous souhaitez inclure des modèles de noms de branche ou lorsque vous souhaitez inclure et exclure des modèles de noms de branche. Utilisez le filtre `branches-ignore` quand vous souhaitez exclure uniquement les modèles de nom de branche. Vous ne pouvez pas utiliser les filtres `branches` et `branches-ignore` en même temps pour le même événement dans un workflow.

Utilisez le filtre `tags` lorsque vous souhaitez inclure des modèles de nom d’étiquette ou lorsque vous souhaitez inclure et exclure des modèles de noms d’étiquette. Utilisez le filtre `tags-ignore` lorsque vous souhaitez exclure uniquement les modèles de nom d’étiquette. Vous ne pouvez pas utiliser les filtres `tags` et `tags-ignore` en même temps pour le même événement dans un workflow.

Si vous définissez uniquement `tags`/`tags-ignore` ou uniquement `branches`/`branches-ignore`, le workflow ne s’exécutera pas pour les événements affectant la référence Git non définie. Si vous ne définissez ni `tags`/`tags-ignore` ni `branches`/`branches-ignore`, le workflow s’exécutera pour les événements affectant les branches ou les étiquettes. Si vous définissez à la fois `branches`/`branches-ignore` et [`paths`](#onpushpull_requestpull_request_targetpathspaths-ignore), le workflow s’exécute uniquement lorsque les deux filtres sont satisfaits.

Les mots clés `branches`, `branches-ignore`, `tags` et `tags-ignore` acceptent des modèles Glob qui utilisent des caractères tels que `*`, `**`, `+`, `?`, `!` et d’autres pour correspondre à plus d’un nom de branche ou d’étiquette Si un nom contient l’un de ces caractères et que vous souhaitez une correspondance littérale, vous devez *échapper* chacun de ces caractères spéciaux avec `\`. Pour plus d’informations sur les modèles Glob, consultez la « [Aide-mémoire de modèle de filtre](/actions/using-workflows/workflow-syntax-for-github-actions#filter-pattern-cheat-sheet) ».

#### Exemple : Inclure des branches et des étiquettes

Les modèles définis dans `branches` et `tags` sont évalués par rapport au nom de la référence Git. Par exemple, le workflow suivant s’exécuterait chaque fois qu’il existe un événement `push` pour :

- Une branche nommée `main` (`refs/heads/main`)
- Une branche nommée `mona/octocat` (`refs/heads/mona/octocat`)
- Une branche dont le nom commence par `releases/`, par exemple `releases/10` (`refs/heads/releases/10`)
- Une étiquette nommée `v2` (`refs/tags/v2`)
- Une étiquette dont le nom commence par `v1.`, comme `v1.9.1` (`refs/tags/v1.9.1`)

```yaml
on:
  push:
    # Sequence of patterns matched against refs/heads
    branches:    
      - main
      - 'mona/octocat'
      - 'releases/**'
    # Sequence of patterns matched against refs/tags
    tags:        
      - v2
      - v1.*
```

#### Exemple : Exclusion de branches et d’étiquettes

Lorsqu’un modèle correspond au modèle `branches-ignore` ou `tags-ignore`, le workflow n’est pas exécuté. Les modèles définis dans `branches` et `tags` sont évalués par rapport au nom de la référence Git. Par exemple, le workflow suivant s’exécuterait chaque fois qu’il existe un événement `push`, sauf si l’événement `push` concerne :

- Une branche nommée `mona/octocat` (`refs/heads/mona/octocat`)
- Une branche dont le nom correspond à `releases/**-alpha`, par exemple `beta/3-alpha` (`refs/releases/beta/3-alpha`)
- Une étiquette nommée `v2` (`refs/tags/v2`)
- Une étiquette dont le nom commence par `v1.`, comme `v1.9` (`refs/tags/v1.9`)

```yaml
on:
  push:
    # Sequence of patterns matched against refs/heads
    branches-ignore:    
      - 'mona/octocat'
      - 'releases/**-alpha'
    # Sequence of patterns matched against refs/tags
    tags-ignore:        
      - v2
      - v1.*
```

#### Exemple : Inclure et exclure des branches et des étiquettes

Vous ne pouvez pas utiliser `branches` et `branches-ignore` pour filtrer le même événement dans un même workflow. De même, vous ne pouvez pas utiliser `tags` et `tags-ignore` pour filtrer le même événement dans un même workflow. Si vous souhaitez inclure et exclure des modèles de branche ou d’étiquette pour un seul événement, utilisez le filtre `branches` ou `tags` avec le caractère `!` pour indiquer quelles branches ou étiquettes doivent être exclues.

Si vous définissez une branche avec le caractère `!`, vous devez également définir au moins une branche sans caractère `!`. Si vous souhaitez uniquement exclure des branches, utilisez `branches-ignore` à la place. De même, si vous définissez une étiquette avec le caractère `!`, vous devez également définir au moins une étiquette sans caractère `!`. Si vous souhaitez uniquement exclure des étiquettes, utilisez `tags-ignore` à la place.

L’ordre dans lequel vous définissez les modèles est important.

- Un modèle de correspondance négative (préfixé avec `!`) après une correspondance positive exclut la référence Git.
- Un modèle de correspondance positive après une correspondance négative inclut à nouveau la référence Git.

Le workflow suivant s’exécute sur les envois push vers `releases/10` ou `releases/beta/mona`, mais pas sur `releases/10-alpha` ou `releases/beta/3-alpha` parce que le modèle négatif `!releases/**-alpha` fait suite au modèle positif.

```yaml
on:
  push:
    branches:
      - 'releases/**'
      - '!releases/**-alpha'
```

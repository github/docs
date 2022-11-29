---
ms.openlocfilehash: 621271104f28983cd2cc1319a302fc1654e54acb
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/10/2022
ms.locfileid: "145066449"
---

Lorsque vous utilisez les événements `push` et `pull_request` événements, vous pouvez configurer un workflow pour qu’il s’exécute en fonction des chemins d’accès aux fichiers qui ont changé. Les filtres de chemin d’accès ne sont pas évalués pour les envois (push) d’étiquettes.

Utilisez le filtre `paths` lorsque vous souhaitez inclure des modèles de chemins d’accès aux fichiers, ou lorsque vous souhaitez à la fois inclure et exclure des modèles de modèles de chemins d’accès aux fichiers. Utilisez le filtre `paths-ignore` lorsque vous souhaitez uniquement exclure modèles de chemins d’accès aux fichiers. Vous ne pouvez pas utiliser les filtres `paths` et `paths-ignore` en même temps pour le même événement dans un workflow.

Si vous définissez à la fois `branches`/`branches-ignore` et `paths`, le workflow s’exécute uniquement lorsque les deux filtres sont satisfaits.

Les mots clés `paths` et `paths-ignore` acceptent des modèles globaux qui utilisent les caractères génériques `*` et `**` pour faire correspondre plusieurs noms de chemin d’accès. Pour plus d’informations, consultez la « [Aide-mémoire de modèle de filtre](/actions/using-workflows/workflow-syntax-for-github-actions#filter-pattern-cheat-sheet) ».

#### Exemple : Inclusion de chemins d’accès

Si au moins un chemin d’accès correspond à un modèle dans le filtre `paths`, le workflow s’exécute. Par exemple, le workflow suivant s’exécuterait chaque fois que vous envoyez (push) un fichier JavaScript (`.js`).

```yaml
on:
  push:
    paths:
      - '**.js'
```

{% note %}

**Remarque :** si un workflow est ignoré en raison d’un [filtrage de chemin d’accès](/actions/using-workflows/workflow-syntax-for-github-actions#onpushpull_requestpull_request_targetpathspaths-ignore), d’un [filtrage de branche](/actions/using-workflows/workflow-syntax-for-github-actions#onpull_requestpull_request_targetbranchesbranches-ignore) ou d’un [message de validation](/actions/managing-workflow-runs/skipping-workflow-runs), les vérifications associées à ce workflow restent à l’état « En attente ». La fusion d’une demande de tirage nécessitant la réussite de ces vérifications sera bloquée. Pour plus d’informations, consultez « [Gestion ignorée mais vérifications requises](/repositories/configuring-branches-and-merges-in-your-repository/defining-the-mergeability-of-pull-requests/troubleshooting-required-status-checks#handling-skipped-but-required-checks) ».

{% endnote %}

#### Exemple : Exclusion de chemins d’accès

Lorsque tous les noms de chemin d’accès correspondent à des modèles dans `paths-ignore`, le workflow ne s’exécute pas. Si des noms de chemin d’accès ne correspondent pas à des modèles dans `paths-ignore`, même si certains noms de chemin d’accès correspondent aux modèles, le workflow s’exécute.

Un workflow avec le filtre de chemin d’accès suivant s’exécute uniquement sur des événements `push` qui incluent au moins un fichier en dehors du répertoire `docs` à la racine du dépôt.

```yaml
on:
  push:
    paths-ignore:
      - 'docs/**'
```

#### Exemple : Inclusion et exclusion de chemins d’accès

Vous ne pouvez pas utiliser `paths` et `paths-ignore` pour filtrer le même événement dans un même workflow. Si vous souhaitez inclure et exclure des modèles de chemin d’accès pour un seul événement, utilisez le filtre `paths` avec le caractère `!` pour indiquer les chemins d’accès à exclure.

Si vous définissez un chemin d’accès avec le caractère `!`, vous devez également définir au moins un chemin d’accès sans caractère `!`. Si vous souhaitez uniquement exclure des chemins d’accès, utilisez plutôt `paths-ignore`.

L’ordre dans lequel vous définissez les modèles est important :

- Un modèle négatif de correspondance (préfixé avec `!`) après une correspondance positive exclut le chemin d’accès.
- Un modèle positif de correspondance après une correspondance négative inclut à nouveau le chemin d’accès.

Cet exemple s’exécute à chaque fois que l’événement `push` inclut un fichier dans le répertoire `sub-project` ou ses sous-répertoires, sauf si le fichier se trouve dans le répertoire `sub-project/docs`. Par exemple, un envoi (push) qui change `sub-project/index.js` ou `sub-project/src/index.js` déclenche l’exécution d’un workflow, au contraire d’un envoi (push) changeant uniquement `sub-project/docs/readme.md`.

```yaml
on:
  push:
    paths:
      - 'sub-project/**'
      - '!sub-project/docs/**'
```

#### Comparaisons de différences Git

{% note %}

**Remarque :** si vous envoyez plus de 1 000 validations ou si {% data variables.product.prodname_dotcom %} ne génère pas la différence en raison d’un délai d’expiration, le workflow s’exécute toujours.

{% endnote %}

Le filtre détermine si un workflow doit s’exécuter en évaluant les fichiers modifiés et en les exécutant sur la liste `paths-ignore` ou `paths`. S’il n’y a pas de fichier modifié, le workflow ne s’exécute pas.

{% data variables.product.prodname_dotcom %} génère la liste des fichiers modifiés à l’aide de différences de deux points pour les envois (push) et de différences de trois points pour les demandes de tirage :
- **Demandes de tirage :** les différences de trois points sont une comparaison entre la version la plus récente de la branche de rubrique, et la validation dans laquelle la branche de rubrique a été synchronisée pour la dernière fois avec la branche de base.
- **Envois (push) à des branches existantes :** une différence de deux points compare directement les SHA principal et de base.
- **Envois (push) à nouvelles branches :** une différence de deux points par rapport au parent de l’élément ancêtre de la validation la plus profonde envoyées (push).

Les différences sont limitées à 300 fichiers. S’il y a des fichiers modifiés qui ne sont pas mis en correspondance dans les 300 premiers fichiers retournés par le filtre, le workflow n’est pas exécuté. Il se peut que vous deviez créer des filtres plus spécifiques afin que le workflow s’exécute automatiquement.

Pour plus d’informations, consultez « [À propos de la comparaison des branches dans les demandes de tirage](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-comparing-branches-in-pull-requests) ».

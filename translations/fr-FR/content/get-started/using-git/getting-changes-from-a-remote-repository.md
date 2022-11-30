---
title: Obtention de modifications à partir d’un dépôt distant
intro: Vous pouvez utiliser des commandes Git courantes pour accéder à des référentiels distants.
redirect_from:
  - /articles/fetching-a-remote
  - /articles/getting-changes-from-a-remote-repository
  - /github/using-git/getting-changes-from-a-remote-repository
  - /github/getting-started-with-github/getting-changes-from-a-remote-repository
  - /github/getting-started-with-github/using-git/getting-changes-from-a-remote-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Get changes from a remote
ms.openlocfilehash: 11996b33ccedea8169f472feb1804f2eed5a5d9d
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '145109490'
---
## Options d’obtention de modifications

Ces commandes sont très utiles lors de l’interaction avec [un dépôt distant](/github/getting-started-with-github/about-remote-repositories). `clone` et `fetch` téléchargent le code distant à partir de l’URL distante d’un dépôt vers votre ordinateur local, `merge` est utilisée pour fusionner le travail de différentes personnes avec le vôtre et `pull` est une combinaison de `fetch` et `merge`.

## Clonage d’un dépôt

Pour récupérer une copie complète du dépôt d’un autre utilisateur, utilisez `git clone` comme suit :

```shell
$ git clone https://{% data variables.command_line.codeblock %}/<em>USERNAME</em>/<em>REPOSITORY</em>.git
# Clones a repository to your computer
```

Vous pouvez choisir parmi [plusieurs URL différentes](/github/getting-started-with-github/about-remote-repositories) lors du clonage d’un dépôt. Lorsque vous êtes connecté à {% data variables.product.prodname_dotcom %}, ces URL sont disponibles sous les détails du dépôt :

![Liste d’URL distantes](/assets/images/help/repository/remotes-url.png)

Lorsque vous exécutez `git clone`, les actions suivantes se produisent :
- Un dossier appelé `repo` est créé
- Il est initialisé en tant que dépôt Git
- Un dépôt distant nommé `origin` est créé, pointant vers l’URL à partir de laquelle vous avez cloné
- Tous les fichiers et commits du dépôt sont téléchargés ici
- La branche par défaut est extraite

Pour chaque branche `foo` du dépôt distant, une branche de suivi à distance correspondante `refs/remotes/origin/foo` est créée dans votre dépôt local. Vous pouvez généralement abréger ces noms de branche de suivi à distance en `origin/foo`.

## Extraction de modifications à partir d’un dépôt distant

Utilisez `git fetch` pour récupérer le nouveau travail effectué par d’autres personnes. L’extraction à partir d’un dépôt récupère toutes les nouvelles branches de suivi à distance et balises *sans* fusionner ces modifications dans vos propres branches.

Si vous disposez déjà d’un dépôt local avec une URL distante configurée pour le projet souhaité, vous pouvez récupérer toutes les nouvelles informations en utilisant `git fetch *remotename*` dans le terminal :

```shell
$ git fetch <em>remotename</em>
# Fetches updates made to a remote repository
```

Sinon, vous pouvez toujours ajouter un nouveau dépôt distant, puis extraire. Pour plus d’informations, consultez « [Gestion des dépôts distants](/github/getting-started-with-github/managing-remote-repositories) ».

## Fusion des modifications dans votre branche locale

La fusion combine vos modifications locales avec les modifications apportées par d’autres utilisateurs.

En règle générale, vous fusionnez une branche de suivi à distance (c’est-à-dire une branche extraite à partir d’un dépôt distant) avec votre branche locale :

```shell
$ git merge <em>remotename</em>/<em>branchname</em>
# Merges updates made online with your local work
```

## Tirage de modifications à partir d’un dépôt distant

`git pull` est un raccourci pratique pour exécuter à la fois `git fetch` et `git merge ` dans la même commande :

```shell
$ git pull <em>remotename</em> <em>branchname</em>
# Grabs online updates and merges them with your local work
```

Étant donné que `pull` effectue une fusion sur les modifications récupérées, vous devez vous assurer que votre travail local est commité avant d’exécuter la commande `pull`. Si vous rencontrez [un conflit de fusion](/github/collaborating-with-pull-requests/addressing-merge-conflicts/resolving-a-merge-conflict-using-the-command-line) que vous ne pouvez pas résoudre ou si vous décidez d’arrêter la fusion, vous pouvez utiliser `git merge --abort` pour ramener la branche à l’emplacement où elle se trouvait avant le tirage.

## Pour aller plus loin

- [« Utilisation de dépôts distants » du livre _Pro Git_](https://git-scm.com/book/en/Git-Basics-Working-with-Remotes){% ifversion fpt or ghec %}
- « [Résolution des problèmes liés à la connectivité](/articles/troubleshooting-connectivity-problems) »{% endif %}

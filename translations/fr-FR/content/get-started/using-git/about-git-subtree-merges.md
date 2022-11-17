---
title: À propos des fusions de sous-arborescences Git
redirect_from:
  - /articles/working-with-subtree-merge
  - /subtree-merge
  - /articles/about-git-subtree-merges
  - /github/using-git/about-git-subtree-merges
  - /github/getting-started-with-github/about-git-subtree-merges
  - /github/getting-started-with-github/using-git/about-git-subtree-merges
intro: 'Si vous devez gérer plusieurs projets au sein d’un seul dépôt, vous pouvez utiliser une *fusion de sous-arborescence* pour gérer toutes les références.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
ms.openlocfilehash: cd553d4193f3e4ad5de54abc218df623b1d53276
ms.sourcegitcommit: 96bbb6b8f3c9172209d80cb1502017ace3019807
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/10/2022
ms.locfileid: '147880027'
---
## À propos des fusions de sous-arborescences

En règle générale, une fusion de sous-arborescence est utilisée pour contenir un dépôt au sein d’un dépôt. Le « sous-dépôt » est stocké dans un dossier du dépôt principal.

La meilleure façon d’expliquer les fusions de sous-arborescences consiste à donner un exemple. Nous allons :

- Créer un dépôt vide appelé `test` qui représente notre projet.
- Fusionner un autre dépôt dans celui-ci en tant que sous-arborescence appelée `Spoon-Knife`.
- Le projet `test` utilise ce sous-projet comme s’il faisait partie du même dépôt.
- Extraire des mises à jour de `Spoon-Knife` dans notre projet `test`.

## Configuration du dépôt vide pour une fusion de sous-arborescence

{% data reusables.command_line.open_the_multi_os_terminal %}
2. Créez un répertoire et accédez-y.
  ```shell
  $ mkdir test
  $ cd test
  ```
3. Initialisez un nouveau dépôt Git.
  ```shell
  $ git init
  > Initialized empty Git repository in /Users/octocat/tmp/test/.git/
  ```
4. Créez et commitez un nouveau fichier.
  ```shell
  $ touch .gitignore
  $ git add .gitignore
  $ git commit -m "initial commit"
  > [main (root-commit) 3146c2a] initial commit
  >  0 files changed, 0 insertions(+), 0 deletions(-)
  >  create mode 100644 .gitignore
  ```

## Ajout d’un nouveau dépôt en tant que sous-arborescence

1. Ajoutez une nouvelle URL distante pointant vers le projet distinct qui nous intéresse.
  ```shell
  $ git remote add -f spoon-knife https://github.com/octocat/Spoon-Knife.git
  > Updating spoon-knife
  > warning: no common commits
  > remote: Counting objects: 1732, done.
  > remote: Compressing objects: 100% (750/750), done.
  > remote: Total 1732 (delta 1086), reused 1558 (delta 967)
  > Receiving objects: 100% (1732/1732), 528.19 KiB | 621 KiB/s, done.
  > Resolving deltas: 100% (1086/1086), done.
  > From https://github.com/octocat/Spoon-Knife
  >  * [new branch]      main     -> Spoon-Knife/main
  ```
2. Fusionnez le projet `Spoon-Knife` dans le projet Git local. Cela ne modifie pas vos fichiers localement, mais prépare Git à l’étape suivante.

  Si vous utilisez Git 2.9 ou version ultérieure :
  ```shell
  $ git merge -s ours --no-commit --allow-unrelated-histories spoon-knife/main
  > Automatic merge went well; stopped before committing as requested
  ```

  Si vous utilisez Git 2.8 ou version antérieure :
  ```shell
  $ git merge -s ours --no-commit spoon-knife/main
  > Automatic merge went well; stopped before committing as requested
  ```
3. Créez un répertoire appelé **spoon-knife** et copiez-y l’historique Git du projet `Spoon-Knife`.
  ```shell
  $ git read-tree --prefix=spoon-knife/ -u spoon-knife/main
  ```
4. Commitez les modifications pour les maintenir en sécurité.
  ```shell
  $ git commit -m "Subtree merged in spoon-knife"
  > [main fe0ca25] Subtree merged in spoon-knife
  ```

Bien que nous n’ayons ajouté qu’un seul sous-projet, un nombre quelconque de sous-projets peut être incorporé dans un dépôt Git.

{% tip %}

**Conseil** : Si vous créez un nouveau clone du dépôt à l’avenir, les dépôts distants que vous avez ajoutés ne seront pas créés pour vous. Vous devrez les ajouter à nouveau à l’aide de [la commande `git remote add`](/github/getting-started-with-github/managing-remote-repositories).

{% endtip %}

## Synchronisation avec des mises à jour et des modifications

Lorsqu’un sous-projet est ajouté, il n’est pas automatiquement synchronisé avec les modifications en amont. Vous devez mettre à jour le sous-projet avec la commande suivante :

```shell
$ git pull -s subtree <em>remotename</em> <em>branchname</em>
```

Pour l’exemple ci-dessus, il s’agit de :

```shell
$ git pull -s subtree spoon-knife main
```

## Pour aller plus loin

- [Chapitre « Fusion avancée » du livre _Pro Git_](https://git-scm.com/book/en/v2/Git-Tools-Advanced-Merging)
- « [Comment utiliser la stratégie de fusion de sous-arborescence](https://www.kernel.org/pub/software/scm/git/docs/howto/using-merge-subtree.html) »

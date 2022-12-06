---
title: Gestion des erreurs autres que de type avance rapide
intro: 'Parfois, Git ne peut pas apporter votre modification à un dépôt distant sans perdre de commit. Quand cela se produit, votre poussée (push) est refusée.'
redirect_from:
  - /articles/dealing-with-non-fast-forward-errors
  - /github/using-git/dealing-with-non-fast-forward-errors
  - /github/getting-started-with-github/dealing-with-non-fast-forward-errors
  - /github/getting-started-with-github/using-git/dealing-with-non-fast-forward-errors
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Non-fast-forward error
ms.openlocfilehash: 59e1957bf2376462c1267527b1bc29ed9de49db9
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '145109493'
---
Si une autre personne a poussé (push) des modifications vers la même branche que vous, Git ne pourra pas pousser vos modifications :

```shell
$ git push origin main
> To https://{% data variables.command_line.codeblock %}/<em>USERNAME</em>/<em>REPOSITORY</em>.git
>  ! [rejected]        main -> main (non-fast-forward)
> error: failed to push some refs to 'https://{% data variables.command_line.codeblock %}/<em>USERNAME</em>/<em>REPOSITORY</em>.git'
> To prevent you from losing history, non-fast-forward updates were rejected
> Merge the remote changes (e.g. 'git pull') before pushing again.  See the
> 'Note about fast-forwards' section of 'git push --help' for details.
```

Vous pouvez résoudre ce problème en [extrayant et en fusionnant](/github/getting-started-with-github/getting-changes-from-a-remote-repository) les modifications apportées à la branche distante avec les modifications que vous avez effectuées localement :

```shell
$ git fetch origin
# Fetches updates made to an online repository
$ git merge origin <em>YOUR_BRANCH_NAME</em>
# Merges updates made online with your local work
```

Vous pouvez aussi simplement utiliser `git pull` pour exécuter les deux commandes à la fois :

```shell
$ git pull origin <em>YOUR_BRANCH_NAME</em>
# Grabs online updates and merges them with your local work
```

---
title: Poussée de commits vers un dépôt distant
intro: Utilisez `git push` pour envoyer (push) des validations (commits) effectuées sur votre branche locale vers un référentiel distant.
redirect_from:
  - /articles/pushing-to-a-remote
  - /articles/pushing-commits-to-a-remote-repository
  - /github/using-git/pushing-commits-to-a-remote-repository
  - /github/getting-started-with-github/pushing-commits-to-a-remote-repository
  - /github/getting-started-with-github/using-git/pushing-commits-to-a-remote-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Push commits to a remote
ms.openlocfilehash: 61a3eb3e0b0147810b561b59b58879688dd4ba36
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145109489'
---
## À propos de `git push`
La commande `git push` prend deux arguments :

* Un nom de dépôt distant, par exemple `origin`
* Un nom de branche, par exemple `main`

Par exemple :

```shell
git push <em> &lt;REMOTENAME> &lt;BRANCHNAME> </em>
```

Par exemple, vous exécutez généralement `git push origin main` pour pousser vos modifications locales vers votre dépôt en ligne.

## Renommage des branches

Pour renommer une branche, vous utilisez la même commande `git push`, mais vous ajoutez un autre argument : le nom de la nouvelle branche. Par exemple :

```shell
git push <em> &lt;REMOTENAME> &lt;LOCALBRANCHNAME></em>:<em>&lt;REMOTEBRANCHNAME> </em>
```

Cela pousse `LOCALBRANCHNAME` vers votre `REMOTENAME`, mais il est renommé en `REMOTEBRANCHNAME`.

## Gestion des erreurs autres que de type avance rapide

Si votre copie locale d’un dépôt n’est pas synchronisée avec le dépôt en amont vers lequel vous poussez, ou se trouve « derrière » celui-ci, vous obtiendrez un message indiquant `non-fast-forward updates were rejected`.
Cela signifie que vous devez récupérer, ou « extraire », les modifications en amont avant de pouvoir pousser vos modifications locales.

Pour plus d’informations sur cette erreur, consultez « [Gestion des erreurs autres que de type avance rapide](/github/getting-started-with-github/dealing-with-non-fast-forward-errors) ».

## Poussée de balises

Par défaut, et sans paramètres supplémentaires, `git push` envoie toutes les branches correspondantes qui ont les mêmes noms que les branches distantes.

Pour pousser une seule balise, vous pouvez émettre la même commande que pour pousser une branche :

```shell
git push <em> &lt;REMOTENAME> &lt;TAGNAME> </em>
```

Pour pousser toutes vos balises, vous pouvez taper la commande :

```shell
git push <em> &lt;REMOTENAME></em> --tags
```

## Suppression d’une balise ou branche distante

La syntaxe de suppression d’une branche est un peu obscure à première vue :

```shell
git push <em> &lt;REMOTENAME></em> :<em>&lt;BRANCHNAME> </em>
```

Notez qu’il y a un espace avant le signe deux-points. La commande ressemble aux mêmes étapes que celles que vous devez effectuer pour renommer une branche. Toutefois, ici, vous dites à Git de ne _rien_ pousser dans `BRANCHNAME` vers `REMOTENAME`. En raison de cela, `git push` supprime la branche sur le dépôt distant.

## Dépôts distants et duplications

Vous savez peut-être déjà que [vous pouvez dupliquer des dépôts](https://guides.github.com/overviews/forking/) sur GitHub.

Lorsque vous clonez un dépôt que vous possédez, vous lui fournissez une URL distante qui indique à Git où extraire et pousser des mises à jour. Si vous souhaitez collaborer avec le dépôt d’origine, vous ajoutez une nouvelle URL distante, généralement appelée `upstream`, à votre clone Git local :

```shell
git remote add upstream <em> &lt;THEIR_REMOTE_URL> </em>
```

Vous pouvez maintenant extraire des mises à jour et des branches à partir de *leur* duplication :

```shell
git fetch upstream
# Grab the upstream remote's branches
> remote: Counting objects: 75, done.
> remote: Compressing objects: 100% (53/53), done.
> remote: Total 62 (delta 27), reused 44 (delta 9)
> Unpacking objects: 100% (62/62), done.
> From https://{% data variables.command_line.codeblock %}/<em>octocat</em>/<em>repo</em>
>  * [new branch]      main     -> upstream/main
```

Lorsque vous avez terminé d’apporter des modifications locales, vous pouvez pousser votre branche locale vers GitHub et [lancer une demande de tirage](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests).

Pour plus d’informations sur l’utilisation de duplications, consultez « [Synchronisation d’une duplication](/pull-requests/collaborating-with-pull-requests/working-with-forks/syncing-a-fork) ».

## Pour aller plus loin

- [Chapitre « Dépôts distants » du livre « Pro Git »](https://git-scm.com/book/ch5-2.html)
- [Page principale `git remote`](https://git-scm.com/docs/git-remote.html)
- « [Aide-mémoire Git](/articles/git-cheatsheet) »
- « [Workflows Git](/github/getting-started-with-github/git-workflows) »
- « [Manuel Git](https://guides.github.com/introduction/git-handbook/) »

---
title: Utilisation du rebasage Git en ligne de commande
redirect_from:
  - /articles/using-git-rebase
  - /articles/using-git-rebase-on-the-command-line
  - /github/using-git/using-git-rebase-on-the-command-line
  - /github/getting-started-with-github/using-git-rebase-on-the-command-line
  - /github/getting-started-with-github/using-git/using-git-rebase-on-the-command-line
intro: Voici un petit tutoriel sur l’utilisation de `git rebase` sur la ligne de commande.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Git rebase
ms.openlocfilehash: e0d2d2d10da187d6cc38a72a44e8235ec1f6f73f
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/11/2022
ms.locfileid: '145128387'
---
## Utilisation du rebasage Git

Dans cet exemple, nous allons couvrir toutes les commandes `git rebase` disponibles, à l’exception de `exec`.

Nous allons commencer notre rebasage en entrant `git rebase --interactive HEAD~7` sur le terminal. Notre éditeur de texte favori affiche les lignes suivantes :

```
pick 1fc6c95 Patch A
pick 6b2481b Patch B
pick dd1475d something I want to split
pick c619268 A fix for Patch B
pick fa39187 something to add to patch A
pick 4ca2acc i cant' typ goods
pick 7b36971 something to move before patch B
```

Dans cet exemple, nous allons :

* Écraser la cinquième validation (`fa39187`) dans la validation `"Patch A"` (`1fc6c95`), à l’aide de `squash`.
* Déplacez la dernière validation (`7b36971`) avant la validation `"Patch B"` (`6b2481b`) et gardez-la comme `pick`.
* Fusionnez la validation `"A fix for Patch B"` (`c619268`) dans la validation `"Patch B"` (`6b2481b`) et ignorez le message de validation avec `fixup`.
* Fractionnez la troisième validation (`dd1475d`) en deux validations plus petites, avec `edit`.
* Corrigez le message de validation mal orthographiée (`4ca2acc`) avec `reword`.

Ouf ! Cela peut sembler représenter beaucoup de travail, mais en procédant une étape à la fois, nous pouvons facilement apporter ces modifications.

Pour commencer, nous devons modifier les commandes du fichier pour qu’il ressemble à ceci :

```
pick 1fc6c95 Patch A
squash fa39187 something to add to patch A
pick 7b36971 something to move before patch B
pick 6b2481b Patch B
fixup c619268 A fix for Patch B
edit dd1475d something I want to split
reword 4ca2acc i cant' typ goods
```

Nous avons modifié la commande de chaque ligne de `pick` sur la commande qui nous intéresse.

Maintenant, enregistrez et fermez l’éditeur ; cela démarre le rebasage interactif.

Git ignore la première commande de rebasage, `pick 1fc6c95`, car elle n’a rien à faire. Il passe à la commande suivante, `squash fa39187`. Étant donné que cette opération nécessite votre entrée, Git ouvre à nouveau votre éditeur de texte. Le fichier qu’il ouvre ressemble à ceci :

```
# This is a combination of two commits.
# The first commit's message is:

Patch A

# This is the 2nd commit message:

something to add to patch A

# Please enter the commit message for your changes. Lines starting
# with '#' will be ignored, and an empty message aborts the commit.
# Not currently on any branch.
# Changes to be committed:
#   (use "git reset HEAD <file>..." to unstage)
#
# modified:   a
#
```

Ce fichier est le moyen de Git de vous dire, « Hé, regardez ce que je suis sur le point de faire avec ce `squash` ». Il répertorie le premier message de validation (`"Patch A"`) et le deuxième message de validation (`"something to add to patch A"`). Si vous êtes satisfait de ces messages de validation, vous pouvez enregistrer le fichier et fermer l’éditeur. Sinon, vous avez la possibilité de modifier le message de validation en modifiant simplement le texte.

Lorsque l’éditeur est fermé, le rabasage continue :

```
pick 1fc6c95 Patch A
squash fa39187 something to add to patch A
pick 7b36971 something to move before patch B
pick 6b2481b Patch B
fixup c619268 A fix for Patch B
edit dd1475d something I want to split
reword 4ca2acc i cant' typ goods
```

Git traite les deux commandes `pick` (pour `pick 7b36971` et `pick 6b2481b`). Il traite *également* la commande `fixup` (`fixup c619268`), car elle ne nécessite aucune interaction. `fixup` fusionne les modifications apportées à `c619268` à la validation avant celle-ci, `6b2481b`. Les deux modifications auront le même message de validation : `"Patch B"`.

Git arrive à l’opération `edit dd1475d`, s’arrête et imprime le message suivant dans le terminal :

```shell
You can amend the commit now, with

        git commit --amend

Once you are satisfied with your changes, run

        git rebase --continue
```

À ce stade, vous pouvez modifier l’un des fichiers de votre projet pour apporter des modifications supplémentaires. Pour chaque modification que vous apportez, vous devez effectuer une nouvelle validation et vous pouvez le faire en entrant la commande `git commit --amend`. Lorsque vous avez terminé d’apporter toutes vos modifications, vous pouvez exécuter `git rebase --continue`.

Git arrive ensuite à la commande `reword 4ca2acc`.  Il ouvre votre éditeur de texte une fois de plus et présente les informations suivantes :

```
i cant' typ goods

# Please enter the commit message for your changes. Lines starting
# with '#' will be ignored, and an empty message aborts the commit.
# Not currently on any branch.
# Changes to be committed:
#   (use "git reset HEAD^1 <file>..." to unstage)
#
# modified:   a
#
```

Comme précédemment, Git affiche le message de validation pour vous permettre de le modifier. Vous pouvez modifier le texte (`"i cant' typ goods"`), enregistrer le fichier et fermer l’éditeur. Git termine le rebasage et vous renvoie dans le terminal.

## Envoi de code rebasé à GitHub

Étant donné que vous avez modifié l’historique Git, le `git push origin` habituel **ne fonctionnera pas**. Vous devez modifier la commande par « envoi forcé » de vos dernières modifications :

```shell
# Don't override changes
$ git push origin main --force-with-lease

# Override changes
$ git push origin main --force
```

{% warning %}

L’envoi de force a des implications sérieuses, car il modifie la séquence historique des validations pour la branche. Utilisez cette option avec prudence, en particulier si votre référentiel est accessible par plusieurs personnes.

{% endwarning %}

## Pour aller plus loin

* « [Résolution des conflits de fusion après un rebasage Git](/github/getting-started-with-github/resolving-merge-conflicts-after-a-git-rebase) »

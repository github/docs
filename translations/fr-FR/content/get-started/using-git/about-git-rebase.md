---
title: À propos de git rebase
redirect_from:
  - /rebase
  - /articles/interactive-rebase
  - /articles/about-git-rebase
  - /github/using-git/about-git-rebase
  - /github/getting-started-with-github/about-git-rebase
  - /github/getting-started-with-github/using-git/about-git-rebase
intro: 'La commande `git rebase` vous permet de changer facilement une série de commits, en modifiant l’historique de votre dépôt. Vous pouvez effectuer la réorganisation, la modification ou le squash des commits de manière groupée.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
ms.openlocfilehash: 5ffa3cbb1fcb6c8c37e56e434b08018582a0ff2b
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/11/2022
ms.locfileid: '145104589'
---
En règle générale, vous devez utiliser `git rebase` pour :

* Modifier les messages de commit précédents
* Combiner plusieurs commits en un seul
* Supprimer ou rétablir les commits qui ne sont plus nécessaires

{% warning %}

**Avertissement** : Étant donné que la modification de votre historique de commit peut rendre les choses difficiles pour toute autre personne qui utilise le dépôt, il est déconseillé de rebaser des commits lorsque vous avez déjà poussé vers un dépôt. Pour savoir comment rebaser en toute sécurité sur {% data variables.product.product_location %}, consultez « [À propos des fusions de demandes de tirage](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/about-pull-request-merges) ».

{% endwarning %}

## Rebasage de commits par rapport à une branche

Pour rebaser tous les commits entre une autre branche et l’état de la branche actuelle, vous pouvez entrer la commande suivante dans votre shell (soit l’invite de commandes pour Windows, soit le terminal pour Mac et Linux) :

```shell
$ git rebase --interactive <em>other_branch_name</em>
```

## Rebasage de commits par rapport à une limite dans le temps

Pour rebaser les quelques derniers commits dans votre branche actuelle, vous pouvez entrer la commande suivante dans votre shell :

```shell
$ git rebase --interactive HEAD~7
```

## Commandes disponibles lors du rebasage

Six commandes sont disponibles lors du rebasage :

<dl>
<dt><code>pick</code></dt>
<dd><code>pick</code> signifie simplement que le commit est inclus. La réorganisation de l’ordre des commandes <code>pick</code> modifie l’ordre des commits lorsque le rebasage est en cours. Si vous choisissez de ne pas inclure un commit, vous devez supprimer la ligne entière. </dd>

<dt><code>reword</code></dt>
<dd>La commande <code>reword</code> est similaire à <code>pick</code> mais, une fois que vous l’avez utilisée, le processus de rebasage s’interrompt et vous donne la possibilité de modifier le message de commit. Les modifications apportées par le commit ne sont pas affectées. </dd>

<dt><code>edit</code></dt>
<dd>Si vous choisissez d’exécuter <code>edit</code> sur un commit, vous aurez la possibilité de modifier le commit, ce qui signifie que vous pouvez ajouter ou modifier entièrement le commit. Vous pouvez également effectuer davantage de commits avant de continuer le rebasage. Cela vous permet de fractionner un commit volumineux en plus petits, ou de supprimer des modifications erronées apportées dans un commit. </dd>

<dt><code>squash</code></dt>
<dd>Cette commande vous permet de combiner deux commits ou plus en un seul commit. Un commit est écrasé (squash) dans le commit qui le précède. Git vous donne la possibilité d’écrire un nouveau message de commit décrivant les deux modifications.</dd>

<dt><code>fixup</code></dt>
<dd>Cette commande est similaire à <code>squash</code>, mais le commit à fusionner a son message ignoré. Le commit est simplement fusionné dans le commit qui le précède et le message du commit précédent est utilisé pour décrire les deux modifications.</dd>

<dt><code>exec</code></dt>
<dd>Cela vous permet d’exécuter des commandes shell arbitraires sur un commit.</dd>
</dl>

## Exemple d’utilisation de `git rebase`

Quelle que soit la commande que vous utilisez, Git lance [votre éditeur de texte par défaut](/github/getting-started-with-github/associating-text-editors-with-git) et ouvre un fichier qui détaille les commits dans la plage que vous avez choisie. Ce fichier ressemble un peu à ce qui suit :

```
pick 1fc6c95 Patch A
pick 6b2481b Patch B
pick dd1475d something I want to split
pick c619268 A fix for Patch B
pick fa39187 something to add to patch A
pick 4ca2acc i cant' typ goods
pick 7b36971 something to move before patch B

# Rebase 41a72e6..7b36971 onto 41a72e6
#
# Commands:
#  p, pick = use commit
#  r, reword = use commit, but edit the commit message
#  e, edit = use commit, but stop for amending
#  s, squash = use commit, but meld into previous commit
#  f, fixup = like "squash", but discard this commit's log message
#  x, exec = run command (the rest of the line) using shell
#
# If you remove a line here THAT COMMIT WILL BE LOST.
# However, if you remove everything, the rebase will be aborted.
#
```

En examinant ces informations, de haut en bas, nous voyons que :

- Sept commits sont listés, ce qui indique qu’il y a eu sept changements entre notre point de départ et l’état de notre branche actuelle.
- Les commits que vous avez choisis de rebaser sont triés dans l’ordre des modifications les plus anciennes (en haut) aux modifications les plus récentes (en bas).
- Chaque ligne liste une commande (par défaut, `pick`), le SHA de commit et le message de commit. L’ensemble de la procédure `git rebase` est axé sur votre manipulation de ces trois colonnes. Les modifications que vous apportez sont *rebasées* sur votre dépôt.
- Après les commits, Git vous indique la plage de commits que nous utilisons (`41a72e6..7b36971`).
- Enfin, Git fournit de l’aide en vous indiquant les commandes à votre disposition lors du rebasage de commits.

## Pour aller plus loin

- « [Utilisation du rebasage Git](/articles/using-git-rebase) »
- [Chapitre « Branchement Git » du livre _Pro Git_](https://git-scm.com/book/en/Git-Branching-Rebasing)
- [Chapitre « Rebasage interactif » du livre _Pro Git_](https://git-scm.com/book/en/Git-Tools-Rewriting-History#_changing_multiple)
- « [Squash des commits avec rebase](http://gitready.com/advanced/2009/02/10/squashing-commits-with-rebase.html) »
- « [Synchronisation de votre branche](/desktop/contributing-to-projects/syncing-your-branch) » dans la documentation {% data variables.product.prodname_desktop %}

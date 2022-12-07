---
title: À propos des conflits de fusion
intro: Les conflits de fusion se produisent quand vous fusionnez des branches qui ont des commits concurrents et que Git a besoin de votre aide pour déterminer les modifications à incorporer dans la fusion finale.
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/addressing-merge-conflicts/about-merge-conflicts
  - /articles/about-merge-conflicts
  - /github/collaborating-with-issues-and-pull-requests/about-merge-conflicts
  - /github/about-merge-conflicts
  - /github/collaborating-with-pull-requests/addressing-merge-conflicts/about-merge-conflicts
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
  ghae: '*'
topics:
  - Pull requests
ms.openlocfilehash: 5902f74a9c51772dc3f1d8883b60723ffec3e1d1
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/11/2022
ms.locfileid: '145133028'
---
Git peut souvent résoudre les différences entre les branches et les fusionner automatiquement. En règle générale, les changements se trouvent sur des lignes différentes, ou même dans des fichiers différents, ce qui rend la fusion simple à comprendre pour les ordinateurs. Toutefois, il y a parfois des changements concurrents que Git ne peut pas résoudre sans votre aide. Souvent, les conflits de fusion se produisent quand les personnes font des changements différents sur la même ligne du même fichier, ou quand une personne modifie un fichier et qu’une autre supprime le même fichier.

Vous devez résoudre tous les conflits de fusion avant de pouvoir fusionner une demande de tirage sur {% data variables.product.product_name %}. Si vous avez un conflit de fusion entre la branche de comparaison et la branche de base dans votre demande de tirage, vous pouvez voir une liste des fichiers avec des changements en conflit au-dessus du bouton **Fusionner la demande de tirage**. Le bouton **Fusionner la demande de tirage** est désactivé jusqu’à ce que vous ayez résolu tous les conflits entre la branche de comparaison et la branche de base.

![message d’erreur de conflit de fusion](/assets/images/help/pull_requests/merge_conflict_error_on_github.png)

## Résolution des conflits de fusion

Pour résoudre un conflit de fusion, vous devez modifier manuellement le fichier en conflit pour sélectionner les changements que vous voulez garder dans la fusion finale. Il y a deux façons de résoudre un conflit de fusion :

- Si votre conflit de fusion est provoqué par des changements de ligne concurrents, par exemple, quand des personnes font des changements différents sur la même ligne du même fichier sur différentes branches dans votre dépôt Git, vous pouvez le résoudre sur {% data variables.product.product_name %} en utilisant l’éditeur de conflit. Pour plus d’informations, consultez « [Résolution d’un conflit de fusion sur {% data variables.product.prodname_dotcom %}](/pull-requests/collaborating-with-pull-requests/addressing-merge-conflicts/resolving-a-merge-conflict-on-github) ».
- Pour tous les autres types de conflits de fusion, vous devez résoudre le conflit de fusion dans un clone local du dépôt et pousser le changement sur votre branche sur {% data variables.product.product_name %}. Vous pouvez utiliser la ligne de commande ou un outil de type [{% data variables.product.prodname_desktop %}](https://desktop.github.com/) pour pousser le changement. Pour plus d’informations, consultez « [Résolution d’un conflit de fusion sur la ligne de commande](/github/collaborating-with-pull-requests/addressing-merge-conflicts/resolving-a-merge-conflict-using-the-command-line) ».

Si vous avez un conflit de fusion sur la ligne de commande, vous ne pouvez pas pousser vos changements locaux sur {% data variables.product.product_name %} tant que vous ne résolvez pas le conflit de fusion localement sur votre ordinateur. Si vous essayez de fusionner sur la ligne de commande des branches qui ont un conflit de fusion, vous obtenez un message d’erreur. Pour plus d’informations, consultez « [Résolution d’un conflit de fusion en utilisant la ligne de commande](/articles/resolving-a-merge-conflict-using-the-command-line/) ».
```shell
$ git merge <em>BRANCH-NAME</em>
> Auto-merging styleguide.md
> CONFLICT (content): Merge conflict in styleguide.md
> Automatic merge failed; fix conflicts and then commit the result
```

## Pour aller plus loin

- « [À propos des fusions de demande de tirage](/articles/about-pull-request-merges/) »
- « [À propos des demandes de tirage (pull requests)](/articles/about-pull-requests/) »
- « [Résolution d’un conflit de fusion en utilisant la ligne de commande](/github/collaborating-with-pull-requests/addressing-merge-conflicts/resolving-a-merge-conflict-using-the-command-line) »
- « [Résolution d’un conflit de fusion sur GitHub](/pull-requests/collaborating-with-pull-requests/addressing-merge-conflicts/resolving-a-merge-conflict-on-github) »

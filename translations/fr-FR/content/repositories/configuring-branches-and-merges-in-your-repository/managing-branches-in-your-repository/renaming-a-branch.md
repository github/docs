---
title: Changement du nom d’une branche
intro: Vous pouvez changer le nom d’une branche dans un dépôt.
permissions: 'People with write permissions to a repository can rename a branch in the repository unless it is the [default branch](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-branches#about-the-default-branch){% ifversion fpt or ghec or ghes > 3.3 %} or a [protected branch](/repositories/configuring-branches-and-merges-in-your-repository/defining-the-mergeability-of-pull-requests/about-protected-branches){% endif %}. People with admin permissions can rename the default branch{% ifversion fpt or ghec or ghes > 3.3 %} and protected branches{% endif %}.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
redirect_from:
  - /github/administering-a-repository/renaming-a-branch
  - /github/administering-a-repository/managing-branches-in-your-repository/renaming-a-branch
ms.openlocfilehash: 6e30c7c2615f8b3dc21075e24298796febbce314
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '145132356'
---
## À propos du changement du nom des branches

Vous pouvez renommer une branche dans un dépôt sur {% data variables.product.product_location %}. Pour plus d’informations sur les branches, consultez « [À propos des branches](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-branches) ».

Lorsque vous renommez une branche sur {% data variables.product.product_location %}, toutes les URL contenant l’ancien nom de la branche sont automatiquement redirigées vers l’URL équivalente pour la branche renommée. Les stratégies de protection de branche sont également mises à jour, ainsi que la branche de base pour les demandes de tirage ouvertes (y compris pour des duplications) et les mises en production à l’état Brouillon. Une fois le changement de nom terminé, {% data variables.product.prodname_dotcom %} fournit des instructions sur la page d’accueil du dépôt qui invite les contributeurs pour mettre à jour leurs environnements Git locaux.

Si les URL de fichiers sont automatiquement redirigées, les URL de fichiers bruts ne sont pas redirigées. Par ailleurs, {% data variables.product.prodname_dotcom %} n’effectue aucune redirection si les utilisateurs effectuent une opération `git pull` pour le nom de branche précédent.

Les workflows {% data variables.product.prodname_actions %} ne suivant pas les changements de nom, si votre dépôt publie une action, toute personne utilisant cette action avec `@{old-branch-name}` rencontrera une interruption. Vous devriez envisager d’ajouter une nouvelle branche avec le contenu d’origine, ainsi qu’un rapport de validation supplémentaire indiquant que le nom de la branche est déconseillé, et suggère aux utilisateurs de migrer vers le nouveau nom de la branche.

## Changement du nom d’une branche

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.navigate-to-branches %}
1. Dans la liste des branches, à droite de la branche que vous souhaitez renommer, cliquez sur {% octicon "pencil" aria-label="The edit icon" %}.
    ![Icône Crayon à droite de la branche que vous souhaitez renommer](/assets/images/help/branch/branch-rename-edit.png)
1. Tapez un nouveau nom pour la branche.
    ![Champ de texte pour taper un nouveau nom de branche](/assets/images/help/branch/branch-rename-type.png)
1. Révisez les informations relatives aux environnements locaux, puis cliquez sur **Renommer la branche**.
    ![Informations sur l’environnement local et bouton « Renommer la branche »](/assets/images/help/branch/branch-rename-rename.png)

## Mise à jour d’un clone local après le changement de nom d’une branche

Après que vous avez renommé une branche dans un dépôt sur {% data variables.product.product_name %}, tout collaborateur disposant d’un clone local du dépôt doit mettre à jour le clone.

À partir du clone local du dépôt sur un ordinateur, exécutez les commandes suivantes pour mettre à jour le nom de la branche par défaut.

```shell
$ git branch -m <em>OLD-BRANCH-NAME</em> <em>NEW-BRANCH-NAME</em>
$ git fetch origin
$ git branch -u origin/<em>NEW-BRANCH-NAME</em> <em>NEW-BRANCH-NAME</em>
$ git remote set-head origin -a
```

Si vous le souhaitez, exécutez la commande suivante pour supprimer les références de suivi à l’ancien nom de la branche.
```
$ git remote prune origin
```

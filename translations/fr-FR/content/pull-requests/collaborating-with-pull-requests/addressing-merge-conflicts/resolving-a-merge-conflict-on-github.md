---
title: Résolution d’un conflit de fusion sur GitHub
intro: 'Vous pouvez résoudre des conflits de fusion simples qui impliquent des modifications de ligne concurrentes sur GitHub, en utilisant l’éditeur de conflit.'
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/addressing-merge-conflicts/resolving-a-merge-conflict-on-github
  - /articles/resolving-a-merge-conflict-on-github
  - /github/collaborating-with-issues-and-pull-requests/resolving-a-merge-conflict-on-github
  - /github/resolving-a-merge-conflict-on-github
  - /github/collaborating-with-pull-requests/addressing-merge-conflicts/resolving-a-merge-conflict-on-github
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
shortTitle: Resolve merge conflicts
ms.openlocfilehash: 48613d8c8974d14a1de70e0dee5a7f4819d37fd9
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/11/2022
ms.locfileid: '145133024'
---
Vous pouvez uniquement résoudre les conflits de fusion sur {% data variables.product.product_name %} qui sont provoqués par des changements de ligne concurrents, par exemple, quand des personnes font des changements différents sur la même ligne du même fichier sur différentes branches dans votre dépôt Git. Pour tous les autres types de conflits de fusion, vous devez résoudre le conflit localement sur la ligne de commande. Pour plus d’informations, consultez « [Résolution d’un conflit de fusion en utilisant la ligne de commande](/articles/resolving-a-merge-conflict-using-the-command-line/) ».

{% ifversion ghes or ghae %} Si un administrateur de site désactive l’éditeur de conflit de fusion pour les demandes de tirage entre dépôts, vous ne pouvez pas utiliser l’éditeur de conflit sur {% data variables.product.product_name %} et devez résoudre les conflits de fusion sur la ligne de commande. Par exemple, si l’éditeur de conflit de fusion est désactivé, vous ne pouvez pas l’utiliser sur une demande de tirage entre une duplication et un dépôt en amont.
{% endif %}

{% warning %}

**Avertissement :** Quand vous résolvez un conflit de fusion sur {% data variables.product.product_name %}, l’intégralité de la [branche de base](/github/getting-started-with-github/github-glossary#base-branch) de votre demande de tirage est fusionnée dans la [branche principale](/github/getting-started-with-github/github-glossary#head-branch). Vérifiez que vous voulez vraiment commiter dans cette branche. Si la branche principale est la branche par défaut de votre dépôt, vous avez la possibilité de créer une branche comme branche principale de votre demande de tirage. Si la branche principale est protégée, vous ne pouvez pas y fusionner votre résolution de conflit, vous êtes donc invité à créer une branche principale. Pour plus d’informations, consultez « [À propos des branches protégées](/github/administering-a-repository/about-protected-branches) ».

{% endwarning %}

{% data reusables.repositories.sidebar-pr %}
1. Dans la liste « Demandes de tirage », cliquez sur la demande de tirage qui a un conflit de fusion à résoudre.
1. En bas de votre demande de tirage, cliquez sur **Résoudre les conflits**.
![Bouton Résoudre les conflits de fusion](/assets/images/help/pull_requests/resolve-merge-conflicts-button.png)

 {% tip %}

 **Astuce :** Si le bouton **Résoudre les conflits** est désactivé, le conflit de fusion de votre demande de tirage est trop complexe pour être résolu sur {% data variables.product.product_name %}{% ifversion ghes or ghae %} ou l’administrateur de site a désactivé l’éditeur de conflit pour les demandes de tirage entre dépôts{% endif %}. Vous devez résoudre le conflit de fusion en utilisant un autre client Git ou en utilisant Git sur la ligne de commande. Pour plus d’informations, consultez « [Résolution d’un conflit de fusion en utilisant la ligne de commande](/github/collaborating-with-pull-requests/addressing-merge-conflicts/resolving-a-merge-conflict-using-the-command-line) ».

 {% endtip %} {% data reusables.pull_requests.decide-how-to-resolve-competing-line-change-merge-conflict %} ![Voir l’exemple de conflit de fusion avec des marqueurs de conflit](/assets/images/help/pull_requests/view-merge-conflict-with-markers.png)
1. Si vous avez plusieurs conflits de fusion dans votre fichier, faites défiler jusqu’au prochain ensemble de marqueurs de conflit et répétez les étapes quatre et cinq pour résoudre votre conflit de fusion.
1. Une fois que vous avez résolu tous les conflits dans le fichier, cliquez sur **Marquer comme résolu**.
 ![Cliquer sur le bouton Marquer comme résolu](/assets/images/help/pull_requests/mark-as-resolved-button.png)
1. Si vous avez plusieurs fichiers avec un conflit, sélectionnez le fichier suivant à modifier à gauche de la page sous « fichiers en conflit » et répétez les étapes quatre à sept jusqu’à ce que vous ayez résolu tous les conflits de fusion de votre demande de tirage.
 ![Sélectionner le fichier en conflit suivant, le cas échéant](/assets/images/help/pull_requests/resolve-merge-conflict-select-conflicting-file.png)
1. Une fois que vous avez résolu tous vos conflits de fusion, cliquez sur **Commiter la fusion**. Cela fusionne l’intégralité de la branche de base dans votre branche principale.
 ![Bouton Résoudre les conflits de fusion](/assets/images/help/pull_requests/merge-conflict-commit-changes.png)
1. Si vous y êtes invité, vérifiez la branche dans laquelle vous commitez.

   Si la branche principale est la branche par défaut du dépôt, vous pouvez choisir de mettre à jour cette branche avec les changements que vous avez faits pour résoudre le conflit, ou de créer une branche et de l’utiliser comme branche principale de la demande de tirage.
 ![Invite pour vérifier la branche à mettre à jour](/assets/images/help/pull_requests/conflict-resolution-merge-dialog-box.png)

   Si vous choisissez de créer une branche, entrez un nom pour la branche.

   Si la branche principale de votre demande de tirage est protégée, vous devez créer une branche. Vous n’avez pas la possibilité de mettre à jour la branche protégée.

   Cliquez sur **Créer une branche et mettre à jour ma demande de tirage** ou **Je comprends, mettez à jour _BRANCH_**. Le texte du bouton correspond à l’action que vous effectuez.
1. Pour fusionner votre demande de tirage, sélectionnez **Fusionner la demande de tirage**. Pour plus d’informations sur les autres options de fusion de demande de tirage, consultez « [Fusion d’une demande de tirage](/articles/merging-a-pull-request/) ».

## Pour aller plus loin

- « [À propos des fusions de demande de tirage](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/about-pull-request-merges) »

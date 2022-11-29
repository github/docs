---
title: Réorganisation des commits
intro: 'Vous pouvez utiliser {% data variables.product.prodname_desktop %} pour réorganiser les commits dans l’historique de votre branche.'
versions:
  fpt: '*'
ms.openlocfilehash: 5f68af5f2798e6780a91515886130f2b3ca7e6aa
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '145105342'
---
## À propos de la réorganisation d’un commit

La réorganisation vous permet de modifier l’historique des commits pour fournir une progression des commits plus significative. {% data variables.product.prodname_desktop %} vous permet d’effectuer un glisser-déposer des commits dans l’historique de votre branche pour les réorganiser.

## Réorganiser un commit

{% data reusables.desktop.current-branch-menu %}
2. Dans la liste des branches, cliquez sur celle qui contient les commits à réorganiser.
{% data reusables.desktop.history-tab %}
4. Faites glisser le commit à réorganiser, puis déposez-le entre deux commits adjacents.
  ![réorganisation par glisser-déposer](/assets/images/help/desktop/reorder-drag-and-drop.png) Pendant que l’application réorganise les commits, une boîte de dialogue **Réorganisation en cours** indique la progression du changement.

## Messages d’erreur durant la réorganisation des commits

Quand vous réorganisez des commits, vous pouvez être amené à voir l’une des notifications ou l’un des messages d’erreur suivants.

* Une notification indique que le changement à apporter à la branche nécessite une poussée forcée pour mettre à jour la branche distante. Elle s’affiche quand les commits que vous avez réorganisés ont été poussés vers la branche distante. La poussée forcée modifie l’historique des commits de la branche et affecte les autres collaborateurs qui travaillent dans cette branche.  Sélectionnez **Commencer la réorganisation** pour démarrer la réorganisation, puis cliquez sur **Forcer la poussée vers origin** pour pousser vos changements.

  ![boîte de dialogue de réorganisation avec poussée forcée](/assets/images/help/desktop/reorder-force-push-dialog.png)

* Une erreur indique l’échec de la réorganisation, car il existe un commit de fusion parmi les commits réorganisés.

  ![boîte de dialogue de réorganisation avec commit de fusion](/assets/images/help/desktop/reorder-merge-commit-dialog.png)

* Une notification s’affiche pour indiquer que des changements non commités sont présents dans la branche actuelle. Sélectionnez **Effectuer un stash des changements et continuer** pour stocker les changements et continuer, ou sélectionnez **Fermer** pour ignorer le message et commiter les changements. Une fois qu’il n’existe plus aucun changement non commité, vous pouvez réorganiser vos commits.

  ![boîte de dialogue de réorganisation avec stash](/assets/images/help/desktop/reorder-stash-dialog.png)

* Un message indique qu’il existe des conflits de fusion que vous devez résoudre pour que l’application puisse continuer à réorganiser les commits sur votre branche.
    1. Cliquez sur **Voir les conflits** pour visualiser les conflits.
      ![message de résolution des conflits durant la réorganisation](/assets/images/help/desktop/reorder-resolve-conflicts.png) {% data reusables.desktop.resolve-merge-conflicts %}
   3. Une fois tous les conflits résolus, vous pouvez réorganiser vos commits.
  

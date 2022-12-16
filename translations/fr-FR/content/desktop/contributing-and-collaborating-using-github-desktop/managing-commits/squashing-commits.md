---
title: Squash des commits
intro: 'Vous pouvez utiliser {% data variables.product.prodname_desktop %} pour effectuer un squash des commits dans l’historique de votre branche.'
versions:
  fpt: '*'
ms.openlocfilehash: fb8141710a99b52f1b9a93e1abc0429b5e29f116
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '145105341'
---
## À propos du squash d’un commit

Le squash vous permet de combiner plusieurs commits de l’historique de votre branche en un seul commit. Cela peut contribuer à rendre l’historique de votre dépôt plus lisible et compréhensible.

## Squash d’un commit

{% mac %}

{% data reusables.desktop.current-branch-menu %}
2. Dans la liste des branches, sélectionnez celle qui contient les commits à regrouper à l’aide d’un squash.
{% data reusables.desktop.history-tab %}
4. Sélectionnez les commits devant faire l’objet d’un squash, puis déposez-les sur le commit avec lequel vous souhaitez les combiner. Vous pouvez sélectionner un ou plusieurs commits en utilisant <kbd>Commande</kbd> ou <kbd>Maj</kbd>.
  ![squash par glisser-déposer](/assets/images/help/desktop/squash-drag-and-drop.png)
5. Modifiez le message de commit de votre nouveau commit. Les messages de commit des commits sélectionnés devant faire l’objet d’un squash sont préremplis dans les champs **Récapitulatif** et **Description**.
6. Cliquez sur **Effectuer un squash des commits**.

{% endmac %}

{% windows %}

{% data reusables.desktop.current-branch-menu %}
2. Dans la liste des branches, sélectionnez celle qui contient les commits à regrouper à l’aide d’un squash.
{% data reusables.desktop.history-tab %}
4. Sélectionnez les commits devant faire l’objet d’un squash, puis déposez-les sur le commit avec lequel vous souhaitez les combiner. Vous pouvez sélectionner un ou plusieurs commits en utilisant <kbd>Ctrl</kbd> ou <kbd>Maj</kbd>.
  ![squash par glisser-déposer](/assets/images/help/desktop/squash-drag-and-drop.png)
5. Modifiez le message de commit de votre nouveau commit. Les messages de commit des commits sélectionnés devant faire l’objet d’un squash sont préremplis dans les champs **Récapitulatif** et **Description**.
6. Cliquez sur **Effectuer un squash des commits**.

{% endwindows %}

## Messages d’erreur durant le squash des commits

Quand vous effectuez un squash des commits, vous pouvez être amené à voir l’une des notifications ou l’un des messages d’erreur suivants.

* Une notification indique que le changement à apporter à la branche nécessite une poussée forcée pour mettre à jour la branche distante. La poussée forcée modifie l’historique des commits de la branche et affecte les autres collaborateurs qui travaillent dans cette branche.  Sélectionnez **Commencer le squash** pour démarrer le squash, puis cliquez sur **Forcer la poussée vers origin** pour pousser vos changements.

  ![boîte de dialogue de squash avec poussée forcée](/assets/images/help/desktop/squash-force-push.png)

* Une erreur indique l’échec du squash, car il existe un commit de fusion parmi les commits ayant fait l’objet d’un squash.

  ![boîte de dialogue de réorganisation avec commit de fusion](/assets/images/help/desktop/squash-merge-commit-dialog.png)

* Une notification s’affiche pour indiquer que des changements non commités sont présents dans la branche actuelle. Sélectionnez **Effectuer un stash des changements et continuer** pour stocker les changements et continuer, ou sélectionnez **Fermer** pour ignorer le message et commiter les changements. Une fois qu’il n’existe plus aucun changement non commité, vous pouvez effectuer un squash de vos commits.

  ![boîte de dialogue de squash avec stash](/assets/images/help/desktop/squash-stash-dialog.png)

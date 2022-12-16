---
title: Création et suppression de branches dans votre référentiel
intro: 'Vous pouvez créer ou supprimer des branches directement sur {% data variables.product.product_name %}.'
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-and-deleting-branches-within-your-repository
  - /articles/deleting-branches-in-a-pull-request
  - /articles/creating-and-deleting-branches-within-your-repository
  - /github/collaborating-with-issues-and-pull-requests/creating-and-deleting-branches-within-your-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
shortTitle: Create & delete branches
ms.openlocfilehash: 44b56d8a1884e5cbfe0832f291cdc244b57a3810
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147526629'
---
## Création d’une branche
Vous pouvez créer une branche de différentes manières sur {% data variables.product.product_name %}.

{% note %}

**Remarque :** Vous ne pouvez créer une branche que dans un référentiel auquel vous avez un accès pour l’envoi (push).

{% endnote %}

{% ifversion create-branch-from-overview %}
### Créer une branche via l’aperçu des branches
{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.navigate-to-branches %}
1. Cliquez sur **Nouvelle branche**.
   ![Capture d’écran de la page d’aperçu des branches avec le bouton « Nouvelle branche » mis en évidence](/assets/images/help/branches/new-branch-button.png)
2. Dans la boîte de dialogue, saisissez le nom de la branche et modifiez éventuellement la source de la branche.  
   Si le référentiel est une duplication, vous avez également la possibilité de sélectionner le référentiel amont comme source de la branche.
   ![Capture d’écran de la fenêtre modale de création de branche pour une duplication (fork) avec la source de la branche mise en évidence](/assets/images/help/branches/branch-creation-popup-branch-source.png)
3. Cliquez sur **Créer une branche**.
   ![Capture d’écran de la fenêtre modale de création de branche avec le bouton de création de branche mis en évidence](/assets/images/help/branches/branch-creation-popup-button.png) {% endif %}

### Création d’une branche à l’aide de la liste déroulante des branches
{% data reusables.repositories.navigate-to-repo %}
1. Si vous souhaitez créer la nouvelle branche à partir d’une autre branche que la branche par défaut du référentiel, cliquez sur {% octicon "git-branch" aria-label="The branch icon" %} **Branches**, puis choisissez une autre branche.
    ![Lien Branches sur la page de présentation](/assets/images/help/branches/branches-overview-link.png)
1. Cliquez sur le menu du sélecteur de branche.
    ![Menu du sélecteur de branche](/assets/images/help/branch/branch-selection-dropdown.png)
1. Entrez un nom unique pour votre nouvelle branche, puis sélectionnez **Créer une branche**.
    ![Zone de texte de création de branche](/assets/images/help/branch/branch-creation-text-box.png)
    
{% ifversion fpt or ghec or ghes > 3.4 %}
### Création d’une branche pour un problème
Vous pouvez créer une branche pour travailler sur un problème directement à partir de la page de problème et commencer immédiatement. Pour plus d’informations, consultez [Création d’une branche pour travailler sur un problème](/issues/tracking-your-work-with-issues/creating-a-branch-for-an-issue).
{% endif %}

## Suppression d’une branche

{% data reusables.pull_requests.automatically-delete-branches %}

{% note %}

**Remarque :** si la branche que vous souhaitez supprimer est la branche par défaut du référentiel, vous devez choisir une nouvelle branche par défaut avant de supprimer la branche. Pour plus d’informations, consultez « [Changement de la branche par défaut](/github/administering-a-repository/changing-the-default-branch) ».

{% endnote %}

Si la branche que vous souhaitez supprimer est associée à une demande de tirage ouverte, vous devez fusionner ou fermer la demande de tirage avant de supprimer la branche. Pour plus d’informations, consultez « [Fusion d’une demande de tirage](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/merging-a-pull-request) » ou « [Fermeture d’une demande de tirage](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/closing-a-pull-request) ».

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.navigate-to-branches %}
1. Faites défiler jusqu’à la branche que vous souhaitez supprimer, puis cliquez sur {% octicon "trash" aria-label="The trash icon to delete the branch" %}.
    ![delete the branch](/assets/images/help/branches/branches-delete.png) {% ifversion fpt or ghes > 3.5 or ghae-issue-6763 or ghec %}
1. Si vous essayez de supprimer une branche associée à au moins une demande de tirage ouverte, vous devez confirmer que vous souhaitez fermer la ou les demandes de tirage.
   
   ![Confirmer la suppression d’une branche](/assets/images/help/branches/confirm-deleting-branch.png){% endif %}

{% data reusables.pull_requests.retargeted-on-branch-deletion %} Pour plus d’informations, consultez « [À propos des branches](/github/collaborating-with-issues-and-pull-requests/about-branches#working-with-branches) ».

## Pour aller plus loin

- « [À propos des branches](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-branches) »
- « [Affichage des branches dans votre référentiel](/github/administering-a-repository/viewing-branches-in-your-repository) »
- « [Suppression et restauration de branches dans une demande de tirage](/github/administering-a-repository/deleting-and-restoring-branches-in-a-pull-request) »

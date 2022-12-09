---
title: Gestion des discussions
intro: 'Vous pouvez catégoriser, mettre en lumière, transférer ou supprimer les discussions.'
permissions: Repository administrators and people with write or greater access to a repository can manage discussions in the repository. Repository administrators and people with write or greater access to the source repository for organization discussions can manage discussions in the organization.
versions:
  feature: discussions
shortTitle: Manage discussions
redirect_from:
  - /discussions/managing-discussions-for-your-community/managing-discussions-in-your-repository
ms.openlocfilehash: e5e1474648973c90d16e8998db18518331233aa3
ms.sourcegitcommit: 1529de77bfcbe45519131b5f5fb3ab319758c2d2
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 11/14/2022
ms.locfileid: '148164338'
---
## À propos de la gestion des discussions

{% data reusables.discussions.about-discussions %} Pour plus d’informations sur les discussions, consultez « [À propos des discussions](/discussions/collaborating-with-your-community-using-discussions/about-discussions) ».

Les propriétaires d’organisation peuvent choisir les autorisations nécessaires à la création d’une discussion dans les référentiels appartenant à l’organisation. De même, pour choisir les autorisations requises pour créer une discussion d’organisation, les propriétaires d’organisation peuvent modifier les autorisations requises dans le référentiel source. Pour plus d’informations, consultez « [Gestion de la création de discussion pour les dépôts dans votre organisation](/organizations/managing-organization-settings/managing-discussion-creation-for-repositories-in-your-organization) ».

En tant que chargé de maintenance des discussions, vous pouvez créer des ressources de la communauté pour encourager des discussions alignées sur l’objectif global du projet et gérer un forum ouvert convivial pour les collaborateurs. La création{% ifversion fpt or ghec %} d’un code de conduite ou{% endif %} de directives de contribution pour les collaborateurs favorise un forum collaboratif et productif. Pour plus d’informations sur la création de ressources de la communauté, consultez{% ifversion fpt or ghec %} « [Ajout d’un code de conduite à votre projet](/communities/setting-up-your-project-for-healthy-contributions/adding-a-code-of-conduct-to-your-project) » et{% endif %} « [Définition de directives pour les contributeurs de dépôt](/communities/setting-up-your-project-for-healthy-contributions/setting-guidelines-for-repository-contributors) ».

Quand une discussion génère une idée ou un bogue prêt à étudier, vous pouvez créer un problème à partir d’une discussion. Pour plus d’informations, consultez « [Création d’un problème](/issues/tracking-your-work-with-issues/creating-an-issue#creating-an-issue-from-a-discussion) ».

Vous pouvez épingler une discussion en haut de la liste des discussions pour le référentiel ou l’organisation. {% ifversion discussions-category-specific-pins %}Vous pouvez également épingler une discussion à une catégorie spécifique.{% endif %} Pour plus d’informations, consultez « [Épinglage d’une discussion](/discussions/managing-discussions-for-your-community/managing-discussions#pinning-a-discussion) ».

Pour plus d’informations sur l’animation d’une discussion saine, consultez « [Modération de commentaires et de conversations](/communities/moderating-comments-and-conversations) ».

{% data reusables.discussions.you-can-label-discussions %}

## Prérequis

Pour gérer les discussions dans un dépôt, {% data variables.product.prodname_discussions %} doit être activé pour le dépôt. Pour plus d’informations, consultez « [Activation ou désactivation de {% data variables.product.prodname_discussions %} pour un dépôt](/github/administering-a-repository/enabling-or-disabling-github-discussions-for-a-repository) ».

Pour gérer les discussions dans une organisation, {% data variables.product.prodname_discussions %} doit être activé pour l’organisation. Pour plus d’informations, consultez « [Activation ou désactivation de {% data variables.product.prodname_discussions %} pour une organisation](/organizations/managing-organization-settings/enabling-or-disabling-github-discussions-for-an-organization) ».

## Changement de la catégorie d’une discussion

Vous pouvez catégoriser les discussions pour aider les membres de la communauté à trouver les discussions connexes. Pour plus d’informations, consultez « [Gestion des catégories de discussion](/discussions/managing-discussions-for-your-community/managing-categories-for-discussions) ».

Vous pouvez également déplacer une discussion vers une autre catégorie. Il n’est pas possible de déplacer une discussion vers ou depuis la catégorie des sondages.

{% data reusables.repositories.navigate-to-repo %} {% data reusables.discussions.discussions-tab %} {% data reusables.discussions.click-discussion-in-list %}
1. Dans la barre latérale droite, à droite de « Catégorie », cliquez sur {% octicon "gear" aria-label="The gear icon" %}.

   ![Capture d’écran de la « Catégorie » avec l’icône d’engrenage](/assets/images/help/discussions/category-in-sidebar.png)

1. Cliquez sur une catégorie.

   ![Capture d’écran du menu déroulant « Changer la catégorie »](/assets/images/help/discussions/change-category-drop-down.png)

## Épinglage d’une discussion

{% ifversion discussions-category-specific-pins %} Vous pouvez épingler une discussion au-dessus de la liste des discussions pour le référentiel ou l’organisation. Vous pouvez également épingler une discussion à une catégorie spécifique. Les discussions épinglées globalement s’affichent en plus des discussions épinglées à une catégorie spécifique.

Voici à quoi cela ressemble lorsque vous avez une discussion épinglée globalement et une discussion épinglée dans la catégorie Idées.

![Capture d’écran d’une discussion épinglée globalement et d’une discussion épinglée à la catégorie Idées](/assets/images/help/discussions/overview-pinned-discussions.png)

### Épinglage d’une discussion globalement
{% endif %}

Vous pouvez épingler jusqu’à quatre discussions importantes au-dessus de la liste des discussions du référentiel ou de l’organisation. 


{% data reusables.discussions.navigate-to-repo-or-org %} {% data reusables.discussions.discussions-tab %} {% data reusables.discussions.click-discussion-in-list %}
1. Dans la barre latérale droite, cliquez sur {% octicon "pin" aria-label="The pin icon" %} **Épingler la discussion**.
{% ifversion discussions-category-specific-pins %}

   ![Capture d’écran de l’option « Épingler la discussion » dans la barre latérale droite pour la discussion](/assets/images/help/discussions/click-pin-discussion-with-category-pins.png){% else %}

   ![Capture d’écran de l’option « Épingler la discussion » dans la barre latérale droite pour la discussion](/assets/images/help/discussions/click-pin-discussion.png){% endif %}

1. Vous pouvez aussi personnaliser l’apparence de la discussion épinglée.

   ![Capture d’écran des options de personnalisation d’une discussion épinglée](/assets/images/help/discussions/customize-pinned-discussion.png)

1. Cliquez sur **Épingler la discussion**.

   ![Capture d’écran du bouton « Épingler la discussion » sous les options de personnalisation de la discussion épinglée](/assets/images/help/discussions/click-pin-discussion-button.png)

{% ifversion discussions-category-specific-pins %}
### Épinglage d’une discussion à une catégorie

Vous pouvez épingler jusqu’à quatre discussions importantes au-dessus de la liste des discussions d’une catégorie spécifique. 

{% data reusables.discussions.navigate-to-repo-or-org %} {% data reusables.discussions.discussions-tab %} {% data reusables.discussions.click-discussion-in-list %}
1. Dans la barre latérale droite, cliquez sur {% octicon "pin" aria-label="The pin icon" %} **Épingler la discussion à CATEGORY**.
   
   ![Capture d’écran de l’option « Épingler la discussion à CATEGORY » dans la barre latérale droite pour la discussion](/assets/images/help/discussions/pin-discussion-to-category.png)

2. Pour confirmer, cliquez sur **Épingler à CATEGORY**.

   ![Capture d’écran de la fenêtre modale « Épingler la discussion à CATEGORY »](/assets/images/help/discussions/pin-discussion-to-category-modal.png)

{% endif %}

## Modification d’une discussion épinglée

La modification d’une discussion épinglée ne change pas la catégorie de la discussion. Pour plus d’informations, consultez « [Gestion des catégories de discussion](/discussions/managing-discussions-for-your-community/managing-categories-for-discussions) ».

{% data reusables.discussions.navigate-to-repo-or-org %} {% data reusables.discussions.discussions-tab %} {% data reusables.discussions.click-discussion-in-list %}
1. Dans la barre latérale droite, cliquez sur {% octicon "pencil" aria-label="The pencil icon" %} **Modifier la discussion épinglée**.
  {% ifversion discussions-category-specific-pins %}

   ![Capture d’écran de l’option « Modifier la discussion épinglée » dans la barre latérale droite pour la discussion](/assets/images/help/discussions/edit-pinned-discussion-with-category-pins.png) {% else %}


   ![Capture d’écran de l’option « Modifier la discussion épinglée » dans la barre latérale droite pour la discussion](/assets/images/help/discussions/click-edit-pinned-discussion.png){% endif %}

1. Personnalisez l’apparence de la discussion épinglée.

  ![Capture d’écran des options de personnalisation d’une discussion épinglée](/assets/images/help/discussions/customize-pinned-discussion.png)

1. Cliquez sur **Épingler la discussion**.

  ![Capture d’écran du bouton « Épingler la discussion » sous les options de personnalisation de la discussion épinglée](/assets/images/help/discussions/click-pin-discussion-button.png)

## Désépinglage d’une discussion

{% ifversion discussions-category-specific-pins %}

Vous pouvez désépingler une discussion de la liste des discussions pour le référentiel ou l’organisation, ou de la liste des discussions d’une catégorie spécifique.

### Désépinglage d’une discussion épinglée globalement

Vous pouvez désépingler une discussion épinglée globalement. Cela ne supprimera pas la discussion, mais la discussion ne sera plus affichée au-dessus de la liste des discussions.
{% endif %}

{% data reusables.discussions.navigate-to-repo-or-org %} {% data reusables.discussions.discussions-tab %} {% data reusables.discussions.click-discussion-in-list %}
1. Dans la barre latérale droite, cliquez sur {% octicon "pin" aria-label="The pin icon" %} **Désépingler la discussion**.

  ![Capture d’écran de l’option « Désépingler la discussion » dans la barre latérale droite pour la discussion](/assets/images/help/discussions/click-unpin-discussion.png)

1. Lisez l’avertissement, puis cliquez sur **Désépingler la discussion**.

  ![Capture d’écran du bouton « Désépingler la discussion » sous l’avertissement dans la boîte de dialogue modale](/assets/images/help/discussions/click-unpin-discussion-button.png)

{% ifversion discussions-category-specific-pins %}
### Désépinglage d’une discussion d’une catégorie

Vous pouvez désépingler une discussion épinglée à une catégorie spécifique. Cela ne supprime pas la discussion, mais la discussion ne s’affiche plus en haut de la catégorie.

{% data reusables.discussions.navigate-to-repo-or-org %} {% data reusables.discussions.discussions-tab %} {% data reusables.discussions.click-discussion-in-list %}
1. Dans la barre latérale droite, cliquez sur {% octicon "pin" aria-label="The pin icon" %} **Désépingler la discussion de cette catégorie**.

   ![Capture d’écran de l’option « Désépingler la discussion de cette catégorie » dans la barre latérale droite pour la discussion](/assets/images/help/discussions/unpin-discussion-from-category.png)

1. Lisez l’avertissement, puis cliquez sur **Désépingler de cette catégorie**.

   ![Capture d’écran du bouton « Désépingler de cette catégorie » dans la fenêtre modale « Désépingler cette discussion de cette catégorie »](/assets/images/help/discussions/unpin-discussion-from-category-modal.png)

{% endif %}

## Transfert d’une discussion

Pour transférer une discussion, vous devez avoir l’autorisation de créer des discussions dans le dépôt où vous transférez la discussion. Si vous souhaitez transférer une discussion à une organisation, vous devez disposer des autorisations nécessaires pour créer des discussions dans le référentiel source des discussions de l’organisation. Vous pouvez uniquement transférer des discussions entre les dépôts appartenant au même compte d’utilisateur ou d’organisation. Vous ne pouvez pas transférer une discussion d’un dépôt privé{% ifversion ghec or ghes %} ou interne{% endif %} vers un dépôt public.

{% data reusables.discussions.navigate-to-repo-or-org %} {% data reusables.discussions.discussions-tab %} {% data reusables.discussions.click-discussion-in-list %}
1. Dans la barre latérale droite, cliquez sur {% octicon "arrow-right" aria-label="The right arrow icon" %} {% ifversion discussions-category-specific-pins %}**Transférer cette discussion**{% else %}**Transférer cette discussion**{% endif %}.
{% ifversion discussions-category-specific-pins %}

   ![Capture d’écran de l’option « Transférer la discussion » dans la barre latérale droite pour la discussion](/assets/images/help/discussions/transfer-discussion-with-category-pin.png) {% else %}

  
   ![Capture d’écran de l’option « Transférer la discussion » dans la barre latérale droite pour la discussion](/assets/images/help/discussions/click-transfer-discussion.png){% endif %}

1. Sélectionnez la liste déroulante **Choisir un dépôt** et cliquez sur le dépôt vers lequel vous voulez transférer la discussion. Si vous souhaitez transférer une discussion à une organisation, choisissez le référentiel source pour les discussions de l’organisation.

   ![Capture d’écran de la liste déroulante « Choisir un référentiel », champ de recherche « Rechercher un référentiel » et référentiel dans la liste](/assets/images/help/discussions/use-choose-a-repository-drop-down.png)

1. Cliquez sur **Transférer la discussion**.

   ![Capture d’écran du bouton « Transférer la discussion »](/assets/images/help/discussions/click-transfer-discussion-button.png)

## Suppression d’une discussion

{% data reusables.discussions.navigate-to-repo-or-org %} {% data reusables.discussions.discussions-tab %} {% data reusables.discussions.click-discussion-in-list %}
1. Dans la barre latérale droite, cliquez sur {% octicon "trash" aria-label="The trash arrow icon" %} **Supprimer la discussion**.
{% ifversion discussions-category-specific-pins %}

   ![Capture d’écran de l’option « Supprimer la discussion » dans la barre latérale droite pour la discussion](/assets/images/help/discussions/delete-discussion-with-category-pins.png){% else %}


   ![Capture d’écran de l’option « Supprimer la discussion » dans la barre latérale droite pour la discussion](/assets/images/help/discussions/click-delete-discussion.png){% endif %}

1. Lisez l’avertissement, puis cliquez sur **Supprimer cette discussion**.

   ![Capture d’écran du bouton « Supprimer cette discussion » sous l’avertissement dans la boîte de dialogue modale](/assets/images/help/discussions/click-delete-this-discussion-button.png)

## Conversion de problèmes en fonction d’étiquettes

Vous pouvez convertir en bloc en discussions tous les problèmes qui ont la même étiquette. Les futurs problèmes qui ont cette étiquette sont également convertis automatiquement en discussion dans la catégorie que vous configurez.

1. Sur {% data variables.location.product_location %}, accédez à la page principale du référentiel ou, pour les discussions de l’organisation, au référentiel source.
{% data reusables.repositories.sidebar-issues %} {% data reusables.project-management.labels %}
1. À côté de l’étiquette que vous voulez convertir en problème, cliquez sur **Convertir les problèmes**.
1. Sélectionnez le menu déroulant **Choisir une catégorie** et cliquez sur une catégorie pour votre discussion.
1. Cliquez sur **Je comprends, convertir ce problème en discussion**.

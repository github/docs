---
title: Gestion des branches
intro: Vous pouvez créer une branche à partir de la branche par défaut d’un dépôt afin de pouvoir tester les modifications sans risques.
redirect_from:
  - /desktop/contributing-to-projects/creating-a-branch-for-your-work
  - /desktop/contributing-to-projects/switching-between-branches
  - /desktop/contributing-to-projects/managing-branches
  - /desktop/contributing-and-collaborating-using-github-desktop/managing-branches
versions:
  fpt: '*'
ms.openlocfilehash: 30604c6b3ed0ab9ca5c0f3f8ca0fe853624ee86b
ms.sourcegitcommit: 80842b4e4c500daa051eff0ccd7cde91c2d4bb36
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/12/2022
ms.locfileid: '147886965'
---
## À propos de la gestion des branches
Vous pouvez utiliser les branches pour tester sans risques les changements apportés à votre projet. Les branches isolent votre travail de développement des autres branches du dépôt. Par exemple, vous pouvez utiliser une branche pour développer une nouvelle fonctionnalité ou résoudre un bogue.

Vous créez toujours une branche à partir d’une branche existante. En règle générale, vous pouvez créer une branche à partir de la branche par défaut de votre dépôt. Vous pouvez ensuite travailler sur cette nouvelle branche indépendamment des changements apportés au dépôt par d’autres personnes.

Vous pouvez également créer une branche à partir d’un commit précédent dans l’historique d’une branche. Cela peut être utile si vous devez retourner à une vue antérieure du dépôt pour investiguer un bogue ou pour créer un correctif logiciel ciblant votre dernière mise en production.

Une fois que vous êtes satisfait de votre travail, vous pouvez créer une demande de tirage (pull request) pour fusionner les changements que vous avez apportés dans la branche actuelle avec une autre branche. Pour plus d’informations, consultez « [Création d’un problème ou d’une demande de tirage](/desktop/contributing-to-projects/creating-an-issue-or-pull-request) » et « [À propos des demandes de tirage](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests) ».

Vous pouvez toujours créer une branche dans {% data variables.product.prodname_desktop %} si vous disposez d’un accès en lecture à un dépôt, mais vous pouvez uniquement pousser la branche vers {% data variables.product.prodname_dotcom %} si vous disposez d’un accès en écriture au dépôt.

{% data reusables.desktop.protected-branches %}

## Création d’une branche

{% tip %}

**Conseil** : La première branche que vous créez est basée sur la branche par défaut. Si vous avez plusieurs branches, vous pouvez baser la nouvelle branche sur la branche extraite ou sur la branche par défaut.

{% endtip %}

{% mac %}

{% data reusables.desktop.click-base-branch-in-drop-down %} ![Menu déroulant permettant de changer la branche actuelle](/assets/images/help/desktop/select-branch-from-dropdown.png) {% data reusables.desktop.create-new-branch %} ![Option Nouvelle branche du menu Branche](/assets/images/help/desktop/new-branch-button-mac.png) {% data reusables.desktop.name-branch %} ![Champ de création d’un nom pour la nouvelle branche](/assets/images/help/desktop/create-branch-name-mac.png) {% data reusables.desktop.select-base-branch %} ![Options relatives à la branche de base](/assets/images/help/desktop/create-branch-choose-branch-mac.png) {% data reusables.desktop.confirm-new-branch-button %} ![Bouton Créer une branche](/assets/images/help/desktop/create-branch-button-mac.png)

{% endmac %}

{% windows %}

{% data reusables.desktop.click-base-branch-in-drop-down %} ![Menu déroulant permettant de changer la branche actuelle](/assets/images/help/desktop/click-branch-in-drop-down-win.png) {% data reusables.desktop.create-new-branch %} ![Option Nouvelle branche du menu Branche](/assets/images/help/desktop/new-branch-button-win.png) {% data reusables.desktop.name-branch %} ![Champ de création d’un nom pour la nouvelle branche](/assets/images/help/desktop/create-branch-name-win.png) {% data reusables.desktop.select-base-branch %} ![Options relatives à la branche de base](/assets/images/help/desktop/create-branch-choose-branch-win.png) {% data reusables.desktop.confirm-new-branch-button %} ![Bouton Créer une branche](/assets/images/help/desktop/create-branch-button-win.png)

{% endwindows %}

## Création d’une branche à partir d’un commit précédent

{% data reusables.desktop.history-tab %}
2. Cliquez avec le bouton droit sur le commit à partir duquel vous souhaitez créer une branche, puis sélectionnez **Créer une branche à partir du commit**.
  ![Option Créer une branche à partir du commit dans le menu contextuel](/assets/images/help/desktop/create-branch-from-commit-context-menu.png) {% data reusables.desktop.name-branch %} {% data reusables.desktop.confirm-new-branch-button %} ![Créer une branche à partir du commit](/assets/images/help/desktop/create-branch-from-commit-overview.png)

## Publication d’une branche

Si vous créez une branche sur {% data variables.product.product_name %}, vous devez la publier pour la rendre disponible à des fins de collaboration sur {% data variables.product.prodname_dotcom %}.

1. En haut de l’application, cliquez sur {% octicon "git-branch" aria-label="The branch icon" %} **Branche actuelle**, puis sur la branche à publier.
  ![Menu déroulant permettant de sélectionner la branche à publier](/assets/images/help/desktop/select-branch-from-dropdown.png)
2. Cliquez sur **Publier la branche**.
  ![Bouton Publier la branche](/assets/images/help/desktop/publish-branch-button.png)

## Basculement entre les branches
Vous pouvez voir et effectuer des commits dans n’importe quelle branche de votre dépôt. Si vous avez des changements enregistrés non commités, vous devez décider quoi en faire avant de pouvoir changer de branche. Vous pouvez commiter vos changements dans la branche actuelle, faire un stash de vos changements pour les enregistrer temporairement dans la branche actuelle ou appliquer les changements à votre nouvelle branche. Si vous souhaitez commiter vos changements avant de changer de branche, consultez « [Commit et revue des changements apportés à votre projet](/desktop/contributing-to-projects/committing-and-reviewing-changes-to-your-project) ».
{% tip %}

**Conseil** : Vous pouvez définir un comportement par défaut pour le changement de branche dans **Avancé**. Pour plus d’informations, consultez « [Configuration des paramètres de base](/desktop/getting-started-with-github-desktop/configuring-basic-settings) ».

{% endtip %}

{% data reusables.desktop.current-branch-menu %} {% data reusables.desktop.switching-between-branches %} ![Liste des branches dans le dépôt](/assets/images/help/desktop/select-branch-from-dropdown.png)
3. Si vous avez des changements enregistrés, non commités, choisissez **Laisser mes changements** ou **Prendre mes changements**, puis cliquez sur **Changer de branche**.
  ![Changer de branche avec des options de changement](/assets/images/help/desktop/stash-changes-options.png)

## Suppression d’une branche

Vous ne pouvez pas supprimer une branche si elle est associée à une demande de tirage ouverte. Vous ne pouvez pas annuler la suppression d’une branche.

{% mac %}

{% data reusables.desktop.select-branch-to-delete %} ![Menu déroulant permettant de sélectionner la branche à supprimer](/assets/images/help/desktop/select-branch-from-dropdown.png) {% data reusables.desktop.delete-branch-mac %} ![Option Supprimer dans le menu Branche](/assets/images/help/desktop/delete-branch-mac.png)

{% endmac %}

{% windows %}

{% data reusables.desktop.select-branch-to-delete %} ![Menu déroulant permettant de sélectionner la branche à supprimer](/assets/images/help/desktop/select-branch-from-dropdown.png) {% data reusables.desktop.delete-branch-win %} ![Option Supprimer dans le menu Branche](/assets/images/help/desktop/delete-branch-win.png)

{% endwindows %}

## Pour aller plus loin

- « [Clonage d’un dépôt à partir de {% data variables.product.prodname_desktop %}](/desktop/guides/contributing-to-projects/cloning-a-repository-from-github-to-github-desktop) »
- « [Branche](/articles/github-glossary/#branch) » dans le glossaire de {% data variables.product.prodname_dotcom %}
- « [À propos des branches](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-branches) »
- « [Les branches en bref](https://git-scm.com/book/en/v2/Git-Branching-Branches-in-a-Nutshell) » dans la documentation de Git
- « [Stash des changements](/desktop/contributing-and-collaborating-using-github-desktop/stashing-changes) »

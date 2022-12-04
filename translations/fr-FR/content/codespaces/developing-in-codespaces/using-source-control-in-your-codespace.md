---
title: Utilisation du contrôle de code source dans votre espace de code
intro: 'Après avoir apporté des modifications à un fichier dans votre espace de code, vous pouvez commiter rapidement les modifications et pousser (push) votre mise à jour vers le dépôt distant.'
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
  - Fundamentals
  - Developer
shortTitle: Source control
ms.openlocfilehash: 513bf0729e1f04bf93f45999b2fa9e45231add5c
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 11/09/2022
ms.locfileid: '148159640'
---
{% jetbrains %}

{% data reusables.codespaces.codespaces-jetbrains-beta-note %}

{% endjetbrains %}

## À propos du contrôle de code source dans {% data variables.product.prodname_github_codespaces %}

Vous pouvez effectuer toutes les actions Git dont vous avez besoin directement dans votre espace de code. Par exemple, vous pouvez extraire des modifications à partir d’un dépôt distant, échanger des branches, créer une branche, commiter et pousser des modifications, et créer une demande de tirage. Vous pouvez utiliser le terminal intégré dans votre espace de code pour entrer des commandes Git, ou vous pouvez cliquer sur des icônes et des options de menu pour effectuer toutes les tâches Git les plus courantes. Ce guide explique comment utiliser l’interface utilisateur graphique pour le contrôle de code source.

{% vscode %}

Pour plus d’informations sur la prise en charge de Git dans {% data variables.product.prodname_vscode %}, consultez « [Utilisation de la gestion de versions dans VS Code](https://code.visualstudio.com/docs/editor/versioncontrol#_git-support) » dans la documentation de {% data variables.product.prodname_vscode %}.

{% endvscode %}

{% webui %}

Le contrôle de code source dans le client web {% data variables.product.prodname_vscode %} utilise le même workflow que l’application de bureau {% data variables.product.prodname_vscode %}. Pour plus d’informations, consultez « [Utilisation de la gestion de versions dans VS Code](https://code.visualstudio.com/docs/editor/versioncontrol#_git-support) » dans la documentation de {% data variables.product.prodname_vscode %}.

{% endwebui %}

Un workflow classique pour la mise à jour d’un fichier à l’aide de {% data variables.product.prodname_github_codespaces %} serait :

* À partir de la branche par défaut de votre dépôt sur {% data variables.product.prodname_dotcom %}, créez un espace de code. Consultez « [Création d’un codespace pour un dépôt](/codespaces/developing-in-codespaces/creating-a-codespace-for-a-repository) ».
* Dans votre espace de code, créez une nouvelle branche sur laquelle travailler.
* Apportez vos modifications, puis enregistrez-les.
* Validez la modification.
* Créez une demande de tirage (pull request).

{% webui %}

{% data reusables.codespaces.source-control %} 

{% endwebui %}

{% vscode %}

{% data reusables.codespaces.source-control %} 

{% endvscode %}

{% jetbrains %}

## Création ou changement de branches

1. Cliquez sur le nom de la branche à droite de la barre d’état.

   ![Capture d’écran du nom de la branche dans la barre d’état](/assets/images/help/codespaces/jetbrains-branch-button.png)

1. Dans le menu contextuel, effectuez l’une des opérations suivantes :
   * Pour créer une branche basée sur la branche actuelle, cliquez sur le nom de la branche actuelle, puis choisissez **New Branch** (Nouvelle branche). 

     ![Capture d’écran de l’option New Branch](/assets/images/help/codespaces/jetbrains-new-branch-option.png)

     Entrez un nom pour la nouvelle branche, puis cliquez sur **Create** (Créer).

     ![Capture d’écran de la boîte de dialogue de création de branche](/assets/images/help/codespaces/jetbrains-create-branch-dialog.png)

   * Pour extraire une branche existante, commencez à taper son nom. Cliquez sur la branche dans la liste, puis cliquez sur **Checkout** (Extraire).

     ![Capture d’écran de l’option Checkout](/assets/images/help/codespaces/jetbrains-checkout-submenu.png)

     {% tip %}

     **Conseil** : Si quelqu’un a récemment changé un fichier sur le dépôt distant, dans la branche vers laquelle vous avez basculé, il est possible que vous ne voyiez pas ces modifications tant que vous n’avez pas tiré les modifications dans votre codespace. 

     {% endtip %}


## Validation (commit) de vos modifications 

1. Sur le côté droit de la barre de navigation, cliquez sur la coche.

   ![Capture d’écran de la coche de commit](/assets/images/help/codespaces/jetbrains-commit-button.png)

1. Dans la boîte de dialogue Commit Changes (Commiter les modifications), entrez un message de commit.
1. Cliquez sur **Valider**.

   Vous pouvez également cliquer sur la flèche vers le bas en regard de **Commit**, puis sur **Commit and Push** (Commiter et pousser).

   ![Capture d’écran du bouton Commit and Push](/assets/images/help/codespaces/jetbrains-commit-and-push.png)

## Tirage de modifications à partir du dépôt distant

Vous pouvez extraire les modifications de la même branche sur le dépôt distant et appliquer ces modifications à la copie du dépôt sur lequel vous travaillez dans votre codespace.

1. Sur le côté droit de la barre de navigation, cliquez sur la flèche pointant vers le bas.

   ![Capture d’écran du bouton flèche vers le bas de mise à jour du projet](/assets/images/help/codespaces/jetbrains-update-project-button.png)

1. Dans la boîte de dialogue Update Project (Mettre à jour le projet), indiquez si vous souhaitez fusionner ou rebaser les modifications entrantes.

   ![Capture d’écran de la boîte de dialogue Update Project](/assets/images/help/codespaces/jetbrains-update-options.png)

1. Cliquez sur **OK**.

## Poussée (push) de modifications vers votre dépôt distant

Vous pouvez pousser les modifications que vous avez enregistrées et commitées. Cette opération applique ces modifications à la branche en amont sur le référentiel distant. Vous souhaitez peut-être effectuer cette opération si vous n’êtes pas encore prêt à créer une demande de tirage (pull request) ou si vous préférez créer une demande de tirage (pull request) sur {% data variables.product.prodname_dotcom %}.

1. Sur le côté droit de la barre de navigation, cliquez sur la flèche pointant vers le haut.

   ![Capture d’écran de la flèche vers le haut de poussée des commits](/assets/images/help/codespaces/jetbrains-push-button.png)

1. Dans la boîte de dialogue Pousser les commits, cliquez sur **Push** (Pousser).

{% endjetbrains %}

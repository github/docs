---
title: "Ajout d’un badge «\_Ouvrir dans GitHub Codespaces\_»"
shortTitle: Add a Codespaces badge
intro: 'Vous pouvez ajouter un badge à un fichier Markdown dans votre dépôt, sur lequel les utilisateurs peuvent cliquer pour créer un codespace.'
allowTitleToDifferFromFilename: true
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
  - Set up
ms.openlocfilehash: c69a815501f5943a56d32af3e58cd7850a69588b
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 11/09/2022
ms.locfileid: '148158780'
---
## Vue d'ensemble

L’ajout d’un badge « Ouvrir dans {% data variables.product.prodname_github_codespaces %} » à un fichier Markdown permet aux utilisateurs de créer facilement un codespace pour votre dépôt.

![Capture d’écran d’un badge Codespaces sur une page README](/assets/images/help/codespaces/codespaces-badge-on-readme.png)

Quand vous créez un badge, vous pouvez choisir des options de configuration spécifiques pour le codespace que le badge va créer.

Quand les utilisateurs cliquent sur le badge, ils accèdent à la page des options avancées de création d’un codespace, avec les options que vous avez choisies présélectionnées. Pour plus d’informations sur la page des options avancées, consultez « [Création d’un codespace pour un dépôt](/codespaces/developing-in-codespaces/creating-a-codespace-for-a-repository#creating-a-codespace-for-a-repository) ».

Dans la page des options avancées, les utilisateurs peuvent modifier les paramètres présélectionnés si nécessaire, puis cliquer sur **Créer un codespace**.

## Création d’un badge « Ouvrir dans {% data variables.product.prodname_github_codespaces %} »

{% data reusables.repositories.navigate-to-repo %}
1. Sous le nom du dépôt, utilisez le menu déroulant « Branche », puis sélectionnez la branche pour laquelle vous voulez créer le badge.

   ![Capture d’écran du menu déroulant Branche](/assets/images/help/codespaces/branch-drop-down.png)

1. Cliquez sur le bouton **{% octicon "code" aria-label="The code icon" %} Code**, puis sur l’onglet **Codespaces**.

   ![Capture d’écran du bouton Nouveau codespace](/assets/images/help/codespaces/new-codespace-button.png)

1. Cliquez sur les points de suspension ( **...** ) en haut à droite de l’onglet **Codespaces**, puis cliquez sur **Nouveau avec des options**.

   ![Capture d’écran de l’option « Configurer et créer un codespace »](/assets/images/help/codespaces/default-machine-type.png)

1. Dans la page des options avancées de création d’un codespace, sélectionnez les valeurs que vous voulez présélectionner dans chaque champ.

   ![Capture d’écran de la page des options avancées.](/assets/images/help/codespaces/advanced-options.png)

1. Copiez l’URL de la barre d’adresses du navigateur.
1. Ajoutez, par exemple, le Markdown suivant au fichier `README.md` de votre dépôt :

   ```Markdown{:copy}
   [![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](COPIED-URL)
   ```

   Par exemple :

   ```Markdown
   [![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://github.com/codespaces/new?hide_repo_select=true&ref=main&repo=0000000&machine=premiumLinux&devcontainer_path=.devcontainer%2Fdevcontainer.json&location=WestUs2)
   ```

   Dans l’exemple ci-dessus, `0000000` correspond au numéro de référence de votre dépôt. Les autres détails inclus dans l’URL sont déterminés par les valeurs que vous avez sélectionnées dans les champs de la page des options avancées.

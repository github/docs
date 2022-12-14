---
title: Utilisation de Codespaces dans Visual Studio Code
intro: Vous pouvez développer dans votre espace de code directement dans {% data variables.product.prodname_vscode %} en connectant l’extension {% data variables.product.prodname_github_codespaces %} avec votre compte sur {% data variables.product.product_name %}.
product: '{% data reusables.gated-features.codespaces %}'
redirect_from:
- /github/developing-online-with-codespaces/using-codespaces-in-visual-studio-code
- /github/developing-online-with-codespaces/connecting-to-your-codespace-from-visual-studio-code
- /github/developing-online-with-codespaces/using-codespaces-in-visual-studio
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
- Codespaces
- Visual Studio Code
- Developer
shortTitle: Visual Studio Code
ms.openlocfilehash: b49a0504dd939a18c34073176e11359725cac7e9
ms.sourcegitcommit: dc42bb4a4826b414751ffa9eed38962c3e3fea8e
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 07/13/2022
ms.locfileid: "145148767"
---
## <a name="about--data-variablesproductprodname_codespaces--in--data-variablesproductprodname_vscode-"></a>À propos de {% data variables.product.prodname_codespaces %} dans {% data variables.product.prodname_vscode %}

Vous pouvez utiliser votre installation locale de {% data variables.product.prodname_vscode %} pour créer, gérer, utiliser et supprimer des codespaces. Pour utiliser {% data variables.product.prodname_codespaces %} dans {% data variables.product.prodname_vscode_shortname %}, vous devez installer l’extension {% data variables.product.prodname_github_codespaces %}. Pour plus d’informations sur la configuration de Codespaces dans {% data variables.product.prodname_vscode_shortname %}, consultez « [Prérequis](#prerequisites) ».

Par défaut, si vous créez un codespace sur {% data variables.product.prodname_dotcom_the_website %}, il s’ouvre dans le navigateur. Si vous préférez que les nouveaux codespaces s’ouvrent automatiquement dans {% data variables.product.prodname_vscode_shortname %}, vous pouvez définir {% data variables.product.prodname_vscode_shortname %} comme éditeur par défaut. Pour plus d’informations, consultez « [Définition de votre éditeur par défaut pour {% data variables.product.prodname_codespaces %}](/codespaces/managing-your-codespaces/setting-your-default-editor-for-codespaces) ».

Si vous préférez travailler dans le navigateur, mais que vous souhaitez continuer à utiliser vos extensions, thèmes et raccourcis {% data variables.product.prodname_vscode_shortname %} existants, vous pouvez activer la fonctionnalité Synchronisation des paramètres. Pour plus d’informations, consultez « [Personnalisation de {% data variables.product.prodname_codespaces %} pour votre compte](/codespaces/customizing-your-codespace/personalizing-codespaces-for-your-account#settings-sync) ».

## <a name="prerequisites"></a>Prérequis

Pour développer à partir d’un codespace directement dans {% data variables.product.prodname_vscode_shortname %}, vous devez installer et vous connecter à l’extension {% data variables.product.prodname_github_codespaces %} avec vos informations d’identification {% data variables.product.product_name %}. L’extension {% data variables.product.prodname_github_codespaces %} requiert la version 1.51 d’octobre 2020 de {% data variables.product.prodname_vscode_shortname %} (ou version ultérieure).

Utilisez {% data variables.product.prodname_vscode_marketplace %} pour installer l’extension [{% data variables.product.prodname_github_codespaces %}](https://marketplace.visualstudio.com/items?itemName=GitHub.codespaces). Pour plus d’informations, consultez [Place de marché des extensions](https://code.visualstudio.com/docs/editor/extension-gallery) dans la documentation {% data variables.product.prodname_vscode_shortname %}.


{% mac %}

{% data reusables.codespaces.click-remote-explorer-icon-vscode %}
1. Cliquez sur **Se connecter pour afficher {% data variables.product.prodname_dotcom %}...** .

   ![Se connecter pour afficher {% data variables.product.prodname_codespaces %}](/assets/images/help/codespaces/sign-in-to-view-codespaces-vscode-mac.png)

2. Pour autoriser {% data variables.product.prodname_vscode_shortname %} à accéder à votre compte sur {% data variables.product.product_name %}, cliquez sur **Autoriser**.
3. Connectez-vous à {% data variables.product.product_name %} pour approuver l’extension.

{% endmac %}

{% windows %}

{% data reusables.codespaces.click-remote-explorer-icon-vscode %}
1. Utilisez le menu déroulant « EXPLORATEUR DISTANT », puis cliquez sur **{% data variables.product.prodname_github_codespaces %}** .

   ![En-tête {% data variables.product.prodname_codespaces %}](/assets/images/help/codespaces/codespaces-header-vscode.png)

1. Cliquez sur **Se connecter pour afficher {% data variables.product.prodname_codespaces %}...** .

   ![Se connecter pour afficher {% data variables.product.prodname_codespaces %}](/assets/images/help/codespaces/sign-in-to-view-codespaces-vscode.png)

1. Pour autoriser {% data variables.product.prodname_vscode_shortname %} à accéder à votre compte sur {% data variables.product.product_name %}, cliquez sur **Autoriser**.
1. Connectez-vous à {% data variables.product.product_name %} pour approuver l’extension.

{% endwindows %}

## <a name="creating-a-codespace-in--data-variablesproductprodname_vscode_shortname-"></a>Création d’un codespace dans {% data variables.product.prodname_vscode_shortname %}

{% data reusables.codespaces.creating-a-codespace-in-vscode %}

## <a name="opening-a-codespace-in--data-variablesproductprodname_vscode_shortname-"></a>Ouverture d’un codespace dans {% data variables.product.prodname_vscode_shortname %}

{% data reusables.codespaces.click-remote-explorer-icon-vscode %}
1. Sous « Codespaces », cliquez sur le codespace dans lequel vous souhaitez développer.
1. Cliquez sur l’icône de connexion au codespace.

   ![Icône de connexion au codespace dans {% data variables.product.prodname_vscode_shortname %}](/assets/images/help/codespaces/click-connect-to-codespace-icon-vscode.png)

## <a name="changing-the-machine-type-in--data-variablesproductprodname_vscode_shortname-"></a>Modification du type de machine dans {% data variables.product.prodname_vscode_shortname %}

{% data reusables.codespaces.codespaces-machine-types %} Vous pouvez à tout moment modifier le type de machine de votre codespace.

1. Dans {% data variables.product.prodname_vscode_shortname %}, ouvrez la palette de commandes (`shift command P` / `shift control P`).
1. Recherchez et sélectionnez « Codespaces : Modifier le type de machine ».

   ![Recherche d’une branche pour créer un nouveau {% data variables.product.prodname_codespaces %}](/assets/images/help/codespaces/vscode-change-machine-type-option.png)

1. Cliquez sur le codespace que vous souhaitez modifier.

   ![Recherche d’une branche pour créer un nouveau {% data variables.product.prodname_codespaces %}](/assets/images/help/codespaces/vscode-change-machine-choose-repo.png)

1. Choisissez le type de machine que vous souhaitez utiliser. 

   {% note %}

   **Remarque** : {% data reusables.codespaces.codespaces-machine-type-availability %}

   {% endnote %}

1. Si le codespace est en cours d’exécution, un message s’affiche pour vous demander si vous souhaitez redémarrer et vous reconnecter tout de suite à votre codespace.

   Cliquez sur **Oui** si vous souhaitez modifier tout de suite le type de machine utilisé pour ce codespace.
   
   Si vous cliquez sur **Non** ou si le codespace n’est pas en cours d’exécution, la modification prendra effet au prochain redémarrage du codespace.

## <a name="deleting-a-codespace-in--data-variablesproductprodname_vscode_shortname-"></a>Suppression d’un codespace dans {% data variables.product.prodname_vscode_shortname %}

{% data reusables.codespaces.deleting-a-codespace-in-vscode %}

## <a name="switching-to-the-insiders-build-of--data-variablesproductprodname_vscode_shortname-"></a>Passage à la build Insiders de {% data variables.product.prodname_vscode_shortname %}

Vous pouvez utiliser la [build Insiders de {% data variables.product.prodname_vscode_shortname %}](https://code.visualstudio.com/docs/setup/setup-overview#_insiders-nightly-build) dans {% data variables.product.prodname_codespaces %}.

1. En bas à gauche de la fenêtre {% data variables.product.prodname_codespaces %}, sélectionnez **{% octicon "gear" aria-label="The settings icon" %} Paramètres**.
2. Dans la liste, sélectionnez « Passer à la version Insiders ».

   ![Cliquer sur « Build Insiders » dans {% data variables.product.prodname_codespaces %}](/assets/images/help/codespaces/codespaces-insiders-vscode.png)
3. Une fois cette option sélectionnée, {% data variables.product.prodname_codespaces %} continuera à s’ouvrir dans la version Insiders.

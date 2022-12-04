---
title: Utilisation de GitHub Copilot dans GitHub Codespaces
intro: 'Vous pouvez utiliser {% data variables.product.prodname_copilot %} dans {% data variables.product.prodname_github_codespaces %} en ajoutant l’extension.'
versions:
  fpt: '*'
  ghec: '*'
type: reference
topics:
  - Codespaces
  - Copilot
  - Visual Studio Code
shortTitle: Copilot in Codespaces
redirect_from:
  - /codespaces/codespaces-reference/using-copilot-in-codespaces
  - /codespaces/codespaces-reference/using-github-copilot-in-codespaces
ms.openlocfilehash: 6615df6930fa8f27dd8f50c4588d8182b8602549
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 11/09/2022
ms.locfileid: '148158724'
---
{% jetbrains %}

{% data reusables.codespaces.codespaces-jetbrains-beta-note %}

{% endjetbrains %}

{% webui %}

## Utilisation de {% data variables.product.prodname_copilot %} dans le client web {% data variables.product.prodname_vscode_shortname %}

{% data reusables.codespaces.copilot-in-vscode %}

{% endwebui %}

{% vscode %}

## Utilisation de {% data variables.product.prodname_copilot %} dans {% data variables.product.prodname_vscode %}

{% data reusables.codespaces.copilot-in-vscode %}

{% endvscode %}

{% jetbrains %}

## Installation de {% data variables.product.prodname_copilot %} dans votre IDE JetBrains

[Vous pouvez utiliser {% data variables.product.prodname_copilot %}](https://copilot.github.com/), un programmeur en binôme d’IA, dans un codespace. Pour plus d’informations, consultez « [À propos de GitHub Copilot](/copilot/overview-of-github-copilot/about-github-copilot) ».

Pour utiliser {% data variables.product.prodname_copilot %} dans un codespace au sein de votre IDE JetBrains, installez le [plug-in {% data variables.product.prodname_copilot %}](https://plugins.jetbrains.com/plugin/17718-github-copilot) à partir de votre codespace.

{% note %}

**Remarque** : Vous devez installer le plug-in {% data variables.product.prodname_copilot %} chaque fois que vous créez un codespace.

{% endnote %}

1. Dans l’application cliente JetBrains, ouvrez la boîte de dialogue Settings (Paramètres) (Windows/Linux) ou Preferences (Mac) :

   - **Windows/Linux** : cliquez sur **File** (Fichier), puis sur **Settings** (Paramètres) (ou <kbd>appuyez sur Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>S</kbd>)
   - **Mac** : cliquez sur **JetBrains Client** (Client JetBrains) dans la barre de menus macOS, puis sur **Preferences** (ou appuyez sur <kbd>commande</kbd>+<kbd>,</kbd>).

1. Dans le menu de gauche de la boîte de dialogue Settings/Preferences, cliquez sur **Plugins On Host** (Plug-ins sur l’hôte). Cliquez ensuite sur l’onglet **Marketplace** (Place de marché).

   ![Capture d’écran de l’onglet Marketplace pour « Plugins On Host »](/assets/images/help/codespaces/jetbrains-preferences-plugins.png)

1. Dans la zone de recherche, tapez « copilot », puis cliquez sur le bouton **Install** pour le plug-in {% data variables.product.prodname_copilot %}.

   ![Capture d’écran du plug-in {% data variables.product.prodname_copilot %}](/assets/images/help/codespaces/jetbrains-copilot-plugin.png)

1. Cliquez sur **Accept** dans la boîte de dialogue « Third-Party Plugins Privacy Note » (Note de confidentialité sur les plug-ins tiers).
1. Cliquez sur **Restart IDE** (Redémarrer l’IDE).

   ![Capture d’écran du plug-in {% data variables.product.prodname_copilot %}](/assets/images/help/codespaces/jetbrains-copilot-restart.png)
 
1. Cliquez sur **Restart** (Redémarrer) quand vous êtes invité à confirmer que vous souhaitez redémarrer l’IDE back-end qui s’exécute à distance. L’application cliente JetBrains se ferme quand vous effectuez cette opération.
1. Rouvrez le codespace à partir de l’application JetBrains Gateway. Pour plus d’informations, consultez « [Utilisation de {% data variables.product.prodname_github_codespaces %} dans votre IDE JetBrains](/codespaces/developing-in-codespaces/using-github-codespaces-in-your-jetbrains-ide#opening-a-codespace-in-your-jetbrains-ide) ».
1. Une fois votre IDE JetBrains redémarré, cliquez sur le menu **Outils**. Cliquez sur **{% data variables.product.prodname_copilot %}** , puis cliquez sur **Se connecter à {% data variables.product.prodname_dotcom %}** . 

    ![Capture d’écran du menu Tools (Outils) de JetBrains](/assets/images/help/codespaces/jetbrains-tools-menu.png)

1. Dans la boîte de dialogue « Se connecter à {% data variables.product.prodname_dotcom %} », pour copier le code de l’appareil et ouvrir la fenêtre d’activation de l’appareil, cliquez sur **Copier et ouvrir**.

    ![Capture d’écran de la copie et de l’ouverture du code de l’appareil](/assets/images/help/copilot/device-code-copy-and-open.png)

1. Une fenêtre d’activation d’appareil s’ouvrira dans votre navigateur. Collez le code de l’appareil, puis cliquez sur **Continuer**.

   - Pour coller le code sur un système Windows ou Linux, appuyez sur <kbd>Ctrl</kbd>+<kbd>v</kbd>.
   - Pour coller le code sur un système macOS, appuyez sur <kbd>commande</kbd>+<kbd>v</kbd>.
1. {% data variables.product.prodname_dotcom %} demandera les autorisations nécessaires pour {% data variables.product.prodname_copilot %}. Pour approuver ces autorisations, cliquez sur **Autoriser le plug-in {% data variables.product.prodname_copilot %}** .
1. Une fois les autorisations approuvées, votre IDE JetBrains affichera une confirmation. Pour commencer à utiliser {% data variables.product.prodname_copilot %}, cliquez sur **OK**.

   ![Capture d’écran de la confirmation des autorisations IDE JetBrains](/assets/images/help/copilot/jetbrains-ide-confirmation.png)

## Pour aller plus loin

- « [Bien démarrer avec GitHub Copilot dans un IDE JetBrains](/copilot/getting-started-with-github-copilot/getting-started-with-github-copilot-in-a-jetbrains-ide) »

{% endjetbrains %}

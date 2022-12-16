---
title: Utilisation de GitHub Codespaces dans Visual Studio Code
shortTitle: Visual Studio Code
intro: 'Vous pouvez développer dans votre espace de code directement dans {% data variables.product.prodname_vscode %} en connectant l’extension {% data variables.product.prodname_github_codespaces %} avec votre compte sur {% data variables.product.product_name %}.'
redirect_from:
  - /github/developing-online-with-codespaces/using-codespaces-in-visual-studio-code
  - /github/developing-online-with-codespaces/connecting-to-your-codespace-from-visual-studio-code
  - /github/developing-online-with-codespaces/using-codespaces-in-visual-studio
  - /codespaces/developing-in-codespaces/using-codespaces-in-visual-studio-code
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
  - Visual Studio Code
  - Developer
ms.openlocfilehash: c651620e2795fb29f2b995f745ad3880e99c0f4e
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 11/09/2022
ms.locfileid: '148159600'
---
## À propos de {% data variables.product.prodname_github_codespaces %} dans {% data variables.product.prodname_vscode %}

Vous pouvez utiliser votre installation locale de {% data variables.product.prodname_vscode %} pour créer, gérer, utiliser et supprimer des codespaces. {% data reusables.codespaces.using-codespaces-in-vscode %} Pour plus d’informations sur la configuration de {% data variables.product.prodname_github_codespaces %} dans {% data variables.product.prodname_vscode_shortname %}, consultez « [Prérequis](#prerequisites) ».

Par défaut, si vous créez un codespace sur {% data variables.product.prodname_dotcom_the_website %}, il s’ouvre dans le navigateur. Si vous préférez que les nouveaux codespaces s’ouvrent automatiquement dans {% data variables.product.prodname_vscode_shortname %}, vous pouvez définir {% data variables.product.prodname_vscode_shortname %} comme éditeur par défaut. Pour plus d’informations, consultez « [Définition de votre éditeur par défaut pour {% data variables.product.prodname_github_codespaces %}](/codespaces/customizing-your-codespace/setting-your-default-editor-for-github-codespaces) ».

Si vous préférez travailler dans le navigateur, mais que vous souhaitez continuer à utiliser vos extensions, thèmes et raccourcis {% data variables.product.prodname_vscode_shortname %} existants, vous pouvez activer la fonctionnalité Synchronisation des paramètres. Pour plus d’informations, consultez « [Personnalisation de {% data variables.product.prodname_github_codespaces %} pour votre compte](/codespaces/customizing-your-codespace/personalizing-github-codespaces-for-your-account#settings-sync) ».

## Prérequis

Pour développer à partir d’un codespace directement dans {% data variables.product.prodname_vscode_shortname %}, vous devez installer et vous connecter à l’extension {% data variables.product.prodname_github_codespaces %} avec vos informations d’identification {% data variables.product.product_name %}. L’extension {% data variables.product.prodname_github_codespaces %} requiert la version 1.51 d’octobre 2020 de {% data variables.product.prodname_vscode_shortname %} (ou version ultérieure).

Utilisez {% data variables.product.prodname_vscode_marketplace %} pour installer l’extension [{% data variables.product.prodname_github_codespaces %}](https://marketplace.visualstudio.com/items?itemName=GitHub.codespaces). Pour plus d’informations, consultez [Place de marché des extensions](https://code.visualstudio.com/docs/editor/extension-gallery) dans la documentation {% data variables.product.prodname_vscode_shortname %}.


{% mac %}

{% data reusables.codespaces.click-remote-explorer-icon-vscode %}
1. Cliquez sur **Se connecter à {% data variables.product.prodname_dotcom %}...** .

   ![Connexion à {% data variables.product.prodname_github_codespaces %}](/assets/images/help/codespaces/sign-in-to-view-codespaces-vscode-mac.png)

2. Pour autoriser {% data variables.product.prodname_vscode_shortname %} à accéder à votre compte sur {% data variables.product.product_name %}, cliquez sur **Autoriser**.
3. Connectez-vous à {% data variables.product.product_name %} pour approuver l’extension.

{% endmac %}

{% windows %}

{% data reusables.codespaces.click-remote-explorer-icon-vscode %}
1. Utilisez le menu déroulant « EXPLORATEUR DISTANT », puis cliquez sur **{% data variables.product.prodname_github_codespaces %}** .

   ![L’en-tête {% data variables.product.prodname_github_codespaces %}](/assets/images/help/codespaces/codespaces-header-vscode.png)

1. Cliquez sur **Se connecter pour afficher {% data variables.product.prodname_codespaces %}** .

   ![Connexion pour afficher {% data variables.product.prodname_github_codespaces %}](/assets/images/help/codespaces/sign-in-to-view-codespaces-vscode.png)

1. Pour autoriser {% data variables.product.prodname_vscode_shortname %} à accéder à votre compte sur {% data variables.product.product_name %}, cliquez sur **Autoriser**.
1. Connectez-vous à {% data variables.product.product_name %} pour approuver l’extension.

{% endwindows %}

## Création d’un codespace dans {% data variables.product.prodname_vscode_shortname %}

{% data reusables.codespaces.creating-a-codespace-in-vscode %}

## Ouverture d’un codespace dans {% data variables.product.prodname_vscode_shortname %}

{% data reusables.codespaces.click-remote-explorer-icon-vscode %}
1. Sous « Codespaces », cliquez sur le codespace dans lequel vous souhaitez développer.
1. Cliquez sur l’icône de connexion au codespace.

   ![Icône de connexion au codespace dans {% data variables.product.prodname_vscode_shortname %}](/assets/images/help/codespaces/click-connect-to-codespace-icon-vscode.png)

## Modification du type de machine dans {% data variables.product.prodname_vscode_shortname %}

{% data reusables.codespaces.codespaces-machine-types %} Vous pouvez à tout moment modifier le type de machine de votre codespace.

{% note %}

**Remarque** : {% data reusables.codespaces.codespaces-machine-type-availability %}

{% endnote %}

{% data reusables.codespaces.changing-machine-type-in-vscode %}

{% data reusables.codespaces.about-changing-storage-size %}

## Suppression d’un codespace dans {% data variables.product.prodname_vscode_shortname %}

{% data reusables.codespaces.deleting-a-codespace-in-vscode %}

## Passage à la build Insiders de {% data variables.product.prodname_vscode_shortname %}

Vous pouvez utiliser la [build Insiders de {% data variables.product.prodname_vscode_shortname %}](https://code.visualstudio.com/docs/setup/setup-overview#_insiders-nightly-build) dans {% data variables.product.prodname_github_codespaces %}.

1. En bas à gauche de la fenêtre {% data variables.product.prodname_github_codespaces %}, sélectionnez **{% octicon "gear" aria-label="The settings icon" %} Paramètres**.
2. Dans la liste, sélectionnez « Passer à la version Insiders ».

   ![Cliquer sur « Build Insiders » dans {% data variables.product.prodname_github_codespaces %}](/assets/images/help/codespaces/codespaces-insiders-vscode.png)

3. Une fois cette option sélectionnée, {% data variables.product.prodname_github_codespaces %} continuera à s’ouvrir dans la version Insiders.

## Pour aller plus loin

- « [Utilisation de la {% data variables.product.prodname_vscode_command_palette %} dans {% data variables.product.prodname_github_codespaces %}](/codespaces/codespaces-reference/using-the-vs-code-command-palette-in-codespaces) »
- « [Utilisation de {% data variables.product.prodname_copilot %} dans {% data variables.product.prodname_github_codespaces %}](/codespaces/codespaces-reference/using-github-copilot-in-github-codespaces) »

---
title: Définition de votre éditeur par défaut pour GitHub Codespaces
shortTitle: Set the default editor
intro: '{% data reusables.codespaces.about-changing-default-editor %}'
versions:
  fpt: '*'
  ghec: '*'
redirect_from:
  - /codespaces/managing-your-codespaces/setting-your-default-editor-for-codespaces
  - /codespaces/customizing-your-codespace/setting-your-default-editor-for-codespaces
topics:
  - Codespaces
type: how_to
ms.openlocfilehash: 5c286ffe8f96d275dc0b20949a87b7ced411c9af
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 11/09/2022
ms.locfileid: '148159607'
---
Dans la page des paramètres, vous pouvez définir votre éditeur favori afin que quand vous créez un codespace ou ouvrez un codespace existant, celui-ci soit ouvert dans l’un des outils suivants :
* {% data variables.product.prodname_vscode %} (application de bureau)
* {% data variables.product.prodname_vscode %} (application cliente web)
* JetBrains Gateway : pour ouvrir des codespaces dans un IDE JetBrains
* JupyterLab : interface web de Project Jupyter 

{% data reusables.codespaces.template-codespaces-default-editor %}

Si vous souhaitez utiliser {% data variables.product.prodname_vscode %} comme éditeur par défaut pour {% data variables.product.prodname_github_codespaces %}, vous devez installer {% data variables.product.prodname_vscode %} et l’extension {% data variables.product.prodname_github_codespaces %} pour {% data variables.product.prodname_vscode %}. Pour plus d’informations, consultez la [page de téléchargement pour {% data variables.product.prodname_vscode %}](https://code.visualstudio.com/download/) et l’extension [{% data variables.product.prodname_github_codespaces %} sur la place de marché {% data variables.product.prodname_vscode %}](https://marketplace.visualstudio.com/items?itemName=GitHub.codespaces).

Si vous souhaitez travailler sur un codespace dans un IDE JetBrains, vous devez installer JetBrains Gateway. Pour plus d’informations, consultez « [Utilisation de {% data variables.product.prodname_github_codespaces %} dans votre IDE JetBrains](/codespaces/developing-in-codespaces/using-github-codespaces-in-your-jetbrains-ide) ».

## Définition de votre éditeur de texte par défaut

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.codespaces-tab %}
1. Sous « Préférence de l’éditeur », sélectionnez l’option souhaitée.

   ![Définition de votre éditeur](/assets/images/help/codespaces/select-default-editor.png)

   * {% data reusables.codespaces.application-installed-locally %}<br><br>

   * Si vous choisissez **{% data variables.product.prodname_vscode %}** , {% data variables.product.prodname_github_codespaces %} s’ouvre automatiquement dans l’application de bureau la prochaine fois que vous créez ou ouvrez un codespace. 

     Vous devez peut-être autoriser à la fois à l’accès à votre navigateur et à {% data variables.product.prodname_vscode %} pour qu’il s’ouvre correctement.<br><br>
     
   * Si vous choisissez **JetBrains Gateway**, l’application Gateway s’ouvre automatiquement la prochaine fois que vous créez ou ouvrez un codespace. 

     La première fois que vous ouvrez un codespace de cette façon, vous devez accorder l’autorisation d’ouvrir l’application. 

     L’application Gateway s’ouvre et le codespace est alors automatiquement sélectionné. Vous pouvez ensuite choisir un IDE JetBrains, si vous ne l’avez pas déjà fait, puis cliquer sur **Connect** (Se connecter) pour ouvrir le codespace dans le client JetBrains. Pour plus d’informations, consultez « [Utilisation de {% data variables.product.prodname_github_codespaces %} dans votre IDE JetBrains](/codespaces/developing-in-codespaces/using-github-codespaces-in-your-jetbrains-ide) ».
     
     Pour vous connecter à un codespace à partir de l’application Gateway, vous devez disposer d’un serveur SSH en cours d’exécution sur le codespace. {% indented_data_reference reusables.codespaces.ssh-server-installed spaces=5 %}

   * Si vous choisissez **JupyterLab**, l’application JupyterLab doit être installée dans les codespaces que vous ouvrez. {% data reusables.codespaces.jupyterlab-in-default-image %}

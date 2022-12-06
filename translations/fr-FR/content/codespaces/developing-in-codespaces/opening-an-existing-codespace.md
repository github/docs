---
title: Ouverture d’un codespace existant
intro: 'Vous pouvez rouvrir un codespace que vous avez fermé ou arrêté, et revenir à votre travail.'
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
  - Fundamentals
  - Developer
shortTitle: Open an existing codespace
ms.openlocfilehash: b139b7f4e8a696416c97b3c400d09a9f26371b9c
ms.sourcegitcommit: 1f3bd126ca000982c538f1621d47722737740943
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 12/01/2022
ms.locfileid: '148188295'
---
{% jetbrains %}

{% data reusables.codespaces.codespaces-jetbrains-beta-note %}

{% endjetbrains %}

Vous pouvez rouvrir vos codespaces actifs ou arrêtés sur {% data variables.product.prodname_dotcom_the_website %}, dans un IDE JetBrains, dans {% data variables.product.prodname_vscode %} ou en utilisant {% data variables.product.prodname_cli %}. Vous ne pouvez pas rouvrir un codespace qui a été supprimé. Pour plus d’informations, consultez « [Cycle de vie d’un codespace](/codespaces/getting-started/the-codespace-lifecycle) ».

Vous pouvez voir tous vos codespaces dans la page « Vos codespaces » sur [github.com/codespaces](https://github.com/codespaces). À partir de cette page, vous pouvez :

- Ouvrez, arrêtez ou supprimez vos codespaces.
- Découvrez à qui appartient vos codespaces (et à qui ils peuvent être facturés) : votre compte personnel ou les organisations auxquelles vous appartenez. Pour plus d’informations, consultez « [À propos de la facturation de {% data variables.product.prodname_github_codespaces %}](/billing/managing-billing-for-github-codespaces/about-billing-for-github-codespaces) ».
- Créez un codespace, soit en choisissant l’un des modèles {% data variables.product.company_short %}, soit en cliquant sur **Nouveau codespace**. Pour plus d’informations, consultez « [Création d’un codespace à partir d’un modèle](/codespaces/developing-in-codespaces/creating-a-codespace-from-a-template) » et « [Création d’un codespace pour un dépôt](/codespaces/developing-in-codespaces/creating-a-codespace-for-a-repository) ».

## Ouverture d’un codespace existant

{% webui %}

{% data reusables.codespaces.your-codespaces-procedure-step %}
1. Pour ouvrir un codespace dans votre éditeur par défaut, cliquez sur le nom du codespace. {% data reusables.codespaces.about-changing-default-editor %} Pour plus d’informations, consultez « [Définition de votre éditeur par défaut pour {% data variables.product.prodname_github_codespaces %}](/codespaces/customizing-your-codespace/setting-your-default-editor-for-github-codespaces) ».
   
   Pour ouvrir le codespace dans un éditeur autre que votre éditeur par défaut :
   
   1. Cliquez sur les points de suspension ( **...** ) à droite du codespace que vous souhaitez ouvrir.
   1. Cliquez sur **Ouvrir dans**.
   1. Cliquez sur **Ouvrir dans APPLICATION**.

   ![Capture d’écran de la boîte de dialogue « Ouvrir dans », avec « Ouvrir dans Visual Studio Code » mis en évidence](/assets/images/help/codespaces/open-codespace-in-another-editor.png)

   Vous pouvez ouvrir le codespace dans :
   * Votre navigateur
   * {% data variables.product.prodname_vscode %}
   * JetBrains Gateway
   * JupyterLab

   {% data reusables.codespaces.application-installed-locally %}

   Si vous choisissez **JupyterLab**, l’application JupyterLab doit être installée dans le codespace. {% data reusables.codespaces.jupyterlab-in-default-image %}

{% endwebui %}

{% vscode %}

{% note %}

**Remarque :** {% data reusables.codespaces.using-codespaces-in-vscode %} Pour plus d’informations, consultez « [Utilisation de {% data variables.product.prodname_github_codespaces %} dans {% data variables.product.prodname_vscode %}](/codespaces/developing-in-codespaces/using-github-codespaces-in-visual-studio-code) ».

{% endnote %}

1. Dans l’application de bureau {% data variables.product.prodname_vscode_shortname %}, ouvrez la palette de commandes avec <kbd>Commande</kbd>+<kbd>Maj</kbd>+<kbd>P</kbd> (Mac) ou <kbd>Ctrl</kbd>+<kbd>Maj</kbd>+<kbd>P</kbd> (Windows/Linux).
1. Tapez « Codespaces » et sélectionnez l’une des commandes suivantes.
   - Pour ouvrir un codespace dans une nouvelle fenêtre de {% data variables.product.prodname_vscode_shortname %}, sélectionnez **Codespaces : Ouvrir le codespace dans une nouvelle fenêtre**
   - Pour ouvrir un codespace dans l’éditeur web, sélectionnez **Codespaces : Ouvrir dans le navigateur**
1. Cliquez sur le codespace à ouvrir.
   
   ![Capture d’écran d’une liste de codespaces dans Visual Studio Code](/assets/images/help/codespaces/open-codespace-from-vscode.png)

Vous pouvez également accéder aux commandes listées ci-dessus en accédant à la vue de l’Explorateur distant dans {% data variables.product.prodname_vscode_shortname %} et en cliquant avec le bouton droit sur le codespace à ouvrir.

![Capture d’écran d’un codespace sélectionné dans l’Explorateur distant, avec « Ouvrir dans le navigateur » mis en évidence](/assets/images/help/codespaces/open-codespace-remote-explorer.png)

{% data reusables.codespaces.remote-explorer %} {% endvscode %}

{% cli %}

1. Dans un terminal, entrez l’une des commandes {% data variables.product.prodname_cli %} suivantes.
   - Pour ouvrir un codespace dans {% data variables.product.prodname_vscode_shortname %}, entrez :

     ```shell{:copy}
     gh codespace code
     ```
     
     {% note %}

     **Remarque** : Vous devez avoir installé {% data variables.product.prodname_vscode_shortname %} sur votre machine locale. Pour plus d’informations, consultez [Configuration de Visual Studio Code](https://code.visualstudio.com/docs/setup/setup-overview) dans la documentation {% data variables.product.prodname_vscode_shortname %}.

     {% endnote %}
     
   - Pour ouvrir un codespace dans le navigateur, entrez :
  
     ```shell{:copy}
     gh codespace code --web
     ```

   - Pour ouvrir un codespace dans JupyterLab, entrez :
  
     ```shell{:copy}
     gh codespace code --jupyter
     ```
     
     {% note %}

     **Remarque** : {% data reusables.codespaces.jupyterlab-installed-in-codespace %}

     {% endnote %}
     
1. En utilisant les touches de direction, accédez au codespace que vous voulez ouvrir.
1. Pour ouvrir le codespace, appuyez sur <kbd>Entrée</kbd>.

Pour plus d’informations, consultez [`gh codespace code`](https://cli.github.com/manual/gh_codespace_code) dans le manuel {% data variables.product.prodname_cli %}.

{% endcli %}

{% jetbrains %}

{% data reusables.codespaces.opening-codespace-in-jetbrains %}

{% endjetbrains %}

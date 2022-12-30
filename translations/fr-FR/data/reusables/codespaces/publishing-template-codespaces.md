---
ms.openlocfilehash: a78c61511f0daa225bc27576a2ab57e8e1bea939
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 11/09/2022
ms.locfileid: "148159723"
---
Si vous travaillez dans un codespace, vous pouvez le publier à partir de l’application de bureau ou du client web {% data variables.product.prodname_vscode_shortname %}.

{% data reusables.codespaces.source-control-display-dark %}
1. Pour indexer vos changements, cliquez sur **+** à côté du fichier que vous avez ajouté ou changé, ou à côté de **Changements** si vous avez changé plusieurs fichiers et que vous voulez les indexer tous.

   ![Barre latérale de contrôle de code source avec bouton de préproduction mis en exergue](/assets/images/help/codespaces/codespaces-commit-stage.png)

   {% note %}

   **Remarque :** Si vous commencez à partir du modèle vide de {% data variables.product.company_short %}, vous ne verrez pas de liste de changements, sauf si vous avez déjà initialisé votre répertoire en tant que dépôt Git. Pour publier des codespaces créés à partir du modèle vide, cliquez sur **Publier sur {% data variables.product.company_short %}** dans la vue Contrôle de code source, puis passez à l’étape 5.

   {% endnote %}
2. Pour commiter vos changements indexés, tapez un message de commit décrivant la modification que vous avez apportée, puis cliquez sur **Commiter**.

   ![Barre latérale du contrôle de code source avec un message de validation (commit)](/assets/images/help/codespaces/vscode-commit-button.png) 
3. Cliquez sur **Publier la branche**.
   
   ![Capture d’écran du bouton « Publier la branche » dans VS Code](/assets/images/help/codespaces/vscode-publish-branch-button.png)
4. Dans la liste déroulante « Nom du dépôt », tapez un nom pour votre nouveau dépôt, puis sélectionnez **Publier sur le dépôt privé {% data variables.product.company_short %}** ou **Publier sur le dépôt public {% data variables.product.company_short %}** .
   
   ![Capture d’écran de la liste déroulante « Nom du dépôt » dans VS Code](/assets/images/help/codespaces/choose-new-repository.png)

   Le propriétaire du nouveau dépôt est le compte {% data variables.product.prodname_dotcom %} avec lequel vous avez créé le codespace.
5. Dans la fenêtre contextuelle qui s’affiche dans le coin inférieur droit de l’éditeur, cliquez éventuellement sur **Ouvrir dans {% data variables.product.company_short %}** pour afficher le nouveau dépôt sur {% data variables.product.prodname_dotcom_the_website %}.
   
   ![Capture d’écran de la fenêtre contextuelle « Ouvrir dans GitHub » dans VS Code](/assets/images/help/codespaces/open-on-github.png)
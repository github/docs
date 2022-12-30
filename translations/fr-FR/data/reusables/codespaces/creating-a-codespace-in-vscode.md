---
ms.openlocfilehash: d8f0e4e19ba362881f261a214aa56666f5902979
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 11/09/2022
ms.locfileid: "148158580"
---
Après avoir connecté votre compte sur {% data variables.product.prodname_dotcom_the_website %} à l’extension {% data variables.product.prodname_github_codespaces %}, vous pouvez créer un codespace. Pour plus d’informations sur l’extension {% data variables.product.prodname_github_codespaces %}, consultez la [{% data variables.product.prodname_vs_marketplace_shortname %}](https://marketplace.visualstudio.com/items?itemName=GitHub.codespaces).

{% data reusables.codespaces.click-remote-explorer-icon-vscode %}
2. Cliquez sur l’icône Ajouter : {% octicon "plus" aria-label="The plus icon" %}.

   ![Option Créer un codespace dans {% data variables.product.prodname_github_codespaces %}](/assets/images/help/codespaces/create-codespace-vscode.png)

3. Entrez le nom du référentiel dans lequel vous souhaitez développer, puis sélectionnez-le.

   ![Recherche de dépôt pour créer un codespace](/assets/images/help/codespaces/choose-repository-vscode.png)

   Si le dépôt que vous choisissez appartient à une organisation et que l’organisation a configuré des codespaces pour que ce dépôt soit facturable à l’organisation, ou à son entreprise parente, un message s’affiche dans les invites successives vous indiquant qui paie le codespace.

4. Cliquez sur la branche sur laquelle vous souhaitez développer.

   ![Recherche d’une branche pour créer un codespace](/assets/images/help/codespaces/choose-branch-vscode.png)

5. Si vous êtes invité à choisir un fichier de configuration de conteneur de développement, choisissez un fichier dans la liste.

   ![Choix d’un fichier de configuration de conteneur de développement pour {% data variables.product.prodname_github_codespaces %}](/assets/images/help/codespaces/choose-dev-container-vscode.png)

6. Choisissez le type de machine que vous souhaitez utiliser.

   ![Types d’instance pour un nouveau codespace](/assets/images/help/codespaces/choose-sku-vscode.png)

   {% note %}

   **Remarque** : {% data reusables.codespaces.codespaces-machine-type-availability %}

   {% endnote %}

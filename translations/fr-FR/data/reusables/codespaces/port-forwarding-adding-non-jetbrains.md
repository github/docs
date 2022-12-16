---
ms.openlocfilehash: 5aef043edaeaf981964defece5a3a008a89ee5b8
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 11/09/2022
ms.locfileid: "148159724"
---
## Ajout d’un port à la configuration de codespaces

Vous pouvez ajouter un port transféré à la configuration {% data variables.product.prodname_github_codespaces %} pour le dépôt. Le port est donc automatiquement transféré pour tous les espaces de code créés à partir du dépôt. Après avoir mis à jour la configuration, tous les codespaces créés précédemment doivent être reconstruits pour que la modification s’applique. Pour plus d’informations, consultez « [Présentation des conteneurs de développement](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers#applying-configuration-changes-to-a-codespace) ».

Vous pouvez configurer manuellement les ports transférés dans un fichier `.devcontainer.json` à l’aide de la propriété `forwardPorts`, ou vous pouvez utiliser le panneau « Ports » dans un codespace que vous avez ouvert dans le navigateur ou l’application de bureau {% data variables.product.prodname_vscode_shortname %}.

{% data reusables.codespaces.navigate-to-ports-tab %}
1. Cliquez avec le bouton de droite sur le port que vous souhaitez ajouter à la configuration du codespace, puis cliquez sur **Définir l’étiquette et mettre à jour devcontainer.json**.
  ![Option permettant de définir l’étiquette et d’ajouter un port à devcontainer.json dans le menu de clic droit](/assets/images/help/codespaces/update-devcontainer-to-add-port-option.png) {% data reusables.codespaces.type-port-label %}
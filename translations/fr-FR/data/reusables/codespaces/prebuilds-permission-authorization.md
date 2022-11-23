---
ms.openlocfilehash: bb81ad72418e81366595d963296493a7a3b55202
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 11/09/2022
ms.locfileid: "148158676"
---
   Si la configuration du conteneur de développement pour le dépôt spécifie des autorisations d’accès à d’autres dépôts, vous verrez une page d’autorisation s’afficher. Pour plus d’informations sur la façon dont cela est spécifié dans le fichier `devcontainer.json`, consultez « [Gestion de l’accès à d’autres dépôts dans votre codespace](/codespaces/managing-your-codespaces/managing-repository-access-for-your-codespaces) ».   

   Cliquez sur {% octicon "chevron-down" aria-label="The expand down icon" %} pour voir les détails des autorisations demandées.

   ![Capture d’écran de la page d’autorisation pour les prébuilds](/assets/images/help/codespaces/prebuild-authorization-page.png)

   Cliquez sur **Autoriser et continuer** pour accorder ces autorisations de création de prébuilds. Vous pouvez également cliquer sur **Continuer sans autoriser**, mais dans ce cas, les codespaces créés à partir des prébuilds obtenues peuvent ne pas fonctionner correctement.

   {% note %}

   **Remarque** : Les utilisateurs qui créent des codespaces à l’aide de cette prébuild seront également invités à accorder ces autorisations.

   {% endnote %}

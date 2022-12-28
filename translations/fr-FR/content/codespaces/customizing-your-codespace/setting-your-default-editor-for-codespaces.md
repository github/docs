---
title: Définition de votre éditeur par défaut pour Codespaces
shortTitle: Set the default editor
intro: Vous pouvez définir votre éditeur par défaut pour {% data variables.product.prodname_codespaces %} dans votre page de paramètres personnels.
product: '{% data reusables.gated-features.codespaces %}'
versions:
  fpt: '*'
  ghec: '*'
redirect_from:
- /codespaces/managing-your-codespaces/setting-your-default-editor-for-codespaces
topics:
- Codespaces
type: how_to
ms.openlocfilehash: 3c2fe809a749244efd8ffe76cde31646f984bea3
ms.sourcegitcommit: dc42bb4a4826b414751ffa9eed38962c3e3fea8e
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 07/13/2022
ms.locfileid: "146681300"
---
Dans la page des paramètres, vous pouvez définir votre éditeur favori afin que tous les codespaces qui viennent d’être créés s’ouvrent automatiquement dans {% data variables.product.prodname_vscode %} pour le web ou l’application de bureau {% data variables.product.prodname_vscode %}.

Si vous souhaitez utiliser {% data variables.product.prodname_vscode %} comme éditeur par défaut pour {% data variables.product.prodname_codespaces %}, vous devez installer {% data variables.product.prodname_vscode %} et l’extension {% data variables.product.prodname_github_codespaces %} pour {% data variables.product.prodname_vscode %}. Pour plus d’informations, consultez la [page de téléchargement pour {% data variables.product.prodname_vscode %}](https://code.visualstudio.com/download/) et l’extension [{% data variables.product.prodname_github_codespaces %} sur la place de marché {% data variables.product.prodname_vscode %}](https://marketplace.visualstudio.com/items?itemName=GitHub.codespaces).

## <a name="setting-your-default-editor"></a>Définition de votre éditeur de texte par défaut

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.codespaces-tab %}
1. Sous « Préférence de l’éditeur », sélectionnez l’option souhaitée.
   ![Définition de votre éditeur](/assets/images/help/codespaces/select-default-editor.png) Si vous choisissez **{% data variables.product.prodname_vscode %}** , {% data variables.product.prodname_codespaces %} s’ouvre automatiquement dans l’application de bureau la prochaine fois que vous créez un codespace. Vous devez peut-être autoriser à la fois à l’accès à votre navigateur et à {% data variables.product.prodname_vscode %} pour qu’il s’ouvre correctement.
   ![Définition de votre éditeur](/assets/images/help/codespaces/launch-default-editor.png)

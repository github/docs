---
ms.openlocfilehash: efb9f234573525d8f24d4f0798379d38a8d8299e
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/11/2022
ms.locfileid: "147881875"
---
Pour réduire la consommation des minutes Actions, vous pouvez définir une prébuild de sorte qu’elle ne se mette à jour que lorsque vous apportez une modification aux fichiers de configuration de votre conteneur de développement, ou bien selon une planification personnalisée. Vous pouvez également gérer votre utilisation du stockage en ajustant le nombre de versions de modèle à conserver pour vos configurations de prébuild. Pour plus d’informations, consultez « [Configuration de prébuilds](/codespaces/prebuilding-your-codespaces/configuring-prebuilds#configuring-a-prebuild) ».

Si vous êtes propriétaire d’une organisation, vous pouvez suivre l’utilisation des workflows et du stockage de prébuild en téléchargeant un rapport d’utilisation de {% data variables.product.prodname_actions %} pour votre organisation. Pour identifier les exécutions de workflow des prébuilds, filtrez la sortie CSV de façon à inclure uniquement le workflow appelé « Créer des prébuilds {% data variables.product.prodname_codespaces %} ». Pour plus d’informations, consultez « [Consultation de votre utilisation de {% data variables.product.prodname_actions %}](/billing/managing-billing-for-github-actions/viewing-your-github-actions-usage#viewing-github-actions-usage-for-your-organization) ».

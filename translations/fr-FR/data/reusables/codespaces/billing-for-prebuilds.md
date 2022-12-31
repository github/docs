---
ms.openlocfilehash: c9d2391a85dd42db8eb3914b9c3495e0441e0fd0
ms.sourcegitcommit: dc42bb4a4826b414751ffa9eed38962c3e3fea8e
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 07/13/2022
ms.locfileid: "147061273"
---
Par défaut, un flux de travail {% data variables.product.prodname_actions %} est déclenché chaque fois que vous créez ou mettez à jour un modèle de prébuild, ou que vous effectuez un envoi (push) sur une branche compatible prébuild. Comme d’autres flux de travail, les flux de travail de prébuild consomment une partie des minutes Actions incluses dans votre compte (le cas échéant) ou entraînent des frais pour les minutes Actions lorsqu’ils sont en cours d’exécution. Pour plus d’informations sur la tarification des minutes Actions, consultez « [À propos de la facturation de {% data variables.product.prodname_actions %}](/billing/managing-billing-for-github-actions/about-billing-for-github-actions) ». 

En plus des minutes {% data variables.product.prodname_actions %}, vous serez également facturé pour le stockage des modèles de prébuild associés à chaque configuration de prébuild pour un référentiel et une région donnés. Le stockage des modèles de prébuild est facturé au même taux que le stockage des espaces de code. Pour plus d’informations, consultez « [Calcul de l’utilisation du stockage](#calculating-storage-usage) ».

Pour réduire la consommation des minutes Actions, vous pouvez définir un modèle de prébuild de sorte qu’il ne se mette à jour que lorsque vous apportez une modification aux fichiers de configuration de votre conteneur de développement, ou bien selon une planification personnalisée. Vous pouvez également gérer votre utilisation du stockage en ajustant le nombre de versions de modèle à conserver pour vos configurations de prébuild. Pour plus d’informations, consultez « [Configuration de prébuilds](/codespaces/prebuilding-your-codespaces/configuring-prebuilds#configuring-a-prebuild) ».

Si vous êtes propriétaire d’une organisation, vous pouvez suivre l’utilisation des workflows et du stockage de prébuild en téléchargeant un rapport d’utilisation de {% data variables.product.prodname_actions %} pour votre organisation. Pour identifier les exécutions de flux de travail des prébuilds, filtrez la sortie CSV de façon à inclure uniquement le flux de travail appelé « Créer des prébuilds Codespaces ». Pour plus d’informations, consultez « [Consultation de votre utilisation de {% data variables.product.prodname_actions %}](/billing/managing-billing-for-github-actions/viewing-your-github-actions-usage#viewing-github-actions-usage-for-your-organization) ».

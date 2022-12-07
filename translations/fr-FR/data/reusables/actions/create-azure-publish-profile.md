---
ms.openlocfilehash: 00bdf100d02b27ce76aff35582cb4a1f5a2469a3
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/10/2022
ms.locfileid: "145105082"
---
1. Configurez un profil de publication Azure, et créez un secret `AZURE_WEBAPP_PUBLISH_PROFILE`.

   Générez vos informations d’identification de déploiement Azure à l’aide d’un profil de publication. Pour plus d’informations, consultez « [Générer les informations d’identification du déploiement](https://docs.microsoft.com/azure/app-service/deploy-github-actions?tabs=applevel#generate-deployment-credentials) » dans la documentation Azure.

   Dans votre dépôt {% data variables.product.prodname_dotcom %}, créez un secret nommé `AZURE_WEBAPP_PUBLISH_PROFILE`, qui contient le profil de publication. Pour plus d’informations sur la création de secrets, consultez « [Secrets chiffrés](/actions/reference/encrypted-secrets#creating-encrypted-secrets-for-a-repository) ».

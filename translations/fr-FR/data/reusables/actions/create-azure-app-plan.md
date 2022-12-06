---
ms.openlocfilehash: 6058de00ebbc05baaa2e29cfba275fa2249b44a3
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/11/2022
ms.locfileid: "147881194"
---
1. Créer un plan Azure App Service.

   Par exemple, vous pouvez utiliser Azure CLI pour créer un plan App Service :

   ```bash{:copy}
   az appservice plan create \
      --resource-group MY_RESOURCE_GROUP \
      --name MY_APP_SERVICE_PLAN \
      --is-linux
   ```

   Dans la commande ci-dessus, remplacez `MY_RESOURCE_GROUP` par votre groupe de ressources Azure préexistant et `MY_APP_SERVICE_PLAN` par un nouveau nom pour le plan App Service.

   Pour plus d’informations sur l’utilisation d’[Azure CLI](https://docs.microsoft.com/cli/azure/), consultez la documentation Azure :

   * Pour l’authentification, consultez « [Se connecter avec Azure CLI](https://docs.microsoft.com/cli/azure/authenticate-azure-cli) ».
   * Si vous devez créer un groupe de ressources, consultez « [az group](https://docs.microsoft.com/cli/azure/group?view=azure-cli-latest#az_group_create) ».

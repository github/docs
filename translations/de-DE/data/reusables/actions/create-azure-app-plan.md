---
ms.openlocfilehash: 6058de00ebbc05baaa2e29cfba275fa2249b44a3
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/11/2022
ms.locfileid: "147881195"
---
1. Erstellen eines Azure App Service-Plans

   Du kannst beispielsweise die Azure CLI verwenden, um einen neuen App Service-Plan zu erstellen:

   ```bash{:copy}
   az appservice plan create \
      --resource-group MY_RESOURCE_GROUP \
      --name MY_APP_SERVICE_PLAN \
      --is-linux
   ```

   Ersetze `MY_RESOURCE_GROUP` im obigen Befehl durch deine bereits vorhandene Azure-Ressourcengruppe und `MY_APP_SERVICE_PLAN` durch einen neuen Namen für den App Service-Plan.

   Weitere Informationen zur Verwendung der [Azure-Befehlszeilenschnittstelle](https://docs.microsoft.com/cli/azure/) findest du in der Azure-Dokumentation:

   * Informationen zur Authentifizierung findest du unter [Anmelden mit Azure CLI](https://docs.microsoft.com/cli/azure/authenticate-azure-cli).
   * Informationen zu Erstellen einer neuen Ressourcengruppe findest du unter [az group](https://docs.microsoft.com/cli/azure/group?view=azure-cli-latest#az_group_create).

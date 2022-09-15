---
ms.openlocfilehash: 6058de00ebbc05baaa2e29cfba275fa2249b44a3
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/11/2022
ms.locfileid: "147881199"
---
1. Crear un plan de Azure App Service.

   Por ejemplo, puedes utilizar el CLI de Azure para crear un plan de App Service nuevo:

   ```bash{:copy}
   az appservice plan create \
      --resource-group MY_RESOURCE_GROUP \
      --name MY_APP_SERVICE_PLAN \
      --is-linux
   ```

   En el comando anterior, reemplace `MY_RESOURCE_GROUP` por el grupo de recursos de Azure existente y `MY_APP_SERVICE_PLAN` por un nuevo nombre para el plan de App Service.

   Para más información sobre cómo usar la [CLI de Azure](https://docs.microsoft.com/cli/azure/), vea la documentación de Azure.

   * Para la autenticación, vea "[Inicio de sesión con la CLI de Azure](https://docs.microsoft.com/cli/azure/authenticate-azure-cli)".
   * Si tiene que crear un grupo de recursos, vea "[az group](https://docs.microsoft.com/cli/azure/group?view=azure-cli-latest#az_group_create)".

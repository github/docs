---
ms.openlocfilehash: 6058de00ebbc05baaa2e29cfba275fa2249b44a3
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/11/2022
ms.locfileid: "147881198"
---
1. Создать план Службы приложений Azure.

   Например, можно использовать Azure CLI для создания нового плана Службы приложений:

   ```bash{:copy}
   az appservice plan create \
      --resource-group MY_RESOURCE_GROUP \
      --name MY_APP_SERVICE_PLAN \
      --is-linux
   ```

   В приведенной выше команде замените `MY_RESOURCE_GROUP` на существующую группу ресурсов Azure, а `MY_APP_SERVICE_PLAN` — на новое имя плана Службы приложений.

   Дополнительные сведения об использовании [Azure CLI](https://docs.microsoft.com/cli/azure/) см. в документации по Azure:

   * Сведения о проверке подлинности см. в разделе [Вход с помощью Azure CLI](https://docs.microsoft.com/cli/azure/authenticate-azure-cli).
   * Сведения о создании группы ресурсов см. в разделе, посвященном команде [az group](https://docs.microsoft.com/cli/azure/group?view=azure-cli-latest#az_group_create).

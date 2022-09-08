---
ms.openlocfilehash: 6058de00ebbc05baaa2e29cfba275fa2249b44a3
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: "145099137"
---
1. 创建 Azure 应用服务计划。

   例如，可以使用 Azure CLI 创建新的应用服务计划：

   ```bash{:copy}
   az appservice plan create \
      --resource-group MY_RESOURCE_GROUP \
      --name MY_APP_SERVICE_PLAN \
      --is-linux
   ```

   在上述命令中，将 `MY_RESOURCE_GROUP` 替换为你原有的 Azure 资源组，将 `MY_APP_SERVICE_PLAN` 替换为应用服务计划的新名称。

   有关使用 [Azure CLI](https://docs.microsoft.com/cli/azure/) 的详细信息，请参阅 Azure 文档：

   * 有关身份验证，请参阅“[使用 Azure CLI 登录](https://docs.microsoft.com/cli/azure/authenticate-azure-cli)”。
   * 如果需要创建新的资源组，请参阅“[az group](https://docs.microsoft.com/cli/azure/group?view=azure-cli-latest#az_group_create)”。

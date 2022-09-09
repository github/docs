---
ms.openlocfilehash: 6058de00ebbc05baaa2e29cfba275fa2249b44a3
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: "145116981"
---
1. Azure App Service プランを作成する。

   たとえば、Azure CLIを使って新しいApp Serviceのプランを作成できます。

   ```bash{:copy}
   az appservice plan create \
      --resource-group MY_RESOURCE_GROUP \
      --name MY_APP_SERVICE_PLAN \
      --is-linux
   ```

   上記のコマンドでは、`MY_RESOURCE_GROUP` を既存の Azure リソース グループに、`MY_APP_SERVICE_PLAN` を App Service プランの新しい名前に置き換えます。

   [Azure CLI](https://docs.microsoft.com/cli/azure/) の使用に関する詳細については、Azure のドキュメントを参照してください。

   * 認証については、「[Azure CLI を使用してサインインする](https://docs.microsoft.com/cli/azure/authenticate-azure-cli)」を参照してください。
   * 新しいリソース グループを作成する必要がある場合は、「[az group](https://docs.microsoft.com/cli/azure/group?view=azure-cli-latest#az_group_create)」を参照してください。

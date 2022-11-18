---
ms.openlocfilehash: 6058de00ebbc05baaa2e29cfba275fa2249b44a3
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/11/2022
ms.locfileid: "147881197"
---
1. Azure App Service 요금제를 만듭니다.

   예를 들어 Azure CLI를 사용하여 새 App Service 요금제를 만들 수 있습니다.

   ```bash{:copy}
   az appservice plan create \
      --resource-group MY_RESOURCE_GROUP \
      --name MY_APP_SERVICE_PLAN \
      --is-linux
   ```

   위의 명령에서 `MY_RESOURCE_GROUP`을 기존 Azure 리소스 그룹으로 바꾸고 `MY_APP_SERVICE_PLAN`을 App Service 요금제의 새 이름으로 바꿉니다.

   [Azure CLI](https://docs.microsoft.com/cli/azure/) 사용에 대한 자세한 내용은 Azure 설명서를 참조하세요.

   * 인증은 “[Azure CLI로 로그인](https://docs.microsoft.com/cli/azure/authenticate-azure-cli)”을 참조하세요.
   * 새 리소스 그룹을 만들어야 하는 경우 “[az group](https://docs.microsoft.com/cli/azure/group?view=azure-cli-latest#az_group_create)”을 참조하세요.

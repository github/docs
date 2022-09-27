---
ms.openlocfilehash: 00bdf100d02b27ce76aff35582cb4a1f5a2469a3
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/10/2022
ms.locfileid: "145099136"
---
1. 配置 Azure 发布配置文件并创建 `AZURE_WEBAPP_PUBLISH_PROFILE` 机密。

   使用发布配置文件生成 Azure 部署凭据。 有关详细信息，请参阅 Azure 文档中的“[生成部署凭据](https://docs.microsoft.com/azure/app-service/deploy-github-actions?tabs=applevel#generate-deployment-credentials)”。

   在 {% data variables.product.prodname_dotcom %} 存储库中，创建一个名为 `AZURE_WEBAPP_PUBLISH_PROFILE` 的机密，其中包含发布配置文件的内容。 要详细了解如何创建机密，请参阅“[加密的机密](/actions/reference/encrypted-secrets#creating-encrypted-secrets-for-a-repository)”。

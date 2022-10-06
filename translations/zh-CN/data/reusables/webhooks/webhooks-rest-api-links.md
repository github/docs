---
ms.openlocfilehash: 3e175aefd9a243a098b5c35ca6d4068a651d2f61
ms.sourcegitcommit: 9a7b3a9ccb983af5df2cd94da7fecf7a8237529b
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/09/2022
ms.locfileid: "147876015"
---
利用 Webhook REST API，你可以管理存储库、组织和应用 Webhook。{% ifversion fpt or ghes > 3.2 or ghae or ghec %} 可使用此 API 列出 Webhook 的 Webhook 交付，或获取并重新交付 Webhook 的个别交付，该交付可以集成到外部应用或服务中。{% endif %} 也可以使用 REST API 来更改 Webhook 的配置。 例如，您可以修改有效负载 URL、内容类型、SSL 验证和机密。 有关详细信息，请参阅：

- [存储库 Webhook REST API](/rest/reference/webhooks#repository-webhooks)
- [组织 Webhook REST API](/rest/reference/orgs#webhooks)
- [{% data variables.product.prodname_github_app %} Webhook REST API](/rest/reference/apps#webhooks)

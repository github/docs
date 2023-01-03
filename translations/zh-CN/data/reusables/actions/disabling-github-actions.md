---
ms.openlocfilehash: 3812d31ab730736a7af4ae38c347325f28aeffba
ms.sourcegitcommit: 96bbb6b8f3c9172209d80cb1502017ace3019807
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/10/2022
ms.locfileid: "147877170"
---
默认情况下，{% ifversion ghes or ghae %}在 {% data variables.product.product_location %} 上启用 {% data variables.product.prodname_actions %} 之后，它{% elsif fpt or ghec %}{% data variables.product.prodname_actions %}{% endif %}会在所有存储库和组织上启用。 可以选择禁用 {% data variables.product.prodname_actions %} 或将其限制为{% ifversion ghec or ghes or ghae %}企业{% else %}组织{% endif %}中的操作 {% ifversion actions-workflow-policy %}和可重用工作流{% endif %}。

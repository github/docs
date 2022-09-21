---
ms.openlocfilehash: 324332325762999d6daaf4241ec0f9e291ce98a8
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/10/2022
ms.locfileid: "145065861"
---
自托管运行器可位于存储库、组织或 {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %} 上的企业帐户设置{% elsif ghes or ghae %} {% data variables.product.product_location %} 上的企业设置{% endif %}中。 要管理自托管运行器，您必须拥有以下权限，具体取决于添加自托管运行器的位置：
- **用户存储库**：你必须是存储库所有者。
- **组织**：你必须是组织所有者。 
- **组织存储库**：你必须是组织所有者，或者拥有对存储库的管理员访问权限。
{% ifversion ghec %}
- **企业帐户**：你必须是企业所有者。
{% elsif ghes or ghae %}
- **企业**：你必须是 {% data variables.product.prodname_enterprise %} 站点管理员。
{% endif %}

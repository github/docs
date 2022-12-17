---
ms.openlocfilehash: 727611615f31b6b6064340ba97757509a1834db2
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 12/09/2022
ms.locfileid: "148193257"
---
{% ifversion ghes %}

使用 JIT 预配时，如果从 IdP 中删除用户，还必须在 {% data variables.location.product_location %} 上手动暂停该用户的帐户。 否则，帐户的所有者可以继续使用访问令牌或 SSH 密钥进行身份验证。 有关详细信息，请参阅“[挂起和取消挂起用户](/enterprise/admin/guides/user-management/suspending-and-unsuspending-users)”。

{% endif %}

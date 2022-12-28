---
ms.openlocfilehash: 727611615f31b6b6064340ba97757509a1834db2
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 12/09/2022
ms.locfileid: "148193595"
---
{% ifversion ghes %}

При JIT-подготовке при удалении пользователя из поставщика удостоверений необходимо также вручную приостановить учетную запись пользователя в {% data variables.location.product_location %}. В противном случае владелец учетной записи может продолжать выполнять проверку подлинности с помощью маркеров доступа или ключей SSH. Дополнительные сведения см. в разделе [Блокировка и разблокировка пользователей](/enterprise/admin/guides/user-management/suspending-and-unsuspending-users).

{% endif %}

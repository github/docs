---
ms.openlocfilehash: 727611615f31b6b6064340ba97757509a1834db2
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 12/09/2022
ms.locfileid: "148193594"
---
{% ifversion ghes %}

Con el aprovisionamiento JIT, si quitas un usuario del IdP, también debes suspender manualmente la cuenta de ese usuario en {% data variables.location.product_location %}. De lo contrario, el propietario de la cuenta puede seguir autenticando mediante tokens de acceso o claves SSH. Para obtener más información, consulte "[Suspensión y anulación de la suspensión de usuarios](/enterprise/admin/guides/user-management/suspending-and-unsuspending-users)".

{% endif %}

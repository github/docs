---
ms.openlocfilehash: 727611615f31b6b6064340ba97757509a1834db2
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 12/09/2022
ms.locfileid: "148193374"
---
{% ifversion ghes %}

Avec le provisionnement JIT, si vous supprimez un utilisateur de votre IdP, vous devez également suspendre manuellement le compte de l’utilisateur sur {% data variables.location.product_location %}. À défaut, le propriétaire du compte pourra toujours s’authentifier avec des jetons d’accès ou des clés SSH. Pour plus d’informations, consultez « [Suspension et rétablissement d’utilisateurs](/enterprise/admin/guides/user-management/suspending-and-unsuspending-users) ».

{% endif %}

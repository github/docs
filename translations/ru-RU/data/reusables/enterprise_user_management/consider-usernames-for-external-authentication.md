---
ms.openlocfilehash: 32344b335243d911c53f10b49e8c5c04ce78906f
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/20/2022
ms.locfileid: "148097873"
---
{% данных variables.product.product_name %} нормализует значение из {% ifversion ghec или ghae %}IdP{% elsif ghes %}внешний поставщик проверки подлинности{% endif %} для определения имени пользователя для каждой новой личной учетной записи {% ifversion ghae %}on {% data variables.product.product_name %}{% elsif ghec %}in your enterprise on {% data variables.location.product_location %}{% elsif ghes %}on {% data variables.location.product_location %}{% endif %}.

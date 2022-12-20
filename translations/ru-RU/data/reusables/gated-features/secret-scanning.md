---
ms.openlocfilehash: 3e32ef8b3fc53f1818f1d09b8461aa00e50f200c
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/05/2022
ms.locfileid: "145110675"
---
<!--This reusable describes the GHAS secret scanning feature. For a reusable that also covers the free secret scanning for public repositories on GitHub.com, use `secret-scanning-partner.md`  -->

{%- ifversion ghec or ghes %} {% data variables.product.prodname_secret_scanning_GHAS_caps %} доступно для принадлежащих организации репозиториев в {% data variables.product.product_name %}, если у вашей организации есть лицензия на {% data variables.product.prodname_GH_advanced_security %}.

{%- elsif ghae %} {% data variables.product.prodname_secret_scanning_caps %} доступно для принадлежащих организации репозиториев в {% data variables.product.product_name %}. Это функция входит в состав {% data variables.product.prodname_GH_advanced_security %} (на этапе бета-версии предоставляется бесплатно).

{%- endif %} {% ifversion not ghae %}Дополнительные сведения см. в разделе [Продукты GitHub](/articles/githubs-products).{% endif %}

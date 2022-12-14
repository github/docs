---
ms.openlocfilehash: 0f465bd80e066cc8c1c047a1c6a52068de79ce37
ms.sourcegitcommit: 1309b46201604c190c63bfee47dce559003899bf
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/10/2022
ms.locfileid: "145110683"
---
{%- ifversion fpt %} {% data variables.product.prodname_secret_scanning_partner_caps %} автоматически выполняется в общедоступных репозиториях во всех продуктах на {% data variables.product.prodname_dotcom_the_website %}. {% data variables.product.prodname_secret_scanning_GHAS_caps %} доступно для репозиториев, принадлежащих организациям, которые используют {% data variables.product.prodname_ghe_cloud %} и у которых есть лицензия для {% data variables.product.prodname_GH_advanced_security %}.

{%- elsif ghec %} {% data variables.product.prodname_secret_scanning_partner_caps %} автоматически выполняется во всех общедоступных репозиториях. Если есть лицензия для {% data variables.product.prodname_GH_advanced_security %}, можно включить и настроить {% data variables.product.prodname_secret_scanning_GHAS %} для любого принадлежащего организации репозитория.

{%- elsif ghes %} {% data variables.product.prodname_secret_scanning_caps %} доступен для принадлежащих организации репозиториев в {% data variables.product.product_name %}, если у предприятия есть лицензия для {% data variables.product.prodname_GH_advanced_security %}.

{%- elsif ghae %} {% data variables.product.prodname_secret_scanning_caps %} доступно для принадлежащих организации репозиториев в {% data variables.product.product_name %}. Это функция входит в состав {% data variables.product.prodname_GH_advanced_security %} (на этапе бета-версии предоставляется бесплатно).

{%- endif %} {% ifversion not ghae %}Дополнительные сведения см. в разделе [Продукты GitHub](/articles/githubs-products).{% endif %}

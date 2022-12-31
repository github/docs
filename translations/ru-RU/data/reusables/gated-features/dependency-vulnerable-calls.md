---
ms.openlocfilehash: 91884dc1aa5c5b0b3d32593edfb1927e6c75592f
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/05/2022
ms.locfileid: "145110832"
---
{%- ifversion fpt %} Обнаружение уязвимых вызовов в общедоступных репозиториях включено. Этот анализ доступен в частных репозиториях, принадлежащих организациям, которые используют {% data variables.product.prodname_ghe_cloud %} и имеют лицензию на {% data variables.product.prodname_GH_advanced_security %}.

{%- elsif ghec %} Обнаружение уязвимых вызовов включено в {% data variables.product.product_name %} для общедоступных репозиториев. Чтобы обнаружить уязвимые вызовы в частных репозиториях, принадлежащих организациям, организации необходимо иметь лицензию на {% data variables.product.prodname_GH_advanced_security %}.

{%- elsif ghes > 3.5 %} Обнаружение уязвимых вызовов доступно для репозиториев, принадлежащих организации, в {% data variables.product.product_name %}. Для этой функции требуется лицензия на {% data variables.product.prodname_GH_advanced_security %}.

{%- elsif ghae-issue-6076 %} Обнаружение уязвимых вызовов доступно для репозиториев, принадлежащих организации, в {% data variables.product.product_name %}. Это функция входит в состав {% data variables.product.prodname_GH_advanced_security %} (на этапе бета-версии предоставляется бесплатно).

{%- endif %} {% data reusables.advanced-security.more-info-ghas %}

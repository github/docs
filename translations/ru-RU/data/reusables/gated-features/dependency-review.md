---
ms.openlocfilehash: 285d547af855fed298354ee62716de9e6c168608
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/05/2022
ms.locfileid: "147062980"
---
{%- ifversion fpt %} Проверка зависимостей включена в общедоступных репозиториях. Кроме того, проверка зависимостей доступна в частных репозиториях, принадлежащих организациям, которые используют {% data variables.product.prodname_ghe_cloud %} и имеют лицензию на {% data variables.product.prodname_GH_advanced_security %}.

{%- elsif ghec %} Проверка зависимостей включена в состав {% data variables.product.product_name %} для общедоступных репозиториев. Чтобы использовать проверку зависимостей в частных репозиториях, принадлежащих организациям, необходимо иметь лицензию на {% data variables.product.prodname_GH_advanced_security %}.

{%- elsif ghes %} Проверка зависимостей доступна для принадлежащих организациям репозиториев в {% data variables.product.product_name %}. Для этой функции требуется лицензия на {% data variables.product.prodname_GH_advanced_security %}.

{%- elsif ghae %} Проверка зависимостей доступна для принадлежащих организациям репозиториев в {% data variables.product.product_name %}. Это функция входит в состав {% data variables.product.prodname_GH_advanced_security %} (на этапе бета-версии предоставляется бесплатно).

{%- endif %} {% data reusables.advanced-security.more-info-ghas %}

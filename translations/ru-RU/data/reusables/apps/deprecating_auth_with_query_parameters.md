---
ms.openlocfilehash: 1ba4f5242c21b752ac7e3bd9a424e0c8c4e96b2a
ms.sourcegitcommit: 72e1c60459a610944184ca00e3ae60bf1f5fc6db
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/09/2022
ms.locfileid: "147878613"
---
{% warning %}

**Уведомление об устаревании.** {% data variables.product.prodname_dotcom %} прекратит проверку подлинности в API с использованием параметров запроса. Проверка подлинности в API должна выполняться с использованием [обычной проверки подлинности HTTP](/rest/overview/other-authentication-methods#via-oauth-and-personal-access-tokens). {% ifversion fpt or ghec %} Использование параметров запросов для проверки подлинности в API не будет работать с 5 мая 2021 г. {% endif %}  Дополнительные сведения, включая плановые ограничения нагрузки, см. в [этой записи блога](https://developer.github.com/changes/2020-02-10-deprecating-auth-through-query-param/).

{% ifversion ghes or ghae %} Проверка подлинности в API с использованием параметров запроса доступна, но больше не поддерживается из-за проблем безопасности. Вместо нее рекомендуем интеграторам переместить токен доступа `client_id` или `client_secret` в заголовок. {% data variables.product.prodname_dotcom %} объявит об удалении проверки подлинности с использованием параметров запросов предварительным уведомлением. {% endif %}

{% endwarning %}

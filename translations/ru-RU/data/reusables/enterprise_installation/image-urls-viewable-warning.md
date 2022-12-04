---
ms.openlocfilehash: 699a28a2443778018ea25e0060e621da9427b4ef
ms.sourcegitcommit: c562c85cc75ffe1eb4e9595d8adc09ec71697ab1
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 11/22/2022
ms.locfileid: "148179976"
---
{% warning %}

**Предупреждение.** При добавлении вложенного изображения в запрос на вытягивание или комментарий к проблеме любой пользователь может просмотреть URL-адрес анонимного изображения без проверки подлинности{% ifversion ghes %}, даже если запрос на вытягивание находится в частном репозитории или для него включен частный режим. Чтобы предотвратить несанкционированный доступ к образам, обязательно ограничьте сетевой доступ к системам, обслуживающим образы, включая {% data variables.location.product_location %}{% endif %}. {% ifversion ghae %} Чтобы предотвратить несанкционированный доступ к URL-адресам образов в {% data variables.product.product_name %}, рассмотрите возможность ограничения сетевого трафика для вашего предприятия. Дополнительные сведения см. в разделе [Ограничение сетевого трафика для вашего предприятия с помощью списка разрешенных IP-адресов](/admin/configuration/configuring-your-enterprise/restricting-network-traffic-to-your-enterprise-with-an-ip-allow-list). {% endif %}

{% endwarning %}

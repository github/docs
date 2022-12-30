---
ms.openlocfilehash: c5fae1ce4acb04536efed974489a49b43ef07812
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/20/2022
ms.locfileid: "148098628"
---
{% ifversion ghes or ghae %} Подключение между локальными средствами выполнения и {% data variables.product.product_name %} осуществляется по протоколу {% ifversion ghes %}HTTP (порт 80) или {% endif %}HTTPS (порт 443). {% ifversion ghes %} Чтобы обеспечить подключение по протоколу HTTPS, настройте TLS для {% данных variables.location.product_location %}. Дополнительные сведения см. в разделе [Настройка TLS](/admin/configuration/configuring-network-settings/configuring-tls).{% endif %} {% endif %}

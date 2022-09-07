---
ms.openlocfilehash: 51b563029cedae82f02da31a5d6473274efb8218
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: "145091995"
---
{% ifversion ghes or ghae %} La conexión entre los ejecutores autohospedados y {% data variables.product.product_name %} se realiza mediante {% ifversion ghes %}HTTP (puerto 80) o {% endif %}HTTPS (puerto 443). {% ifversion ghes %}Para garantizar la conectividad por HTTPS, configura el TLS para {% data variables.product.product_location %}. Para más información, vea "[Configuración de TLS](/admin/configuration/configuring-network-settings/configuring-tls)".{% endif %} {% endif %}

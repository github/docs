---
ms.openlocfilehash: 51b563029cedae82f02da31a5d6473274efb8218
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: "145083805"
---
{% ifversion ghes or ghae %} A conexão entre os executores auto-hospedados e o {% data variables.product.product_name %} é feita por {% ifversion ghes %}HTTP (porta 80) ou {% endif %}HTTPS (porta 443). {% ifversion ghes %}Para garantir conectividade por meio de HTTPS, configure TLS para {% data variables.product.product_location %}. Para obter mais informações, confira "[Como configurar o TLS](/admin/configuration/configuring-network-settings/configuring-tls)".{% endif %}{% endif %}

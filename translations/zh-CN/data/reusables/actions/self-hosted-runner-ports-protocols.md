---
ms.openlocfilehash: 51b563029cedae82f02da31a5d6473274efb8218
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/11/2022
ms.locfileid: "145084827"
---
{% ifversion ghes or ghae %} 自托管运行器和 {% data variables.product.product_name %} 通过 {% ifversion ghes %} HTTP（端口 80）或 {% endif %} HTTPS（端口 443）建立连接。 {% ifversion ghes %} 若要确保通过 HTTPS 进行连接，请为 {% data variables.product.product_location %} 配置 TLS。 有关详细信息，请参阅“[配置 TLS](/admin/configuration/configuring-network-settings/configuring-tls)”。{% endif %} {% endif %}

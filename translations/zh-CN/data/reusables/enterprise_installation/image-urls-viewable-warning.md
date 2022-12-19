---
ms.openlocfilehash: 699a28a2443778018ea25e0060e621da9427b4ef
ms.sourcegitcommit: c562c85cc75ffe1eb4e9595d8adc09ec71697ab1
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 11/22/2022
ms.locfileid: "148179971"
---
{% warning %}

警告：如果你在拉取请求或议题评论中添加了图像附件，则任何人都可以查看匿名图像 URL，无需身份验证{% ifversion ghes %}，即使该拉取请求位于专用存储库中或者启用了专用模式。 为防止未经授权而访问映像，请确保限制从网络访问提供映像的系统，包括 {% data variables.location.product_location %}{% endif %}。{% ifversion ghae %}为防止未经授权而访问 {% data variables.product.product_name %} 上的映像 URL，请考虑限制到企业的网络流量。 有关详细信息，请参阅“[使用 IP 允许列表限制到企业的网络流量](/admin/configuration/configuring-your-enterprise/restricting-network-traffic-to-your-enterprise-with-an-ip-allow-list)”。{% endif %}

{% endwarning %}

---
ms.openlocfilehash: a58f8cdbd481991312d9bce77e1cd41a35ffad75
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/11/2022
ms.locfileid: "145127423"
---
你必须定期向 SAML IdP 身份验证并访问 {% data variables.product.prodname_dotcom_the_website %}{% elsif ghae %}{% data variables.product.product_location %} {% ifversion fpt or ghec %} 上的组织资源{% endif %}。 此登录期的持续时间由 IdP 指定，一般为 24 小时。 此定期登录要求会限制访问的时长，您必须重新验证身份后才可继续访问。 {% ifversion fpt or ghec %}你可以在安全设置中查看和管理你的活动 SAML 会话。 有关详细信息，请参阅“[查看和管理你的活动 SAML 会话](/articles/viewing-and-managing-your-active-saml-sessions)。”{% endif %}

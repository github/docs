---
ms.openlocfilehash: 10f8ff754031aa529cae9525cffee31506b6b8f6
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 12/09/2022
ms.locfileid: "148193204"
---
默认情况下，当您分配或取消分配应用程序时，您的 IdP 不会自动与 {% data variables.product.product_name %} 通信。 {% data variables.product.product_name %}{% ifversion fpt or ghec %}预配对 {% else %} 上的资源的访问，使用 SAML 实时 (JIT 创建用户帐户 {% endif %}，) 首次导航到 {% ifversion fpt or ghec %}，你的资源在 {% endif %} {% data variables.product.product_name %} 并通过通过 IdP 进行身份验证来登录。 当你授予 {% data variables.product.product_name %} 的访问权限时，你可能需要手动通知用户，并且在停用期间必须手动 {% ifversion fpt or ghec %}解除预配访问 {% else %}停用 {% endif %}{% data variables.product.product_name %} 上的用户帐户。

或者，当你在 IdP 上分配或取消分配应用程序时不使用 SAML JIT 预配，而是使用 SCIM 自动{% ifversion ghec %}预配或取消预配{% elsif ghae or scim-for-ghes %}创建或暂停{% endif %}{% ifversion fpt or ghec %}对企业拥有的组织的 {% data variables.product.prodname_dotcom_the_website %} {% else %}用户帐户和授予或拒绝对 {% data variables.location.product_location %} {% endif %}的访问权限。{% ifversion scim-for-ghes %} SCIM for {% data variables.product.product_name %} 目前为专用 beta 版，可能随时发生更改。{% endif %}

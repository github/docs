---
ms.openlocfilehash: cfe1441d8807b616dae5499c5f1fb01316364c5b
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: "145127315"
---
默认情况下，当您分配或取消分配应用程序时，您的 IdP 不会自动与 {% data variables.product.product_name %} 通信。 {% data variables.product.product_name %}{% ifversion fpt or ghec %}预配对 {% else %} 上的资源的访问，使用 SAML 实时 (JIT 创建用户帐户 {% endif %}，) 首次导航到 {% ifversion fpt or ghec %}，你的资源在 {% endif %} {% data variables.product.product_name %} 并通过通过 IdP 进行身份验证来登录。 当你授予 {% data variables.product.product_name %} 的访问权限时，你可能需要手动通知用户，并且在停用期间必须手动 {% ifversion fpt or ghec %}解除预配访问 {% else %}停用 {% endif %}{% data variables.product.product_name %} 上的用户帐户。 当你在 IdP 上分配或取消分配应用程序时，可使用 SCIM 自动{% ifversion ghec %}预配或取消预配{% elsif ghae %}/创建或暂停{% endif %} {% ifversion fpt or ghec %}对企业拥有的组织的{% data variables.product.prodname_dotcom_the_website %} {% else %}用户帐户和 {% data variables.product.product_name %} {% endif %}的访问权限。

---
ms.openlocfilehash: 68778a5aac47ae812ce7fca5219ce8f7e416b1af
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/10/2022
ms.locfileid: "145065777"
---
{% data variables.product.product_name %} 规范化 {% ifversion ghec or ghae %}IdP{% elsif ghes %}外部身份验证提供程序{% endif %} 中的值，以确定 {% ifversion ghae %}{% data variables.product.product_name %} 上{% elsif ghec %}企业中 {% data variables.product.product_location %} 上{% elsif ghes %} {% data variables.product.product_location %} 上{% endif %} 每个新个人帐户的用户名。

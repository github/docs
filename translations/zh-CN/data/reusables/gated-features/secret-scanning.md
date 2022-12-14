---
ms.openlocfilehash: 3e32ef8b3fc53f1818f1d09b8461aa00e50f200c
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/10/2022
ms.locfileid: "145097561"
---
<!--This reusable describes the GHAS secret scanning feature. For a reusable that also covers the free secret scanning for public repositories on GitHub.com, use `secret-scanning-partner.md`  -->

{%- ifversion ghec or ghes %} 如果你的企业拥有 {% data variables.product.prodname_GH_advanced_security %} 的许可证，则 {% data variables.product.prodname_secret_scanning_GHAS_caps %} 可用于 {% data variables.product.product_name %} 中的组织拥有的存储库。

{%- elsif ghae %} {% data variables.product.prodname_secret_scanning_caps %} 可用于 {% data variables.product.product_name %} 中的组织拥有的存储库。 这是一个 {% data variables.product.prodname_GH_advanced_security %} 功能（在 beta 版本期间免费）。

{%- endif %} {% ifversion not ghae %}有关详细信息，请参阅“[GitHub 的产品](/articles/githubs-products)”。{% endif %}

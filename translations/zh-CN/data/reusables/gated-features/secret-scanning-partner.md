---
ms.openlocfilehash: 0f465bd80e066cc8c1c047a1c6a52068de79ce37
ms.sourcegitcommit: 1309b46201604c190c63bfee47dce559003899bf
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/10/2022
ms.locfileid: "145097563"
---
{%- ifversion fpt %} {% data variables.product.prodname_secret_scanning_partner_caps %} 在 {% data variables.product.prodname_dotcom_the_website %} 上的所有产品的公共存储库中自动运行。 {% data variables.product.prodname_secret_scanning_GHAS_caps %} 可用于使用 {% data variables.product.prodname_ghe_cloud %} 并拥有 {% data variables.product.prodname_GH_advanced_security %} 许可证的组织所拥有的存储库。

{%- elsif ghec %} {% data variables.product.prodname_secret_scanning_partner_caps %} 自动在所有公共存储库上运行。 如果你拥有 {% data variables.product.prodname_GH_advanced_security %} 的许可证，则可以为组织拥有的任何存储库启用和配置 {% data variables.product.prodname_secret_scanning_GHAS %}。

如果你的企业拥有 {% data variables.product.prodname_GH_advanced_security %} 的许可证，则 {%- elsif ghes %} {% data variables.product.prodname_secret_scanning_caps %} 可用于 {% data variables.product.product_name %} 中的组织拥有的存储库。

{%- elsif ghae %} {% data variables.product.prodname_secret_scanning_caps %} 可用于 {% data variables.product.product_name %} 中的组织拥有的存储库。 这是一个 {% data variables.product.prodname_GH_advanced_security %} 功能（在 beta 版本期间免费）。

{%- endif %} {% ifversion not ghae %}有关详细信息，请参阅“[GitHub 的产品](/articles/githubs-products)”。{% endif %}

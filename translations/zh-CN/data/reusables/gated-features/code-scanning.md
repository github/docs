---
ms.openlocfilehash: f17bcd04bb02118a15e29276cfc37210765bb260
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: "147419863"
---
{%- ifversion fpt %} {% data variables.product.prodname_code_scanning_capc %} 可用于 {% data variables.product.prodname_dotcom_the_website %} 上的所有公共存储库。 {% data variables.product.prodname_code_scanning_capc %} 也可用于使用 {% data variables.product.prodname_ghe_cloud %} 并拥有 {% data variables.product.prodname_GH_advanced_security %} 许可证的组织所拥有的专用存储库。

{%- elsif ghec %} {% data variables.product.prodname_code_scanning_capc %} 可用于 {% data variables.product.prodname_dotcom_the_website %} 上的所有公共存储库。 若要在组织拥有的专用存储库中使用 {% data variables.product.prodname_code_scanning %}，必须具有 {% data variables.product.prodname_GH_advanced_security %} 许可证。

{%- elsif ghes %} {% data variables.product.prodname_code_scanning_capc %} 可用于 {% data variables.product.product_name %} 中的组织拥有的存储库。 此功能需要 {% data variables.product.prodname_GH_advanced_security %} 的许可证。

{%- elsif ghae %} {% data variables.product.prodname_code_scanning_capc %} 可用于 {% data variables.product.product_name %} 中的组织拥有的存储库。 这是一项 {% data variables.product.prodname_GH_advanced_security %} 功能（在 beta 版本发行期间免费）。

{%- endif %} 有关详细信息，请参阅“[GitHub 的产品](/articles/githubs-products)”。
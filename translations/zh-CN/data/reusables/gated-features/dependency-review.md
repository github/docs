---
ms.openlocfilehash: 285d547af855fed298354ee62716de9e6c168608
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: "147062970"
---
{%- ifversion fpt %}在公共存储库上启用了依赖项评审。 依赖项评审也可用于使用 {% data variables.product.prodname_ghe_cloud %} 并拥有 {% data variables.product.prodname_GH_advanced_security %} 的许可证的组织所拥有的专用存储库。

{%- elsif ghec %} 依赖项评审包含在公共存储库的 {% data variables.product.product_name %} 中。 要在组织拥有的专用存储库中使用依赖项评审，你必须具有 {% data variables.product.prodname_GH_advanced_security %} 的许可证。

{%- elsif ghes %} 依赖项评审可用于 {% data variables.product.product_name %} 中的组织拥有的存储库。 此功能需要 {% data variables.product.prodname_GH_advanced_security %} 的许可证。

{%- elsif ghae %} 依赖项评审可用于 {% data variables.product.product_name %} 中组织拥有的存储库。 这是一项 {% data variables.product.prodname_GH_advanced_security %} 功能（在 beta 版本发行期间免费）。

{%- endif %} {% data reusables.advanced-security.more-info-ghas %}

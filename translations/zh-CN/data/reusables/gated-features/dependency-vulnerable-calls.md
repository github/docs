---
ms.openlocfilehash: 91884dc1aa5c5b0b3d32593edfb1927e6c75592f
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: "145097600"
---
{%- ifversion fpt %} 在公共存储库上启用对易受攻击的调用的检测。 此分析也可用于使用 {% data variables.product.prodname_ghe_cloud %} 并获得 {% data variables.product.prodname_GH_advanced_security %} 许可的组织所拥有的专用存储库。

{%- elsif ghec %} 对易受攻击的调用的检测包含在公共存储库的 {% data variables.product.product_name %} 中。 要在组织拥有的专用存储库中检测易受攻击的调用，你的组织必须具有 {% data variables.product.prodname_GH_advanced_security %} 的许可证。

{%- elsif ghes > 3.5 %} 对易受攻击的调用的检测可用于 {% data variables.product.product_name %} 中的组织拥有的存储库。 此功能需要 {% data variables.product.prodname_GH_advanced_security %} 的许可证。

{%- elsif ghae-issue-6076 %} 对易受攻击的调用的检测可用于 {% data variables.product.product_name %} 中的组织拥有的存储库。 这是一个 {% data variables.product.prodname_GH_advanced_security %} 功能（在 beta 版本期间免费）。

{%- endif %} {% data reusables.advanced-security.more-info-ghas %}

---
ms.openlocfilehash: 1ba4f5242c21b752ac7e3bd9a424e0c8c4e96b2a
ms.sourcegitcommit: 72e1c60459a610944184ca00e3ae60bf1f5fc6db
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/09/2022
ms.locfileid: "147876047"
---
{% warning %}

**弃用通知**：{% data variables.product.prodname_dotcom %} 将停止使用查询参数对 API 进行身份验证。 应使用 [HTTP 基本身份验证](/rest/overview/other-authentication-methods#via-oauth-and-personal-access-tokens)对 API 进行身份验证。{% ifversion fpt or ghec %} 自 2021 年 5 月 5 日起，使用查询参数对 API 进行身份验证将不再有效。 {% endif %} 有关详细信息，包括计划限电，请参阅[博客文章](https://developer.github.com/changes/2020-02-10-deprecating-auth-through-query-param/)。

{% ifversion ghes or ghae %} 出于安全考虑，不再支持使用查询参数对 API 进行身份验证（如果可用）。 相反，建议集成商移动标头中的访问令牌、`client_id` 或 `client_secret`。 {% data variables.product.prodname_dotcom %} 将宣布删除通过查询参数进行身份验证，并且会提前通知。 {% endif %}

{% endwarning %}

---
ms.openlocfilehash: de2f4c96c3a86d64a11bfb8c5fbdc4f4082601e8
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 10/25/2022
ms.locfileid: "148107571"
---
{% note %}

注意：目前，某些功能仅适用于 {% data variables.product.pat_v1_plural %}：

- 只有 {% data variables.product.pat_v1_plural %} 对不由你或你所属的组织拥有的公共存储库具有写入访问权限。{% ifversion ghec or ghes or ghae %}
- 只有 {% data variables.product.pat_v1_plural %} 对企业拥有的内部存储库自动具有写入访问权限。 {% data variables.product.pat_v2_caps %} 必须授予对内部存储库的访问权限。{% endif %}
- 外部协作者只能使用 {% data variables.product.pat_v1_plural %} 访问他们参与协作处理的组织存储库。{% ifversion ghec or ghes or ghae %}
- 只有 {% data variables.product.pat_v1_plural %} 才能访问企业。 （{% data variables.product.pat_v2_caps %}可以访问企业拥有的组织。）{% endif %}
- 以下 API 仅支持 {% data variables.product.pat_v1_plural %}。 有关 {% data variables.product.pat_v2 %} 支持的 REST API 操作列表，请参阅“[可用于 {% data variables.product.pat_v2 %} 的终结点](/rest/overview/endpoints-available-for-fine-grained-personal-access-tokens)”。
  - GraphQL API{% ifversion ghec or ghes or ghae %}
  - 适用于企业管理员的 REST API {% endif %}{% ifversion ghec or fpt %}
  - 用于管理源导入的 REST API{% endif %}
  - 用于管理 {% data variables.product.prodname_projects_v1_caps %} 的 REST API
  - 用于管理 {% data variables.product.prodname_registry %} 的 REST API
  - 用于管理通知的 REST API
  - 用于传输存储库的 REST API
  - 用于从模板创建存储库的 REST API
  - 用于为已通过身份验证的用户创建存储库的 REST API

{% endnote %}

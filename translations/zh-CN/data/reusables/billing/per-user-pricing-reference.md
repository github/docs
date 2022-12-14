---
ms.openlocfilehash: c8432b756590deab759f023a78453a482b8091fd
ms.sourcegitcommit: 67064b14c9d4d18819db8f6398358b77a1c8002a
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 05/17/2022
ms.locfileid: "145098294"
---
使用每用户定价时，每个人都使用一个许可证。 {% data variables.product.company_short %} 按主电子邮件地址标识个人。

{% data variables.product.company_short %} 针对以下人员计费。

{%- ifversion ghec %}
- 是企业中至少一个组织的成员或所有者的企业所有者 {%- endif %}
- 组织成员（包括所有者）
- 组织拥有的专用{% ifversion ghec %}或内部{% endif %}存储库的外部协作者（不包括分支上的）
- 拥有待定邀请可成为组织所有者或成员的任何人员
- 拥有待定邀请可成为组织拥有的专用{% ifversion ghec %}或内部{% endif %}存储库的外部协作者（不包括分支上的 {%- ifversion ghec %}）的任何人员
- 部署的 {% endif %} 任何 {% data variables.product.prodname_ghe_server %} 实例上的每个用户

{% data variables.product.company_short %} 不会针对以下任何人员计费。

{%- ifversion ghec %}
- 不是企业中至少一个组织的成员或所有者的企业所有者
- 企业账单管理员 {%- endif %}
- {% data variables.product.prodname_ghe_cloud %}{% endif %} 上单个组织的组织账单管理员{% ifversion ghec %}
- 拥有待定邀请可成为{% ifversion ghec %}企业或{% endif %}组织账单管理员的任何人员
- 拥有待定邀请可成为组织拥有的公共存储库上的外部协作者的任何人员

{% note %}

注意：{% data reusables.organizations.org-invite-scim %}

{% endnote %}

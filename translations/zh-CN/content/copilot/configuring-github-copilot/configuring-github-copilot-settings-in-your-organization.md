---
title: 在组织中配置 GitHub Copilot 设置
intro: '可在组织中配置 {% data variables.product.prodname_copilot %}，包括授予和撤销对个人和团队的访问权限，以及确定是否阻止与公共代码匹配的建议。'
product: '{% data reusables.gated-features.copilot %}'
miniTocMaxHeadingLevel: 3
permissions: 'Organization owners and members with admin permissions can configure {% data variables.product.prodname_copilot %} in their organization.'
versions:
  ghec: '*'
topics:
  - Copilot
shortTitle: Organization settings
ms.openlocfilehash: 345d0a48aa3f48e453fd8455027f683ee78a7640
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 12/09/2022
ms.locfileid: '148193250'
---
## 关于组织中的 {% data variables.product.prodname_copilot %} 设置

{% data reusables.copilot.about-copilot %}

若要在组织中配置 {% data variables.product.prodname_copilot %} 使用，组织的所有者必须为 {% data variables.product.prodname_ghe_cloud %} 帐户，并且企业管理员必须首先为组织启用 {% data variables.product.prodname_copilot_business_short %}。 然后，组织管理员将能够管理组织内的席位分配。 

根据在企业级别配置的策略设置，组织管理员还可以确定允许或阻止与公共代码匹配的 {% data variables.product.prodname_copilot %} 建议。 有关详细信息，请参阅“[在企业中强制实施 {% data variables.product.prodname_copilot %} 的策略](/enterprise-cloud@latest/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-copilot-in-your-enterprise)”。

## 配置组织中对 {% data variables.product.prodname_copilot %} 的访问权限

{% data variables.product.prodname_ghe_cloud %} 管理员在组织中启用 {% data variables.product.prodname_copilot_business_short %} 订阅后，你可以将 {% data variables.product.prodname_copilot %} 席位分配给组织中的个人和团队。

### 为组织中的所有当前用户和未来用户启用对 {% data variables.product.prodname_copilot %} 的访问权限

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %}
1. 在边栏的“代码规划和自动化”部分中，单击“{% octicon "copilot" aria-label="The copilot icon" %} {% data variables.product.prodname_copilot_short %}”，然后单击“访问权限” 。
1. 在“用户权限”下，若要为组织中所有当前用户和未来用户启用 {% data variables.product.prodname_copilot %}，请选择“允许所有成员”。

   ![{% data variables.product.prodname_copilot %} 用户权限的屏幕截图](/assets/images/help/copilot/allow-all-members.png)

1. 在“确认席位分配”对话框中，若要确认要为组织中的所有当前用户和将来用户启用 {% data variables.product.prodname_copilot %}，请单击“确认”。

   ![用于确认席位分配的对话框的屏幕截图](/assets/images/help/copilot/confirm-seat-assignment.png)

1. 单击“**保存**”以保存更改。

   ![{% data variables.product.prodname_copilot %} 用户权限保存按钮的屏幕截图](/assets/images/help/copilot/user-permissions-save.png)

### 为组织中的特定用户启用对 {% data variables.product.prodname_copilot %} 的访问权限

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %}
1. 在边栏的“代码规划和自动化”部分中，单击“{% octicon "copilot" aria-label="The copilot icon" %} {% data variables.product.prodname_copilot_short %}”，然后单击“访问权限” 。
1. 在“用户权限”下，若要为组织中所选的团队或用户启用 {% data variables.product.prodname_copilot %}，请选择“所选团队/用户”并单击“保存” 。

   ![{% data variables.product.prodname_copilot %} 所选用户/团队权限的屏幕截图](/assets/images/help/copilot/selected-users-teams.png)

1. 如果要从“允许所有成员”设置更新用户访问权限，请在“确认席位分配”对话框中，选择开始分配访问权限的方式。
    - 若要取消分配所有成员，然后选择应具备访问权限的成员，请选择“从头开始”。
    - 若要保留当前具有访问权限的所有成员，然后选择不应具备访问权限的成员，请选择“保留所有用户”。

      ![用于确认席位分配的对话框的屏幕截图](/assets/images/help/copilot/confirm-seat-assignment-selected.png)

1. 如果选择了“从头开始”，请单击“添加人员”或“添加团队”以添加个人用户或整个团队  。

   ![“添加人员”或“添加团队”按钮的屏幕截图](/assets/images/help/copilot/add-people-add-teams.png)

1. 如果选择了“添加人员”，则在“为组织所选成员启用 GitHub Copilot 访问权限”对话框中，可以搜索各个成员，也可以通过上传 CSV 文件批量添加成员。
 
   ![用于为所选成员启用访问权限的对话框的屏幕截图](/assets/images/help/copilot/enable-access-for-selected-members.png)

    - 若要搜索成员，请在搜索栏中键入成员的用户名、全名或电子邮件地址。
    - 若要批量添加成员，请单击“上传 CSV”，然后上传 CSV 文件，其中包含要添加的每个成员的用户名或电子邮件地址，并用逗号分隔。

        {% warning %}

      警告：上传 CSV 文件时，{% data variables.product.prodname_copilot %} 会在 {% data variables.product.prodname_dotcom_the_website %} 上搜索所有用户，寻找匹配的用户。 如果 CSV 包含不属于组织成员的用户，则单击“添加 XX 成员”时，系统会邀请他们加入组织。

      {% endwarning %}

    - 查看从 CSV 文件生成的用户列表。 若要确认要向列出的用户授予访问权限，请单击“将 XX 成员添加到访问列表”，或单击“取消”以拒绝该列表 。

     ![CSV 列表结果的屏幕截图](/assets/images/help/copilot/csv-results.png)

1. 如果选择了“添加团队”，则首先在“为组织所选团队启用 GitHub Copilot 访问权限”对话框的搜索栏中键入团队名称，选择要添加的团队，然后单击“选择以上团队” 。

   ![用于为所选团队启用访问权限的对话框的屏幕截图](/assets/images/help/copilot/add-teams.png)

1. 如果选择了“保留所有用户”，请查看组织成员的完整列表，并选择要撤消其 {% data variables.product.prodname_copilot %} 访问权限的各个成员。

   ![“保留所有用户”列表的屏幕截图](/assets/images/help/copilot/access-removal-list.png)

1. 单击“所选 XX 成员”下拉列表，然后单击“删除” 。

   ![用于删除访问权限的按钮的屏幕截图](/assets/images/help/copilot/remove-access.png)

### 禁用整个组织对 {% data variables.product.prodname_copilot %} 的访问权限

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %}
1. 在边栏的“代码规划和自动化”部分中，单击“{% octicon "copilot" aria-label="The copilot icon" %} {% data variables.product.prodname_copilot_short %}”，然后单击“访问权限” 。
1. 在“用户权限”下，若要为组织中所有用户禁用 {% data variables.product.prodname_copilot %}，请选择“已禁用”。

   ![{% data variables.product.prodname_copilot %} 已禁用用户权限的屏幕截图](/assets/images/help/copilot/disable-access.png)

1. 单击“**保存**”以保存更改。
   
   ![{% data variables.product.prodname_copilot %} 用户权限保存按钮的屏幕截图](/assets/images/help/copilot/save-disabled.png)

### 禁用组织中特定用户对 {% data variables.product.prodname_copilot %} 的访问权限

从为用户分配了 {% data variables.product.prodname_copilot %} 席位的组织中删除该用户将自动取消为其分配席位。 或者，你可以取消分配成员的 {% data variables.product.prodname_copilot %} 席位，同时保留其成员身份。 这些更改将从下一个计费周期开始生效。

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %}
1. 在边栏的“代码规划和自动化”部分中，单击“{% octicon "copilot" aria-label="The copilot icon" %} {% data variables.product.prodname_copilot_short %}”，然后单击“访问权限” 。
1. 在“用户权限”下，选择“所选团队/用户”，然后单击“保存” 。 

   ![{% data variables.product.prodname_copilot %} 所选用户/团队权限的屏幕截图](/assets/images/help/copilot/selected-users-teams.png)

    - 在“确认席位分配”弹出对话框中，选择“保留所有用户”。

      ![用于确认席位分配的对话框的屏幕截图](/assets/images/help/copilot/confirm-seat-assignment-selected.png)
  
1. 在搜索栏中的“管理访问权限”下，键入成员的用户名、全名或电子邮件地址。

   ![搜索栏的屏幕截图](/assets/images/help/copilot/manage-access-search.png)

1. 若要从有权访问 {% data variables.product.prodname_copilot %} 的用户列表中删除成员，请单击“删除”。

   ![用于删除访问权限的按钮的屏幕截图](/assets/images/help/copilot/remove-access-button.png)

## 配置组织中 {% data variables.product.prodname_copilot %} 的建议匹配策略

{% data variables.product.prodname_copilot %} 包含筛选器，该筛选器用于检测与 {% data variables.product.prodname_dotcom %} 上的公共代码匹配的代码建议。 启用筛选器后，{% data variables.product.prodname_copilot %} 会根据 {% data variables.product.prodname_dotcom %} 上的公共代码检查代码建议及其周围约 150 个字符的代码。 如果存在匹配或接近匹配，不会向你显示建议。

如果企业管理员在企业级别为建议匹配选择了“无策略(让每个组织自行决定)”，则你可以为组织设置建议匹配策略。 如果属于同一企业但具有不同建议匹配策略的多个组织为组织成员分配了席位，{% data variables.product.prodname_copilot %} 将使用最严格的策略。


{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %}
1. 在边栏的“代码规划和自动化”部分中，单击“{% octicon "copilot" aria-label="The copilot icon" %} {% data variables.product.prodname_copilot_short %}”，然后单击“策略” 。
1. 在“与公共代码匹配的建议”下拉列表中，选择“允许”或“阻止”以允许或阻止与公共代码匹配的建议 。

   ![“与公共代码匹配的建议”下拉列表的屏幕截图](/assets/images/help/copilot/duplication-detection-org-policy.png)

## 延伸阅读

- [{% data variables.product.prodname_copilot_for_business %} 隐私声明](/free-pro-team@latest/site-policy/privacy-policies/github-copilot-for-business-privacy-statement)

---
title: 在企业中为 GitHub Copilot 实施策略
intro: '你可以为企业组织内的 {% data variables.product.prodname_copilot_for_business %} 实施策略，或者允许在每个组织中设置策略。'
permissions: 'Enterprise owners can enforce policies for {% data variables.product.prodname_copilot_for_business %} in an enterprise.'
product: '{% data reusables.gated-features.copilot-billing %}'
versions:
  ghec: '*'
type: how_to
topics:
  - Copilot
  - Enterprise
  - Organizations
  - Policies
shortTitle: GitHub Copilot policies
ms.openlocfilehash: f87fa318a6390c9e254c3c115638325b8bfc474a
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 12/09/2022
ms.locfileid: '148193218'
---
## 关于企业中 {% data variables.product.prodname_copilot %} 的策略

{% data reusables.copilot.about-copilot %}

你可以为企业组织内的 {% data variables.product.prodname_copilot_for_business %} 实施策略，或者允许在每个组织中设置策略。 

如果为 {% data variables.product.prodname_copilot_for_business %} 设置订阅，则可以为企业中的组织授予和撤销对 {% data variables.product.prodname_copilot %} 的访问权限。 向组织授予对 {% data variables.product.prodname_copilot %} 的访问权限后，该组织的管理员可以向个人和团队授予访问权限。 有关详细信息，请参阅“[在组织中配置 {% data variables.product.prodname_copilot %} 设置](/copilot/configuring-github-copilot/configuring-github-copilot-settings-in-your-organization)”。

{% data variables.product.prodname_copilot_for_business %} 订阅按月计费，具体取决于分配给企业内用户的 {% data variables.product.prodname_copilot %} 席位数。 有关详细信息，请参阅“[{% data variables.product.prodname_ghe_cloud %} 的 {% data variables.product.prodname_copilot %} 定价](/enterprise-cloud@latest/billing/managing-billing-for-github-copilot/about-billing-for-github-copilot#github-copilot-pricing-for-github-enterprise-cloud)”。

{% data variables.product.prodname_copilot %} 包含筛选器，该筛选器用于检测与 {% data variables.product.prodname_dotcom %} 上的公共代码匹配的代码建议。 通过 {% data variables.product.prodname_copilot_for_business %} 可选择是在企业级启用或禁用筛选器，还是允许组织管理员在组织级别做出决定。 启用筛选器后，{% data variables.product.prodname_copilot %} 会根据 {% data variables.product.prodname_dotcom %} 上的公共代码检查代码建议及其周围约 150 个字符的代码。 如果存在匹配或接近匹配，将不会显示建议。

## 强制实施策略以管理企业中 {% data variables.product.prodname_copilot_for_business %} 的使用 

{% data reusables.enterprise-accounts.policies-tab %} {% data reusables.enterprise-accounts.copilot-tab %}
1. 在“管理组织对 {% data variables.product.prodname_copilot %} 的访问权限”下，配置 {% data variables.product.prodname_copilot %} 订阅的访问权限。 
    - 若要为企业中的所有组织禁用 {% data variables.product.prodname_copilot %}，请选择“禁用”。
    - 若要为企业中的所有组织（当前和将来）启用 {% data variables.product.prodname_copilot %}，请选择“允许所有组织”。
    - 若要为特定组织启用 {% data variables.product.prodname_copilot %}，请选择“允许特定组织”。
    
    ![{% data variables.product.prodname_copilot %} 组织访问设置的屏幕截图](/assets/images/help/copilot/manage-org-access-enterprise.png)
    
1. 如果选择了“允许特定组织”，请选择要为其启用 {% data variables.product.prodname_copilot %} 的组织。 或者，可以选择要禁用 {% data variables.product.prodname_copilot %} 访问的组织。
    - 单击“设置组织权限”，然后选择“启用”或“禁用”以授予或拒绝指定组织的 {% data variables.product.prodname_copilot %} 访问权限  。

    ![启用或禁用 {% data variables.product.prodname_copilot %} 组织权限设置的屏幕截图](/assets/images/help/copilot/set-org-permissions-enterprise.png)
   
1. 单击“保存更改”。 
  
   ![{% data variables.product.prodname_copilot %} 保存组织权限的屏幕截图](/assets/images/help/copilot/save-org-settings-enterprise.png)

## 强制实施策略以管理与企业中的公共代码匹配的 {% data variables.product.prodname_copilot %} 建议的使用

{% data reusables.enterprise-accounts.policies-tab %} {% data reusables.enterprise-accounts.copilot-tab %}
1. 在“匹配公共代码的建议”下，单击下拉菜单，然后选择要强制实施的策略。
    - 若要允许与公共代码匹配的 {% data variables.product.prodname_copilot %} 建议，请选择“允许”。
    - 若要阻止与公共代码匹配的 {% data variables.product.prodname_copilot %} 建议，请选择“阻止”。
    - 若要允许每个组织针对匹配公共代码的 {% data variables.product.prodname_copilot %} 建议的使用设置其自己的策略，请选择“无策略(让每个组织自行决定)”。
    
    ![匹配公共代码的 {% data variables.product.prodname_copilot %} 建议设置的屏幕截图](/assets/images/help/copilot/duplication-detection-enterprise-dropdown.png)

## 延伸阅读

- [{% data variables.product.prodname_copilot_for_business %} 隐私声明](/free-pro-team@latest/site-policy/privacy-policies/github-copilot-for-business-privacy-statement)

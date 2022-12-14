---
title: 查看 GitHub Copilot 使用情况
intro: '可以查看有多少用户有权访问企业中所有组织中的 {% data variables.product.prodname_copilot %}。'
product: '{% data reusables.gated-features.copilot-billing %}'
miniTocMaxHeadingLevel: 3
permissions: 'Enterprise owners can view usage for {% data variables.product.prodname_copilot %} in their enterprise.'
versions:
  ghec: '*'
type: how_to
topics:
  - Copilot
shortTitle: View your usage
ms.openlocfilehash: 9b481cfd11a3c96ce98175d3b30e3b26889c4148
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 12/09/2022
ms.locfileid: '148193214'
---
## 关于 {% data variables.product.prodname_copilot %} 使用情况

你可以查看企业中 {% data variables.product.prodname_copilot %} 的使用情况信息（按组织细分，或在组织中按席位分配状态细分）。 在企业级别，此信息包括每个组织中分配的席位数，以及当前计费周期中与每个组织关联的总支出。 在组织级别，此信息包括总席位数、上一个计费周期中结转的席位、在当前周期中添加的新席位以及当前周期结束时要删除的席位。 

如果组织管理员在当前计费周期的中途分配了一个或多个席位，则企业级信息将显示十进制数量的席位。 例如，如果组织在计费周期开始时分配了 3 个席位，然后在周期中途分配了一个额外的席位，则席位使用信息将显示 3.5 个席位。 “3”表示在周期开始时分配的席位，“0.5”表示在周期中途分配的额外席位。 

支出信息将显示每个组织在当前计费周期内的总支出。 组织当前周期的总支出通常是分配的席位数乘以每个席位的费用（每月每个席位 19 美元）。 但是，如果同一组织成员在多个组织中分配了一个席位，则其席位使用情况将反映在每个组织中，但由于企业只收取一次费用，因此他们的支出将仅反映在首次为其分配了一个席位的组织中。

## 查看 {% data variables.product.prodname_copilot_for_business %} 的使用情况

### 在企业级

{% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.billing-tab %}
1. 在“{% data variables.product.prodname_copilot_short %} 每月使用情况”下，查看 {% data variables.product.prodname_copilot %} 使用情况的明细。
    - 在“席位使用情况”下，可以查看每个组织当前分配的席位总数，小数表示在当前计费周期中分配的席位。
    - 在“支出”下，可以查看每个组织的当前计费周期中 {% data variables.product.prodname_copilot_for_business %} 的总成本。

   ![{% data variables.product.prodname_copilot %} 使用情况页面的屏幕截图](/assets/images/help/copilot/monthly-usage-enterprise.png)

### 在组织级

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %}
1. 在边栏的“访问”部分中，单击“{% octicon "credit-card" aria-label="The credit card icon" %} 帐单和计划”。
1. 在“{% data variables.product.prodname_copilot_short %}”下，查看 {% data variables.product.prodname_copilot %} 使用情况的明细以及组织中即将推出的更改。
 
   ![组织级别 {% data variables.product.prodname_copilot %} 席位使用情况页的屏幕截图](/assets/images/help/copilot/org-level-seat-view.png)

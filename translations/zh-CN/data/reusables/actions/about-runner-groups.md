---
ms.openlocfilehash: 8492ebc0962837c6f748fe30dbca08f529c353fc
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 10/25/2022
ms.locfileid: "148108118"
---
{% ifversion fpt %} {% note %}

注意：所有组织都有单个默认运行器组。 只有企业帐户和企业帐户拥有的组织才能创建和管理其他运行器组。

{% endnote %}

运行器组用于控制对运行器的访问。 组织管理员可以配置访问策略，用以控制组织中的哪些组织可以访问运行器组。

如果使用 {% data variables.product.prodname_ghe_cloud %}，你可以创建额外的运行器组；企业管理员可以配置访问策略，控制企业中哪些组织可以访问运行器组；组织管理员可以为企业运行器组分配额外的细致存储库访问策略。 {% endif -%} {% ifversion ghec or ghes or ghae %}

{% data reusables.actions.runner-group-enterprise-overview %}

新运行器在创建时，将自动分配给默认组。 运行器每次只能在一个组中。 您可以将运行器从默认组移到另一组。 有关详细信息，请参阅“[将运行器移动到组](#moving-a-runner-to-a-group)”。

{% endif %}

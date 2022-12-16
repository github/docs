---
ms.openlocfilehash: b62a0e5829c03ff7879fda2d714c4a7652d762b4
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 10/25/2022
ms.locfileid: "148108694"
---
{% comment %} 

始终在此过程上方包含安全警告。 这可以是以下任一项，具体取决于上下文是自托管运行器还是更大运行器。

{% data reusables.actions.self-hosted-runner-security-admonition %} {% data reusables.actions.hosted-runner-security-admonition %}
 
{% endcomment %}

所有组织都有单个默认运行器组。 企业帐户中的组织可以创建其他组。 组织管理员可以允许单个仓库访问运行器组。 有关如何使用 REST API 创建运行器组的信息，请参阅“[自托管运行器组](/rest/reference/actions#self-hosted-runner-groups)”。

运行器在创建时会自动分配给默认组，并且每次只能成为一个组的成员。 您可以将运行器从默认组移到您创建的任何组。

创建组时，你必须选择一个策略，用于定义哪些存储库{% ifversion restrict-groups-to-workflows %}和工作流{% endif %}有权访问运行器组。

{% ifversion ghec or ghes > 3.3 or ghae > 3.3 %} {% data reusables.organizations.navigate-to-org %} {% data reusables.organizations.org_settings %} {% data reusables.organizations.settings-sidebar-actions-runner-groups %}
1. 在“运行器组”部分，单击“新建运行器组”。
1. 为运行器组输入名称。
 {% data reusables.actions.runner-group-assign-policy-repo %} {% data reusables.actions.runner-group-assign-policy-workflow %}{%- ifversion restrict-groups-to-workflows %}组织拥有的运行器组无法访问企业中其他组织的工作流；相反，你必须创建企业拥有的运行器组。{% endif %} {% data reusables.actions.create-runner-group %} {% elsif ghae < 3.4 or ghes < 3.4 %} {% data reusables.organizations.navigate-to-org %} {% data reusables.organizations.org_settings %} {% data reusables.organizations.settings-sidebar-actions-runner-groups %}
1. 在{% ifversion ghes or ghae %}“运行器”{% endif %}下，单击“添加新项”，然后单击“新建组” 。

    ![添加运行器组](/assets/images/help/settings/actions-org-add-runner-group.png)
1. 输入运行程序组的名称，并分配仓库访问策略。

   您可以将运行器组配置为可供特定的存储库列表或组织中的所有存储库访问。{% ifversion ghec or ghes %} 默认情况下，只有私有存储库可以访问运行器组中的运行器，但您可以覆盖此操作。 如果配置企业共享的组织的运行组，则不能覆盖此设置。{% endif %}
   
   ![添加运行器组选项](/assets/images/help/settings/actions-org-add-runner-group-options.png)
1. 单击“保存组”以创建组并应用策略。
{% endif %}

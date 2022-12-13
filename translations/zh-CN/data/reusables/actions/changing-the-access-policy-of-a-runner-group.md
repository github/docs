---
ms.openlocfilehash: 19ffef89b0f09653fc396f4cfc99e47e2162548b
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 10/25/2022
ms.locfileid: "148108112"
---
{% comment %} 

始终在此过程上方包含安全警告。 这可以是以下任一项，具体取决于上下文是自托管运行器还是更大运行器。

{% data reusables.actions.self-hosted-runner-security-admonition %} {% data reusables.actions.hosted-runner-security-admonition %}
 
{% endcomment %}

对于企业中的运行器组，你可以更改企业中可以访问运行器组的组织{% ifversion restrict-groups-to-workflows %}或限制运行器组可以运行的工作流{% endif %}。 对于组织中的运行器组，你可以更改组织中可以访问运行器组的存储库{% ifversion restrict-groups-to-workflows %}或限制运行器组可以运行的工作流{% endif %}。

### 更改可以访问运行器组的组织或存储库

{% ifversion fpt or ghec or ghes > 3.3 or ghae > 3.3 %} {% data reusables.actions.runner-groups-navigate-to-repo-org-enterprise %} {% data reusables.actions.settings-sidebar-actions-runner-groups-selection %}
1. 对于企业中的运行器组，在“组织访问”下，修改可以访问运行器组的组织。 对于组织中的运行器组，在“存储库访问”下，修改可以访问运行器组的存储库。

{% elsif ghae < 3.4 or ghes < 3.4 %} {% data reusables.actions.configure-runner-group-access %} {% endif %}

{% ifversion restrict-groups-to-workflows %}
### 更改可以访问运行器组的工作流程
可以将运行器组配置为运行选定工作流或所有工作流。 例如，可以使用此设置来保护存储在运行器上的机密，或者通过将运行器组限制为仅运行特定的可重用工作流来标准化部署工作流。 如果配置企业共享的组织的运行组，则不能覆盖此设置。 {% data reusables.actions.runner-groups-navigate-to-repo-org-enterprise %} {% data reusables.actions.settings-sidebar-actions-runner-groups-selection %}
1. 在“工作流访问”下，选择下拉菜单，然后单击“选定的工作流” 。
1. 单击 {% octicon "gear" aria-label="the gear icon" %}。
1. 输入以逗号分隔的可访问运行器组的工作流程列表。 使用完整路径，包括存储库名称和所有者。 将工作流程固定到分支、标记或完整 SHA。 例如：`octo-org/octo-repo/.github/workflows/build.yml@v2, octo-org/octo-repo/.github/workflows/deploy.yml@d6dc6c96df4f32fa27b039f2084f576ed2c5c2a5, monalisa/octo-test/.github/workflows/test.yml@main`。

   只有直接在所选工作流程中定义的作业才能访问运行器组。
   
   组织拥有的运行器组无法访问企业中其他组织的工作流程。相反，您必须创建企业拥有的运行器组。

1. 单击“ **保存**”。

{% endif %}

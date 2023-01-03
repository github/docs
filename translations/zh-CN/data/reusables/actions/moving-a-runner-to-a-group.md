---
ms.openlocfilehash: 81cfff3e9391616c64b73a3d7fc3d180e6760502
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 10/25/2022
ms.locfileid: "148108747"
---
如果在注册过程中没有指定运行器组，新运行器会自动分配到默认组，然后可以移到另一个组。

{% data reusables.actions.self-hosted-runner-navigate-to-org-enterprise %} {% ifversion ghec or ghes > 3.3 or ghae > 3.3 %}
1. 在“Runners（运行器）”列表中，单击您要配置的运行器。
2. 选择“运行器组”下拉列表。
3. 在“Move runner to group（将运行器移动到组）”中，选择运行器的目的地组。
{% elsif ghae < 3.4 or ghes < 3.4 %}
1. 在设置页面的{% ifversion ghes or ghae %}“运行器组”{% endif %}部分，找到要移动的运行器的当前组，并展开组成员列表。
    ![查看运行器组成员](/assets/images/help/settings/actions-org-runner-group-members.png)
2. 选中自托管运行器旁边的复选框，然后单击“移动到组”以查看可用的目标。
    ![运行器组成员移动](/assets/images/help/settings/actions-org-runner-group-member-move.png)
3. 要移动运行器，请单击目标组。
    ![运行器组成员移动](/assets/images/help/settings/actions-org-runner-group-member-move-destination.png) {% endif %}

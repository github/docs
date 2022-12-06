---
ms.openlocfilehash: d3eda8a12037f1da8ec915c4652fa658f34fcc6b
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 10/25/2022
ms.locfileid: "148108746"
---
运行器在其组被移除时将自动返回到默认组。

{% ifversion ghes or ghae or ghec %} {% data reusables.actions.runner-groups-navigate-to-repo-org-enterprise %}
1. 在组列表中，在要删除的组右侧，单击 {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %}。
2. 若要删除组，请单击“删除组”。
3. 查看确认提示，然后单击“删除此运行器组”。 此组中的任何运行器都会自动移动到默认组，在该组中它们会继承分配给该组的访问权限。

{% endif %}

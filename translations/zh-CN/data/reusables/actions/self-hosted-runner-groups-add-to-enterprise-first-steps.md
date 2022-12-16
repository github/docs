---
ms.openlocfilehash: dcb31ab7b27f6f3ebe89699a3a2e96dd1e78a5db
ms.sourcegitcommit: 872c4751a3fc255671295a5dea6a2081c66b7b71
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 08/30/2022
ms.locfileid: "145065864"
---
{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.policies-tab %} {% data reusables.enterprise-accounts.actions-tab %} {%- ifversion ghec or ghes > 3.3 or ghae-issue-5091 %} {% data reusables.enterprise-accounts.actions-runner-groups-tab %}
1. 单击“新建运行器组”。
{%- elsif ghes < 3.4 or ghae %} {% data reusables.enterprise-accounts.actions-runners-tab %}
1. 使用“新增”下拉菜单，然后选择“新建组” 。
{%- endif %}
1. 在“组名称”下，键入运行器组的名称。

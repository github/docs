---
ms.openlocfilehash: 7ab0c705855f1bd271c17eacc9a2533184d1b5f1
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/11/2022
ms.locfileid: "145099344"
---
{% ifversion ghae %} 如果企业的策略允许为专用和内部存储库创建分支，可以将存储库分支创建到个人帐户或你拥有存储库创建权限的组织。 有关详细信息，请参阅“[组织中的角色](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization)”。

{% elsif ghes or ghec %} 如果存储库和企业策略设置允许创建分支，可以将专用或内部存储库分支创建到个人帐户或 {% data variables.product.product_location %} 上你拥有存储库创建权限的组织。

{% elsif fpt %} 如果有权访问专用存储库并且所有者允许创建分支，可以将存储库分支创建到个人帐户，或 {% data variables.product.prodname_team %} 上你拥有存储库创建权限的组织。 不能使用 {% data variables.product.prodname_free_team %} 将专用存储库分支创建到组织。 有关详细信息，请参阅“[GitHub 的产品](/articles/githubs-products)”。
{% endif %}

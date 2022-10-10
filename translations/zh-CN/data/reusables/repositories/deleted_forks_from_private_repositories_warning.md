---
ms.openlocfilehash: 444e70adced8ef2f4fdc5f91b06a28bba89c898a
ms.sourcegitcommit: 5b1461b419dbef60ae9dbdf8e905a4df30fc91b7
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/10/2022
ms.locfileid: "147877226"
---
{% warning %}

**警告：**

- 如果您删除某人访问私有仓库的权限，则其对该私有仓库的任何复刻也会被删除。 将保留私人仓库的本地克隆。 如果撤销团队对专用存储库的访问权限，或者删除对专用存储库具有访问权限的团队，并且团队成员无法通过另一个团队访问存储库，则该存储库的专用分支将被删除。{% ifversion ghes %}
- [启用 LDAP 同步后](/enterprise/admin/authentication/using-ldap#enabling-ldap-sync)，如果从存储库删除某用户，用户将失去访问权限，但其分支将不会删除。 如果此用户在三个月内被加入具有原组织仓库访问权限的团队，则其对复刻的访问权限将在下次同步时自动恢复。{% endif %}
- 您负责确保无法访问仓库的人员删除任何机密信息或知识产权。

- 对专用{% ifversion ghes or ghae or ghec %}或内部{% endif %}存储库拥有管理员权限的人可以禁止分叉该存储库，组织所有者可以禁止分叉组织中任何专用{% ifversion ghes or ghae or ghec %}或内部{% endif %}存储库。 有关详细信息，请参阅“[管理组织的分叉策略](/organizations/managing-organization-settings/managing-the-forking-policy-for-your-organization)”和“[管理存储库的分叉策略](/github/administering-a-repository/managing-the-forking-policy-for-your-repository)”。

{% endwarning %}

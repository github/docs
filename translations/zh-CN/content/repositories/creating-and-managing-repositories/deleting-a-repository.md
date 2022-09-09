---
title: 删除仓库
intro: 如果您是组织所有者或拥有仓库或复刻的管理员权限，可删除任何仓库或复刻。 删除复刻仓库不会删除上游仓库。
redirect_from:
  - /delete-a-repo
  - /deleting-a-repo
  - /articles/deleting-a-repository
  - /github/administering-a-repository/deleting-a-repository
  - /github/administering-a-repository/managing-repository-settings/deleting-a-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
ms.openlocfilehash: 53e6b69113a5483ea37c7ddd34dee7921959b62a
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '145129372'
---
{% data reusables.organizations.owners-and-admins-can %} 删除组织仓库。 如果已禁用“允许成员删除或转让此组织的存储库”，仅组织所有者可删除组织存储库。 {% data reusables.organizations.new-repo-permissions-more-info %}

{% ifversion not ghae %}删除公共仓库不会删除该仓库的任何复刻。{% endif %}

{% warning %}

**警告**：

- 删除存储库将永久删除发行版附件和团队权限。 此操作不可撤消。
- 删除私有 {% ifversion ghes or ghec or ghae %} 或内部 {% endif %} 仓库将删除仓库的所有复刻。

{% endwarning %}

某些已删除的存储库可以在删除后的 90 天内恢复。 {% ifversion ghes or ghae %}站点管理员或能为您恢复已删除的存储库。 有关详细信息，请参阅“[还原已删除的存储库](/admin/user-management/managing-repositories-in-your-enterprise/restoring-a-deleted-repository)”。 {% else %}有关详细信息，请参阅“[还原已删除的存储库](/articles/restoring-a-deleted-repository)”。{% endif %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %}
2. 在“危险区域”下，单击“删除此存储库”。
   ![存储库删除按钮](/assets/images/help/repository/repo-delete.png)
3. 阅读警告。
4. 如需验证是否正在删除正确的仓库，请输入要删除仓库的名称。
   ![删除标签](/assets/images/help/repository/repo-delete-confirmation.png)
5. 单击“我了解后果，删除此存储库”。

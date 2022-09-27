---
title: 恢复已删除的仓库
intro: '{% ifversion ghes or ghae %}企业所有者{% elsif fpt or ghec %}你{% endif %}可还原某些已删除的存储库以恢复其内容。'
permissions: '{% ifversion ghes or ghae %}{% elsif fpt or ghec %}Anyone can restore deleted repositories that were owned by their own personal account. Organization owners can restore deleted repositories that were owned by the organization.{% endif %}'
redirect_from:
  - /articles/restoring-a-deleted-repository
  - /github/administering-a-repository/restoring-a-deleted-repository
  - /github/administering-a-repository/managing-repository-settings/restoring-a-deleted-repository
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
  ghae: '*'
topics:
  - Repositories
shortTitle: Restore deleted repository
ms.openlocfilehash: 233785cc42ac6dd97a35d042186ae198dd69502a
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '146200096'
---
{% ifversion ghes or ghae %}

通常，企业所有者{% ifversion ghes %}可在 {% data variables.product.product_location %}{% endif %} 上在删除后的 90 天内还原已删除的存储库。 有关详细信息，请参阅“[还原已删除的存储库](/admin/user-management/managing-repositories-in-your-enterprise/restoring-a-deleted-repository)”。 

{% else %}

## 关于仓库恢复

删除的仓库可在 90 天内恢复，除非仓库是目前非空白的复刻网络的一部分。 复刻网络由父仓库、仓库的复刻以及该仓库复刻的复刻组成。 如果仓库是复刻网络的一部分，则在网络中的每个其他仓库被删除或者从网络中脱离之前，无法恢复它。 有关分支的详细信息，请参阅“[关于分支](/pull-requests/collaborating-with-pull-requests/working-with-forks/about-forks)”。

如果要恢复属于当前非空白的复刻网络一部分的仓库，可以联系 {% data variables.contact.contact_support %}。

仓库被删除后，可能需要一个小时才能恢复。

恢复仓库不会恢复发行版附件或团队权限。 已恢复的议题不会被标记。

## 还原个人帐户所拥有的已删除存储库

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.repo-tab %} {% data reusables.user-settings.deleted-repos %} {% data reusables.user-settings.restore-repo %} {% data reusables.user-settings.restore-confirmation %}

## 恢复组织所拥有的已删除仓库


{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.deleted-repos %} {% data reusables.user-settings.restore-repo %} {% data reusables.user-settings.restore-confirmation %}

## 延伸阅读

- [删除存储库](/articles/deleting-a-repository)

{% endif %}

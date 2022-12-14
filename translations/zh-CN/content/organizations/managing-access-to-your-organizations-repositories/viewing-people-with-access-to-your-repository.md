---
title: 查看具有仓库访问权限的人员
intro: 您可以查看{% ifversion ghec or ghes or ghae %} 和导出{% endif %} 拥有组织内仓库访问权限的人员列表。
redirect_from:
- /articles/viewing-people-with-access-to-your-repository
- /github/setting-up-and-managing-organizations-and-teams/viewing-people-with-access-to-your-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
- Organizations
- Teams
shortTitle: View people with access
permissions: Organization owners can view people with access to a repository.
ms.openlocfilehash: 01ee5b1844e32b4ba631fda67babaa9e9f8a982e
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/11/2022
ms.locfileid: "147066632"
---
## 关于有权访问您的存储库的人员列表

您可以使用此信息来帮助离职人员、收集合规性数据以及其他常规安全检查。 

{% ifversion fpt %} 使用 {% data variables.product.prodname_ghe_cloud %} 的组织还可以导出有权访问存储库的人员的 CSV 列表。 有关详细信息，请参阅 [{% data variables.product.prodname_ghe_cloud %} 文档](/enterprise-cloud@latest/organizations/managing-access-to-your-organizations-repositories/viewing-people-with-access-to-your-repository)。
{% endif %}

{% ifversion fpt or ghec or ghes > 3.3 or ghae-issue-5974 %} ![访问管理概述](/assets/images/help/repository/manage-access-overview.png) {% else %} ![仓库人员权限列表](/assets/images/help/repository/repository-permissions-list.png) {% endif %}
## 查看具有仓库访问权限的人员

{% ifversion fpt or ghec or ghes > 3.3 or ghae-issue-5974 %} 你可以在存储库设置中查看团队和具有存储库访问权限的团队和人员的组合概述。 有关详细信息，请参阅“[管理有权访问存储库的团队和人员](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/managing-teams-and-people-with-access-to-your-repository#about-access-management-for-repositories)”。 {% else %} {% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.accessing-repository-graphs %} {% data reusables.repositories.accessing-repository-people %} {% endif %}

{% ifversion ghec or ghes or ghae %}
## 导出具有您的仓库访问权限人员的列表

{% ifversion ghec %} {% note %}

**注意：** 只有使用 {% data variables.product.prodname_ghe_cloud %} 的组织才能导出有权访问存储库的人员列表。 {% data reusables.enterprise.link-to-ghec-trial %}

{% endnote %} {% endif %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.accessing-repository-graphs %} {% data reusables.repositories.accessing-repository-people %}
4. 单击“导出 CSV”。
  ![存储库边栏中的“人员”选项卡](/assets/images/help/repository/export-repository-permissions.png) {% endif %}

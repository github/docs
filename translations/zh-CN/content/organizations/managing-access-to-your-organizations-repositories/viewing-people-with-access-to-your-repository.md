---
title: 查看具有仓库访问权限的人员
intro: '组织所有者可以查看人员对组织内仓库的访问权限。 使用 {% data variables.product.prodname_ghe_cloud %} 或 {% data variables.product.prodname_ghe_server %} 的组织所有者还可导出具有仓库访问权限人员的 CSV 列表。'
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
shortTitle: 查看有访问权限的人
---

管理员可以使用此信息帮助非内部人员，收集数据用于合规性以及其他常规安全检查。
{% ifversion fpt or ghec or ghes > 3.3 or ghae-issue-5974 %}
![访问权限管理概览](/assets/images/help/repository/manage-access-overview.png)
{% else %}
![仓库人员权限列表](/assets/images/help/repository/repository-permissions-list.png)
{% endif %}
## 查看具有仓库访问权限的人员

{% ifversion fpt or ghec or ghes > 3.3 or ghae-issue-5974 %}
您可以在仓库设置中查看有权访问仓库的团队和人员的组合概述。 更多信息请参阅“[管理有权访问仓库的团队和人员](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/managing-teams-and-people-with-access-to-your-repository#about-access-management-for-repositories)”。
{% else %}
{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.accessing-repository-graphs %}
{% data reusables.repositories.accessing-repository-people %}
{% endif %}
## 导出具有您的仓库访问权限人员的列表

{% data variables.product.prodname_ghe_cloud %} 或 {% data variables.product.prodname_ghe_server %} 上的组织所有者可以导出具有仓库访问权限人员的 CSV 列表。

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.accessing-repository-graphs %}
{% data reusables.repositories.accessing-repository-people %}
4. 单击 **Export CSV（导出 CSV）**。 ![仓库边栏中的人员选项卡](/assets/images/help/repository/export-repository-permissions.png)

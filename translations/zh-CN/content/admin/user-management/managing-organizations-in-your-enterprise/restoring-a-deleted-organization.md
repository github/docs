---
title: 还原已删除的组织
intro: '可以部分还原以前在 {% data variables.product.product_location %} 上删除的组织。'
versions:
  ghes: '*'
type: how_to
topics:
  - Administrator
  - Enterprise
  - Organizations
shortTitle: Restore organization
permissions: 'Site administers can restore an organization on {% data variables.product.product_name %}.'
ms.openlocfilehash: 1963b1e55a9c8047c19bafd087162caa8d5085f2
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '147063752'
---
## 关于组织还原

只要审核日志 Elasticsearch 索引包含 `org.delete` 事件的数据，你就可以使用站点管理仪表板还原之前在 {% data variables.product.product_location %} 上删除的组织。

还原组织后，该组织将不会与删除前完全相同。 必须手动还原组织拥有的所有存储库。 有关详细信息，请参阅“[还原已删除的存储库](/admin/user-management/managing-repositories-in-your-enterprise/restoring-a-deleted-repository)”。

你也可以使用审核日志来帮助手动重新添加团队和组织成员。 有关详细信息，请参阅“[还原成员和团队](#restoring-members-and-teams)”。

## 还原组织

{% data reusables.enterprise_site_admin_settings.access-settings %}
1. 在“搜索用户、组织、企业、团队、存储库、Gist 和应用程序”下，搜索组织。

  ![搜索字段和“搜索”按钮的屏幕截图](/assets/images/enterprise/stafftools/search-field.png)

1. 在“已删除的帐户”下，在要还原的组织右侧，选择“{% octicon "kebab-horizontal" aria-label="The edit icon" %}”下拉菜单，然后单击“重新创建”。

   ![已删除组织的下拉菜单屏幕截图](/assets/images/enterprise/stafftools/recreate-organization.png)

## 还原成员和团队

可以使用审核日志查找组织以前的成员和团队的列表，然后手动进行重新创建。 有关使用审核日志的详细信息，请参阅“[审核整个企业的用户](/admin/user-management/managing-users-in-your-enterprise/auditing-users-across-your-enterprise)”。

在下面的所有搜索词组中，将 ORGANIZATION 替换为组织名称，将 TEAM 替换为团队名称。

### 还原组织成员

1. 要查找在组织中添加和删除的所有用户，请在审核日志中搜索 `action:org.add_member org:ORGANIZATION` 和 `action:org.remove_member org:ORGANIZATION`。
1. 手动将每个仍应是成员的用户添加到组织中。 有关详细信息，请参阅“[将人员添加到组织](/organizations/managing-membership-in-your-organization/adding-people-to-your-organization)”。

### 还原团队

1. 要查找每个团队名称，请在审核日志中搜索 `action:team.create org:ORGANIZATION`。
1. 手动重新创建团队。 有关详细信息，请参阅“[创建团队](/organizations/organizing-members-into-teams/creating-a-team)”。
1. 要查找已添加到每个团队的成员，请搜索 `action:team.add_member team:"ORGANIZATION/TEAM"`。
1. 手动重新添加团队成员。 有关详细信息，请参阅“[将组织成员添加到团队](/organizations/organizing-members-into-teams/adding-organization-members-to-a-team)”。
1. 要查找团队有权访问的存储库，请搜索 `action:team.add_repository team:"ORGANIZATION/TEAM"`。
1. 要查找团队被授予对每个存储库的访问级别，请搜索 `action:team.update_repository_permission team:"ORGANIZATION/TEAM"`。
1. 再次手动授予团队访问权限。 有关详细信息，请参阅“[管理团队对组织存储库的访问](/organizations/managing-access-to-your-organizations-repositories/managing-team-access-to-an-organization-repository)”。

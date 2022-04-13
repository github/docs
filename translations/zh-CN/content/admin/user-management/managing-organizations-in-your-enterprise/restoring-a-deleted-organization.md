---
title: 恢复已删除的组织
intro: '您可以部分恢复以前在 {% data variables.product.product_location %} 上删除的组织。'
versions:
  ghes: '*'
type: how_to
topics:
  - Administrator
  - Enterprise
  - Organizations
shortTitle: 恢复组织
permissions: 'Site administers can restore an organization on {% data variables.product.product_name %}.'
---

## 关于组织恢复

您可以使用站点管理仪表板来恢复以前在 {% data variables.product.product_location %} 上删除的组织，只要审核日志 Elasticsearch 索引包含 `org.delete` 事件的数据即可。

恢复组织后，组织与删除之前不完全相同。 您必须手动恢复组织拥有的所有存储库。 更多信息请参阅“[恢复删除的仓库](/admin/user-management/managing-repositories-in-your-enterprise/restoring-a-deleted-repository)”。

您还可以使用审核日志来帮助您手动重新添加团队和组织成员。 更多信息请参阅“[恢复成员和团队](#restoring-members-and-teams)”。

## 恢复组织

{% data reusables.enterprise_site_admin_settings.access-settings %}
1. 在“Search users, organizations, enterprises, teams, repositories, gists, and applications（搜索用户、组织、企业、团队、存储库、要点和应用程序）”下，搜索组织。

  ![搜索字段和“搜索”按钮的屏幕截图](/assets/images/enterprise/stafftools/search-field.png)

1. 在“Deleted accounts（已删除的帐户）”下要恢复的组织右侧，选择 {% octicon "kebab-horizontal" aria-label="The edit icon" %} 下拉菜单，然后单击 **Recreate（重新创建）**。

   ![已删除组织的下拉菜单屏幕截图](/assets/images/enterprise/stafftools/recreate-organization.png)

## 恢复成员和团队

您可以使用审核日志查找组织中以前的成员和团队的列表，然后手动重新创建它们。 有关使用审核日志的详细信息，请参阅“[审核企业中的用户](/admin/user-management/managing-users-in-your-enterprise/auditing-users-across-your-enterprise)”。

在下面的所有搜索短语中，将 ORGANIZATION 替换为组织的名称，将 TEAM 替换为团队的名称。

### 恢复组织成员

1. 若要查找在组织中添加和删除的所有用户，请在审核日志中搜索 `action:org.add_member org:ORGANIZATION` 和 `action:org.remove_member org:ORGANIZATION`。
1. 手动将仍应是成员的每个用户添加到组织中。 更多信息请参阅“[向组织添加人员](/organizations/managing-membership-in-your-organization/adding-people-to-your-organization)”。

### 恢复团队

1. 若要查找每个团队名称，请在审核日志中搜索 `action:team.create org:ORGANIZATION`。
1. 手动重新创建团队。 For more information, see "[Creating a team](/organizations/organizing-members-into-teams/creating-a-team)."
1. 要查找已添加到每个团队的成员，请搜索 `action:team.add_member team:"ORGANIZATION/TEAM"`。
1. 手动重新添加团队成员。 更多信息请参阅“[将组织成员添加到团队](/organizations/organizing-members-into-teams/adding-organization-members-to-a-team)”。
1. 要查找团队被授予访问权限的存储库，请搜索 `action:team.add_repository team:"ORGANIZATION/TEAM"`。
1. 要查找团队为每个存储库授予的访问权限级别，请搜索 `action:team.update_repository_permission team:"ORGANIZATION/TEAM"`。
1. 再次手动授予团队访问权限。 更多信息请参阅“[管理团队的组织仓库访问权限](/organizations/managing-access-to-your-organizations-repositories/managing-team-access-to-an-organization-repository)”。

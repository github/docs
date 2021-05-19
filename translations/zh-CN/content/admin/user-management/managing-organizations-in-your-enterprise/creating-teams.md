---
title: 创建团队
intro: 借助团队，组织可以创建成员组和控制仓库的访问权限。 可以向团队成员授予特定仓库的读取、写入或管理员权限。
redirect_from:
  - /enterprise/admin/user-management/creating-teams
  - /admin/user-management/creating-teams
versions:
  enterprise-server: '*'
type: how_to
topics:
  - Access management
  - Enterprise
  - Teams
  - User account
---
团队是 {% data variables.product.prodname_dotcom %} 许多协作功能的中心，例如团队 @提及，此功能可以通知相关方您想要请求他们的输入或注意。 更多信息请参阅“[组织仓库的权限级别](/enterprise/{{ currentVersion }}/user/articles/repository-permission-levels-for-an-organization/)”。

一个团队可以代表您的公司内的一个组，或者包含具有特定兴趣或专业知识的人。 例如，{% data variables.product.product_location %} 上的可访问性专家团队可能包括来自多个不同部门的人。 团队可以体现职能关注，对公司现有的部门层次结构进行补充。

组织可以创建包含多个级别的嵌套团队来反映公司或小组的层级结构。 更多信息请参阅“[关于团队](/enterprise/{{ currentVersion }}/user/articles/about-teams/#nested-teams)”。

### 创建团队

审慎的团队组合是控制仓库权限的强有力方式。 例如，如果您的组织仅允许发布工程团队向任何仓库的默认分支推送代码，您可以仅向发布工程团队授予组织仓库的**管理员**权限，向所有其他团队授予**读取**权限。

{% data reusables.profile.enterprise_access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.new_team %}
{% data reusables.organizations.team_name %}
{% data reusables.organizations.team_description %}
{% data reusables.organizations.team_visibility %}
{% data reusables.organizations.create-team-choose-parent %}
{% data reusables.organizations.create_team %}

### 创建启用 LDAP 同步的团队

使用 LDAP 进行用户身份验证的实例可以使用 LDAP 同步管理团队的成员。 在 **LDAP group（LDAP 组）** 字段中设置组的 **Distinguished Name（识别名称）**(DN) 会在您的 LDAP 服务器上将团队映射到 LDAP 组。 如果您使用 LDAP 同步管理团队的成员，将无法管理 {% data variables.product.product_location %} 内的团队。 启用 LDAP 同步后，映射的团队将以配置的间隔定期在后台同步成员。 更多信息请参阅“[启用 LDAP 同步](/enterprise/{{ page.version }}/admin/guides/user-management/using-ldap#enabling-ldap-sync)”。

{% data reusables.enterprise_user_management.ldap-sync-nested-teams %}

{% warning %}

**注意：**
- LDAP 同步仅管理团队的成员列表。 您必须在 {% data variables.product.prodname_ghe_server %} 内管理团队的仓库和权限。
- 如果到 DN 的 LDAP 组映射被移除（例如，LDAP 组被删除），将从同步的 {% data variables.product.prodname_ghe_server %} 团队中移除每个成员。 要解决这个问题，请将团队映射到新 DN，重新添加团队成员，并[手动同步映射](/enterprise/{{ page.version }}/admin/guides/user-management/using-ldap/#manually-syncing-ldap-accounts)。
- 启用 LDAP 同步后，如果某个用户被从仓库中移除，他们将失去访问权限，但是他们的分叉将不会删除。 如果某个用户被添加到团队中并在三个月内拥有原始组织仓库的访问权限，他们对分叉的访问权限将在下一次同步时自动恢复。

{% endwarning %}

1. 确保[启用 LDAP 同步](/enterprise/{{ page.version }}/admin/guides/user-management/using-ldap#enabling-ldap-sync)。
{% data reusables.profile.enterprise_access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.new_team %}
{% data reusables.organizations.team_name %}
6. 搜索要映射团队的目标 LDAP 组的 DN。 如果您不知道 DN，请输入 LDAP 组的名称。
{% data variables.product.prodname_ghe_server %} 将搜索并自动完成任何匹配。
![映射到 LDAP 组 DN](/assets/images/enterprise/orgs-and-teams/ldap-group-mapping.png)
{% data reusables.organizations.team_description %}
{% data reusables.organizations.team_visibility %}
{% data reusables.organizations.create-team-choose-parent %}
{% data reusables.organizations.create_team %}

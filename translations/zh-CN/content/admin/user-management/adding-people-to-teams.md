---
title: 向团队添加人员
redirect_from:
  - /enterprise/admin/articles/adding-teams/
  - /enterprise/admin/articles/adding-or-inviting-people-to-teams/
  - /enterprise/admin/guides/user-management/adding-or-inviting-people-to-teams/
  - /enterprise/admin/user-management/adding-people-to-teams
intro: '创建团队后，组织管理员可以将用户从 {% data variables.product.product_location_enterprise %} 添加到团队并决定他们可以访问哪些仓库。'
versions:
  enterprise-server: '*'
---

每个团队都有自己单独定义的[组织所拥有仓库的访问权限](/articles/permission-levels-for-an-organization)。

- 具有所有者角色的成员可以向所有团队添加成员或从中移除现有组织成员。
- 具有管理员权限的团队成员仅可以修改所属团队的成员资格和仓库。

### 设置团队

{% data reusables.profile.enterprise_access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.specific_team %}
{% data reusables.organizations.invite_to_team %}
{% data reusables.organizations.review-team-repository-access %}

### 将团队映射到 LDAP 组（例如，使用 LDAP 同步进行用户身份验证）

{% data reusables.enterprise_management_console.badge_indicator %}

要将新成员添加到已同步至 LDAP 组的团队，请将用户添加为 LDAP 组的成员，或者联系您的 LDAP 管理员。

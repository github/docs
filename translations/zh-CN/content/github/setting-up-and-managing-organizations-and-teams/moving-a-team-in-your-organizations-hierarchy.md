---
title: 在组织的层次结构中移动团队
intro: '团队维护员和组织所有者可以在父团队下嵌套团队，或者更改或删除已嵌套团队的父团队。'
redirect_from:
  - /articles/changing-a-team-s-parent/
  - /articles/moving-a-team-in-your-organization-s-hierarchy
  - /articles/moving-a-team-in-your-organizations-hierarchy
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

组织所有者可以更改任何团队的父团队。 团队维护员如果同时是子团队和父团队的维护员，则可更改团队的父团队。 没有子团队维护员权限的团队维护员可以申请添加父团队或子团队。 更多信息请参阅“[申请添加或更改父团队](/articles/requesting-to-add-or-change-a-parent-team)”和“[申请添加子团队](/articles/requesting-to-add-a-child-team)”。

{% data reusables.organizations.child-team-inherits-permissions %}

{% tip %}

**提示：**
- 不能将团队的父团队更改为机密团队。 更多信息请参阅“[关于团队](/articles/about-teams)”。
- 不能将父团队嵌套在其子团队下面。

{% endtip %}

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.teams %}
4. 在团队列表中，单击您要更改其父团队的团队名称。 ![组织的团队列表](/assets/images/help/teams/click-team-name.png)
{% data reusables.organizations.team_settings %}
6. 使用下拉菜单选择父团队，要删除现有团队，则选择 **Clear selected value（清除所选值）**。 ![列出组织团队的下拉菜单](/assets/images/help/teams/choose-parent-team.png)
7. 单击 **Update（更新）**。
{% data reusables.repositories.changed-repository-access-permissions %}
9. 单击 **Confirm new parent team（确认新的父团队）**。 ![包含仓库访问权限更改相关信息的模态框](/assets/images/help/teams/confirm-new-parent-team.png)

### 延伸阅读

- "[关于团队](/articles/about-teams)"

---
title: 申请添加或更改父团队
intro: 如果您在团队中具有维护员权限，可以申请在组织的层次结构中将团队嵌套在父团队下面。
redirect_from:
  - /articles/requesting-to-add-or-change-a-parent-team
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

申请添加或更改团队的父团队时，申请会发送给父团队的维护员。 新父团队的维护员批准申请后，您的团队将作为子团队嵌套在组织的层次结构中该父团队下。

如果您是组织所有者或者在子团队及父团队中具有团队维护员权限，无需申请批准便可添加父团队，或者从您团队的设置页面更改其父团队。 更多信息请参阅“[在组织的层次结构中移动团队](/articles/moving-a-team-in-your-organization-s-hierarchy)”。

{% data reusables.organizations.child-team-inherits-permissions %}

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.teams %}
4. 在团队列表中，单击您要在父团队下嵌套的团队的名称。 ![组织的团队列表](/assets/images/help/teams/click-team-name.png)
{% data reusables.organizations.team_settings %}
6. 在“Parent team（父团队）”下，使用“Select parent team（选择父团队）”下拉菜单，然后单击新父团队的名称。 ![列出组织团队的下拉菜单](/assets/images/help/teams/choose-parent-team.png)
7. 单击 **Save changes（保存更改）**。
{% data reusables.repositories.changed-repository-access-permissions %}
9. 单击 **Confirm changes（确认更改）**以发送添加或更改父团队的申请。 ![包含仓库访问权限更改相关信息的模态框](/assets/images/help/teams/confirm-new-parent-team.png)

### 延伸阅读

- "[关于团队](/articles/about-teams)"
- “[在组织的层次结构中移动团队](/articles/moving-a-team-in-your-organization-s-hierarchy)”
- “[申请添加子团队](/articles/requesting-to-add-a-child-team)”

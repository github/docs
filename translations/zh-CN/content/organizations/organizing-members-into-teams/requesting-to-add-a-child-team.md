---
title: 申请添加子团队
intro: 如果您在团队中具有维护员权限，可以申请在组织的层次结构中将现有团队嵌套在您的团队下面。
redirect_from:
  - /articles/requesting-to-add-a-child-team
  - /github/setting-up-and-managing-organizations-and-teams/requesting-to-add-a-child-team
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Organizations
  - Teams
---

申请将某个团队添加为子团队时，申请会发送到子团队的维护员。 在子团队的维护员批准申请后，该子团队将嵌套在组织的层次结构中的父团队下面。

如果您是组织所有者或者在子团队及父团队中具有团队维护员权限，无需申请批准便可添加子团队，或者从子团队的设置页面更改其父团队。 更多信息请参阅“[在组织的层次结构中移动团队](/articles/moving-a-team-in-your-organization-s-hierarchy)”。

{% data reusables.organizations.child-team-inherits-permissions %}

{% data reusables.profile.access_org %}
{% data reusables.user_settings.access_org %}
{% data reusables.organizations.teams %}
4. 在团队列表中，单击您要在其中添加子团队的父团队名称。 ![组织的团队列表](/assets/images/help/teams/click-team-name.png)
5. 在团队页面顶部，单击 {% octicon "people" aria-label="The people icon" %} **Teams（团队）**。 ![团队页面上的团队选项卡](/assets/images/help/teams/team-teams-tab.png)
6. 单击 **Add a team（添加团队）**。 ![团队页面上的添加团队按钮](/assets/images/help/teams/add-a-team.png)
7. 键入要添加为子团队的团队名称，然后从下拉列表中选择它。 ![用于键入子团队名称的文本框和用于选择的下拉菜单](/assets/images/help/teams/type-child-team-name.png)
{% data reusables.repositories.changed-repository-access-permissions %}
9. 单击 **Confirm changes（确认更改）**以发送添加子团队的申请。 ![包含仓库访问权限更改相关信息的模态框](/assets/images/help/teams/confirm-new-parent-team.png)

### 延伸阅读

- "[关于团队](/articles/about-teams)"
- “[在组织的层次结构中移动团队](/articles/moving-a-team-in-your-organization-s-hierarchy)”
- "[申请添加或更改父团队](/articles/requesting-to-add-or-change-a-parent-team)"

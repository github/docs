---
title: 关于团队
intro: 团队是通过级联访问权限和提及来反映公司或群组结构的组织成员组。
redirect_from:
  - /articles/about-teams
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

![组织中的团队列表](/assets/images/help/teams/org-list-of-teams.png)

组织所有者和团队维护员可向团队授予仓库的管理员、读取或写入权限。 组织成员可通过提及团队的名称向整个团队发送通知。 组织成员也可通过向该团队申请审查来发送通知给整个团队。 组织成员可以向能够读取其中打开了拉取请求的仓库的特定团队申请审查。 可在 CODEOWNERS 文件中将团队指定为某些代码类型或区域的所有者。

更多信息请参阅：
- "[管理团队对组织仓库的访问](/articles/managing-team-access-to-an-organization-repository)"
- "[提及人员和团队](/articles/basic-writing-and-formatting-syntax/#mentioning-people-and-teams)"
- "[关于代码所有者](/articles/about-code-owners/)"

![团队提及图像](/assets/images/help/teams/team-mention.png)

{% if currentVersion != "free-pro-team@latest" %}

您也可以使用 LDAP 同步根据建立的 LDAP 组同步 {% data variables.product.product_location_enterprise %} 团队成员和团队角色。 这可让您从 LDAP 服务器为用户建立基于角色的访问控制，而无需在 {% data variables.product.product_location_enterprise %} 中手动创建。 更多信息请参阅“[启用 LDAP 同步](/enterprise/{{ page.version }}/admin/guides/user-management/using-ldap#enabling-ldap-sync)”。

{% endif %}

{% data reusables.organizations.team-synchronization %}

### 团队可见性

{% data reusables.organizations.types-of-team-visibility %}

### 团队页面

每个团队都在组织中有自己的页面。 在团队的页面上，您可以查看团队成员、子团队和团队的仓库。 组织所有者和团队维护员可从团队页面访问团队设置以及更新团队的说明和头像。

组织成员可以创建和参与团队讨论。 更多信息请参阅“[关于团队讨论](/articles/about-team-discussions)”。

![列出团队成员和讨论的团队页面](/assets/images/help/organizations/team-page-discussions-tab.png)

### 嵌套团队

您可以在 {% data variables.product.product_name %} 组织中通过多级嵌套团队反映您的组或公司的层级。 一个父团队可有多个子团队，而每个子团队只能有一个父团队。 您无法嵌套机密团队。

子团队继承父团队的访问权限，简化大组的权限管理。 当父团队被 @提及时，子团队的成员也会收到通知，因此简化与多组人员的沟通。

例如，如果您的团队结构是“员工 > 工程 > 应用工程 > 身份”，则向“工程”授予对仓库的写入权限意味着“应用工程”和“身份”也会获得该访问权限。 如果您 @提及“身份”团队或组织层次结构底部的任何团队，则它们是唯一会收到通知的团队。

![包含父团队和子团队的团队页面](/assets/images/help/teams/nested-teams-eng-example.png)

要轻松了解谁共享父团队的权限和提及，可以在父团队页面的 Members（成员）选项卡上查看其子团队的所有成员。 子团队的成员不是父团队的直接成员。

![包含子团队所有成员的父团队页面](/assets/images/help/teams/team-and-subteam-members.png)

在创建团队时您可以选择父团队，或者以后在组织的层次结构中移动团队。 更多信息请参阅“[在组织的层次结构中移动团队](/articles/moving-a-team-in-your-organization-s-hierarchy)”。

{% if currentVersion != "free-pro-team@latest" %}

{% data reusables.enterprise_user_management.ldap-sync-nested-teams %}

{% endif %}

### 准备在组织中嵌套团队

如果您的组织已经有团队，则在其上面或下面嵌套团队之前，应审计每个团队的仓库访问权限。 也应考虑要为组织实施的新结构。

在团队层次结构的顶部，应向父团队授予对父团队及其子团队每个成员都安全的仓库访问权限。 随着在向层次结构底部的移动，可以更细致地向子团队成员授予访问敏感仓库的其他权限。

1. 从现有团队删除所有成员
2. 审计并调整每个团队的仓库访问权限，并为每个团队指定一个父团队
3. 创建需要的任何新团队，为每个新团队选择一个父团队，并向他们授予仓库访问权限
4. 直接向团队添加人员

### 延伸阅读

- "[创建团队](/articles/creating-a-team)"
- "[向团队添加组织成员](/articles/adding-organization-members-to-a-team)"

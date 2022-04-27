---
title: 管理组织中的版主
intro: 您可以将组织中的个人或团队分配给版主角色，以授予其阻止和限制访问的能力。
permissions: Organization owners can assign the moderator role.
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
  - Community
shortTitle: 管理版主
---

## 关于组织版主

有时需要阻止参与者，或者为组织或单个存储库设置交互限制。 作为组织所有者，您可以执行这些任务，但您可能希望将这些任务委派给组织中的其他成员。 为此，您可以向组织成员或团队分配版主角色。

组织版主可以：
* 阻止和取消阻止组织中的用户。 更多信息请参阅“[阻止用户访问组织](/communities/maintaining-your-safety-on-github/blocking-a-user-from-your-organization)”。
* 管理组织交互限制。 更多信息请参阅“[限制组织中的交互](/communities/moderating-comments-and-conversations/limiting-interactions-in-your-organization)”。
* 管理存储库交互限制。 更多信息请参阅“[限制存储库中的交互](/communities/moderating-comments-and-conversations/limiting-interactions-in-your-repository)”。
* 在组织拥有的所有公共存储库中隐藏评论。 更多信息请参阅“[管理破坏性评论](/communities/moderating-comments-and-conversations/managing-disruptive-comments)”。

将某人设为组织版主不会向他们授予除上述能力以外的其他能力。 例如，仅对存储库具有读取访问权限的人不会通过成为版主而获得写入访问权限。

您最多可以添加 10 个人或团队作为版主。 如果您已将 10 个人和/或团队分配为用户，并且想要添加更多用户，则可以将人员分组到版主团队中，然后使用它来替换一个或多个现有任务。 For more information, see "[Creating a team](/organizations/organizing-members-into-teams/creating-a-team)."

## 添加组织版主

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.security-and-analysis %}
1. 在侧边栏的“Access（访问）”部分中，选择 **{% octicon "report" aria-label="The report icon" %} 主持**，然后点击 **Moderators（版主）**。
1. 在 **Moderators（版主）**下，搜索并选择要分配版主角色的人员或团队。 您选择的每个人或团队都将显示在搜索栏下方的列表中。 ![版主搜索字段和列表](/assets/images/help/organizations/add-moderators.png)


## 删除组织版主

按照上面的步骤 1-4 操作，然后点击您要以版主身份移除的人员或团队旁边的 **Remove moderator（移除版主）**。

---
title: 管理团队的代码审查设置
intro: 您可以通过在请求团队审阅拉取请求时限制通知来减少团队的干扰。
redirect_from:
  - /github/setting-up-and-managing-organizations-and-teams/managing-code-review-assignment-for-your-team
  - /organizations/organizing-members-into-teams/managing-code-review-assignment-for-your-team
product: '{% data reusables.gated-features.code-review-assignment %}'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: 代码审查设置
permissions: Team maintainers and organization owners can configure code review settings.
---

## 关于代码审查设置

{% ifversion only-notify-requested-members %}
为减少团队的干扰并阐明拉取请求审查的个人责任，可以配置代码审查设置。

- 团队通知
- 自动分配

## 关于团队通知

如果选择仅通知请求的团队成员，则在请求团队审阅拉取请求时，如果还请求审阅整个团队的特定成员，则可以禁用向整个团队发送通知。 当存储库将团队配置为代码所有者时，这尤其有用，但存储库的参与者通常知道作为其拉取请求的正确审查者的特定个人。 更多信息请参阅“[关于代码所有者](/github/creating-cloning-and-archiving-repositories/about-code-owners)”。

## 关于自动分配
{% endif %}

启用自动分配后，每当请求您的团队审阅拉取请求时，该团队都会被删除为审阅者，并且会在团队的位置分配指定的团队成员子集。 代码审查分配允许您决定在请求团队审查时是通知整个团队，还是只通知一部分团队成员。

当自动请求代码所有者进行审阅时，除非将分支保护规则配置为要求代码所有者进行审阅，否则仍将删除团队并将其替换为个人。 如果存在此类分支保护规则，则无法删除团队请求，因此还会显示单个请求。

### 路由算法

代码审查分配根据两种可能的算法之一自动选择和分配审查者。

循环算法根据最近收到最少审查请求的人员选择审查者，侧重于在团队所有成员之间的轮替，而不管他们目前拥有多少未完成的审查。

负载平衡算法根据每个成员最近的审查请求总数选择审查者，并考虑每个成员未完成的审查数。 负载平衡算法努力确保每个团队成员在任意 30 天内审查相同数量的拉取请求。

任何将状态设置为“忙碌”的团队成员将不会被选中进行审核。 如果所有团队成员都忙碌，拉取请求仍将分配给团队本身。 有关用户状态的更多信息，请参阅“[设置状态](/account-and-profile/setting-up-and-managing-your-github-profile/customizing-your-profile/personalizing-your-profile#setting-a-status)”。

{% ifversion only-notify-requested-members %}
## 配置团队通知

{% data reusables.profile.access_org %}
{% data reusables.user-settings.access_org %}
{% data reusables.organizations.specific_team %}
{% data reusables.organizations.team_settings %}
{% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-5658 %}
1. 在左侧边栏中，单击 **{% octicon "code-review" aria-label="The code-review icon" %} 代码审查**。
{% else %}
1. 在左侧边栏中，单击 **Code review（代码审查）**。 ![代码审查按钮](/assets/images/help/teams/review-button.png)
{% endif %}
1. 选择 **Only notify requested team members（仅通知请求的团队成员）**。 ![代码审查团队通知](/assets/images/help/teams/review-assignment-notifications.png)
1. 单击 **Save changes（保存更改）**。
{% endif %}

## 配置自动分配
{% data reusables.profile.access_org %}
{% data reusables.user-settings.access_org %}
{% data reusables.organizations.specific_team %}
{% data reusables.organizations.team_settings %}
{% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-5658 %}
1. 在左侧边栏中，单击 **{% octicon "code-review" aria-label="The code-review icon" %} 代码审查**。
{% else %}
1. 在左侧边栏中，单击 **Code review（代码审查）**。 ![代码审查按钮](/assets/images/help/teams/review-button.png)
{% endif %}
1. 选择 **Enable auto assignment（启用自动分配）**。 ![自动分配按钮](/assets/images/help/teams/review-assignment-enable.png)
1. 在“How many team members should be assigned to review?（应分配多少团队成员进行审查？）”下，使用下拉菜单选择多个要分配给每个拉取请求的审查者。 ![审查者人数下拉列表](/assets/images/help/teams/review-assignment-number.png)
1. 在“Routing algorithm（路由算法）”下，使用下拉菜单选择要使用的算法。 更多信息请参阅“[路由算法](#routing-algorithms)”。 ![路由算法下拉列表](/assets/images/help/teams/review-assignment-algorithm.png)
1. （可选）要始终跳过某些团队成员，请选择 **Never assign certain team members（永不分配某些团队成员）**。 然后，选择要始终跳过的一个或多个团队成员。 ![永不分配某些团队成员复选框和下拉列表](/assets/images/help/teams/review-assignment-skip-members.png)
{% ifversion ghes < 3.4 %}
1. （可选）要对每个拉取请求审查只通知代码审查分配所选择的团队成员，在“Notifications（通知）”下选择 **If assigning team members, don't notify the entire team（如果分配团队成员，请不要通知整个团队）**。
{%- endif %}
{% ifversion fpt or ghec or ghae-issue-5108 or ghes > 3.2 %}
1. （可选）在分配请求时，要将子团队成员作为潜在审查者，请选择 **Child team members（子团队成员）**。
1. （可选）要根据可分配的成员总数计算已要求审查的成员，选择 **Count existing requests（计算现有请求）**。
1. （可选）在分配团队成员时，要从团队中删除审核请求，请选择 **Team review request（团队审核请求）**。
{%- endif %}
1. 单击 **Save changes（保存更改）**。

## 禁用自动分配
{% data reusables.profile.access_org %}
{% data reusables.user-settings.access_org %}
{% data reusables.organizations.specific_team %}
{% data reusables.organizations.team_settings %}
1. 选择 **Enable auto assignment（启用自动分配）**以删除复选标记。 ![代码审查分配按钮](/assets/images/help/teams/review-assignment-enable.png)
1. 单击 **Save changes（保存更改）**。

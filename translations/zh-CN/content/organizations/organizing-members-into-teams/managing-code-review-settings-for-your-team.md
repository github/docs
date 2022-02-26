---
title: Managing code review settings for your team
intro: You can decrease noise for your team by limiting notifications when your team is requested to review a pull request.
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
shortTitle: Code review settings
permissions: Team maintainers and organization owners can configure code review settings.
---

## About code review settings

{% if only-notify-requested-members %}
To reduce noise for your team and clarify individual responsibility for pull request reviews, you can configure code review settings.

- Team notifications
- Auto assignment

## About team notifications

When you choose to only notify requested team members, you disable sending notifications to the entire team when the team is requested to review a pull request if a specific member of that team is also requested for review. This is especially useful when a repository is configured with teams as code owners, but contributors to the repository often know a specific individual that would be the correct reviewer for their pull request. 更多信息请参阅“[关于代码所有者](/github/creating-cloning-and-archiving-repositories/about-code-owners)”。

## About auto assignment
{% endif %}

When you enable auto assignment, any time your team has been requested to review a pull request, the team is removed as a reviewer and a specified subset of team members are assigned in the team's place. 代码审查分配允许您决定在请求团队审查时是通知整个团队，还是只通知一部分团队成员。

When code owners are automatically requested for review, the team is still removed and replaced with individuals unless a branch protection rule is configured to require review from code owners. If such a branch protection rule is in place, the team request cannot be removed and so the individual request will appear in addition.

{% ifversion fpt %}
为了进一步提高团队的协作能力，您可以升级到 {% data variables.product.prodname_ghe_cloud %}，其中包括受保护的分支机构和私有仓库的代码所有者等功能。 {% data reusables.enterprise.link-to-ghec-trial %}
{% endif %}

### 路由算法

代码审查分配根据两种可能的算法之一自动选择和分配审查者。

循环算法根据最近收到最少审查请求的人员选择审查者，侧重于在团队所有成员之间的轮替，而不管他们目前拥有多少未完成的审查。

负载平衡算法根据每个成员最近的审查请求总数选择审查者，并考虑每个成员未完成的审查数。 负载平衡算法努力确保每个团队成员在任意 30 天内审查相同数量的拉取请求。

任何将状态设置为“忙碌”的团队成员将不会被选中进行审核。 如果所有团队成员都忙碌，拉取请求仍将分配给团队本身。 有关用户状态的更多信息，请参阅“[设置状态](/account-and-profile/setting-up-and-managing-your-github-profile/customizing-your-profile/personalizing-your-profile#setting-a-status)”。

{% if only-notify-requested-members %}
## Configuring team notifications

{% data reusables.profile.access_org %}
{% data reusables.user-settings.access_org %}
{% data reusables.organizations.specific_team %}
{% data reusables.organizations.team_settings %}
{% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-5658 %}
1. In the left sidebar, click **{% octicon "code-review" aria-label="The code-review icon" %} Code review**.
{% else %}
1. In the left sidebar, click **Code review** ![Code review button](/assets/images/help/teams/review-button.png)
{% endif %}
1. Select **Only notify requested team members.** ![Code review team notifications](/assets/images/help/teams/review-assignment-notifications.png)
1. 单击 **Save changes（保存更改）**。
{% endif %}

## Configuring auto assignment
{% data reusables.profile.access_org %}
{% data reusables.user-settings.access_org %}
{% data reusables.organizations.specific_team %}
{% data reusables.organizations.team_settings %}
{% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-5658 %}
1. In the left sidebar, click **{% octicon "code-review" aria-label="The code-review icon" %} Code review**.
{% else %}
1. In the left sidebar, click **Code review** ![Code review button](/assets/images/help/teams/review-button.png)
{% endif %}
1. 选择 **Enable auto assignment（启用自动分配）**。 ![Auto-assignment button](/assets/images/help/teams/review-assignment-enable.png)
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

## Disabling auto assignment
{% data reusables.profile.access_org %}
{% data reusables.user-settings.access_org %}
{% data reusables.organizations.specific_team %}
{% data reusables.organizations.team_settings %}
1. 选择 **Enable auto assignment（启用自动分配）**以删除复选标记。 ![代码审查分配按钮](/assets/images/help/teams/review-assignment-enable.png)
1. 单击 **Save changes（保存更改）**。

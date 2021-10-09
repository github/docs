---
title: 管理团队的代码审查分配
intro: 代码审查分配明确指出哪些团队成员应为拉取请求提交审查。
redirect_from:
  - /github/setting-up-and-managing-organizations-and-teams/managing-code-review-assignment-for-your-team
product: '{% data reusables.gated-features.code-review-assignment %}'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
topics:
  - Organizations
  - Teams
shortTitle: 代码审查分配
permissions: Team maintainers and organization owners can configure code review assignments.
---

## 关于代码审查分配

通过使用代码审查分配，每当请求您的团队审查拉取请求时，团队将作为审查者被删除，并将一部分指定的团队成员分配到团队的位置。 代码审查分配允许您决定在请求团队审查时是通知整个团队，还是只通知一部分团队成员。

当自动请求代码所有者进行审查时，团队也会被删除，并替换为个人。 单个审批不符合受保护分支中代码所有者审批的要求。 更多信息请参阅“[关于代码所有者](/github/creating-cloning-and-archiving-repositories/about-code-owners)”。

{% ifversion fpt %}
To further enhance your team's collaboration abilities, you can upgrade to {% data variables.product.prodname_ghe_cloud %}, which includes features like protected branches and code owners on private repositories. {% data reusables.enterprise.link-to-ghec-trial %}
{% endif %}

## 路由算法

代码审查分配根据两种可能的算法之一自动选择和分配审查者。

循环算法根据最近收到最少审查请求的人员选择审查者，侧重于在团队所有成员之间的轮替，而不管他们目前拥有多少未完成的审查。

负载平衡算法根据每个成员最近的审查请求总数选择审查者，并考虑每个成员未完成的审查数。 负载平衡算法努力确保每个团队成员在任意 30 天内审查相同数量的拉取请求。

Any team members that have set their status to "Busy" will not be selected for review. If all team members are busy, the pull request will remain assigned to the team itself. For more information about user statuses, see "[Setting a status](/account-and-profile/setting-up-and-managing-your-github-profile/customizing-your-profile/personalizing-your-profile#setting-a-status)."

## 配置代码审查分配
{% data reusables.profile.access_org %}
{% data reusables.user_settings.access_org %}
{% data reusables.organizations.specific_team %}
{% data reusables.organizations.team_settings %}
5. 在左侧边栏中，单击 **Code review assignment（代码审查分配）**。 ![代码审查分配按钮](/assets/images/help/teams/review-assignment-button.png)
6. 选择 **Enable auto assignment（启用自动分配）**。 ![代码审查分配按钮](/assets/images/help/teams/review-assignment-enable.png)
7. 在“How many team members should be assigned to review?（应分配多少团队成员进行审查？）”下，使用下拉菜单选择多个要分配给每个拉取请求的审查者。 ![审查者人数下拉列表](/assets/images/help/teams/review-assignment-number.png)
8. 在“Routing algorithm（路由算法）”下，使用下拉菜单选择要使用的算法。 更多信息请参阅“[路由算法](#routing-algorithms)”。 ![路由算法下拉列表](/assets/images/help/teams/review-assignment-algorithm.png)
9. （可选）要始终跳过某些团队成员，请选择 **Never assign certain team members（永不分配某些团队成员）**。 然后，选择要始终跳过的一个或多个团队成员。 ![永不分配某些团队成员复选框和下拉列表](/assets/images/help/teams/review-assignment-skip-members.png)
10. Optionally, to only notify the team members chosen by code review assignment for each pull review request, under "Notifications" select **If assigning team members, don't notify the entire team.** ![Code review assignment notifications](/assets/images/help/teams/review-assignment-notifications.png){% ifversion fpt or ghae or ghes > 3.2 %}
11. Optionally, to include members of child teams as potential reviewers when assigning requests, select **Child team members**.
12. Optionally, to count any members whose review has already been requested against the total number of members to assign, select **Count existing requests**.
13. Optionally, to remove the review request from the team when assigning team members, select **Team review request**.{% endif %}
14. 单击 **Save changes（保存更改）**。

## 禁用代码审查分配
{% data reusables.profile.access_org %}
{% data reusables.user_settings.access_org %}
{% data reusables.organizations.specific_team %}
{% data reusables.organizations.team_settings %}
5. 选择 **Enable auto assignment（启用自动分配）**以删除复选标记。 ![代码审查分配按钮](/assets/images/help/teams/review-assignment-enable.png)
6. 单击 **Save changes（保存更改）**。

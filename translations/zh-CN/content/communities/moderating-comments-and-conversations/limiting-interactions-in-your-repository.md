---
title: 限制仓库中的交互
intro: 您可以临时对公共仓库中的某些用户限制活动一段时间。
redirect_from:
  - /articles/limiting-interactions-with-your-repository
  - /articles/limiting-interactions-in-your-repository
  - /github/building-a-strong-community/limiting-interactions-in-your-repository
versions:
  fpt: '*'
  ghec: '*'
permissions: People with admin permissions to a repository can temporarily limit interactions in that repository.
topics:
  - Community
shortTitle: 限制仓库中的交互
---

## 关于临时交互限制

{% data reusables.community.interaction-limits-restrictions %}

{% data reusables.community.interaction-limits-duration %} 在限制期过后，用户可以在您的仓库中恢复正常活动。

{% data reusables.community.types-of-interaction-limits %}

您也可以为用户帐户或组织拥有的所有仓库启用或活动限制。 如果启用了用户范围或组织范围的限制，则不能限制帐户拥有的单个仓库的活动。 更多信息请参阅“[限制用户帐户的交互](/communities/moderating-comments-and-conversations/limiting-interactions-for-your-user-account)”和“[限制组织中的交互](/communities/moderating-comments-and-conversations/limiting-interactions-in-your-organization)”。

## 限制仓库中的交互

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
1. 在侧边栏的“Access（访问）”部分中，选择 **{% octicon "comment-discussion" aria-label="The comment-discussion icon" %} 主持选项**，然后点击 **Interaction limits（互动限制）**。
{% data reusables.community.set-interaction-limit %}
  ![临时交互限制选项](/assets/images/help/repository/temporary-interaction-limits-options.png)

## 延伸阅读
- “[举报滥用或垃圾邮件](/communities/maintaining-your-safety-on-github/reporting-abuse-or-spam)”
- "[管理个人对组织仓库的访问](/articles/managing-an-individual-s-access-to-an-organization-repository)"
- "[用户帐户仓库的权限级别](/articles/permission-levels-for-a-user-account-repository)"
- "[组织的仓库角色](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization)"

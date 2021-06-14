---
title: 限制仓库中的交互
intro: 您可以临时对公共仓库中的某些用户限制活动一段时间。
redirect_from:
  - /articles/limiting-interactions-with-your-repository/
  - /articles/limiting-interactions-in-your-repository
  - /github/building-a-strong-community/limiting-interactions-in-your-repository
versions:
  free-pro-team: '*'
permissions: 对仓库具有管理员权限的人可以临时限制该仓库中的交互。
topics:
  - 社区
---
### 关于临时交互限制

{% data reusables.community.interaction-limits-restrictions %}

{% data reusables.community.interaction-limits-duration %} 在限制期过后，用户可以在您的仓库中恢复正常活动。

{% data reusables.community.types-of-interaction-limits %}

您也可以为用户帐户或组织拥有的所有仓库启用或活动限制。 如果启用了用户范围或组织范围的限制，则不能限制帐户拥有的单个仓库的活动。 更多信息请参阅“[限制用户帐户的交互](/github/building-a-strong-community/limiting-interactions-for-your-user-account)”和“[限制组织中的交互](/github/building-a-strong-community/limiting-interactions-in-your-organization)”。

### 限制仓库中的交互

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
1. 在左侧边栏中，单击 **Moderation settings（仲裁设置）**。 ![仓库设置侧边栏中的"Moderation settings（仲裁设置）"](/assets/images/help/repository/repo-settings-moderation-settings.png)
1. 在“Moderation settings（仲裁设置）”下，单击 **Interaction limits（交互限制）**。 ![仓库设置中的交互限制 ](/assets/images/help/repository/repo-settings-interaction-limits.png)
{% data reusables.community.set-interaction-limit %}
  ![临时交互限制选项](/assets/images/help/repository/temporary-interaction-limits-options.png)

### 延伸阅读
- “[举报滥用或垃圾邮件](/articles/reporting-abuse-or-spam)”
- "[管理个人对组织仓库的访问](/articles/managing-an-individual-s-access-to-an-organization-repository)"
- "[用户帐户仓库的权限级别](/articles/permission-levels-for-a-user-account-repository)"
- "[组织的仓库权限级别](/articles/repository-permission-levels-for-an-organization)"

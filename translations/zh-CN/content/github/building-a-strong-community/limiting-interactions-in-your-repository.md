---
title: 限制仓库中的交互
intro: 'You can temporarily enforce a period of limited activity for certain users on a public repository.'
redirect_from:
  - /articles/limiting-interactions-with-your-repository/
  - /articles/limiting-interactions-in-your-repository
versions:
  free-pro-team: '*'
permissions: People with admin permissions to a repository can temporarily limit interactions in that repository.
---

### About temporary interaction limits

{% data reusables.community.interaction-limits-restrictions %}

{% data reusables.community.interaction-limits-duration %} After the duration of your limit passes, users can resume normal activity in your repository.

{% data reusables.community.types-of-interaction-limits %}

You can also enable activity limitations on all repositories owned by your user account or an organization. If a user-wide or organization-wide limit is enabled, you can't limit activity for individual repositories owned by the account. For more information, see "[Limiting interactions for your user account](/github/building-a-strong-community/limiting-interactions-for-your-user-account)" and "[Limiting interactions in your organization](/github/building-a-strong-community/limiting-interactions-in-your-organization)."

### 限制仓库中的交互

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
1. In the left sidebar, click **Moderation settings**. !["Moderation settings" in repository settings sidebar](/assets/images/help/repository/repo-settings-moderation-settings.png)
1. Under "Moderation settings", click **Interaction limits**. ![仓库设置中的交互限制 ](/assets/images/help/repository/repo-settings-interaction-limits.png)
{% data reusables.community.set-interaction-limit %}
  ![临时交互限制选项](/assets/images/help/repository/temporary-interaction-limits-options.png)

### 延伸阅读
- “[举报滥用或垃圾邮件](/articles/reporting-abuse-or-spam)”
- "[管理个人对组织仓库的访问](/articles/managing-an-individual-s-access-to-an-organization-repository)"
- "[用户帐户仓库的权限级别](/articles/permission-levels-for-a-user-account-repository)"
- "[组织的仓库权限级别](/articles/repository-permission-levels-for-an-organization)"

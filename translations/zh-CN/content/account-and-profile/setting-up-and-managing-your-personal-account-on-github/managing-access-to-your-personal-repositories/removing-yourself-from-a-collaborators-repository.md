---
title: 从协作者的仓库中删除您自己
intro: 如果您不再想要成为其他人仓库中的协作者，您可以删除自己。
redirect_from:
  - /leave-a-collaborative-repo
  - /leave-a-repo
  - /articles/removing-yourself-from-a-collaborator-s-repo
  - /articles/removing-yourself-from-a-collaborator-s-repository
  - /articles/removing-yourself-from-a-collaborators-repository
  - /github/setting-up-and-managing-your-github-user-account/removing-yourself-from-a-collaborators-repository
  - /github/setting-up-and-managing-your-github-user-account/managing-access-to-your-personal-repositories/removing-yourself-from-a-collaborators-repository
  - /account-and-profile/setting-up-and-managing-your-github-user-account/managing-access-to-your-personal-repositories/removing-yourself-from-a-collaborators-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Accounts
  - Repositories
shortTitle: 删除自己
---

{% data reusables.user-settings.access_settings %}
{% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-5658 %}
2. 在侧边栏的“Code planning, and automation（代码规划和自动化）”部分中，点击 **{% octicon "repo" aria-label="The repo icon" %} Repositories（存储库）**。
{% else %}
2. 在左侧边栏中，单击 **Repositories（仓库）**。 ![仓库选项卡](/assets/images/help/settings/settings-sidebar-repositories.png)
{% endif %}
3. 在您要离开的仓库旁边，单击 **Leave（离开）**。 ![离开按钮](/assets/images/help/repository/repo-leave.png)
4. 仔细阅读警告，然后单击“I understand, leave this repository（我已了解，离开此仓库）”。 ![警告您离开的对话框](/assets/images/help/repository/repo-leave-confirmation.png)

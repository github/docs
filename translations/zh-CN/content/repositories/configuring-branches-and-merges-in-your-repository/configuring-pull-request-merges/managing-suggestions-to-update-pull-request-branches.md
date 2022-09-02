---
title: 管理更新请求分支的建议
intro: 您可以授予用户在拉取请求分支与基本分支不同步时始终更新该分支的能力。
versions:
  fpt: '*'
  ghes: '> 3.4'
  ghae: issue-6069
  ghec: '*'
topics:
  - Repositories
shortTitle: 管理分支更新
permissions: People with maintainer permissions can enable or disable the setting to suggest updating pull request branches.
---

## 关于更新拉取请求分支的建议

如果启用该设置以始终建议更新存储库中的拉取请求分支，则当拉取请求的头部分支与基本分支不符时，具有写入权限的人员将始终能够在拉取请求页面上更新头部分支。 如果未启用，则仅当基本分支要求分支在合并之前保持最新并且分支不是最新时，才可以使用更新功能。 更多信息请参阅“[使拉取请求与基本分支保持同步](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/keeping-your-pull-request-in-sync-with-the-base-branch)”。

{% data reusables.enterprise.3-5-missing-feature %}

## 管理更新请求分支的建议

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
3. 在“Pull Requests（拉取请求）”下，选择或取消选择 **Always suggest updating pull request branches（始终建议更新拉取请求分支）**。 ![启用或禁用始终建议更新分支的复选框](/assets/images/help/repository/always-suggest-updating-branches.png)

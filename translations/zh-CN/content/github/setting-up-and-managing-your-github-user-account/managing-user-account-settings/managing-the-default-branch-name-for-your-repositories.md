---
title: 管理仓库的默认分支名称
intro: You can set a default branch name for all new repositories that you create.
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.23'
  github-ae: '*'
topics:
  - Accounts
redirect_from:
  - /github/setting-up-and-managing-your-github-user-account/managing-the-default-branch-name-for-your-repositories
---

### About the default branch name

当您在 {% data variables.product.product_location %} 上创建一个新仓库时，仓库将包含一个分支，它就是默认分支。 您可以更改 {% data variables.product.product_name %} 用于您新建仓库中默认分支的名称。 有关默认分支的更多信息，请参阅“[关于分支](/github/collaborating-with-issues-and-pull-requests/about-branches#about-the-default-branch)”。

{% data reusables.branches.set-default-branch %}

### 设置默认分支名称

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.repo-tab %}
3. 在“Repository default branch（仓库默认分支）”下，单击 **Change default branch name now（立即更改默认分支名称）**。 ![覆盖按钮](/assets/images/help/settings/repo-default-name-button.png)
4. 键入要用于新分支的默认名称。 ![输入默认名称的文本框](/assets/images/help/settings/repo-default-name-text.png)
5. 单击 **Update（更新）**。 ![更新按钮](/assets/images/help/settings/repo-default-name-update.png)

### 延伸阅读

- "[管理组织中仓库的默认分支名称](/organizations/managing-organization-settings/managing-the-default-branch-name-for-repositories-in-your-organization)"

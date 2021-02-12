---
title: 管理组织中仓库的默认分支名称
intro: 'You can set the default branch name for repositories that members create in your organization.'
permissions: Managing the default branch name for your repositories
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.23'
  github-ae: '*'
---

### About the default branch name

当组织成员在组织中创建一个新仓库时，该仓库将包含一个分支，它就是默认分支。 When a member of your organization creates a new repository, {% data variables.product.prodname_dotcom %} will create a single branch and set it as the repository's default branch. {% data variables.product.prodname_dotcom %} currently names the default branch `master`, but you can set the default branch to be named anything that makes sense for your development environment. 有关默认分支的更多信息，请参阅“[关于分支](/github/collaborating-with-issues-and-pull-requests/about-branches#about-the-default-branch)”。

{% data reusables.branches.set-default-branch %}

如果企业所有者为您的企业强制实施了默认分支名称策略，您将无法为组织设置默认分支名称。 但是，您可以更改单个仓库的默认分支。 更多信息请参阅{% if currentVersion == "free-pro-team@latest" %}“[在企业中实施仓库管理策略](/github/setting-up-and-managing-your-enterprise/enforcing-repository-management-policies-in-your-enterprise-account#enforcing-a-policy-on-the-default-branch-name)”{% else %}“[在企业中实施仓库管理策略](/admin/policies/enforcing-repository-management-policies-in-your-enterprise#enforcing-a-policy-on-the-default-branch-name)”{% endif %} 和“[更改默认分支](/github/administering-a-repository/changing-the-default-branch)”。

### 设置默认分支名称

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.repository-defaults %}
3. 在“Repository default branch（仓库默认分支）”下，单击 **Change default branch name now（立即更改默认分支名称）**。 ![覆盖按钮](/assets/images/help/organizations/repo-default-name-button.png)
4. 键入要用于新分支的默认名称。 ![输入默认名称的文本框](/assets/images/help/organizations/repo-default-name-text.png)
5. 单击 **Update（更新）**。 ![更新按钮](/assets/images/help/organizations/repo-default-name-update.png)

### 延伸阅读

- /github/setting-up-and-managing-your-github-user-account/managing-the-default-branch-name-for-your-repositories

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

When a member of your organization creates a new repository in your organization, the repository contains one branch, which is the default branch. When a member of your organization creates a new repository, {% data variables.product.prodname_dotcom %} will create a single branch and set it as the repository's default branch. {% data variables.product.prodname_dotcom %} currently names the default branch `master`, but you can set the default branch to be named anything that makes sense for your development environment. For more information about the default branch, see "[About branches](/github/collaborating-with-issues-and-pull-requests/about-branches#about-the-default-branch)."

{% data reusables.branches.set-default-branch %}

If an enterprise owner has enforced a policy for the default branch name for your enterprise, you cannot set a default branch name for your organization. Instead, you can change the default branch for individual repositories. For more information, see {% if currentVersion == "free-pro-team@latest" %}"[Enforcing repository management policies in your enterprise](/github/setting-up-and-managing-your-enterprise/enforcing-repository-management-policies-in-your-enterprise-account#enforcing-a-policy-on-the-default-branch-name)"{% else %}"[Enforcing repository management policies in your enterprise](/admin/policies/enforcing-repository-management-policies-in-your-enterprise#enforcing-a-policy-on-the-default-branch-name)"{% endif %} and "[Changing the default branch](/github/administering-a-repository/changing-the-default-branch)."

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

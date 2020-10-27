---
title: 创建模板仓库
intro: 'You can make an existing repository a template, so you and others can generate new repositories with the same directory structure{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.20" %}, branches,{% endif %} and files.'
permissions: '任何对仓库有管理员权限的人都可以将该仓库设置为模板。'
redirect_from:
  - /articles/creating-a-template-repository
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

{% note %}

**Note**: Your template repository cannot include files stored using {% data variables.large_files.product_name_short %}.

{% endnote %}

要创建模板仓库，必须先创建一个仓库，然后将该仓库设置为模板。 关于创建仓库的更多信息，请参阅“[创建新仓库](/articles/creating-a-new-repository)”。

After you make your repository a template, anyone with access to the repository can generate a new repository with the same directory structure and files as your default branch.{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.20" %} They can also choose to include all the other branches in your repository.{% endif %} For more information, see "[Creating a repository from a template](/articles/creating-a-repository-from-a-template)."

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
1. 选择 **Template repository（模板仓库）**。 ![将仓库设置为模板的复选框](/assets/images/help/repository/template-repository-checkbox.png)

---
title: 创建模板仓库
intro: '您可以将现有仓库设置为模板，以便您与其他人能够生成目录结构相同的新仓库{% if currentVersion == "free-pro-team@latest" or currentVersion == "github-ae@latest" or currentVersion ver_gt "enterprise-server@2.20" %}、分支{% endif %} 和文件。'
permissions: 任何对仓库有管理员权限的人都可以将该仓库设置为模板。
redirect_from:
  - /articles/creating-a-template-repository
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - 仓库
---

{% note %}

**注意**：您的模板仓库不能包含使用 {% data variables.large_files.product_name_short %} 存储的文件。

{% endnote %}

要创建模板仓库，必须先创建一个仓库，然后将该仓库设置为模板。 关于创建仓库的更多信息，请参阅“[创建新仓库](/articles/creating-a-new-repository)”。

将仓库设置为模板后，有权访问仓库的任何人都可以生成与默认分支具有相同目录结构和文件的新仓库。{% if currentVersion == "free-pro-team@latest" or currentVersion == "github-ae@latest" or currentVersion ver_gt "enterprise-server@2.20" %} 他们还可以选择包含您的仓库中的所有其他分支。{% endif %} 更多信息请参阅“[从模板创建仓库](/articles/creating-a-repository-from-a-template)”。

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
1. 选择 **Template repository（模板仓库）**。 ![将仓库设置为模板的复选框](/assets/images/help/repository/template-repository-checkbox.png)

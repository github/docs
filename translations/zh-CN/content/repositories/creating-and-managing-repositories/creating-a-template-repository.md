---
title: 创建模板仓库
intro: 您可以将现有仓库设置为模板，以便您与其他人能够生成目录结构相同的新仓库、分支和文件。
permissions: Anyone with admin permissions to a repository can make the repository a template.
redirect_from:
  - /articles/creating-a-template-repository
  - /github/creating-cloning-and-archiving-repositories/creating-a-template-repository
  - /github/creating-cloning-and-archiving-repositories/creating-a-repository-on-github/creating-a-template-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: 创建模板仓库
---

{% note %}

**注意**：您的模板仓库不能包含使用 {% data variables.large_files.product_name_short %} 存储的文件。

{% endnote %}

要创建模板仓库，必须先创建一个仓库，然后将该仓库设置为模板。 关于创建仓库的更多信息，请参阅“[创建新仓库](/articles/creating-a-new-repository)”。

将仓库设置为模板后，任何对该仓库有访问权限的人都可以生成与默认分支具有相同目录结构和文件的新仓库。 他们还可以选择在存储库中包含所有其他分支。 从模板创建的分支具有不相关的历史记录，这样您无法创建拉取请求或在分支之间合并。 更多信息请参阅“[从模板创建仓库](/articles/creating-a-repository-from-a-template)”。

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
1. 选择 **Template repository（模板仓库）**。 ![将仓库设置为模板的复选框](/assets/images/help/repository/template-repository-checkbox.png)

---
title: 从模板创建仓库
intro: 您可以生成具有与现有仓库相同的目录结构和文件的新仓库。
redirect_from:
  - /articles/creating-a-repository-from-a-template
  - /github/creating-cloning-and-archiving-repositories/creating-a-repository-from-a-template
  - /github/creating-cloning-and-archiving-repositories/creating-a-repository-on-github/creating-a-repository-from-a-template
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: 从模板创建
---

## 关于仓库模板

任何对模板仓库具有读取权限的人都可以从该模板创建仓库。 更多信息请参阅“[创建模板仓库](/articles/creating-a-template-repository)”。

{% ifversion fpt or ghae or ghes or ghec %}
{% tip %}

**提示**：您也可以使用 {% data variables.product.prodname_cli %} 从模板创建仓库。 更多信息请参阅 {% data variables.product.prodname_cli %} 文档中的“[`gh 仓库创建`](https://cli.github.com/manual/gh_repo_create)”。

{% endtip %}
{% endif %}

{% ifversion fpt or ghae or ghes or ghec %}
您可以选择仅包括模板仓库的默认分支中的目录结构和文件，或者包括所有分支。 从模板创建的分支具有不相关的历史记录，这意味着您无法创建拉取请求或在分支之间合并。
{% endif %}

从模板创建仓库类似于创建仓库的复刻，但存在一些重要差异：
- 新的复刻包含父仓库的整个提交历史记录，而从模板创建的仓库从一个提交开始记录。
- 对复刻的提交不会显示在您的贡献图中，而对从模板创建的仓库的提交会显示在您的贡献图中。
- 复刻可能是向现有项目贡献代码的临时方式，而从模板创建的仓库可以快速启动新项目。

有关复刻的更多信息，请参阅“[关于复刻](/pull-requests/collaborating-with-pull-requests/working-with-forks/about-forks)”。

## 从模板创建仓库

{% data reusables.repositories.navigate-to-repo %}
2. 在文件列表上方，单击 **Use this template（使用此模板）**。 ![使用此模板按钮](/assets/images/help/repository/use-this-template-button.png)
{% data reusables.repositories.owner-drop-down %}
{% data reusables.repositories.repo-name %}
{% data reusables.repositories.choose-repo-visibility %}{% ifversion fpt or ghae or ghes or ghec %}
6. （可选）要包括模板中所有分支的目录结构和文件，而不仅仅是默认分支，请选择 **Include all branches（包括所有分支）**。 ![Include all branches checkbox](/assets/images/help/repository/include-all-branches.png){% endif %}
{% data reusables.repositories.select-marketplace-apps %}
8. 单击 **Create repository from template（从模板创建仓库）**。

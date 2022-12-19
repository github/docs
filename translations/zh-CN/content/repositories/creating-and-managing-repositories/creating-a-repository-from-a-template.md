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
shortTitle: Create from a template
ms.openlocfilehash: 16d124431426e19cf95c768e8a4cdaa5f4da2e17
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 11/09/2022
ms.locfileid: '148159762'
---
## 关于仓库模板

任何对模板仓库具有读取权限的人都可以从该模板创建仓库。 有关详细信息，请参阅“[创建模板存储库](/articles/creating-a-template-repository)”。

{% tip %}

提示：你也可以使用 {% data variables.product.prodname_cli %} 从模板创建存储库。 有关详细信息，请参阅 {% data variables.product.prodname_cli %} 文档中的“[`gh repo create`](https://cli.github.com/manual/gh_repo_create)”。

{% endtip %}

您可以选择仅包括模板仓库的默认分支中的目录结构和文件，或者包括所有分支。 从模板创建的分支具有不相关的历史记录，这意味着您无法创建拉取请求或在分支之间合并。

从模板创建仓库类似于创建仓库的复刻，但存在一些重要差异：
- 新的复刻包含父仓库的整个提交历史记录，而从模板创建的仓库从一个提交开始记录。
- 对复刻的提交不会显示在您的贡献图中，而对从模板创建的仓库的提交会显示在您的贡献图中。
- 复刻可能是向现有项目贡献代码的临时方式，而从模板创建的仓库可以快速启动新项目。

有关分支的详细信息，请参阅“[关于分支](/pull-requests/collaborating-with-pull-requests/working-with-forks/about-forks)”。

## 从模板创建仓库

{% data reusables.repositories.navigate-to-repo %}
1. 在文件列表上方，单击“使用此模板”。
{% ifversion fpt or ghec %}
1. 选择“创建新存储库”。

   ![使用此模板按钮](/assets/images/help/repository/use-this-template-button.png)

   {% note %}

   注意：此外，你也可以在 codespace 中打开模板，稍后将工作发布到新存储库。 有关详细信息，请参阅“[通过模板创建 codespace](/codespaces/developing-in-codespaces/creating-a-codespace-from-a-template)”。

   {% endnote %} {% endif %} {% data reusables.repositories.owner-drop-down %} {% data reusables.repositories.repo-name %} {% data reusables.repositories.choose-repo-visibility %}
1. （可选）要在模板中包含来自所有分支的目录结构和文件，而不仅仅是默认分支，请选择“包含所有分支”。
  ![“包含所有分支”复选框](/assets/images/help/repository/include-all-branches.png) {% data reusables.repositories.select-marketplace-apps %}
8. 单击“从模板创建存储库”。

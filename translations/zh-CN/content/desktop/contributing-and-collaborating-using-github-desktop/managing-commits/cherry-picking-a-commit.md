---
title: 优选提交
intro: 您可以在一个分支上选择特定的提交，并将提交副本复制到另一个分支。
versions:
  fpt: '*'
redirect_from:
  - /desktop/contributing-and-collaborating-using-github-desktop/cherry-picking-a-commit
ms.openlocfilehash: 6dad1615b9a8c224c3648be60759b5bb6ccf0d62
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '145085090'
---
## 关于 Git 优选

您可以在一个分支上优选提交在另一个分支上创建具有相同更改的提交副本。 如果将更改提交到错误的分支或想要对另一分支进行相同的更改，您可以优选提交将更改应用到另一个分支。 您也可以在准备创建或合并拉取请求之前使用优选来应用特定的更改。 例如，如果您向功能分支提交错误修复，则可优选包含错误修复的提交到项目的其他分支。

您还可以在与团队合作时使用优选。 有些项目包括通过优选提交所做的参与。 有关详细信息，请参阅 Git 文档中的[分布式 Git - 维护项目](https://git-scm.com/book/en/v2/Distributed-Git-Maintaining-a-Project#_rebase_cherry_pick)。

## 优选提交

{% data reusables.desktop.current-branch-menu %}
2. 在分支列表中，单击包含您想要优的提交的分支。
{% data reusables.desktop.history-tab %}
4. 将要优选的提交拖到 {% octicon "git-branch" aria-label="The branch icon" %}“当前分支”菜单，并将提交放在要将提交复制到的分支上。
  ![将提交拖动到“当前分支”菜单中的另一个分支](/assets/images/help/desktop/cherry-picking.png)

## 延伸阅读
- Git 文档中的 [git-cherry-pick](https://git-scm.com/docs/git-cherry-pick)

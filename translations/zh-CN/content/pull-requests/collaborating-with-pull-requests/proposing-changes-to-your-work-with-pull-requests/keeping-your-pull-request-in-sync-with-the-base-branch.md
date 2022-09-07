---
title: 使拉取请求与基础分支保持同步
intro: 打开拉取请求后，可以使用基础分支中所做的任何更改更新头分支（其中包含你所做的更改）。
permissions: People with write permissions to the repository to which the head branch of the pull request belongs can update the head branch with changes that have been made in the base branch.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
shortTitle: Update the head branch
ms.openlocfilehash: d7819b45cf3290c09e3b231825e494fd1d82daea
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '145130091'
---
## 关于使拉取请求保持同步

在合并拉取请求之前，其他更改可能会合并到基础分支中，从而导致拉取请求的头分支不同步。使用来自基础分支的最新更改更新拉取请求有助于在合并之前发现问题。

可以从命令行或拉取请求页更新拉取请求的头分支。 当所有这些均为 true 时，将显示“更新分支”按钮：

* 拉取请求分支和基础分支之间没有合并冲突。
* 拉取请求分支未与基础分支保持同步。
* 基础分支在合并 {% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-6069 %} 之前要求分支是最新的，或启用始终建议更新分支的设置{% endif %}。

有关详细信息，请参阅“[合并之前需要检查状态](/repositories/configuring-branches-and-merges-in-your-repository/defining-the-mergeability-of-pull-requests/about-protected-branches) {% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-6069 %}”和“[管理更新拉取请求分支的建议](/repositories/configuring-branches-and-merges-in-your-repository/configuring-pull-request-merges/managing-suggestions-to-update-pull-request-branches) {% endif %}”。

如果对基础分支的更改导致拉取请求分支中的合并冲突，则在所有冲突都解决之前，你将无法更新分支。 有关详细信息，请参阅“[关于合并冲突](/pull-requests/collaborating-with-pull-requests/addressing-merge-conflicts/about-merge-conflicts)”。

{% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-6069 %} 从拉取请求页面，可以使用传统合并或变基来更新拉取请求的分支。 传统的合并会导致合并提交，将基础分支合并到拉取请求的头分支。 变基将你的分支中的更改应用到最新版本的基础分支上。 结果是具有线性历史记录的分支，因为不会创建合并提交。
{% else %} 从拉取请求页更新分支执行传统合并。 生成的合并提交将基础分支合并到拉取请求的头分支中。
{% endif %}

## 更新拉取请求分支

{% data reusables.repositories.sidebar-pr %}

1. 在“拉取请求”列表中，单击要更新的拉取请求。

{% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-6069 %}
1. 在页面底部附近的合并部分中，可以：
   - 单击“更新分支”执行传统合并。
   ![用于更新分支的按钮](/assets/images/help/pull_requests/pull-request-update-branch-with-dropdown.png)
   - 单击“更新分支”下拉菜单，单击“使用变基更新”，然后单击“变基分支”以通过对基础分支变基来更新 。
   ![显示合并和变基选项的下拉菜单](/assets/images/help/pull_requests/pull-request-update-branch-rebase-option.png) {% else %}
1. 在页面底部附近的合并部分中，单击“更新分支”执行传统合并。
  ![用于更新分支的按钮](/assets/images/help/pull_requests/pull-request-update-branch.png) {% endif %}

## 延伸阅读

- [关于拉取请求](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests)
- [更改拉取请求的阶段](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/changing-the-stage-of-a-pull-request)
- [提交对从分支创建的拉取请求分支的更改](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/committing-changes-to-a-pull-request-branch-created-from-a-fork)

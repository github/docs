---
title: 使拉取请求与基本分支保持同步
intro: 打开拉取请求后，可以使用在基本分支中所做的任何更改来更新包含更改的头部分支。
permissions: People with write permissions to the repository to which the head branch of the pull request belongs can update the head branch with changes that have been made in the base branch.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
shortTitle: 更新头部分支
---

## 关于保持拉取请求同步

在合并拉取请求之前，其他更改可能会合并到基本分支中，从而导致拉取请求的头部分支不同步。 使用来自基本分支的最新更改更新拉取请求有助于在合并之前捕获问题。

您可以从命令行或拉取请求页面更新拉取请求的头部分支。 当所有以下条件成立时，将显示 **Update branch（更新分支）**按钮：

* 拉取请求分支和基本分支之间没有合并冲突。
* 拉取请求分支与基本分支不符。
* 基本分支要求分支在合并之前保持最新状态{% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-6069 %} 或者启用始终建议更新分支的设置{% endif %}。

更多信息请参阅“[在合并之前要求状态检查](/repositories/configuring-branches-and-merges-in-your-repository/defining-the-mergeability-of-pull-requests/about-protected-branches){% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-6069 %}”和“[管理更新拉取请求分支的建议](/repositories/configuring-branches-and-merges-in-your-repository/configuring-pull-request-merges/managing-suggestions-to-update-pull-request-branches){% endif %}”。

如果对基本分支所做的更改导致拉取请求分支中的合并冲突，则在解决所有冲突之前，您将无法更新分支。 更多信息请参阅“[关于合并冲突](/pull-requests/collaborating-with-pull-requests/addressing-merge-conflicts/about-merge-conflicts)”。

{% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-6069 %}
在拉取请求页面中，您可以使用传统合并或通过变基更新拉取请求的分支。 传统合并会导致合并提交，该提交将基本分支合并到拉取请求的头部分支中。 变基会将__分支中的更改应用到最新版本的基本分支上。 结果是具有线性历史记录的分支，因为没有创建合并提交。
{% else %}
从拉取请求页面更新分支将执行传统合并。 生成的合并提交将基本分支合并到拉取请求的头部分支中。
{% endif %}

## 更新拉取请求分支

{% data reusables.repositories.sidebar-pr %}

1. 在“Pull Requests（拉取请求）”列表中，单击要更新的拉取请求。

{% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-6069 %}
1. 在靠近页面底部的合并部分中，您可以：
   - 单击 **Update branch（更新分支）**以执行传统合并。 ![用于更新分支的按钮](/assets/images/help/pull_requests/pull-request-update-branch-with-dropdown.png)
   - 单击更新分支下拉菜单，单击 **Update with rebase（通过变基更新）**，然后单击 **Rebase branch（变基分支）**以通过在基本分支上变基来更新。 ![显示合并和变基选项的下拉菜单](/assets/images/help/pull_requests/pull-request-update-branch-rebase-option.png)
{% else %}
1. 在靠近页面底部的合并部分中，单击 **Update branch（更新分支）**以执行传统合并。 ![用于更新分支的按钮](/assets/images/help/pull_requests/pull-request-update-branch.png)
{% endif %}

## 延伸阅读

- "[关于拉取请求](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests)"
- "[更改拉取请求的阶段](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/changing-the-stage-of-a-pull-request)"
- "[提交更改至创建自复刻的拉取请求分支](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/committing-changes-to-a-pull-request-branch-created-from-a-fork)"

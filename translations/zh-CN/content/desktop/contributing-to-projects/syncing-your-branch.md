---
title: 同步分支
intro: '当提交推送到您在 {% data variables.product.prodname_dotcom %} 上的项目时，可与远程仓库同步保留项目的本地副本。'
versions:
  free-pro-team: '*'
---

必须将本地分支与远程仓库同步才可获得最初[创建分支](/desktop/guides/contributing-to-projects/managing-branches)后添加到上游分支的所有其他提交。

### 更新本地分支

1. 在 {% data variables.product.prodname_desktop %} 中，单击 {% octicon "git-branch" aria-label="The branch icon" %} **当前分支**并从列表中选择分支，以切换到要更新的本地分支。
2. 单击 **Fetch origin（提取原点）**以更新分支。 ![提取源按钮](/assets/images/help/desktop/fetch-button.png)
3. 如果远程分支上有提交，您可以单击 **Pull origin（拉取源）**或 **Pull origin with rebase（通过变基拉取源）**来拉取这些提交。 ![拉取源按钮](/assets/images/help/desktop/pull-button.png)
{% data reusables.desktop.resolve-merge-conflicts %}

### 将另一个分支合并到项目分支

{% data reusables.desktop.current-branch-menu %}
{% data reusables.desktop.choose-a-branch-to-merge %}
{% data reusables.desktop.confirm-merging-branch %}

   {% note %}

   **注：**如果存在合并冲突，{% data variables.product.prodname_desktop %} 会在 **Merge <em>BRANCH</em> into <em>BRANCH</em>（合并 [分支] 到 [分支 ]）**按钮上方提醒您。 在解决所有冲突之前无法合并分支。

   {% endnote %}

   ![合并按钮](/assets/images/help/desktop/merge-branch-button.png)
{% data reusables.desktop.push-origin %}

### 将项目分支变基到另一个分支
有些工作流程需要或受益于变基而不是合并。 通过变基，可以重新排序、编辑提交或将其压缩到一起。 更多信息请参阅“[关于 Git 变基](/articles/about-git-rebase)”。

1. 使用 **Branch（分支）**下拉菜单，并单击 **Rebase Current Branch（变基当前分支）**。 ![在分支中重新变基当前分支下拉菜单](/assets/images/help/desktop/rebase-current-branch.png)
2. 单击要变基到当前分支的分支，然后单击 **Start rebase（开始变基）**。 ![开始变基按钮](/assets/images/help/desktop/start-rebase-button.png)
3. 如果确定要变基，请单击 **Begin rebase（开始变基）**。 ![开始变基按钮](/assets/images/help/desktop/begin-rebase-button.png)
{% data reusables.desktop.resolve-merge-conflicts %}
4. 要上推本地更改，请单击 **Force push origin（强制推送源）**。 ![强制推送源](/assets/images/help/desktop/force-push-origin.png)

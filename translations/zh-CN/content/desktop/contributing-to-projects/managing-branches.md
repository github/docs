---
title: Managing branches
intro: You can create a branch off of a repository's default branch so you can safely experiment with changes.
redirect_from:
  - /desktop/contributing-to-projects/creating-a-branch-for-your-work
  - /desktop/contributing-to-projects/switching-between-branches
versions:
  free-pro-team: '*'
---

### About managing branches
You can use branches to safely experiment with changes to your project. Branches isolate your development work from other branches in the repository. For example, you could use a branch to develop a new feature or fix a bug.

始终可以从现有分支创建分支。 通常，您可能从仓库的 `master` 分支创建分支。 然后，您可以单独处理这个新分支，不受其他人对仓库所做更改的影响。

Once you're satisfied with your work, you can [open a pull request](/desktop/contributing-to-projects/creating-an-issue-or-pull-request) to merge the changes in the current branch into another branch. 更多信息请参阅“[关于拉取请求](/articles/about-pull-requests)”。

You can always create a branch in {% data variables.product.prodname_desktop %} if you have read access to a repository, but you can only push the branch to {% data variables.product.prodname_dotcom %} if you have write access to the repository.

{% data reusables.desktop.protected-branches %}

### 创建分支

{% tip %}

**提示：**您创建的第一个新分支将基于默认分支，通常是 `master`。 If you have more than one branch, you can choose to base the new branch on the currently checked out branch or the default branch.

{% endtip %}

{% mac %}

{% data reusables.desktop.click-base-branch-in-drop-down %}
  ![用于切换当前分支的下拉菜单](/assets/images/help/desktop/click-branch-in-drop-down-mac.png)
{% data reusables.desktop.create-new-branch %}
  ![Branch（分支）菜单中的 New Branch（新分支）选项](/assets/images/help/desktop/new-branch-button-mac.png)
{% data reusables.desktop.name-branch %}
  ![用于创建新分支名称的字段](/assets/images/help/desktop/create-branch-name-mac.png)
{% data reusables.desktop.select-base-branch %}
  ![基础分支选项](/assets/images/help/desktop/create-branch-choose-branch-mac.png)
{% data reusables.desktop.confirm-new-branch-button %}
  ![创建分支按钮](/assets/images/help/desktop/create-branch-button-mac.png)

{% endmac %}

{% windows %}

{% data reusables.desktop.click-base-branch-in-drop-down %}
  ![用于切换当前分支的下拉菜单](/assets/images/help/desktop/click-branch-in-drop-down-win.png)
{% data reusables.desktop.create-new-branch %}
  ![Branch（分支）菜单中的 New Branch（新分支）选项](/assets/images/help/desktop/new-branch-button-win.png)
{% data reusables.desktop.name-branch %}
  ![用于创建新分支名称的字段](/assets/images/help/desktop/create-branch-name-win.png)
{% data reusables.desktop.select-base-branch %}
  ![基础分支选项](/assets/images/help/desktop/create-branch-choose-branch-win.png)
{% data reusables.desktop.confirm-new-branch-button %}
  ![创建分支按钮](/assets/images/help/desktop/create-branch-button-win.png)

{% endwindows %}

### 在分支间切换
您可以查看并提交到任何仓库的分支。 如有未提交但已保存的更改，您需要决定如何处理更改，然后才可切换分支。 您可以在当前分支上提交更改、在当前分支上隐藏更改，或者将更改传送到新分支。 如果要在当前分支上提交更改，请在切换分支之前执行“[提交并审查对项目的更改](/desktop/contributing-to-projects/committing-and-reviewing-changes-to-your-project)”中的步骤。

{% tip %}

**提示**：您可以在 **Advanced（高级）**设置中设置切换分支的默认行为。 For more information, see "[Configuring basic settings](/desktop/getting-started-with-github-desktop/configuring-basic-settings)."

{% endtip %}

{% data reusables.desktop.current-branch-menu %}
{% data reusables.desktop.switching-between-branches %}
  ![仓库中的分支列表](/assets/images/help/desktop/click-branch-in-drop-down-mac.png)
3. 如有已保存但未提交的更改，请选择 **Leave my changes（留下我的更改）**或 **Bring my changes（带上我的更改）**，然后单击 **Switch Branch（切换分支）**。 ![通过更改选项切换分支](/assets/images/help/desktop/stash-changes-options.png)

### 检索隐藏的更改
要访问在另一个分支中隐藏的更改，请切换回隐藏更改的分支。

{% data reusables.desktop.current-branch-menu %}
{% data reusables.desktop.switching-between-branches %}
  ![仓库中的分支列表](/assets/images/help/desktop/click-branch-in-drop-down-mac.png)
3. 在左侧边栏中，单击 **Stashed Changes（隐藏的更改）**。 ![隐藏的更改选项](/assets/images/help/desktop/stashed-changes.png)
4. 要删除隐藏的更改，请单击 **Discard（放弃）**，或者，要使用隐藏的更改，则单击 **Restore（恢复）**。 ![放弃或恢复隐藏的更改](/assets/images/help/desktop/discard-restore-stash-buttons.png)

### 删除分支

无法删除目前与打开的拉取请求关联的分支。 You cannot undo deleting a branch.

{% mac %}

{% data reusables.desktop.select-branch-to-delete %}
  ![Drop-down menu to select which branch to delete](/assets/images/help/desktop/select-branch-to-delete.png)
{% data reusables.desktop.delete-branch-mac %}
  ![Delete... option in the Branch menu](/assets/images/help/desktop/delete-branch-mac.png)

{% endmac %}

{% windows %}

{% data reusables.desktop.select-branch-to-delete %}
  ![Drop-down menu to select which branch to delete](/assets/images/help/desktop/select-branch-to-delete.png)
{% data reusables.desktop.delete-branch-win %}
  ![Delete... option in the Branch menu](/assets/images/help/desktop/delete-branch-win.png)

{% endwindows %}

### 延伸阅读

- "[从 {% data variables.product.prodname_desktop %} 克隆仓库](/desktop/guides/contributing-to-projects/cloning-a-repository-from-github-to-github-desktop)"
- {% data variables.product.prodname_dotcom %} 词汇中的“[分支](/articles/github-glossary/#branch)”
- "[关于分支](/articles/about-branches)"
- Git 文档中的“[Nutshell 中的分支](https://git-scm.com/book/en/v2/Git-Branching-Branches-in-a-Nutshell)”

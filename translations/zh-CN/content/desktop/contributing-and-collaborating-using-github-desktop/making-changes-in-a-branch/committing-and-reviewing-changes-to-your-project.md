---
title: 提交并审查对项目的更改
intro: '{% data variables.product.prodname_desktop %} 可在您编辑时跟踪对所有文件的所有更改。 您可以决定如何对更改分组以创建有意义的提交。'
redirect_from:
  - /desktop/contributing-to-projects/committing-and-reviewing-changes-to-your-project
  - /desktop/contributing-and-collaborating-using-github-desktop/committing-and-reviewing-changes-to-your-project
versions:
  fpt: '*'
shortTitle: 提交和审核更改
---

## 关于提交

{% data reusables.commits.about-commits %} 您也可以在您协作的任何提交上添加一名合作作者。

{% data reusables.desktop.update-email-address %} 更多信息请参阅“[为 GitHub Desktop 配置 Git](/desktop/getting-started-with-github-desktop/configuring-git-for-github-desktop)”。

## 选择一个分支并进行更改

1. [创建新分支](/desktop/guides/contributing-to-projects/managing-branches)，或者单击工具栏中的 {% octicon "git-branch" aria-label="The branch icon" %} **Current Branch（当前分支）**并从列表中选择现有分支。

  ![用于切换当前分支的下拉菜单](/assets/images/help/desktop/select-branch-from-dropdown.png)
{% data reusables.desktop.make-changes %}

## 选择如何显示差异

您可以更改差异在 {% data variables.product.prodname_desktop %} 中的显示方式，以适应您的审核需求。

要更改您查看差异的方式，请单击差异视图右上角的 {% octicon "gear" aria-label="The Gear icon" %}。
- 要更改整个差异的显示方式，在“Diff display（差异显示）”下选择 **Unified（统一）**或 **Split（分割）**。 统一视图线性显示变化，而分割视图则在左侧显示旧内容，在右侧显示新内容。
- 要隐藏白空间更改，以便您可以专注于更实质性的更改，请选择 **Hide Whitespace Changes（隐藏白空间更改）**。

![差异选项菜单](/assets/images/help/desktop/diff-selection.png)

如果您需要查看的文件比默认情况下显示的 {% data variables.product.prodname_desktop %} 更多，则可以扩展差异。
- 要查看突出显示的更改的上下几行，请单击行号上方或下方的箭头。
- 要查看整个文件，请在差异视图中右键单击，然后单击 **Expand Whole File（扩展整个文件）**。

![扩展差异视图](/assets/images/help/desktop/expand-diff-view.png)

## 选择要包含在提交中的更改

在文本编辑器中更改文件并本地保存后，您会在 {% data variables.product.prodname_desktop %} 中看到更改。

* 红色的 {% octicon "diff-removed" aria-label="The diff removed icon color-red" %} 图标表示删除的文件。
* 黄色的 {% octicon "diff-modified" aria-label="The diff modified icon color-yellow" %} 图标表示修改的文件。
* 绿色的 {% octicon "diff-added" aria-label="The diff added icon color-green" %} 图标表示添加的文件。
* 要访问隐藏的更改，请单击 **Stashed Changes（隐藏的更改）**。

  ![隐藏的更改选项](/assets/images/help/desktop/stashed-changes.png)
* {% data reusables.desktop.commit-all-desc %}

  ![选中复选框以提交所有更改的文件](/assets/images/help/desktop/commit-all.png)
* {% data reusables.desktop.commit-some-desc %}

  ![选中要提交的文件旁边的复选框](/assets/images/help/desktop/commit-some.png)

### 创建部分提交

如果一个文件包含多处更改，但只有部分更改要包含在提交中，则可创建部分提交。 其余更改会保持不动，以便您进行其他修改和提交。 这允许您进行单独、有意义的提交，例如使提交中的换行符更改区别于代码或文字更改。

要从提交中排除更改的行，请单击一条或多条更改的行，以使蓝色消失。 仍以蓝色突出显示的行将包含在提交中。

  ![文件中取消选择的行](/assets/images/help/desktop/partial-commit.png)

## 放弃更改
如果您有不想保留的未提交更改，可以放弃这些更改。 这将从计算机上的文件中删除更改。 您可以放弃一个或多个文件中所有未提交的更改，也可以丢弃添加的特定行。

丢弃的更改保存在回收站中带日期的文件中。 在回收站清空之前，您可以恢复丢弃的更改。

### 丢弃一个或多个文件中的更改

{% data reusables.desktop.select-discard-files %}
{% data reusables.desktop.click-discard-files %}

  ![上下文菜单中的 Discard Changes（放弃更改）选项](/assets/images/help/desktop/discard-changes-mac.png)
{% data reusables.desktop.confirm-discard-files %}

  ![确认对话框中的放弃更改按钮](/assets/images/help/desktop/discard-changes-confirm-mac.png)

### 丢弃一行或多行中的更改
您可以丢弃一个或多个未提交的已更改行。

{% note %}

**注意：**在添加和删除行的一组更改中不可丢弃单行。

{% endnote %}

要丢弃一个添加的行，请在已更改的行列表中，右键单击要丢弃的行，然后选择 **Discard added line（丢弃添加的行）**。

  ![在确认对话框中丢弃单行](/assets/images/help/desktop/discard-single-line.png)

要丢弃一组更改的行，请右键单击要丢弃的行编号右侧的垂直条，然后选择 **Discard added lines（丢弃添加的行）**。

  ![在确认对话框中丢弃一组添加的行](/assets/images/help/desktop/discard-multiple-lines.png)


## 编写提交消息并推送更改

对选择要包含在提交中的更改感到满意后，编写提交消息并推送更改。 如果协作处理了某个提交，也可以将提交归于多个作者。

{% note %}

**注**：{% data reusables.desktop.tags-push-with-commits %} 更多信息请参阅“[管理标记](/desktop/contributing-and-collaborating-using-github-desktop/managing-commits/managing-tags)。”

{% endnote %}

{% data reusables.desktop.commit-message %}

  ![提交消息字段](/assets/images/help/desktop/commit-message.png)
1. （可选）要将某个提交归于另一个作者，请单击合作作者图标并输入要包含的用户名。

  ![添加合作作者到提交消息](/assets/images/help/desktop/add-co-author-commit.png)
{% data reusables.desktop.commit-button %}

  ![提交按钮](/assets/images/help/desktop/commit-button.png)
4. 如果您尝试提交的分支受保护，Desktop 将警告您。
    - 要移动变更，请单击 **switch branches（切换分支）**。
    - 要将变更提交至受保护分支，请单击 **Commit to（提交至） _BRANCH（分支）_**。

  有关受保护分支的更多信息，请参阅“[关于受保护分支](/github/administering-a-repository/about-protected-branches)”。

  ![受保护分支警告](/assets/images/help/desktop/protected-branch-warning.png)
{% data reusables.desktop.push-origin %}

6. 如果您有基于正在处理的分支的拉取请求， {% data variables.product.prodname_desktop %} 将显示已为拉取请求运行的检查的状态。 有关检查的详细信息，请参阅“[Viewing and re-running checks in GitHub Desktop（在 GitHub Desktop 中查看和重新运行检查）](/desktop/contributing-and-collaborating-using-github-desktop/working-with-your-remote-repository-on-github-or-github-enterprise/viewing-and-re-running-checks-in-github-desktop)”。

 ![Checks display next to branch name](/assets/images/help/desktop/checks-dialog.png)

 如果尚未为当前分支创建拉取请求，{% data variables.product.prodname_desktop %} 将为您提供创建一个请求的选项。 更多信息请参阅“[创建议题或拉取请求](/desktop/contributing-and-collaborating-using-github-desktop/working-with-your-remote-repository-on-github-or-github-enterprise/creating-an-issue-or-pull-request)”。

 ![创建拉取请求](/assets/images/help/desktop/mac-create-pull-request.png)

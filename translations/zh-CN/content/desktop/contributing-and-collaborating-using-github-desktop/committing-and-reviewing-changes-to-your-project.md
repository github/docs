---
title: 提交并审查对项目的更改
intro: '{% data variables.product.prodname_desktop %} 可在您编辑时跟踪对所有文件的所有更改。 您可以决定如何对更改分组以创建有意义的提交。'
redirect_from:
  - /desktop/contributing-to-projects/committing-and-reviewing-changes-to-your-project
versions:
  free-pro-team: '*'
---

### 关于提交

{% data reusables.commits.about-commits %} 您也可以在您协作的任何提交上添加一名合作作者。

{% data reusables.desktop.update-email-address %} 更多信息请参阅“[为 GitHub Desktop 配置 Git](/desktop/getting-started-with-github-desktop/configuring-git-for-github-desktop)”。

### 1. 选择一个分支并进行更改

1. [创建新分支](/desktop/guides/contributing-to-projects/managing-branches)，或者单击工具栏中的 {% octicon "git-branch" aria-label="The branch icon" %} **Current Branch（当前分支）**并从列表中选择现有分支。

  ![用于切换当前分支的下拉菜单](/assets/images/help/desktop/select-branch-from-dropdown.png)
{% data reusables.desktop.make-changes %}

### 2. 选择要包含在提交中的更改

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

#### 创建部分提交

如果一个文件包含多处更改，但只有部分更改要包含在提交中，则可创建部分提交。 其余更改会保持不动，以便您进行其他修改和提交。 这允许您进行单独、有意义的提交，例如使提交中的换行符更改区别于代码或文字更改。

{% note %}

**注意：**拆分差异显示当前处于测试阶段，可能会更改。

{% endnote %}

1. 要选择更改的显示方式，请在已更改文件的右上角使用 {% octicon "gear" aria-label="The Gear icon" %} 选择**统一**或**拆分**。

  ![包含统一和拆分差异的齿轮图标](/assets/images/help/desktop/gear-diff-select.png)
2. 要从提交中排除更改的行，请单击一条或多条更改的行，以使蓝色消失。 仍以蓝色突出显示的行将包含在提交中。

  ![文件中取消选择的行](/assets/images/help/desktop/partial-commit.png)

### 3. 放弃更改
如果您有不想保留的未提交更改，可以放弃这些更改。 这将从计算机上的文件中删除更改。 您可以放弃一个或多个文件中所有未提交的更改，也可以丢弃添加的特定行。

丢弃的更改保存在回收站中带日期的文件中。 在回收站清空之前，您可以恢复丢弃的更改。

#### 丢弃一个或多个文件中的更改

{% data reusables.desktop.select-discard-files %}
{% data reusables.desktop.click-discard-files %}

  ![上下文菜单中的 Discard Changes（放弃更改）选项](/assets/images/help/desktop/discard-changes-mac.png)
{% data reusables.desktop.confirm-discard-files %}

  ![确认对话框中的放弃更改按钮](/assets/images/help/desktop/discard-changes-confirm-mac.png)

#### 丢弃一行或多行中的更改
您可以丢弃一个或多个未提交的已更改行。

{% note %}

**注意：**在添加和删除行的一组更改中不可丢弃单行。

{% endnote %}

要丢弃一个添加的行，请在已更改的行列表中，右键单击要丢弃的行，然后选择 **Discard added line（丢弃添加的行）**。

  ![在确认对话框中丢弃单行](/assets/images/help/desktop/discard-single-line.png)

要丢弃一组更改的行，请右键单击要丢弃的行编号右侧的垂直条，然后选择 **Discard added lines（丢弃添加的行）**。

  ![在确认对话框中丢弃一组添加的行](/assets/images/help/desktop/discard-multiple-lines.png)


### 4. 编写提交消息并推送更改

对选择要包含在提交中的更改感到满意后，编写提交消息并推送更改。 如果协作处理了某个提交，也可以将提交归于多个作者。

{% note %}

**注**：{% data reusables.desktop.tags-push-with-commits %} 更多信息请参阅“[管理标记](/desktop/contributing-to-projects/managing-tags)。”

{% endnote %}

{% data reusables.desktop.commit-message %}

  ![提交消息字段](/assets/images/help/desktop/commit-message.png)
2. （可选）要将某个提交归于另一个作者，请单击合作作者图标并输入要包含的用户名。

  ![添加合作作者到提交消息](/assets/images/help/desktop/add-co-author-commit.png)
{% data reusables.desktop.commit-button %}

  ![提交按钮](/assets/images/help/desktop/commit-button.png)
4. 如果您尝试提交的分支受保护，Desktop 将警告您。
    - 要移动变更，请单击 **switch branches（切换分支）**。
    - 要将变更提交至受保护分支，请单击 **Commit to（提交至） _BRANCH（分支）_**。

  有关受保护分支的更多信息，请参阅“[关于受保护分支](/github/administering-a-repository/about-protected-branches)”。

  ![受保护分支警告](/assets/images/help/desktop/protected-branch-warning.png)
{% data reusables.desktop.push-origin %}

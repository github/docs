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

1. [创建一个新分支](/desktop/guides/contributing-to-projects/managing-branches)，或选择一个现有分支，方法是单击

工具栏上的 {% octicon "git-branch" aria-label="The branch icon" %} **Current Branch（当前分支）**并从列表中选择分支。
  ![用于切换当前分支的下拉菜单](/assets/images/help/desktop/click-branch-in-drop-down.png)
{% data reusables.desktop.make-changes %}

### 2. 选择要包含在提交中的更改

在文本编辑器中更改文件并本地保存后，您会在 {% data variables.product.prodname_desktop %} 中看到更改。

* 红色的 {% octicon "diff-removed" aria-label="The diff removed icon color-red" %} 图标表示删除的文件。
* 黄色的 {% octicon "diff-modified" aria-label="The diff modified icon color-yellow" %} 图标表示修改的文件。
* 绿色的 {% octicon "diff-added" aria-label="The diff added icon color-green" %} 图标表示添加的文件。
* 要访问隐藏的更改，请单击 **Stashed Changes（隐藏的更改）**。 ![隐藏的更改选项](/assets/images/help/desktop/stashed-changes.png)
* {% data reusables.desktop.commit-all-desc %}
![选中复选框以提交所有更改的文件](/assets/images/help/desktop/commit-all.png)
* {% data reusables.desktop.commit-some-desc %}
![选中要提交的文件旁边的复选框](/assets/images/help/desktop/commit-some.png)

#### 创建部分提交

If one file contains multiple changes, but you only want some of those changes to be included in a commit, you can create a partial commit. 其余更改会保持不动，以便您进行其他修改和提交。 这允许您进行单独、有意义的提交，例如使提交中的换行符更改区别于代码或文字更改。

{% note %}

**Note:** Split diff displays are currently in beta and subject to change.

{% endnote %}

1. To choose how your changes are displayed, in the top-right corner of the changed file, use {% octicon "gear" aria-label="The Gear icon" %} to select **Unified** or **Split**. ![Gear icon with unified and split diffs](/assets/images/help/desktop/gear-diff-select.png)
2. To exclude changed lines from your commit, click one or more changed lines so the blue disappears. The lines that are still highlighted in blue will be included in the commit. ![文件中取消选择的行](/assets/images/help/desktop/partial-commit.png)

### 3. 放弃更改
If you have uncommitted changes that you don't want to keep, you can discard the changes. This will remove the changes from the files on your computer. You can discard all uncommitted changes in one or more files, or you can discard specific lines you added.

Discarded changes are saved in a dated file in the Trash. You can recover discarded changes until the Trash is emptied.

#### Discarding changes in one or more files

{% data reusables.desktop.select-discard-files %}
{% data reusables.desktop.click-discard-files %}
  ![上下文菜单中的 Discard Changes（放弃更改）选项](/assets/images/help/desktop/discard-changes-mac.png)
{% data reusables.desktop.confirm-discard-files %}
  ![确认对话框中的放弃更改按钮](/assets/images/help/desktop/discard-changes-confirm-mac.png)

#### Discarding changes in one or more lines
You can discard one or more changed lines that are uncommitted.

{% note %}

**Note:** Discarding single lines is disabled in a group of changes that adds and removes lines.

{% endnote %}

To discard one added line, in the list of changed lines, right click on the line you want to discard and select **Discard added line**.

  ![Discard single line in the confirmation dialog](/assets/images/help/desktop/discard-single-line.png)

To discard a group of changed lines, right click the vertical bar to the right of the line numbers for the lines you want to discard, then select **Discard added lines**.

  ![Discard a group of added lines in the confirmation dialog](/assets/images/help/desktop/discard-multiple-lines.png)


### 4. 编写提交消息并推送更改

对选择要包含在提交中的更改感到满意后，编写提交消息并推送更改。 如果协作处理了某个提交，也可以将提交归于多个作者。

{% note %}

**注**：{% data reusables.desktop.tags-push-with-commits %} 更多信息请参阅“[管理标记](/desktop/contributing-to-projects/managing-tags)。”

{% endnote %}

{% data reusables.desktop.commit-message %}
  ![提交消息字段](/assets/images/help/desktop/commit-message.png)
2. （可选）要将某个提交归于另一个作者，请单击合作作者图标并输入要包含的用户名。 ![添加合作作者到提交消息](/assets/images/help/desktop/add-co-author-commit.png)
{% data reusables.desktop.commit-button %}
  ![提交按钮](/assets/images/help/desktop/commit-button.png)
4. 如果您尝试提交的分支受保护，Desktop 将警告您。
    - 要移动变更，请单击 **switch branches（切换分支）**。
    - 要将变更提交至受保护分支，请单击 **Commit to（提交至） _BRANCH（分支）_**。

  有关受保护分支的更多信息，请参阅“[关于受保护分支](/github/administering-a-repository/about-protected-branches)”。 ![受保护分支警告](/assets/images/help/desktop/protected-branch-warning.png)
{% data reusables.desktop.push-origin %}

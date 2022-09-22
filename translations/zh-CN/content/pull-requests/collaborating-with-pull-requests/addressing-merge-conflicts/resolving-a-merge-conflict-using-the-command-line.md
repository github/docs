---
title: 使用命令行解决合并冲突
intro: 您可以使用命令行和文本编辑器解决合并冲突。
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/addressing-merge-conflicts/resolving-a-merge-conflict-using-the-command-line
  - /articles/resolving-a-merge-conflict-from-the-command-line
  - /articles/resolving-a-merge-conflict-using-the-command-line
  - /github/collaborating-with-issues-and-pull-requests/resolving-a-merge-conflict-using-the-command-line
  - /github/collaborating-with-pull-requests/addressing-merge-conflicts/resolving-a-merge-conflict-using-the-command-line
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
shortTitle: Resolve merge conflicts in Git
ms.openlocfilehash: 1d4ff97c2a93d3e5a7aebaa8752810e284203bc1
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/11/2022
ms.locfileid: '147883455'
---
当对文件的同一行进行竞争更改时，或者当一个人编辑文件而另一个人删除同一文件时，会发生合并冲突。 有关详细信息，请参阅“[关于合并冲突](/articles/about-merge-conflicts/)”。

{% tip %}

**提示：** 可以使用冲突编辑器在 {% data variables.product.product_name %} 上解决作为拉取请求组成部分的各分支之间的竞争行更改合并冲突。 有关详细信息，请参阅“[在 GitHub 上解决合并冲突](/pull-requests/collaborating-with-pull-requests/addressing-merge-conflicts/resolving-a-merge-conflict-on-github)”。

{% endtip %}

## 竞争行更改合并冲突

要解决由竞争行更改导致的合并冲突，您必须从新提交的不同分支中选择要合并的更改。

例如，如果你和另一个人都在同一 Git 存储库不同分支的同一行中编辑了 styleguide.md 文件，则在尝试合并这些分支时会发生合并冲突错误。 必须使用新提交解决这一合并冲突，然后才能合并这些分支。

{% data reusables.command_line.open_the_multi_os_terminal %}
2. 导航到有合并冲突的本地 Git 仓库中。
  ```shell
  cd <em>REPOSITORY-NAME</em>
  ```
3. 生成受合并冲突影响的文件列表。 在此示例中，styleguide.md 文件存在合并冲突。
  ```shell
  $ git status
  > # On branch branch-b
  > # You have unmerged paths.
  > #   (fix conflicts and run "git commit")
  > #
  > # Unmerged paths:
  > #   (use "git add <file>..." to mark resolution)
  > #
  > # both modified:      styleguide.md
  > #
  > no changes added to commit (use "git add" and/or "git commit -a")
  ```
4. 打开你首选的文本编辑器，例如 [Atom](https://atom.io/)，然后导航到有合并冲突的文件。
5. 要在文件中查看合并冲突的开头，请在文件中搜索冲突标记 `<<<<<<<`。 当你在文本编辑器中打开文件时，你将在行 `<<<<<<< HEAD` 后看到头部分支或基本分支。 接下来，你将看到 `=======`，它将你的更改与其他分支中的更改分开，后跟 `>>>>>>> BRANCH-NAME`。 在本例中，一个人在基本或头部分支中编写了“open an issue”，而另一个人在比较分支或 `branch-a` 中编写了“ask your question in IRC”。

    ```
    If you have questions, please
    <<<<<<< HEAD
    open an issue
    =======
    ask your question in IRC.
    >>>>>>> branch-a
    ```
{% data reusables.pull_requests.decide-how-to-resolve-competing-line-change-merge-conflict %} 在本例中，两个更改均整合到最终合并：

  ```shell
  If you have questions, please open an issue or ask in our IRC channel if it's more urgent.
  ```
7. 添加或暂存您的更改。
  ```shell
  $ git add .
  ```
8. 提交您的更改及注释。
  ```shell
  $ git commit -m "Resolved merge conflict by incorporating both suggestions."
  ```

现在，可以在命令行上合并分支，或者在 {% data variables.product.product_name %} 上[将更改推送到远程存储库](/github/getting-started-with-github/pushing-commits-to-a-remote-repository/)，然后在拉取请求中[合并更改](/articles/merging-a-pull-request/)。

## 删除的文件合并冲突

要解决由对文件进行竞争更改而导致的合并冲突，对于一个人删除分支中的文件而另一个人编辑同一文件的情况，您必须选择是删除还是将删除的文件保留在新提交中。

例如，如果你编辑了一个文件（如 README.md），而另一个人在同一 Git 存储库的另一个分支中删除了同一文件，那么当你尝试合并这些分支时将发生合并冲突错误。 必须使用新提交解决这一合并冲突，然后才能合并这些分支。

{% data reusables.command_line.open_the_multi_os_terminal %}
2. 导航到有合并冲突的本地 Git 仓库中。
  ```shell
  cd <em>REPOSITORY-NAME</em>
  ```
2. 生成受合并冲突影响的文件列表。 在此示例中，文件 README.md 存在合并冲突。
  ```shell
  $ git status
  > # On branch main
  > # Your branch and 'origin/main' have diverged,
  > # and have 1 and 2 different commits each, respectively.
  > #  (use "git pull" to merge the remote branch into yours)
  > # You have unmerged paths.
  > #  (fix conflicts and run "git commit")
  > #
  > # Unmerged paths:
  > #  (use "git add/rm <file>..." as appropriate to mark resolution)
  > #
  > #   deleted by us:   README.md
  > #
  > # no changes added to commit (use "git add" and/or "git commit -a")
  ```
3. 打开你首选的文本编辑器，例如 [Atom](https://atom.io/)，然后导航到有合并冲突的文件。
6. 决定是否要保留删除的文件。 您可能想要在文本编辑器中查看对删除的文件所做的最新更改。

 要将已删除的文件重新添加到仓库：
  ```shell
  $ git add README.md
  ```
 要从仓库中删除此文件：
  ```shell
  $ git rm README.md
  > README.md: needs merge
  > rm 'README.md'
  ```
7. 提交您的更改及注释。
  ```shell
  $ git commit -m "Resolved merge conflict by keeping README.md file."
  > [branch-d 6f89e49] Merge branch 'branch-c' into branch-d
  ```

现在，可以在命令行上合并分支，或者在 {% data variables.product.product_name %} 上[将更改推送到远程存储库](/github/getting-started-with-github/pushing-commits-to-a-remote-repository/)，然后在拉取请求中[合并更改](/articles/merging-a-pull-request/)。

## 延伸阅读

- “[关于合并冲突](/pull-requests/collaborating-with-pull-requests/addressing-merge-conflicts/about-merge-conflicts)”
- “[在本地签出拉取请求](/articles/checking-out-pull-requests-locally/)”

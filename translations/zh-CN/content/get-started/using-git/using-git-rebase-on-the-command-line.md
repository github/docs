---
title: 在命令行中使用 Git rebase
redirect_from:
  - /articles/using-git-rebase
  - /articles/using-git-rebase-on-the-command-line
  - /github/using-git/using-git-rebase-on-the-command-line
  - /github/getting-started-with-github/using-git-rebase-on-the-command-line
  - /github/getting-started-with-github/using-git/using-git-rebase-on-the-command-line
intro: 以下是在命令行中使用 `git rebase` 的简短教程。
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Git rebase
ms.openlocfilehash: e0d2d2d10da187d6cc38a72a44e8235ec1f6f73f
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/11/2022
ms.locfileid: '145127363'
---
## 使用 Git 变基

在此示例中，我们将介绍除 `exec` 之外的所有可用 `git rebase` 命令。

我们将通过在终端上输入 `git rebase --interactive HEAD~7` 来启动变基。 首选的文本编辑器将显示以下行：

```
pick 1fc6c95 Patch A
pick 6b2481b Patch B
pick dd1475d something I want to split
pick c619268 A fix for Patch B
pick fa39187 something to add to patch A
pick 4ca2acc i cant' typ goods
pick 7b36971 something to move before patch B
```

在本例中，我们将：

* 使用 `squash` 将第五个提交 (`fa39187`) 压缩到 `"Patch A"` 提交 (`1fc6c95`)。
* 将最后一次提交 (`7b36971`) 上移到 `"Patch B"` 提交 (`6b2481b`) 之前，并将其保留为 `pick`。
* 将 `"A fix for Patch B"` 提交 (`c619268`) 合并到 `"Patch B"` 提交 (`6b2481b`)，并使用 `fixup` 忽略提交消息。
* 使用 `edit` 将第三个提交 (`dd1475d`) 拆分为两个较小的提交。
* 使用 `reword` 修复拼写错误的提交 (`4ca2acc`) 的提交消息。

呼！ 这听起来像是有好多工作，但一步一步来，我们可以轻松地进行这些更改。

首先，我们需要修改文件中的命令，如下所示：

```
pick 1fc6c95 Patch A
squash fa39187 something to add to patch A
pick 7b36971 something to move before patch B
pick 6b2481b Patch B
fixup c619268 A fix for Patch B
edit dd1475d something I want to split
reword 4ca2acc i cant' typ goods
```

我们已将每一行的命令从 `pick` 更改为我们感兴趣的命令。

现在，保存并关闭编辑器，这将开始交互式变基。

Git 跳过第一条变基命令 `pick 1fc6c95`，因为该命令无需任何操作。 它转到下一个命令 `squash fa39187`。 由于此操作需要您的输入，因此 Git 再次打开您的文本编辑器。 其打开的文件类似如下：

```
# This is a combination of two commits.
# The first commit's message is:

Patch A

# This is the 2nd commit message:

something to add to patch A

# Please enter the commit message for your changes. Lines starting
# with '#' will be ignored, and an empty message aborts the commit.
# Not currently on any branch.
# Changes to be committed:
#   (use "git reset HEAD <file>..." to unstage)
#
# modified:   a
#
```

这个文件是 Git 的表达方式，“嘿，这就是我要使用这个 `squash` 做的事情。” 它列出了第一个提交的消息 (`"Patch A"`) 和第二个提交的消息 (`"something to add to patch A"`)。 如果对这些提交消息感到满意，您可以保存该文件，然后关闭编辑器。 否则，您可选择更改提交消息，只需更改文本即可。

编辑器关闭后，变基继续：

```
pick 1fc6c95 Patch A
squash fa39187 something to add to patch A
pick 7b36971 something to move before patch B
pick 6b2481b Patch B
fixup c619268 A fix for Patch B
edit dd1475d something I want to split
reword 4ca2acc i cant' typ goods
```

Git 处理两个 `pick` 命令（用于 `pick 7b36971` 和 `pick 6b2481b`）。 它还会处理 `fixup` 命令 (`fixup c619268`)，因为它不需要任何交互。 `fixup` 将来自 `c619268` 的更改合并到位于它之前的提交 (`6b2481b`) 中。 两个更改都将具有相同的提交消息：`"Patch B"`。

Git 开始 `edit dd1475d` 操作，停止，然后在终端显示以下消息：

```shell
You can amend the commit now, with

        git commit --amend

Once you are satisfied with your changes, run

        git rebase --continue
```

此时，您可以编辑项目中的任何文件以进行任何额外的更改。 对于你所做的每项更改，都需要执行新的提交，可以通过输入 `git commit --amend` 命令来执行此操作。 完成所有更改后，即可运行 `git rebase --continue`。

然后，Git 开始执行 `reword 4ca2acc` 命令。  它会再次打开您的文本编辑器，并显示以下信息：

```
i cant' typ goods

# Please enter the commit message for your changes. Lines starting
# with '#' will be ignored, and an empty message aborts the commit.
# Not currently on any branch.
# Changes to be committed:
#   (use "git reset HEAD^1 <file>..." to unstage)
#
# modified:   a
#
```

和以前一样，Git 显示提交消息供您进行编辑。 可以更改文本 (`"i cant' typ goods"`)、保存文件并关闭编辑器。 Git 将完成变基并将您返回终端。

## 将变基的代码推送到 GitHub

由于你更改了 Git 历史记录，通常的 `git push origin` 不起作用。 您需要通过“强制推送”最新更改来修改命令：

```shell
# Don't override changes
$ git push origin main --force-with-lease

# Override changes
$ git push origin main --force
```

{% warning %}

强制推送具有严重的影响，因为它会更改分支提交的历史顺序。 请谨慎使用，尤其是您的仓库被多人访问时。

{% endwarning %}

## 延伸阅读

* [解决 Git 变基后的合并冲突](/github/getting-started-with-github/resolving-merge-conflicts-after-a-git-rebase)

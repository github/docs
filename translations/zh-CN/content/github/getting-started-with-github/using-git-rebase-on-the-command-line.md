---
title: 在命令行中使用 Git rebase
redirect_from:
  - /articles/using-git-rebase/
  - /articles/using-git-rebase-on-the-command-line
  - /github/using-git/using-git-rebase-on-the-command-line
intro: 以下是在命令行中使用 `git rebase` 的简短教程。
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

在本例中，我们将涵盖所有可用的 `git rebase` 命令，`exec` 除外。

我们将通过在终端上输入 `git rebase --interactive HEAD~7` 开始变基。 首选的文本编辑器将显示以下行：

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

* 使用 `squash` 将第五个提交 (`fa39187`) 压缩到 `"Patch A"` 提交 (`1fc6c95`) 中。
* 将最后一个提交 (`7b36971`) 向上移动到 `"Patch B"` 提交 (`6b2481b`) 之前，并将其保留为 `pick`。
* 将 `"A fix for Patch B"` 提交 (`c619268`) 合并到 `"Patch B"` 提交 (`6b2481b`) 中，并使用 `fixup` 忽略提交消息。
* 使用 `edit` 将第三个提交 (`dd1475d`) 拆分成两个较小的提交。
* 使用 `reword` 修复拼写错误的提交 (`4ca2acc`) 的提交消息。

唷！ 这听起来像是有好多工作，但一步一步来，我们可以轻松地进行这些更改。

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

我们将每行的命令从 `pick` 更改为我们感兴趣的命令。

现在，保存并关闭编辑器，这将开始交互式变基。

Git 跳过第一条变基命令 `pick 1fc6c95`，因为该命令无需任何操作。 它转到下一条命令 `squash fa39187`。 由于此操作需要您的输入，因此 Git 再次打开您的文本编辑器。 其打开的文件类似如下：

```
# 这是两个提交的组合。
# 第一个提交的消息是：

Patch A

# 这是第二个提交消息：

something to add to patch A

# 请输入您的更改的提交消息。 开头
# 为 '#' 的行将被忽略，并且空消息会中止提交。
# 当前不在任何分支中。
# 要进行提交的更改：
#   （使用 "git reset HEAD <file>..." 取消暂存）
#
# 已修改：a
#
```

此文件是用 Git 的方式表明“嗨，这就是我要使用这条 `squash` 完成的操作”。 它列出了第一个提交的消息 (`"Patch A"`) 和第二个提交的消息 (`"something to add to patch A"`)。 如果对这些提交消息感到满意，您可以保存该文件，然后关闭编辑器。 否则，您可选择更改提交消息，只需更改文本即可。

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

Git 会处理两条 `pick` 命令（针对 `pick 7b36971` 和 `pick 6b2481b`）。 它*还*会处理 `fixup` 命令 (`fixup c619268`)，因为该命令不需要任何交互。 `fixup` 会将来自 `c619268` 的更改合并到其之前的提交 `6b2481b` 中。 这些更改都有相同的提交消息：`"Patch B"`。

Git 开始 `edit dd1475d` 操作，停止，然后将以下消息打印到终端：

```shell
You can amend the commit now, with

        git commit --amend

Once you are satisfied with your changes, run

        git rebase --continue
```

此时，您可以编辑项目中的任何文件以进行任何额外的更改。 对于您进行的每个更改，您都需要通过输入 `git commit --amend` 命令执行新提交。 完成所有更改后，您可以运行 `git rebase --continue`。

Git 随后开始执行 `reword 4ca2acc` 命令。  它会再次打开您的文本编辑器，并显示以下信息：

```
i cant' typ goods

# 请输入您的更改的提交消息。 开头
# 为 '#' 的行将被忽略，并且空消息会中止提交。
# 当前不在任何分支中。
# 要进行提交的更改：
#   （使用 "git reset HEAD^1 <file>..." 取消暂存）
#
# 已修改：a
#
```

和以前一样，Git 显示提交消息供您进行编辑。 您可以更改文本 (`"i cant' typ goods"`)，保存该文件，然后关闭编辑器。 Git 将完成变基并将您返回终端。

### 将变基的代码推送到 GitHub

由于您已更改 Git 历史记录，因此通常的 `git push origin` **不起**作用。 您需要通过“强制推送”最新更改来修改命令：

```shell
# Don't override changes
$ git push origin main --force-with-lease

# Override changes
$ git push origin main --force
```

{% warning %}

强制推送具有严重的影响，因为它会更改分支提交的历史顺序。 请谨慎使用，尤其是您的仓库被多人访问时。

{% endwarning %}

### 延伸阅读

* “[解决 Git 变基后的合并冲突](/github/getting-started-with-github/resolving-merge-conflicts-after-a-git-rebase)”

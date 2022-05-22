---
title: 解决 Git 变基后的合并冲突
intro: 当您执行 `git rebase` 操作时，通常会移动提交。 因此，您可能会遇到引入合并冲突的情况。 这意味着您的两个提交修改了同一个文件中的同一行，而 Git 不知道要应用哪个更改。
redirect_from:
  - /articles/resolving-merge-conflicts-after-a-git-rebase
  - /github/using-git/resolving-merge-conflicts-after-a-git-rebase
  - /github/getting-started-with-github/resolving-merge-conflicts-after-a-git-rebase
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---
在使用 `git rebase` 重新排序和操作提交后，如果发生合并冲突，Git 会告知您，并将以下消息打印到终端：

```shell
error: could not apply fa39187... something to add to patch A

When you have resolved this problem, run "git rebase --continue".
If you prefer to skip this patch, run "git rebase --skip" instead.
To check out the original branch and stop rebasing, run "git rebase --abort".
Could not apply fa39187f3c3dfd2ab5faa38ac01cf3de7ce2e841... Change fake file
If you prefer to skip this patch, run "git rebase --skip" instead.
To check out the original branch and stop rebasing, run "git rebase --abort".
Could not apply fa39187f3c3dfd2ab5faa38ac01cf3de7ce2e841... Change fake file
```

在这里，Git 告知您哪个提交导致冲突 (`fa39187`)。 您有三个选择：

* 您可以运行 `git rebase --abort` 完全撤消变基。 Git 将您恢复为分支状态如同调用 `git rebase` 之前一样。
* 您可以运行 `git rebase --skip` 完全跳过提交。 这意味着将不包括由有问题的提交引入的任何更改。 您很少会选择此选项。
* 您可以解决冲突。

要解决冲突，可以按照[从命令行解决合并冲突的标准过程](/articles/resolving-a-merge-conflict-using-the-command-line)操作。 完成后，您需要调用 `git rebase --continue` 以便 Git 继续处理变基的其余部分。

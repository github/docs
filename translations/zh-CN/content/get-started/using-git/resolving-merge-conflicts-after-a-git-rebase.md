---
title: 解决 Git 变基后的合并冲突
intro: 执行 `git rebase` 操作时，通常会移动提交。 因此，您可能会遇到引入合并冲突的情况。 这意味着您的两个提交修改了同一个文件中的同一行，而 Git 不知道要应用哪个更改。
redirect_from:
  - /articles/resolving-merge-conflicts-after-a-git-rebase
  - /github/using-git/resolving-merge-conflicts-after-a-git-rebase
  - /github/getting-started-with-github/resolving-merge-conflicts-after-a-git-rebase
  - /github/getting-started-with-github/using-git/resolving-merge-conflicts-after-a-git-rebase
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Resolve conflicts after rebase
ms.openlocfilehash: 8798282fb804f7b2389d98f69ba2b0e855a2289a
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/10/2022
ms.locfileid: '145098885'
---
在使用 `git rebase` 重新排序和操作提交后，如果发生合并冲突，Git 将通过输出到终端的以下消息告诉你：

```shell
error: could not apply fa39187... something to add to patch A

When you have resolved this problem, run "git rebase --continue".
If you prefer to skip this patch, run "git rebase --skip" instead.
To check out the original branch and stop rebasing, run "git rebase --abort".
Could not apply fa39187f3c3dfd2ab5faa38ac01cf3de7ce2e841... Change fake file
```

在这里，Git 会告知你是哪个提交导致了冲突 (`fa39187`)。 您有三个选择：

* 可以运行 `git rebase --abort` 以完全撤消变基。 Git 将返回到分支的状态，即调用 `git rebase` 之前的状态。
* 可以运行 `git rebase --skip` 以完全跳过提交。 这意味着将不包括由有问题的提交引入的任何更改。 您很少会选择此选项。
* 您可以解决冲突。

若要解决冲突，可以按照[从命令行解决合并冲突的标准过程](/github/collaborating-with-pull-requests/addressing-merge-conflicts/resolving-a-merge-conflict-using-the-command-line)操作。 完成后，需要调用 `git rebase --continue`，以便 Git 继续处理变基的其余部分。

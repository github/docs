---
title: 关于 Git 变基
redirect_from:
  - /rebase/
  - articles/interactive-rebase/
  - /articles/about-git-rebase
  - /github/using-git/about-git-rebase
  - /github/getting-started-with-github/about-git-rebase
intro: '`git rebase` 命令用于轻松更改一系列提交，修改仓库的历史记录。 您可以重新排序、编辑提交或将提交压缩到一起。'
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

通常，您会使用 `git rebase` 来：

* 编辑之前的提交消息
* 将多个提交合并为一个
* 删除或还原不再必要的提交

{% warning %}

**警告**：由于更改您的提交历史记录可能会给其他人使用仓库造成困难，因此如果提交已经推送到仓库，提交变基被视为一种坏习惯。 要了解如何在 {% data variables.product.product_location %} 上安全地变基，请参阅“[关于拉取请求合并](/articles/about-pull-request-merges)”。

{% endwarning %}

### 对分支变基提交

要对另一个分支与当前分支状态之间的所有提交变基，可以在 shell（Windows 的命令提示符或者 Mac 和 Linux 的终端）中输入以下命令：

```shell
$ git rebase --interactive <em>other_branch_name</em>
```

### 对某一时间点变基提交

要变基当前分支中最近的几个提交，可以在 shell 中输入以下命令：

```shell
$ git rebase --interactive HEAD~7
```

### 变基时可用的命令

变基时有六个命令可用：

<dl>
<dt><code>pick</code></dt>
<dd><code>pick</code> 只表示包含提交。 在变基进行时重新排列 <code>pick</code> 命令的顺序会更改提交的顺序。 如果选择不包含提交，应删除整行。 </dd>

<dt><code>reword</code></dt>
<dd><code>reword</code> 命令类似于 <code>pick</code>，但在使用后，变基过程就会暂停，让您有机会改变提交消息。 提交所做的任何更改都不受影响。 </dd>

<dt><code>edit</code></dt>
<dd>如果选择 <code>edit</code> 提交，您将有机会修订提交，也就是说，可以完全添加或更改提交。 您也可以创建更多提交后再继续变基。 这样您可以将大提交拆分为小提交，或者删除在提交中执行错误更改。 </dd>

<dt><code>压缩</code></dt>
<dd>此命令可用于将两个或以上的提交合并为一个。 下面的提交压缩到其上面的提交。 Git 让您有机会编写描述两次更改的新提交消息。</dd>

<dt><code>fixup</code></dt>
<dd>这类似于 <code>squash</code>，但要合并的提交丢弃了其消息。 提交只是合并到其上面的提交，之前提交的消息用于描述两次更改。</dd>

<dt><code>exec</code></dt>
<dd>这可让您对提交运行任意 shell 命令。</dd>
</dl>

### `git rebase` 使用示例

无论使用哪个命令，Git 都将启动[默认文本编辑器](/github/getting-started-with-github/associating-text-editors-with-git)，并且打开详细说明所选范围中提交的文件。 该文件类似于：

```
pick 1fc6c95 Patch A
pick 6b2481b Patch B
pick dd1475d something I want to split
pick c619268 A fix for Patch B
pick fa39187 something to add to patch A
pick 4ca2acc i cant' typ goods
pick 7b36971 something to move before patch B

# Rebase 41a72e6..7b36971 onto 41a72e6
#
# Commands:
#  p, pick = use commit
#  r, reword = use commit, but edit the commit message
#  e, edit = use commit, but stop for amending
#  s, squash = use commit, but meld into previous commit
#  f, fixup = like "squash", but discard this commit's log message
#  x, exec = run command (the rest of the line) using shell
#
# If you remove a line here THAT COMMIT WILL BE LOST.
# However, if you remove everything, the rebase will be aborted.
#
```

从上到下分解此信息，我们可以看出：

- 列出了七个命令，表示从起点到当前分支状态之间有七处更改。
- 您选择要变基的提交按最早更改（顶部）到最新更改（底部）的顺序存储。
- 每行列出一个命令（默认为 `pick`）、提交 SHA 和提交消息。 整个 `git rebase` 程序以您对这三列的操作为中心。 您做出的更改将*变基*到仓库。
- 在提交后，Git 会告知我们正在处理的提交范围 (`41a72e6..7b36971`)。
- 最后，Git 会提供一些帮助，告知在变基提交时可用的命令。

### 延伸阅读

- "[使用 Git rebase](/articles/using-git-rebase)"
- [_Pro Git_ 书籍中的“Git 分支”一章](https://git-scm.com/book/en/Git-Branching-Rebasing)
- [_Pro Git_ 书籍中的“交互式变基”一章](https://git-scm.com/book/en/Git-Tools-Rewriting-History#_changing_multiple)
- "[使用变基压缩提交](http://gitready.com/advanced/2009/02/10/squashing-commits-with-rebase.html)"
- {% data variables.product.prodname_desktop %} 文档中的“[同步分支](/desktop/contributing-to-projects/syncing-your-branch)”

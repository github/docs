---
title: Git リベースについて
redirect_from:
  - /rebase
  - /articles/interactive-rebase
  - /articles/about-git-rebase
  - /github/using-git/about-git-rebase
  - /github/getting-started-with-github/about-git-rebase
  - /github/getting-started-with-github/using-git/about-git-rebase
intro: '`git rebase` コマンドを使えば、一連のコミットを容易に修正し、リポジトリの履歴を変更できます。 コミットの順序を変更したり、編集したり、まとめて squash できます。'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
ms.openlocfilehash: 5ffa3cbb1fcb6c8c37e56e434b08018582a0ff2b
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/11/2022
ms.locfileid: '145115989'
---
通常、次の場合に `git rebase` を使用します。

* 以前のコミットメッセージの編集
* 複数のコミットを1つにまとめる
* 不要になったコミットの削除もしくは打ち消し

{% warning %}

**警告**: コミット履歴を変更すると、リポジトリを使う他の人にとって管理が困難になる場合があるため、リポジトリにプッシュ済みのコミットをリベースするのは推奨されません。 {% data variables.product.product_location %} で安全にリベースする方法については、「[pull request のマージについて](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/about-pull-request-merges)」を参照してください。

{% endwarning %}

## ブランチに対するコミットのリベース

他のブランチと現在のブランチの状態との間のすべてのコミットをリベースするには、シェル（Windowsのコマンドプロンプト、あるいはMacやLinuxのターミナル）で以下のコマンドを入力してください。

```shell
$ git rebase --interactive <em>other_branch_name</em>
```

## ある時点に対するコミットのリベース

現在のブランチの最後のいくつかのコミットをリベースするには、シェルに以下のコマンドを入力してください。

```shell
$ git rebase --interactive HEAD~7
```

## リベースに利用できるコマンド

リベースの際に利用できるコマンドは6つあります。

<dl>
<dt><code>pick</code></dt>
<dd><code>pick</code> は、単にコミットが含まれていることを意味します。 <code>pick</code> コマンドの順序を入れ替えると、リベースの実行中にコミットの順序が変更されます。 コミットを含めないのであれば、行全体を削除してください。 </dd>

<dt><code>reword</code></dt>
<dd><code>reword</code> コマンドは <code>pick</code> に似ていますが、これを使用すると、リベース プロセスが一時停止し、コミット メッセージを変更することができます。 コミットによる変更は影響されません。 </dd>

<dt><code>edit</code></dt>
<dd>コミットを <code>edit</code> すると、コミットを修正することができます。つまり、コミットを追加し、完全にコミットを変更することができます。 また、リベースを続ける前にさらにコミットをすることもできます。 こうすることで大きなコミットを小さなコミット群に分割したり、コミット中の間違った変更を取り除いたりすることができます。 </dd>

<dt><code>squash</code></dt>
<dd>このコマンドを使うと、2 つ以上のコミットを結合して 1 つのコミットにできます。 コミットはその上にあるコミットに squash されます。 Git は、どちらの変更についても記述する新しいコミットメッセージを書かせてくれます。</dd>

<dt><code>fixup</code></dt>
<dd>これは <code>squash</code> に似ていますが、マージされるコミットのメッセージは破棄されています。 コミットはその上位のコミットに単純にマージされ、選考するコミットのメッセージがどちらの変更の記述としても使われます。</dd>

<dt><code>exec</code></dt>
<dd>このコマンドは、コミットに対して任意のシェルコマンドを実行させてくれます。</dd>
</dl>

## `git rebase` を使用する例

使用するコマンドに関係なく、Git は[既定のテキスト エディター](/github/getting-started-with-github/associating-text-editors-with-git)を起動し、選択した範囲内のコミットの詳細を示すファイルを開きます。 このファイルは以下のようになります。

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

この情報を上から下へ見ていくと、以下のことが分かります。

- 7つのコミットがリストされており、出発点から現在のブランチの状態までに7つの変更があったことが示されています。
- リベースすることにしたコミットは、古い変更（先頭）から新しい変更（末尾）の順に並べられています。
- 各行には、コマンド (既定では `pick`)、コミット SHA、コミット メッセージが一覧表示されます。 `git rebase` 手順全体は、主にこれら 3 つの列の操作に関するものです。 行った変更はリポジトリに *リベースされます*。
- コミットの後、Git によって、使用しているコミットの範囲 (`41a72e6..7b36971`) が通知されます。
- 最後に、Gitはコミットをリベースする際に利用できるコメントを示すことで多少のヘルプを提供しています。

## 参考資料

- 「[Git リベースの使用](/articles/using-git-rebase)」
- [_Pro Git_ ブックの「Git 分岐」の章](https://git-scm.com/book/en/Git-Branching-Rebasing)
- [_Pro Git_ ブックの「対話型リベース」の章](https://git-scm.com/book/en/Git-Tools-Rewriting-History#_changing_multiple)
- 「[リベースを使用したコミットのスカッシュ](http://gitready.com/advanced/2009/02/10/squashing-commits-with-rebase.html)」
- {% data variables.product.prodname_desktop %} ドキュメントの「[ブランチの同期](/desktop/contributing-to-projects/syncing-your-branch)」

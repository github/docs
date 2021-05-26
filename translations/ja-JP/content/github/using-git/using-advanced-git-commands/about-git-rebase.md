---
title: Gitリベースについて
redirect_from:
  - /rebase/
  - articles/interactive-rebase/
  - /articles/about-git-rebase
  - /github/using-git/about-git-rebase
intro: '`git rebase` コマンドを使えば、一連のコミットを容易に修正し、リポジトリの履歴を変更できます。 コミットの順序を変更したり、編集したり、まとめて squash できます。'
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---
通常、`git rebase`は以下の目的で使われます。

* 以前のコミットメッセージの編集
* 複数のコミットを1つにまとめる
* 不要になったコミットの削除もしくは打ち消し

{% warning %}

**警告**：コミット履歴を変更すると、リポジトリを使う他の人々にとっては難しいことになり得るので、リポジトリにプッシュ済みのコミットをリベースするのは悪いプラクティスと考えられています。 {% data variables.product.product_location %}で安全にリベースする方法を学ぶには[プルリクエストのマージについて](/articles/about-pull-request-merges)を参照してください。

{% endwarning %}

### ブランチに対するコミットのリベース

他のブランチと現在のブランチの状態との間のすべてのコミットをリベースするには、シェル（Windowsのコマンドプロンプト、あるいはMacやLinuxのターミナル）で以下のコマンドを入力してください。

```shell
$ git rebase --interactive <em>other_branch_name</em>
```

### ある時点に対するコミットのリベース

現在のブランチの最後のいくつかのコミットをリベースするには、シェルに以下のコマンドを入力してください。

```shell
$ git rebase --interactive HEAD~7
```

### リベースに利用できるコマンド

リベースの際に利用できるコマンドは6つあります。

<dl>
<dt><code>pick</code></dt>
<dd><code>pick</code>は単にそのコミットが含まれるということを意味します。 <code>pick</code>コマンドの順序を入れ替えると、リベースが進んでいるときにコミットの順序が変更されます。 コミットを含めないのであれば、行全体を削除してください。 </dd>

<dt><code>reword</code></dt>
<dd><code>reword</code>コマンドは<code>pick</code>に似ていますが、このコマンドを使った後、リベースの処理は一時的に止まり、コミットメッセージを変更する機会を与えてくれます。 コミットによる変更は影響されません。 </dd>

<dt><code>edit</code></dt>
<dd>コミットを<code>edit</code>すると、コミットを修正することができます。すなわち、コミットに対して追加をしたり、完全に変更したりすることができます。 また、リベースを続ける前にさらにコミットをすることもできます。 こうすることで大きなコミットを小さなコミット群に分割したり、コミット中の間違った変更を取り除いたりすることができます。 </dd>

<dt><code>squash</code></dt>
<dd>このコマンドを使うと、2 つ以上のコミットを結合して 1 つのコミットにできます。 コミットはその上にあるコミットに squash されます。 Git は、どちらの変更についても記述する新しいコミットメッセージを書かせてくれます。</dd>

<dt><code>fixup</code></dt>
<dd>これは<code>squash</code>に似ていますが、マージされるコミットのメッセージは破棄されます。 コミットはその上位のコミットに単純にマージされ、選考するコミットのメッセージがどちらの変更の記述としても使われます。</dd>

<dt><code>exec</code></dt>
<dd>このコマンドは、コミットに対して任意のシェルコマンドを実行させてくれます。</dd>
</dl>

### `git rebase`の利用例

どのコマンドを使うにしても、Gitは[デフォルトのテキストエディタ](/articles/associating-text-editors-with-git)を起動し、選択した範囲のコミットの詳細を記述したファイルをオープンします。 このファイルは以下のようになります。

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
# However, if you remove everything, the rebase will be aborted.
#
```

この情報を上から下へ見ていくと、以下のことが分かります。

- 7つのコミットがリストされており、出発点から現在のブランチの状態までに7つの変更があったことが示されています。
- リベースすることにしたコミットは、古い変更（先頭）から新しい変更（末尾）の順に並べられています。
- 各行にはコマンド（デフォルトでは`pick`）、コミットのSHA、そしてコミットメッセージがリストされています。 `git rebase`の全体の手続きは、これらの3つの列の操作を軸として展開されます。 行った変更は、リポジトリに*リベース*されます。
- コミット後に、Gitは作業しているコミットの範囲（`41a72e6..7b36971`）を示します。
- 最後に、Gitはコミットをリベースする際に利用できるコメントを示すことで多少のヘルプを提供しています。

### 参考リンク

- [Git rebaseの利用](/articles/using-git-rebase)
- [_Pro Git_の"Git Branching"の章](https://git-scm.com/book/en/Git-Branching-Rebasing)
- [_Pro Git_の"Interactive Rebasing"の章](https://git-scm.com/book/en/Git-Tools-Rewriting-History#_changing_multiple)
- [リベースでのコミットのsquash](http://gitready.com/advanced/2009/02/10/squashing-commits-with-rebase.html)
- {% data variables.product.prodname_desktop %} ドキュメンテーションの「[ブランチを同期する](/desktop/contributing-to-projects/syncing-your-branch)」

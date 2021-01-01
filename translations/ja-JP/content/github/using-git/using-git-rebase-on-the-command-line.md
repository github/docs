---
title: コマンドラインで Git リベースを使う
redirect_from:
  - /articles/using-git-rebase/
  - /articles/using-git-rebase-on-the-command-line
intro: コマンドラインで、「git rebase」を使うための簡単なチュートリアルです。
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

この例では、`exec` を除く、利用可能なすべての ` git rebase ` コマンドについて説明します。

端末で `git rebase --interactive HEAD~7` と入力して、リベースを開始します。 お気に入りのテキストエディタに以下の行が表示されます:

```
pick 1fc6c95 Patch A
pick 6b2481b Patch B
pick dd1475d something I want to split
pick c619268 A fix for Patch B
pick fa39187 something to add to patch A
pick 4ca2acc i cant' typ goods
pick 7b36971 something to move before patch B
```

この例では、以下を行います:

* `squash` を使用して、5 番目のコミット (`fa39187`) を `"Patch A"` コミット (`1fc6c95squash`) に Squash します。
* 最後のコミット (`7b36971`) を`"Patch B"`コミット (`6b2481b`) の前に移動し、`pick` のままにします。
* `"A fix for Patch B"` コミット (`c619268`) を `"Patch B"` コミット (`6b2481b`) にマージし、`fixup` を使用して、コミットメッセージを無視します。
* `edit` を使用して、3 番目のコミット (`dd1475d`) を 2 つの小さなコミットに分割します。
* `reword` を使用して、スペルミスのコミットメッセージ (`4ca2acc`) を修正します。

いかがですか。 やることが多くて大変なように見えますが、落ち着いて、一度に 1 ステップずつ進めましょう。すぐに慣れて素早くできるようになります。

はじめに、ファイル内のコマンドを次のように変更します:

```
pick 1fc6c95 Patch A
squash fa39187 something to add to patch A
pick 7b36971 something to move before patch B
pick 6b2481b Patch B
fixup c619268 A fix for Patch B
edit dd1475d something I want to split
reword 4ca2acc i cant' typ goods
```

各行のコマンドを、適宜、`pick` から別のコマンドに置き換えました。

それでは、エディタを保存して閉じます。 これにより、対話的なリベースを開始します。

Git は、最初のリベースコマンド `pick 1fc6c95` では何もすることがないので、スキップします。 次のコマンド `squash fa39187` に進みます。 この操作には入力が必要なので、Git はもう一度テキストエディタを開きます。 開かれるファイルは次のようになります:

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

このファイルは Git の言い方で、「ほら、これが今私がこの `squash` でやろうとしていることです」という意味です。 最初のコミットのメッセージ (`"Patch A"`) と 2 番目のコミットのメッセージ (`"something to add to patch A"`) が一覧表示されます。 これらのコミットメッセージに満足したら、ファイルを保存してエディタを閉じることができます。 それ以外の場合は、テキストを変更するだけでコミットメッセージを変更することができます。

エディタを閉じると、リベースは続行されます:

```
pick 1fc6c95 Patch A
squash fa39187 something to add to patch A
pick 7b36971 something to move before patch B
pick 6b2481b Patch B
fixup c619268 A fix for Patch B
edit dd1475d something I want to split
reword 4ca2acc i cant' typ goods
```

Git は 2 つの `pick` コマンドを処理します (`pick 7b36971` と `pick 6b2481b`) 。 対話を必要としないため、`fixup` コマンド (`fixup c619268`) *も*処理されます。 `fixup` は、`c619268` から `6b2481b` の前のコミットに変更をマージします。 両方の変更とも同じコミットメッセージ `"Patch B"` を持つことになります。

Git は `edit dd1475d` 操作を開始して停止し、次のメッセージを端末に表示します:

```shell
You can amend the commit now, with

        git commit --amend

Once you are satisfied with your changes, run

        git rebase --continue
```

この時点で、プロジェクト内の任意のファイルを編集して追加の変更を加えることができます。 変更するたびに、新しいコミットを実行する必要があります。そのためには、`git commit --amend` コマンドを入力します。 すべての変更を終えたら、`git rebase --continue` を実行できます。

そして、Git は `reword 4ca2acc` コマンドを使います。  テキストエディタがもう一度開き、次の情報が表示されます:

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

以前と同様に、Git は編集するためのコミットメッセージを表示しています。 テキスト (`"i cant' typ goods"`) を変更し、ファイルを保存し、エディタを閉じることができます。 Git はリベースを終了して、端末に戻ります。

### リベースされたコードを GitHub にプッシュする

Git の履歴を変更したので、通常の `git push origin` **は動作しません**。 最新の変更を「強制プッシュ」して、コマンドを変更する必要があります:

```shell
$ git push origin main --force
```

{% warning %}

フォースプッシュは、ブランチに対するコミットの履歴上の順序を変更するので、深刻な影響を及ぼします。 特にあなたのリポジトリが複数の人々によってアクセスされている場合は、注意して使用してください。

{% endwarning %}

### 参考リンク

* 「[Git リベース後のマージコンフリクトを解決する](/articles/resolving-merge-conflicts-after-a-git-rebase)」

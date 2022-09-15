---
title: コマンドラインで Git リベースを使う
redirect_from:
  - /articles/using-git-rebase
  - /articles/using-git-rebase-on-the-command-line
  - /github/using-git/using-git-rebase-on-the-command-line
  - /github/getting-started-with-github/using-git-rebase-on-the-command-line
  - /github/getting-started-with-github/using-git/using-git-rebase-on-the-command-line
intro: コマンドラインで `git rebase` を使うための短いチュートリアルです。
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Git rebase
ms.openlocfilehash: e0d2d2d10da187d6cc38a72a44e8235ec1f6f73f
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/11/2022
ms.locfileid: '145130496'
---
## Git リベースの使用

この例では、`exec` を除く、利用可能なすべての `git rebase` コマンドについて説明します。

ターミナルで `git rebase --interactive HEAD~7` と入力してリベースを開始します。 お気に入りのテキストエディタに以下の行が表示されます:

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

* `squash` を使って、5 番目のコミット (`fa39187`) を `"Patch A"` コミット (`1fc6c95`) にスカッシュします。
* 最後のコミット (`7b36971`) を `"Patch B"` コミット (`6b2481b`) の前に移動し、`pick` のままにしておきます。
* `"A fix for Patch B"` コミット (`c619268`) を `"Patch B"` コミット (`6b2481b`) にマージし、`fixup` を使ってコミット メッセージを無視します。
* `edit` を使って、3 番目のコミット (`dd1475d`) を 2 つの小さなコミットに分割します。
* `reword` を使って、スペルミスのあるコミット (`4ca2acc`) のコミット メッセージを修正します。

お疲れさまでした。 やることが多くて大変なように見えますが、落ち着いて、一度に 1 ステップずつ進めましょう。すぐに慣れて素早くできるようになります。

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

各行のコマンドを、`pick` から目的のコマンドに変更しました。

それでは、エディタを保存して閉じます。 これにより、対話的なリベースを開始します。

Git は、最初のリベース コマンド `pick 1fc6c95` では何もする必要がないので、スキップします。 次のコマンド `squash fa39187` に進みます。 この操作には入力が必要なので、Git はもう一度テキストエディタを開きます。 開かれるファイルは次のようになります:

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

このファイルは Git の言い方で、「ほら、これが今この `squash` でやろうとしていることです」という意味です。 最初のコミットのメッセージ (`"Patch A"`) と 2 番目のコミットのメッセージ (`"something to add to patch A"`) がリストになっています。 これらのコミットメッセージに満足したら、ファイルを保存してエディタを閉じることができます。 それ以外の場合は、テキストを変更するだけでコミットメッセージを変更することができます。

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

Git は 2 つの `pick` コマンドを処理します (`pick 7b36971` と `pick 6b2481b`)。 また、対話が不要なため、`fixup` コマンド (`fixup c619268`) *"も"* 処理します。 `fixup` では `c619268` からの変更を、その前のコミットである `6b2481b` にマージします。 両方の変更は同じコミット メッセージ `"Patch B"` を持つことになります。

Git は `edit dd1475d` の操作に到達すると停止し、ターミナルに次のメッセージを表示します。

```shell
You can amend the commit now, with

        git commit --amend

Once you are satisfied with your changes, run

        git rebase --continue
```

この時点で、プロジェクト内の任意のファイルを編集して追加の変更を加えることができます。 変更するたびに、新しいコミットを実行する必要があります。そのためには、`git commit --amend` コマンドを入力します。 すべての変更を終えたら、`git rebase --continue` を実行できます。

Git は次に `reword 4ca2acc` コマンドに到達します。  テキストエディタがもう一度開き、次の情報が表示されます:

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

以前と同様に、Git は編集するためのコミットメッセージを表示しています。 テキスト (`"i cant' typ goods"`) を変更し、ファイルを保存してエディターを閉じます。 Git はリベースを終了して、端末に戻ります。

## リベースされたコードを GitHub にプッシュする

Git 履歴を変更したので、通常の `git push origin` は **機能しません**。 最新の変更を「強制プッシュ」して、コマンドを変更する必要があります:

```shell
# Don't override changes
$ git push origin main --force-with-lease

# Override changes
$ git push origin main --force
```

{% warning %}

フォースプッシュは、ブランチに対するコミットの履歴上の順序を変更するので、深刻な影響を及ぼします。 特にあなたのリポジトリが複数の人々によってアクセスされている場合は、注意して使用してください。

{% endwarning %}

## 参考資料

* 「[Git リベース後のマージ コンフリクトを解決する](/github/getting-started-with-github/resolving-merge-conflicts-after-a-git-rebase)」

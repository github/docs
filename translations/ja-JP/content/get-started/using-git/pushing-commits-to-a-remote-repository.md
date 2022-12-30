---
title: コミットをリモートリポジトリにプッシュする
intro: ローカル ブランチで実行されたコミットをリモート リポジトリにプッシュするには、`git push` を使用します。
redirect_from:
  - /articles/pushing-to-a-remote
  - /articles/pushing-commits-to-a-remote-repository
  - /github/using-git/pushing-commits-to-a-remote-repository
  - /github/getting-started-with-github/pushing-commits-to-a-remote-repository
  - /github/getting-started-with-github/using-git/pushing-commits-to-a-remote-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Push commits to a remote
ms.openlocfilehash: 61a3eb3e0b0147810b561b59b58879688dd4ba36
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '145125789'
---
## `git push` のバージョン情報
`git push` コマンドは 2 つの引数を取ります。

* リモート名 (例: `origin`)
* ブランチ名 (例: `main`)

次に例を示します。

```shell
git push <em> &lt;REMOTENAME> &lt;BRANCHNAME> </em>
```

たとえば、通常、ローカルの変更をオンライン リポジトリにプッシュするために `git push origin main` を実行します。

## ブランチの名前を変更する

ブランチの名前を変更する場合も、同じ `git push` コマンドを使いますが、新しいブランチの名前という引数をもう 1 つ追加します。 次に例を示します。

```shell
git push <em> &lt;REMOTENAME> &lt;LOCALBRANCHNAME></em>:<em>&lt;REMOTEBRANCHNAME> </em>
```

これは `LOCALBRANCHNAME` を `REMOTENAME` にプッシュしますが、名前は `REMOTEBRANCHNAME` に変更されます。

## "non-fast-forward" エラーに対処する

リポジトリのローカル コピーが同期されていない、つまりプッシュ先である上流リポジトリより古くなっている場合は、`non-fast-forward updates were rejected` というメッセージが表示されます。
これは、ローカルの変更をプッシュする前に上流の変更を取得、つまり "フェッチ" する必要があるという意味です。

このエラーの詳細については、「[non-fast-forward エラーの扱い](/github/getting-started-with-github/dealing-with-non-fast-forward-errors)」を参照してください。

## タグをプッシュする

デフォルトで、追加のパラメータを使わない場合、`git push` はリモート ブランチと名前が一致するすべてのブランチを送信します。

1 つのタグをプッシュする場合は、ブランチをプッシュするときと同じコマンドを発行できます。

```shell
git push <em> &lt;REMOTENAME> &lt;TAGNAME> </em>
```

すべてのタグをプッシュする場合は、次のコマンドを使用できます:

```shell
git push <em> &lt;REMOTENAME></em> --tags
```

## リモートブランチまたはタグを削除する

ブランチを削除する構文は、1 回見ただけでは少し難解です:

```shell
git push <em> &lt;REMOTENAME></em> :<em>&lt;BRANCHNAME> </em>
```

コロンの前にスペースがあることに注意してください。 このコマンドは、ブランチの名前を変更するときの手順と似ています。 ただし、ここでは Git に `REMOTENAME` の `BRANCHNAME` に _何も_ プッシュしないように指示しています。 このため、`git push` はリモート リポジトリ上のブランチを削除してしまいます。

## リモートとフォーク

GitHub では[リポジトリを "フォーク" できる](https://guides.github.com/overviews/forking/)ことを既にご存じかもしれません。

自分が所有するリポジトリをクローンするときには、更新をフェッチしたりプッシュしたりする対象を Git にリモート URL で指定します。 元のリポジトリとのコラボレーションが必要な場合は、ローカルの Git クローンに新しいリモート URL を追加するといいでしょう。その名前は通例、`upstream` です。

```shell
git remote add upstream <em> &lt;THEIR_REMOTE_URL> </em>
```

これで、更新とブランチを *その* フォークからフェッチできるようになります。

```shell
git fetch upstream
# Grab the upstream remote's branches
> remote: Counting objects: 75, done.
> remote: Compressing objects: 100% (53/53), done.
> remote: Total 62 (delta 27), reused 44 (delta 9)
> Unpacking objects: 100% (62/62), done.
> From https://{% data variables.command_line.codeblock %}/<em>octocat</em>/<em>repo</em>
>  * [new branch]      main     -> upstream/main
```

ローカルでの変更が終わったら、ローカル ブランチを GitHub にプッシュし、[pull request を開始](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests)できます。

フォークの操作の詳細については、[フォークの同期](/pull-requests/collaborating-with-pull-requests/working-with-forks/syncing-a-fork)に関する記事を参照してください。

## 参考資料

- [「Pro Git」ブックの「リモート」チャプター](https://git-scm.com/book/ch5-2.html)
- [`git remote` メイン ページ](https://git-scm.com/docs/git-remote.html)
- 「[Git チートシート](/articles/git-cheatsheet)」
- 「[Git ワークフロー](/github/getting-started-with-github/git-workflows)」
- 「[Git ハンドブック](https://guides.github.com/introduction/git-handbook/)」

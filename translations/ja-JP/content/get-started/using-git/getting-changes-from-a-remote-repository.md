---
title: リモートリポジトリから変更を取得する
intro: 一般的な Git コマンドを使用して、リモートリポジトリにアクセスできます。
redirect_from:
  - /articles/fetching-a-remote
  - /articles/getting-changes-from-a-remote-repository
  - /github/using-git/getting-changes-from-a-remote-repository
  - /github/getting-started-with-github/getting-changes-from-a-remote-repository
  - /github/getting-started-with-github/using-git/getting-changes-from-a-remote-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Get changes from a remote
ms.openlocfilehash: 11996b33ccedea8169f472feb1804f2eed5a5d9d
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '145125790'
---
## 変更を取得するためのオプション

これらのコマンドは[リモート リポジトリ](/github/getting-started-with-github/about-remote-repositories)とやりとりするときに非常に便利です。 `clone` と `fetch` はリポジトリのリモート URL からローカル コンピューターにリモート コードをダウンロードし、`merge` は異なる人の作業と自分のものを一緒にマージするために使い、`pull` は `fetch` と `merge` を組み合わせたものです。

## リポジトリをクローンする

他のユーザーのリポジトリの完全なコピーを取得するには、`git clone` を次のように使います。

```shell
$ git clone https://{% data variables.command_line.codeblock %}/<em>USERNAME</em>/<em>REPOSITORY</em>.git
# Clones a repository to your computer
```

リポジトリをクローンするときに、[複数の異なる URL](/github/getting-started-with-github/about-remote-repositories) から選びます。 {% data variables.product.prodname_dotcom %}にログインした状態である間は、これらの URL はリポジトリの詳細の下に表示されます:

![リモート URL リスト](/assets/images/help/repository/remotes-url.png)

`git clone` を実行すると、次のアクションが発生します。
- `repo` という新しいフォルダーが作成される
- Git リポジトリとして初期化される
- クローン元の URL を指す `origin` という名前のリモートが作成される
- リポジトリのファイルとコミットすべてがそこにダウンロードされる
- デフォルトブランチがチェックアウトされる

リモート リポジトリの各ブランチ `foo` について、対応するリモート追跡ブランチ `refs/remotes/origin/foo` がローカル リポジトリに作成されます。 このようなリモート追跡ブランチの名前は、通常 `origin/foo` と省略できます。

## リモートリポジトリから変更をフェッチする

他のユーザーが行った新しい作業を取得するには、`git fetch` を使います。 リポジトリからフェッチすると、すべての新しいリモート追跡ブランチとタグが取得され、かつ、それらの変更は自分のブランチへマージ *されません*。

目的のプロジェクト用にリモート URL が設定されたローカル リポジトリが既にある場合、ターミナルで `git fetch *remotename*` を使うことで、すべての新しい情報を取得できます。

```shell
$ git fetch <em>remotename</em>
# Fetches updates made to a remote repository
```

それ以外の場合は、常に新しいリモートを追加してからフェッチできます。 詳細については、「[リモート リポジトリを管理する](/github/getting-started-with-github/managing-remote-repositories)」を参照してください。

## ローカルブランチに変更をマージする

マージとは、あなたのローカルでの変更を他のユーザによる変更と結合させる処理です。

通常、リモート追跡ブランチ (リモートリポジトリからフェッチされたブランチ) をローカルのブランチとマージします。

```shell
$ git merge <em>remotename</em>/<em>branchname</em>
# Merges updates made online with your local work
```

## リモートリポジトリから変更をプルする

`git pull` は、`git fetch` と `git merge ` の両方を同じコマンドで完了させる便利なショートカットです。

```shell
$ git pull <em>remotename</em> <em>branchname</em>
# Grabs online updates and merges them with your local work
```

`pull` は、取得された変更のマージを実行するため、`pull` コマンドの実行前にローカルの作業がコミットされていることを確認する必要があります。 [マージ コンフリクト](/github/collaborating-with-pull-requests/addressing-merge-conflicts/resolving-a-merge-conflict-using-the-command-line)が発生しても解決できない場合、またはマージを中止する場合、`git merge --abort` を使ってブランチをプルする前の状態に戻すことができます。

## 参考資料

- _Pro Git_ ブックの「[Working with Remotes (リモートでの作業)](https://git-scm.com/book/en/Git-Basics-Working-with-Remotes)」{% ifversion fpt or ghec %}
- 「[Troubleshooting connectivity problems (接続問題のトラブルシューティング)](/articles/troubleshooting-connectivity-problems)」{% endif %}

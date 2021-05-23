---
title: リモートの名前を変更する
intro: 「git remote rename」コマンドを使用して、既存のリモートの名前を変更します。
redirect_from:
  - /articles/renaming-a-remote
  - /github/using-git/renaming-a-remote
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---
`git remote rename` コマンドは、次の 2 つの引数を取ります:

* 既存のリモート名（`origin` など）
* リモートの新しい名前 (`destination` など)

### サンプル

次の例は (推奨されるとおり) [HTTPS を使用してクローンを作成](/articles/which-remote-url-should-i-use/#cloning-with-https-urls)したと想定しています。

```shell
$ git remote -v
# 既存のリモートを表示
> origin https://{% data variables.command_line.codeblock %}/<em>オーナー</em>/<em>リポジトリ</em>.git (fetch)
> origin https://{% data variables.command_line.codeblock %}/<em>オーナー</em>/<em>リポジトリ</em>.git (push)

$ git remote rename origin destination
# リモート名を「origin」から「destination」に変更

$ git remote -v
# リモートの新しい名前を確認
> destination https://{% data variables.command_line.codeblock %}/<em>オーナー</em>/<em>リポジトリ</em>.git (fetch)
> destination https://{% data variables.command_line.codeblock %}/<em>オーナー</em>/<em>リポジトリ</em>.git (push)
```

### トラブルシューティング

リモートの名前を変更しようとすると、次のエラーが発生することがあります。

#### Could not rename config section 'remote.[古い名前]' to 'remote.[新しい名前]'

このエラーは、名前を変更しようとして入力した古いリモート名のリモートが存在しない、という意味です。

現在どのリモートが存在するかは、次のように `git remote -v` コマンドでチェックできます:

```shell
$ git remote -v
# 既存のリモートを表示
> origin  https://{% data variables.command_line.codeblock %}/<em>コードオーナー</em>/<em>リポジトリ</em>.git (fetch)
> origin  https://{% data variables.command_line.codeblock %}/<em>コードオーナー</em>/<em>リポジトリ</em>.git (push)
```

#### Remote [新しい名前] already exists.

このエラーは、使用しようとしたリモート名がすでに存在する、という意味です。 これを解決するのは、別のリモート名の使用、または元のリモートの名前の変更のいずれかです。

### 参考リンク

- [_Pro Git_ ブックの「リモートでの作業」](https://git-scm.com/book/en/Git-Basics-Working-with-Remotes)

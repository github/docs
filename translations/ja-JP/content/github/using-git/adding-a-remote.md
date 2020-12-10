---
title: リモートの追加
intro: '新しいリモートを追加するには、リポジトリが保存されているディレクトリでターミナルから `git remote add` コマンドを使ってください。'
redirect_from:
  - /articles/adding-a-remote
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

`git remote add` コマンドは 2 つの引数を取ります:

* リモート名。たとえば `origin`
* リモート URL。たとえば `https://{% data variables.command_line.backticks %}/user/repo.git`

例:

```shell
$ git remote add origin https://{% data variables.command_line.codeblock %}/<em>user</em>/<em>repo</em>.git
# 新しいリモートの設定

$ git remote -v
# 新しいリモートの検証
> origin  https://{% data variables.command_line.codeblock %}/<em>user</em>/<em>repo</em>.git (fetch)
> origin  https://{% data variables.command_line.codeblock %}/<em>user</em>/<em>repo</em>.git (push)
```

どの URL を使うべきかわかりませんか？  [どのリモート URL を使うべきか](/articles/which-remote-url-should-i-use)を参照してください。

### トラブルシューティング

リモートを追加しようとすると、以下のエラーが生じることがあります。

#### Remote `name` already exists

このエラーは、ローカルのリポジトリにすでに存在している名前でリモートを追加しようとしたということです。

```shell
$ git remote add origin https://{% data variables.command_line.codeblock %}/octocat/Spoon-Knife
> fatal: remote origin already exists.
```

これを修正するには、以下の方法があります:

* 新しいリモートに別の名前を使う
* [既存のリモートの名前を変える](/articles/renaming-a-remote)
* [既存のリモートを削除する](/articles/removing-a-remote)

### 参考リンク

- [書籍 _Pro Git_ のリモートでの作業](https://git-scm.com/book/ja/v2/Git-の基本-リモートでの作業)

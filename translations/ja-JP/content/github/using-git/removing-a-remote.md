---
title: リモートを削除する
intro: '`git remote rm` コマンドを使用して、リポジトリからリモート URL を削除します。'
redirect_from:
  - /articles/removing-a-remote
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

`git remote rm` コマンドは 1 つの引数を取ります:

* リモート名 (`destination` など)

### サンプル

These examples assume you're [cloning using HTTPS](/articles/which-remote-url-should-i-use/#cloning-with-https-urls), which is recommended.

```shell
$ git remote -v
# 現在のリモートの表示
> origin  https://{% data variables.command_line.codeblock %}/<em>オーナー/リポジトリ</em>.git (fetch)
> origin  https://{% data variables.command_line.codeblock %}/<em>オーナー/リポジトリ</em>.git (push)
> destination  https://{% data variables.command_line.codeblock %}/<em>フォーカー/リポジトリ</em>.git (fetch)
> destination  https://{% data variables.command_line.codeblock %}/<em>フォーカー/リポジトリ</em>.git (push)

$ git remote rm destination
# リモートの削除
$ git remote -v
# 削除されていることの検証
> origin  https://{% data variables.command_line.codeblock %}/<em>オーナー/リポジトリ</em>.git (fetch)
> origin  https://{% data variables.command_line.codeblock %}/<em>オーナー/リポジトリ</em>.git (push)
```

{% warning %}

**メモ**: `git remote rm` はリモートリポジトリをサーバから削除するわけではありません。  リモートとその参照をローカルリポジトリから削除するだけです。

{% endwarning %}

### トラブルシューティング

リモートを削除しようとすると、次のエラーが発生することがあります。

#### Could not remove config section 'remote.[name]'

このエラーは、削除しようとしたリモートが存在しないことを意味します。

```shell
$ git remote rm sofake
> error: Could not remove config section 'remote.sofake'
```

リモート名を正しく入力したか確認してください。

### 参考リンク

- [_Pro Git_ ブックの「リモートでの作業」](https://git-scm.com/book/en/Git-Basics-Working-with-Remotes)

---
title: 'Error: Remote HEAD refers to nonexistent ref, unable to checkout'
intro: 'このエラーは、リポジトリのデフォルトブランチが {% data variables.product.product_location %}で削除された場合に発生します。'
redirect_from:
  - /articles/error-remote-head-refers-to-nonexistent-ref-unable-to-checkout
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

このエラーの検出方法は簡単です。リポジトリのクローンを試みると Git により警告されます:

```shell
$ git clone https://{% data variables.command_line.codeblock %}/<em>user</em>/<em>repo</em>.git
# リポジトリをクローン
> Cloning into 'repo'...
> remote: Counting objects: 66179, done.
> remote: Compressing objects: 100% (15587/15587), done.
> remote: Total 66179 (delta 46985), reused 65596 (delta 46402)
> Receiving objects: 100% (66179/66179), 51.66 MiB | 667 KiB/s, done.
> Resolving deltas: 100% (46985/46985), done.
> warning: remote HEAD refers to nonexistent ref, unable to checkout.
```

このエラーを解決するには、{% data variables.product.product_location %} リポジトリの管理者になる必要があります。 リポジトリの[デフォルトブランチの変更](/articles/setting-the-default-branch)が必要となります。

その後、コマンドラインで使用可能なブランチすべてのリストを取得できます:

```shell
$ git branch -a
# すべてのブランチをリスト
>   remotes/origin/awesome
>   remotes/origin/more-work
>   remotes/origin/new-master
```

その後、新しいブランチにスイッチするだけです:

```shell
$ git checkout new-master
# Create and checkout a tracking branch
> Branch new-master set up to track remote branch new-master from origin.
> Switched to a new branch 'new-master'
```

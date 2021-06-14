---
title: コミットが GitHub にはありますが、ローカルにはありません
intro: '特定のコミットが、{% data variables.product.product_name %}上では見えるにもかかわらず、リポジトリのローカルクローンの中には存在しない、という場合があります。'
redirect_from:
  - /articles/commit-exists-on-github-but-not-in-my-local-clone
  - /github/committing-changes-to-your-project/commit-exists-on-github-but-not-in-my-local-clone
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

特定のコミットを表示するため、コマンドラインで `git show` を使うと、致命的エラーが発生することがあります。

たとえば、以下のコマンドを入力して、ローカルで `bad object` のエラーが発生したとします。

```shell
$ git show 1095ff3d0153115e75b7bca2c09e5136845b5592
> fatal: bad object 1095ff3d0153115e75b7bca2c09e5136845b5592
```

しかし、以下のように {% data variables.product.product_location %}でコミットを表示すると、問題が発生しません。

`github.com/$account/$repository/commit/1095ff3d0153115e75b7bca2c09e5136845b5592`

この場合、以下の原因が考えられます:

* ローカルのリポジトリが古い。
* そのコミットが属するブランチが削除されたため、コミットが参照できなくなっている。
* 誰かがコミットをフォースプッシュで上書きした。

### ローカルのリポジトリが古い

ローカルのリポジトリがまだコミットを取得していないことも考えられます。 リモートリポジトリからローカルクローンに情報を取得するには、以下のように `git fetch` を使用します:

```shell
$ git fetch <em>remote</em>
```

これにより、チェックアウトしたファイルに変更が加えられることなく、リモートリポジトリからローカルクローンに、情報が安全にコピーされます。 フォーク元のリポジトリから情報を取得するには、`git fetch upstream` を使用します。また、クローンのみを行ったリポジトリから情報を取得するには、`git fetch origin` を使用します。

{% tip %}

**参考**: 詳しい情報については、[Pro Git](https://git-scm.com/book) ブックの[リモートの管理とデータのフェッチ](https://git-scm.com/book/en/Git-Basics-Working-with-Remotes)をお読みください。

{% endtip %}

### コミットのあるブランチが削除された

リポジトリのコラボレーターが、そのコミットを持つブランチを削除した、あるいはブランチにフォースプッシュした場合、見つからないコミットは孤立している (つまり、どの参照からもたどり着けなくなっている) ため、ローカルクローンにフェッチできません。

幸いコラボレーターの誰かが、見つからなくなったコミットを持つリポジトリのローカルクローンを持っている場合は、それを {% data variables.product.product_name %}にプッシュして戻してもらうことができます。  コミットがローカルブランチに参照されていることを必ず確認してから {% data variables.product.product_name %}に新しいブランチとしてプッシュするよう依頼してください。

たとえば、コラボレータの一人が、コミットを含むローカルブランチ (`B` とします) をまだ持っていたとします。  このローカルブランチは、フォースプッシュまたは削除されたブランチをトラッキングしていると考えられます。そして、まだ更新されていません。  コミットが失われないうちに、そのローカルブランチを {% data variables.product.product_name %} の新しいブランチ (`recover-B` とします) にプッシュしてもらいましょう。  ここでは仮に、`upstream` という名前のリモートがあり、これを通して `github.com/$account/$repository` にプッシュアクセスがあるとします。

コミットを持つローカルブランチを持っている人が、以下のコマンドを実行します:

```shell
$ git branch recover-B B
# コミットを参照する新しいローカルブランチを作成
$ git push upstream B:recover-B
# ローカル B を新しい上流ブランチにプッシュし、コミットへの新しい参照を作成
```

次に、*あなた*が以下のコマンドを実行します:

```shell
$ git fetch upstream recover-B
# ローカルリポジトリへコミットをフェッチ。
```

### フォースプッシュは避けましょう

絶対に必要でない限り、フォースプッシュは避けましょう。 特に、リポジトリにプッシュできる人が 2 人以上いる場合は避けるべきです。

### 参考リンク

- [_Pro Git_ ブックの「リモートでの作業」](https://git-scm.com/book/en/Git-Basics-Working-with-Remotes)
- [_Pro Git_ ブックの「データリカバリ」](https://git-scm.com/book/en/Git-Internals-Maintenance-and-Data-Recovery)

---
title: Git Database APIを使ってみる
intro: 'Git Database APIでは、{% data variables.product.product_name %}上のGitデータベースに対してRaw形式のGitオブジェクトを読み書きしたり、リファレンス (ブランチheadやタグ) をリストおよび更新したりすることができます。'
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

### 概要

これにより、さまざまなGitの機能を、APIを介して再実装することができます。Raw形式オブジェクトのオブジェクトをデータベースに直接作成し、ブランチリファレンスを更新することにより、Gitをインストールしなくても、Gitができることのほとんどを行えるのです。

Git Database API関数は、Gitリポジトリが空または利用できない場合、`409 Conflict`を返します。  リポジトリが利用できないということは、通常、{% data variables.product.product_name %}がリポジトリを作成処理中であるということです。 空のリポジトリの場合は、「[ファイルコンテンツの作成または更新](/v3/repos/contents/#create-or-update-file-contents)」エンドポイントを使用してコンテンツを作成し、リポジトリを初期化してGit Database APIを使用できるようにすることができます。 このレスポンスステータスが継続している場合は、{% data variables.contact.contact_support %}までご連絡ください。

![Gitデータベースの概要](/assets/images/git-database-overview.png)

Gitオブジェクトデータベースについての詳細は、Pro Gitブックの[Gitの内側](http://git-scm.com/book/en/v1/Git-Internals)の章を参照してください。

例として、リポジトリのファイルに変更をコミットしたい場合は、次のようにします。

* 現在のコミットオブジェクトを取得する
* ポイントするツリーを取得する
* 特定のファイルパスに対してツリーが持つblobオブジェクトのコンテンツを取得する
* 何らかの方法でコンテンツを変更し、新しいコンテンツで新しいblobオブジェクトをPOSTし、blob SHAを再取得する
* ファイルパスポインタが新しいblob SHAに置き換えられたツリーオブジェクトをPOSTし、ツリーSHAを再取得する
* 現在のコミットSHAを親とする新しいコミットオブジェクトと、新しいツリーSHAを作成し、コミットSHAを再取得する
* ブランチのリファレンスを、新しいコミットSHAを指すように更新する

複雑に見えるかもしれませんが、実際にはモデルを理解していれば非常に単純で、理解することによりAPIでできることが広がるでしょう。

### プルリクエストのマージ可能性を確認

{% warning %}

**Warning!** Please do not depend on using Git directly or [`GET /repos/{owner}/{repo}/git/refs/{ref}`](/v3/git/refs/#get-a-reference)  for updates to `merge` Git refs, because this content becomes outdated without warning.

{% endwarning %}

_test_マージコミットを作成するには、使用するAPIは、明示的にプルリクエストを要求する必要があります。 _test_マージコミットは、UIでプルリクエストを表示して [Merge] ボタンが表示されるか、REST APIを使ってプルリクエストを[取得](/v3/pulls/#get-a-pull-request)、[作成](/v3/pulls/#create-a-pull-request)、または[編集](/v3/pulls/#update-a-pull-request)した際に作成されます。 このリクエストがなければ、`merge` Git refは次に誰かがプルリクエストを表示するまで期限切れになります。

If you are currently using polling methods that produce outdated `merge` Git refs, then GitHub recommends using the following steps to get the latest changes from the default branch:

1. プルリクエストwebhookを受け取ります。
2. [`GET /repos/{owner}/{repo}/pulls/{pull_number}`](/v3/pulls/#get-a-pull-request)を呼び出し、マージコミット候補を作成するためのバックグラウンドジョブを開始します。
3. `mergeable`属性が`true`か`false`かを判断するため、[`GET /repos/{owner}/{repo}/pulls/{pull_number}`](/v3/pulls/#get-a-pull-request)を使用してリポジトリをポーリングします。 You can use Git directly or [`GET /repos/{owner}/{repo}/git/refs/{ref}`](/v3/git/refs/#get-a-reference) for updates to `merge` Git refs only after performing the previous steps.

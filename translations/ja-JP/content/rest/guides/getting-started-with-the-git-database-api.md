---
title: Git Database APIを使ってみる
intro: 'Git Database API では、{% data variables.product.product_name %} 上の Git データベースに対して生の Git オブジェクトを読み書きしたり、リファレンス（ブランチ head やタグ）をリストおよび更新したりすることができます。'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
shortTitle: Get started - Git Database API
ms.openlocfilehash: b7044e299602de42a2c880df8da4a6f19ef9334b
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '145131341'
---
## 概要 

これにより、さまざまなGitの機能を、APIを介して再実装することができます。Raw形式オブジェクトのオブジェクトをデータベースに直接作成し、ブランチリファレンスを更新することにより、Gitをインストールしなくても、Gitができることのほとんどを行えるのです。

Git Database API 関数では、Git リポジトリが空であるか、利用できない場合、`409 Conflict` を返します。  リポジトリが利用できないということは、通常、{% data variables.product.product_name %}がリポジトリを作成処理中であるということです。 空のリポジトリの場合は、「[Create or update file contents (ファイルの内容の作成または更新)](/rest/reference/repos#create-or-update-file-contents)」のエンドポイントを使用してコンテンツを作成し、Git Database API を使用できるようにリポジトリを初期化できます。 このレスポンスステータスが継続している場合は、{% data variables.contact.contact_support %}までご連絡ください。

![Gitデータベースの概要](/assets/images/git-database-overview.png)

Git オブジェクト データベースの詳細については、Pro Git ブックの「[Git Internals (Git の内側)](http://git-scm.com/book/en/v1/Git-Internals)」の章を参照してください。

たとえば、リポジトリのファイルに変更をコミットしたい場合は、次のようにします。

* 現在のコミットオブジェクトを取得する
* ポイントするツリーを取得する
* 特定のファイルパスに対してツリーが持つblobオブジェクトのコンテンツを取得する
* 何らかの方法でコンテンツを変更し、新しいコンテンツで新しいblobオブジェクトをPOSTし、blob SHAを再取得する
* ファイルパスポインタが新しいblob SHAに置き換えられたツリーオブジェクトをPOSTし、ツリーSHAを再取得する
* 現在のコミットSHAを親とする新しいコミットオブジェクトと、新しいツリーSHAを作成し、コミットSHAを再取得する
* ブランチのリファレンスを、新しいコミットSHAを指すように更新する

複雑に見えるかもしれませんが、実際にはモデルを理解していれば非常に単純で、理解することにより API でできることが広がるでしょう。

## プルリクエストのマージ可能性を確認

{% warning %}

**警告!** このコンテンツは警告なしに古い内容になるため、Git ref を `merge` するための更新に Git を直接使用したり、[`GET /repos/{owner}/{repo}/git/refs/{ref}`](/rest/reference/git#get-a-reference) を使用したりすることに依存しないでください。

{% endwarning %}

_test_ マージ コミットを作成するには、使用する API でプルリクエストを明示的に要求する必要があります。 _test_ マージ コミットは、UI でプルリクエストを表示して [マージ] ボタンが表示されたとき、または REST API を使用してプルリクエストを [取得](/rest/reference/pulls#get-a-pull-request)、[作成](/rest/reference/pulls#create-a-pull-request)、または [編集](/rest/reference/pulls#update-a-pull-request)するときに作成されます。 このリクエストがなければ、`merge` Git ref は次に誰かがプルリクエストを表示するまで期限切れになります。

期限切れの `merge` Git ref を生成するポーリング メソッドを現在使用している場合、GitHub では以下の手順を使用して、デフォルトブランチから最新の変更を取得することをお勧めします。

1. プルリクエストwebhookを受け取ります。
2. マージ コミットの候補を作成するためのバックグラウンド ジョブを開始するために [`GET /repos/{owner}/{repo}/pulls/{pull_number}`](/rest/reference/pulls#get-a-pull-request) を呼び出します。
3. [`GET /repos/{owner}/{repo}/pulls/{pull_number}`](/rest/reference/pulls#get-a-pull-request) を使用してリポジトリをポーリングし、`mergeable` 属性が `true` または `false` のいずれであるかを確認します。 前の手順を実行した後にのみ、Git ref を `merge` するための更新に Git を直接使用したり、[`GET /repos/{owner}/{repo}/git/refs/{ref}`](/rest/reference/git#get-a-reference) を使用したりすることができます。

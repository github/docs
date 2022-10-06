---
title: ページネーションの詳細
intro: Search API を使ったいくつかの例で、ページネーションを使用してレスポンスを扱うために方法を調べましょう。
redirect_from:
  - /guides/traversing-with-pagination
  - /v3/guides/traversing-with-pagination
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
shortTitle: Traverse with pagination
ms.openlocfilehash: be0e961847e187b72848eda558636fe3ecb800bd
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/10/2022
ms.locfileid: '145131331'
---
{% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %} APIは、開発者が利用できる情報を豊富に提供します。
ほとんどの場合、多 _くの_ 情報を求めていることに気が付き、サーバーを満足させるために、API は [要求された項目を自動的に改ページ](/rest/overview/resources-in-the-rest-api#pagination)します。

このガイドでは、Search API を呼び出し、ページネーションを使って結果を反復処理します。 このプロジェクトの完全なソース コードは、[platform-samples][platform samples] リポジトリにあります。

{% data reusables.rest-api.dotcom-only-guide-note %}

## ページネーションの基本

はじめに、ページネーションされたアイテムの受け取りについて、いくつかの事実を知っておくことが重要です。

1. 呼び出す API によって、応答するデフォルト値が異なります。 たとえば、[パブリック リポジトリの一覧表示](/rest/reference/repos#list-public-repositories)を呼び出すと、ページネーションされて提供されるのは 1 セットで 30 項目ですが、GitHub Search API を呼び出すと 1 セットで 100 項目になります
2. 受け取るアイテムの数は指定できます (最大 100 まで)。
3. ただし、技術的な理由により、すべてのエンドポイントが同じ動作をするわけではありません。 たとえば、[イベント](/rest/reference/activity#events)では受け取る項目数の最大値を設定できません。
特定のエンドポイントにおけるページネーションされた結果の処理方法については、必ずドキュメントをお読みください。

ページネーションに関する情報は、API 呼び出しの [Link ヘッダー](https://datatracker.ietf.org/doc/html/rfc5988)で提供されます。 たとえば、Search API に curl 要求を行って、Mozilla プロジェクトで `addClass` というフレーズが使われている回数を調べます。

```shell
$ curl -I "https://api.github.com/search/code?q=addClass+user:mozilla"
```

`-I` パラメーターは、実際のコンテンツではなくヘッダーのみを扱うことを示します。 結果を調べると、Link ヘッダーの中に次のような情報があることがわかります。

    Link: <https://api.github.com/search/code?q=addClass+user%3Amozilla&page=2>; rel="next",
      <https://api.github.com/search/code?q=addClass+user%3Amozilla&page=34>; rel="last"

さて、細かく見ていきましょう。 `rel="next"` は、次のページが `page=2` であることを示します。 これは当然であり、既定では、すべてのページネーションされたクエリは `1.` ページから始まります。`rel="last"` でさらに情報が提供され、結果の最後のページが `34` ページであることを示します。
つまり、`addClass` に関して利用できる情報はさらに 33 ページあります。
成功です。

**常に**、提供されるこのリンク関係を利用します。 URLを推測したり、自分で構築したりしないでください。

### ページ間の移動

受け取るページ数がわかったので、ページ間を移動して結果を利用し始めることができます。 これを行うには、`page` パラメーターを渡します。 既定では、`page` は常に `1` から始まります。 14 ページまでジャンプして、どうなるか見てみましょう。

```shell
$ curl -I "https://api.github.com/search/code?q=addClass+user:mozilla&page=14"
```

ここでもう一度リンクヘッダを見てみます。

    Link: <https://api.github.com/search/code?q=addClass+user%3Amozilla&page=15>; rel="next",
      <https://api.github.com/search/code?q=addClass+user%3Amozilla&page=34>; rel="last",
      <https://api.github.com/search/code?q=addClass+user%3Amozilla&page=1>; rel="first",
      <https://api.github.com/search/code?q=addClass+user%3Amozilla&page=13>; rel="prev"

予想どおり、`rel="next"` は 15 になり、`rel="last"` はまだ 34 です。 ただし、最初`rel="first"`のページの _URL を示し、さらに重要な点として、_ 前のページのページ番号を知ることができるという、さらに多くの情報`rel="prev"`が得られます。 この情報を使うと、API 呼び出しの結果の最初、前、次、最後のリストにユーザーがジャンプできる UI を作成できます。

### 受け取るアイテム数の変更

`per_page` パラメーターを渡すことで、各ページで返される項目の数を、最大 100 まで指定できます。 `addClass` について 50 項目を要求してみましょう。

```shell
$ curl -I "https://api.github.com/search/code?q=addClass+user:mozilla&per_page=50"
```

ヘッダのレスポンスに何が起こるかに注目してください。

    Link: <https://api.github.com/search/code?q=addClass+user%3Amozilla&per_page=50&page=2>; rel="next",
      <https://api.github.com/search/code?q=addClass+user%3Amozilla&per_page=50&page=20>; rel="last"

想像したとおり、`rel="last"` の情報は、最後のページが 20 になったことを示しています。 これは、結果に関するページごとの情報を増やすよう要求しているからです。

## 情報の取得

ページネーションのためだけに低レベルの curl を呼び出したくはないので、上で説明したことをすべて行う簡単な Ruby スクリプトを書いてみましょう。

いつものように、まずは [GitHub の Octokit.rb][octokit.rb] Ruby ライブラリが必要であり、[個人用アクセス トークン][personal token]を渡します。

``` ruby
require 'octokit'

# !!! DO NOT EVER USE HARD-CODED VALUES IN A REAL APP !!!
# Instead, set and test environment variables, like below
client = Octokit::Client.new :access_token => ENV['MY_PERSONAL_TOKEN']
```

次に、Octokit の `search_code` メソッドを使って検索を実行します。 `curl` を使う場合とは異なり、結果の数をすぐに取得することもできるので、そうしてみます。

``` ruby
results = client.search_code('addClass user:mozilla')
total_count = results.total_count
```

次に、リンク ヘッダーの `page=34>; rel="last"` 情報と同様に、最後のページの番号を取得します。 Octokit.rb では、"[ハイパーメディア リンク関係][hypermedia-relations]" という実装を通じて、ページネーションの情報がサポートされます。
それについては詳しく説明しませんが、`results` 変数の各要素には `rels` というハッシュがあり、それには、現在の結果に応じて、`:next`、`:last`、`:first`、`:prev` に関する情報が含まれる、ということだけ知っておいてください。 また、これらの関係には、`rels[:last].href` を呼び出すことで、結果の URL に関する情報も含まれます。

これがわかったら、最後の結果のページ番号を取得し、ユーザーにすべての情報を示しましょう。

``` ruby
last_response = client.last_response
number_of_pages = last_response.rels[:last].href.match(/page=(\d+).*$/)[1]

puts "There are #{total_count} results, on #{number_of_pages} pages!"
```

最後に、結果を反復処理しましょう。 ループ `for i in 1..number_of_pages.to_i` でこれを行うこともできますが、ここでは `rels[:next]` ヘッダーに従って、各ページから情報を取得します。 簡単にするため、各ページから最初の結果のファイル パスだけを取得します。 これを行うには、ループが必要です。そして、各ループの最後で、`rels[:next]` の情報に従って、次のページのデータ セットを取得します。
使用する `rels[:next]` 情報がなくなったら (つまり、`rels[:last]` にいます)、ループは終了します。 次のように表示されます。

``` ruby
puts last_response.data.items.first.path
until last_response.rels[:next].nil?
  last_response = last_response.rels[:next].get
  puts last_response.data.items.first.path
end
```

Octokit.rb では、ページあたりのアイテム数を変更することは非常に簡単です。 `per_page` オプションのハッシュを初期クライアントの構築に渡すだけです。 その後、コードはそのままでいいはずです。

``` ruby
require 'octokit'

# !!! DO NOT EVER USE HARD-CODED VALUES IN A REAL APP !!!
# Instead, set and test environment variables, like below
client = Octokit::Client.new :access_token => ENV['MY_PERSONAL_TOKEN']

results = client.search_code('addClass user:mozilla', :per_page => 100)
total_count = results.total_count

last_response = client.last_response
number_of_pages = last_response.rels[:last].href.match(/page=(\d+).*$/)[1]

puts last_response.rels[:last].href
puts "There are #{total_count} results, on #{number_of_pages} pages!"

puts "And here's the first path for every set"

puts last_response.data.items.first.path
until last_response.rels[:next].nil?
  last_response = last_response.rels[:next].get
  puts last_response.data.items.first.path
end
```

## ページネーションリンクの作成

通常、ページネーションの目的は、可能なすべての結果を連結することではなく、次のようなナビゲーションのセットを生成することです。

![ページネーションリンクのサンプル](/assets/images/pagination_sample.png)

ここで起こりそうなことを小さなモデルを使って描いてみましょう。

上のコードから、最初の呼び出しからのページネーションされた結果で、`number_of_pages` を所得できることはすでに知っています。

``` ruby
require 'octokit'

# !!! DO NOT EVER USE HARD-CODED VALUES IN A REAL APP !!!
# Instead, set and test environment variables, like below
client = Octokit::Client.new :access_token => ENV['MY_PERSONAL_TOKEN']

results = client.search_code('addClass user:mozilla')
total_count = results.total_count

last_response = client.last_response
number_of_pages = last_response.rels[:last].href.match(/page=(\d+).*$/)[1]

puts last_response.rels[:last].href
puts "There are #{total_count} results, on #{number_of_pages} pages!"
```

ここから、数値ボックスを美しい ASCII 文字で構築できます。
``` ruby
numbers = ""
for i in 1..number_of_pages.to_i
  numbers << "[#{i}] "
end
puts numbers
```

ランダムな番号を生成して、このボックスのいずれかをクリックするユーザーをシミュレートしてみます。

``` ruby
random_page = Random.new
random_page = random_page.rand(1..number_of_pages.to_i)

puts "A User appeared, and clicked number #{random_page}!"
```

ページ番号がわかったので、`:page` オプションを渡すことにより、Octokit を使ってその個別のページを明示的に取得できます。

``` ruby
clicked_results = client.search_code('addClass user:mozilla', :page => random_page)
```

もっと見栄えをよくしたければ、前のページと次のページを取得して、戻る要素 (`<<`) と進む要素 (`>>`) のリンクも生成できます。

``` ruby
prev_page_href = client.last_response.rels[:prev] ? client.last_response.rels[:prev].href : "(none)"
next_page_href = client.last_response.rels[:next] ? client.last_response.rels[:next].href : "(none)"

puts "The prev page link is #{prev_page_href}"
puts "The next page link is #{next_page_href}"
```

[pagination]: /rest#pagination
[platform samples]: https://github.com/github/platform-samples/tree/master/api/ruby/traversing-with-pagination
[octokit.rb]: https://github.com/octokit/octokit.rb
[personal token]: /articles/creating-an-access-token-for-command-line-use
[hypermedia-relations]: https://github.com/octokit/octokit.rb#pagination
[listing commits]: /rest/reference/commits#list-commits

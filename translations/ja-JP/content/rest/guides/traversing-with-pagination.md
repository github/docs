---
title: ページネーションの詳細
intro: Search API を使ったいくつかの例で、ページネーションを使用してレスポンスを扱うために方法を調べましょう。
redirect_from:
  - /guides/traversing-with-pagination/
  - /v3/guides/traversing-with-pagination
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

 

{% data variables.product.product_name %} APIは、開発者が消費するための膨大な情報を提供します。 ほとんどの場合は、要求している情報が_多すぎる_ということに気付くかもしれません。サーバーに負担をかけすぎないため、API は自動的に[リクエストされたアイテムをページネーション][pagination]します。

このガイドでは、{% data variables.product.product_name %} Search APIを呼び出し、ページネーションを使って結果を反復処理します。 このプロジェクトの完全なソースコードは、[platform-samples][platform samples]リポジトリにあります。

### ページネーションの基本

はじめに、ページネーションされたアイテムの受け取りについて、いくつかの事実を知っておくことが重要です。

1. 呼び出す API によって、応答するデフォルト値が異なります。 [パブリックリポジトリのリスト化](/rest/reference/repos#list-public-repositories)を呼び出すと、ページネーションされて提供されるのは 1 セットで 30 アイテムですが、GitHub Search APIを呼び出すと 1 セットで 100 アイテムとなります。
2. 受け取るアイテムの数は指定できます (最大 100 まで)。
3. ただし、技術的な理由により、すべてのエンドポイントが同じ動作をするわけではありません。 たとえば、[イベント](/rest/reference/activity#events)では受け取るアイテム数の最大値を設定できません。 特定のエンドポイントにおけるページネーションされた結果の処理方法については、必ずドキュメントをお読みください。

ページネーションに関する情報は、API呼び出しの[リンクヘッダ](http://tools.ietf.org/html/rfc5988)に記載されています。 たとえば、検索APIにcurlでリクエストを行って、Mozilla プロジェクトで `addClass`というフレーズを何回使っているか調べましょう。

```shell
$ curl -I "{% data variables.product.api_url_pre %}/search/code?q=addClass+user:mozilla"
```

`-I`パラメータは、実際のコンテンツではなくヘッダのみを扱うことを示します。 結果を調べると、Linkヘッダの中に以下のような情報があることに気付くでしょう。

    Link: <https://api.github.com/search/code?q=addClass+user%3Amozilla&page=2>; rel="next",
      <https://api.github.com/search/code?q=addClass+user%3Amozilla&page=34>; rel="last"

さて、細かく見ていきましょう。 `rel="next"`には、次のページが`page=2`だと書かれています。 これは納得できる話です。というのも、デフォルトでは、すべてのページネーションされたクエリは`1`ページから始まります。`rel="last"`には追加情報があり、最後のページは`34`ページになると書かれています。 つまり、`addClass`で利用できる情報はあと33ページあるということですね。 よし！

提供されたこのリンク関係に**常に**依存しましょう。 URLを推測したり、自分で構築したりしないでください。

#### ページ間の移動

さて、受信するページ数がわかったので、ページを移動して結果の利用を開始できます。 これを行うには、`page`パラメータを渡します。 デフォルトでは、 `page`は常に`1`から始まります。 14ページまでジャンプして、どうなるか見てみましょう。

```shell
$ curl -I "{% data variables.product.api_url_pre %}/search/code?q=addClass+user:mozilla&page=14"
```

ここでもう一度リンクヘッダを見てみます。

    Link: <https://api.github.com/search/code?q=addClass+user%3Amozilla&page=15>; rel="next",
      <https://api.github.com/search/code?q=addClass+user%3Amozilla&page=34>; rel="last",
      <https://api.github.com/search/code?q=addClass+user%3Amozilla&page=1>; rel="first",
      <https://api.github.com/search/code?q=addClass+user%3Amozilla&page=13>; rel="prev"

予想通り`rel="next"`は15で、`rel="last"`は34のままです。 しかし今度は少し情報が増えています。`rel="first"`は、、_最初_のページのURLを示しています。さらに重要なこととして、`rel="prev"`は前のページのページ番号を示しています。 この情報を用いて、APIの呼び出しでリストの最初、前、次、最後にユーザがジャンプできるUIを構築できるでしょう。

#### 受け取るアイテム数の変更

`per_page`パラメータを渡すことで、各ページが返すアイテム数を最大100まで指定できます。 `addClass`について50アイテムを要求してみましょう。

```shell
$ curl -I "{% data variables.product.api_url_pre %}/search/code?q=addClass+user:mozilla&per_page=50"
```

ヘッダのレスポンスに何が起こるかに注目してください。

    Link: <https://api.github.com/search/code?q=addClass+user%3Amozilla&per_page=50&page=2>; rel="next",
      <https://api.github.com/search/code?q=addClass+user%3Amozilla&per_page=50&page=20>; rel="last"

ご想像の通り、`rel="last"`情報には、最後のページが20になったと書かれています。 これは、結果のページごとに、より多くの情報を要求しているからです。

### 情報の取得

ページネーションを扱うためだけに低レベルのcurlを呼び出したくはないでしょうから、上記で説明したことをすべて行うような、ちょっとしたRubyスクリプトを書いてみましょう。

いつものように、まずは[GitHub's Octokit.rb][octokit.rb] Rubyライブラリを読み込んで、[個人アクセストークン][personal token]を渡す必要があります。

``` ruby
require 'octokit'

# !!! DO NOT EVER USE HARD-CODED VALUES IN A REAL APP !!!
# Instead, set and test environment variables, like below
client = Octokit::Client.new :access_token => ENV['MY_PERSONAL_TOKEN']
```

次に、Octokitの`search_code`メソッドを使用して、検索を実行します。 `curl`を使用する場合と異なり、結果の数をすぐ取得することもできるので、そうしてみましょう。

``` ruby
results = client.search_code('addClass user:mozilla')
total_count = results.total_count
```

さて、リンクヘッダの `page=34>; rel="last"` 情報と同様に、最後のページ番号を取得しましょう。 Octokit.rb は、「[ハイパーメディアリンク関係][hypermedia-relations]」という実装を通じてページネーション情報をサポートしています。 それについて詳しくは扱いませんが、`results`変数の各要素には`rels`というハッシュがあり、そのハッシュには結果に応じて`:next`、`:last`、`:first`、`:prev`といった情報が含まれることだけ触れておけばここでは十分でしょう。 また、生成されるURLについての情報も含まれ、`rels[:last].href`を呼び出すことにより取得できます。

これがわかったら、最後の結果のページ番号を取得し、ユーザにすべての情報を表示しましょう。

``` ruby
last_response = client.last_response
number_of_pages = last_response.rels[:last].href.match(/page=(\d+).*$/)[1]

puts "There are #{total_count} results, on #{number_of_pages} pages!"
```

最後に、結果を反復処理しましょう。 `for i in 1..number_of_pages.to_i`のループを使うこともできますが、ここでは`rels[:next]`ヘッダに従って、各ページから情報を取得します。 簡単にするため、各ページの最初の結果の、ファイルパスだけを取得します。 これを行うには、ループが必要です。そして各ループの最後で、`rels[:next]`情報に従って、次のページのデータセットを取得します。 取得する`rels[:next]`情報がなくなる (言い換えれば、`rels[:last]`に到着する) と、ループは終了します。 このようになるでしょう。

``` ruby
puts last_response.data.items.first.path
until last_response.rels[:next].nil?
  last_response = last_response.rels[:next].get
  puts last_response.data.items.first.path
end
```

Octokit.rb では、ページあたりのアイテム数を変更することは非常に簡単です。 `per_page` オプションのハッシュを初期クライアント構築に渡すだけです。 その後、コードはそのままになっているはずです。

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

### ページネーションリンクの作成

通常、ページネーションの目的は可能なすべての結果を連結することではなく、以下のようなナビゲーションを生成することです。

![ページネーションリンクのサンプル](/assets/images/pagination_sample.png)

ここで起こりそうなことを小さなモデルを使って描いてみましょう。

以下の最初の呼び出しでページネーションされた結果の`number_of_pages`を所得できることは、上記のコードからすでに知っています。

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

ランダムな番号を生成して、このボックスのいずれかをクリックするユーザをシミュレートしてみます。

``` ruby
random_page = Random.new
random_page = random_page.rand(1..number_of_pages.to_i)

puts "A User appeared, and clicked number #{random_page}!"
```

さて、ページ番号があるので、 `:page`オプションを渡すことにより、Octokitで各ページを明示的に取得できます。

``` ruby
clicked_results = client.search_code('addClass user:mozilla', :page => random_page)
```

もっと見栄えをよくしたければ、前のページと次のページも取得して、戻る (`<<`) と進む (`>>`) のリンクも生成できます。

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

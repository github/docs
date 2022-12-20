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
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: 92173dffdf2c50bdcd2b10fa42ef634683a3e149
ms.sourcegitcommit: d1d7ccc513192fdd0fc27bb49dc9c85108119b91
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 11/21/2022
ms.locfileid: "148179530"
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

{% note %}

**注**: リンク ヘッダーに含まれる URL に常に依存する必要があります。 URL を推測したり、自分で構築したりしないでください。

{% endnote %}


### リンクヘッダ

応答ヘッダーには、改ページ位置の自動修正に関する情報が含まれています。 ヘッダーの詳細については、「[REST API を使用した作業の開始](/rest/guides/getting-started-with-the-rest-api#about-the-response-code-and-headers)」を参照してください。 応答ヘッダーを取得するには、要求に `-I` フラグを含めます。 次に例を示します。

```shell 
$ curl -I -H "Accept: application/vnd.github+json" -H "Authorization: Bearer YOUR_TOKEN"   https://api.github.com/enterprises/advacado-corp/audit-log

```

`-I` フラグは応答ヘッダーのみを返します。 応答の改ページ位置が自動修正される場合、応答ヘッダーには `link` ヘッダーが含まれます。 ヘッダーは次のようになります。

```
link: <https://api.github.com/enterprises/13827/audit-log?after=MS42NjQzODM5MTkzNDdlKzEyfDM0MkI6NDdBNDo4RTFGMEM6NUIyQkZCMzo2MzM0N0JBRg%3D%3D&before=>; rel="next"
```

または

```
link: <https://api.github.com/repositories/1300192/issues?page=2>; rel="next", <https://api.github.com/repositories/1300192/issues?page=511>; rel="last"
```
### 改ページ位置の自動修正の種類

{% data variables.product.company_short %} の API には、ページベースの改ページ位置の自動修正とカーソルベースの改ページ位置の自動修正という 2 種類の改ページ位置の自動修正方法があります。 `link` ヘッダーに `page` を含めると、この操作にはページベースの改ページ位置の自動修正が使われます。 `link` ヘッダーに `before` と `after` を含めると、この操作にはカーソルベースの改ページ位置の自動修正が使われます。


#### ページ ベースの改ページ位置の自動修正

ページベースの改ページ位置の自動修正のリンク ヘッダーから、前、次、最初、最後のページに関する情報がわかります。 特定のページを要求しなかった場合、応答は既定で最初のページになり、最初と前のページに関する情報は省略されます。

たとえば、ページを指定しなかった要求の場合、このヘッダーは次のページが `2` であり、最後のページが `511` であることを示します。

```
link: <https://api.github.com/repositories/1300192/issues?page=2>; rel="next", <https://api.github.com/repositories/1300192/issues?page=511>; rel="last"
```

たとえば、ページ 5 を指定した要求に対して、このヘッダーは、前のページが `4`、次のページが `6`、最後のページが `511`、最初のページが `1` であることを示します。

```
link: <https://api.github.com/repositories/1300192/issues?page=4>; rel="prev", <https://api.github.com/repositories/1300192/issues?page=6>; rel="next", <https://api.github.com/repositories/1300192/issues?page=511>; rel="last", <https://api.github.com/repositories/1300192/issues?page=1>; rel="first"
```

#### カーソル ベースの改ページ位置の自動修正

カーソル ベースの改ページ位置の自動修正では、ページを移動するために `before` と `after` という用語を使います。 この `rel="next"` と `rel="prev"` はデータ セット内のカーソル位置を示し、現在のページ `before` と `after` に移動するための基準になります。  

```
link: <https://api.github.com/enterprises/13827/audit-log?after=MS42NjQzODMzMzk2MzZlKzEyfFdxSzIxdGU0MlBWNUp5UzhBWDF6LWc%3D&before=>; rel="next",
<https://api.github.com/enterprises/13827/audit-log?after=&before=>; rel="first", 
<https://api.github.com/enterprises/13827/audit-log?after=&before=MS42NjQzODM5MTcyMjllKzEyfDI4NDE6NEVFNDoxODBDRkM5OjY5REE0MzI6NjMzNDdCQUQ%3D>; rel="prev"
```

この例の `rel=next` は、次のページが以下の場所にあることを示します。

```
after=MS42NjQzODM5MTkzNDdlKzEyfDM0MkI6NDdBNDo4RTFGMEM6NUIyQkZCMzo2MzM0N0JBRg%3D%3D&before=
```




### 改ページ位置の自動修正の使用

#### カーソル ベースの改ページ位置の自動修正

カーソル ベースの改ページ位置の自動修正では、`before` と `after` という用語を使う必要があります。 `before` と `after` を使って移動するには、先ほど生成したリンク ヘッダーを curl 要求にコピーします。

```shell
$ curl -I -H "Accept: application/vnd.github+json" -H "Authorization: Bearer YOUR_TOKEN"  https://api.github.com/enterprises/13827/audit-log?after=MS42NjQzODM5MTkzNDdlKzEyfDM0MkI6NDdBNDo4RTFGMEM6NUIyQkZCMzo2MzM0N0JBRg%3D%3D&before=
```

前述の例では、結果のページと新しいヘッダー情報が生成されます。これを次の要求に使用できます。 `rel="next"` を使うと、結果の次のページを取得できます。 `rel="prev"` を使うと、結果の前のページを取得できます。 この出力の重要な部分は、リンク ヘッダーを手動で入力するのではなく、生成する必要があることです。 次の出力からリンク全体をコピーします。

```
link: <https://api.github.com/enterprises/13827/audit-log?after=MS42NjQzODMzMzk2MzZlKzEyfFdxSzIxdGU0MlBWNUp5UzhBWDF6LWc%3D&before=>; rel="next", 
<https://api.github.com/enterprises/13827/audit-log?after=&before=>; rel="first", 
<https://api.github.com/enterprises/13827/audit-log?after=&before=MS42NjQzODM5MTcyMjllKzEyfDI4NDE6NEVFNDoxODBDRkM5OjY5REE0MzI6NjMzNDdCQUQ%3D>; rel="prev"
```

ページベースの改ページ位置の自動修正とは異なり、結果の応答で最後のページ番号は返されません。

    link: <https://api.github.com/enterprises/13827/audit-log?after=MS42NjQzODMzMzk2MzZlKzEyfFdxSzIxdGU0MlBWNUp5UzhBWDF6LWc%3D&before=>; rel="next", 
    <https://api.github.com/enterprises/13827/audit-log?after=&before=>; rel="first", 
    <https://api.github.com/enterprises/13827/audit-log?after=&before=MS42NjQzODM5MTcyMjllKzEyfDI4NDE6NEVFNDoxODBDRkM5OjY5REE0MzI6NjMzNDdCQUQ%3D>; rel="prev"
    
カーソルベースの改ページ位置の自動修正で作成されるのはデータ セット内の参照ポイントなので、結果の合計数は計算できません。


#### ページ ベースの改ページ位置の自動修正

ページベースの改ページ位置の自動修正を使って移動するには、`page` パラメーターを渡します。 既定では、`page` は常に `1` から始まります。 次の例では、検索 API Mozilla プロジェクトに対する curl 要求でフレーズ `addClass` を使うようにしました。 1 から開始するのではなく、14 ページにジャンプしましょう。 

```shell
$ curl -I "https://api.github.com/search/code?q=addClass+user:mozilla&page=14"
```

HTTP 要求のリンク ヘッダーの例外を次に示します。

    Link: <https://api.github.com/search/code?q=addClass+user%3Amozilla&page=15>; rel="next",
      <https://api.github.com/search/code?q=addClass+user%3Amozilla&page=34>; rel="last",
      <https://api.github.com/search/code?q=addClass+user%3Amozilla&page=1>; rel="first",
      <https://api.github.com/search/code?q=addClass+user%3Amozilla&page=13>; rel="prev"

この例では、`rel="next"` は 15 にあり、`rel="last"` は 34 です。 ただし、最初`rel="first"`のページの _URL を示し、さらに重要な点として、_ 前のページのページ番号を知ることができるという、さらに多くの情報`rel="prev"`が得られます。 この情報を使うと、API 呼び出しの結果の最初、前、次、最後のリストにユーザーがジャンプできる UI を作成できます。


### 受け取るアイテム数の変更

#### ページ ベースの改ページ位置の自動修正

`per_page` パラメーターを渡すことで、各ページで返される項目の数を、最大 100 まで指定できます。 `addClass` について 50 項目を要求してみましょう。

```shell
$ curl -I "https://api.github.com/search/code?q=addClass+user:mozilla&per_page=50"
```

ヘッダのレスポンスに何が起こるかに注目してください。

    Link: <https://api.github.com/search/code?q=addClass+user%3Amozilla&per_page=50&page=2>; rel="next",
      <https://api.github.com/search/code?q=addClass+user%3Amozilla&per_page=50&page=20>; rel="last"

想像したとおり、`rel="last"` の情報は、最後のページが 20 になったことを示しています。 これは、結果に関するページごとの情報を増やすよう要求しているからです。

#### カーソル ベースの改ページ位置の自動修正

カーソルベースの改ページ位置の自動修正の場合、`per_page` パラメーターを渡すこともできます。 

```shell
$ curl -I -H "Accept: application/vnd.github+json" -H "Authorization: Bearer YOUR_TOKEN"  https://api.github.com/enterprises/13827/audit-log?after=MS42NjQzODM5MTkzNDdlKzEyfDM0MkI6NDdBNDo4RTFGMEM6NUIyQkZCMzo2MzM0N0JBRg%3D%3D&before=&per_page=50
```

## 情報の取得

ページネーションのためだけに低レベルの curl を呼び出したくはないので、上で説明したことをすべて行う簡単な Ruby スクリプトを書いてみましょう。

いつものように、まず [GitHub の Octokit.rb][octokit.rb] Ruby ライブラリが必要です。次のように [{% data variables.product.pat_generic %}][personal token] を渡します。

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

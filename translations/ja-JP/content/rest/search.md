---
title: 検索
intro: 'Search APIを使うと、{% data variables.product.product_name %}上の特定のアイテムを検索できます。'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
redirect_from:
  - /rest/reference/search
---

## Search APIについて

Search API は、見つけたい特定の項目を検索するために役立ちます。 たとえば、リポジトリ内のユーザや特定のファイルを見つけることができます。 Google で検索を実行するのと同じように考えてください。 Search API は、探している 1 つの結果 (または探しているいくつかの結果) を見つけるために役立つよう設計されています。 Google で検索する場合と同じように、ニーズに最も合う項目を見つけるため、検索結果を数ページ表示したい場合もあるでしょう。 こうしたニーズを満たすため、{% data variables.product.product_name %} Search API では**各検索につき 最大 1,000 件の結果**を提供します。

クエリを使って、検索を絞り込めます。 検索クエリ構文の詳細については、「[検索クエリの構築](/rest/reference/search#constructing-a-search-query)」を参照してください。

### 検索結果を順番づける

クエリパラメータとして別のソートオプションが指定されない限り、結果は最も一致するものから降順にソートされます。 最も関連性の高い項目を検索結果の最上位に押し上げるように、複数の要素が組み合わされます。

### レート制限

{% data reusables.enterprise.rate_limit %}

Search API にはカスタムレート制限があります。 リクエストに[基本認証](/rest#authentication)、[OAuth](/rest#authentication)、または[クライアント ID とシークレット](/rest#increasing-the-unauthenticated-rate-limit-for-oauth-applications)を使用する場合は、1 分間に最大 30 件のリクエストが行えます。 認証されていないリクエストでは、レート制限により 1 分間あたり最大 10 件のリクエストが行えます。

現在のレート制限状態を確認する方法の詳細については、[レート制限ドキュメンテーション](/rest/reference/rate-limit)を参照してください。

### 検索クエリの構築

Search API の各エンドポイントでは、{% data variables.product.product_name %} で検索を行うために[クエリパラメータ](https://en.wikipedia.org/wiki/Query_string)を使用します。 エンドポイントとクエリパラメータを含める例については、Search API の個々のエンドポイントを参照してください。

クエリには、{% data variables.product.product_name %} でサポートされている検索修飾子を任意に組み合わせて使用できます。 検索クエリの形式は次のとおりです。

```
SEARCH_KEYWORD_1 SEARCH_KEYWORD_N QUALIFIER_1 QUALIFIER_N
```

たとえば、README ファイルに `GitHub` と `Octocat` という言葉が含まれている、`defunkt` が所有する_リポジトリ_をすべて検索する場合、_検索リポジトリ_エンドポイントに次のクエリを使用します。

```
GitHub Octocat in:readme user:defunkt
```

**ノート:** クエリ文字列の構築には、使用する言語の優先 HTML エンコーダを必ず使用してしてください。 例:
```javascript
// JavaScript
const queryString = 'q=' + encodeURIComponent('GitHub Octocat in:readme user:defunkt');
```

使用可能な修飾子の完全な一覧、フォーマット、使用例については、「[GitHub での検索](/search-github/searching-on-github)」を参照してください。 特定の数量、日付に一致させたり、検索結果から除外したりするために演算子を使う方法の詳細については、「[検索構文を理解する](/search-github/getting-started-with-searching-on-github/understanding-the-search-syntax/)」を参照してください。

### クエリの長さの制限

Search API は、以下のクエリをサポートしていません。
- 256 文字超 (演算子や修飾子は除く)。
- `AND`、`OR`、`NOT` の演算子が 6 つ以上ある。

こうした検索クエリを使用すると、「Validation failed」というエラーメッセージが返されます。

### タイムアウトと不完全な結果

皆さんが Search API を迅速に使用できるよう、個別のクエリを実行する時間について制限を設けています。 [時間制限を超えた](https://developer.github.com/changes/2014-04-07-understanding-search-results-and-potential-timeouts/)クエリに対しては、API はタイムアウト前に見つかった一致を返し、レスポンスの `incomplete_results` プロパティが `true` に設定されます。

タイムアウトになったことは、必ずしも検索結果が未完了であるということではありません。 もっと多くの検索結果が出たかもしれませんし、出ていないかもしれません。

### アクセスエラーまたは検索結果の欠落

認証に成功しており、検索クエリ中のリポジトリにアクセスを持っていなければなりません。そうでない場合は、"Validation Failed"というメッセージとともに`422 Unprocessable Entry`が返されます。 たとえば、{% data variables.product.prodname_dotcom %} にサインインしたときにアクセスできないリソースをリクエストする `repo:`、`user:`、または `org:` 修飾子がクエリに含まれている場合、検索は失敗します。

検索クエリで複数のリソースをリクエストする場合、レスポンスにはあなたがアクセスできるリソースのみが含まれ、返されないリソースを一覧表示するようなエラーメッセージは**表示されません**。

たとえば、検索クエリで `octocat/test` リポジトリと `codertocat/test` リポジトリを検索し、`octocat/test` へのアクセス権しか持っていない場合、`octocat/test` の検索結果が表示され、`codertocat/test` の検索結果は全く表示されません。 この振る舞いは、{% data variables.product.prodname_dotcom %} における検索の仕組みと同じです。

### テキスト一致メタデータ

GitHub では、コードスニペットが提供するコンテキストとと、検索結果のハイライトが使用できます。 Search API では、検索結果を表示するときに、検索と一致した言葉をハイライトできる付加的なメタデータを用意しています。

![code-snippet-highlighting](/assets/images/text-match-search-api.png)

リクエストでは、レスポンスに含まれるテキストフラグメントを受け取ることを選べます。各フラグメントには、一致した各検索用語の正確な場所を特定する数値オフセットが付属しています。

検索結果でこのメタデータを取得するには、`Accept` ヘッダで `text-match` メディアタイプを指定します。

```shell
application/vnd.github.text-match+json
```

`text-match` メディアタイプを指定すると、JSON ペイロード内にある `text_matches` と呼ばれる追加の鍵を受け取ります。この鍵は、テキスト内の検索用語の位置と、検索用語を含む `property` についての情報を提供します。 `text_matches` 配列内の各オブジェクトには、以下の属性が含まれています。

| 名前            | 説明                                                                                                                                  |
| ------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| `object_url`  | 検索用語のいずれかに一致する文字列プロパティを含むリソースの URL。                                                                                                 |
| `object_type` | 指定された `object_url` に存在するリソースのタイプの名前。                                                                                                |
| `属性`          | `object_url` に存在するリソースのプロパティの名前。 このプロパティは、検索用語のいずれかに一致する文字列です。 (`object_url` から返される JSON では、`fragment` の完全な内容を、この名前でプロパティから検索できます。) |
| `フラグメント`      | `property` の値のサブセット。 これは、1 つ以上の検索用語に一致するテキストフラグメントです。                                                                               |
| `matches`     | `fragment` に存在する 1 つ以上の検索用語の配列。 インデックス (すなわち「オフセット」) は、フラグメントと関連しています。 (`property` の_完全な_内容とは関係していません。)                             |

#### サンプル

cURL と、上記の [Issue 検索例](#search-issues-and-pull-requests) を使用すると、API リクエストは次のようになります。

``` shell
curl -H 'Accept: application/vnd.github.text-match+json' \
'{% data variables.product.api_url_pre %}/search/issues?q=windows+label:bug+language:python+state:open&sort=created&order=asc'
```

レスポンスには、検索結果ごとに `text_matches` 配列が含まれます。 以下の JSON では、`text_matches` 配列に 2 つのオブジェクトがあります。

最初のテキスト一致は、Issue の `body` プロパティで発生しました 。 Issue 本文から、テキストのフラグメントが表示されています。 検索用語 (`windows`) はフラグメント内に 2 回出現し、それぞれにインデックスがあります。

2 番目のテキスト一致は、Issue のコメントのうちの 1 つの `body` プロパティで発生しました。 Issue コメントの URL があります。 そしてもちろん、コメント本文から、テキストのフラグメントが表示されています。 検索用語 (`windows`) は、フラグメント内で 1 回出現しています。

```json
{
  "text_matches": [
    {
      "object_url": "https://api.github.com/repositories/215335/issues/132",
      "object_type": "Issue",
      "property": "body",
      "fragment": "comprehensive windows font I know of).\n\nIf we can find a commonly distributed windows font that supports them then no problem (we can use html font tags) but otherwise the '(21)' style is probably better.\n",
      "matches": [
        {
          "text": "windows",
          "indices": [
            14,
            21
          ]
        },
        {
          "text": "windows",
          "indices": [
            78,
            85
          ]
        }
      ]
    },
    {
      "object_url": "https://api.github.com/repositories/215335/issues/comments/25688",
      "object_type": "IssueComment",
      "property": "body",
      "fragment": " right after that are a bit broken IMHO :). I suppose we could have some hack that maxes out at whatever the font does...\n\nI'll check what the state of play is on Windows.\n",
      "matches": [
        {
          "text": "Windows",
          "indices": [
            163,
            170
          ]
        }
      ]
    }
  ]
}
```

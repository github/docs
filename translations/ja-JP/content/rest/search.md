---
title: 検索
intro: 'Search API を使うと、{% data variables.product.product_name %} で特定のアイテムを検索できます。'
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
ms.openlocfilehash: 71f21fc712f7c2121b780d79d20eb9615ad82c90
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '147110362'
---
## Search API について

Search API は、見つけたい特定の項目を検索するために役立ちます。 たとえば、リポジトリ内のユーザや特定のファイルを見つけることができます。 Google で検索を実行するのと同じように考えてください。 Search API は、探している 1 つの結果 (または探しているいくつかの結果) を見つけるために役立つよう設計されています。 Google で検索する場合と同じように、ニーズに最も合う項目を見つけるため、検索結果を数ページ表示したい場合もあるでしょう。 こうしたニーズを満たすため、{% data variables.product.product_name %} Search API は、**検索ごとに最大 1,000 件の結果** を提供します。

クエリを使って、検索を絞り込めます。 検索クエリ構文の詳細については、「[検索クエリの構築](/rest/reference/search#constructing-a-search-query)」を参照してください。

### 検索結果を順番づける

クエリパラメータとして別のソートオプションが指定されない限り、結果は最も一致するものから降順にソートされます。 最も関連性の高い項目を検索結果の最上位に押し上げるように、複数の要素が組み合わされます。

### レート制限

{% data reusables.enterprise.rate_limit %}

Search API にはカスタムレート制限があります。 [基本認証](/rest#authentication)、[OAuth](/rest#authentication)、または[クライアント ID とシークレット](/rest#increasing-the-unauthenticated-rate-limit-for-oauth-applications)を使用する要求の場合、1 分あたり最大 30 件の要求を作成できます。 認証されていない要求の場合、レート制限を使用すると、1 分あたり最大 10 件の要求を作成できます。

現在のレート制限の状態を特定するための詳細については、[レート制限に関するドキュメント](/rest/reference/rate-limit)を参照してください。

### 検索クエリの構築

Search API の各エンドポイントは[クエリ パラメーター](https://en.wikipedia.org/wiki/Query_string)を使用して、{% data variables.product.product_name %} で検索を実行します。 エンドポイントとクエリパラメータを含める例については、Search API の個々のエンドポイントを参照してください。

クエリには、{% data variables.product.product_name %} でサポートされている検索修飾子を任意に組み合わせて使用できます。 検索クエリの形式は次のとおりです。

```
SEARCH_KEYWORD_1 SEARCH_KEYWORD_N QUALIFIER_1 QUALIFIER_N
```

たとえば、`defunkt` が所有する _リポジトリ_ で、README ファイルに `GitHub` と `Octocat` という単語が含まれているものをすべて検索する場合は、_検索リポジトリ_ エンドポイントで次のクエリを使用します。

```
GitHub Octocat in:readme user:defunkt
```

**注:** ご使用の言語の推奨 HTML エンコーダーを使用して、クエリ文字列を作成してください。 次に例を示します。
```javascript
// JavaScript
const queryString = 'q=' + encodeURIComponent('GitHub Octocat in:readme user:defunkt');
```

使用可能な修飾子の完全な一覧、その形式、および使用例については、「[GitHub 上で検索する](/search-github/searching-on-github)」を参照してください。 演算子を使用して特定の数量や日付に一致させたり、結果を除外したりする方法については、「[検索構文を理解する](/search-github/getting-started-with-searching-on-github/understanding-the-search-syntax/)」を参照してください。

### クエリの長さの制限

Search API は、以下のクエリをサポートしていません。
- 256 文字超 (演算子や修飾子は除く)。
- `AND`、`OR`、`NOT` 演算子が 5 つ以上ある。

こうした検索クエリを使用すると、「Validation failed」というエラーメッセージが返されます。

### タイムアウトと不完全な結果

すべてのユーザーが Search API を迅速に使用できるよう、個々のクエリを実行できる期間について制限を設けています。 [制限時間を超えるクエリ](https://developer.github.com/changes/2014-04-07-understanding-search-results-and-potential-timeouts/)の場合、タイムアウト前に既に見つかった一致を API が返し、応答では `incomplete_results` プロパティが `true` に設定されます。

タイムアウトになったことは、必ずしも検索結果が未完了であるということではありません。
もっと多くの検索結果が出たかもしれませんし、出ていないかもしれません。

### アクセスエラーまたは検索結果の欠落

検索クエリでリポジトリを正常に認証してアクセスできるようにする必要があります。それ以外の場合は、"検証に失敗しました" というメッセージが表示される `422 Unprocessable Entry` エラーが表示されます。 たとえば、{% data variables.product.prodname_dotcom %} にサインインしたときにアクセスできないリソースを要求する `repo:`、`user:`、または `org:` 修飾子がクエリに含まれている場合、検索は失敗します。

検索クエリが複数のリソースを要求すると、応答にはアクセスできるリソースのみが含まれ、返されなかったリソースを一覧表示するエラー メッセージは表示 **されません**。

たとえば、検索クエリが `octocat/test` および `codertocat/test` リポジトリを検索しても、`octocat/test` へのアクセス権しかない場合は、応答には `octocat/test` の検索結果が表示され、`codertocat/test` の検索結果は表示されません。 この振る舞いは、{% data variables.product.prodname_dotcom %} における検索の仕組みと同じです。

### テキスト一致メタデータ

GitHub では、コードスニペットが提供するコンテキストとと、検索結果のハイライトが使用できます。 Search API では、検索結果を表示するときに、検索と一致した言葉をハイライトできる付加的なメタデータを用意しています。

![code-snippet-highlighting](/assets/images/text-match-search-api.png)

リクエストでは、レスポンスに含まれるテキストフラグメントを受け取ることを選べます。各フラグメントには、一致した各検索用語の正確な場所を特定する数値オフセットが付属しています。

検索結果でこのメタデータを取得するには、`Accept` ヘッダーで `text-match` メディアの種類を指定します。

```shell
application/vnd.github.text-match+json
```

`text-match` メディアの種類を指定すると、JSON ペイロード内にある `text_matches` と呼ばれる追加のキーを受け取ります。これは、テキスト内の検索用語の位置と、検索用語を含む `property` についての情報を提供します。 `text_matches` 配列内では、各オブジェクトに次の属性が含まれます。

名前 | 説明
-----|-----------|
`object_url` | 検索用語のいずれかに一致する文字列プロパティを含むリソースの URL。
`object_type` | 指定された `object_url` に存在するリソースの種類の名前。
`property` | `object_url` に存在するリソースのプロパティの名前。 このプロパティは、検索用語のいずれかに一致する文字列です。 (`object_url` から返される JSON では、`fragment` の完全なコンテンツは、この名前でプロパティから検索できます。)
`fragment` | `property` の値のサブセット。 これは、1 つ以上の検索用語に一致するテキストフラグメントです。
`matches` | `fragment` に存在する 1 つ以上の検索用語の配列。 インデックス (すなわち「オフセット」) は、フラグメントと関連しています。 (それらは `property` の _完全な_ コンテンツに対して相対的ではありません。)

#### 例

cURL と、上記の [issue 検索の例](#search-issues-and-pull-requests)を使用すると、API 要求は次のようになります。

``` shell
curl -H 'Accept: application/vnd.github.text-match+json' \
'{% data variables.product.api_url_pre %}/search/issues?q=windows+label:bug \
+language:python+state:open&sort=created&order=asc'
```

応答には、検索結果ごとに `text_matches` 配列が含まれます。 次の JSON では、`text_matches` 配列に 2 つのオブジェクトがあります。

最初のテキスト一致は、issue の`body` プロパティで発生しました。 Issue 本文から、テキストのフラグメントが表示されています。 検索用語 (`windows`) はそのフラグメント内に 2 回表示され、それぞれにインデックスがあります。

2 番目のテキスト一致は、issue のコメントのうちの 1 つの `body` プロパティで発生しました。 Issue コメントの URL があります。 そしてもちろん、コメント本文から、テキストのフラグメントが表示されています。 そのフラグメント内に検索用語 (`windows`) が 1 回表示されます。

```json
{
  "text_matches": [
    {
      "object_url": "https://api.github.com/repositories/215335/issues/132",
      "object_type": "Issue",
      "property": "body",
      "fragment": "comprehensive windows font I know of).\n\nIf we can find a commonly
      distributed windows font that supports them then no problem (we can use html
      font tags) but otherwise the '(21)' style is probably better.\n",
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
      "fragment": " right after that are a bit broken IMHO :). I suppose we could
      have some hack that maxes out at whatever the font does...\n\nI'll check
      what the state of play is on Windows.\n",
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

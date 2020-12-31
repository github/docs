---
title: トピックを検索する
intro: '{% data variables.product.product_name %} 上のリポジトリと関連するトピックを検索できます。'
redirect_from:
  - /articles/searching-topics
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

### トピックを {% data variables.product.product_name %} で検索

{% data variables.product.product_name %} 上でトピックを検索したり、関連するトピックを調べたり、特定のトピックに関連するリポジトリがどのくらいあるのかを確認したりできます。

1. Https://github.com/search に移動します。
2. トピックのキーワードを入力します。 ![検索フィールド](/assets/images/help/search/search-field.png)
3. 検索をトピックに絞るため、左サイドバーで [**Topics**] をクリックします。
{% if currentVersion == "free-pro-team@latest" %}
  ![サイドメニューのオプションが強調されたトピックを含む Jekyll リポジトリ検索結果ページ](/assets/images/help/search/topic-left-side-navigation-dotcom.png){% else %}
![Jekyll repository search results page on dotcom with topics side-menu option highlighted](/assets/images/help/search/topic-left-side-navigation.png)
{% endif %}

### 検索修飾子で検索を絞り込む

特定のトピックについてのリポジトリを調べたり、コントリビュートするプロジェクトを表示したり、{% data variables.product.product_name %} 上で最も人気のあるトピックを調べたりする場合、検索修飾子である `is:featured`、`is:curated`、`repositories:n`、および `created:YYYY-MM-DD` を使ってトピックを検索します。

`is:featured` 検索修飾子は、{% data variables.product.product_name %} 上のほとんどのリポジトリのトピックの検索結果を絞り込みます。 また、これらのトピックは、https://github.com/topics/ に特集されています。

`is:curated` 検索修飾子は、検索結果を、コミュニティのメンバーが特別な情報を追加したトピックに限定します。 For more information, see the [explore repository](https://github.com/github/explore).

トピックは、日付パラメータと `created:` を使って、作成した日付に基づいてフィルタリングできます。また、`repositories:n` を使って、トピックに関連付けられているリポジトリの数でフィルタリングすることも可能です。 これら両方の修飾子では、[不等号や範囲の修飾子](/articles/understanding-the-search-syntax)を使うことができます。

{% data reusables.time_date.date_format %} {% data reusables.time_date.time_format %}

{% data reusables.search.date_gt_lt %}

| 修飾子                       | サンプル                                                                                                                                                                                         |
| ------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `is:curated`              | [**is:curated javascript**](https://github.com/search?utf8=%E2%9C%93&q=javascript+is%3Acurated&type=Topics) は、「javascript」という単語を含む、curatedのTopicsにマッチします。                                    |
| `is:featured`             | [**is:featured javascript**](https://github.com/search?utf8=%E2%9C%93&q=javascript+is%3Afeatured&type=Topics) は、「javascript」という単語を含む、https://github.com/topics/ で特集されているトピックにマッチします。         |
| `is:not-curated`          | [**is:not-curated javascript**](https://github.com/search?utf8=%E2%9C%93&q=javascript+is%3Anot-curated&type=Topics) は、「javascript」という単語を含む、説明やロゴなどの特別な情報がないトピックにマッチします。                      |
| `is:not-featured`         | [**is:not-featured javascript**](https://github.com/search?utf8=%E2%9C%93&q=javascript+is%3Anot-featured&type=Topics)は、「javascript」という単語を含む、https://github.com/topics/ で特集されていないトピックにマッチします。 |
| `repositories:n`          | [**repositories:&gt;5000**](https://github.com/search?q=repositories%3A%3E5000) は、5000 を超えるリポジトリに関連付けられているトピックにマッチします。                                                                 |
| <code>created:<em>YYYY-MM-DD</em></code> | [**Serverless created:&gt;2019-01-01**](https://github.com/search?q=Serverless+created%3A%3E2019-01-01&type=Topics) は、2019 年以降に作成された、「serverless」という単語を含むトピックにマッチします。                  |

### トピックでリポジトリを検索

`topic:` 修飾子を使って、特定のトピックに関連するすべてのリポジトリを検索できます。 詳細は「[リポジトリを検索する](/articles/searching-for-repositories/#search-by-topic)」を参照してください。

### 参考リンク
- [Topics によるリポジトリの分類](/articles/classifying-your-repository-with-topics)

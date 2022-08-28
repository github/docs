---
title: ウィキを検索する
intro: '{% data variables.product.product_name %} 上のウィキを検索できます。また、これらのウィキの検索修飾子の組み合わせを使って、結果を絞り込むことができます。'
redirect_from:
  - /articles/searching-wikis
  - /github/searching-for-information-on-github/searching-wikis
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - GitHub search
---

{% data variables.product.product_name %} 全体にわたってグローバルにウィキを検索できます。あるいは、特定のリポジトリや Organization のみのウィキの検索もできます。 詳細は「[{% data variables.product.company_short %} での検索について](/articles/about-searching-on-github)」を参照してください。

{% data reusables.search.syntax_tips %}

### ユーザまたは Organization のリポジトリ内の検索

特定のユーザまたは Organization が所有するすべてのリポジトリのウィキページを表示するには、`user` 修飾子 `org` 修飾子を使います。 特定のリポジトリのウィキページを表示するには、`repo` 修飾子を使います。

| 修飾子                       | サンプル                                                                                                                              |
| ------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| <code>user:<em>USERNAME</em></code> | [**user:defunkt**](https://github.com/search?q=user%3Adefunkt&type=Wikis) は、@defunkt が所有するリポジトリのウィキページにマッチします。                    |
| <code>org:<em>ORGNAME</em></code> | [**org:github**](https://github.com/search?q=org%3Agithub&type=Wikis&utf8=%E2%9C%93) は、GitHub Organization が所有するリポジトリのウィキにマッチします。 |
| <code>repo:<em>USERNAME/REPOSITORY</em></code> | [**repo:defunkt/gibberish**](https://github.com/search?q=user%3Adefunkt&type=Wikis) は、「gibberish」リポジトリのウィキページにマッチします。             |

### ウィキページのタイトルまたは本文内の検索

`in` は、ウィキページのタイトルまたは本文のテキストに検索を限定します。 この修飾子がない場合、タイトルおよび本文のテキストの両方が検索されます。

| 修飾子        | サンプル                                                                                                                                           |
| ---------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| `in:title` | [**usage in:title**](https://github.com/search?q=usage+in%3Atitle&type=Wikis) は、「usage」という単語があるウィキページのタイトルにマッチします。                             |
| `in:body`  | [**installation in:body**](https://github.com/search?q=installation+in%3Abody&type=Wikis)は、main body テキストに「installation」という単語があるウィキページにマッチします。 |

### 最終更新日で検索

`updated` 修飾子は、特定の日付範囲内に最終更新されたウィキページにマッチします。

{% data reusables.search.date_gt_lt %}

| 修飾子                       | サンプル                                                                                                                                                          |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <code>updated:<em>YYYY-MM-DD</em></code> | [**usage updated:>2016-01-01**](https://github.com/search?q=usage+updated%3A>2016-01-01&type=Wikis) は、2016 年 1 月 1 日より後に最終更新された、「usage」という単語があるウィキページにマッチします。 |

### 参考リンク

- 「[検索結果をソートする](/articles/sorting-search-results/)」

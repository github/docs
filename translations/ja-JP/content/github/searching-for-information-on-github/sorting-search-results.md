---
title: 検索結果をソートする
intro: '[Sort] メニューを使って、またはクエリに sort 修飾子を加えることで、[{% data variables.product.product_name %} 検索](/articles/searching-on-github)結果をソートできます。'
redirect_from:
  - /articles/sorting-search-results
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

[Sort] メニューを使用して、関連性、Star の数、フォークの数、およびアイテムの更新の頻度で検索結果をソートできます。

  ![検索結果ソートのオプション付きメニュー](/assets/images/help/search/repo-search-sort.png)

インタラクション、リアクション、作者日付、コミッター日付、またはアイテム更新頻度でソートするには、検索クエリに `sort` 修飾子を追加します。

### インタラクションでソート

`sort:interactions` 修飾子は、インタラクションおよびコメントの合計数の多い順にソートします。

| 修飾子                                              | サンプル                                                                                                                                                                                                                                      |
| ------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `sort:interactions` または `sort:interactions-desc` | [**org:github sort:interactions**](https://github.com/search?q=org%3Agithub+sort%3Ainteractions&type=Issues) は、{% data variables.product.product_name %} が所有するリポジトリの Issue にマッチし、インタラクションおよびコメントの合計数の多い順にソートされます。                         |
| `sort:interactions-asc`                          | [**org:github sort:interactions-asc**](https://github.com/search?utf8=%E2%9C%93&q=org%3Agithub+sort%3Ainteractions-asc&type=Issues) は、{% data variables.product.product_name %} が所有するリポジトリの Issue にマッチし、インタラクションおよびコメントの合計数の少ない順にソートされます。 |

### リアクションでソート

`sort:reactions` 修飾子は、リアクションおよびコメントの合計数の多い順にソートします。

| 修飾子                                        | サンプル                                                                                                                                                                                                                                      |
| ------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `sort:reactions` または `sort:reactions-desc` | [**org:github sort:reactions**](https://github.com/search?q=org%3Agithub+sort%3Areactions&type=Issues) は、{% data variables.product.product_name %} が所有するリポジトリの Issue にマッチし、リアクションの数の多い順にソートされます。                                          |
| `sort:reactions-asc`                       | [**org:github sort:reactions-asc**](https://github.com/search?q=org%3Agithub+sort%3Areactions-asc&type=Issues) は、{% data variables.product.product_name %} が所有するリポジトリの Issue にマッチし、リアクションの数の少ない順にソートされます。                                 |
| <code>sort:reactions-<em>reaction</em></code>                  | [**org:github sort:reactions-+1**](https://github.com/search?q=org%3Agithub+sort%3Areactions-%2B1&type=Issues) は、{% data variables.product.product_name %} が所有するリポジトリの Issue にマッチし、サムズアップ (:+1:) のリアクションが多い順にソートされます。                     |
|                                            | [**org:github sort:reactions--1**](https://github.com/search?utf8=%E2%9C%93&q=org%3Agithub+sort%3Areactions--1&type=Issues)は、{% data variables.product.product_name %} が所有するリポジトリの Issue にマッチし、サムズダウン (:-1:) のリアクションが多い順にソートされます。         |
|                                            | [**org:github sort:reactions-smile**](https://github.com/search?utf8=%E2%9C%93&q=org%3Agithub+sort%3Areactions-smile&type=Issues) は、{% data variables.product.product_name %} が所有するリポジトリの Issue にマッチし、スマイル (:smile:) のリアクションが多い順にソートされます。 |
|                                            | [**org:github sort:reactions-tada**](https://github.com/search?utf8=%E2%9C%93&q=org%3Agithub+sort%3Areactions-tada&type=Issues) は、{% data variables.product.product_name %} が所有するリポジトリの Issue にマッチし、「やったー！」(:tada:) の多い順にソートされます。         |
|                                            | [**org:github sort:reactions-heart**](https://github.com/search?utf8=%E2%9C%93&q=org%3Agithub+sort%3Areactions-heart&type=Issues) は、{% data variables.product.product_name %} が所有するリポジトリの Issue にマッチし、ハート (:heart:) が多い順にソートされます。         |

### オーサー日付でソート

`sort:author-date` 修飾子は、オーサー日付を降順または昇順でソートします。

| 修飾子                                            | サンプル                                                                                                                                                                                                                                                  |
| ---------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `sort:author-date` または `sort:author-date-desc` | [**feature org:github sort:author-date**](https://github.com/search?utf8=%E2%9C%93&q=feature+org%3Agithub+sort%3Aauthor-date&type=Commits) は、オーサー日付で降順にソートされた、{% data variables.product.product_name %} が所有するリポジトリの「feature」という単語を含むコミットにマッチします。      |
| `sort:author-date-asc`                         | [**feature org:github sort:author-date-asc**](https://github.com/search?utf8=%E2%9C%93&q=feature+org%3Agithub+sort%3Aauthor-date-asc&type=Commits) は、{% data variables.product.product_name %} が所有するリポジトリの「feature」という単語を含むコミットにマッチし、作者日付の昇順でソートされます。 |

### コミッター日付でソート

`sort:committer-date` 修飾子は、コミッター日付を降順または昇順でソートします。

| 修飾子                                                  | サンプル                                                                                                                                                                                                                                                           |
| ---------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `sort:committer-date` または `sort:committer-date-desc` | [**feature org:github sort:committer-date**](https://github.com/search?utf8=%E2%9C%93&q=feature+org%3Agithub+sort%3Acommitter-date&type=Commits) は、{% data variables.product.product_name %} が所有するリポジトリの「feature」という単語を含むコミットにマッチし、コミッター日付の降順にソートされます。         |
| `sort:committer-date-asc`                            | [**feature org:github sort:committer-date-asc**](https://github.com/search?utf8=%E2%9C%93&q=feature+org%3Agithub+sort%3Acommitter-date-asc&type=Commits) は、{% data variables.product.product_name %} が所有するリポジトリの「feature」という単語を含むコミットにマッチし、コミッター日付の昇順でソートされます。 |

### 更新日付でソート

`sort:updated` 修飾子は、アイテムがどれだけ最近に更新されたかでソートします。

| 修飾子                                    | サンプル                                                                                                                                                                     |
| -------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `sort:updated` または `sort:updated-desc` | [**feature sort:updated**](https://github.com/search?utf8=%E2%9C%93&q=feature+sort%3Aupdated&type=Repositories) は、「feature」という単語を含むリポジトリにマッチし、更新日付の新しい順でソートされます。         |
| `sort:updated-asc`                     | [**feature sort:updated-asc**](https://github.com/search?utf8=%E2%9C%93&q=feature+sort%3Aupdated-asc&type=Repositories) は、更新日付の古い順でソートされた、「feature」という単語を含むリポジトリにマッチします。 |

### 参考リンク

- [GitHub での検索について](/articles/about-searching-on-github)
- [Issue およびプルリクエストをソートする](/articles/sorting-issues-and-pull-requests/)

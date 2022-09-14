---
title: 検索結果をソートする
intro: '[ソート] メニューを使って、またはクエリに `sort` 修飾子を加えることで、[{% data variables.product.product_name %} 検索](/articles/searching-on-github)の結果をソートできます。'
redirect_from:
  - /articles/sorting-search-results
  - /github/searching-for-information-on-github/sorting-search-results
  - /github/searching-for-information-on-github/getting-started-with-searching-on-github/sorting-search-results
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - GitHub search
ms.openlocfilehash: b2c01cdb1bc1df9d4ae4247886b1471211b2714b
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/10/2022
ms.locfileid: '145118966'
---
[Sort] メニューを使用して、関連性、Star の数、フォークの数、およびアイテムの更新の頻度で検索結果をソートできます。

  ![検索結果ソートのオプション付きメニュー](/assets/images/help/search/repo-search-sort.png)

インタラクション、リアクション、作成者の日付、コミッターの日付、またはアイテムがどれだけ最近に更新されたかでソートするには、検索クエリに `sort` 修飾子を追加します。

## インタラクションでソート

`sort:interactions` 修飾子は、リアクションとコメントを合わせた数の多い順にソートします。

| 修飾子  | 例
| ------------- | -------------
| `sort:interactions` または `sort:interactions-desc` | [**org:github sort:interactions**](https://github.com/search?q=org%3Agithub+sort%3Ainteractions&type=Issues) は、{% data variables.product.product_name %} が所有するリポジトリの Issue と一致し、リアクションとコメントを合わせた数の多い順にソートされます。
| `sort:interactions-asc` | [**org:github sort:interactions-asc**](https://github.com/search?utf8=%E2%9C%93&q=org%3Agithub+sort%3Ainteractions-asc&type=Issues) は、{% data variables.product.product_name %} が所有するリポジトリの Issue と一致し、リアクションとコメントを合わせた数の少ない順にソートされます。

## リアクションでソート

`sort:reactions` 修飾子は、リアクションの数または種類でソートします。

| 修飾子  | 例
| ------------- | -------------
| `sort:reactions` または `sort:reactions-desc` | [**org:github sort:reactions**](https://github.com/search?q=org%3Agithub+sort%3Areactions&type=Issues) は、{% data variables.product.product_name %} が所有するリポジトリの Issue と一致し、リアクションの数の多い順にソートされます。
| `sort:reactions-asc` | [**org:github sort:reactions-asc**](https://github.com/search?q=org%3Agithub+sort%3Areactions-asc&type=Issues) は、{% data variables.product.product_name %} が所有するリポジトリの Issue と一致し、リアクションの数の少ない順にソートされます (最少から最多)。
| <code>sort:reactions-<em>reaction</em></code> | [**org:github sort:reactions-+1**](https://github.com/search?q=org%3Agithub+sort%3Areactions-%2B1&type=Issues) は、{% data variables.product.product_name %} が所有するリポジトリの Issue と一致し、サムアップ (:+1:) のリアクションが多い順にソートされます。
| | [**org:github sort:reactions--1**](https://github.com/search?utf8=%E2%9C%93&q=org%3Agithub+sort%3Areactions--1&type=Issues) は、{% data variables.product.product_name %} が所有するリポジトリの Issue と一致し、サムダウン (:-1:) のリアクションが多い順にソートされます。
| | [**org:github sort:reactions-smile**](https://github.com/search?utf8=%E2%9C%93&q=org%3Agithub+sort%3Areactions-smile&type=Issues) は、{% data variables.product.product_name %} が所有するリポジトリの Issue と一致し、スマイル (:smile:) のリアクションが多い順にソートされます。
| | [**org:github sort:reactions-tada**](https://github.com/search?utf8=%E2%9C%93&q=org%3Agithub+sort%3Areactions-tada&type=Issues) は、{% data variables.product.product_name %} が所有するリポジトリの Issue と一致し、"やったー!" (:tada:) のリアクションが多い順にソートされます。
| | [**org:github sort:reactions-heart**](https://github.com/search?utf8=%E2%9C%93&q=org%3Agithub+sort%3Areactions-heart&type=Issues) は、{% data variables.product.product_name %} が所有するリポジトリの Issue と一致し、ハート (:heart:) のリアクションが多い順にソートされます。

## オーサー日付でソート

`sort:author-date` 修飾子は、作成者の日付を降順または昇順でソートします。

| 修飾子  | 例
| ------------- | -------------
| `sort:author-date` または `sort:author-date-desc` | [**feature org:github sort:author-date**](https://github.com/search?utf8=%E2%9C%93&q=feature+org%3Agithub+sort%3Aauthor-date&type=Commits) は、{% data variables.product.product_name %} が所有するリポジトリの "feature" という単語を含むコミットと一致し、作成者の日付で降順にソートされます。
| `sort:author-date-asc` | [ **`feature org:github sort:author-date-asc`**](https://github.com/search?utf8=%E2%9C%93&q=feature+org%3Agithub+sort%3Aauthor-date-asc&type=Commits) は、{% data variables.product.product_name %} が所有するリポジトリの "feature" という単語を含むコミットと一致し、作成者の日付で昇順にソートされます。

## コミッター日付でソート

`sort:committer-date` 修飾子は、コミッターの日付を降順または昇順でソートします。

| 修飾子  | 例
| ------------- | -------------
| `sort:committer-date` または `sort:committer-date-desc` | [**feature org:github sort:committer-date**](https://github.com/search?utf8=%E2%9C%93&q=feature+org%3Agithub+sort%3Acommitter-date&type=Commits) は、{% data variables.product.product_name %} が所有するリポジトリの "feature" という単語を含むコミットと一致し、コミッターの日付で降順にソートされます。
| `sort:committer-date-asc` | [ **`feature org:github sort:committer-date-asc`**](https://github.com/search?utf8=%E2%9C%93&q=feature+org%3Agithub+sort%3Acommitter-date-asc&type=Commits) は、{% data variables.product.product_name %} が所有するリポジトリの "feature" という単語を含むコミットと一致し、コミッターの日付で昇順にソートされます。

## 更新日付でソート

`sort:updated` 修飾子は、アイテムがどれだけ最近に更新されたかでソートします。

| 修飾子  | 例
| ------------- | -------------
| `sort:updated` または `sort:updated-desc` | [**feature sort:updated**](https://github.com/search?utf8=%E2%9C%93&q=feature+sort%3Aupdated&type=Repositories) は、"feature" という単語を含むリポジトリと一致し、更新日付の新しい順にソートされます。
| `sort:updated-asc` | [**feature sort:updated-asc**](https://github.com/search?utf8=%E2%9C%93&q=feature+sort%3Aupdated-asc&type=Repositories) は、"feature" という単語を含むリポジトリと一致し、更新日付の古い順にソートされます。

## 参考資料

- [{% data variables.product.prodname_dotcom %} での検索について](/search-github/getting-started-with-searching-on-github/about-searching-on-github)
- [Issue と pull request のフィルタリングと検索](/issues/tracking-your-work-with-issues/filtering-and-searching-issues-and-pull-requests)

---
title: ウィキを検索する
intro: '{% data variables.product.product_name %} 上のウィキを検索できます。また、これらのウィキの検索修飾子の組み合わせを使って、結果を絞り込むことができます。'
redirect_from:
  - /articles/searching-wikis
  - /github/searching-for-information-on-github/searching-wikis
  - /github/searching-for-information-on-github/searching-on-github/searching-wikis
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - GitHub search
ms.openlocfilehash: da73bcaa13c718be9840483e2a34c4b90ba96e63
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '145118854'
---
{% data variables.product.product_name %} 全体にわたってグローバルにウィキを検索できます。あるいは、特定のリポジトリや Organization のみのウィキの検索もできます。 詳細については、「[{% data variables.product.company_short %} での検索について](/search-github/getting-started-with-searching-on-github/about-searching-on-github)」を参照してください。

{% data reusables.search.syntax_tips %}

## ユーザまたは Organization のリポジトリ内の検索

特定のユーザーまたは Organization が所有するすべてのリポジトリで Wiki ページを検索するには、`user` または `org` 修飾子を使います。 特定のリポジトリの Wiki ページを検索するには、`repo` 修飾子を使います。

| 修飾子        | 例
| ------------- | -------------
| <code>user:<em>USERNAME</em></code> | [**user:defunkt**](https://github.com/search?q=user%3Adefunkt&type=Wikis) は、@defunkt が所有するリポジトリの Wiki ページと一致します。
| <code>org:<em>ORGNAME</em></code> | [**org:github**](https://github.com/search?q=org%3Agithub&type=Wikis&utf8=%E2%9C%93) は、GitHub Organization が所有するリポジトリの Wiki と一致します。
| <code>repo:<em>USERNAME/REPOSITORY</em></code> | [**repo:defunkt/gibberish**](https://github.com/search?q=user%3Adefunkt&type=Wikis) は、@defunkt の "gibberish" リポジトリの Wiki ページと一致します。

## ウィキページのタイトルまたは本文内の検索

`in` 修飾子は、Wiki ページのタイトルまたは本文のテキストに検索を限定します。 この修飾子がない場合、タイトルおよび本文のテキストの両方が検索されます。

| 修飾子        | 例
| ------------- | -------------
| `in:title` | [**usage in:title**](https://github.com/search?q=usage+in%3Atitle&type=Wikis) は、"usage" という単語を含む Wiki ページのタイトルと一致します。
| `in:body` | [**installation in:body**](https://github.com/search?q=installation+in%3Abody&type=Wikis) は、本文のテキストに "installation" という単語が含まれる Wiki ページと一致します。

## 最終更新日で検索

`updated` 修飾子は、指定した日付範囲内に最後に更新された Wiki ページと一致します。

{% data reusables.search.date_gt_lt %}

| 修飾子        | 例
| ------------- | -------------
| <code>updated:<em>YYYY-MM-DD</em></code> | [**usage updated:>2016-01-01**](https://github.com/search?q=usage+updated%3A>2016-01-01&type=Wikis) は、"usage" という単語を含み、2016 年 1 月 1 日より後に最後に更新された Wiki ページと一致します。

## 参考資料

- 「[検索結果をソートする](/search-github/getting-started-with-searching-on-github/sorting-search-results/)」

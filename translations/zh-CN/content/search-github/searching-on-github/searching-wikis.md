---
title: 搜索 wiki
intro: '您可以在 {% data variables.product.product_name %} 上搜索 wiki，并使用这些 wiki 搜索限定符的任意组合缩小结果范围。'
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
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/11/2022
ms.locfileid: '145099606'
---
您可以在所有 {% data variables.product.product_name %} 内全局搜索 wiki，也可以在特定仓库或组织内搜索 wiki。 有关详细信息，请参阅“[关于搜索 {% data variables.product.company_short %}](/search-github/getting-started-with-searching-on-github/about-searching-on-github)”。

{% data reusables.search.syntax_tips %}

## 在用户或组织的仓库内搜索

要从特定用户或组织拥有的所有存储库中查找 Wiki 页面，请使用 `user` 或 `org` 限定符。 要从特定存储库中查找 wiki 页面，请使用 `repo` 限定符。

| 限定符        | 示例
| ------------- | -------------
| <code>user:<em>USERNAME</em></code> | [user:defunkt](https://github.com/search?q=user%3Adefunkt&type=Wikis) 与 @defunkt 拥有的存储库中的 wiki 页面匹配。
| <code>org:<em>ORGNAME</em></code> | [org:github](https://github.com/search?q=org%3Agithub&type=Wikis&utf8=%E2%9C%93) 与 GitHub 组织拥有的存储库中的 wiki 匹配。
| <code>repo:<em>USERNAME/REPOSITORY</em></code> | [repo:defunkt/gibberish](https://github.com/search?q=user%3Adefunkt&type=Wikis) 与 @defunkt 的“gibberish”存储库中的 wiki 页面匹配。

## 在 wiki 页面标题或正文文本中搜索

`in` 限定符将搜索限制为 wiki 页面标题或正文文本。 如果未使用该限定符，将同时搜索标题和正文文本。

| 限定符        | 示例
| ------------- | -------------
| `in:title` | [usage in:title](https://github.com/search?q=usage+in%3Atitle&type=Wikis) 与带有单词“usage”的 wiki 页面标题匹配。
| `in:body` | [installation in:body](https://github.com/search?q=installation+in%3Abody&type=Wikis) 与正文文本中带有“installation”一词的 wiki 页面匹配。

## 按上次更新日期搜索

`updated` 限定符与最近一次更新时间在指定日期范围内的 wiki 页面匹配。

{% data reusables.search.date_gt_lt %}

| 限定符        | 示例
| ------------- | -------------
| <code>updated:<em>YYYY-MM-DD</em></code> | [usage updated:>2016-01-01](https://github.com/search?q=usage+updated%3A>2016-01-01&type=Wikis) 与最近一次更新时间在 2016-01-01 之后且有单词“usage”的 wiki 页面匹配。

## 延伸阅读

- “[对搜索结果进行排序](/search-github/getting-started-with-searching-on-github/sorting-search-results/)”

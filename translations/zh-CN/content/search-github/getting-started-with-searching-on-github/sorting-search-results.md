---
title: 排序搜索结果
intro: '可以使用 Sort（排序）菜单或通过将 `sort` 限定符添加到查询来排序 [{% data variables.product.product_name %} 搜索](/articles/searching-on-github)结果。'
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
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '145099634'
---
使用 Sort（排序）菜单可按相关性、星号数量、复刻数量以及项目最近更新时间来排序结果。

  ![含有排序搜索结果选项的菜单](/assets/images/help/search/repo-search-sort.png)

若要按交互、反应、作者日期、提交者日期或项目最近更新时间来排序，可以将 `sort` 限定符添加到搜索查询。

## 按交互排序

`sort:interactions` 限定符按最高反应和评论总数排序。

| 限定符  | 示例
| ------------- | -------------
| `sort:interactions` 或 `sort:interactions-desc` | [org:github sort:interactions](https://github.com/search?q=org%3Agithub+sort%3Ainteractions&type=Issues) 匹配 {% data variables.product.product_name %} 拥有的存储库中的问题，按最高反应和评论总数排序。
| `sort:interactions-asc` | [org:github sort:interactions-asc](https://github.com/search?utf8=%E2%9C%93&q=org%3Agithub+sort%3Ainteractions-asc&type=Issues) 匹配 {% data variables.product.product_name %} 拥有的存储库中的问题，按最低反应和评论总数排序。

## 按反应排序

`sort:reactions` 限定符按反应数量或类型排序。

| 限定符  | 示例
| ------------- | -------------
| `sort:reactions` 或 `sort:reactions-desc` | [org:github sort:reactions](https://github.com/search?q=org%3Agithub+sort%3Areactions&type=Issues) 匹配 {% data variables.product.product_name %} 拥有的存储库中的问题，按最高反应数量排序。
| `sort:reactions-asc` | [org:github sort:reactions-asc](https://github.com/search?q=org%3Agithub+sort%3Areactions-asc&type=Issues) 匹配 {% data variables.product.product_name %} 拥有的存储库中的问题，按反应数量升序排序（从最少到最多）。
| <code>sort:reactions-<em>reaction</em></code> | [org:github sort:reactions-+1](https://github.com/search?q=org%3Agithub+sort%3Areactions-%2B1&type=Issues) 匹配 {% data variables.product.product_name %} 拥有的存储库中的问题，按赞成 (:+1:) 数量最高的反应排序。
| | [org:github sort:reactions--1](https://github.com/search?utf8=%E2%9C%93&q=org%3Agithub+sort%3Areactions--1&type=Issues) 匹配 {% data variables.product.product_name %} 拥有的存储库中的问题，按反对 (:-1:) 数量最高的反应排序。
| | [org:github sort:reactions-smile](https://github.com/search?utf8=%E2%9C%93&q=org%3Agithub+sort%3Areactions-smile&type=Issues) 匹配 {% data variables.product.product_name %} 拥有的存储库中的问题，按笑脸 (:smile:) 数量最高的反应排序。
| | [org:github sort:reactions-tada](https://github.com/search?utf8=%E2%9C%93&q=org%3Agithub+sort%3Areactions-tada&type=Issues) 匹配 {% data variables.product.product_name %} 拥有的存储库中的问题，按欢呼 (:tada:) 数量最高的反应排序。
| | [org:github sort:reactions-heart](https://github.com/search?utf8=%E2%9C%93&q=org%3Agithub+sort%3Areactions-heart&type=Issues) 匹配 {% data variables.product.product_name %} 拥有的存储库中的问题，按爱心 (:heart:) 数量最高的反应排序。

## 按作者日期排序

`sort:author-date` 限定符按作者日期降序或升序排序。

| 限定符  | 示例
| ------------- | -------------
| `sort:author-date` 或 `sort:author-date-desc` | [feature org:github sort:author-date](https://github.com/search?utf8=%E2%9C%93&q=feature+org%3Agithub+sort%3Aauthor-date&type=Commits) 匹配 {% data variables.product.product_name %} 拥有的存储库中包含单词“feature”的提交，按作者日期降序排序。
| `sort:author-date-asc` | [`feature org:github sort:author-date-asc`](https://github.com/search?utf8=%E2%9C%93&q=feature+org%3Agithub+sort%3Aauthor-date-asc&type=Commits) 匹配 {% data variables.product.product_name %} 拥有的存储库中包含单词“feature”的提交，按作者日期升序排序。

## 按提交者日期排序

`sort:committer-date` 限定符按提交者日期降序或升序排序。

| 限定符  | 示例
| ------------- | -------------
| `sort:committer-date` 或 `sort:committer-date-desc` | [feature org:github sort:committer-date](https://github.com/search?utf8=%E2%9C%93&q=feature+org%3Agithub+sort%3Acommitter-date&type=Commits) 匹配 {% data variables.product.product_name %} 拥有的存储库中包含单词“feature”的提交，按提交者日期降序排序。
| `sort:committer-date-asc` | [`feature org:github sort:committer-date-asc`](https://github.com/search?utf8=%E2%9C%93&q=feature+org%3Agithub+sort%3Acommitter-date-asc&type=Commits) 匹配 {% data variables.product.product_name %} 拥有的存储库中包含单词“feature”的提交，按提交者日期升序排序。

## 按更新日期排序

`sort:updated` 限定符按项最近更新日期排序。

| 限定符  | 示例
| ------------- | -------------
| `sort:updated` 或 `sort:updated-desc` | [feature sort:updated](https://github.com/search?utf8=%E2%9C%93&q=feature+sort%3Aupdated&type=Repositories) 匹配包含单词“feature”的存储库，按最近更新日期排序。
| `sort:updated-asc` | [feature sort:updated-asc](https://github.com/search?utf8=%E2%9C%93&q=feature+sort%3Aupdated-asc&type=Repositories) 匹配包含单词“feature”的存储库，按最远更新日期排序。

## 延伸阅读

- [关于搜索 {% data variables.product.prodname_dotcom %}](/search-github/getting-started-with-searching-on-github/about-searching-on-github)
- [筛选和搜索问题以及拉取请求](/issues/tracking-your-work-with-issues/filtering-and-searching-issues-and-pull-requests)

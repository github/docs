---
title: 搜索提交
intro: '您可以在 {% data variables.product.product_name %} 上搜索提交，并使用这些提交搜索限定符的任意组合缩小结果范围。'
redirect_from:
  - /articles/searching-commits
  - /github/searching-for-information-on-github/searching-commits
  - /github/searching-for-information-on-github/searching-on-github/searching-commits
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - GitHub search
ms.openlocfilehash: 2dc35c96805e175bef1ed1ec1898d48e50de6042
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/11/2022
ms.locfileid: '145099618'
---
您可以在所有 {% data variables.product.product_name %} 内全局搜索提交，也可以在特定仓库或组织内搜索提交。 有关详细信息，请参阅“[关于搜索 {% data variables.product.company_short %}](/search-github/getting-started-with-searching-on-github/about-searching-on-github)”。

搜索提交时，仅搜索存储库的[默认分支](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-branches)。

{% data reusables.search.syntax_tips %}

## 在提交消息内搜索

您可以在消息中查找包含特定字词的提交。 例如，[修复拼写错误](https://github.com/search?q=fix+typo&type=Commits)匹配包含单词“fix”和“typo”的提交。

## 按作者或提交者搜索

可以使用 `author` 或 `committer` 限定符查找特定用户的提交。

| 限定符  | 示例
| ------------- | -------------
| <code>author:<em>USERNAME</em></code> | [author:defunkt](https://github.com/search?q=author%3Adefunkt&type=Commits) 匹配由 @defunkt 编写的提交。
| <code>committer:<em>USERNAME</em></code> | [committer:defunkt](https://github.com/search?q=committer%3Adefunkt&type=Commits) 匹配由 @defunkt 提交的提交。

`author-name` 和 `committer-name` 限定符按作者或提交者的姓名匹配提交。

| 限定符  | 示例
| ------------- | -------------
| <code>author-name:<em>NAME</em></code> | [author-name:wanstrath](https://github.com/search?q=author-name%3Awanstrath&type=Commits) 匹配作者姓名中包含“wanstrath”的提交。
| <code>committer-name:<em>NAME</em></code> | [committer-name:wanstrath](https://github.com/search?q=committer-name%3Awanstrath&type=Commits) 匹配提交者姓名中包含“wanstrath”的提交。

`author-email` 和 `committer-email` 限定符按作者或提交者的完整电子邮件地址匹配提交。

| 限定符  | 示例
| ------------- | -------------
| <code>author-email:<em>EMAIL</em></code> | [ **author-email:chris@github.com**](https://github.com/search?q=author-email%3Achris%40github.com&type=Commits) 匹配由 chris@github.com 编写的提交。
| <code>committer-email:<em>EMAIL</em></code> | [ **committer-email:chris@github.com**](https://github.com/search?q=committer-email%3Achris%40github.com&type=Commits) 匹配由 chris@github.com 提交的提交。

## 按创作或提交日期搜索

使用 `author-date` 和 `committer-date` 限定符来匹配在指定日期范围内创作或提交的提交。

{% data reusables.search.date_gt_lt %}

| 限定符  | 示例
| ------------- | -------------
| <code>author-date:<em>YYYY-MM-DD</em></code> | [author-date：&lt;2016-01-01](https://github.com/search?q=author-date%3A<2016-01-01&type=Commits) 匹配 2016-01-01 之前创作的提交。
| <code>committer-date:<em>YYYY-MM-DD</em></code> | [committer-date：&gt;2016-01-01](https://github.com/search?q=committer-date%3A>2016-01-01&type=Commits) 匹配 2016-01-01 之后提交的提交。

## 过滤合并提交

`merge` 限定符筛选合并提交。

| 限定符  | 示例
| ------------- | -------------
| `merge:true` | [merge:true](https://github.com/search?q=merge%3Atrue&type=Commits) 匹配合并提交。
| `merge:false` | [**merge:false**](https://github.com/search?q=merge%3Afalse&type=Commits) 匹配非合并提交。

## 按哈希搜索

`hash` 限定符按指定的 SHA-1 哈希匹配提交。

| 限定符  | 示例
| ------------- | -------------
| <code>hash:<em>HASH</em></code> | [hash:124a9a0ee1d8f1e15e833aff432fbb3b02632105](https://github.com/github/gitignore/search?q=hash%3A124a9a0ee1d8f1e15e833aff432fbb3b02632105&type=Commits) 按哈希 `124a9a0ee1d8f1e15e833aff432fbb3b02632105` 匹配提交。

## 按父项搜索

`parent` 限定符匹配其父级具有指定 SHA-1 哈希的提交。

| 限定符  | 示例
| ------------- | -------------
| <code>parent:<em>HASH</em></code> | [parent:124a9a0ee1d8f1e15e833aff432fbb3b02632105](https://github.com/github/gitignore/search?q=parent%3A124a9a0ee1d8f1e15e833aff432fbb3b02632105&type=Commits&utf8=%E2%9C%93) 按哈希 `124a9a0ee1d8f1e15e833aff432fbb3b02632105` 匹配提交子级。

## 按树搜索

`tree` 限定符按指定的 SHA-1 Git 树哈希匹配提交。

| 限定符  | 示例
| ------------- | -------------
| <code>tree:<em>HASH</em></code> | [tree:99ca967](https://github.com/github/gitignore/search?q=tree%3A99ca967&type=Commits) 匹配引用树哈希 `99ca967` 的提交。

## 在用户或组织的仓库内搜索

要从特定用户或组织拥有的所有存储库中搜索提交，请使用 `user` 或 `org` 限定符。 若要在特定存储库中搜索提交，请使用 `repo` 限定符。

| 限定符  | 示例
| ------------- | -------------
| <code>user:<em>USERNAME</em></code> | [gibberish user:defunkt](https://github.com/search?q=gibberish+user%3Adefunkt&type=Commits&utf8=%E2%9C%93) 在属于 @defunkt 的存储库中匹配带有字词“gibberish”的提交消息。
| <code>org:<em>ORGNAME</em></code> | [test org:github](https://github.com/search?utf8=%E2%9C%93&q=test+org%3Agithub&type=Commits) 在属于 @github 的存储库中匹配带有字词“test”的提交消息。
| <code>repo:<em>USERNAME/REPO</em></code> | [language repo:defunkt/gibberish](https://github.com/search?utf8=%E2%9C%93&q=language+repo%3Adefunkt%2Fgibberish&type=Commits) 在 @defunkt 的“gibberish”存储库中匹配带有字词“language”的提交消息。

## 按仓库可见性过滤

`is` 限定符匹配具有指定可见性的存储库中的提交。 有关详细信息，请参阅“[关于存储库](/repositories/creating-and-managing-repositories/about-repositories#about-repository-visibility)”。

| 限定符  | 示例
| ------------- | ------------- |
{%- ifversion fpt or ghes or ghec %} | `is:public` | [is:public](https://github.com/search?q=is%3Apublic&type=Commits) 匹配到公共存储库的提交。
{%- endif %} {%- ifversion ghes or ghec or ghae %} | `is:internal` | [is:internal](https://github.com/search?q=is%3Ainternal&type=Commits) 匹配到内部存储库的提交。
{%- endif %} | `is:private` | [is:private](https://github.com/search?q=is%3Aprivate&type=Commits) 匹配到专用存储库的提交。

## 延伸阅读

- “[对搜索结果进行排序](/search-github/getting-started-with-searching-on-github/sorting-search-results/)”

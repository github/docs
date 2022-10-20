---
title: 了解搜索语法
intro: '搜索 {% data variables.product.product_name %} 时，您可以构建匹配特定数字和单词的查询。'
redirect_from:
  - /articles/search-syntax
  - /articles/understanding-the-search-syntax
  - /github/searching-for-information-on-github/understanding-the-search-syntax
  - /github/searching-for-information-on-github/getting-started-with-searching-on-github/understanding-the-search-syntax
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - GitHub search
shortTitle: Understand search syntax
ms.openlocfilehash: e233c32d01c53ca5e5aa815fffe4505b14696240
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/11/2022
ms.locfileid: '145099624'
---
## 查询大于或小于另一个值的值

可以使用 `>`、`>=`、`<` 和 `<=` 搜索大于、大于或等于、小于以及小于或等于另一个值的值。

查询  | 示例
------------- | -------------
<code>><em>n</em></code> | **[cats stars:>1000](https://github.com/search?utf8=%E2%9C%93&q=cats+stars%3A%3E1000&type=Repositories)** 匹配有超过 1000 个星的具有“cats”一词的存储库。
<code>>=<em>n</em></code> | **[cats topics:>=5](https://github.com/search?utf8=%E2%9C%93&q=cats+topics%3A%3E%3D5&type=Repositories)** 匹配有 5 个或以上主题的具有“cats”一词的存储库。
<code><<em>n</em></code> | **[cats size:<10000](https://github.com/search?utf8=%E2%9C%93&q=cats+size%3A%3C10000&type=Code)** 匹配尺寸小于 10 KB 的文件中的具有“cats”一词的代码。
<code><=<em>n</em></code> | **[cats stars:<=50](https://github.com/search?utf8=%E2%9C%93&q=cats+stars%3A%3C%3D50&type=Repositories)** 匹配有 50 或更少个星的具有“cats”一词的存储库。

还可以使用[范围查询](#query-for-values-between-a-range)搜索大于或等于或者小于或等于其他值的值。

查询  | 示例
------------- | -------------
<code><em>n</em>..*</code> | **[cats stars:10..*](https://github.com/search?utf8=%E2%9C%93&q=cats+stars%3A10..*&type=Repositories)** 等效于 `stars:>=10` 并匹配有 10 或更多个星的具有“cats”一词的存储库。
<code>*..<em>n</em></code> | **[cats stars:*..10](https://github.com/search?utf8=%E2%9C%93&q=cats+stars%3A%22*..10%22&type=Repositories)** 等效于 `stars:<=10` 并匹配有 10 或更少个星的具有“cats”一词的存储库。

## 查询范围之间的值

使用范围语法 <code><em>n</em>..<em>n</em></code> 搜索范围内的值，其中第一个数字 n 是最低值，第二个是最高值。

查询  | 示例
------------- | -------------
<code><em>n</em>..<em>n</em></code>  | **[cats stars:10..50](https://github.com/search?utf8=%E2%9C%93&q=cats+stars%3A10..50&type=Repositories)** 匹配有 10 到 50 个星之间的具有“cats”一词的存储库。

## 查询日期

可以使用 `>`、`>=`、`<`、`<=` 和[范围查询](#query-for-values-between-a-range)搜索早于或晚于另一个日期或属于某个日期范围内的日期。 {% data reusables.time_date.date_format %}

查询  | 示例
------------- | -------------
<code>><em>YYYY</em>-<em>MM</em>-<em>DD</em></code> | **[cats created:>2016-04-29](https://github.com/search?utf8=%E2%9C%93&q=cats+created%3A%3E2016-04-29&type=Issues)** 匹配具有 2016 年 4 月 29 日后创建的“cats”一词的问题。
<code>>=<em>YYYY</em>-<em>MM</em>-<em>DD</em></code> | **[cats created:>=2017-04-01](https://github.com/search?utf8=%E2%9C%93&q=cats+created%3A%3E%3D2017-04-01&type=Issues)** 匹配具有 2017 年 4 月 1 日或之后创建的“cats”一词的问题。
<code><<em>YYYY</em>-<em>MM</em>-<em>DD</em></code> | **[cats pushed:<2012-07-05](https://github.com/search?q=cats+pushed%3A%3C2012-07-05&type=Code&utf8=%E2%9C%93)** 匹配具有在 2012 年 7 月 5 日之前推送到存储库中的“cats”一词的代码。
<code><=<em>YYYY</em>-<em>MM</em>-<em>DD</em></code> | **[cats created:<=2012-07-04](https://github.com/search?utf8=%E2%9C%93&q=cats+created%3A%3C%3D2012-07-04&type=Issues)** 匹配具有 2012 年 7 月 4 日或之前创建的“cats”一词的问题。
<code><em>YYYY</em>-<em>MM</em>-<em>DD</em>..<em>YYYY</em>-<em>MM</em>-<em>DD</em></code> | **[cats pushed:2016-04-30..2016-07-04](https://github.com/search?utf8=%E2%9C%93&q=cats+pushed%3A2016-04-30..2016-07-04&type=Repositories)** 匹配具有在 2016 年 4 月末和 7 月之间推送到其中的“cats”一词的存储库。
<code><em>YYYY</em>-<em>MM</em>-<em>DD</em>..*</code> | **[cats created:2012-04-30..*](https://github.com/search?utf8=%E2%9C%93&q=cats+created%3A2012-04-30..*&type=Issues)** 匹配 2012 年 4 月 30 日之后创建的包含“cats”一词的问题。
<code>*..<em>YYYY</em>-<em>MM</em>-<em>DD</em></code> | **[cats created:*..2012-07-04](https://github.com/search?utf8=%E2%9C%93&q=cats+created%3A*..2012-07-04&type=Issues)** 匹配 2012 年 7 月 4 日之前创建的包含“cats”一词的问题。

{% data reusables.time_date.time_format %}

查询  | 示例
------------- | -------------
<code><em>YYYY</em>-<em>MM</em>-<em>DD</em>T<em>HH</em>:<em>MM</em>:<em>SS</em>+<em>00</em>:<em>00</em></code> | **[cats created:2017-01-01T01:00:00+07:00..2017-03-01T15:30:15+07:00](https://github.com/search?utf8=%E2%9C%93&q=cats+created%3A2017-01-01T01%3A00%3A00%2B07%3A00..2017-03-01T15%3A30%3A15%2B07%3A00&type=Issues)** 匹配 2017 年 1 月 1 日凌晨 1 点 （UTC 时差为 `07:00`）和 2017 年 3 月 1 日下午 3 点 （UTC 时差为 `07:00`）之间创建的问题。
<code><em>YYYY</em>-<em>MM</em>-<em>DD</em>T<em>HH</em>:<em>MM</em>:<em>SS</em>Z</code>  | **[cats created:2016-03-21T14:11:00Z..2016-04-07T20:45:00Z](https://github.com/search?utf8=%E2%9C%93&q=cats+created%3A2016-03-21T14%3A11%3A00Z..2016-04-07T20%3A45%3A00Z&type=Issues)** 匹配 2016 年 3 月 21 日下午 2:11 和 2016 年 4 月 7 日晚上 8:45 之间创建的问题。

## 排除特定结果

可以使用 `NOT` 语法排除包含特定字词的结果。 `NOT` 运算符只能用于字符串关键字。 不适用于数字或日期。

查询  | 示例
------------- | -------------
`NOT`  | **[hello NOT world](https://github.com/search?q=hello+NOT+world&type=Repositories)** 与包含字词“hello”但不包含字词“world”的存储库匹配。

缩小搜索结果范围的另一种途径是排除特定的子集。 可以为任何搜索限定符添加 `-` 前缀，以排除该限定符匹配的所有结果。

查询  | 示例
------------- | -------------
<code>-<em>QUALIFIER</em></code>  | **[`cats stars:>10 -language:javascript`](https://github.com/search?q=cats+stars%3A>10+-language%3Ajavascript&type=Repositories)** 匹配有多于 10 个星但不是用 JavaScript 编写的具有“cats”一词的存储库。
 | **[`mentions:defunkt -org:github`](https://github.com/search?utf8=%E2%9C%93&q=mentions%3Adefunkt+-org%3Agithub&type=Issues)** 匹配提到未在 GitHub 组织中的存储库的 @defunkt 的问题

## 对带有空格的查询使用引号

如果搜索含有空格的查询，您需要用引号将其括起来。 例如：

* [cats NOT "hello world"](https://github.com/search?utf8=✓&q=cats+NOT+"hello+world"&type=Repositories) 匹配具有“cats”一词但没有“hello world”一词的存储库。
* [build label:"bug fix"](https://github.com/search?utf8=%E2%9C%93&q=build+label%3A%22bug+fix%22&type=Issues) 匹配具有标签“bug fix”的包含“build”一词的问题。

某些非字母数字符号（例如空格）会从引号内的代码搜索查询中删除，因此结果可能出乎意料。

## 使用用户名的查询

如果搜索查询包含需要用户名的限定符（例如 `user`、`actor` 或 `assignee`），可以使用任何 {% data variables.product.product_name %} 用户名指定特定的人，或使用 `@me` 指定当前用户。

查询  | 示例
------------- | -------------
`QUALIFIER:USERNAME` | [`author:nat`](https://github.com/search?q=author%3Anat&type=Commits) 匹配由 @nat 创建的提交
`QUALIFIER:@me` | [`is:issue assignee:@me`](https://github.com/search?q=is%3Aissue+assignee%3A%40me&type=Issues) 匹配分配给查看结果的人员的问题

只能使用带有限定符的 `@me` 且不能用作搜索词，例如 `@me main.workflow`。

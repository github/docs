---
title: 搜索用户
intro: '您可以在 {% data variables.product.product_name %} 上搜索用户，并使用这些用户搜索限定符的任意组合缩小结果范围。'
redirect_from:
  - /articles/searching-users
  - /github/searching-for-information-on-github/searching-users
  - /github/searching-for-information-on-github/searching-on-github/searching-users
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - GitHub search
ms.openlocfilehash: cf3af1837e398226bee7d926e5dae0fd437879c7
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/10/2022
ms.locfileid: '145130064'
---
您可以在所有 {% data variables.product.product_name %} 内全局搜索用户。 有关详细信息，请参阅“[关于在 {% data variables.product.company_short %} 上进行搜索](/search-github/getting-started-with-searching-on-github/about-searching-on-github)”。

{% data reusables.search.syntax_tips %}

## 仅搜索用户或组织

默认情况下，搜索用户将同时返回个人和组织。 不过，你可以使用 `type` 限定符将搜索结果限制为仅个人帐户或组织。

| 限定符        | 示例
| ------------- | -------------
| `type:user` | [mike in:name created:&lt;2011-01-01 type:user](https://github.com/search?q=mike+in:name+created%3A%3C2011-01-01+type%3Auser&type=Users) 匹配 2011 年之前创建的名为“mike”的个人帐户。
| `type:org` | [data in:email type:org](https://github.com/search?q=data+in%3Aemail+type%3Aorg&type=Users) 匹配其电子邮件中含有“data”一词的组织。

## 按帐户名、全名或公共电子邮件搜索

可以使用 `user` 或 `org` 限定符将搜索范围筛选为个人用户或组织帐户名称。

通过 `in` 限定符，可以将搜索限制为用户名 (`login`)、全名、公共电子邮件或这些项的任意组合。 如果省略此限定符，则只搜索用户名和电子邮件地址。 出于隐私原因，您无法按电子邮件域名搜索。

| 限定符        | 示例
| ------------- | -------------
| `user:name` | [user:octocat](https://github.com/search?q=user%3Aoctocat&type=Users) 匹配用户名为“octocat”的用户。
| `org:name` | [org:electron type:users](https://github.com/search?q=org%3Aelectron+type%3Ausers&type=Users) 匹配 Electron 组织的帐户名。
| `in:login` | [kenya in:login](https://github.com/search?q=kenya+in%3Alogin&type=Users) 匹配其用户名中含有“kenya”一词的用户。
| `in:name` | [bolton in:name](https://github.com/search?q=bolton+in%3Afullname&type=Users) 匹配其真实姓名中含有“bolton”一词的用户。
| `fullname:firstname lastname` | [fullname:nat friedman](https://github.com/search?q=fullname%3Anat+friedman&type=Users) 匹配全名为“Nat Friedman”的用户。 注：此搜索限定符区分空格。
| `in:email` | [data in:email](https://github.com/search?q=data+in%3Aemail&type=Users&utf8=%E2%9C%93) 匹配其电子邮件中含有“data”一词的用户。

## 按用户拥有的仓库数量搜索

通过使用 `repos` 限定符以及[大于、小于和范围限定符](/search-github/getting-started-with-searching-on-github/understanding-the-search-syntax)，可以根据用户拥有的存储库数量来筛选用户。

| 限定符        | 示例
| ------------- | -------------
| <code>repos:<em>n</em></code> | [repos:>9000](https://github.com/search?q=repos%3A%3E%3D9000&type=Users) 匹配其存储库数量超过 9,000 个的用户。
| | [bert repos:10..30](https://github.com/search?q=bert+repos%3A10..30&type=Users) 匹配拥有 10 到 30 个存储库、用户名或真实姓名含有“bert”一词的用户。

## 按位置搜索

您可以按其个人资料中指示的位置搜索用户。

| 限定符        | 示例
| ------------- | -------------
| <code>location:<em>LOCATION</em></code> | [repos:1 location:iceland](https://github.com/search?q=repos%3A1+location%3Aiceland&type=Users) 匹配恰好有一个存储库且住在冰岛的用户。

## 按仓库语言搜索

通过使用 `language` 限定符，可以根据用户所拥有存储库的语言来搜索用户。

| 限定符        | 示例
| ------------- | -------------
| <code>language:<em>LANGUAGE</em></code> | [language:javascript location:russia](https://github.com/search?q=language%3Ajavascript+location%3Arussia&type=Users) 匹配住在俄罗斯且其大多数存储库均以 JavaScript 编写的用户。
| | [jenny language:javascript in:fullname](https://github.com/search?q=jenny+language%3Ajavascript+in%3Afullname&type=Users) 匹配其全名含有“jenny”一词、拥有 JavaScript 存储库的用户。

## 按个人帐户创建时间搜索

可以使用 `created` 限定符根据用户加入 {% data variables.product.product_name %} 的时间来筛选用户。 这将采用日期作为其参数。 {% data reusables.time_date.date_format %} {% data reusables.time_date.time_format %}

{% data reusables.search.date_gt_lt %}

| 限定符        | 示例
| ------------- | -------------
| <code>created:<em>YYYY-MM-DD</em></code> | [created:<2011-01-01](https://github.com/search?q=created%3A%3C2011-01-01&type=Users) 匹配 2011 年之前加入的用户。
| | [created:>=2013-05-11](https://github.com/search?q=created%3A%3E%3D2013-05-11&type=Users) 匹配在 2013 年 5 月 11 日或之后加入的用户。
| | [created:2013-03-06 location:london](https://github.com/search?q=created%3A2013-03-06+location%3Alondon&type=Users) 匹配在 2013 年 3 月 6 日加入、将所在位置列为伦敦的用户。
| | [created:2010-01-01..2011-01-01 john in:login](https://github.com/search?q=created%3A2010-01-01..2011-01-01+john+in%3Ausername&type=Users) 匹配在 2010 年与 2011 年之间加入、其用户名中含有“john”一词的用户。

## 按关注者数量搜索

通过将 `followers` 限定符与[大于、小于和范围限定符](/search-github/getting-started-with-searching-on-github/understanding-the-search-syntax)一起使用，可以根据用户拥有的关注者数量来筛选用户。

| 限定符        | 示例
| ------------- | -------------
| <code>followers:<em>n</em></code> | [followers:>=1000](https://github.com/search?q=followers%3A%3E%3D1000&type=Users) 匹配具有 1,000 个或更多关注者的用户。
| | [sparkle followers:1..10](https://github.com/search?q=sparkle+followers%3A1..10&type=Users) 匹配具有 1 到 10 个关注者、其名称中含有“sparkle”一词的用户。

{% ifversion fpt or ghec %}

## 基于赞助能力的搜索

可以使用 `is:sponsorable` 限定符搜索可以在 {% data variables.product.prodname_sponsors %} 上获得赞助的用户和组织。 有关详细信息，请参阅“[关于 {% data variables.product.prodname_sponsors %}](/sponsors/getting-started-with-github-sponsors/about-github-sponsors)”。

| 限定符  | 示例
| ------------- | -------------
| `is:sponsorable` | [is:sponsorable](https://github.com/search?q=is%3Asponsorable&type=Users) 匹配具有 {% data variables.product.prodname_sponsors %} 配置文件的用户和组织。

{% endif %}

## 延伸阅读

- “[对搜索结果进行排序](/search-github/getting-started-with-searching-on-github/sorting-search-results/)”

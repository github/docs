---
title: 搜索用户
intro: '您可以在 {% data variables.product.product_name %} 上搜索用户，并使用这些用户搜索限定符的任意组合缩小结果范围。'
redirect_from:
  - /articles/searching-users
  - /github/searching-for-information-on-github/searching-users
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - GitHub search
---
您可以在所有 {% data variables.product.product_name %} 内全局搜索用户。 更多信息请参阅“[关于在 {% data variables.product.company_short %} 上搜索](/articles/about-searching-on-github)”。

{% data reusables.search.syntax_tips %}

### 仅搜索用户或组织

默认情况下，搜索用户将同时返回个人和组织。 不过，您可以使用 `type` 限定符将搜索结果限制为仅个人帐户或组织。

| 限定符         | 示例                                                                                                                                                                                |
| ----------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type:user` | [**mike in:name created:&lt;2011-01-01 type:user**](https://github.com/search?q=mike+in:name+created%3A%3C2011-01-01+type%3Auser&type=Users) 匹配 2011 年之前创建、名为 "mike" 的个人帐户。 |
| `type:org`  | [**data in:email type:org**](https://github.com/search?q=data+in%3Aemail+type%3Aorg&type=Users) 匹配其电子邮件中含有 "data" 字样的组织。                                                          |

### 按帐户名、全名或公共电子邮件搜索

您可以使用 `user` 或 `org` 限定符根据个人用户或组织帐户的名称过滤搜索。

通过 `in` 限定符，您可以将搜索限制为用户名 (`login`)、全名、公共电子邮件或这些的任意组合。 如果省略此限定符，则只搜索用户名和电子邮件地址。 出于隐私原因，您无法按电子邮件域名搜索。

| 限定符                           | 示例                                                                                                                                  |
| ----------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| `user:name`                   | [**user:octocat**](https://github.com/search?q=user%3Aoctocat&type=Users) 匹配用户名为 "octocat" 的用户。                                     |
| `org:name`                    | [**org:electron type:users**](https://github.com/search?q=org%3Aelectron+type%3Ausers&type=Users) 匹配 Electron 组织的帐户名。               |
| `in:login`                    | [**kenya in:login**](https://github.com/search?q=kenya+in%3Alogin&type=Users) 匹配其用户名中含 "kenya" 字样的用户。                               |
| `in:name`                     | [**bolton in:name**](https://github.com/search?q=bolton+in%3Afullname&type=Users) 匹配其真实姓名含有 "bolton" 字样的用户。                         |
| `fullname:firstname lastname` | [**fullname:nat friedman**](https://github.com/search?q=fullname%3Anat+friedman&type=Users) 匹配全名为 "Nat Friedman" 的用户。 注：此搜索限定符区分空格。 |
| `in:email`                    | [**data in:email**](https://github.com/search?q=data+in%3Aemail&type=Users&utf8=%E2%9C%93) 匹配其电子邮件中含有 "data" 字样的用户。                 |

### 按用户拥有的仓库数量搜索

您可以使用 `repos` 限定符以及[大于、小于和范围限定符](/articles/understanding-the-search-syntax)基于用户拥有的仓库数量过滤用户。

| 限定符                       | 示例                                                                                                                             |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| <code>repos:<em>n</em></code> | [**repos:>9000**](https://github.com/search?q=repos%3A%3E%3D9000&type=Users) 匹配其仓库数超过 9,000 的用户。                               |
|                           | [**bert repos:10..30**](https://github.com/search?q=bert+repos%3A10..30&type=Users) 匹配拥有 10 到 30 个仓库、其用户名或真实姓名含有 "bert" 字样的用户。 |

### 按位置搜索

您可以按其个人资料中指示的位置搜索用户。

| 限定符                       | 示例                                                                                                                    |
| ------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| <code>location:<em>LOCATION</em></code> | [**repos:1 location:iceland**](https://github.com/search?q=repos%3A1+location%3Aiceland&type=Users) 匹配恰好有一个仓库位于冰岛的用户。 |

### 按仓库语言搜索

使用 `language` 限定符，您可以基于用户所拥有仓库的语言搜索用户。

| 限定符                       | 示例                                                                                                                                                                    |
| ------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <code>language:<em>LANGUAGE</em></code> | [**language:javascript location:russia**](https://github.com/search?q=language%3Ajavascript+location%3Arussia&type=Users) 匹配其大多数仓库均以 JavaScript 编写的俄罗斯用户。             |
|                           | [**jenny language:javascript in:fullname**](https://github.com/search?q=jenny+language%3Ajavascript+in%3Afullname&type=Users) 匹配其全名含有 "jenny" 字样、具有 JavaScript 仓库的用户。 |

### 按用户帐户创建时间搜索

您可以使用 `created` 限定符基于用户加入 {% data variables.product.product_name %} 的时间过滤用户。 这将采用日期作为其参数。 {% data reusables.time_date.date_format %} {% data reusables.time_date.time_format %}

{% data reusables.search.date_gt_lt %}

| 限定符                       | 示例                                                                                                                                                                                          |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <code>created:<em>YYYY-MM-DD</em></code> | [**created:<2011-01-01**](https://github.com/search?q=created%3A%3C2011-01-01&type=Users) 匹配在 2011 年之前加入的用户。                                                                                |
|                           | [**created:>=2013-05-11**](https://github.com/search?q=created%3A%3E%3D2013-05-11&type=Users) 匹配在 2013 年 5 月 11 日或之后加入的用户。                                                                  |
|                           | [**created:2013-03-06 location:london**](https://github.com/search?q=created%3A2013-03-06+location%3Alondon&type=Users) 匹配 2013 年 3 月 6 日加入、其位置列为伦敦的用户。                                     |
|                           | [**created:2010-01-01..2011-01-01 john in:login**](https://github.com/search?q=created%3A2010-01-01..2011-01-01+john+in%3Ausername&type=Users) 匹配在 2010 年与 2011 年之间加入、其用户名中含有 "john" 字样的用户。 |

### 按关注者数量搜索

您可以使用 `followers` 限定符以及[大于、小于和范围限定符](/articles/understanding-the-search-syntax)基于用户拥有的关注者数量过滤用户。

| 限定符                       | 示例                                                                                                                                       |
| ------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| <code>followers:<em>n</em></code> | [**followers:>=1000**](https://github.com/search?q=followers%3A%3E%3D1000&type=Users) 匹配有 1,000 个或更多关注者的用户。                              |
|                           | [**sparkle followers:1..10**](https://github.com/search?q=sparkle+followers%3A1..10&type=Users) 匹配具有 1 到 10 个关注者、其名称中含有 "sparkle" 字样的用户。 |

### 延伸阅读

- “[排序搜索结果](/articles/sorting-search-results/)”

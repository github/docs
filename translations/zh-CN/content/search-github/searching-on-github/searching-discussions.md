---
title: 搜索讨论
intro: '您可以在 {% data variables.product.product_name %} 上搜索讨论，并使用搜索限定符缩小结果范围。'
versions:
  feature: discussions
topics:
  - GitHub search
redirect_from:
  - /github/searching-for-information-on-github/searching-discussions
  - /github/searching-for-information-on-github/searching-on-github/searching-discussions
ms.openlocfilehash: 4a1224d05cd78a0b701e7bc2a9e93a1c5a837bcd
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/10/2022
ms.locfileid: '147410449'
---
## 关于搜索讨论

您可以在所有 {% data variables.product.product_name %} 中全局搜索讨论，也可以在特定组织或仓库内搜索讨论。 有关详细信息，请参阅“[关于在 {% data variables.product.prodname_dotcom %} 中搜索](/github/searching-for-information-on-github/about-searching-on-github)”。

{% data reusables.search.syntax_tips %}

## 按标题、正文或评论搜索

使用 `in` 限定符可将讨论搜索范围限制在标题、正文或评论中。 您还可以组合限定符来搜索标题、正文或注释的组合。 省略 `in` 限定符时，{% data variables.product.product_name %} 将搜索标题、正文和评论。

| 限定符 | 示例 |
| :- | :- |
| `in:title` | [welcome in:title](https://github.com/search?q=welcome+in%3Atitle&type=Discussions) 匹配标题中含有“welcome”的讨论。 |
| `in:body` | [onboard in:title,body](https://github.com/search?q=onboard+in%3Atitle%2Cbody&type=Discussions) 匹配标题或正文中含有“onboard”的讨论。 |
| `in:comments` | [thanks in:comments](https://github.com/search?q=thanks+in%3Acomment&type=Discussions) 匹配标题或正文中含有“thanks”的讨论。 |

## 在用户或组织的仓库内搜索

要在特定用户或组织拥有的所有存储库中搜索讨论，可使用 `user` 或 `org` 限定符。 要在特定存储库中搜索讨论，可使用 `repo` 限定符。

| 限定符 | 示例 |
| :- | :- |
| <code>user:<em>USERNAME</em></code> | [user:octocat feedback](https://github.com/search?q=user%3Aoctocat+feedback&type=Discussions) 匹配 @octocat 拥有的存储库中含有“feedback”一词的讨论。 |
| <code>org:<em>ORGNAME</em></code> | [org:github](https://github.com/search?q=org%3Agithub&type=Discussions&utf8=%E2%9C%93) 匹配 GitHub 组织拥有的存储库中的讨论。 |
| <code>repo:<em>USERNAME/REPOSITORY</em></code> | [repo:nodejs/node created:<2021-01-01](https://github.com/search?q=repo%3Anodejs%2Fnode+created%3A%3C2020-01-01&type=Discussions) 匹配 @nodejs 的 Node.js 运行时项目中在 2021 年 1 月之前创建的讨论。 |

## 按仓库可见性过滤

可使用 `is` 限定符，按包含讨论的存储库的可见性进行筛选。 有关详细信息，请参阅“[关于存储库](/repositories/creating-and-managing-repositories/about-repositories#about-repository-visibility)”。

| 限定符  | 示例 | :- | :- |{% ifversion fpt or ghes or ghec %} | `is:public` | [is:public](https://github.com/search?q=is%3Apublic&type=Discussions) 匹配公共存储库中的讨论。{% endif %}{% ifversion ghec %} | `is:internal` | [is:internal](https://github.com/search?q=is%3Ainternal&type=Discussions) 匹配内部存储库中的讨论。{% endif %} | `is:private` | [is:private tiramisu](https://github.com/search?q=is%3Aprivate+tiramisu&type=Discussions) 匹配你可访问的专用存储库中含有“tiramisu”一词的讨论。  

## 按作者搜索

`author` 限定符查找由特定用户创建的讨论。

| 限定符 | 示例 |
| :- | :- |
| <code>author:<em>USERNAME</em></code> | [cool author:octocat](https://github.com/search?q=cool+author%3Aoctocat&type=Discussions) 匹配由 @octocat 创建且含有“cool”一词的讨论。 |
| | [bootstrap in:body author:octocat](https://github.com/search?q=bootstrap+in%3Abody+author%3Aoctocat&type=Discussions) 匹配由 @octocat 创建且正文中含有“bootstrap”一词的讨论。 |

## 按评论者搜索

`commenter` 限定符查找含有特定用户评论的讨论。

| 限定符 | 示例 |
| :- | :- |
| <code>commenter:<em>USERNAME</em></code> | [github commenter:becca org:github](https://github.com/search?utf8=%E2%9C%93&q=github+commenter%3Abecca+org%3Agithub&type=Discussions) 匹配 GitHub 拥有的存储库中含有“github”一词且含有 @becca 评论的讨论。

## 按涉及讨论的用户搜索

可使用 `involves` 限定符查找涉及特定用户的讨论。 该限定符返回由特定用户创建、提及该用户或包含该用户评论的讨论。 `involves` 限定符是单一用户 `author`、`mentions` 和 `commenter` 限定符之间的逻辑 OR。

| 限定符 | 示例 |
| :- | :- |
| <code>involves:<em>USERNAME</em></code> | [involves:becca involves:octocat](https://github.com/search?q=involves%3Abecca+involves%3Aoctocat&type=Discussions) 匹配涉及 @becca 或 @octocat 的讨论。
| | [**NOT beta in:body involves:becca**](https://github.com/search?q=NOT+beta+in%3Abody+involves%3Abecca&type=Discussions) 匹配涉及 @becca 且正文中不含“beta”一词的讨论。

## 按评论数量搜索

可使用 `comments` 限定符以及大于、小于和范围限定符以按评论数量搜索。 有关详细信息，请参阅“[了解搜索语法](/github/searching-for-information-on-github/understanding-the-search-syntax)”。

| 限定符 | 示例 |
| :- | :- |
| <code>comments:<em>n</em></code> | [comments:&gt;100](https://github.com/search?q=comments%3A%3E100&type=Discussions) 匹配评论超过 100 条的讨论。
| | [comments:500..1000](https://github.com/search?q=comments%3A500..1000&type=Discussions) 匹配评论条数为 500-1000 的讨论。

## 按讨论创建或上次更新时间搜索

您可以基于创建时间或上次更新时间过滤讨论。 对于讨论创建，可使用 `created` 限定符；要了解讨论上次更新的时间，请使用 `updated` 限定符。

两个限定符都使用日期作为参数。 {% data reusables.time_date.date_format %} {% data reusables.time_date.time_format %}

{% data reusables.search.date_gt_lt %}

| 限定符 | 示例 |
| :- | :- |
| <code>created:<em>YYYY-MM-DD</em></code> | [created:>2020-11-15](https://github.com/search?q=created%3A%3E%3D2020-11-15&type=discussions) 匹配 2020 年 11 月 15 日之后创建的讨论。
| <code>updated:<em>YYYY-MM-DD</em></code> | [weird in:body updated:>=2020-02-01](https://github.com/search?q=weird+in%3Abody+updated%3A%3E%3D2020-12-01&type=Discussions) 匹配 2020 年 12 月之后更新且正文中含有“weird”一词的讨论。

## 延伸阅读

- “[对搜索结果进行排序](/search-github/getting-started-with-searching-on-github/sorting-search-results/)”

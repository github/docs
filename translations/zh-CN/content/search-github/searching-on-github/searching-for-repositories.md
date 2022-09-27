---
title: 搜索仓库
intro: '您可以在 {% data variables.product.product_name %} 上搜索仓库，并使用这些仓库搜索限定符的任意组合缩小结果范围。'
redirect_from:
  - /articles/searching-repositories
  - /articles/searching-for-repositories
  - /github/searching-for-information-on-github/searching-for-repositories
  - /github/searching-for-information-on-github/searching-on-github/searching-for-repositories
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - GitHub search
shortTitle: Search for repositories
ms.openlocfilehash: 9a464fbb327809b8af970c9a62c3a70d81c2c6b9
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '147527932'
---
可以在所有 {% data variables.product.product_location %} 内全局搜索存储库，也可以在特定组织内搜索存储库。 有关详细信息，请参阅“[关于在 {% data variables.product.prodname_dotcom %} 中搜索](/search-github/getting-started-with-searching-on-github/about-searching-on-github)”。

若要在搜索结果中包含分支，需要在查询中添加 `fork:true` 或 `fork:only`。 有关详细信息，请参阅“[在分支中搜索](/search-github/searching-on-github/searching-in-forks)”。

{% data reusables.search.syntax_tips %}

## 按仓库名称、说明或自述文件内容搜索

通过 `in` 限定符，可将搜索范围限制到存储库名称、存储库说明、存储库主题、自述文件内容或这些项的任意组合。 如果省略此限定符，则仅搜索存储库名称、说明和主题。

| 限定符  | 示例
| ------------- | -------------
| `in:name` | [**jquery in:name**](https://github.com/search?q=jquery+in%3Aname&type=Repositories) 匹配名称中带有“jquery”的存储库。
| `in:description`  | [**jquery in:name,description**](https://github.com/search?q=jquery+in%3Aname%2Cdescription&type=Repositories) 匹配名称或说明中带有“jquery”的存储库。
| `in:topics`  | [jquery in:topics](https://github.com/search?q=jquery+in%3Atopics&type=Repositories) 将带“jquery”标签的存储库匹配为主题。
| `in:readme` | [**jquery in:readme**](https://github.com/search?q=jquery+in%3Areadme&type=Repositories) 匹配自述文件中提及“jquery”的存储库。
| `repo:owner/name` | [**repo:octocat/hello-world**](https://github.com/search?q=repo%3Aoctocat%2Fhello-world) 匹配特定的存储库名称。

## 基于仓库的内容搜索

可以使用 `in:readme` 限定符，通过搜索存储库自述文件中的内容来查找存储库。 有关详细信息，请参阅“[关于自述文件](/github/creating-cloning-and-archiving-repositories/about-readmes)”。

除了使用 `in:readme`，还可以通过搜索存储库中的特定内容来查找存储库。 要搜索仓库内的特定文件或内容，您可以使用查找器或代码特定的搜索限定符。 有关详细信息，请参阅“[在 {% data variables.product.prodname_dotcom %} 上查找文件](/search-github/searching-on-github/finding-files-on-github)”和“[搜索代码](/search-github/searching-on-github/searching-code)”。

| 限定符  | 示例
| ------------- | -------------
| `in:readme` | [**octocat in:readme**](https://github.com/search?q=octocat+in%3Areadme&type=Repositories) 匹配自述文件中提及“octocat”的存储库。

## 在用户或组织的仓库内搜索

若要在特定用户或组织拥有的所有存储库中搜索，可使用 `user` 或 `org` 限定符。

| 限定符  | 示例
| ------------- | -------------
| <code>user:<em>USERNAME</em></code> | [**user:defunkt forks:&gt;100**](https://github.com/search?q=user%3Adefunkt+forks%3A%3E%3D100&type=Repositories) 匹配来自 @defunkt 且具有超过 100 个分支的存储库。
| <code>org:<em>ORGNAME</em></code> | [**org:github**](https://github.com/search?utf8=%E2%9C%93&q=org%3Agithub&type=Repositories) 匹配来自 GitHub 的存储库。

## 按仓库大小搜索

`size` 限定符使用大于、小于和范围限定符查找与特定大小（以千字节为单位）匹配的存储库。 有关详细信息，请参阅“[了解搜索语法](/github/searching-for-information-on-github/understanding-the-search-syntax)”。

| 限定符  | 示例
| ------------- | -------------
| <code>size:<em>n</em></code> | [**size:1000**](https://github.com/search?q=size%3A1000&type=Repositories) 匹配正好为 1 MB 的存储库。
| | [**size:&gt;=30000**](https://github.com/search?q=size%3A%3E%3D30000&type=Repositories) 匹配至少为 30 MB 的存储库。
| | [**size:&lt;50**](https://github.com/search?q=size%3A%3C50&type=Repositories) 匹配小于 50 KB 的存储库。
| | [**size:50..120**](https://github.com/search?q=size%3A50..120&type=Repositories) 匹配介于 50 KB 至 120 KB 之间的存储库。

## 按关注者数量搜索

可以使用 `followers` 限定符以及大于、小于和范围限定符，根据关注存储库的用户数量筛选存储库。 有关详细信息，请参阅“[了解搜索语法](/github/searching-for-information-on-github/understanding-the-search-syntax)”。

| 限定符        | 示例
| ------------- | -------------
| <code>followers:<em>n</em></code> | [**node followers:>=10000**](https://github.com/search?q=node+followers%3A%3E%3D10000) 匹配有 10,000 名或更多关注者提及“node”一词的存储库。
| | [**styleguide linter followers:1..10**](https://github.com/search?q=styleguide+linter+followers%3A1..10&type=Repositories) 匹配有 1 至 10 名关注者提及“styleguide linter”一词的存储库。

## 按复刻数量搜索

`forks` 限定符使用大于、小于和范围限定符指定存储库应具有的分支数量。 有关详细信息，请参阅“[了解搜索语法](/github/searching-for-information-on-github/understanding-the-search-syntax)”。

| 限定符  | 示例
| ------------- | -------------
| <code>forks:<em>n</em></code> | [**forks:5**](https://github.com/search?q=forks%3A5&type=Repositories) 匹配只有五个分支的存储库。
| | [**forks:&gt;=205**](https://github.com/search?q=forks%3A%3E%3D205&type=Repositories) 匹配至少有 205 个分支的存储库。
| | [**forks:&lt;90**](https://github.com/search?q=forks%3A%3C90&type=Repositories) 匹配具有少于 90 个分支的存储库。
| | [**forks:10..20**](https://github.com/search?q=forks%3A10..20&type=Repositories) 匹配具有 10 到 20 个分支的存储库。

## 按星号数量搜索

您可以使用大于、小于和范围限定符，基于仓库的星标数量来搜索仓库。 有关详细信息，请参阅“[使用星标保存存储库](/github/getting-started-with-github/saving-repositories-with-stars)”和“[了解搜索语法](/github/searching-for-information-on-github/understanding-the-search-syntax)”。

| 限定符  | 示例
| ------------- | -------------
| <code>stars:<em>n</em></code> | [**stars:500**](https://github.com/search?utf8=%E2%9C%93&q=stars%3A500&type=Repositories) 匹配正好有 500 个星标的存储库。
| | [stars:10..20 size:<1000](https://github.com/search?q=stars%3A10..20+size%3A%3C1000&type=Repositories) 匹配有 10 到 20 个星标、小于 1000 KB 的存储库。
| | [**stars:&gt;=500 fork:true language:php**](https://github.com/search?q=stars%3A%3E%3D500+fork%3Atrue+language%3Aphp&type=Repositories) 匹配至少有 500 个星标（包括用 PHP 编写的分支星标）的存储库。

## 按仓库创建或上次更新时间搜索

您可以基于创建时间或上次更新时间过滤仓库。 对于存储库创建，可以使用 `created` 限定符；要了解存储库的最后更新时间，需要使用 `pushed` 限定符。 `pushed` 限定符将返回存储库列表，按存储库中任意分支上最近进行的提交排序。

两者均采用日期作为参数。 {% data reusables.time_date.date_format %} {% data reusables.time_date.time_format %}

{% data reusables.search.date_gt_lt %}

| 限定符  | 示例
| ------------- | -------------
| <code>created:<em>YYYY-MM-DD</em></code> | [**webos created:&lt;2011-01-01**](https://github.com/search?q=webos+created%3A%3C2011-01-01&type=Repositories) 匹配具有 2011 年之前创建的“webos”一词的存储库。
| <code>pushed:<em>YYYY-MM-DD</em></code> | [**css pushed:&gt;2013-02-01**](https://github.com/search?utf8=%E2%9C%93&q=css+pushed%3A%3E2013-02-01&type=Repositories) 匹配具有在 2013 年 1 月之后推送到其中的“css”一词的存储库。
| | [**case pushed:&gt;=2013-03-06 fork:only**](https://github.com/search?q=case+pushed%3A%3E%3D2013-03-06+fork%3Aonly&type=Repositories) 匹配在 2013 年 3 月 6 日或之后将“case”一词推送到其中的存储库（即分支）。

## 按语言搜索

您可以根据仓库中代码的语言搜索仓库。

| 限定符  | 示例
| ------------- | -------------
| <code>language:<em>LANGUAGE</em></code> | [ **`rails language:javascript`**](https://github.com/search?q=rails+language%3Ajavascript&type=Repositories) 匹配具有以 JavaScript 编写的“rails”一词的存储库。

## 按主题搜索

您可以找到按特定主题分类的所有仓库。 有关详细信息，请参阅“[按主题对存储库进行分类](/github/administering-a-repository/classifying-your-repository-with-topics)”。

| 限定符  | 示例
| ------------- | -------------
| <code>topic:<em>TOPIC</em></code> | [ **`topic:jekyll`**](https://github.com/search?utf8=%E2%9C%93&q=topic%3Ajekyll&type=Repositories&ref=searchresults) 匹配按“Jekyll”主题分类的存储库。

## 按主题数量搜索

可以使用 `topics` 限定符以及大于、小于和范围限定符，根据应用于存储库的主题数量来搜索存储库。 有关详细信息，请参阅“[按主题对存储库进行分类](/github/administering-a-repository/classifying-your-repository-with-topics)”和“[了解搜索语法](/github/searching-for-information-on-github/understanding-the-search-syntax)”。

| 限定符  | 示例
| ------------- | -------------
| <code>topics:<em>n</em></code> | [**topics:5**](https://github.com/search?utf8=%E2%9C%93&q=topics%3A5&type=Repositories&ref=searchresults) 匹配具有五个主题的存储库。
| | [**topics:>3**](https://github.com/search?utf8=%E2%9C%93&q=topics%3A%3E3&type=Repositories&ref=searchresults) 匹配具有三个以上主题的存储库。

{% ifversion fpt or ghes or ghec %}

## 按许可搜索

您可以根据仓库中许可的类型搜索仓库。 您必须使用许可关键字，按特定许可或许可系列来过滤仓库。 有关详细信息，请参阅“[许可存储库](/github/creating-cloning-and-archiving-repositories/licensing-a-repository)”。

| 限定符  | 示例
| ------------- | -------------
| <code>license:<em>LICENSE_KEYWORD</em></code> | [**license:apache-2.0**](https://github.com/search?utf8=%E2%9C%93&q=license%3Aapache-2.0&type=Repositories&ref=searchresults) 匹配根据 Apache 许可证 2.0 许可的存储库。

{% endif %}

## 按仓库可见性搜索

您可以根据仓库的可见性过滤搜索。 有关详细信息，请参阅“[关于存储库](/repositories/creating-and-managing-repositories/about-repositories#about-repository-visibility)”。

| 限定符  | 示例 | ------------- | ------------- |{% ifversion fpt or ghes or ghec %} | `is:public` | [**is:public org:github**](https://github.com/search?q=is%3Apublic+org%3Agithub&type=Repositories) 匹配由 {% data variables.product.company_short %} 所有的公共存储库。{% endif %}{% ifversion ghes or ghec or ghae %} | `is:internal` | [**is:internal test**](https://github.com/search?q=is%3Ainternal+test&type=Repositories) 匹配你可以访问且包含“test”一词的内部存储库。{% endif %} | `is:private` | [**is:private pages**](https://github.com/search?q=is%3Aprivate+pages&type=Repositories) 匹配你可以访问且包含“pages”一词的专用存储库。

{% ifversion fpt or ghec %}

## 基于仓库是否为镜像搜索

您可以根据仓库是否为镜像以及托管于其他位置托管来搜索仓库。 有关详细信息，请参阅“[查找为 {% data variables.product.prodname_dotcom %} 上的开放源代码做贡献的方式](/github/getting-started-with-github/finding-ways-to-contribute-to-open-source-on-github)”。

| 限定符  | 示例
| ------------- | -------------
| `mirror:true` | [**mirror:true GNOME**](https://github.com/search?utf8=%E2%9C%93&q=mirror%3Atrue+GNOME&type=) 匹配为镜像且包含“GNOME”一词的存储库。
|  `mirror:false` | [**mirror:false GNOME**](https://github.com/search?utf8=%E2%9C%93&q=mirror%3Afalse+GNOME&type=) 匹配不为镜像且包含“GNOME”一词的存储库。

{% endif %}

## 基于仓库是否已存档搜索

您可以基于仓库是否已存档来搜索仓库。 有关详细信息，请参阅“[归档存储库](/repositories/archiving-a-github-repository/archiving-repositories)”。

| 限定符  | 示例
| ------------- | -------------
| `archived:true` | [**archived:true GNOME**](https://github.com/search?utf8=%E2%9C%93&q=archived%3Atrue+GNOME&type=) 匹配已存档且包含“GNOME”一词的存储库。
|  `archived:false` | [](https://github.com/search?utf8=%E2%9C%93&q=archived%3Afalse+GNOME&type=) 匹配未存档且包含“GNOME”一词的存储库。

{% ifversion fpt or ghec %}

## 根据带有 `good first issue` 或 `help wanted` 标签的议题数进行搜索

可以使用限定符 `help-wanted-issues:>n` 和 `good-first-issues:>n` 搜索具有最少标有 `help-wanted` 或 `good-first-issue` 的议题的存储库。 有关详细信息，请参阅“[使用标签鼓励对项目做出有益的贡献](/communities/setting-up-your-project-for-healthy-contributions/encouraging-helpful-contributions-to-your-project-with-labels)”。

| 限定符  | 示例
| ------------- | -------------
| `good-first-issues:>n` | [ **`good-first-issues:&gt;2 javascript`**](https://github.com/search?utf8=%E2%9C%93&q=javascript+good-first-issues%3A%3E2&type=) 匹配具有两个以上标有 `good-first-issue` 的议题且包含“javascript”一词的存储库。
| `help-wanted-issues:>n`|[**help-wanted-issues:&gt;4 react**](https://github.com/search?utf8=%E2%9C%93&q=react+help-wanted-issues%3A%3E4&type=) 匹配具有四个以上标有 `help-wanted` 的议题且包含“React”一词的存储库。

## 基于赞助能力的搜索

可以使用 `is:sponsorable` 限定符搜索其所有者可以在 {% data variables.product.prodname_sponsors %} 上获得赞助的存储库。 有关详细信息，请参阅“[关于 {% data variables.product.prodname_sponsors %}](/sponsors/getting-started-with-github-sponsors/about-github-sponsors)”。

可以使用 `has:funding-file` 限定符搜索具有融资文件的存储库。 有关详细信息，请参阅“[关于融资文件](/github/administering-a-repository/managing-repository-settings/displaying-a-sponsor-button-in-your-repository#about-funding-files)”。

| 限定符  | 示例
| ------------- | -------------
| `is:sponsorable` | [**is:sponsorable**](https://github.com/search?q=is%3Asponsorable&type=Repositories) 匹配其所有者拥有 {% data variables.product.prodname_sponsors %} 配置文件的存储库。
| `has:funding-file` | [**has:funding-file**](https://github.com/search?q=has%3Afunding-file&type=Repositories) 匹配具有 FUNDING.yml 文件的存储库。

{% endif %}

## 延伸阅读

- “[对搜索结果进行排序](/search-github/getting-started-with-searching-on-github/sorting-search-results/)”
- “[在分支中搜索](/search-github/searching-on-github/searching-in-forks)”

---
title: 搜索仓库
intro: '您可以在 {% data variables.product.product_name %} 上搜索仓库，并使用这些仓库搜索限定符的任意组合缩小结果范围。'
redirect_from:
  - /articles/searching-repositories/
  - /articles/searching-for-repositories
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

您可以在所有 {% data variables.product.product_name %} 内全局搜索仓库，也可以在特定组织内搜索仓库。 更多信息请参阅“[关于在 {% data variables.product.prodname_dotcom %} 上搜索](/articles/about-searching-on-github)”。

要在搜索结果中包括复刻，您需要将 `fork:true` 或 `fork:only` 添加到查询。 更多信息请参阅“[在复刻中搜索](/articles/searching-in-forks)”。

{% data reusables.search.syntax_tips %}

### 按仓库名称、说明或自述文件内容搜索

通过 `in` 限定符，您可以将搜索限制为仓库名称、仓库说明、自述文件内容或这些的任意组合。 如果省略此限定符，则只搜索仓库名称和说明。

| 限定符               | 示例                                                                                                                                       |
| ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `in:name`         | [**jquery in:name**](https://github.com/search?q=jquery+in%3Aname&type=Repositories) 匹配其名称中含有 "jquery" 的仓库。                              |
| `in:description`  | [**jquery in:name,description**](https://github.com/search?q=jquery+in%3Aname%2Cdescription&type=Repositories) 匹配其名称或说明中含有 "jquery" 的仓库。 |
| `in:readme`       | [**jquery in:readme**](https://github.com/search?q=jquery+in%3Areadme&type=Repositories) 匹配其自述文件中提及 "jquery" 的仓库。                        |
| `repo:owner/name` | [**repo:octocat/hello-world**](https://github.com/search?q=repo%3Aoctocat%2Fhello-world) 匹配特定仓库名称。                                       |

### 基于仓库的内容搜索

您可以使用 `in:readme` 限定符，通过搜索其自述文件中的内容来查找仓库。

除了使用 `in:readme` 以外，无法通过搜索仓库内的特定内容来查找仓库。 要搜索仓库内的特定文件或内容，您可以使用查找器或代码特定的搜索限定符。 更多信息请参阅“[在 {% data variables.product.prodname_dotcom %} 上查找文件](/articles/finding-files-on-github)”和“[搜索代码](/articles/searching-code)”。

| 限定符         | 示例                                                                                                                   |
| ----------- | -------------------------------------------------------------------------------------------------------------------- |
| `in:readme` | [**octocat in:readme**](https://github.com/search?q=octocat+in%3Areadme&type=Repositories) 匹配其自述文件中提及 "octocat" 的仓库。 |

### 在用户或组织的仓库内搜索

要在特定用户或组织拥有的所有仓库中搜索，您可以使用 `user` 或 `org` 限定符。

| 限定符                       | 示例                                                                                                                                                   |
| ------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| <code>user:<em>USERNAME</em></code> | [**user:defunkt forks:&gt;100**](https://github.com/search?q=user%3Adefunkt+forks%3A%3E%3D100&type=Repositories) 匹配来自 @defunkt、拥有超过 100 复刻的仓库。 |
| <code>org:<em>ORGNAME</em></code> | [**org:github**](https://github.com/search?utf8=%E2%9C%93&q=org%3Agithub&type=Repositories) 匹配来自 GitHub 的仓库。                                         |

### 按仓库大小搜索

`size` 限定符使用[大于、小于和范围限定符](/articles/understanding-the-search-syntax)查找匹配特定大小（以千字节为单位）的仓库。

| 限定符                       | 示例                                                                                                             |
| ------------------------- | -------------------------------------------------------------------------------------------------------------- |
| <code>size:<em>n</em></code> | [**size:1000**](https://github.com/search?q=size%3A1000&type=Repositories) 匹配恰好为 1 MB 的仓库。                     |
|                           | [**size:&gt;=30000**](https://github.com/search?q=size%3A%3E%3D30000&type=Repositories) 匹配至少为 30 MB 的仓库。 |
|                           | [**size:&lt;50**](https://github.com/search?q=size%3A%3C50&type=Repositories) 匹配小于 50 KB 的仓库。            |
|                           | [**size:50..120**](https://github.com/search?q=size%3A50..120&type=Repositories) 匹配介于 50 KB 与 120 KB 之间的仓库。    |

### 按关注者数量搜索

您可以使用 `followers` 限定符以及[大于、小于和范围限定符](/articles/understanding-the-search-syntax)基于仓库拥有的关注者数量过滤仓库。

| 限定符                       | 示例                                                                                                                                                                          |
| ------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <code>followers:<em>n</em></code> | [**node followers:>=10000**](https://github.com/search?q=node+followers%3A%3E%3D10000) 匹配有 10,000 或更多关注者提及文字 "node" 的仓库。                                                    |
|                           | [**styleguide linter followers:1..10**](https://github.com/search?q=styleguide+linter+followers%3A1..10&type=Repositories) 匹配拥有 1 到 10 个关注者并且提及 "styleguide linter" 一词的的仓库。 |

### 按复刻数量搜索

`forks` 限定符使用[大于、小于和范围限定符](/articles/understanding-the-search-syntax)指定仓库应具有的复刻数量。

| 限定符                       | 示例                                                                                                             |
| ------------------------- | -------------------------------------------------------------------------------------------------------------- |
| <code>forks:<em>n</em></code> | [**forks:5**](https://github.com/search?q=forks%3A5&type=Repositories) 匹配只有 5 个复刻的仓库。                          |
|                           | [**forks:&gt;=205**](https://github.com/search?q=forks%3A%3E%3D205&type=Repositories) 匹配具有至少 205 个复刻的仓库。 |
|                           | [**forks:&lt;90**](https://github.com/search?q=forks%3A%3C90&type=Repositories) 匹配具有少于 90 个复刻的仓库。        |
|                           | [**forks:10..20**](https://github.com/search?q=forks%3A10..20&type=Repositories) 匹配具有 10 到 20 个复刻的仓库。          |

### 按星号数量搜索

您可以使用[大于、小于和范围限定符](/articles/understanding-the-search-syntax)基于仓库具有的[星标](/articles/saving-repositories-with-stars)数量搜索仓库

| 限定符                       | 示例                                                                                                                                                                                 |
| ------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <code>stars:<em>n</em></code> | [**stars:500**](https://github.com/search?utf8=%E2%9C%93&q=stars%3A500&type=Repositories) 匹配恰好具有 500 个星号的仓库。                                                                       |
|                           | [**stars:10..20**](https://github.com/search?q=stars%3A10..20+size%3A%3C1000&type=Repositories) 匹配具有 10 到 20 个星号、小于 1000 KB 的仓库。                                                   |
|                           | [**stars:&gt;=500 fork:true language:php**](https://github.com/search?q=stars%3A%3E%3D500+fork%3Atrue+language%3Aphp&type=Repositories) 匹配具有至少 500 个星号，包括复刻的星号（以 PHP 编写）的仓库。 |

### 按仓库创建或上次更新时间搜索

您可以基于创建时间或上次更新时间过滤仓库。 对于仓库创建，您可以使用 `created` 限定符；要了解仓库上次更新的时间，您要使用 `pushed` 限定符。 `pushed` 限定符将返回仓库列表，按仓库中任意分支上最近进行的提交排序。

两者均采用日期作为参数。 {% data reusables.time_date.date_format %} {% data reusables.time_date.time_format %}

{% data reusables.search.date_gt_lt %}

| 限定符                       | 示例                                                                                                                                                                                           |
| ------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <code>created:<em>YYYY-MM-DD</em></code> | [**webos created:&lt;2011-01-01**](https://github.com/search?q=webos+created%3A%3C2011-01-01&type=Repositories) 匹配具有 "webos" 字样、在 2011 年之前创建的仓库。                                       |
| <code>pushed:<em>YYYY-MM-DD</em></code> | [**css pushed:&gt;2013-02-01**](https://github.com/search?utf8=%E2%9C%93&q=css+pushed%3A%3E2013-02-01&type=Repositories) 匹配具有 "css" 字样、在 2013 年 1 月之后收到推送的仓库。                          |
|                           | [**case pushed:&gt;=2013-03-06 fork:only**](https://github.com/search?q=case+pushed%3A%3E%3D2013-03-06+fork%3Aonly&type=Repositories) 匹配具有 "case" 字样、在 2013 年 3 月 6 日或之后收到推送并且作为复刻的仓库。 |

### 按语言搜索

您可以基于其编写采用的主要语言搜索仓库。

| 限定符                       | 示例                                                                                                                                             |
| ------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| <code>language:<em>LANGUAGE</em></code> | [**rails language:javascript**](https://github.com/search?q=rails+language%3Ajavascript&type=Repositories) 匹配具有 "rails" 字样、以 JavaScript 编写的仓库。 |

### 按主题搜索

您可以查找归类为特定[主题](/articles/classifying-your-repository-with-topics)的所有仓库。

| 限定符                       | 示例                                                                                                                                      |
| ------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| <code>topic:<em>TOPIC</em></code> | [**topic:jekyll**](https://github.com/search?utf8=%E2%9C%93&q=topic%3Ajekyll&type=Repositories&ref=searchresults)匹配已归类为 "jekyll" 主题的仓库。 |

### 按主题数量搜索

您可以使用 `topics` 限定符以及[大于、小于和范围限定符](/articles/understanding-the-search-syntax)按应用于仓库的[主题](/articles/classifying-your-repository-with-topics)数量搜索仓库。

| 限定符                        | 示例                                                                                                                         |
| -------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| <code>topics:<em>n</em></code> | [**topics:5**](https://github.com/search?utf8=%E2%9C%93&q=topics%3A5&type=Repositories&ref=searchresults) 匹配具有五个主题的仓库。     |
|                            | [**topics:>3**](https://github.com/search?utf8=%E2%9C%93&q=topics%3A%3E3&type=Repositories&ref=searchresults) 匹配超过三个主题的仓库。 |

### 按许可搜索

您可以按其[许可](/articles/licensing-a-repository)搜索仓库。 您必须使用[许可关键词](/articles/licensing-a-repository/#searching-github-by-license-type)按特定许可或许可系列过滤仓库。

| 限定符                        | 示例                                                                                                                                                           |
| -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| <code>license:<em>LICENSE_KEYWORD</em></code> | [**license:apache-2.0**](https://github.com/search?utf8=%E2%9C%93&q=license%3Aapache-2.0&type=Repositories&ref=searchresults) 匹配根据 Apache License 2.0 授权的仓库。 |

### 按公共或私有仓库搜索

您可以基于仓库是公共还是私有来过滤搜索。

| 限定符          | 示例                                                                                                                                   |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| `is:public`  | [**is:public org:github**](https://github.com/search?q=is%3Apublic+org%3Agithub&type=Repositories&utf8=%E2%9C%93) 匹配 GitHub 拥有的公共仓库。 |
| `is:private` | [**is:private pages**](https://github.com/search?utf8=%E2%9C%93&q=pages+is%3Aprivate&type=Repositories) 匹配您有访问权限且包含 "pages" 字样的私有仓库。 |

{% if currentVersion == "free-pro-team@latest" %}

### 基于仓库是否为镜像搜索

您可以根据仓库是否为镜像以及托管于其他位置托管来搜索它们。 更多信息请参阅“[寻找在 {% data variables.product.prodname_dotcom %} 上参与开源项目的方法](/github/getting-started-with-github/finding-ways-to-contribute-to-open-source-on-github)”。

| 限定符            | 示例                                                                                                                       |
| -------------- | ------------------------------------------------------------------------------------------------------------------------ |
| `mirror:true`  | [**mirror:true GNOME**](https://github.com/search?utf8=%E2%9C%93&q=mirror%3Atrue+GNOME&type=) 匹配是镜像且包含 "GNOME" 字样的仓库。    |
| `mirror:false` | [**mirror:false GNOME**](https://github.com/search?utf8=%E2%9C%93&q=mirror%3Afalse+GNOME&type=) 匹配并非镜像且包含 "GNOME" 字样的仓库。 |

{% endif %}

### 基于仓库是否已存档搜索

您可以基于仓库是否[已存档](/articles/about-archiving-repositories)来搜索仓库。

| 限定符              | 示例                                                                                                                          |
| ---------------- | --------------------------------------------------------------------------------------------------------------------------- |
| `archived:true`  | [**archived:true GNOME**](https://github.com/search?utf8=%E2%9C%93&q=archived%3Atrue+GNOME&type=) 匹配已存档且包含 "GNOME" 字样的仓库。   |
| `archived:false` | [**archived:false GNOME**](https://github.com/search?utf8=%E2%9C%93&q=archived%3Afalse+GNOME&type=) 匹配未存档且包含 "GNOME" 字样的仓库。 |

{% if currentVersion == "free-pro-team@latest" %}
### 基于具有 `good first issue` 或 `help wanted` 标签的议题数量搜索

您可以使用限定符 `help-wanted-issues:>n` 和 `good-first-issues:>n` 搜索具有最少数量标签为 `help-wanted` 或 `good-first-issue` 议题的仓库。 更多信息请参阅“[通过标签鼓励对项目做出有益的贡献](/github/building-a-strong-community/encouraging-helpful-contributions-to-your-project-with-labels)”。

| 限定符                        | 示例                                                                                                                                                                                             |
| -------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `good-first-issues:>n`  | [**good-first-issues:&gt;2 javascript**](https://github.com/search?utf8=%E2%9C%93&q=javascript+good-first-issues%3A%3E2&type=) 匹配具有超过两个标签为 `good-first-issue` 的议题且包含 "javascript" 字样的仓库。 |
| `help-wanted-issues:>n` | [**help-wanted-issues:&gt;4 react**](https://github.com/search?utf8=%E2%9C%93&q=react+help-wanted-issues%3A%3E4&type=) 匹配具有超过四个标签为 `help-wanted` 的议题且包含 "React" 字样的仓库。                   |
{% endif %}

### 延伸阅读

- “[排序搜索结果](/articles/sorting-search-results/)”
- “[在复刻中搜索](/articles/searching-in-forks)”

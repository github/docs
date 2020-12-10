---
title: 搜索仓库
intro: '您可以在 {% data variables.product.product_name %} 上搜索仓库，并使用这些仓库搜索限定符的任意组合缩小结果范围。'
redirect_from:
  - /articles/searching-repositories/
  - /articles/searching-for-repositories
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

您可以在所有 {% data variables.product.product_location %} 内全局搜索仓库，也可以在特定组织内搜索仓库。 更多信息请参阅“[关于在 {% data variables.product.prodname_dotcom %} 上搜索](/articles/about-searching-on-github)”。

要在搜索结果中包括复刻，您需要将 `fork:true` 或 `fork:only` 添加到查询。 更多信息请参阅“[在复刻中搜索](/articles/searching-in-forks)”。

{% data reusables.search.syntax_tips %}

### 按仓库名称、说明或自述文件内容搜索

通过 `in` 限定符，您可以将搜索限制为仓库名称、仓库说明、自述文件内容或这些的任意组合。 如果省略此限定符，则只搜索仓库名称和说明。

| 限定符               | 示例                                                                                                                                                                                       |
| ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `in:name`         | [**jquery in:name**](https://github.com/search?q=jquery+in%3Aname&type=Repositories) matches repositories with "jquery" in the repository name.                                          |
| `in:description`  | [**jquery in:name,description**](https://github.com/search?q=jquery+in%3Aname%2Cdescription&type=Repositories) matches repositories with "jquery" in the repository name or description. |
| `in:readme`       | [**jquery in:readme**](https://github.com/search?q=jquery+in%3Areadme&type=Repositories) matches repositories mentioning "jquery" in the repository's README file.                       |
| `repo:owner/name` | [**repo:octocat/hello-world**](https://github.com/search?q=repo%3Aoctocat%2Fhello-world) 匹配特定仓库名称。                                                                                       |

### 基于仓库的内容搜索

You can find a repository by searching for content in the repository's README file using the `in:readme` qualifier. 更多信息请参阅“[关于自述文件](/github/creating-cloning-and-archiving-repositories/about-readmes)”。

除了使用 `in:readme` 以外，无法通过搜索仓库内的特定内容来查找仓库。 要搜索仓库内的特定文件或内容，您可以使用查找器或代码特定的搜索限定符。 更多信息请参阅“[在 {% data variables.product.prodname_dotcom %} 上查找文件](/articles/finding-files-on-github)”和“[搜索代码](/articles/searching-code)”。

| 限定符         | 示例                                                                                                                                                                    |
| ----------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `in:readme` | [**octocat in:readme**](https://github.com/search?q=octocat+in%3Areadme&type=Repositories) matches repositories mentioning "octocat" in the repository's README file. |

### 在用户或组织的仓库内搜索

要在特定用户或组织拥有的所有仓库中搜索，您可以使用 `user` 或 `org` 限定符。

| 限定符                       | 示例                                                                                                                                                   |
| ------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| <code>user:<em>USERNAME</em></code> | [**user:defunkt forks:&gt;100**](https://github.com/search?q=user%3Adefunkt+forks%3A%3E%3D100&type=Repositories) 匹配来自 @defunkt、拥有超过 100 复刻的仓库。 |
| <code>org:<em>ORGNAME</em></code> | [**org:github**](https://github.com/search?utf8=%E2%9C%93&q=org%3Agithub&type=Repositories) 匹配来自 GitHub 的仓库。                                         |

### 按仓库大小搜索

The `size` qualifier finds repositories that match a certain size (in kilobytes), using greater than, less than, and range qualifiers. For more information, see "[Understanding the search syntax](/github/searching-for-information-on-github/understanding-the-search-syntax)."

| 限定符                       | 示例                                                                                                             |
| ------------------------- | -------------------------------------------------------------------------------------------------------------- |
| <code>size:<em>n</em></code> | [**size:1000**](https://github.com/search?q=size%3A1000&type=Repositories) 匹配恰好为 1 MB 的仓库。                     |
|                           | [**size:&gt;=30000**](https://github.com/search?q=size%3A%3E%3D30000&type=Repositories) 匹配至少为 30 MB 的仓库。 |
|                           | [**size:&lt;50**](https://github.com/search?q=size%3A%3C50&type=Repositories) 匹配小于 50 KB 的仓库。            |
|                           | [**size:50..120**](https://github.com/search?q=size%3A50..120&type=Repositories) 匹配介于 50 KB 与 120 KB 之间的仓库。    |

### 按关注者数量搜索

You can filter repositories based on the number of users who follow the repositories, using the `followers` qualifier with greater than, less than, and range qualifiers. For more information, see "[Understanding the search syntax](/github/searching-for-information-on-github/understanding-the-search-syntax)."

| 限定符                       | 示例                                                                                                                                                                          |
| ------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <code>followers:<em>n</em></code> | [**node followers:>=10000**](https://github.com/search?q=node+followers%3A%3E%3D10000) 匹配有 10,000 或更多关注者提及文字 "node" 的仓库。                                                    |
|                           | [**styleguide linter followers:1..10**](https://github.com/search?q=styleguide+linter+followers%3A1..10&type=Repositories) 匹配拥有 1 到 10 个关注者并且提及 "styleguide linter" 一词的的仓库。 |

### 按复刻数量搜索

The `forks` qualifier specifies the number of forks a repository should have, using greater than, less than, and range qualifiers. For more information, see "[Understanding the search syntax](/github/searching-for-information-on-github/understanding-the-search-syntax)."

| 限定符                       | 示例                                                                                                             |
| ------------------------- | -------------------------------------------------------------------------------------------------------------- |
| <code>forks:<em>n</em></code> | [**forks:5**](https://github.com/search?q=forks%3A5&type=Repositories) 匹配只有 5 个复刻的仓库。                          |
|                           | [**forks:&gt;=205**](https://github.com/search?q=forks%3A%3E%3D205&type=Repositories) 匹配具有至少 205 个复刻的仓库。 |
|                           | [**forks:&lt;90**](https://github.com/search?q=forks%3A%3C90&type=Repositories) 匹配具有少于 90 个复刻的仓库。        |
|                           | [**forks:10..20**](https://github.com/search?q=forks%3A10..20&type=Repositories) 匹配具有 10 到 20 个复刻的仓库。          |

### 按星号数量搜索

You can search repositories based on the number of stars the repositories have, using greater than, less than, and range qualifiers. For more information, see "[Saving repositories with stars](/github/getting-started-with-github/saving-repositories-with-stars)" and "[Understanding the search syntax](/github/searching-for-information-on-github/understanding-the-search-syntax)."

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

You can search repositories based on the language of the code in the repositories.

| 限定符                       | 示例                                                                                                                                             |
| ------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| <code>language:<em>LANGUAGE</em></code> | [**rails language:javascript**](https://github.com/search?q=rails+language%3Ajavascript&type=Repositories) 匹配具有 "rails" 字样、以 JavaScript 编写的仓库。 |

### 按主题搜索

You can find all of the repositories that are classified with a particular topic. 更多信息请参阅“[使用主题对仓库分类](/github/administering-a-repository/classifying-your-repository-with-topics)”。

| 限定符                       | 示例                                                                                                                                      |
| ------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| <code>topic:<em>TOPIC</em></code> | [**topic:jekyll**](https://github.com/search?utf8=%E2%9C%93&q=topic%3Ajekyll&type=Repositories&ref=searchresults)匹配已归类为 "jekyll" 主题的仓库。 |

### 按主题数量搜索

You can search repositories by the number of topics that have been applied to the repositories, using the `topics` qualifier along with greater than, less than, and range qualifiers. For more information, see "[Classifying your repository with topics](/github/administering-a-repository/classifying-your-repository-with-topics)" and "[Understanding the search syntax](/github/searching-for-information-on-github/understanding-the-search-syntax)."

| 限定符                        | 示例                                                                                                                         |
| -------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| <code>topics:<em>n</em></code> | [**topics:5**](https://github.com/search?utf8=%E2%9C%93&q=topics%3A5&type=Repositories&ref=searchresults) 匹配具有五个主题的仓库。     |
|                            | [**topics:>3**](https://github.com/search?utf8=%E2%9C%93&q=topics%3A%3E3&type=Repositories&ref=searchresults) 匹配超过三个主题的仓库。 |

{% if currentVersion == "free-pro-team@latest" or enterpriseServerVersions contains currentVersion %}

### 按许可搜索

You can search repositories by the type of license in the repositories. You must use a license keyword to filter repositories by a particular license or license family. 更多信息请参阅“[许可仓库](/github/creating-cloning-and-archiving-repositories/licensing-a-repository)”。

| 限定符                        | 示例                                                                                                                                                           |
| -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| <code>license:<em>LICENSE_KEYWORD</em></code> | [**license:apache-2.0**](https://github.com/search?utf8=%E2%9C%93&q=license%3Aapache-2.0&type=Repositories&ref=searchresults) 匹配根据 Apache License 2.0 授权的仓库。 |

{% endif %}

### Search by repository visibility

You can filter your search based on the visibility of the repositories. 更多信息请参阅“[关于仓库可见性](/github/creating-cloning-and-archiving-repositories/about-repository-visibility)”。

| Qualifier  | Example | ------------- | ------------- |{% if currentVersion == "free-pro-team@latest" or enterpriseServerVersions contains currentVersion %} | `is:public` | [**is:public org:github**](https://github.com/search?q=is%3Apublic+org%3Agithub&type=Repositories) matches public repositories owned by {% data variables.product.company_short %}.{% endif %} | `is:internal` | [**is:internal test**](https://github.com/search?q=is%3Ainternal+test&type=Repositories) matches internal repositories that you can access and contain the word "test". | `is:private` | [**is:private pages**](https://github.com/search?q=is%3Aprivate+pages&type=Repositories) matches private repositories that you can access and contain the word "pages."

{% if currentVersion == "free-pro-team@latest" %}

### 基于仓库是否为镜像搜索

You can search repositories based on whether the repositories are mirrors and hosted elsewhere. 更多信息请参阅“[寻找在 {% data variables.product.prodname_dotcom %} 上参与开源项目的方法](/github/getting-started-with-github/finding-ways-to-contribute-to-open-source-on-github)”。

| 限定符            | 示例                                                                                                                                                                      |
| -------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `mirror:true`  | [**mirror:true GNOME**](https://github.com/search?utf8=%E2%9C%93&q=mirror%3Atrue+GNOME&type=) matches repositories that are mirrors and contain the word "GNOME."       |
| `mirror:false` | [**mirror:false GNOME**](https://github.com/search?utf8=%E2%9C%93&q=mirror%3Afalse+GNOME&type=) matches repositories that are not mirrors and contain the word "GNOME." |

{% endif %}

### 基于仓库是否已存档搜索

You can search repositories based on whether or not the repositories are archived. For more information, see "[About archiving repositories](/github/creating-cloning-and-archiving-repositories/about-archiving-repositories)."

| 限定符              | 示例                                                                                                                                                                           |
| ---------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `archived:true`  | [**archived:true GNOME**](https://github.com/search?utf8=%E2%9C%93&q=archived%3Atrue+GNOME&type=) matches repositories that are archived and contain the word "GNOME."       |
| `archived:false` | [**archived:false GNOME**](https://github.com/search?utf8=%E2%9C%93&q=archived%3Afalse+GNOME&type=) matches repositories that are not archived and contain the word "GNOME." |

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

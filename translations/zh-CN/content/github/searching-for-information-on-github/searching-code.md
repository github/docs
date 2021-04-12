---
title: 搜索代码
intro: '您可以在 {% data variables.product.product_name %} 上搜索代码，并使用这些代码搜索限定符的任意组合缩小结果范围。'
redirect_from:
  - /articles/searching-code
  - /github/searching-for-information-on-github/searching-files-in-a-repository-for-exact-matches
  - /github/searching-for-information-on-github/searching-code-for-exact-matches
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - github 搜索
---

{% data reusables.search.you-can-search-globally %} 更多信息请参阅“[关于在 GitHub 上搜索](/articles/about-searching-on-github)”。

您只能使用这些代码搜索限定符搜索代码。 搜索代码时，专用于仓库、用户或提交的搜索限定符将不起作用。

{% data reusables.search.syntax_tips %}

### 代码搜索的注意事项

由于搜索代码的复杂性，执行搜索的方式有一些限制：

{% if currentVersion == "free-pro-team@latest" or enterpriseServerVersions contains currentVersion %}
- {% data reusables.search.required_login %}{% endif %}
- [复刻](/articles/about-forks)中的代码仅当复刻的星号超过父级仓库时可搜索。 星号少于父仓库的复刻**不**为代码搜索编索引。 要在搜索结果中包括星号比其父项多的复刻，您需要将 `fork:true` 或 `fork:only` 添加到查询。 更多信息请参阅“[在复刻中搜索](/articles/searching-in-forks)”。
- 只有_默认分支_被索引用于代码搜索。{% if currentVersion == "free-pro-team@latest" %}
- 只有小于 384 KB 的文件可搜索。{% else %}* 只有小于 5 MB 的文件可搜索。
- 只有每个文件的前 500 KB 可搜索。{% endif %}
- 只能搜索少于 500,000 个文件的仓库。{% if currentVersion == "free-pro-team@latest" %}
- 只能搜索去年有活动或已在搜索结果中返回的仓库。{% endif %}
- 除了 [`filename`](#search-by-filename) 搜索以外，搜索源代码时必须始终包括至少一个搜索词。 例如，搜索 [`language:javascript`](https://github.com/search?utf8=%E2%9C%93&q=language%3Ajavascript&type=Code&ref=searchresults) 无效，而搜索 [`amazing language:javascript`](https://github.com/search?utf8=%E2%9C%93&q=amazing+language%3Ajavascript&type=Code&ref=searchresults) 有效。
- 搜索结果最多可显示同一文件的两个分段，但文件内可能有更多结果。
- 您无法使用以下通配符作为搜索查询的一部分：<code>. , : ; / \ ` ' " = * ! ? # $ & + ^ | ~ < > ( ) { } [ ]</code>. 搜索只会忽略这些符号。

### 按文件内容或文件路径搜索

使用 `in` 限定符，您可以将搜索限制为源代码文件的内容、文件路径或两者。 如果省略此限定符，则只搜索文件内容。

| 限定符       | 示例                                                                                                                       |
| --------- | ------------------------------------------------------------------------------------------------------------------------ |
| `in:file` | [**octocat in:file**](https://github.com/search?q=octocat+in%3Afile&type=Code) 匹配文件内容中出现 "octocat" 的代码。                  |
| `in:path` | [**octocat in:path**](https://github.com/search?q=octocat+in%3Apath&type=Code) 匹配文件路径中出现 "octocat" 的代码。                  |
|           | [**octocat in:file,path**](https://github.com/search?q=octocat+in%3Afile%2Cpath&type=Code) 匹配文件内容或文件路径中出现 "octocat" 的代码。 |

### 在用户或组织的仓库内搜索

要在特定用户或组织拥有的所有仓库中搜索代码，您可以使用 `user` 或 `org` 限定符。 要在特定仓库中搜索代码，您可以使用 `repo` 限定符。

| 限定符                       | 示例                                                                                                                                                                                 |
| ------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <code>user:<em>USERNAME</em></code> | [**user:defunkt extension:rb**](https://github.com/search?q=user%3Agithub+extension%3Arb&type=Code) 匹配来自 @defunkt、以 <em>.rb</em> 结尾的代码。                                 |
| <code>org:<em>ORGNAME</em></code> | [**org:github extension:js**](https://github.com/search?utf8=%E2%9C%93&q=org%3Agithub+extension%3Ajs&type=Code) 匹配来自 GitHub、以 <em>.js</em> 结尾的代码。                       |
| <code>repo:<em>USERNAME/REPOSITORY</em></code> | [**repo:mozilla/shumway extension:as**](https://github.com/search?q=repo%3Amozilla%2Fshumway+extension%3Aas&type=Code) 匹配来自 @mozilla 的 shumway 项目、以 <em>.as</em> 结尾的代码。 |

### 按文件位置搜索

您可使用 `path` 限定符搜索仓库中特定位置显示的源代码。 使用 `path:/` 可搜索位于仓库根目录级别的文件。 或者，指定目录名称或目录路径以搜索位于该命令或其任何子目录中的文件。

| 限定符                        | 示例                                                                                                                                                                                                                                                        |
| -------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <code>path:/</code>  | [**octocat filename:readme path:/**](https://github.com/search?utf8=%E2%9C%93&q=octocat+filename%3Areadme+path%3A%2F&type=Code) 匹配位于仓库根目录级别且含有 "octocat" 字样的 _readme_ 文件。                                                                                 |
| <code>path:<em>DIRECTORY</em></code>  | [**form path:cgi-bin language:perl**](https://github.com/search?q=form+path%3Acgi-bin+language%3Aperl&type=Code) 匹配位于 <em>cgi-bin</em> 目录或其任何子目录中且含有 "form" 字样的 Perl 文件。                                                                           |
| <code>path:<em>PATH/TO/DIRECTORY</em></code> | [**console path:app/public language:javascript**](https://github.com/search?q=console+path%3A%22app%2Fpublic%22+language%3Ajavascript&type=Code) 匹配 <em>app/public</em> 目录或其任何子目录（即使其位于 <em>app/public/js/form-validators</em> 中）中且含有 "console" 字样的 JavaScript 文件。 |

### 按语言搜索

您可以基于所编写的语言搜索代码。

| 限定符                        | 示例                                                                                                                                                               |
| -------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <code>language:<em>LANGUAGE</em></code> | [**element language:xml size:100**](https://github.com/search?q=element+language%3Axml+size%3A100&type=Code) 匹配标记为 XML 且恰好有 100 个字节的并含有 "element" 字样的代码。         |
|                            | [**display language:scss**](https://github.com/search?q=display+language%3Ascss&type=Code) 匹配标记为 SCSS 且含有 "display" 字样的代码。                                       |
|                            | [**org:mozilla language:markdown**](https://github.com/search?utf8=%E2%9C%93&q=org%3Amozilla+language%3Amarkdown&type=Code) 匹配标记为 Markdown 且来自所有 @mozilla 仓库的代码。 |

### 按文件大小搜索

您可以使用 `size` 限定符基于代码所在文件的大小搜索源代码。 `size` 限定符使用[大于、小于和范围限定符](/articles/understanding-the-search-syntax)基于在其中找到代码的文件的字节大小来过滤结果。

| 限定符                        | 示例                                                                                                                                                                                       |
| -------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <code>size:<em>n</em></code> | [**function size:&gt;10000 language:python**](https://github.com/search?q=function+size%3A%3E10000+language%3Apython&type=Code) 匹配含有 "function" 字样、以 Python 编写、位于大于 10 KB 的文件中的代码。 |

### 按文件名搜索

`filename` 限定符匹配具有特定文件名的代码文件。 您还可以使用文件查找器在仓库中查找文件。 更多信息请参阅“[在 GitHub 上查找文件](/articles/finding-files-on-github)”。

| 限定符                        | 示例                                                                                                                                                                                             |
| -------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <code>filename:<em>FILENAME</em></code> | [**filename:linguist**](https://github.com/search?utf8=%E2%9C%93&q=filename%3Alinguist&type=Code) 匹配名为 "linguist" 的文件。                                                                         |
|                            | [**filename:.vimrc commands**](https://github.com/search?q=filename%3A.vimrc+commands&type=Code) 匹配含有 "commands" 字样的 *.vimrc* 文件。                                                              |
|                            | [**filename:test_helper path:test language:ruby**](https://github.com/search?q=minitest+filename%3Atest_helper+path%3Atest+language%3Aruby&type=Code) 匹配 *test* 目录内名为 *test_helper* 的 Ruby 文件。 |

### 按文件扩展名搜索

`extension` 限定符匹配具有特定文件扩展名的代码文件。

| 限定符                        | 示例                                                                                                                                                                                                |
| -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <code>extension:<em>EXTENSION</em></code> | [**form path:cgi-bin extension:pm**](https://github.com/search?q=form+path%3Acgi-bin+extension%3Apm&type=Code) 匹配含有 "form" 字样、位于 <em>cgi-bin</em> 下且具有 <em>.pm</em> 文件扩展名的代码。 |
|                            | [**icon size:>200000 extension:css**](https://github.com/search?utf8=%E2%9C%93&q=icon+size%3A%3E200000+extension%3Acss&type=Code) 匹配大于 200 KB、以 .css 结尾且含有 "icon" 字样的文件。                          |

### 延伸阅读

- “[排序搜索结果](/articles/sorting-search-results/)”
- "[在复刻中搜索](/articles/searching-in-forks)"{% if currentVersion == "free-pro-team@latest" %}
- "[在 {% data variables.product.prodname_dotcom %} 上导航代码](/github/managing-files-in-a-repository/navigating-code-on-github)"{% endif %}

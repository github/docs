---
title: 搜索代码
intro: '您可以在 {% data variables.product.product_name %} 上搜索代码，并使用这些代码搜索限定符的任意组合缩小结果范围。'
redirect_from:
  - /articles/searching-code
  - /github/searching-for-information-on-github/searching-files-in-a-repository-for-exact-matches
  - /github/searching-for-information-on-github/searching-code-for-exact-matches
  - /github/searching-for-information-on-github/searching-code
  - /github/searching-for-information-on-github/searching-on-github/searching-code
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - GitHub search
ms.openlocfilehash: 125c17f1050cdb6d1b1d5a3d58d3e513eddce40f
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 11/09/2022
ms.locfileid: '148159522'
---
{% ifversion github-code-search %} {% note %}

  注意：{% data reusables.search.classic-search-code-search-note %}

  {% endnote %} {% endif %}

{% data reusables.search.you-can-search-globally %} 有关详细信息，请参阅“[关于在 GitHub 上搜索](/search-github/getting-started-with-searching-on-github/about-searching-on-github)”。

您只能使用这些代码搜索限定符搜索代码。 搜索代码时，专用于仓库、用户或提交的搜索限定符将不起作用。

{% data reusables.search.syntax_tips %}

## 代码搜索的注意事项

由于搜索代码的复杂性，执行搜索的方式有一些限制：

{% ifversion fpt or ghes or ghec %}
- {% data reusables.search.required_login %}{% endif %}
- [分叉](/pull-requests/collaborating-with-pull-requests/working-with-forks/about-forks)中的代码仅当分叉有多于父级存储库的星时可搜索。 如果分叉的星少于父级存储库，则分叉没有针对代码搜索编制索引。 若要在搜索结果中包含星数多于其父级的分叉，需要将 `fork:true` 或 `fork:only` 添加到查询中。 有关详细信息，请参阅“[在分支中搜索](/search-github/searching-on-github/searching-in-forks)”。
- 仅默认分支针对代码搜索编制了索引。{% ifversion fpt or ghec %}
- 只有小于 384 KB 的文件可搜索。{% else %}* 只有小于 5 MB 的文件可搜索。
- 只有每个文件的前 500 KB 可搜索。{% endif %}
- 可搜索多达 4000 个专用 {% ifversion ghec or ghes or ghae %} 和内部{% endif %} 存储库。 这 4000 个存储库将是你有权访问的前 10000 个专用{% ifversion ghec or ghes or ghae %} 和内部{% endif %} 存储库中最近更新的存储库。
- 只有文件少于 500,000 个的存储库可搜索。{% ifversion fpt or ghec %}
- 只能搜索去年有活动或已在搜索结果中返回的仓库。{% endif %}
- 除 [`filename`](#search-by-filename) 搜索外，在搜索源代码时，必须始终至少包含一个搜索词。 例如，搜索 [`language:javascript`](https://github.com/search?utf8=%E2%9C%93&q=language%3Ajavascript&type=Code&ref=searchresults) 是无效的，而搜索 [`amazing language:javascript`](https://github.com/search?utf8=%E2%9C%93&q=amazing+language%3Ajavascript&type=Code&ref=searchresults) 是有效的。
- 搜索结果最多可显示同一文件的两个分段，但文件内可能有更多结果。
- 无法使用以下通配符作为搜索查询的一部分：<code>. , : ; / \ ` ' " = * ! ? # $ & + ^ | ~ < > ( ) { } [ ] @</code>。 搜索只会忽略这些符号。

## 按文件内容或文件路径搜索

通过使用 `in` 限定符，可以将搜索限制为源代码文件的内容和/或文件路径。 如果省略此限定符，则只搜索文件内容。

| 限定符  | 示例
| ------------- | -------------
| `in:file` | [**octocat in:file**](https://github.com/search?q=octocat+in%3Afile&type=Code) 匹配“octocat”在文件内容中出现的代码。
| `in:path` | [**octocat in:path**](https://github.com/search?q=octocat+in%3Apath&type=Code) 匹配“octocat”在文件路径中出现的代码。
| | [**octocat in:file,path**](https://github.com/search?q=octocat+in%3Afile%2Cpath&type=Code) 匹配“octocat”在文件内容或文件路径中出现的代码。

## 在用户或组织的仓库内搜索

若要在特定用户或组织拥有的所有存储库中搜索代码，可使用 `user` 或 `org` 限定符。 要在特定存储库中搜索代码，可使用 `repo` 限定符。

| 限定符  | 示例
| ------------- | -------------
| <code>user:<em>USERNAME</em></code> | [**user:defunkt extension:rb**](https://github.com/search?q=user%3Agithub+extension%3Arb&type=Code) 匹配 @defunkt 中以 <em>.rb</em> 结尾的代码。
| <code>org:<em>ORGNAME</em></code> |[**org:github extension:js**](https://github.com/search?utf8=%E2%9C%93&q=org%3Agithub+extension%3Ajs&type=Code) 匹配 GitHub 中以 <em>.js</em> 结尾的代码。
| <code>repo:<em>USERNAME/REPOSITORY</em></code> | [**repo:mozilla/shumway extension:as**](https://github.com/search?q=repo%3Amozilla%2Fshumway+extension%3Aas&type=Code) 匹配 @mozilla 的 shumway 项目中以 <em>.as</em> 结尾的代码。

## 按文件位置搜索

可使用 `path` 限定符搜索存储库中特定位置显示的源代码。 使用 `path:/` 可搜索位于存储库根目录级别的文件。 或者，指定目录名称或目录路径以搜索位于该命令或其任何子目录中的文件。

| 限定符  | 示例
| ------------- | -------------
| <code>path:/</code> | [**octocat filename:readme path:/**](https://github.com/search?utf8=%E2%9C%93&q=octocat+filename%3Areadme+path%3A%2F&type=Code) 匹配位于存储库的根级别的包含“octocat”一词的自述文件。
| <code>path:<em>DIRECTORY</em></code> | [**form path:cgi-bin language:perl**](https://github.com/search?q=form+path%3Acgi-bin+language%3Aperl&type=Code) 匹配 cgi-bin 目录或其任何子目录中包含“form”一词的 Perl 文件。
| <code>path:<em>PATH/TO/DIRECTORY</em></code> | [ **`console path:app/public language:javascript`**](https://github.com/search?q=console+path%3A%22app%2Fpublic%22+language%3Ajavascript&type=Code) 匹配 app/public 目录或其任何子目录（即使它们位于 app/public/js/form-validators）中的具有“console”一词的 JavaScript 文件。

## 按语言搜索

您可以基于所编写的语言搜索代码。 `language` 限定符可以是语言名称或别名。 有关支持的语言及其名称和别名的完整列表，请参阅 [github/linguist 存储库](https://github.com/github/linguist/blob/master/lib/linguist/languages.yml)。

| 限定符  | 示例
| ------------- | -------------
| <code>language:<em>LANGUAGE</em></code> | [**element language:xml size:100**](https://github.com/search?q=element+language%3Axml+size%3A100&type=Code) 匹配标记为 XML 且刚好有 100 个字节的包含“element”一词的代码。
| | [**display language:scss**](https://github.com/search?q=display+language%3Ascss&type=Code) 匹配标记为 SCSS 的具有单词“display”的代码。
| | [**org:mozilla language:markdown**](https://github.com/search?utf8=%E2%9C%93&q=org%3Amozilla+language%3Amarkdown&type=Code) 匹配标记为 Markdown 的来自所有 @mozilla 存储库的代码。

## 按文件大小搜索

可以使用 `size` 限定符基于代码所在文件的大小搜索源代码。 `size` 限定符使用[大于、小于和范围限定符](/search-github/getting-started-with-searching-on-github/understanding-the-search-syntax)根据找到代码的文件的字节大小筛选结果。

| 限定符  | 示例
| ------------- | -------------
| <code>size:<em>n</em></code> | [**function size:&gt;10000 language:python**](https://github.com/search?q=function+size%3A%3E10000+language%3Apython&type=Code) 匹配采用 Python 编写的位于大于 10 KB 的文件中的包含“function”一词的代码。

## 按文件名搜索

`filename` 限定符匹配具有特定文件名的代码文件。 您还可以使用文件查找器在仓库中查找文件。 有关详细信息，请参阅“[在 GitHub 上查找文件](/search-github/searching-on-github/finding-files-on-github)”。

| 限定符  | 示例
| ------------- | -------------
| <code>filename:<em>FILENAME</em></code> | [**filename:linguist**](https://github.com/search?utf8=%E2%9C%93&q=filename%3Alinguist&type=Code) 匹配名为“linguist”的文件。
| | [**filename:.vimrc commands**](https://github.com/search?q=filename%3A.vimrc+commands&type=Code) 匹配具有“commands”一词的 .vimrc 文件。
| | [**filename:test_helper path:test language:ruby**](https://github.com/search?q=minitest+filename%3Atest_helper+path%3Atest+language%3Aruby&type=Code) 匹配 test 目录中名为 test_helper 的 Ruby 文件 。

## 按文件扩展名搜索

`extension` 限定符匹配具有特定文件扩展名的代码文件。

| 限定符  | 示例
| ------------- | -------------
| <code>extension:<em>EXTENSION</em></code> | [**form path:cgi-bin extension:pm**](https://github.com/search?q=form+path%3Acgi-bin+extension%3Apm&type=Code) 匹配 cgi-bin 下具有 .pm 文件扩展名的包含“form”一词的代码
| | [**icon size:>200000 extension:css**](https://github.com/search?utf8=%E2%9C%93&q=icon+size%3A%3E200000+extension%3Acss&type=Code) 匹配大于 200 KB 的以 .css 结尾的包含“icon”一词的文件。

## 延伸阅读

- “[对搜索结果进行排序](/search-github/getting-started-with-searching-on-github/sorting-search-results/)”
- “[在分叉中搜索](/search-github/searching-on-github/searching-in-forks)”{% ifversion fpt or ghec %}
- “[在 {% data variables.product.prodname_dotcom %} 上导航代码](/github/managing-files-in-a-repository/navigating-code-on-github)”{% endif %}

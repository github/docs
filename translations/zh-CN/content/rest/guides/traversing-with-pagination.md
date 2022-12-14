---
title: 使用分页遍历
intro: 通过一些使用搜索 API 的示例，探讨如何使用分页来管理响应。
redirect_from:
- /guides/traversing-with-pagination
- /v3/guides/traversing-with-pagination
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
- API
shortTitle: Traverse with pagination
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: 92173dffdf2c50bdcd2b10fa42ef634683a3e149
ms.sourcegitcommit: d1d7ccc513192fdd0fc27bb49dc9c85108119b91
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 11/21/2022
ms.locfileid: "148179527"
---
{% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %} API 为开发人员提供了丰富的信息供他们使用。
大多数情况下，甚至可能会发现要求提供的信息太多，为了让服务器满意，API 会自动[对请求的项进行分页](/rest/overview/resources-in-the-rest-api#pagination)。

在本指南中，我们将对搜索 API 进行一些调用，并使用分页对结果进行迭代。 可以在 [platform-samples][platform samples] 存储库中找到此项目的完整源代码。

{% data reusables.rest-api.dotcom-only-guide-note %}



## 分页基础知识

首先需要了解有关接收分页条目的一些事实：


1. 不同的 API 调用响应具有不同的默认值。 例如，对[列出公共存储库](/rest/reference/repos#list-public-repositories)的调用以 30 个为一组提供分页项，而对 GitHub 搜索 API 的调用以 100 个为一组提供项
2. 您可以指定要接收的条目数（最多 100 个）；但是，
3. 出于技术原因，并非每个端点的行为都相同。 例如，[事件](/rest/reference/activity#events)不允许设置接收项的最大值。
请务必阅读关于如何处理特定端点分页结果的文档。

{% note %}

注意：应始终依赖于链接标头中包含的 URL。 不要试图猜测或构建自己的 URL。

{% endnote %}


### 链接标头

响应头包含有关分页的信息。 有关标头的详细信息，请参阅“[REST API 入门](/rest/guides/getting-started-with-the-rest-api#about-the-response-code-and-headers)”。 若要获取响应头，请在请求中包含 `-I` 标志。 例如：

```shell 
$ curl -I -H "Accept: application/vnd.github+json" -H "Authorization: Bearer YOUR_TOKEN"   https://api.github.com/enterprises/advacado-corp/audit-log

```

`-I` 标志仅返回响应头。 如果响应已分页，那么响应头将包含 `link` 标头。 标头将如下所示：

```
link: <https://api.github.com/enterprises/13827/audit-log?after=MS42NjQzODM5MTkzNDdlKzEyfDM0MkI6NDdBNDo4RTFGMEM6NUIyQkZCMzo2MzM0N0JBRg%3D%3D&before=>; rel="next"
```

或

```
link: <https://api.github.com/repositories/1300192/issues?page=2>; rel="next", <https://api.github.com/repositories/1300192/issues?page=511>; rel="last"
```
### 分页类型

{% data variables.product.company_short %} 的 API 使用两种分页方法：基于页面的分页和基于游标的分页。 如果 `link` 标头包含 `page`，那么操作使用基于页面的分页。 如果 `link` 标头包含 `before` 和 `after`，则操作使用基于游标的分页。


#### 基于页面的分页

基于页面的分页的链接标头将指示有关上一页、下一页、第一页和最后一页的信息。 如果未请求特定页面，则响应将默认为第一页，并将省略有关第一页和上一页的信息。

例如，对于未指定页面的请求，此标头指出下一页为 `2`，最后一页为 `511`。

```
link: <https://api.github.com/repositories/1300192/issues?page=2>; rel="next", <https://api.github.com/repositories/1300192/issues?page=511>; rel="last"
```

例如，对于指定第 5 页的请求，此标头声明上一页为 `4`、下一页为 `6`、最后一页为 `511`、第一页为 `1`。

```
link: <https://api.github.com/repositories/1300192/issues?page=4>; rel="prev", <https://api.github.com/repositories/1300192/issues?page=6>; rel="next", <https://api.github.com/repositories/1300192/issues?page=511>; rel="last", <https://api.github.com/repositories/1300192/issues?page=1>; rel="first"
```

#### 基于游标的分页

游标分页使用术语 `before` 和 `after` 来浏览页面。 `rel="next"` 和 `rel="prev"` 标记数据集中的游标点，并为前往当前页的 `before` 和 `after` 页提供参考。  

```
link: <https://api.github.com/enterprises/13827/audit-log?after=MS42NjQzODMzMzk2MzZlKzEyfFdxSzIxdGU0MlBWNUp5UzhBWDF6LWc%3D&before=>; rel="next",
<https://api.github.com/enterprises/13827/audit-log?after=&before=>; rel="first", 
<https://api.github.com/enterprises/13827/audit-log?after=&before=MS42NjQzODM5MTcyMjllKzEyfDI4NDE6NEVFNDoxODBDRkM5OjY5REE0MzI6NjMzNDdCQUQ%3D>; rel="prev"
```

在此示例中，`rel=next` 指示下一页位于：

```
after=MS42NjQzODM5MTkzNDdlKzEyfDM0MkI6NDdBNDo4RTFGMEM6NUIyQkZCMzo2MzM0N0JBRg%3D%3D&before=
```




### 使用分页

#### 基于游标的分页

使用基于游标的分页要求使用术语 `before` 和 `after`。 若要使用 `before` 和 `after` 进行导航，请将上面生成的链接标头复制到 curl 请求中：

```shell
$ curl -I -H "Accept: application/vnd.github+json" -H "Authorization: Bearer YOUR_TOKEN"  https://api.github.com/enterprises/13827/audit-log?after=MS42NjQzODM5MTkzNDdlKzEyfDM0MkI6NDdBNDo4RTFGMEM6NUIyQkZCMzo2MzM0N0JBRg%3D%3D&before=
```

上述示例将生成一个结果页和可用于发出下一个请求的新标头信息。 `rel="next"` 提供下一个结果页。 `rel="prev"` 提供上一个结果页。 此处的重要输出部分是需要生成链接标头，而不是手动输入。 从以下输出复制整个链接。

```
link: <https://api.github.com/enterprises/13827/audit-log?after=MS42NjQzODMzMzk2MzZlKzEyfFdxSzIxdGU0MlBWNUp5UzhBWDF6LWc%3D&before=>; rel="next", 
<https://api.github.com/enterprises/13827/audit-log?after=&before=>; rel="first", 
<https://api.github.com/enterprises/13827/audit-log?after=&before=MS42NjQzODM5MTcyMjllKzEyfDI4NDE6NEVFNDoxODBDRkM5OjY5REE0MzI6NjMzNDdCQUQ%3D>; rel="prev"
```

与基于页面的分页不同，结果不会返回响应中的最后一页的页码。

    link: <https://api.github.com/enterprises/13827/audit-log?after=MS42NjQzODMzMzk2MzZlKzEyfFdxSzIxdGU0MlBWNUp5UzhBWDF6LWc%3D&before=>; rel="next", 
    <https://api.github.com/enterprises/13827/audit-log?after=&before=>; rel="first", 
    <https://api.github.com/enterprises/13827/audit-log?after=&before=MS42NjQzODM5MTcyMjllKzEyfDI4NDE6NEVFNDoxODBDRkM5OjY5REE0MzI6NjMzNDdCQUQ%3D>; rel="prev"
    
由于基于游标的分页在数据集中创建引用点，因此它无法计算结果总数。


#### 基于页面的分页

要使用基于页面的分页进行导航，请传入 `page` 参数。 默认情况下，`page` 始终从 `1` 开始。 在以下示例中，我们已向搜索 API Mozilla 项目发出使用短语 `addClass` 的 curl 请求。 让我们跳转至第 14 页，而不是从第 1 页开始。 

```shell
$ curl -I "https://api.github.com/search/code?q=addClass+user:mozilla&page=14"
```

以下是 HTTP 请求中链接标头的例外情况：

    Link: <https://api.github.com/search/code?q=addClass+user%3Amozilla&page=15>; rel="next",
      <https://api.github.com/search/code?q=addClass+user%3Amozilla&page=34>; rel="last",
      <https://api.github.com/search/code?q=addClass+user%3Amozilla&page=1>; rel="first",
      <https://api.github.com/search/code?q=addClass+user%3Amozilla&page=13>; rel="prev"

在此示例中，`rel="next"` 为第 15 页，`rel="last"` 为第 34 页。 但现在我们得到了更多信息：`rel="first"` 表示第一页的 URL，更重要的是，可通过 `rel="prev"` 知道上一页的页码。 使用此信息，可以构建一些 UI，让用户在 API 调用中的第一个、上一个、下一个或最后一个结果列表之间跳转。


### 更改接收的条目数量

#### 基于页面的分页

通过传递 `per_page` 参数，可以指定希望每个页面返回的项数，最多 100 个项。 让我们尝试询问关于 `addClass` 的 50 个项：

```shell
$ curl -I "https://api.github.com/search/code?q=addClass+user:mozilla&per_page=50"
```

请注意它对标头响应的影响：

    Link: <https://api.github.com/search/code?q=addClass+user%3Amozilla&per_page=50&page=2>; rel="next",
      <https://api.github.com/search/code?q=addClass+user%3Amozilla&per_page=50&page=20>; rel="last"

你可能已经猜到了，`rel="last"` 信息表示最后一页现在是第 20 页。 这是因为我们要求每页提供有关我们结果的更多信息。

#### 基于游标的分页

还可以为基于游标的分页传递 `per_page` 参数。 

```shell
$ curl -I -H "Accept: application/vnd.github+json" -H "Authorization: Bearer YOUR_TOKEN"  https://api.github.com/enterprises/13827/audit-log?after=MS42NjQzODM5MTkzNDdlKzEyfDM0MkI6NDdBNDo4RTFGMEM6NUIyQkZCMzo2MzM0N0JBRg%3D%3D&before=&per_page=50
```

## 使用信息

你不希望仅仅为了能够使用分页而进行低级别的 curl 调用，因此让我们编写一个小的 Ruby 脚本，该脚本可完成上面所描述的所有内容。

和往常一样，首先需要 [GitHub 的 Octokit.rb][octokit.rb] Ruby 库，然后传入我们的 [{% data variables.product.pat_generic %}][personal token]：

``` ruby
require 'octokit'

# !!! DO NOT EVER USE HARD-CODED VALUES IN A REAL APP !!!
# Instead, set and test environment variables, like below
client = Octokit::Client.new :access_token => ENV['MY_PERSONAL_TOKEN']
```

接下来，将使用 Octokit 的 `search_code` 方法执行搜索。 与使用 `curl` 不同的是，我们还可以立即检索结果的数量，所以我们输入以下代码：

``` ruby
results = client.search_code('addClass user:mozilla')
total_count = results.total_count
```

现在，我们来获取最后一页的页码，类似于链接标头中的 `page=34>; rel="last"` 信息。 Octokit.rb 通过一个名为“[超媒体链接关系][hypermedia-relations]”的实现来支持分页信息。
我们不会对这种关系展开详细讨论，只想提醒你，`results` 变量中的每个元素都有一个称为 `rels` 的哈希，它可以包含有关 `:next`、`:last`、`:first` 和 `:prev` 的信息，具体取决于所得到的结果。 这些关系还包含通过调用 `rels[:last].href` 所得 URL 的相关信息。

知道了这一点后，我们来获取最后一个结果的页码，并将所有这些信息呈现给用户：

``` ruby
last_response = client.last_response
number_of_pages = last_response.rels[:last].href.match(/page=(\d+).*$/)[1]

puts "There are #{total_count} results, on #{number_of_pages} pages!"
```

最后，我们来遍历结果。 可使用循环 `for i in 1..number_of_pages.to_i` 来实现此目的，但是，让我们遵循 `rels[:next]` 标头以从每个页面检索信息。 为简单起见，我们只获取每个页面中第一个结果的文件路径。 为此，我们需要一个循环；在每个循环结束时，我们将根据 `rels[:next]` 信息来检索下一页的数据集。
当没有 `rels[:next]` 信息可供使用（也就是说，我们位于 `rels[:last]`）时，循环将结束。 它应如下所示：

``` ruby
puts last_response.data.items.first.path
until last_response.rels[:next].nil?
  last_response = last_response.rels[:next].get
  puts last_response.data.items.first.path
end
```

使用 Octokit.rb 更改每页的条目数非常简单。 只需将 `per_page` 选项哈希传递给初始客户端构造。 之后，代码应保持不变：

``` ruby
require 'octokit'

# !!! DO NOT EVER USE HARD-CODED VALUES IN A REAL APP !!!
# Instead, set and test environment variables, like below
client = Octokit::Client.new :access_token => ENV['MY_PERSONAL_TOKEN']

results = client.search_code('addClass user:mozilla', :per_page => 100)
total_count = results.total_count

last_response = client.last_response
number_of_pages = last_response.rels[:last].href.match(/page=(\d+).*$/)[1]

puts last_response.rels[:last].href
puts "There are #{total_count} results, on #{number_of_pages} pages!"

puts "And here's the first path for every set"

puts last_response.data.items.first.path
until last_response.rels[:next].nil?
  last_response = last_response.rels[:next].get
  puts last_response.data.items.first.path
end
```

## 构造分页链接

一般来说，使用分页时，你的目标不是要抓住所有可能的结果，而是要生成一组导航，如下所示：

![分页链接示例](/assets/images/pagination_sample.png)

让我们勾勒出一个可能需要做什么的微观版本。

根据上面的代码，我们已经知道可以从第一次调用中的分页结果中获取 `number_of_pages`：

``` ruby
require 'octokit'

# !!! DO NOT EVER USE HARD-CODED VALUES IN A REAL APP !!!
# Instead, set and test environment variables, like below
client = Octokit::Client.new :access_token => ENV['MY_PERSONAL_TOKEN']

results = client.search_code('addClass user:mozilla')
total_count = results.total_count

last_response = client.last_response
number_of_pages = last_response.rels[:last].href.match(/page=(\d+).*$/)[1]

puts last_response.rels[:last].href
puts "There are #{total_count} results, on #{number_of_pages} pages!"
```

我们可以从其中构造美观的数字框 ASCII 表示形式：
``` ruby
numbers = ""
for i in 1..number_of_pages.to_i
  numbers << "[#{i}] "
end
puts numbers
```

我们通过构造一个随机数来模拟用户单击其中一个框：

``` ruby
random_page = Random.new
random_page = random_page.rand(1..number_of_pages.to_i)

puts "A User appeared, and clicked number #{random_page}!"
```

现在我们有了页码，可通过传递 `:page` 选项，使用 Octokit 显式地检索各个页面：

``` ruby
clicked_results = client.search_code('addClass user:mozilla', :page => random_page)
```

如果想变得复杂一点，还可以抓取前一页和后一页，以便为后退 (`<<`) 和前进 (`>>`) 元素生成链接：

``` ruby
prev_page_href = client.last_response.rels[:prev] ? client.last_response.rels[:prev].href : "(none)"
next_page_href = client.last_response.rels[:next] ? client.last_response.rels[:next].href : "(none)"

puts "The prev page link is #{prev_page_href}"
puts "The next page link is #{next_page_href}"
```

[pagination]: /rest#pagination
[platform samples]: https://github.com/github/platform-samples/tree/master/api/ruby/traversing-with-pagination
[octokit.rb]: https://github.com/octokit/octokit.rb
[personal token]: /articles/creating-an-access-token-for-command-line-use
[hypermedia-relations]: https://github.com/octokit/octokit.rb#pagination
[listing commits]: /rest/reference/commits#list-commits

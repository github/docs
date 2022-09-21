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
ms.openlocfilehash: be0e961847e187b72848eda558636fe3ecb800bd
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/10/2022
ms.locfileid: '145129043'
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

API 调用的[链接标头](https://datatracker.ietf.org/doc/html/rfc5988)中提供了有关分页的信息。 例如，我们向搜索 API 发出 curl 请求，以了解 Mozilla 项目使用短语 `addClass` 的次数：

```shell
$ curl -I "https://api.github.com/search/code?q=addClass+user:mozilla"
```

`-I` 参数表示仅关注标头，而不关注实际内容。 在检查结果时，你会注意到链接标头中的一些信息如下所示：

    Link: <https://api.github.com/search/code?q=addClass+user%3Amozilla&page=2>; rel="next",
      <https://api.github.com/search/code?q=addClass+user%3Amozilla&page=34>; rel="last"

我们来分解说明。 `rel="next"` 表示下一页是 `page=2`。 这是合理的，因为在默认情况下，所有分页查询都是从第 `1.` 页开始，`rel="last"` 提供了更多信息，指示结果的最后一页第 `34` 页。
因此，还有 33 页关于 `addClass` 的信息可供使用。
很好！

始终依赖提供给你的这些链接关系。 不要试图猜测或构建自己的 URL。

### 浏览页面

现在你知道要接收多少页面，可以开始浏览页面以使用结果了。 可通过传入 `page` 参数来执行此操作。 默认情况下，`page` 始终从 `1` 开始。 让我们跳到第 14 页，看看会发生什么：

```shell
$ curl -I "https://api.github.com/search/code?q=addClass+user:mozilla&page=14"
```

以下是再次出现的 Link 标头：

    Link: <https://api.github.com/search/code?q=addClass+user%3Amozilla&page=15>; rel="next",
      <https://api.github.com/search/code?q=addClass+user%3Amozilla&page=34>; rel="last",
      <https://api.github.com/search/code?q=addClass+user%3Amozilla&page=1>; rel="first",
      <https://api.github.com/search/code?q=addClass+user%3Amozilla&page=13>; rel="prev"

正如预期的那样，`rel="next"` 是第 15 页，而 `rel="last"` 仍是第 34 页。 但现在我们得到了更多信息：`rel="first"` 表示第一页的 URL，更重要的是，可通过 `rel="prev"` 知道上一页的页码。 使用此信息，可以构建一些 UI，让用户在 API 调用中的第一个、上一个、下一个或最后一个结果列表之间跳转。

### 更改接收的条目数量

通过传递 `per_page` 参数，可以指定希望每个页面返回的项数，最多 100 个项。 让我们尝试询问关于 `addClass` 的 50 个项：

```shell
$ curl -I "https://api.github.com/search/code?q=addClass+user:mozilla&per_page=50"
```

请注意它对标头响应的影响：

    Link: <https://api.github.com/search/code?q=addClass+user%3Amozilla&per_page=50&page=2>; rel="next",
      <https://api.github.com/search/code?q=addClass+user%3Amozilla&per_page=50&page=20>; rel="last"

你可能已经猜到了，`rel="last"` 信息表示最后一页现在是第 20 页。 这是因为我们要求每页提供有关我们结果的更多信息。

## 使用信息

你不希望仅仅为了能够使用分页而进行低级别的 curl 调用，因此让我们编写一个小的 Ruby 脚本，该脚本可完成上面所描述的所有内容。

照常，首先需要 [GitHub 的 Octokit.rb][octokit.rb] Ruby 库，并传入[个人访问令牌][personal token]：

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

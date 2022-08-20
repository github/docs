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
shortTitle: 使用分页遍历
---

{% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %} API 为开发人员提供了丰富的信息供他们使用。 在很多时候，您甚至会发现自己请求的信息_太多_，为了满足我们的服务器，API 会自动[对请求的项目进行分页](/rest/overview/resources-in-the-rest-api#pagination)。

在本指南中，我们将对 搜索 API 进行一些调用，并使用分页遍历结果。 您可以在[平台样本][platform samples]仓库中找到此项目的完整源代码。

{% data reusables.rest-api.dotcom-only-guide-note %}

## 分页基础知识

首先需要了解有关接收分页条目的一些事实：

1. 不同的 API 调用响应具有不同的默认值。 例如，调用[列出公共仓库](/rest/reference/repos#list-public-repositories)将提供以 30 项为单位的分页结果，而调用 GitHub 搜索 API 将提供以 100 项为单位的分页结果
2. 您可以指定要接收的条目数（最多 100 个）；但是，
3. 出于技术原因，并非每个端点的行为都相同。 例如，[事件](/rest/reference/activity#events)不允许设置要接收的最大条目数量。 请务必阅读关于如何处理特定端点分页结果的文档。

有关分页的信息包含在 API 调用的 [Link 标头](https://datatracker.ietf.org/doc/html/rfc5988)中。 例如，我们向搜索 API 发出一个 curl 请求，以查明 Mozilla 项目使用短语 `addClass` 的次数：

```shell
$ curl -I "https://api.github.com/search/code?q=addClass+user:mozilla"
```

`-I` 参数表示我们只关注标头，而不关注实际内容。 在检查结果时，您会注意到 Link 标头中的一些信息，如下所示：

    链接：<https://api.github.com/search/code?q=addClass+user%3Amozilla&page=2>; rel="next",
      <https://api.github.com/search/code?q=addClass+user%3Amozilla&page=34>; rel="last"

我们来分解说明。 `rel="next"` 表示下一页是 `page=2`。 这是合理的，因为在默认情况下，所有分页查询都是从第 `1` 页开始。`rel="last"` 提供了更多信息，指示结果的最后一页是第 `34` 页。 因此，我们还有 33 页有关 `addClass` 的信息可用。 不错！

**始终**信赖提供给您的这些链接关系。 不要试图猜测或构建自己的 URL。

### 浏览页面

现在您知道要接收多少页面，可以开始浏览页面以使用结果。 您可以通过传递 `page` 参数进行浏览。 默认情况下，`page` 总是从 `1` 开始。 让我们跳到第 14 页，看看会发生什么：

```shell
$ curl -I "https://api.github.com/search/code?q=addClass+user:mozilla&page=14"
```

以下是再次出现的 Link 标头：

    链接：<https://api.github.com/search/code?q=addClass+user%3Amozilla&page=15>; rel="next",
      <https://api.github.com/search/code?q=addClass+user%3Amozilla&page=34>; rel="last",
      <https://api.github.com/search/code?q=addClass+user%3Amozilla&page=1>; rel="first",
      <https://api.github.com/search/code?q=addClass+user%3Amozilla&page=13>; rel="prev"

果然，`rel="next"` 是 15，而 `rel="last"` 仍是 34。 但是现在我们得到了更多信息：`rel="first"` 表示_第一_页的 URL，更重要的是，`rel="prev"` 让您知道了上一页的页码。 根据这些信息，您可以构造一些 UI，使用户可以在 API 调用结果列表的第一页、上一页、下一页或最后一页之间跳转。

### 更改接收的条目数量

通过传递 `per_page` 参数，您可以指定希望每页返回多少个条目，最多 100 个。 我们来尝试请求 50 个关于 `addClass` 的条目：

```shell
$ curl -I "https://api.github.com/search/code?q=addClass+user:mozilla&per_page=50"
```

请注意它对标头响应的影响：

    链接：<https://api.github.com/search/code?q=addClass+user%3Amozilla&per_page=50&page=2>; rel="next",
      <https://api.github.com/search/code?q=addClass+user%3Amozilla&per_page=50&page=20>; rel="last"

您可能已经猜到了，`rel="last"` 信息表明最后一页现在是第 20 页。 这是因为我们要求每页提供更多的结果相关信息。

## 使用信息

您不希望仅仅为了能够处理分页而进行低级的 curl 调用，所以我们来编写一个 Ruby 小脚本来完成上述所有任务。

与往常一样，首选我们需要使用 [GitHub 的 Octokit.rb][octokit.rb] Ruby 库，并传递我们的 [个人访问令牌][personal token]：

``` ruby
require 'octokit'

# !!! DO NOT EVER USE HARD-CODED VALUES IN A REAL APP !!!
# Instead, set and test environment variables, like below
client = Octokit::Client.new :access_token => ENV['MY_PERSONAL_TOKEN']
```

接下来，我们将使用 Octokit 的 `search_code` 方法执行搜索。 与使用 `curl` 不同的是，我们还可以立即检索结果数量，所以我们输入以下代码：

``` ruby
results = client.search_code('addClass user:mozilla')
total_count = results.total_count
```

现在，我们来获取最后一页的页码 - 类似于链接标头中的 `page=34>; rel="last"` 信息。 Octokit.rb 通过“[超媒体连接关系][hypermedia-relations]”的实现来支持分页信息。 我们不会对这种关系展开详细讨论，只想提醒您，`results` 变量中的每个元素都有一个被称为 `rels` 的哈希，它可能包含有关 `:next`、`:last`、`:first` 和 `:prev` 的信息，具体取决于您所得结果。 这些关系还包含通过调用 `rels[:last].href` 所得 URL 的相关信息。

知道了这一点后，我们来获取最后一个结果的页码，并将所有这些信息呈现给用户：

``` ruby
last_response = client.last_response
number_of_pages = last_response.rels[:last].href.match(/page=(\d+).*$/)[1]

puts "There are #{total_count} results, on #{number_of_pages} pages!"
```

最后，我们来遍历结果。 您可以使用 `for i in 1..number_of_pages.to_i` 循环进行浏览，但我们这次将根据 `rels[:next]` 标头来检索每一页的信息。 为简单起见，我们只获取每个页面中第一个结果的文件路径。 为此，我们需要一个循环；在每个循环的最后，我们根据 `rels[:next]` 信息来检索下一页的数据集。 当没有 `rels[:next]` 信息可用时（也就是说，我们到达了 `rels[:last]`），循环将结束。 如下所示：

``` ruby
puts last_response.data.items.first.path
until last_response.rels[:next].nil?
  last_response = last_response.rels[:next].get
  puts last_response.data.items.first.path
end
```

使用 Octokit.rb 更改每页的条目数非常简单。 只需将 `per_page` 选项哈希传递给初始客户端构造函数。 之后，您的代码应保持不变：

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

一般来说，使用分页时，您的目标不是要抓住所有可能的结果，而是要产生一组导航，如下所示：

![分页链接示例](/assets/images/pagination_sample.png)

让我们勾勒出一个可能需要做什么的微观版本。

根据上面的代码，我们已经知道可以从第一次调用的分页结果中获取 `number_of_pages`。

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

现在我们有了页码，可通过传递 `:page` 选项，使用 Octokit 明确检索各个页面：

``` ruby
clicked_results = client.search_code('addClass user:mozilla', :page => random_page)
```

如果我们想弄得花哨一些，还可以抓住上下页，以生成后退 (`<<`) 和前进 (`>>`) 元素的链接：

``` ruby
prev_page_href = client.last_response.rels[:prev] ? client.last_response.rels[:prev].href : "(none)"
next_page_href = client.last_response.rels[:next] ? client.last_response.rels[:next].href : "(none)"

puts "The prev page link is #{prev_page_href}"
puts "The next page link is #{next_page_href}"
```

[platform samples]: https://github.com/github/platform-samples/tree/master/api/ruby/traversing-with-pagination
[octokit.rb]: https://github.com/octokit/octokit.rb
[personal token]: /articles/creating-an-access-token-for-command-line-use
[hypermedia-relations]: https://github.com/octokit/octokit.rb#pagination

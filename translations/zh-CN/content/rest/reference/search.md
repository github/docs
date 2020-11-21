---
title: 搜索
redirect_from:
  - /v3/search
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

搜索 API 可帮助您搜索要查找的特定条目。 例如，您可以在仓库中找到用户或特定文件。 就像您在 Google 上执行搜索一样。 它旨在帮助您找到要查找的一个或几个结果。 就像在 Google 上搜索一样，有时您希望查看几页搜索结果，以便找到最能满足您需求的条目。 为了满足这一需求， {% data variables.product.product_name %} 搜索 API **为每个搜索提供最多 1,000 个结果**。

您可以使用查询缩小搜索范围。 要了解有关搜索查询语法的更多信息，请查看“[构建搜索查询](/v3/search/#constructing-a-search-query)”。

### 排列搜索结果

除非提供另一个排序选项作为查询参数，否则将按照最佳匹配的原则对结果进行降序排列。 多种因素相结合，将最相关的条目顶到结果列表的顶部。

### 速率限制

搜索 API 有自定义速率限制。 对于使用[基本身份验证](/v3/#authentication)、[OAuth](/v3/#authentication) 或[客户端 ID 和密码](/v3/#increasing-the-unauthenticated-rate-limit-for-oauth-applications)的请求，您每分钟最多可以提出 30 个请求。 对于未经身份验证的请求，速率限制允许您每分钟最多提出 10 个请求。

{% data reusables.enterprise.rate_limit %}

请参阅[速率限制文档](/rest/reference/rate-limit)，以详细了解如何确定您的当前速率限制状态。

### 构造搜索查询

搜索 API 中的每个端点都使用[查询参数](https://en.wikipedia.org/wiki/Query_string)对 {% data variables.product.product_name %} 进行搜索。 有关包含端点和查询参数的示例，请参阅搜索 API 中的各个端点。

查询可以包含在 {% data variables.product.product_name %} 上支持的搜索限定符的任意组合中。 搜索查询的格式为：

```
SEARCH_KEYWORD_1 SEARCH_KEYWORD_N QUALIFIER_1 QUALIFIER_N
```

例如，如果您要搜索 `defunkt` 拥有的在自述文件中包含单词 `GitHub` 和 `Octocat` 的所有_仓库_，您可以在_搜索仓库_端点中使用以下查询：

```
GitHub Octocat in:readme user:defunkt
```

**Note:** Be sure to use your language's preferred HTML-encoder to construct your query strings. 例如：
```javascript
// JavaScript
const queryString = 'q=' + encodeURIComponent('GitHub Octocat in:readme user:defunkt');
```

有关可用限定符及其格式的完整列表和使用示例，请参阅“[在 GitHub 上搜索](/articles/searching-on-github/)”。 有关如何使用运算符匹配特定数量、日期或排除结果，请参阅“[了解搜索语法](/articles/understanding-the-search-syntax/)”。

### 查询长度限制

搜索 API 不支持以下查询：
- 超过 256 个字符（不包括运算符或限定符）。
- 超过五个 `AND`、`OR` 或 `NOT` 运算符。

这些搜索查询将返回“验证失败”错误消息。

### 超时和不完整的结果

为了让所有人都能快速使用搜索 API，我们限制任何单个查询能够运行的时长。 对于[超出时间限制](https://developer.github.com/changes/2014-04-07-understanding-search-results-and-potential-timeouts/)的查询，API 将返回在超时之前已找到的匹配项，并且响应的 `incomplete_results` 属性设为 `true`。

达到超时并不意味着搜索结果不完整， 可能已找到更多结果，也可能没有找到。

### 访问错误或缺少搜索结果

您需要成功完成身份验证并且对您搜索查询的仓库具有访问权限，否则，您将看到 `422 Unprocessible Entry` 错误和“验证失败”消息。 例如，如果您的查询中包含 `repo:`、`user:` 或 `org:` 限定符，但它们请求的资源是您登录 {% data variables.product.prodname_dotcom %} 后无权访问的资源，则搜索将失败。

当您的搜索查询请求多个资源时，响应将只包含您有权访问的资源，并且**不会**提供列出未返回资源的错误消息。

例如，如果您的搜索查询要搜索 `octocat/test` 和 `codertocat/test` 仓库，但您只拥有对 `octocat/test` 的访问权限，则您的响应将显示对 `octocat/test` 的搜索结果，而不会显示对 `codertocat/test` 的搜索结果。 此行为类似于 {% data variables.product.prodname_dotcom %} 上的搜索方式。

{% include rest_operations_at_current_path %}


### 文本匹配元数据

在 GitHub 上，您可以使用搜索结果中的代码段和高亮显示提供的上下文。 搜索 API 提供额外的元数据，允许您在显示搜索结果时高亮显示匹配搜索词。

![代码片段高亮显示](/assets/images/text-match-search-api.png)

请求可以选择在响应中接收这些文本片段，并且每个片段都附带数字偏移，以标识每个匹配搜索词的确切位置。

要在搜索结果中获取这种元数据，请在 `Accept` 标头中指定 `text-match` 媒体类型。

```shell
application/vnd.github.v3.text-match+json
```

提供 `text-match` 媒体类型时，您将在 JSON 有效负载中收到一个额外的键，名为 `text_matches`，它提供有关搜索词在文本中的位置以及包含该搜索词的 `property` 的信息。 在 `text_matches` 数组中，每个对象包含以下属性：

| 名称            | 描述                                                                                                       |
| ------------- | -------------------------------------------------------------------------------------------------------- |
| `object_url`  | 包含匹配某个搜索词的字符串属性的资源 URL。                                                                                  |
| `object_type` | 在给定 `object_url` 中存在的资源类型的名称。                                                                            |
| `属性`          | 在 `object_url` 中存在的资源属性的名称。 属性是与某个搜索词相匹配的字符串。 （在从 `object_url` 返回的 JSON 中，`fragment` 的完整内容存在于具有此名称的属性中。） |
| `分段`          | `property` 值的子集。 这是与一个或多个搜索词匹配的文本片段。                                                                     |
| `matches`     | 存在于 `fragment` 中的一个或多个搜索词的数组。 索引（即“偏移量”）与片段相关。 （它们与 `property` 的_完整_内容无关。）                               |

#### 示例

使用 cURL 和上面的[示例议题搜索](#search-issues-and-pull-requests)时，我们的 API 请求如下所示：

``` shell
curl -H 'Accept: application/vnd.github.v3.text-match+json' \
'{% data variables.product.api_url_pre %}/search/issues?q=windows+label:bug+language:python+state:open&sort=created&order=asc'
```

对于每个搜索结果，响应将包含一个 `text_matches` 数组。 在下面的 JSON 中，我们在 `text_matches` 数组中有两个对象。

第一个文本匹配出现在议题的 `body` 属性中。 我们从议题正文中看到了文本片段。 搜索词 (`windows`) 在该片段中出现了两次，我们有每次出现时的索引。

第二个文本匹配出现在其中一个议题注释的 `body` 属性中。 我们有议题注释的 URL。 当然，我们从注释正文中看到了文本片段。 搜索词 (`windows`) 在该片段中出现了一次。

```json
{
  "text_matches": [
    {
      "object_url": "https://api.github.com/repositories/215335/issues/132",
      "object_type": "Issue",
      "property": "body",
      "fragment": "comprehensive windows font I know of).\n\nIf we can find a commonly distributed windows font that supports them then no problem (we can use html font tags) but otherwise the '(21)' style is probably better.\n",
      "matches": [
        {
          "text": "windows",
          "indices": [
            14,
            21
          ]
        },
        {
          "text": "windows",
          "indices": [
            78,
            85
          ]
        }
      ]
    },
    {
      "object_url": "https://api.github.com/repositories/215335/issues/comments/25688",
      "object_type": "IssueComment",
      "property": "body",
      "fragment": " right after that are a bit broken IMHO :). I suppose we could have some hack that maxes out at whatever the font does...\n\nI'll check what the state of play is on Windows.\n",
      "matches": [
        {
          "text": "Windows",
          "indices": [
            163,
            170
          ]
        }
      ]
    }
  ]
}
```

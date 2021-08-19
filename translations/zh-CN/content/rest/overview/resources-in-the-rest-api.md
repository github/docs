---
title: REST API 中的资源
intro: '了解如何导航 {% data variables.product.prodname_dotcom %} API 提供的资源。'
redirect_from:
  - /rest/initialize-the-repo/
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - API
---


本文介绍构成官方 {% data variables.product.product_name %} REST API 的资源。 如果您有任何问题或要求，请联系 {% data variables.contact.contact_support %}。

### 当前版本

默认情况下，对 `{% data variables.product.api_url_code %}` 的所有请求都会收到 REST API 的 **v3** [版本](/developers/overview/about-githubs-apis)。 我们建议您[通过 `Accept` 标头明确请求此版本](/rest/overview/media-types#request-specific-version)。

    Accept: application/vnd.github.v3+json

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt '2.9' %}

有关 GitHub GraphQL API 的信息，请参阅 [v4 文档](/graphql)。 有关迁移到 GraphQL 的信息，请参阅“[从 REST 迁移](/graphql/guides/migrating-from-rest-to-graphql)”。

{% endif %}

### 架构

{% if currentVersion == "free-pro-team@latest" %}所有 API 访问都通过 HTTPS 进行，{% else %}API{% endif %} 从 `{% data variables.product.api_url_code %}` 访问。  所有数据都
作为 JSON 发送和接收。

```shell
$ curl -I {% data variables.product.api_url_pre %}/users/octocat/orgs

> HTTP/2 200
> Server: nginx
> Date: Fri, 12 Oct 2012 23:33:14 GMT
> Content-Type: application/json; charset=utf-8
> ETag: "a00049ba79152d03380c34652f2cb612"
> X-GitHub-Media-Type: github.v3
> X-RateLimit-Limit: 5000
> X-RateLimit-Remaining: 4987
> X-RateLimit-Reset: 1350085394{% if enterpriseServerVersions contains currentVersion %}
> X-GitHub-Enterprise-Version: {{ currentVersion | remove: "enterprise-server@" }}.0{% elsif currentVersion == "github-ae@latest" %}
> X-GitHub-Enterprise-Version: GitHub AE{% endif %}
> Content-Length: 5
> Cache-Control: max-age=0, private, must-revalidate
> X-Content-Type-Options: nosniff
```

空白字段作为 `null` 包含在其中，而不是被忽略。

所有时间戳以 ISO 8601 格式返回：

    YYYY-MM-DDTHH:MM:SSZ

有关时间戳中时区的更多信息，请参阅[此节](#timezones)。

#### 摘要表示

当您获取资源列表时，响应包括该资源的属性_子集_。 这就是资源的“摘要”表示。 （对于某些属性，API 要经过大量计算后才可提供。 出于性能考虑，摘要表示排除了这些属性。 要获得这些属性，请获取“详细”表示。)

**示例**：当您获取仓库列表时，您将获得每个仓库的摘要表示。 在本例中，我们获取 [octokit](https://github.com/octokit) 组织拥有的仓库列表：

    GET /orgs/octokit/repos

#### 详细表示

当您获取单个资源时，响应通常包括该资源的_所有_属性。 这就是资源的“详细”表示。 （请注意，授权有时会影响表示中包含的详细信息数量。）

**示例**：当您获取单个仓库时，您将获得该仓库的详细表示。 在本例中，我们获取 [octokit/octokit.rb](https://github.com/octokit/octokit.rb) 仓库：

    GET /repos/octokit/octokit.rb

本文档提供每种 API 方法的示例响应。 示例响应说明了该方法返回的所有属性。

### 身份验证

{% if currentVersion == "github-ae@latest" %} 我们建议通过 [web 应用程序流程](/developers/apps/authorizing-oauth-apps#web-application-flow)创建 OAuth2 令牌，以便向 {% data variables.product.product_name %} REST API 验证。 {% else %} 通过 {% data variables.product.product_name %} REST API 验证有两种方式。{% endif %} 需要身份验证的请求有时将返回 `404 Not Found`，而不是 `403 Forbidden`。  这是为了防止私有仓库意外泄露给未经授权的用户。

#### 基本验证

```shell
$ curl -u "username" {% data variables.product.api_url_pre %}
```

#### OAuth2 令牌（在标头中发送）

```shell
$ curl -H "Authorization: token <em>OAUTH-TOKEN</em>" {% data variables.product.api_url_pre %}
```

{% note %}

注：GitHub 建议使用授权标头发送 OAuth 令牌。

{% endnote %}

阅读[关于 OAuth2 的更多信息](/apps/building-oauth-apps/)。  请注意，OAuth2 令牌可使用生产应用程序的 [web 应用程序流](/developers/apps/authorizing-oauth-apps#web-application-flow)来获取。

{% if currentVersion == "free-pro-team@latest" or enterpriseServerVersions contains currentVersion %}
#### OAuth2 键/密钥

{% data reusables.apps.deprecating_auth_with_query_parameters %}

```shell
curl -u my_client_id:my_client_secret '{% data variables.product.api_url_pre %}/user/repos'
```

使用 `client_id` 和 `client_secret`_不会_验证为用户，只会识别您的 OAuth 应用程序以提高速率限制。 权限仅授予用户，而不授予应用程序，因此只会返回未经验证用户可以看到的数据。 因此，您应该仅在服务器到服务器的场景中使用 OAuth2 键/密钥。 不要将 OAuth 应用程序的客户端密钥泄露给用户。

在私有模式下无法使用 OAuth2 键和密钥进行身份验证，尝试验证时会返回 `401 Unauthorized`。 更多信息请参阅“[启用私有模式](/enterprise/admin/installation/enabling-private-mode)”。
{% endif %}

{% if currentVersion == "free-pro-team@latest" %}

阅读[有关未经验证速率限制的更多信息](#increasing-the-unauthenticated-rate-limit-for-oauth-applications)。

{% endif %}

#### 失败登录限制

使用无效凭据进行身份验证将返回 `401 Unauthorized`：

```shell
$ curl -I {% data variables.product.api_url_pre %} -u foo:bar
> HTTP/2 401

> {
>   "message": "Bad credentials",
>   "documentation_url": "{% data variables.product.doc_url_pre %}"
> }
```

在短时间内检测到多个使用无效凭据的请求后，API 将暂时拒绝该用户的所有身份验证尝试（包括使用有效凭据的尝试），并返回 `403 Forbidden`：

```shell
$ curl -i {% data variables.product.api_url_pre %} -u {% if currentVersion == "free-pro-team@latest" or currentVersion == "github-ae@latest" %}
-u <em>valid_username</em>:<em>valid_token</em> {% endif %}{% if enterpriseServerVersions contains currentVersion %}-u <em>valid_username</em>:<em>valid_password</em> {% endif %}
> HTTP/2 403
> {
>   "message": "Maximum number of login attempts exceeded. Please try again later.",
>   "documentation_url": "{% data variables.product.doc_url_pre %}"
> }
```

### 参数

许多 API 方法采用可选参数。 对于 `GET` 请求，任何未指定为路径段的参数都可以作为 HTTP 查询字符串参数进行传递：

```shell
$ curl -i "{% data variables.product.api_url_pre %}/repos/vmg/redcarpet/issues?state=closed"
```

在此例中，'vmg' 和 'redcarpet' 是为路径中的 `:owner` 和 `:repo` 参数提供的值，而 `:state` 是查询字符串中传递的参数。

对于 `POST`、`PATCH`、`PUT` 和 `DELETE` 请求，未包含在 URL 中的参数应编码为 JSON，内容类型为 'application/json'：

```shell
$ curl -i -u username -d '{"scopes":["repo_deployment"]}' {% data variables.product.api_url_pre %}/authorizations
```

### 根端点

您可以向根端点发出 `GET` 请求，以获取 REST API 支持的所有端点类别：

```shell
$ curl {% if currentVersion == "free-pro-team@latest" or currentVersion == "github-ae@latest" %}
-u <em>username</em>:<em>token</em> {% endif %}{% if enterpriseServerVersions contains currentVersion %}-u <em>username</em>:<em>password</em> {% endif %}{% data variables.product.api_url_pre %}
```

### GraphQL 全局节点 ID

请参阅“[使用全局节点 ID](/graphql/guides/using-global-node-ids)”指南，详细了解如何通过 REST API 查找 `node_id` 以及如何在 GraphQL 操作中使用它们。

### 客户端错误

接收请求正文的 API 调用上可能存在三种类型的客户端错误：

1. 发送无效的 JSON 将导致 `400 Bad Request` 响应。
   
        HTTP/2 400
        Content-Length: 35
       
        {"message":"Problems parsing JSON"}

2. 发送错误类型的 JSON 值将导致 `400 Bad
Request` 响应。
   
        HTTP/2 400
        Content-Length: 40
       
        {"message":"Body should be a JSON object"}

3. 发送无效的字段将导致 `422 Unprocessable Entity` 响应。
   
        HTTP/2 422
        Content-Length: 149
       
        {
          "message": "Validation Failed",
          "errors": [
            {
              "resource": "Issue",
              "field": "title",
              "code": "missing_field"
            }
          ]
        }

所有错误对象都具有资源和字段属性，以便客户端可以知道问题所在。  还有一个错误代码，让您知道该字段有什么问题。  以下是可能的验证错误代码：

| 错误代码名称           | 描述                                                 |
| ---------------- | -------------------------------------------------- |
| `missing`        | 资源不存在。                                             |
| `missing_field`  | 资源上的必需字段尚未设置。                                      |
| `invalid`        | 字段的格式无效。  请查看文档以了解更具体的信息。                          |
| `already_exists` | 另一个资源具有与此字段相同的值。  在必须具有某些唯一键（例如标签名称）的资源中可能会发生这种情况。 |
| `unprocessable`  | 提供的输入无效。                                           |

资源还可能发送自定义验证错误（其中 `code` 为 `custom`）。 自定义错误始终包括一个描述错误的 `message` 字段，大多数错误还包括 `documentation_url` 字段，该字段指向一些可能有助于解决错误的内容。

### HTTP 重定向

API v3 酌情使用 HTTP 重定向。 客户端应假定任何请求都可能会导致重定向。 接收 HTTP 重定向*不是*错误，客户端应该遵循该重定向。 重定向响应将包括 `Location` 标头字段，其中包含客户端应向其重复请求的资源的 URI。

| 状态代码        | 描述                                                                              |
| ----------- | ------------------------------------------------------------------------------- |
| `301`       | 永久重定向。 用于发出请求的 URI 已被 `Location` 标头字段中指定的 URL 所取代。 此请求以及对此资源的所有未来请求都应定向到新的 URI。 |
| `302`、`307` | 临时重定向。 该请求应按 `Location` 标头字段中指定的 URI 逐字重复，但客户端应对未来的请求继续使用原来的 URI。               |

其他重定向状态代码可根据 HTTP 1.1 规范使用。

### HTTP 请求方法

API v3 尽可能对每个操作使用适当的 HTTP 请求方法。

| 请求方法     | 描述                                                                             |
| -------- | ------------------------------------------------------------------------------ |
| `HEAD`   | 可以针对任何资源发出以仅获取 HTTP 标头信息。                                                      |
| `GET`    | 用于检索资源。                                                                        |
| `POST`   | 用于创建资源。                                                                        |
| `PATCH`  | 用于通过部分 JSON 数据更新资源。 例如，议题资源具有 `title` 和 `body` 属性。 `PATCH` 请求可以接受一个或多个属性来更新资源。 |
| `PUT`    | 用于替换资源或集合。 对于没有 `body` 属性的 `PUT` 请求，请确保将 `Content-Length` 标头设置为零。              |
| `DELETE` | 用于删除资源。                                                                        |

### 超媒体

所有资源都可以具有一个或多个链接到其他资源的 `*_url` 属性。  这些属性旨在提供明确的 URL，使适当的 API 客户端不需要自己构建 URL。  强烈建议 API 客户端使用这些属性。  这样做有助于开发者未来更容易升级 API。  所有 URI 都应成为适当的 [RFC 6570][rfc] URI 模板。

然后，您可以使用 [uri_template][uri] gem 等命令扩展这些模板：

    >> tmpl = URITemplate.new('/notifications{?since,all,participating}')
    >> tmpl.expand
    => "/notifications"
    
    >> tmpl.expand :all => 1
    => "/notifications?all=1"
    
    >> tmpl.expand :all => 1, :participating => 1
    => "/notifications?all=1&participating=1"

### 分页

默认情况下，如果请求返回了多个项，将按每页最多 30 项进行分页。  您可以使用 `page` 参数指定更多页面。 对于某些资源，您还可以使用 `per_page` 参数设置自定义页面大小，每页最多 100 项。 请注意，由于技术原因，并非所有端点都遵循 `per_page` 参数，相关示例请参阅[事件](/rest/reference/activity#events)。

```shell
$ curl '{% data variables.product.api_url_pre %}/user/repos?page=2&per_page=100'
```

请注意，页码从 1 开始，省略 `page` 参数将返回第一页。

有些端点使用基于光标的分页。 光标是指向结果集中位置的字符串。 使用基于光标的分页时，结果集中没有固定的“页”概念，因此无法导航到特定页面。 相反，您可以使用 `before` 或 `after` 参数遍历结果。

有关分页的更多信息，请查看我们的[分页浏览][pagination-guide]指南。

#### 链接标头

{% note %}

**注：**确保使用链接标头值构成调用，而不是构建自己的 URL。

{% endnote %}

[链接标头](http://tools.ietf.org/html/rfc5988)包括分页信息： 例如：

    Link: <{% data variables.product.api_url_code %}/user/repos?page=3&per_page=100>; rel="next",
      <{% data variables.product.api_url_code %}/user/repos?page=50&per_page=100>; rel="last"

_该示例包括换行符，以提高可读性。_

或者，如果端点使用基于光标的分页：

    Link: <{% data variables.product.api_url_code %}/orgs/ORG/audit-log?after=MTYwMTkxOTU5NjQxM3xZbGI4VE5EZ1dvZTlla09uWjhoZFpR&before=>; rel="next",

此 `Link` 响应标头包含一个或多个[超媒体](/rest#hypermedia)链接关系，其中一些可能需要扩展为 [URI 模板](http://tools.ietf.org/html/rfc6570)。

可能的 `rel` 值为：

| 名称      | 描述           |
| ------- | ------------ |
| `next`  | 结果下一页的链接关系   |
| `last`  | 结果最后一页的链接关系。 |
| `first` | 结果第一页的链接关系。  |
| `prev`  | 结果前一页的链接关系。  |

### 速率限制

对于使用基本验证或 OAuth 的 API 请求，每小时最多可发出 5,000 个请求。 无论是使用[基本验证](#basic-authentication)还是 [OAuth 令牌](#oauth2-token-sent-in-a-header)，经验证的请求都与经验证的用户相关联。 这意味着在使用同一用户拥有的不同令牌进行验证时，该用户授权的所有 OAuth 应用程序将共享同一配额——每小时 5,000 个请求。

{% if currentVersion == "free-pro-team@latest" %}

对于属于 {% data variables.product.prodname_ghe_cloud %} 帐户的用户，使用 OAuth 令牌对相同 {% data variables.product.prodname_ghe_cloud %} 帐户拥有的资源发出的请求上限已提升至每小时 15,000 点。

{% endif %}

在 GitHub Actions 中使用内置 `GITHUB_TOKEN` 时，每个仓库的速率限制为每小时 1,000 个请求。 对于属于 GitHub Enterprise Cloud 帐户的组织，此限制是每个仓库每小时 15,000 个请求。

对于未经验证的请求，速率限制允许每小时最多 60 个请求。 未经验证的请求与原始 IP 地址相关联，与发出请求的用户无关。

{% data reusables.enterprise.rate_limit %}

请注意，[搜索 API 具有自定义速率限制规则](/rest/reference/search#rate-limit)。

任何 API 请求返回的 HTTP 标头都显示当前速率限制状态：

```shell
$ curl -I {% data variables.product.api_url_pre %}/users/octocat
> HTTP/2 200
> Date: Mon, 01 Jul 2013 17:27:06 GMT
> X-RateLimit-Limit: 60
> X-RateLimit-Remaining: 56
> X-RateLimit-Reset: 1372700873
```

| 标头名称                    | 描述                                                                     |
| ----------------------- | ---------------------------------------------------------------------- |
| `X-RateLimit-Limit`     | 每小时允许您发出的最大请求数。                                                        |
| `X-RateLimit-Remaining` | 当前速率限制窗口中剩余的请求数。                                                       |
| `X-RateLimit-Reset`     | 当前费率限制窗口重置时间，以 [UTC 标准时间秒](http://en.wikipedia.org/wiki/Unix_time)为单位。 |

如果您需要不同格式的时间，任何现代编程语言都可以实现您的目标。 例如，如果您在 Web 浏览器上打开控制台，您可以轻松地以 JavaScript Date 对象获取重置时间。

``` javascript
new Date(1372700873 * 1000)
// => Mon Jul 01 2013 13:47:53 GMT-0400 (EDT)
```

如果超过速率限制，错误响应将返回：

```shell
> HTTP/2 403
> Date: Tue, 20 Aug 2013 14:50:41 GMT
> X-RateLimit-Limit: 60
> X-RateLimit-Remaining: 0
> X-RateLimit-Reset: 1377013266

> {
>    "message": "API rate limit exceeded for xxx.xxx.xxx.xxx. (But here's the good news: Authenticated requests get a higher rate limit. Check out the documentation for more details.)",
>    "documentation_url": "{% data variables.product.doc_url_pre %}/overview/resources-in-the-rest-api#rate-limiting"
> }
```

您可以[检查速率限制状态](/rest/reference/rate-limit)，而不会引发 API 命中。

#### 提高 OAuth 应用程序的未经验证速率限制

如果您的 OAuth 应用程序需要以更高的速率限制进行未经验证的调用， 您可以在端点路由之前传递应用程序的客户端 ID 和密钥。

```shell
$ curl -u my_client_id:my_client_secret {% data variables.product.api_url_pre %}/user/repos
> HTTP/2 200
> Date: Mon, 01 Jul 2013 17:27:06 GMT
> X-RateLimit-Limit: 5000
> X-RateLimit-Remaining: 4966
> X-RateLimit-Reset: 1372700873
```

{% note %}

**注：**切勿与任何人共享客户端密钥，也不要将其包含在客户端浏览器代码中。 仅将此处显示的方法用于服务器到服务器的调用。

{% endnote %}

#### 保持在速率限制之内

如果使用基本验证或 OAuth 时超出了速率限制，您可以通过缓存 API 响应和使用[条件请求](#conditional-requests)来解决此问题。

#### 滥用速率限制

为了在 {% data variables.product.product_name %} 上提供优质的服务，使用 API 时，某些操作可能会受到额外的速率限制。 例如，使用 API 快速创建内容、主动轮询而不是使用 web 挂钩、发出多个并发请求或重复请求计算成本高昂的数据，可能会导致滥用速率限制。

滥用速率限制无意干扰 API 的合法使用。 您的正常速率限制应该是您目标的唯一限制。 为确保您成为 API 的好公民，请查看我们的[最佳实践指南](/guides/best-practices-for-integrators/)。

如果您的应用程序触发此速率限制，您将收到信息响应：

```shell
> HTTP/2 403
> Content-Type: application/json; charset=utf-8
> Connection: close

> {
>   "message": "You have triggered an abuse detection mechanism and have been temporarily blocked from content creation. Please retry your request again later.",
>   "documentation_url": "{% data variables.product.doc_url_pre %}/overview/resources-in-the-rest-api#abuse-rate-limits"
> }
```

{% if currentVersion == "free-pro-team@latest" %}

### 必需用户代理

所有 API 请求都必须包含有效的 `User-Agent` 标头。 没有 `User-Agent` 标头的请求将被拒绝。 我们要求您使用 {% data variables.product.product_name %} 用户名或应用程序的名称作为 `User-Agent` 标头值。 这是为了方便我们在发现问题时与您联系 。

例如：

```shell
User-Agent: Awesome-Octocat-App
```

默认情况下，cURL 会发送有效的 `User-Agent` 标头。 如果您通过 cURL（或通过备用客户端）提供了无效的 `User-Agent` 标头，将会收到 `403 Forbidden` 响应：

```shell
$ curl -IH 'User-Agent: ' {% data variables.product.api_url_pre %}/meta
> HTTP/1.0 403 Forbidden
> Connection: close
> Content-Type: text/html

> Request forbidden by administrative rules.
> Please make sure your request has a User-Agent header.
> 检查其他可能的原因。
```

{% endif %}

### 条件请求

大多数响应返回 `ETag` 标头。 许多响应还会返回 `Last-Modified` 标头。 您可以根据这些标头的值，分别使用 `If-None-Match` 和 `If-Modified-Since` 标头对这些资源发出后续请求。 如果资源没有更改，服务器将返回 `304 Not Modified`。

{% if currentVersion == "free-pro-team@latest" %}

{% tip %}

**注**：发出条件请求并收到 304 响应不会计入您的[速率限制](#rate-limiting)，因此我们建议您尽可能使用它。

{% endtip %}

{% endif %}

```shell
$ curl -I {% data variables.product.api_url_pre %}/user
> HTTP/2 200
> Cache-Control: private, max-age=60
> ETag: "644b5b0155e6404a9cc4bd9d8b1ae730"
> Last-Modified: Thu, 05 Jul 2012 15:31:30 GMT
> Vary: Accept, Authorization, Cookie
> X-RateLimit-Limit: 5000
> X-RateLimit-Remaining: 4996
> X-RateLimit-Reset: 1372700873

$ curl -I {% data variables.product.api_url_pre %}/user -H 'If-None-Match: "644b5b0155e6404a9cc4bd9d8b1ae730"'
> HTTP/2 304
> Cache-Control: private, max-age=60
> ETag: "644b5b0155e6404a9cc4bd9d8b1ae730"
> Last-Modified: Thu, 05 Jul 2012 15:31:30 GMT
> Vary: Accept, Authorization, Cookie
> X-RateLimit-Limit: 5000
> X-RateLimit-Remaining: 4996
> X-RateLimit-Reset: 1372700873

$ curl -I {% data variables.product.api_url_pre %}/user -H "If-Modified-Since: Thu, 05 Jul 2012 15:31:30 GMT"
> HTTP/2 304
> Cache-Control: private, max-age=60
> Last-Modified: Thu, 05 Jul 2012 15:31:30 GMT
> Vary: Accept, Authorization, Cookie
> X-RateLimit-Limit: 5000
> X-RateLimit-Remaining: 4996
> X-RateLimit-Reset: 1372700873
```

### 跨源资源共享

API 支持适用于任何来源 AJAX 请求的跨源资源共享 (CORS)。 您可以阅读 [CORS W3C 建议](http://www.w3.org/TR/cors/)或 HTML 5 安全指南中的[这方面介绍](https://code.google.com/archive/p/html5security/wikis/CrossOriginRequestSecurity.wiki)。

以下是从浏览器点击发送的示例请求 `http://example.com`：

```shell
$ curl -I {% data variables.product.api_url_pre %} -H "Origin: http://example.com"
HTTP/2 302
Access-Control-Allow-Origin: *
Access-Control-Expose-Headers: ETag, Link, X-GitHub-OTP, X-RateLimit-Limit, X-RateLimit-Remaining, X-RateLimit-Reset, X-OAuth-Scopes, X-Accepted-OAuth-Scopes, X-Poll-Interval
```

以下是 CORS 预检请求的示例：

```shell
$ curl -I {% data variables.product.api_url_pre %} -H "Origin: http://example.com" -X OPTIONS
HTTP/2 204
Access-Control-Allow-Origin: *
Access-Control-Allow-Headers: Authorization, Content-Type, If-Match, If-Modified-Since, If-None-Match, If-Unmodified-Since, X-GitHub-OTP, X-Requested-With
Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE
Access-Control-Expose-Headers: ETag, Link, X-GitHub-OTP, X-RateLimit-Limit, X-RateLimit-Remaining, X-RateLimit-Reset, X-OAuth-Scopes, X-Accepted-OAuth-Scopes, X-Poll-Interval
Access-Control-Max-Age: 86400
```

### JSON-P 回调

您可以向任何 GET 调用发送 `?callback` 参数，以便让结果包裹在 JSON 函数中。  当浏览器希望绕开跨域问题将 {% data variables.product.product_name %} 内容嵌入网页时，通常使用此方法。  响应包括与常规 API 相同的数据输出，加上相关的 HTTP 标头信息。

```shell
$ curl {% data variables.product.api_url_pre %}?callback=foo

> /**/foo({
>   "meta": {
>     "status": 200,
>     "X-RateLimit-Limit": "5000",
>     "X-RateLimit-Remaining": "4966",
>     "X-RateLimit-Reset": "1372700873",
>     "Link": [ // pagination headers and other links
>       ["{% data variables.product.api_url_pre %}?page=2", {"rel": "next"}]
>     ]
>   },
>   "data": {
>     // the data
>   }
> })
```

您可以编写一个 JavaScript 处理程序来处理回调。 以下是一个最小的处理程序示例，您可以尝试编写：

    <html>
    <head>
    <script type="text/javascript">
    function foo(response) {
      var meta = response.meta;
      var data = response.data;
      console.log(meta);
      console.log(data);
    }
    
    var script = document.createElement('script');
    script.src = '{% data variables.product.api_url_code %}?callback=foo';
    
    document.getElementsByTagName('head')[0].appendChild(script);
    </script>
    </head>
    
    <body>
      <p>Open up your browser's console.</p>
    </body>
    </html>

所有标头都具有与 HTTP 标头相同的字符串值，但有一个值得注意的例外 ：链接。  链接标头已预先解析，并以 `[url, options]` 元组的数组形式出现。

链接如下所示：

    Link: <url1>; rel="next", <url2>; rel="foo"; bar="baz"

... 在回调输出中将如下所示：

```json
{
  "Link": [
    [
      "url1",
      {
        "rel": "next"
      }
    ],
    [
      "url2",
      {
        "rel": "foo",
        "bar": "baz"
      }
    ]
  ]
}
```

### 时区

某些创建新数据的请求（例如创建新的提交）允许您在指定或生成时间戳时提供时区信息。 我们按照优先顺序应用以下规则来确定 API 调用的时区信息。

* [明确提供带有时区信息的 ISO 8601 时间戳](#explicitly-providing-an-iso-8601-timestamp-with-timezone-information)
* [使用 `Time-Zone` 标头](#using-the-time-zone-header)
* [使用用户的最后一个已知时区](#using-the-last-known-timezone-for-the-user)
* [在没有其他时区信息的情况下默认使用 UTC](#defaulting-to-utc-without-other-timezone-information)

#### 明确提供带有时区信息的 ISO 8601 时间戳

对于允许指定时间戳的 API 调用，我们使用这种明确的时间戳。 这方面的示例是[提交 API](/rest/reference/git#commits)。

这些时间戳看起来像 `2014-02-27T15:05:06+01:00`。 另请参阅[本示例](/rest/reference/git#example-input)，了解如何指定这些时间戳。

#### 使用 `Time-Zone` 标头

可以提供根据 [Olson 数据库中的名称列表](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones)定义时区的 `Time-Zone` 标头。

```shell
$ curl -H "Time-Zone: Europe/Amsterdam" -X POST {% data variables.product.api_url_pre %}/repos/github/linguist/contents/new_file.md
```

这意味着当您在这个标题定义的时区做出 API 调用时，我们会生成一个时间戳。 例如，[内容 API](/rest/reference/repos#contents)为每个添加或更改生成 git 提交，并使用当前时间作为时间戳。 此标头将确定用于生成当前时间戳的时区。

#### 使用用户的最后一个已知时区

如果未指定 `Time-Zone` 标头，并且您对 API 进行验证过身份的调用，则我们对经过身份验证的用户使用最后一个已知时区。 最新一个已知的时区在您浏览 {% data variables.product.product_name %} 网站时都会更新。

#### 在没有其他时区信息的情况下默认使用 UTC

如果上述步骤未产生任何信息，我们将使用 UTC 作为时区来创建 git 提交。

[rfc]: http://tools.ietf.org/html/rfc6570
[uri]: https://github.com/hannesg/uri_template

[pagination-guide]: /guides/traversing-with-pagination

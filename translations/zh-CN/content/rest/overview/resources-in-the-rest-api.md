---
title: REST API 中的资源
intro: '了解如何导航 {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %} API 提供的资源。'
redirect_from:
  - /rest/initialize-the-repo
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
miniTocMaxHeadingLevel: 3
topics:
  - API
ms.openlocfilehash: 4fd3e2aad72ee0ffc4778a86dc99cd5bb6f9d2c5
ms.sourcegitcommit: 4daa156856e651cb3854ead40e35bd918e481ad6
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 12/02/2022
ms.locfileid: '148190397'
---
{% ifversion api-date-versioning %}
## API 版本

可用资源可能因不同的 REST API 版本而异。 应使用 `X-GitHub-Api-Version` 标头指定 API 版本。 有关详细信息，请参阅“[API 版本](/rest/overview/api-versions)”。

{% endif %}

## 架构

{% ifversion fpt or ghec %}所有 API 访问都通过 HTTPS 进行，并且{% else %}API{% endif %} 从 `{% data variables.product.api_url_code %}` 进行访问。  所有数据都以 JSON 格式发送和接收。

```shell
$ curl -I {% data variables.product.api_url_pre %}/users/octocat/orgs

> HTTP/2 200
> Server: nginx
> Date: Fri, 12 Oct 2012 23:33:14 GMT
> Content-Type: application/json; charset=utf-8
> ETag: "a00049ba79152d03380c34652f2cb612"
> X-GitHub-Media-Type: github.v3
> x-ratelimit-limit: 5000
> x-ratelimit-remaining: 4987
> x-ratelimit-reset: 1350085394{% ifversion ghes %}
> X-GitHub-Enterprise-Version: {{ currentVersion | remove: "enterprise-server@" }}.0{% elsif ghae %}
> X-GitHub-Enterprise-Version: GitHub AE{% endif %}
> Content-Length: 5
> Cache-Control: max-age=0, private, must-revalidate
> X-Content-Type-Options: nosniff
```

空白字段包含为 `null`，而不是被省略。

所有时间戳以 ISO 8601 格式返回 UTC 时间：

    YYYY-MM-DDTHH:MM:SSZ

有关时间戳中的时区的详细信息，请参阅[本部分](#timezones)。

### 摘要表示

提取资源列表时，响应包含该资源的属性子集。 这就是资源的“摘要”表示形式。 （对于某些属性，API 要经过大量计算后才可提供。
出于性能考虑，摘要表示排除了这些属性。
要获得这些属性，请获取“详细”表示。)

示例：在获取存储库列表时，会获取每个存储库的摘要表示形式。 在这里，我们提取 [octokit](https://github.com/octokit) 组织拥有的存储库列表：

    GET /orgs/octokit/repos

### 详细表示

提取单个资源时，响应通常包含该资源的所有属性。 这就是资源的“详细”表示形式。 （请注意，授权有时会影响表示形式中包含的详细信息量。）

示例：在获取单个存储库时，会获取该存储库的详细表示形式。 在这里，我们提取 [octokit/octokit.rb](https://github.com/octokit/octokit.rb) 存储库：

    GET /repos/octokit/octokit.rb

本文档提供每种 API 方法的示例响应。 示例响应说明了该方法返回的所有属性。

## 身份验证

{% ifversion ghae %} 建议通过 [Web 应用程序流](/developers/apps/authorizing-oauth-apps#web-application-flow)创建 OAuth2 令牌，对 {% data variables.product.product_name %} REST API 进行身份验证。 {% else %} 有两种方式可用于通过 {% data variables.product.product_name %} REST API 进行身份验证。{% endif %}在某些地方，需要身份验证的请求将返回 `404 Not Found` 而不是 `403 Forbidden`。  这是为了防止私有仓库意外泄露给未经授权的用户。

### 基本身份验证

```shell
$ curl -u "username" {% data variables.product.api_url_pre %}
```

### OAuth2 令牌（在标头中发送）

```shell
$ curl -H "Authorization: Bearer OAUTH-TOKEN" {% data variables.product.api_url_pre %}
```

{% note %}

注：GitHub 建议使用授权标头发送 OAuth 令牌。

{% endnote %}

{% note %}

注意：{% data reusables.getting-started.bearer-vs-token %}

{% endnote %}

阅读[有关 OAuth2 的详细信息](/apps/building-oauth-apps/)。  请注意，可以使用用于生产应用程序的 [Web 应用程序流](/developers/apps/authorizing-oauth-apps#web-application-flow)来获取 OAuth2 令牌。

{% ifversion fpt or ghes or ghec %}
### OAuth2 键/密钥

{% data reusables.apps.deprecating_auth_with_query_parameters %}

```shell
curl -u my_client_id:my_client_secret '{% data variables.product.api_url_pre %}/user/repos'
```

使用 `client_id` 和 `client_secret` 不会以用户身份进行身份验证，它只会识别 OAuth 应用以增加速率限制。 权限仅授予用户，而不授予应用程序，因此只会返回未经验证用户可以看到的数据。 因此，您应该仅在服务器到服务器的场景中使用 OAuth2 键/密钥。 不要将 OAuth 应用程序的客户端密钥泄露给用户。

{% ifversion ghes %} 在专用模式下，无法使用 OAuth2 密钥和机密进行身份验证，并且尝试进行身份验证将返回 `401 Unauthorized`。 有关详细信息，请参阅“[启用专用模式](/admin/configuration/configuring-your-enterprise/enabling-private-mode)”。
{% endif %} {% endif %}

{% ifversion fpt or ghec %}

阅读[有关未经身份验证的速率限制的详细信息](#increasing-the-unauthenticated-rate-limit-for-oauth-apps)。

{% endif %}

### 失败登录限制

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
$ curl -i {% data variables.product.api_url_pre %} -u {% ifversion fpt or ghae or ghec %}
-u VALID_USERNAME:VALID_TOKEN {% endif %}{% ifversion ghes %}-u VALID_USERNAME:VALID_PASSWORD {% endif %}
> HTTP/2 403
> {
>   "message": "Maximum number of login attempts exceeded. Please try again later.",
>   "documentation_url": "{% data variables.product.doc_url_pre %}"
> }
```

## 参数

许多 API 方法采用可选参数。 对于 `GET` 请求，路径中任何未指定为段的参数都可以作为 HTTP 查询字符串参数进行传递：

```shell
$ curl -i "{% data variables.product.api_url_pre %}/repos/vmg/redcarpet/issues?state=closed"
```

在此示例中，在查询字符串中传递 `:state` 时，为路径中的 `:owner` 和 `:repo` 参数提供“vmg”和“redcarpet”值。

对于 `POST`、`PATCH`、`PUT` 和 `DELETE` 请求，未包含在 URL 中的参数应编码为 JSON，内容类型为“application/json”：

```shell
$ curl -i -u username -d '{"scopes":["repo_deployment"]}' {% data variables.product.api_url_pre %}/authorizations
```

## 根终结点

可以向根终结点发出 `GET` 请求，以获取 REST API 支持的所有终结点类别：

```shell
$ curl {% ifversion fpt or ghae or ghec %}
-u USERNAME:TOKEN {% endif %}{% ifversion ghes %}-u USERNAME:PASSWORD {% endif %}{% data variables.product.api_url_pre %}
```

## GraphQL 全局节点 ID

有关如何通过 REST API 查找 `node_id` 并在 GraphQL 操作中使用它们的详细信息，请参阅有关“[使用全局节点 ID](/graphql/guides/using-global-node-ids)”的指南。

## 客户端错误

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

3. 发送无效字段将导致 `422 Unprocessable Entity` 响应。

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

所有错误对象都具有资源和字段属性，以便客户端可以知道问题所在。  还有一个错误代码，让你知道该字段有什么问题。  以下是可能的验证错误代码：

错误代码名称 | 说明
-----------|-----------|
`missing` | 资源不存在。
`missing_field` | 资源上的必需字段尚未设置。
`invalid` | 字段的格式无效。  请查看文档以了解更具体的信息。
`already_exists` | 另一个资源具有与此字段相同的值。  在必须具有某些唯一键（例如标签名称）的资源中可能会发生这种情况。
`unprocessable` | 提供的输入无效。

资源还可能发送自定义验证错误（其中 `code` 为 `custom`）。 自定义错误将始终包含一个描述错误的 `message` 字段，大多数错误还将包括一个 `documentation_url` 字段，该字段指向可能有助于解决错误的某些内容。

## HTTP 重定向

{% data variables.product.product_name %} 在适当情况下使用 HTTP 重定向。 客户端应假定任何请求都可能会导致重定向。 接收 HTTP 重定向不是错误，客户端应遵循该重定向。 重定向响应将包含一个 `Location` 标头字段，其中包含客户端应重复请求的资源的 URI。

状态代码 | 说明
-----------|-----------|
`301` | 永久重定向。 用于发出请求的 URI 已被 `Location` 标头字段中指定的 URI 所取代。 此请求以及对此资源的所有未来请求都应定向到新的 URI。
`302`, `307` | 临时重定向。 请求应按 `Location` 标头字段中指定的 URI 逐字重复，但客户端应对未来的请求继续使用原来的 URI。

其他重定向状态代码可根据 HTTP 1.1 规范使用。

## HTTP 谓词

在可能的情况下，{% data variables.product.product_name %} REST API 尽量为每个操作使用适当的 Http 谓词。 请注意，HTTP 谓词区分大小写。

谓词 | 说明
-----|-----------
`HEAD` | 可以针对任何资源发出以仅获取 HTTP 标头信息。
`GET` | 用于检索资源。
`POST` | 用于创建资源。
`PATCH` | 用于通过部分 JSON 数据更新资源。 例如，问题资源具有 `title` 和 `body` 属性。 `PATCH` 请求可以接受一个或多个属性来更新资源。
`PUT` | 用于替换资源或集合。 对于没有 `body` 属性的 `PUT` 请求，请确保将 `Content-Length` 标头设置为零。
`DELETE` |用于删除资源。

## 超媒体

所有资源都可以具有一个或多个链接到其他资源的 `*_url` 属性。  这些属性旨在提供明确的 URL，使适当的 API 客户端不需要自己构建 URL。  强烈建议 API 客户端使用这些属性。  这样做有助于开发者未来更容易升级 API。  所有 URL 都应该是适当的 [RFC 6570][rfc] URI 模板。

然后，可以使用 [uri_template][uri] gem 之类的内容来扩展这些模板：

    >> tmpl = URITemplate.new('/notifications{?since,all,participating}')
    >> tmpl.expand
    => "/notifications"

    >> tmpl.expand all: 1
    => "/notifications?all=1"

    >> tmpl.expand all: 1, participating: 1
    => "/notifications?all=1&participating=1"

[rfc]: https://datatracker.ietf.org/doc/html/rfc6570
[uri]: https://github.com/hannesg/uri_template

## 分页

默认情况下，如果请求返回了多个项，将按每页最多 30 项进行分页。  可以使用 `page` 参数指定更多页面。 对于某些资源，还可以使用 `per_page` 参数设置自定义页面大小，每页最多 100 项。
请注意，由于技术原因，并非所有终结点都遵守 `per_page` 参数，例如，请参阅[事件](/rest/reference/activity#events)。

```shell
$ curl '{% data variables.product.api_url_pre %}/user/repos?page=2&per_page=100'
```

请注意，页码从 1 开始，省略 `page` 参数将返回第一页。

有些端点使用基于光标的分页。 光标是指向结果集中位置的字符串。
使用基于光标的分页时，结果集中没有固定的“页”概念，因此无法导航到特定页面。
相反，可以使用 `before` 或 `after` 参数遍历结果。

有关分页的详细信息，请查看有关[使用分页遍历][pagination-guide]的指南。

### 链接标头

{% note %}

注意：请务必使用链接标头值构成调用，而不是构建自己的 URL。

{% endnote %}

[链接标头](https://datatracker.ietf.org/doc/html/rfc5988)包括分页信息。 例如：

    Link: <{% data variables.product.api_url_code %}/user/repos?page=3&per_page=100>; rel="next",
      <{% data variables.product.api_url_code %}/user/repos?page=50&per_page=100>; rel="last"

该示例包括换行符，以提高可读性。

或者，如果端点使用基于光标的分页：

    Link: <{% data variables.product.api_url_code %}/orgs/ORG/audit-log?after=MTYwMTkxOTU5NjQxM3xZbGI4VE5EZ1dvZTlla09uWjhoZFpR&before=>; rel="next",

此 `Link` 响应头包含一个或多个[超媒体](/rest#hypermedia)链接关系，其中一些关系可能需要扩展为 [URI 模板](https://datatracker.ietf.org/doc/html/rfc6570)。

可能的 `rel` 值为：

名称 | 说明
-----------|-----------|
`next` |结果下一页的链接关系
`last` |结果最后一页的链接关系。
`first` |结果第一页的链接关系。
`prev` |结果前一页的链接关系。

## 超时

如果 {% data variables.product.prodname_dotcom %} 处理 API 请求的时间超过 10 秒，{% data variables.product.prodname_dotcom %} 将终止请求，你将收到如下所示的超时响应：

```json
{
    "message": "Server Error"
}
```

{% data variables.product.product_name %} 保留更改超时窗口的权利，以保护 API 的速度和可靠性。

## 速率限制

对 {% data variables.location.product_location %} 的不同类型的 API 请求遵循不同的费率限制。 

此外，搜索 API 有专门的限制。 有关详细信息，请参阅 REST API 文档中的“[搜索](/rest/reference/search#rate-limit)”。

{% data reusables.enterprise.rate_limit %}

{% data reusables.rest-api.always-check-your-limit %}

### 来自个人帐户的请求

使用 {% data variables.product.pat_generic %} 进行身份验证的直接 API 请求是用户到服务器的请求。 OAuth 应用程序或 GitHub 应用程序也可以在您授权应用程序后代表您提出用户到服务器的请求。 有关详细信息，请参阅“[创建 {% data variables.product.pat_generic %}](/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)”、“[授权 OAuth 应用](/authentication/keeping-your-account-and-data-secure/authorizing-oauth-apps)”和“[授权 GitHub 应用](/authentication/keeping-your-account-and-data-secure/authorizing-github-apps)”。

{% data variables.product.product_name %} 将所有用户到服务器的请求与经过身份验证的用户相关联。 对于OAuth 应用程序和 GitHub 应用程序，这是授权应用程序的用户。 所有用户到服务器的请求都会计入经过身份验证的用户的速率限制。

{% data reusables.apps.user-to-server-rate-limits %}

{% ifversion fpt or ghec %}

{% data reusables.apps.user-to-server-rate-limits-ghec %}

{% ifversion fpt or ghec or ghes %}

对于未经验证的请求，速率限制允许每小时最多 60 个请求。 未经验证的请求与原始 IP 地址相关联，与发出请求的个人无关。

{% endif %}

{% endif %}

### 来自 GitHub 应用程序的请求

来自 GitHub 应用的请求可以是用户到服务器的请求，也可以是服务器到服务器的请求。 有关 GitHub 应用的速率限制的详细信息，请参阅“[GitHub 应用的速率限制](/developers/apps/building-github-apps/rate-limits-for-github-apps)”。 

### 来自 GitHub Actions 的请求

可以使用内置的 `GITHUB_TOKEN` 来验证 GitHub Actions 工作流中的请求。 有关详细信息，请参阅“[自动令牌身份验证](/actions/security-guides/automatic-token-authentication)”。

使用 `GITHUB_TOKEN` 时，速率限制为每个存储库每小时 1,000 个请求。{% ifversion fpt or ghec %} 如果请求属于 {% data variables.location.product_location %} 上的企业帐户的资源，{% data variables.product.prodname_ghe_cloud %} 的速率限制适用，并且限制为每个存储库每小时 15,000 个请求。{% endif %}

### 检查您的速率限制状态

速率限制 API 和响应的 HTTP 标头是您或您的应用在任何给定时间可用的当前 API 调用数的权威来源。

#### 速率限制 API

您可以使用速率限制 API 检查速率限制状态，而不会对当前限制造成影响。 有关详细信息，请参阅“[速率限制](/rest/reference/rate-limit)”。

#### 速率限制 HTTP 标头

任何 API 请求返回的 HTTP 标头都显示当前速率限制状态：

```shell
$ curl -I {% data variables.product.api_url_pre %}/users/octocat
> HTTP/2 200
> Date: Mon, 01 Jul 2013 17:27:06 GMT
> x-ratelimit-limit: 60
> x-ratelimit-remaining: 56
> x-ratelimit-used: 4
> x-ratelimit-reset: 1372700873
```

标头名称 | 说明
-----------|-----------|
`x-ratelimit-limit` | 每小时允许您发出的最大请求数。
`x-ratelimit-remaining` | 当前速率限制窗口中剩余的请求数。
`x-ratelimit-used` | 当前速率限制窗口中已发出的请求数。
`x-ratelimit-reset` | 当前速率限制窗口重置的时间，单位为 [UTC 纪元秒](http://en.wikipedia.org/wiki/Unix_time)。

如果您需要不同格式的时间，任何现代编程语言都可以实现您的目标。 例如，如果您在 Web 浏览器上打开控制台，您可以轻松地以 JavaScript Date 对象获取重置时间。

``` javascript
new Date(1372700873 * 1000)
// => Mon Jul 01 2013 13:47:53 GMT-0400 (EDT)
```

如果超过速率限制，错误响应将返回：

```shell
> HTTP/2 403
> Date: Tue, 20 Aug 2013 14:50:41 GMT
> x-ratelimit-limit: 60
> x-ratelimit-remaining: 0
> x-ratelimit-used: 60
> x-ratelimit-reset: 1377013266

> {
>    "message": "API rate limit exceeded for xxx.xxx.xxx.xxx. (But here's the good news: Authenticated requests get a higher rate limit. Check out the documentation for more details.)",
>    "documentation_url": "{% data variables.product.doc_url_pre %}/overview/resources-in-the-rest-api#rate-limiting"
> }
```

### 提高 OAuth 应用程序的未经验证速率限制

如果您的 OAuth 应用程序需要以更高的速率限制进行未经验证的调用， 您可以在端点路由之前传递应用程序的客户端 ID 和密钥。

```shell
$ curl -u my_client_id:my_client_secret -I {% data variables.product.api_url_pre %}/user/repos
> HTTP/2 200
> Date: Mon, 01 Jul 2013 17:27:06 GMT
> x-ratelimit-limit: 5000
> x-ratelimit-remaining: 4966
> x-ratelimit-used: 34
> x-ratelimit-reset: 1372700873
```

{% note %}

注意：切勿与任何人共享客户端密码，也不要将其包含在客户端浏览器代码中。 仅将此处显示的方法用于服务器到服务器的调用。

{% endnote %}

### 保持在速率限制之内

如果使用基本身份验证或 OAuth 时超出了速率限制，则可以通过缓存 API 响应和使用[条件请求](#conditional-requests)来解决此问题。

### 二级费率限制

为了在 {% data variables.product.product_name %} 上提供优质的服务，使用 API 时，某些操作可能会受到额外的速率限制。 例如，使用 API 快速创建内容、主动轮询而不是使用 web 挂钩、发出多个并发请求或重复请求计算成本高昂的数据，可能会导致二级费率限制。

二级费率限制无意干扰 API 的合法使用。 您的正常速率限制应该是您目标的唯一限制。 为了确保成为 API 好公民，请查看[最佳做法指南](/guides/best-practices-for-integrators/)。

如果您的应用程序触发此速率限制，您将收到信息响应：

```shell
> HTTP/2 403
> Content-Type: application/json; charset=utf-8
> Connection: close

> {
>   "message": "You have exceeded a secondary rate limit and have been temporarily blocked from content creation. Please retry your request again later.",
>   "documentation_url": "{% data variables.product.doc_url_pre %}/overview/resources-in-the-rest-api#secondary-rate-limits"
> }
```

{% ifversion fpt or ghec %}

## 必需用户代理

所有 API 请求都必须包含有效的 `User-Agent` 标头。 没有 `User-Agent` 标头的请求将被拒绝。 我们要求你使用 {% data variables.product.product_name %} 用户名或应用程序的名称作为 `User-Agent` 标头值。 这是为了方便我们在发现问题时与您联系 。

下面是一个示例：

```shell
User-Agent: Awesome-Octocat-App
```

默认情况下，cURL 发送有效的 `User-Agent` 标头。 如果通过 cURL（或通过备用客户端）提供无效的 `User-Agent` 标头，则将收到 `403 Forbidden` 响应：

```shell
$ curl -IH 'User-Agent: ' {% data variables.product.api_url_pre %}/meta
> HTTP/1.0 403 Forbidden
> Connection: close
> Content-Type: text/html

> Request forbidden by administrative rules.
> Please make sure your request has a User-Agent header.
> Check  for other possible causes.
```

{% endif %}

## 条件请求

大多数响应都返回 `ETag` 标头。 许多响应还返回 `Last-Modified` 标头。 可以使用这些标头的值分别使用 `If-None-Match` 和 `If-Modified-Since` 标头向这些资源发出后续请求。 如果资源未发生更改，服务器将返回 `304 Not Modified`。

{% ifversion fpt or ghec %}

{% tip %}

注意：发出条件请求并收到 304 响应不计入[速率限制](#rate-limiting)，因此我们鼓励你尽可能地使用它。

{% endtip %}

{% endif %}

```shell
$ curl -I {% data variables.product.api_url_pre %}/user
> HTTP/2 200
> Cache-Control: private, max-age=60
> ETag: "644b5b0155e6404a9cc4bd9d8b1ae730"
> Last-Modified: Thu, 05 Jul 2012 15:31:30 GMT
> Vary: Accept, Authorization, Cookie
> x-ratelimit-limit: 5000
> x-ratelimit-remaining: 4996
> x-ratelimit-reset: 1372700873

$ curl -I {% data variables.product.api_url_pre %}/user -H 'If-None-Match: "644b5b0155e6404a9cc4bd9d8b1ae730"'
> HTTP/2 304
> Cache-Control: private, max-age=60
> ETag: "644b5b0155e6404a9cc4bd9d8b1ae730"
> Last-Modified: Thu, 05 Jul 2012 15:31:30 GMT
> Vary: Accept, Authorization, Cookie
> x-ratelimit-limit: 5000
> x-ratelimit-remaining: 4996
> x-ratelimit-reset: 1372700873

$ curl -I {% data variables.product.api_url_pre %}/user -H "If-Modified-Since: Thu, 05 Jul 2012 15:31:30 GMT"
> HTTP/2 304
> Cache-Control: private, max-age=60
> Last-Modified: Thu, 05 Jul 2012 15:31:30 GMT
> Vary: Accept, Authorization, Cookie
> x-ratelimit-limit: 5000
> x-ratelimit-remaining: 4996
> x-ratelimit-reset: 1372700873
```

## 跨源资源共享

API 支持来自任何源的 AJAX 请求的跨源资源共享 (CORS)。
可以阅读 [CORS W3C 建议](http://www.w3.org/TR/cors/)，或 HTML 5 安全指南中的[此简介](https://code.google.com/archive/p/html5security/wikis/CrossOriginRequestSecurity.wiki)。

下面是从浏览器点击 `http://example.com` 发送的请求示例：

```shell
$ curl -I {% data variables.product.api_url_pre %} -H "Origin: http://example.com"
HTTP/2 302
Access-Control-Allow-Origin: *
Access-Control-Expose-Headers: ETag, Link, X-GitHub-OTP, x-ratelimit-limit, x-ratelimit-remaining, x-ratelimit-reset, X-OAuth-Scopes, X-Accepted-OAuth-Scopes, X-Poll-Interval
```

以下是 CORS 预检请求的示例：

```shell
$ curl -I {% data variables.product.api_url_pre %} -H "Origin: http://example.com" -X OPTIONS
HTTP/2 204
Access-Control-Allow-Origin: *
Access-Control-Allow-Headers: Authorization, Content-Type, If-Match, If-Modified-Since, If-None-Match, If-Unmodified-Since, X-GitHub-OTP, X-Requested-With
Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE
Access-Control-Expose-Headers: ETag, Link, X-GitHub-OTP, x-ratelimit-limit, x-ratelimit-remaining, x-ratelimit-reset, X-OAuth-Scopes, X-Accepted-OAuth-Scopes, X-Poll-Interval
Access-Control-Max-Age: 86400
```

## JSON-P 回调

可以向任何 GET 调用发送 `?callback` 参数，以便将结果包装在 JSON 函数中。  当浏览器希望绕开跨域问题将 {% data variables.product.product_name %} 内容嵌入网页时，通常使用此方法。  响应包括与常规 API 相同的数据输出，加上相关的 HTTP 标头信息。

```shell
$ curl {% data variables.product.api_url_pre %}?callback=foo

> /**/foo({
>   "meta": {
>     "status": 200,
>     "x-ratelimit-limit": "5000",
>     "x-ratelimit-remaining": "4966",
>     "x-ratelimit-reset": "1372700873",
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

所有标头都具有与 HTTP 标头相同的字符串值，但有一个值得注意的例外：链接。  链接标头已预先解析，并以 `[url, options]` 元组的数组形式出现。

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

## 时区

某些创建新数据的请求（例如创建新的提交）允许您在指定或生成时间戳时提供时区信息。 我们按照优先顺序应用以下规则来确定这些 API 调用的时区信息。

* [明确提供带有时区信息的 ISO 8601 时间戳](#explicitly-providing-an-iso-8601-timestamp-with-timezone-information)
* [使用 `Time-Zone` 标头](#using-the-time-zone-header)
* [使用用户的最后一个已知时区](#using-the-last-known-timezone-for-the-user)
* [在没有其他时区信息的情况下默认使用 UTC](#defaulting-to-utc-without-other-timezone-information)

请注意，这些规则仅适用于传递给 API 的数据，而不适用于 API 返回的数据。 如“[架构](#schema)”中所述，API 返回的时间戳采用 UTC 时间、ISO 8601 格式。

### 明确提供带有时区信息的 ISO 8601 时间戳

对于允许指定时间戳的 API 调用，我们使用这种明确的时间戳。 一个示例是[提交 API](/rest/reference/git#commits)。

这些时间戳类似于 `2014-02-27T15:05:06+01:00`。 如需了解如何指定这些时间戳，另请参阅[此示例](/rest/reference/git#example-input)。

### 使用 `Time-Zone` 标头

可以提供一个 `Time-Zone` 标头，该标头根据 [Olson 数据库中的名称列表](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones)定义时区。

```shell
$ curl -H "Time-Zone: Europe/Amsterdam" -X POST {% data variables.product.api_url_pre %}/repos/github/linguist/contents/new_file.md
```

这意味着当您在这个标题定义的时区做出 API 调用时，我们会生成一个时间戳。 例如，[内容 API](/rest/reference/repos#contents) 为每个添加或更改生成 git 提交，并使用当前时间作为时间戳。 此标头将确定用于生成当前时间戳的时区。

### 使用用户的最后一个已知时区

如果未指定 `Time-Zone` 标头，并且你对 API 进行经过身份验证的调用，则我们对经过身份验证的用户使用最后一个已知时区。 最新一个已知的时区在您浏览 {% data variables.product.product_name %} 网站时都会更新。

### 在没有其他时区信息的情况下默认使用 UTC

如果上述步骤未产生任何信息，我们将使用 UTC 作为时区来创建 git 提交。

[pagination-guide]: /guides/traversing-with-pagination

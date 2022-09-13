---
title: REST API 入门
intro: 从身份验证和一些端点示例开始，了解使用 REST API 的基础。
redirect_from:
  - /guides/getting-started
  - /v3/guides/getting-started
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
shortTitle: Get started - REST API
ms.openlocfilehash: a466a3ccad214c8fe797dd73e4e96af3ab6eead8
ms.sourcegitcommit: 8544f120269257d01adfe4a27b62f08fc8691727
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 08/02/2022
ms.locfileid: '147445078'
---
让我们逐步了解在处理一些日常用例时涉及的核心 API 概念。

{% data reusables.rest-api.dotcom-only-guide-note %}

## <a name="overview"></a>概述

大多数应用程序将使用所选语言的现有[包装器库][wrappers]，但你需要先熟悉基础 API HTTP 方法。

没有比使用 [cURL][curl] 更容易的入手方式了。{% ifversion fpt or ghec %} 如果你使用其他客户端，请注意，你需要在请求中发送有效的[用户代理标头](/rest/overview/resources-in-the-rest-api#user-agent-required)。{% endif %}

### <a name="hello-world"></a>Hello World

让我们先测试设置。 打开命令提示符并输入以下命令：

```shell
$ curl https://api.github.com/zen

> Keep it logically awesome.
```

响应将是我们设计理念中的随机选择。

接下来，让我们 `GET`[Chris Wanstrath 的][defunkt github] [GitHub 配置文件][users api]：

```shell
# GET /users/defunkt
$ curl https://api.github.com/users/defunkt

> {
>   "login": "defunkt",
>   "id": 2,
>   "node_id": "MDQ6VXNlcjI=",
>   "avatar_url": "https://avatars.githubusercontent.com/u/2?v=4",
>   "gravatar_id": "",
>   "url": "https://api.github.com/users/defunkt",
>   "html_url": "https://github.com/defunkt",
>   ...
> }
```

嗯，类似于 [JSON][json]。 让我们添加 `-i` 标志以包含标头：

```shell
$ curl -i https://api.github.com/users/defunkt

> HTTP/2 200
> server: GitHub.com
> date: Thu, 08 Jul 2021 07:04:08 GMT
> content-type: application/json; charset=utf-8
> cache-control: public, max-age=60, s-maxage=60
> vary: Accept, Accept-Encoding, Accept, X-Requested-With
> etag: W/"61e964bf6efa3bc3f9e8549e56d4db6e0911d8fa20fcd8ab9d88f13d513f26f0"
> last-modified: Fri, 01 Nov 2019 21:56:00 GMT
> x-github-media-type: github.v3; format=json
> access-control-expose-headers: ETag, Link, Location, Retry-After, X-GitHub-OTP, X-RateLimit-Limit, X-RateLimit-Remaining, X-RateLimit-Used, X-RateLimit-Resource, X-RateLimit-Reset, X-OAuth-Scopes, X-Accepted-OAuth-Scopes, X-Poll-Interval, X-GitHub-Media-Type, Deprecation, Sunset
> access-control-allow-origin: *
> strict-transport-security: max-age=31536000; includeSubdomains; preload
> x-frame-options: deny
> x-content-type-options: nosniff
> x-xss-protection: 0
> referrer-policy: origin-when-cross-origin, strict-origin-when-cross-origin
> content-security-policy: default-src 'none'
> x-ratelimit-limit: 60
> x-ratelimit-remaining: 53
> x-ratelimit-reset: 1625731053
> x-ratelimit-resource: core
> x-ratelimit-used: 7
> accept-ranges: bytes
> content-length: 1305
> x-github-request-id: 9F60:7019:ACC5CD5:B03C931:60E6A368
>
> {
>  "login": "defunkt",
>  "id": 2,
>  "node_id": "MDQ6VXNlcjI=",
>  "avatar_url": "https://avatars.githubusercontent.com/u/2?v=4",
>  "gravatar_id": "",
>  "url": "https://api.github.com/users/defunkt",
>  "html_url": "https://github.com/defunkt",
>
>   ...
> }
```

响应标头中有一些有趣的地方。 正如预期的那样，`Content-Type` 为 `application/json`。

任何以 `X-` 开头的标头都是自定义标头，不包含在 HTTP 规范中。例如，记下 `X-RateLimit-Limit` 和 `X-RateLimit-Remaining` 标头。 这对标头指示在滚动时间段（通常为一小时）内[一个客户端可以发出多少个请求][rate-limiting]，以及该客户端已发送其中多少个请求。

## <a name="authentication"></a>身份验证

未经身份验证的客户端每小时可以发出 60 个请求。 要每小时发出更多请求，我们需要进行身份验证。 事实上，使用 {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %} API 进行任何交互都需要[身份验证][authentication]。

### <a name="using-personal-access-tokens"></a>使用个人访问令牌

使用 {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %} API 进行身份验证的最简单和最佳的方式是[通过 OAuth 令牌](/rest/overview/other-authentication-methods#via-oauth-and-personal-access-tokens)使用基本身份验证。 OAuth 令牌包括[个人访问令牌][personal token]。

使用 `-u` 标志设置你的用户名：

```shell
$ curl -i -u <em>your_username</em> {% data variables.product.api_url_pre %}/users/octocat

```

出现提示时，您可以输入 OAuth 令牌，但我们建议您为它设置一个变量：

你可以使用 `-u "your_username:$token"` 并为 `token` 设置一个变量，以避免你的令牌留在 shell 历史记录中，这种情况应尽量避免。

```shell
$ curl -i -u <em>your_username:$token</em> {% data variables.product.api_url_pre %}/users/octocat

```

进行身份验证时，你应该会看到你的速率限制达到每小时 5,000 个请求，如 `X-RateLimit-Limit` 标头中所示。 除了每小时提供更多调用次数之外，身份验证还使您能够使用 API 读取和写入私有信息。

可以使用[个人访问令牌设置页][tokens settings]轻松[创建个人访问令牌][personal token]：

{% warning %}

为了帮助保护您的信息安全，我们强烈建议为您的个人访问令牌设置一个到期日。

{% endwarning %}

{% ifversion fpt or ghes or ghec %} ![个人访问令牌](/assets/images/personal_token.png) {% endif %}

{% ifversion ghae %} ![个人令牌选择](/assets/images/help/personal_token_ghae.png) {% endif %}

使用到期的个人访问令牌的 API 请求将通过 `GitHub-Authentication-Token-Expiration` 标头返回该令牌的到期日期。 当令牌接近其过期日期时，您可以使用脚本中的标头来提供警告信息。

### <a name="get-your-own-user-profile"></a>获取自己的用户个人资料

在正确验证身份后，你可以利用与 {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %} 上的帐户相关的权限。 例如，尝试获取[自己的用户配置文件][auth user api]：

```shell
$ curl -i -u <em>your_username</em>:<em>your_token</em> {% data variables.product.api_url_pre %}/user

> {
>   ...
>   "plan": {
>     "space": 2516582,
>    "collaborators": 10,
>    "private_repos": 20,
>    "name": "medium"
>  }
>   ...
> }
```

此时，除了先前为 [@defunkt][defunkt github] 检索到的公共信息集之外，你还可以查看你的用户个人资料的非公共信息。 例如，你将在响应中看到 `plan` 对象，它提供有关帐户的 {% data variables.product.product_name %} 计划的详细信息。

### <a name="using-oauth-tokens-for-apps"></a>对应用程序使用 OAuth 令牌

需要代表其他用户使用 API 读取或写入专用信息的应用程序应使用 [OAuth][oauth]。

OAuth 使用令牌。 令牌具有两大特点：

* 可撤销访问权限：用户可以随时撤销对第三方应用程序的授权
* 有限访问权限：用户可以在对第三方应用授权前审查令牌将提供的具体访问权限

应通过 [Web 流][webflow]创建令牌。 应用程序将用户发送到 {% data variables.product.product_name %} 进行登录。 {% data variables.product.product_name %} 随后显示一个对话框，指示应用的名称以及应用经用户授权后具有的权限级别。 经用户授权访问后，{% data variables.product.product_name %} 将用户重定向到应用程序：

![GitHub 的 OAuth 提示](/assets/images/oauth_prompt.png)

**将 OAuth 令牌视为密码！** 不要与其他用户共享它们，也不要将其存储在不安全的地方。 这些示例中的令牌是虚构的，并且更改了名称以免波及无辜。

现在我们已经掌握了进行经身份验证的调用，接下来介绍[存储库 API][repos-api]。

## <a name="repositories"></a>存储库

几乎任何有意义的 {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %} API 使用都会涉及某种级别的存储库信息。 我们可以像之前提取用户详细信息一样 [`GET` 存储库详细信息][get repo]：

```shell
$ curl -i {% data variables.product.api_url_pre %}/repos/twbs/bootstrap
```

以同样的方式，我们可以[查看经过身份验证的用户的存储库][user repos api]：

```shell
$ curl -i -H "Authorization: token ghp_16C7e42F292c6912E7710c838347Ae178B4a" \
    {% data variables.product.api_url_pre %}/user/repos
```

或者，我们可以[列出其他用户的存储库][other user repos api]：

```shell
$ curl -i {% data variables.product.api_url_pre %}/users/octocat/repos
```

或者，我们可以[列出组织的存储库][org repos api]：

```shell
$ curl -i {% data variables.product.api_url_pre %}/orgs/octo-org/repos
```

从这些调用返回的信息将取决于我们进行身份验证时令牌所具有的作用域：

{%- ifversion fpt or ghec or ghes %}
* 具有 `public_repo` [作用域][scopes]的令牌返回的响应包含我们在 {% data variables.product.product_location %} 上有权查看的所有公共存储库。
{%- endif %}
* 具有 `repo` [作用域][scopes]的令牌返回的响应包含我们在 {% data variables.product.product_location %} 上有权查看的所有{% ifversion fpt %}public or private{% elsif ghec or ghes %}公共、专用或内部{% elsif ghae %}private or internal{% endif %}存储库。

如[文档][repos-api]所示，这些方法采用 `type` 参数，可根据用户对存储库的访问权限类型来筛选返回的存储库。 这样，我们可以只提取直接拥有的存储库、组织存储库或用户通过团队进行协作的存储库。

```shell
$ curl -i "{% data variables.product.api_url_pre %}/users/octocat/repos?type=owner"
```

在此示例中，我们只获取 octocat 拥有的存储库，而没有获取她协作的存储库。 请注意上面的引用 URL。 根据你的 shell 设置，cURL 有时需要一个引用 URL，否则它会忽略查询字符串。

### <a name="create-a-repository"></a>创建存储库

提取现有存储库的信息是一种常见的用例，但 {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %} API 也支持创建新的存储库。 要[创建存储库][create repo]，我们需要 `POST` 一些包含详细信息和配置选项的 JSON。

```shell
$ curl -i -H "Authorization: token ghp_16C7e42F292c6912E7710c838347Ae178B4a" \
    -d '{
        "name": "blog",
        "auto_init": true,
        "private": true,
        "gitignore_template": "nanoc"
      }' \
    {% data variables.product.api_url_pre %}/user/repos
```

在这个最小的示例中，我们为博客（也许要在 [GitHub Pages][pages] 上提供）创建了一个新的专用存储库。 虽然博客 {% ifversion not ghae %}将是公开的{% else %}可供所有企业成员访问{% endif %}，但我们已经将仓库设置为私有。 在这一步中，我们还将使用自述文件和 [nanoc][nanoc] 风格的 [.gitignore 模板][gitignore templates]对其进行初始化。

生成的存储库可在 `https://github.com/<your_username>/blog` 上找到。
要在你拥有的组织下创建存储库，只需将 API 方法从 `/user/repos` 更改为 `/orgs/<org_name>/repos`。

接下来，我们将获取新创建的仓库：

```shell
$ curl -i {% data variables.product.api_url_pre %}/repos/pengwynn/blog

> HTTP/2 404

> {
>    "message": "Not Found"
> }
```

哦，不！ 它去哪儿了？ 因为我们将存储库创建为专用存储库，所以需要经过身份验证才能看到它。 如果你是一位资深的 HTTP 用户，你可能会预期返回 `403`。 由于我们不想泄露有关专用存储库的信息，因此在本例中，{% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %} API 返回 `404`，就好像说“我们既不能确认也不能否认这个存储库的存在”。

## <a name="issues"></a>问题

{% data variables.product.product_name %} 上的问题 UI 旨在提供“恰到好处”的工作流，不会妨碍你的其他工作。 通过 {% data variables.product.product_name %} [问题 API][issues-api]，你可以利用其他工具来提取数据或创建问题，以打造适合你的团队的工作流。

与 github.com 一样，API 为经过身份验证的用户提供了一些查看问题的方法。 要[查看所有问题][get issues api]，请调用 `GET /issues`：

```shell
$ curl -i -H "Authorization: token ghp_16C7e42F292c6912E7710c838347Ae178B4a" \
    {% data variables.product.api_url_pre %}/issues
```

要仅获取[某个 {% data variables.product.product_name %} 组织下的问题][get issues api]，请调用 `GET
/orgs/<org>/issues`：

```shell
$ curl -i -H "Authorization: token ghp_16C7e42F292c6912E7710c838347Ae178B4a" \
    {% data variables.product.api_url_pre %}/orgs/rails/issues
```

我们还可以获取[单个存储库下的所有问题][repo issues api]：

```shell
$ curl -i {% data variables.product.api_url_pre %}/repos/rails/rails/issues
```

### <a name="pagination"></a>分页

一个 Rails 规模的项目有数千个议题。 我们需要[分页][pagination]，进行多次 API 调用来获取数据。 让我们重复上一次调用，这次请注意响应头：

```shell
$ curl -i {% data variables.product.api_url_pre %}/repos/rails/rails/issues

> HTTP/2 200

> ...
> Link: &lt;{% data variables.product.api_url_pre %}/repositories/8514/issues?page=2&gt;; rel="next", &lt;{% data variables.product.api_url_pre %}/repositories/8514/issues?page=30&gt;; rel="last"
> ...
```

[`Link` 标头][link-header]为响应提供了一种链接到外部资源（在本例中为附加数据页）的方法。 由于我们的调用发现了超过 30 个问题（默认页面大小），因此 API 将告诉我们在哪里可以找到下一页和最后一页结果。

### <a name="creating-an-issue"></a>创建议题

现在我们已经了解如何对问题列表分页，现在来使用 API [创建问题][create issue]。

要创建问题，我们需要进行身份验证，因此我们将在标头中传递 OAuth 令牌。 此外，我们还将 JSON 正文中的标题、正文和标签传递到要在其中创建问题的存储库下的 `/issues` 路径：

```shell
$ curl -i -H 'Authorization: token ghp_16C7e42F292c6912E7710c838347Ae178B4a' \
$    -d '{ \
$         "title": "New logo", \
$         "body": "We should have one", \
$         "labels": ["design"] \
$       }' \
$    {% data variables.product.api_url_pre %}/repos/pengwynn/api-sandbox/issues

> HTTP/2 201
> Location: {% data variables.product.api_url_pre %}/repos/pengwynn/api-sandbox/issues/17
> X-RateLimit-Limit: 5000

> {
>   "pull_request": {
>     "patch_url": null,
>     "html_url": null,
>     "diff_url": null
>   },
>   "created_at": "2012-11-14T15:25:33Z",
>   "comments": 0,
>   "milestone": null,
>   "title": "New logo",
>   "body": "We should have one",
>   "user": {
>     "login": "pengwynn",
>     "gravatar_id": "7e19cd5486b5d6dc1ef90e671ba52ae0",
>     "avatar_url": "https://secure.gravatar.com/avatar/7e19cd5486b5d6dc1ef90e671ba52ae0?d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
>     "id": 865,
>     "url": "{% data variables.product.api_url_pre %}/users/pengwynn"
>   },
>   "closed_at": null,
>   "updated_at": "2012-11-14T15:25:33Z",
>   "number": 17,
>   "closed_by": null,
>   "html_url": "https://github.com/pengwynn/api-sandbox/issues/17",
>   "labels": [
>     {
>       "color": "ededed",
>       "name": "design",
>       "url": "{% data variables.product.api_url_pre %}/repos/pengwynn/api-sandbox/labels/design"
>     }
>   ],
>   "id": 8356941,
>   "assignee": null,
>   "state": "open",
>   "url": "{% data variables.product.api_url_pre %}/repos/pengwynn/api-sandbox/issues/17"
> }
```

该响应在 `Location` 响应头和 JSON 响应的 `url` 字段中为我们提供了几个指向新创建问题的指针。

## <a name="conditional-requests"></a>条件请求

通过缓存未更改的信息来遵守速率限制，是成为一个良好 API 公民的重要特质。 API 支持[条件请求][conditional-requests]并帮助你正确行事。 请注意我们为获取 defunkt 的个人资料而进行的第一个调用：

```shell
$ curl -i {% data variables.product.api_url_pre %}/users/defunkt

> HTTP/2 200
> etag: W/"61e964bf6efa3bc3f9e8549e56d4db6e0911d8fa20fcd8ab9d88f13d513f26f0"
```

除了 JSON 正文之外，还要注意 HTTP 状态代码 `200` 和 `ETag` 标头。
[ETag][etag] 是响应的指纹。 如果我们在后续调用中传递它，则可以告诉 API 仅在资源发生改变的情况才将其再次提供给我们：

```shell
$ curl -i -H 'If-None-Match: "61e964bf6efa3bc3f9e8549e56d4db6e0911d8fa20fcd8ab9d88f13d513f26f0"' \
$    {% data variables.product.api_url_pre %}/users/defunkt

> HTTP/2 304
```

`304` 状态表示该资源自上次请求以来没有发生改变，该响应将不包含任何正文。 另外，`304` 响应不计入你的[速率限制][rate-limiting]。

现在您了解 {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %} API 的基础知识了！

* 基本和 OAuth 身份验证
* 获取和创建仓库及议题
* 条件请求

继续学习下一个 API 指南[身份验证基础知识][auth guide]！

[wrappers]: /libraries/
[curl]: http://curl.haxx.se/
[media types]: /rest/overview/media-types
[oauth]: /apps/building-integrations/setting-up-and-registering-oauth-apps/
[webflow]: /apps/building-oauth-apps/authorizing-oauth-apps/
[scopes]: /apps/building-oauth-apps/understanding-scopes-for-oauth-apps/
[repos-api]: /rest/reference/repos
[pages]: http://pages.github.com
[nanoc]: http://nanoc.ws/
[gitignore templates]: https://github.com/github/gitignore
[issues-api]: /rest/reference/issues
[link-header]: https://www.w3.org/wiki/LinkHeader
[conditional-requests]: /rest#conditional-requests
[rate-limiting]: /rest/overview/resources-in-the-rest-api#rate-limit-http-headers
[users api]: /rest/reference/users#get-a-user
[auth user api]: /rest/reference/users#get-the-authenticated-user
[defunkt github]: https://github.com/defunkt
[json]: http://en.wikipedia.org/wiki/JSON
[authentication]: /rest#authentication
[2fa]: /articles/about-two-factor-authentication
[2fa header]: /rest/overview/other-authentication-methods#working-with-two-factor-authentication
[oauth section]: /rest/guides/getting-started-with-the-rest-api#oauth
[personal token]: /articles/creating-an-access-token-for-command-line-use
[tokens settings]: https://github.com/settings/tokens
[pagination]: /rest#pagination
[get repo]: /rest/reference/repos#get-a-repository
[create repo]: /rest/reference/repos#create-a-repository-for-the-authenticated-user
[create issue]: /rest/reference/issues#create-an-issue
[auth guide]: /guides/basics-of-authentication
[user repos api]: /rest/reference/repos#list-repositories-for-the-authenticated-user
[other user repos api]: /rest/reference/repos#list-repositories-for-a-user
[org repos api]: /rest/reference/repos#list-organization-repositories
[get issues api]: /rest/reference/issues#list-issues-assigned-to-the-authenticated-user
[repo issues api]: /rest/reference/issues#list-repository-issues
[etag]: http://en.wikipedia.org/wiki/HTTP_ETag
[2fa section]: /rest/guides/getting-started-with-the-rest-api#two-factor-authentication

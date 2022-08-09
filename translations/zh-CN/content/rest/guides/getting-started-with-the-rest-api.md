---
title: REST API 入门指南
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
shortTitle: 开始 - REST API
---


让我们逐步了解在处理一些日常用例时涉及的核心 API 概念。

{% data reusables.rest-api.dotcom-only-guide-note %}

## 概览

大多数应用程序将使用您选择的语言 中现有的 [wrapper 库][wrappers]，但您必须先熟悉基础 API HTTP 方法。

没有比使用 [cURL][curl] 更容易的入手方式了。{% ifversion fpt or ghec %} 如果您使用其他客户的，请注意，您需要在请求中发送有效的 [用户代理标头](/rest/overview/resources-in-the-rest-api#user-agent-required)。{% endif %}

### Hello World

让我们先测试设置。 打开命令提示符并输入以下命令：

```shell
$ curl https://api.github.com/zen

> Keep it logically awesome.
```

响应将是我们设计理念中的随机选择。

Next, let's `GET` [Chris Wanstrath's][defunkt github] [GitHub profile][users api]:

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

Mmmmm, tastes like [JSON][json]. 我们来添加 `-i` 标志以包含标头：

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

响应标头中有一些有趣的地方。 果然，`Content-Type` 为 `application/json`。

任何以 `X-` 开头的标头都是自定义标头，不包含在 HTTP 规范中。 例如，请注意 `X-RateLimit-Limit` 和 `X-RateLimit-Remaining` 标头。 This pair of headers indicate [how many requests a client can make][rate-limiting] in a rolling time period (typically an hour) and how many of those requests the client has already spent.

## 身份验证

未经身份验证的客户端每小时可以发出 60 个请求。 要每小时发出更多请求，我们需要进行_身份验证_。 In fact, doing anything interesting with the {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %} API requires [authentication][authentication].

### 使用个人访问令牌

使用 {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %} API 进行身份验证的最简单和最佳的方式是[通过 OAuth 令牌](/rest/overview/other-authentication-methods#via-oauth-and-personal-access-tokens)使用基本身份验证。 OAuth tokens include [personal access tokens][personal token].

使用 `-u` 标志设置您的用户名：

```shell
$ curl -i -u <em>your_username</em> {% data variables.product.api_url_pre %}/users/octocat

```

出现提示时，您可以输入 OAuth 令牌，但我们建议您为它设置一个变量：

您可以使用 `-u "your_username:$token"` 并为 `token` 设置一个变量，以避免您的令牌留在 shell 历史记录中，这种情况应尽量避免。

```shell
$ curl -i -u <em>your_username:$token</em> {% data variables.product.api_url_pre %}/users/octocat

```

进行身份验证时，您应该会看到您的速率限制达到每小时 5,000 个请求，如 `X-RateLimit-Limit` 标头中所示。 除了每小时提供更多调用次数之外，身份验证还使您能够使用 API 读取和写入私有信息。

You can easily [create a **personal access token**][personal token] using your [Personal access tokens settings page][tokens settings]:

{% warning %}

为了帮助保护您的信息安全，我们强烈建议为您的个人访问令牌设置一个到期日。

{% endwarning %}

{% ifversion fpt or ghes or ghec %}
![个人令牌选择](/assets/images/personal_token.png)
{% endif %}

{% ifversion ghae %}
![个人令牌选择](/assets/images/help/personal_token_ghae.png)
{% endif %}

使用到期的个人访问令牌的 API 请求将通过 `GitHub-Authentication-Token-Expiration` 标头返回该令牌的到期日期。 当令牌接近其过期日期时，您可以使用脚本中的标头来提供警告信息。

### 获取自己的用户个人资料

在正确验证身份后，您可以利用与 {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %} 上的帐户相关的权限。 。 例如，尝试获取

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

This time, in addition to the same set of public information we retrieved for [@defunkt][defunkt github] earlier, you should also see the non-public information for your user profile. 例如，您将在响应中看到 `plan` 对象，它提供有关帐户的 {% data variables.product.product_name %} 计划的详细信息。

### 对应用程序使用 OAuth 令牌

需要代表其他用户使用 API 读取或写入私有信息的应用程序应使用 [OAuth][oauth]。

OAuth 使用_令牌_。 令牌具有两大特点：

* **可撤销访问权限**：用户可以随时撤销对第三方应用程序的授权
* **有限访问权限**：用户可以在授权第三方应用程序前审查令牌将提供的具体访问权限。

令牌应通过 [web 工作流程][webflow]进行创建。 应用程序将用户发送到 {% data variables.product.product_name %} 进行登录。 {% data variables.product.product_name %} 随后显示一个对话框，指示应用程序的名称以及应用程序经用户授权后具有的权限级别。 经用户授权访问后，{% data variables.product.product_name %} 将用户重定向到应用程序：

![GitHub 的 OAuth 提示](/assets/images/oauth_prompt.png)

**像对待密码一样对待 OAuth 令牌！**不要与其他用户共享它们，也不要将其存储在不安全的地方。 这些示例中的令牌是假的，并且更改了名称以免波及无辜。

Now that we've got the hang of making authenticated calls, let's move along to the [Repositories API][repos-api].

## 仓库

几乎任何有意义的 {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %} API 使用都会涉及某种级别的仓库信息。 信息。 We can [`GET` repository details][get repo] in the same way we fetched user details earlier:

```shell
$ curl -i {% data variables.product.api_url_pre %}/repos/twbs/bootstrap
```

In the same way, we can [view repositories for the authenticated user][user repos api]:

```shell
$ curl -i -H "Authorization: token ghp_16C7e42F292c6912E7710c838347Ae178B4a" \
    {% data variables.product.api_url_pre %}/user/repos
```

Or, we can [list repositories for another user][other user repos api]:

```shell
$ curl -i {% data variables.product.api_url_pre %}/users/octocat/repos
```

Or, we can [list repositories for an organization][org repos api]:

```shell
$ curl -i {% data variables.product.api_url_pre %}/orgs/octo-org/repos
```

从这些调用返回的信息将取决于我们进行身份验证时令牌所具有的作用域：

{%- ifversion fpt or ghec or ghes %}
* A token with `public_repo` [scope][scopes] returns a response that includes all public repositories we have access to see on {% data variables.product.product_location %}.
{%- endif %}
* A token with `repo` [scope][scopes] returns a response that includes all {% ifversion fpt %}public or private{% elsif ghec or ghes %}public, private, or internal{% elsif ghae %}private or internal{% endif %} repositories we have access to see on {% data variables.product.product_location %}.

As the [docs][repos-api] indicate, these methods take a `type` parameter that can filter the repositories returned based on what type of access the user has for the repository. 这样，我们可以只获取直接拥有的仓库、组织仓库或用户通过团队进行协作的仓库。

```shell
$ curl -i "{% data variables.product.api_url_pre %}/users/octocat/repos?type=owner"
```

在此示例中，我们只获取 octocat 拥有的仓库，而没有获取她协作的仓库。 请注意上面的引用 URL。 根据您的 shell 设置，cURL 有时需要一个引用 URL，否则它会忽略查询字符串。

### 创建仓库

获取现有仓库的信息是一种常见的用例，但
{% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %} API 也支持创建新的仓库。 To [create a repository][create repo],
我们需要 `POST` 一些包含详细信息和配置选项的JSON。

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

In this minimal example, we create a new private repository for our blog (to be served on [GitHub Pages][pages], perhaps). 虽然博客 {% ifversion not ghae %}将是公开的{% else %}可供所有企业成员访问{% endif %}，但我们已经将仓库设置为私有。 In this single step, we'll also initialize it with a README and a [nanoc][nanoc]-flavored [.gitignore template][gitignore templates].

生成的仓库可在 `https://github.com/<your_username>/blog` 上找到。 要在您拥有的组织下创建仓库，只需将 API 方法从 `/user/repos` 更改为 `/orgs/<org_name>/repos`。

接下来，我们将获取新创建的仓库：

```shell
$ curl -i {% data variables.product.api_url_pre %}/repos/pengwynn/blog

> HTTP/2 404

> {
>    "message": "Not Found"
> }
```

哦，不！ 它去哪儿了？ 因为我们创建仓库为 _私有_，所以需要经过身份验证才能看到它。 如果您是一位资深的 HTTP 用户，您可能会预期返回 `403`。 由于我们不想泄露有关私有仓库的信息，因此在本例中，{% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %} API 返回 `404`，就好像说“我们既不能确认也不能否认这个仓库的存在”。

## 议题

{% data variables.product.product_name %} 上的议题 UI 旨在提供“恰到好处”的工作流程，不会妨碍您的其他工作。 With the {% data variables.product.product_name %} [Issues API][issues-api], you can pull data out or create issues from other tools to create a workflow that works for your team.

与 github.com 一样，API 为经过身份验证的用户提供了一些查看议题的方法。 To [see all your issues][get issues api], call `GET /issues`:

```shell
$ curl -i -H "Authorization: token ghp_16C7e42F292c6912E7710c838347Ae178B4a" \
    {% data variables.product.api_url_pre %}/issues
```

To get only the [issues under one of your {% data variables.product.product_name %} organizations][get issues api], call `GET
/orgs/<org>/issues`:

```shell
$ curl -i -H "Authorization: token ghp_16C7e42F292c6912E7710c838347Ae178B4a" \
    {% data variables.product.api_url_pre %}/orgs/rails/issues
```

We can also get [all the issues under a single repository][repo issues api]:

```shell
$ curl -i {% data variables.product.api_url_pre %}/repos/rails/rails/issues
```

### 分页

一个 Rails 规模的项目有数千个议题。 We'll need to [paginate][pagination], making multiple API calls to get the data. 我们来重复上次调用，这次请注意响应标头：

```shell
$ curl -i {% data variables.product.api_url_pre %}/repos/rails/rails/issues

> HTTP/2 200

> ...
> Link: &lt;{% data variables.product.api_url_pre %}/repositories/8514/issues?page=2&gt;; rel="next", &lt;{% data variables.product.api_url_pre %}/repositories/8514/issues?page=30&gt;; rel="last"
> ...
```

The [`Link` header][link-header] provides a way for a response to link to external resources, in this case additional pages of data. 由于我们的调用发现的议题超过 30 个（默认页面大小），因此 API 将告诉我们在哪里可以找到结果的下一页和最后一页。

### 创建议题

Now that we've seen how to paginate lists of issues, let's [create an issue][create issue] from the API.

要创建议题，我们需要进行身份验证，因此我们将在标头中传递 OAuth 令牌。 此外，我们还将 JSON 正文中的标题、正文和标签传递到要在其中创建议题的仓库下的 `/issues` 路径：

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

JSON 响应的 `Location` 响应标头和 `url` 字段为我们提供了一些新建议题的指示。

## 条件请求

通过缓存未更改的信息来遵守速率限制，是成为一个良好 API 公民的重要特质。 The API supports [conditional requests][conditional-requests] and helps you do the right thing. 请注意我们为获取 defunkt 的个人资料而进行的第一个调用：

```shell
$ curl -i {% data variables.product.api_url_pre %}/users/defunkt

> HTTP/2 200
> etag: W/"61e964bf6efa3bc3f9e8549e56d4db6e0911d8fa20fcd8ab9d88f13d513f26f0"
```

除了 JSON 正文之外，还要注意 HTTP 状态代码 `200` 和 `Etag` 标头。 The [ETag][etag] is a fingerprint of the response. 如果我们在后续调用中传递它，则可以告诉 API 仅在资源发生改变的情况才将其再次提供给我们。

```shell
$ curl -i -H 'If-None-Match: "61e964bf6efa3bc3f9e8549e56d4db6e0911d8fa20fcd8ab9d88f13d513f26f0"' \
$    {% data variables.product.api_url_pre %}/users/defunkt

> HTTP/2 304
```

`304` 状态表示该资源自上次请求以来没有发生改变，该响应将不包含任何正文。 As a bonus, `304` responses don't count against your [rate limit][rate-limiting].

现在您了解 {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %} API 的基础知识了！

* 基本 & OAuth 身份验证
* 获取和创建仓库及议题
* 条件请求

Keep learning with the next API guide [Basics of Authentication][auth guide]!

[wrappers]: /libraries/
[curl]: http://curl.haxx.se/
[oauth]: /apps/building-integrations/setting-up-and-registering-oauth-apps/
[webflow]: /apps/building-oauth-apps/authorizing-oauth-apps/
[scopes]: /apps/building-oauth-apps/understanding-scopes-for-oauth-apps/
[repos-api]: /rest/reference/repos
[repos-api]: /rest/reference/repos
[pages]: http://pages.github.com
[nanoc]: http://nanoc.ws/
[gitignore templates]: https://github.com/github/gitignore
[issues-api]: /rest/reference/issues
[link-header]: https://www.w3.org/wiki/LinkHeader
[conditional-requests]: /rest#conditional-requests
[rate-limiting]: /rest/overview/resources-in-the-rest-api#rate-limit-http-headers
[rate-limiting]: /rest/overview/resources-in-the-rest-api#rate-limit-http-headers
[users api]: /rest/reference/users#get-a-user
[defunkt github]: https://github.com/defunkt
[defunkt github]: https://github.com/defunkt
[json]: http://en.wikipedia.org/wiki/JSON
[authentication]: /rest#authentication
[personal token]: /articles/creating-an-access-token-for-command-line-use
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
[get issues api]: /rest/reference/issues#list-issues-assigned-to-the-authenticated-user
[repo issues api]: /rest/reference/issues#list-repository-issues
[etag]: http://en.wikipedia.org/wiki/HTTP_ETag

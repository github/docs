---
title: REST API 入门指南
intro: 从身份验证和一些端点示例开始，了解使用 REST API 的基础。
redirect_from:
  - /guides/getting-started/
  - /v3/guides/getting-started
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - API
---


让我们逐步了解在处理一些日常用例时涉及的核心 API 概念。

### 概览

大多数应用程序将使用您选择的语言 中现有的 [wrapper 库][wrappers]，但您必须先熟悉基础 API HTTP 方法。

没有比使用 [cURL][curl] 更容易的入手方式了。{% if currentVersion == "free-pro-team@latest" %} 如果您使用其他客户端，请注意，您需要在请求中发送有效的 [用户代理标头](/rest/overview/resources-in-the-rest-api#user-agent-required)。{% endif %}

#### Hello World

让我们先测试设置。 打开命令提示符并输入以下命令：

```shell
$ curl https://api.github.com/zen

> Keep it logically awesome.
```

响应将是我们设计理念中的随机选择。

接下来，我们 `GET` [Chris Wanstrath 的][defunkt github] [GitHub 资料][users api]：

```shell
# GET /users/defunkt
$ curl https://api.github.com/users/defunkt

> {
>   "login": "defunkt",
>   "id": 2,
>   "url": "{% data variables.product.api_url_pre %}/users/defunkt",
>   "html_url": "https://github.com/defunkt",
>   ...
> }
```

嗯，有点像 [JSON][json]。 我们来添加 `-i` 标志以包含标头：

```shell
$ curl -i https://api.github.com/users/defunkt

> HTTP/2 200
> Server: GitHub.com
> Date: Sun, 11 Nov 2012 18:43:28 GMT
> Content-Type: application/json; charset=utf-8
> ETag: "bfd85cbf23ac0b0c8a29bee02e7117c6"
> X-RateLimit-Limit: 60
> X-RateLimit-Remaining: 57
> X-RateLimit-Reset: 1352660008
> X-GitHub-Media-Type: github.v3
> Vary: Accept
> Cache-Control: public, max-age=60, s-maxage=60
> X-Content-Type-Options: nosniff
> Content-Length: 692
> Last-Modified: Tue, 30 Oct 2012 18:58:42 GMT

> {
>   "login": "defunkt",
>   "id": 2,
>   "url": "{% data variables.product.api_url_pre %}/users/defunkt",
>   "html_url": "https://github.com/defunkt",
>   ...
> }
```

响应标头中有一些有趣的地方。 果然，`Content-Type` 为 `application/json`。

任何以 `X-` 开头的标头都是自定义标头，不包含在 HTTP 规范中。 例如：

* `X-GitHub-Media-Type` 的值为 `github.v3`。 这让我们知道响应的[媒体类型][media types]。 媒体类型帮助我们在 API v3 中对输出进行版本控制。 我们稍后再详细讨论。
* 请注意 `X-RateLimit-Limit` 和 `X-RateLimit-Remaining` 标头。 这对标头指示在滚动时间段（通常为一小时）内[一个客户端可以发出多少个请求][rate-limiting]，以及该客户端已使用多少个此类请求。

### 身份验证

未经身份验证的客户端每小时可以发出 60 个请求。 要每小时发出更多请求，我们需要进行_身份验证_。 事实上，使用 {% data variables.product.product_name %} API 做任何有意义的事情需要[身份验证][authentication]。

#### 使用个人访问令牌

使用 {% data variables.product.product_name %} API 进行身份验证的最简单和最佳的方式是[通过 OAuth 令牌](/rest/overview/other-authentication-methods#via-oauth-and-personal-access-tokens)使用基本身份验证。 OAuth 令牌包括[个人访问令牌][personal token]。

使用 `-u` 标志设置您的用户名：

```shell
$ curl -i -u <em>your_username</em> {% data variables.product.api_url_pre %}/users/octocat

```

出现提示时，您可以输入 OAuth 令牌，但我们建议您为它设置一个变量：

您可以使用 `-u "username:$token"` 并为 `token` 设置一个变量，以避免您的令牌留在 shell 历史记录中，这种情况应尽量避免。

```shell
$ curl -i -u <em>username:$token</em> {% data variables.product.api_url_pre %}/users/octocat

```

进行身份验证时，您应该会看到您的速率限制达到每小时 5,000 个请求，如 `X-RateLimit-Limit` 标头中所示。 除了每小时提供更多调用次数之外，身份验证还使您能够使用 API 读取和写入私有信息。

您可以使用[个人访问令牌设置页面][tokens settings]轻松[创建**个人访问令牌**][personal token]。

{% if currentVersion == "free-pro-team@latest" or enterpriseServerVersions contains currentVersion %}
![个人令牌选择](/assets/images/personal_token.png)
{% endif %}

{% if currentVersion == "github-ae@latest" %}
![个人令牌选择](/assets/images/help/personal_token_ghae.png)
{% endif %}

#### 获取自己的用户个人资料

经过正确的身份验证后，您可以利用与您的 {% data variables.product.product_name %} 帐户相关联的权限。 例如，尝试获取

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

此时，除了先前为 [@defunkt][defunkt github] 检索到的公共信息集之外，您还可以查看您的用户个人资料的非公共信息。 例如，您将在响应中看到 `plan` 对象，它提供有关帐户的 {% data variables.product.product_name %} 计划的详细信息。

#### 对应用程序使用 OAuth 令牌

需要代表其他用户使用 API 读取或写入私有信息的应用程序应使用 [OAuth][oauth]。

OAuth 使用_令牌_。 令牌具有两大特点：

* **可撤销访问权限**：用户可以随时撤销对第三方应用程序的授权
* **有限访问权限**：用户可以在授权第三方应用程序前审查令牌将提供的具体访问权限。

令牌应通过 [web 工作流程][webflow]进行创建。 应用程序将用户发送到 {% data variables.product.product_name %} 进行登录。 {% data variables.product.product_name %} 随后显示一个对话框，指示应用程序的名称以及应用程序经用户授权后具有的权限级别。 经用户授权访问后，{% data variables.product.product_name %} 将用户重定向到应用程序：

![GitHub 的 OAuth 提示](/assets/images/oauth_prompt.png)

**像对待密码一样对待 OAuth 令牌！**不要与其他用户共享它们，也不要将其存储在不安全的地方。 这些示例中的令牌是假的，并且更改了名称以免波及无辜。

现在我们已经掌握了进行身份验证的调用，接下来我们介绍[仓库 API][repos-api]。

### 仓库

几乎任何有意义的使用 {% data variables.product.product_name %} 都会涉及到某种程度的仓库信息。 我们可以像之前获取用户详细信息一样 [`GET` 仓库详细信息][get repo]：

```shell
$ curl -i {% data variables.product.api_url_pre %}/repos/twbs/bootstrap
```

同样，我们可以查看[经身份验证用户的仓库][user repos api]：

```shell
$ curl -i -H "Authorization: token {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.1" or currentVersion == "github-ae@next" %}ghp_16C7e42F292c6912E7710c838347Ae178B4a{% else %}5199831f4dd3b79e7c5b7e0ebe75d67aa66e79d4{% endif %}" \
    {% data variables.product.api_url_pre %}/user/repos
```

或者，我们可以[列出其他用户的仓库][other user repos api]：

```shell
$ curl -i {% data variables.product.api_url_pre %}/users/octocat/repos
```

或者，我们可以[列出组织的仓库][org repos api]：

```shell
$ curl -i {% data variables.product.api_url_pre %}/orgs/octo-org/repos
```

从这些调用返回的信息将取决于我们进行身份验证时令牌所具有的作用域：

{% if currentVersion != "github-ae@latest" %}
* 具有 `public_repo` [作用域][scopes]的令牌返回的响应包含我们在 github.com 上有权查看的所有公共仓库。{% endif %}
* 具有 `repo` [作用域][scopes]的令牌返回的响应包含我们在{% data variables.product.product_location %} 上有权查看的所有{% if currentVersion != "github-ae@latest" %}公共{% else %}内部{% endif %}和私有仓库。

如[文档][repos-api]所示，这些方法采用 `type` 参数，可根据用户对仓库的访问权限类型来过滤返回的仓库。 这样，我们可以只获取直接拥有的仓库、组织仓库或用户通过团队进行协作的仓库。

```shell
$ curl -i "{% data variables.product.api_url_pre %}/users/octocat/repos?type=owner"
```

在此示例中，我们只获取 octocat 拥有的仓库，而没有获取她协作的仓库。 请注意上面的引用 URL。 根据您的 shell 设置，cURL 有时需要一个引用 URL，否则它会忽略查询字符串。

#### 创建仓库

获取现有仓库的信息是一种常见的用例，但
{% data variables.product.product_name %} API 也支持创建新仓库。 要[创建仓库][create repo]，
我们需要 `POST` 一些包含详细信息和配置选项的JSON。

```shell
$ curl -i -H "Authorization: token {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.1" or currentVersion == "github-ae@next" %}ghp_16C7e42F292c6912E7710c838347Ae178B4a{% else %}5199831f4dd3b79e7c5b7e0ebe75d67aa66e79d4{% endif %}" \
    -d '{ \
        "name": "blog", \
        "auto_init": true, \
        "private": true, \
        "gitignore_template": "nanoc" \
      }' \
    {% data variables.product.api_url_pre %}/user/repos
```

在这个最小的示例中，我们为博客（也许要在 [GitHub Pages][pages] 上提供）创建了一个新的私有仓库。 虽然博客 {% if currentVersion != "github-ae@latest" %}将是公开的{% else %}可供所有企业成员访问{% endif %}，但我们已经将仓库设置为私有。 在这一步中，我们还将使用自述文件和 [nanoc][nanoc] 风格的 [.gitignore 模板][gitignore templates]对其进行初始化。

生成的仓库可在 `https://github.com/<your_username>/blog` 上找到。 要在您拥有的组织下创建仓库，只需将 API 方法从 `/user/repos` 更改为 `/orgs/<org_name>/repos`。

接下来，我们将获取新创建的仓库：

```shell
$ curl -i {% data variables.product.api_url_pre %}/repos/pengwynn/blog

> HTTP/2 404

> {
>    "message": "Not Found"
> }
```

哦，不！ 它去哪儿了？ 因为我们创建仓库为 _私有_，所以需要经过身份验证才能看到它。 如果您是一位资深的 HTTP 用户，您可能会预期返回 `403`。 但由于我们不想泄露有关私有仓库的信息，因此在本例中，{% data variables.product.product_name %} API 返回 `404`，就好像说“我们既不能确认也不能否认这个仓库的存在”。

### 议题

{% data variables.product.product_name %} 上的议题 UI 旨在提供“恰到好处”的工作流程，不会妨碍您的其他工作。 通过 {% data variables.product.product_name %} [议题 API][issues-api]，您可以利用其他工具来提取数据或创建议题，以打造适合您的团队的工作流程。

与 github.com 一样，API 为经过身份验证的用户提供了一些查看议题的方法。 要 [查看您的所有议题][get issues api]，请调用 `GET /issues`：

```shell
$ curl -i -H "Authorization: token {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.1" or currentVersion == "github-ae@next" %}ghp_16C7e42F292c6912E7710c838347Ae178B4a{% else %}5199831f4dd3b79e7c5b7e0ebe75d67aa66e79d4{% endif %}" \
    {% data variables.product.api_url_pre %}/issues
```

要仅获取[您的某个 {% data variables.product.product_name %} 组织下的议题][get issues api]，请调用 `GET
/orgs/<org>/issues`：

```shell
$ curl -i -H "Authorization: token {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.1" or currentVersion == "github-ae@next" %}ghp_16C7e42F292c6912E7710c838347Ae178B4a{% else %}5199831f4dd3b79e7c5b7e0ebe75d67aa66e79d4{% endif %}" \
    {% data variables.product.api_url_pre %}/orgs/rails/issues
```

我们还可以获取[单个仓库下的所有议题][repo issues api]：

```shell
$ curl -i {% data variables.product.api_url_pre %}/repos/rails/rails/issues
```

#### 分页

一个 Rails 规模的项目有数千个议题。 我们需要[分页][pagination]，进行多次 API 调用来获取数据。 我们来重复上次调用，这次请注意响应标头：

```shell
$ curl -i {% data variables.product.api_url_pre %}/repos/rails/rails/issues

> HTTP/2 200

> ...
> Link: &lt;{% data variables.product.api_url_pre %}/repositories/8514/issues?page=2&gt;; rel="next", &lt;{% data variables.product.api_url_pre %}/repositories/8514/issues?page=30&gt;; rel="last"
> ...
```

[`Link` 标头][link-header]提供了一种链接到外部资源（在本例中为额外的数据页面）的方法。 由于我们的调用发现的议题超过 30 个（默认页面大小），因此 API 将告诉我们在哪里可以找到结果的下一页和最后一页。

#### 创建议题

我们已经了解如何分页议题列表，现在我们来使用 API [创建议题][create issue]。

要创建议题，我们需要进行身份验证，因此我们将在标头中传递 OAuth 令牌。 此外，我们还将 JSON 正文中的标题、正文和标签传递到要在其中创建议题的仓库下的 `/issues` 路径：

```shell
$ curl -i -H 'Authorization: token {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.1" or currentVersion == "github-ae@next" %}ghp_16C7e42F292c6912E7710c838347Ae178B4a{% else %}5199831f4dd3b79e7c5b7e0ebe75d67aa66e79d4{% endif %}' \
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

### 条件请求

通过缓存未更改的信息来遵守速率限制，是成为一个良好 API 公民的重要特质。 API 支持[条件请求][conditional-requests]并帮助您正确行事。 请注意我们为获取 defunkt 的个人资料而进行的第一个调用：

```shell
$ curl -i {% data variables.product.api_url_pre %}/users/defunkt

> HTTP/2 200
> ETag: "bfd85cbf23ac0b0c8a29bee02e7117c6"
```

除了 JSON 正文之外，还要注意 HTTP 状态代码 `200` 和 `Etag` 标头。 [ETag][etag] 是响应的指纹。 如果我们在后续调用中传递它，则可以告诉 API 仅在资源发生改变的情况才将其再次提供给我们。

```shell
$ curl -i -H 'If-None-Match: "bfd85cbf23ac0b0c8a29bee02e7117c6"' \
$    {% data variables.product.api_url_pre %}/users/defunkt

> HTTP/2 304
```

`304` 状态表示该资源自上次请求以来没有发生改变，该响应将不包含任何正文。 另外，`304` 响应不计入您的[速率限制][rate-limiting]。

耶！ 选择您已经了解 {% data variables.product.product_name %} API 的基础知识！

* 基本 & OAuth 身份验证
* 获取和创建仓库及议题
* 条件请求

继续学习下一个 API 指南 - [身份验证基础知识][auth guide]！

[wrappers]: /libraries/
[curl]: http://curl.haxx.se/
[media types]: /rest/overview/media-types
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
[rate-limiting]: /rest#rate-limiting
[rate-limiting]: /rest#rate-limiting
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

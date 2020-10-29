---
title: Gist
redirect_from:
  - /v3/gists
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

### 身份验证

您可以匿名读取公开 Gist {% if enterpriseServerVersions contains currentVersion %}并为没有令牌的匿名用户创建它们。{% else %}，但是您必须登录到 GitHub 才能创建 Gist。{% endif %} 要代表用户读取或写入 Gist，您需要 Gist OAuth 作用域和令牌。 更多信息请参阅“[OAuth 应用程序的作用域](/developers/apps/scopes-for-oauth-apps)”。

<!-- When an OAuth client does not have the gists scope, the API will return a 404 "Not Found" response regardless of the validity of the credentials. The API will return a 401 "Bad credentials" response if the gists scope was given to the application but the credentials are invalid. -->

### 截断

Gist API 为 Gist 中的每个文件提供最多一兆字节的内容。 通过 API 返回的每个 Gist 文件都有一个名为 `truncated` 的键。 如果 `truncated` 为 `true`，则说明文件太大，`content` 中只返回部分内容。

如果您需要文件的全部内容，您可以向 `raw_url` 指定的 URL 提出 `GET` 请求。 请注意，对于超过十兆字节的文件，您需要通过 `git_pull_url` 提供的 URL 克隆 Gist。

除了特定文件的内容被截断外，如果文件总数超过 300 个，则整个文件列表也可能被截断。 如果顶层 `truncated` 键为 `true`，则说明文件列表中只返回了前 300 个文件。 如果需要获取 Gist 的所有文件，您需要通过 `git_pull_url` 提供的 URL 克隆 Gist。

### Gist 的自定义媒体类型

以下是获取 Gist 内容所支持的媒体类型。

    application/vnd.github.VERSION.raw
    application/vnd.github.VERSION.base64

更多信息请参阅“[媒体类型](/rest/overview/media-types)”。

{% for operation in currentRestOperations %}
  {% unless operation.subcategory %}{% include rest_operation %}{% endunless %}
{% endfor %}

## 评论

### Gist 评论的自定义媒体类型

以下是 Gist 评论支持的媒体类型。

    application/vnd.github.VERSION.raw
    application/vnd.github.VERSION.base64

有关媒体类型的更多信息，请参阅“[自定义媒体类型](/rest/overview/media-types)”。

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'comments' %}{% include rest_operation %}{% endif %}
{% endfor %}

---
title: 疑难解答
intro: 学习如何解决用户在 REST API 中遇到的最常见问题。
redirect_from:
  - /v3/troubleshooting
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---



您在 API 中可能会遇到一些奇怪的问题，下面列出一些您可能会经历的问题的解决方案。

### 现在仓库的 `404` 错误

一般来说，我们发送 `404` 错误的原因是您的客户端没有正确通过身份验证。 您可能预期在这些情况下会看到 `403 Forbidden`。 但是，由于我们不希望提供有关私有仓库的_任何_信息，因此 API 会返回 `404` 错误。

要解决问题，请确保[您正确通过身份验证](/guides/getting-started/)，[您的 OAuth 访问令牌具有所需的作用域](/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/)，并且[第三方应用程序限制][oap-guide]不会阻止您访问。

### 并非所有结果都返回

大多数访问资源列表（_例如_，用户、议题_等_）的 API 调用都支持分页。 如果您发出了请求但收到了不完整的结果集，您可能只看到第一页。 您需要请求剩余的页面以获取更多结果。

*切勿*尝试和猜测分页 URL 的格式。 并非每个 API 调用都使用相同的结构。 您应该从随每个请求一起发送的[链接标头](/rest#pagination)中提取分页信息。

{% if currentVersion == "free-pro-team@latest" %}
### 基本身份验证错误

从 2020 年 11 月 13 日起，REST API 和 OAuth 授权 API 的用户名和密码身份验证被弃用，不再有效。

#### 使用 `username`/`password` 进行基本身份验证

如果您对 API 调用使用 `username` 和 `password`，则它们无法再进行身份验证。 例如：

```bash
curl -u my_user:my_password https://api.github.com/user/repos
```

相反，在测试端点或进行本地开发时使用[个人访问令牌](/github/authenticating-to-github/creating-a-personal-access-token-for-the-command-line)：

```bash
curl -H 'Authorization: token my_access_token' https://api.github.com/user/repos
```

对于 OAuth 应用程序，您应该使用 [web 应用程序流程](/apps/building-oauth-apps/authorizing-oauth-apps/#web-application-flow)生成 OAuth 令牌以用于 API 调用的标头：

```bash
curl -H 'Authorization: token my-oauth-token' https://api.github.com/user/repos
```

#### 调用 OAuth 授权 API

如果要调用 [OAuth 授权 API](/enterprise-server/rest/reference/oauth-authorizations) 来管理 OAuth 应用的授权或生成访问令牌，类似于以下示例：

```bash
curl -u my_username:my_password -X POST "https://api.github.com/authorizations" -d '{"scopes":["public_repo"], "note":"my token", "client_id":"my_client_id", "client_secret":"my_client_secret"}'
```

然后您必须切换到 [web 应用程序流程](/apps/building-oauth-apps/authorizing-oauth-apps/#web-application-flow)来生成访问令牌。

{% endif %}

[oap-guide]: https://developer.github.com/changes/2015-01-19-an-integrators-guide-to-organization-application-policies/

---
title: 疑难解答
intro: 学习如何解决用户在 REST API 中遇到的最常见问题。
redirect_from:
  - /v3/troubleshooting
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---



您在 API 中可能会遇到一些奇怪的问题，下面列出一些您可能会经历的问题的解决方案。

### 为什么仓库明明存在，我却收到了 `404` 错误？

一般来说，我们发送 `404` 错误的原因是您的客户端没有正确通过身份验证。 您可能预期在这些情况下会看到 `403 Forbidden`。 但是，由于我们不希望提供有关私有仓库的_任何_信息，因此 API 会返回 `404` 错误。

要解决问题，请确保[您正确通过身份验证](/guides/getting-started/)，[您的 OAuth 访问令牌具有所需的作用域](/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/)，并且[第三方应用程序限制][oap-guide]不会阻止您访问。

### 为什么我看不到所有的结果？

大多数访问资源列表（_例如_，用户、议题_等_）的 API 调用都支持分页。 如果您发出了请求但收到了不完整的结果集，您可能只看到第一页。 您需要请求剩余的页面以获取更多结果。

*切勿*尝试和猜测分页 URL 的格式。 并非每个 API 调用都使用相同的结构。 您应该从随每个请求一起发送的[链接标头](/v3/#pagination)中提取分页信息。

[oap-guide]: https://developer.github.com/changes/2015-01-19-an-integrators-guide-to-organization-application-policies/

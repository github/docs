---
title: 关于 GitHub 的 API
intro: '了解 {% data variables.product.prodname_dotcom %} 的 API 以扩展和自定义您的 {% data variables.product.prodname_dotcom %} 体验。'
redirect_from:
  - /v3/versions
  - /articles/getting-started-with-the-api
  - /github/extending-github/getting-started-with-the-api
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
---

GitHub API 有两个稳定版本：[REST API](/rest) 和 [GraphQL API]({% ifversion ghec %}/free-pro-team@latest{% endif %}/graphql)。 使用 REST API 时，我们建议您[通过 `Accept` 标头请求 v3](/v3/media/#request-specific-version)。 有关使用 GraphQL API 的信息，请参阅 [v4 文档]({% ifversion ghec %}/free-pro-team@latest{% endif %}/graphql)。

## 已弃用版本

### 测试版

我们在 2014 年 4 月 22 日弃用了测试版 API。

### v2

我们在 2012 年 6 月 12 日取消了对 API v2 的支持。

### v1

我们在 2012 年 6 月 12 日取消了对 API v1 的支持。

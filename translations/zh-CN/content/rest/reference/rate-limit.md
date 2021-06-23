---
title: 速率限制
redirect_from:
  - /v3/rate_limit
  - /v3/rate-limit
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - API
---

REST API 概述文档描述了[速率限制规则](/rest/overview/resources-in-the-rest-api#rate-limiting)。 您可以随时使用下面描述的速率限制 API 来检查您当前的速率限制状态。

### 了解您的速率限制状态

搜索 API 具有[自定义速率限制](/rest/reference/search#rate-limit)，与管理 REST API 其余部分的速率限制不同。 GraphQL API 也有[自定义速率限制](/graphql/overview/resource-limitations#rate-limit)，它与 REST API 中的速率限制不同且分开计算。

出于这些原因，速率限制 API 响应对速率限制进行分类。 在`资源`下，您会看到四个 对象：

* `核心`对象提供 REST API 中所有非搜索相关资源的速率限制状态。

* `搜索`对象提供[搜索 API](/rest/reference/search) 的速率限制状态。

* `graphql`对象提供 [GraphQL API](/graphql) 的速率限制状态。

* `integration_manifest` 对象提供 [GitHub 应用程序清单代码转换](/apps/building-github-apps/creating-github-apps-from-a-manifest/#3-you-exchange-the-temporary-code-to-retrieve-the-app-configuration)端点的速率限制状态。

有关速率限制响应中标头和值的更多信息，请参阅“[速率限制](/rest#rate-limiting)”。

{% include rest_operations_at_current_path %}

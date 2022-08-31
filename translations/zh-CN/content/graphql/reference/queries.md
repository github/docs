---
title: 查询
miniTocMaxHeadingLevel: 3
redirect_from:
  - /v4/query
  - /v4/reference/query
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
  ghae: '*'
topics:
  - API
---

## 关于查询

每个 GraphQL 架构的查询和突变都有根类型。 [查询类型](https://graphql.github.io/graphql-spec/June2018/#sec-Type-System)可定义从服务器中检索数据的 GraphQL 操作。

更多信息请参阅“[关于查询](/graphql/guides/forming-calls-with-graphql#about-queries)。”

{% note %}

**注：** 对于 [用户到服务器](/developers/apps/identifying-and-authorizing-users-for-github-apps#user-to-server-requests) {% data variables.product.prodname_github_app %} 请求，您应该使用单独的查询来处理问题和拉取请求。 例如，使用 `is:issue` 或 `is:pull-request` 过滤器及其等效功能。 使用 `search` 连接在单一查询中返回问题和拉取请求的组合将产生一组空节点。

{% endnote %}

<!-- Content after this section is automatically generated -->

---
title: 标量
redirect_from:
  - /v4/scalar
  - /v4/reference/scalar
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - api
---

### 关于标量

[标量](https://graphql.github.io/graphql-spec/June2018/#sec-Scalars)为原始值：`Int`、`Float`、`String`、`Boolean` 或 `ID`。

调用 GraphQL API 时，必须指定嵌套子字段，直到仅返回标量。

更多信息请参阅“[GraphQL 简介](/graphql/guides/introduction-to-graphql#field)。”

{% for item in graphql.schemaForCurrentVersion.scalars %}
  {% include graphql-scalar %}
{% endfor %}

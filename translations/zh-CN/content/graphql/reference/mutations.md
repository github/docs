---
title: 突变
redirect_from:
  - /v4/mutation
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

### 关于突变

每个 GraphQL 架构的查询和突变都有根类型。 [突变类型](https://graphql.github.io/graphql-spec/June2018/#sec-Type-System)可定义用于更改服务器上数据的 GraphQL 操作。 此操作类似于执行 HTTP 请求方法，如 `POST`、`PATCH` 和 `DELETE`。

更多信息请参阅“[关于突变](/v4/guides/forming-calls#about-mutations)。”

{% for item in graphql.schemaForCurrentVersion.mutations %}
  {% include graphql-mutation %}
{% endfor %}

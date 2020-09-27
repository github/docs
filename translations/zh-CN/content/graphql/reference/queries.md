---
title: 查询
miniTocMaxHeadingLevel: 2
redirect_from:
  - /v4/query
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

### 关于查询

每个 GraphQL 架构的查询和突变都有根类型。 [查询类型](https://graphql.github.io/graphql-spec/June2018/#sec-Type-System)可定义从服务器中检索数据的 GraphQL 操作。

更多信息请参阅“[关于查询](/v4/guides/forming-calls#about-queries)。”

## 连接

{% for item in graphql.schemaForCurrentVersion.queries.connections %}
  {% include graphql-query %}
{% endfor %}

## 字段

{% for item in graphql.schemaForCurrentVersion.queries.fields %}
  {% include graphql-query %}
{% endfor %}

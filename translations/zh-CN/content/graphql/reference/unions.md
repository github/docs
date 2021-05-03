---
title: 并集
redirect_from:
  - /v4/union
  - /v4/reference/union
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - API
---

### 关于并集

[并集](https://graphql.github.io/graphql-spec/June2018/#sec-Unions)是一种表示多个对象的对象类型。

例如，标记为 [`ProjectCardItem`](/graphql/reference/unions#projectcarditem) 的字段可能是 [`Issue`](/graphql/reference/objects#issue) 或 [`PullRequest`](/graphql/reference/objects#pullrequest)，因为每个对象都可能在项目卡内。 使用并集代替对象可以带来灵活性。

更多信息请参阅“[GraphQL 简介](/graphql/guides/introduction-to-graphql)”。

{% for item in graphql.schemaForCurrentVersion.unions %}
  {% include graphql-union %}
{% endfor %}

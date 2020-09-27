---
title: 枚举
redirect_from:
  - /v4/enum
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

### 关于枚举

[枚举](https://graphql.github.io/graphql-spec/June2018/#sec-Enums)表示可能的字段值集。

例如，[`Issue`](/v4/object/issue) 对象有一个名为 `state` 的字段。 状态是一种枚举（具体来说是 [`IssueState`](/v4/enum/issuestate/) 类型），因为它的值可能为 `OPEN` 或 `CLOSED`。

更多信息请参阅“[GraphQL 简介](/v4/guides/intro-to-graphql)”。

{% for item in graphql.schemaForCurrentVersion.enums %}
  {% include graphql-enum %}
{% endfor %}

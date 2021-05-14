---
title: 接口
redirect_from:
  - /v4/interface
  - /v4/reference/interface
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - API
---

### 关于接口

[接口](https://graphql.github.io/graphql-spec/June2018/#sec-Interfaces)可作为供其他对象继承的父对象。

例如，[`Lockable`](/graphql/reference/interfaces#lockable)是一个接口，因为 [`Issue`](/graphql/reference/objects#issue) 和 [`PullRequest`](/graphql/reference/objects#pullrequest) 对象都可以锁定。 接口拥有自己的指定字段列表，这些字段通过实现对象得以共享。

更多信息请参阅“[实现](/graphql/guides/introduction-to-graphql#implementation)。”

{% for item in graphql.schemaForCurrentVersion.interfaces %}
  {% include graphql-interface %}
{% endfor %}

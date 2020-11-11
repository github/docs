---
title: 列挙型
redirect_from:
  - /v4/enum
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

### 列挙型について

[列挙型](https://graphql.github.io/graphql-spec/June2018/#sec-Enums)は、フィールドが取り得る値の集合を表します。

たとえば、[`Issue`](/v4/object/issue)オブジェクトは、`state`というフィールドを持っています。 stateは、`OPEN`もしくは`CLOSED`なので、列挙型（具体的には[` IssueState`](/v4/enum/issuestate/)という型です）です。

詳しい情報については「[GraphQLの紹介](/v4/guides/intro-to-graphql)」を参照してください。

{% for item in graphql.schemaForCurrentVersion.enums %}
  {% include graphql-enum %}
{% endfor %}

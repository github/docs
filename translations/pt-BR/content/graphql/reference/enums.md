---
title: Enumeradores
redirect_from:
  - /v4/enum
  - /v4/reference/enum
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
topics:
  - API
---

## Sobre os enuns

[Enumeradores](https://graphql.github.io/graphql-spec/June2018/#sec-Enums) representam possíveis conjuntos de valores para um campo.

Por exemplo, o objeto [`problema`](/graphql/reference/objects#issue) tem um campo denominado `estado`. O estado é um enumerador (especificamente, do tipo [`IssueState`](/graphql/reference/enums#issuestate)), porque pode estar `ABERTO` ou `FECHADO`.

Para obter mais informações, consulte "[Introdução ao GraphQL](/graphql/guides/introduction-to-graphql)".

{% for item in graphql.schemaForCurrentVersion.enums %}
  {% include graphql-enum %}
{% endfor %}

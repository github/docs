---
title: Enumeradores
redirect_from:
  - /v4/enum
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

### Sobre os enumeradores

[Enumeradores](https://graphql.github.io/graphql-spec/June2018/#sec-Enums) representam possíveis conjuntos de valores para um campo.

Por exemplo, o objeto [`problema`](/v4/object/issue) tem um campo denominado `estado`. O estado é um enumerador (especificamente, do tipo [`IssueState`](/v4/enum/issuestate/)), porque pode estar `ABERTO` ou `FECHADO`.

Para obter mais informações, consulte "[Introdução ao GraphQL](/v4/guides/intro-to-graphql)".

{% for item in graphql.schemaForCurrentVersion.enums %}
  {% include graphql-enum %}
{% endfor %}

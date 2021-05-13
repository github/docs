---
title: Enumeradores
redirect_from:
  - /v4/enum
  - /v4/reference/enum
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - API
---

### Acerca de los enumeradores

Los [Enumeradores](https://graphql.github.io/graphql-spec/June2018/#sec-Enums) representan conjuntos de valores posibles para un campo.

Por ejemplo, el objeto [`Issue`](/graphql/reference/objects#issue) tiene un campo llamado `state`. El estado es un enumerador (específicamente, de tipo [`IssueState`](/graphql/reference/enums#issuestate)) ya que éste puede ser `OPEN` o `CLOSED`.

Para obtener más información, consulta la sección "[Introducción a GraphQL](/graphql/guides/introduction-to-graphql)".

{% for item in graphql.schemaForCurrentVersion.enums %}
  {% include graphql-enum %}
{% endfor %}

---
title: Enumeradores
redirect_from:
  - /v4/enum
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

### Acerca de los enumeradores

Los [Enumeradores](https://graphql.github.io/graphql-spec/June2018/#sec-Enums) representan conjuntos de valores posibles para un campo.

Por ejemplo, el objeto [`Issue`](/v4/object/issue) tiene un campo llamado `state`. El estado es un enumerador (específicamente, de tipo [`IssueState`](/v4/enum/issuestate/)) ya que éste puede ser `OPEN` o `CLOSED`.

Para obtener más información, consulta la sección "[Introducción a GraphQL](/v4/guides/intro-to-graphql)".

{% for item in graphql.schemaForCurrentVersion.enums %}
  {% include graphql-enum %}
{% endfor %}

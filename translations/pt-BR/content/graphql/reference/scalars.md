---
title: Escalares
redirect_from:
  - /v4/scalar
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

### Sobre escalares

[Escalares](https://graphql.github.io/graphql-spec/June2018/#sec-Scalars) são valores primitivos: `Int`, `Float`, `String`, `Boolean` ou `ID`.

Ao chamar a API do GraphQL, você deve especificar subcampos aninhados até retornar apenas escalares.

Para obter mais informações, consulte "[Introdução ao GraphQL](/v4/guides/intro-to-graphql#field)".

{% for item in graphql.schemaForCurrentVersion.scalars %}
  {% include graphql-scalar %}
{% endfor %}

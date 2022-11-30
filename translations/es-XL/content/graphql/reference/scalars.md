---
title: Escalares
redirect_from:
  - /v4/scalar
  - /v4/reference/scalar
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - API
---

### Acerca de los escalares

Los [escalares](https://graphql.github.io/graphql-spec/June2018/#sec-Scalars) son valores primitivos: `Int`, `Float`, `String`, `Boolean`, o `ID`.

Cuando llamas a la API de GraphQL, debes especificar subcampos anidados hasta que recuperes únicamente escalares.

Para obtener más información, consulta la sección "[introducción a GraphQL](/v4/guides/intro-to-graphql#field)".

{% for item in graphql.schemaForCurrentVersion.scalars %}
  {% include graphql-scalar %}
{% endfor %}

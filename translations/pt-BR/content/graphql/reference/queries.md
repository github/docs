---
title: Consultas
miniTocMaxHeadingLevel: 2
redirect_from:
  - /v4/query
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

### Sobre as consultas

Cada esquema de GraphQL tem um tipo de raiz para consultas e mutações. O [tipo de consulta](https://graphql.github.io/graphql-spec/June2018/#sec-Type-System) define operações do GraphQL que recuperam dados do servidor.

Para obter mais informações, consulte "[Sobre consultas](/v4/guides/forming-calls#about-queries)".

## Conexões

{% for item in graphql.schemaForCurrentVersion.queries.connections %}
  {% include graphql-query %}
{% endfor %}

## Campos

{% for item in graphql.schemaForCurrentVersion.queries.fields %}
  {% include graphql-query %}
{% endfor %}

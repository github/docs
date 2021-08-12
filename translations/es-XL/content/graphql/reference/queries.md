---
title: Consultas
miniTocMaxHeadingLevel: 2
redirect_from:
  - /v4/query
  - /v4/reference/query
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - API
---

### Acerca de las consultas

Cada modelo de GraphQL tiene un tipo de raíz tanto para consultas como para mutaciones. El [tipo de consulta](https://graphql.github.io/graphql-spec/June2018/#sec-Type-System) define las operaciones de GraphQL que recuperan datos del servidor.

Paraobtener más información, consulta la sección "[Acerca de las consultas](/v4/guides/forming-calls#about-queries)".

## Conexiones

{% for item in graphql.schemaForCurrentVersion.queries.connections %}
  {% include graphql-query %}
{% endfor %}

## Campos

{% for item in graphql.schemaForCurrentVersion.queries.fields %}
  {% include graphql-query %}
{% endfor %}

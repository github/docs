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
  - api
---

### Acerca de las consultas

Cada modelo de GraphQL tiene un tipo de raíz tanto para consultas como para mutaciones. El [tipo de consulta](https://graphql.github.io/graphql-spec/June2018/#sec-Type-System) define las operaciones de GraphQL que recuperan datos del servidor.

Paraobtener más información, consulta la sección "[Acerca de las consultas](/graphql/guides/forming-calls-with-graphql#about-queries)".

{% note %}

**Nota:** Para solicitudes de {% data variables.product.prodname_github_app %} de tipo [usuario a servidor](/developers/apps/identifying-and-authorizing-users-for-github-apps#user-to-server-requests), debes separar las consultas para las propuestas y para las solicitudes de cambios. Por ejemplo, utiliza filtros de `is:issue` o de `is:pull-request` y sus equivalentes. Utilizar la conexión `search` para devolver una combinación de propuestas y solicitudes de cambios en una sola consulta dará como resultado un conjunto de nodos vacío.

{% endnote %}

## Conexiones

{% for item in graphql.schemaForCurrentVersion.queries.connections %}
  {% include graphql-query %}
{% endfor %}

## Campos

{% for item in graphql.schemaForCurrentVersion.queries.fields %}
  {% include graphql-query %}
{% endfor %}

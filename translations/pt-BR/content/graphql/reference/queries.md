---
title: Consultas
miniTocMaxHeadingLevel: 2
redirect_from:
  - /v4/query
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

### Sobre as consultas

Cada esquema de GraphQL tem um tipo de raiz para consultas e mutações. O [tipo de consulta](https://graphql.github.io/graphql-spec/June2018/#sec-Type-System) define operações do GraphQL que recuperam dados do servidor.

Para obter mais informações, consulte "[Sobre consultas](/v4/guides/forming-calls#about-queries)".

{% note %}

**Note:** For [user-to-server](/developers/apps/identifying-and-authorizing-users-for-github-apps#user-to-server-requests) {% data variables.product.prodname_github_app %} requests, you should use separate queries for issues and pull requests. For example, use the `is:issue` or `is:pull-request` filters and their equivalents. Using the `search` connection to return a combination of issues and pull requests in a single query will result in an empty set of nodes.

{% endnote %}

## Conexões

{% for item in graphql.schemaForCurrentVersion.queries.connections %}
  {% include graphql-query %}
{% endfor %}

## Campos

{% for item in graphql.schemaForCurrentVersion.queries.fields %}
  {% include graphql-query %}
{% endfor %}

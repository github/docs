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

### Sobre as consultas

Cada esquema de GraphQL tem um tipo de raiz para consultas e mutações. O [tipo de consulta](https://graphql.github.io/graphql-spec/June2018/#sec-Type-System) define operações do GraphQL que recuperam dados do servidor.

Para obter mais informações, consulte "[Sobre consultas](/graphql/guides/forming-calls-with-graphql#about-queries)".

{% note %}

**Observação:** Para solicitações de {% data variables.product.prodname_github_app %} do tipo [usuário para servidor](/developers/apps/identifying-and-authorizing-users-for-github-apps#user-to-server-requests) você deve usar consultas separadas para problemas e pull requests. Por exemplo, use os filtros `is:issue` ou `is:pull-request` e seus equivalentes. Usar a conexão de `pesquisa` para retornar uma combinação de problemas e pull requests em uma única consulta resultará em um conjunto de nós vazio.

{% endnote %}

## Conexões

{% for item in graphql.schemaForCurrentVersion.queries.connections %}
  {% include graphql-query %}
{% endfor %}

## Campos

{% for item in graphql.schemaForCurrentVersion.queries.fields %}
  {% include graphql-query %}
{% endfor %}

---
title: Queries
miniTocMaxHeadingLevel: 2
redirect_from:
  - /v4/query
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

### About queries

Every GraphQL schema has a root type for both queries and mutations. The [query type](https://graphql.github.io/graphql-spec/June2018/#sec-Type-System) defines GraphQL operations that retrieve data from the server.

For more information, see "[About queries](/v4/guides/forming-calls#about-queries)."

{% note %}

**Note:** For [user-to-server](/developers/apps/identifying-and-authorizing-users-for-github-apps#user-to-server-requests) {% data variables.product.prodname_github_app %} requests, you should use separate queries for issues and pull requests. For example, use the `is:issue` or `is:pull-request` filters and their equivalents. Using the `search` connection to return a combination of issues and pull requests in a single query will result in an empty set of nodes.

{% endnote %}

## Connections

{% for item in graphql.schemaForCurrentVersion.queries.connections %}
  {% include graphql-query %}
{% endfor %}

## Fields

{% for item in graphql.schemaForCurrentVersion.queries.fields %}
  {% include graphql-query %}
{% endfor %}

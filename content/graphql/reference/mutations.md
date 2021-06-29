---
title: Mutations
redirect_from:
  - /v4/mutation
  - /v4/reference/mutation
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
topics:
  - API
---

## About mutations

Every GraphQL schema has a root type for both queries and mutations. The [mutation type](https://graphql.github.io/graphql-spec/June2018/#sec-Type-System) defines GraphQL operations that change data on the server. It is analogous to performing HTTP verbs such as `POST`, `PATCH`, and `DELETE`.

For more information, see "[About mutations](/graphql/guides/forming-calls-with-graphql#about-mutations)."

{% for item in graphql.schemaForCurrentVersion.mutations %}
  {% include graphql-mutation %}
{% endfor %}

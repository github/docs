---
title: Scalars
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

### About scalars

[Scalars](https://graphql.github.io/graphql-spec/June2018/#sec-Scalars) are primitive values: `Int`, `Float`, `String`, `Boolean`, or `ID`.

When calling the GraphQL API, you must specify nested subfields until you return only scalars.

For more information, see  "[Introduction to GraphQL](/graphql/guides/introduction-to-graphql#field)."

{% for item in graphql.schemaForCurrentVersion.scalars %}
  {% include graphql-scalar %}
{% endfor %}

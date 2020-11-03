---
title: Scalars
redirect_from:
  - /v4/scalar
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

### About scalars

[Scalars](https://graphql.github.io/graphql-spec/June2018/#sec-Scalars) are primitive values: `Int`, `Float`, `String`, `Boolean`, or `ID`.

When calling the GraphQL API, you must specify nested subfields until you return only scalars.

For more information, see  "[Introduction to GraphQL](/v4/guides/intro-to-graphql#field)."

{% for item in graphql.schemaForCurrentVersion.scalars %}
  {% include graphql-scalar %}
{% endfor %}

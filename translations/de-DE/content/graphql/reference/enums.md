---
title: Enums
redirect_from:
  - /v4/enum
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

### About enums

[Enums](https://graphql.github.io/graphql-spec/June2018/#sec-Enums) represent possible sets of values for a field.

For example, the [`Issue`](/v4/object/issue) object has a field called `state`. The state is an enum (specifically, of type [`IssueState`](/v4/enum/issuestate/)) because it may be `OPEN` or `CLOSED`.

For more information, see "[Introduction to GraphQL](/v4/guides/intro-to-graphql)."

{% for item in graphql.schemaForCurrentVersion.enums %}
  {% include graphql-enum %}
{% endfor %}

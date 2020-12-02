---
title: Unions
redirect_from:
  - /v4/union
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

### About unions

A [union](https://graphql.github.io/graphql-spec/June2018/#sec-Unions) is a type of object representing many objects.

For example, a field marked as an [`ProjectCardItem`](/graphql/reference/unions#projectcarditem) could be an [`Issue`](/graphql/reference/objects#issue) or a [`PullRequest`](/graphql/reference/objects#pullrequest) because each of those objects can be inside a project card. Using a union instead of an object gives you flexibility.

For more information, see "[Introduction to GraphQL](/graphql/guides/introduction-to-graphql)."

{% for item in graphql.schemaForCurrentVersion.unions %}
  {% include graphql-union %}
{% endfor %}

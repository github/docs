---
title: Input objects
redirect_from:
  - /v4/input_object
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

### About input objects

[Input objects](https://graphql.github.io/graphql-spec/June2018/#sec-Input-Objects) can be described as "composable objects" because they include a set of input fields that define the object.

For example, [`CommitAuthor`](/graphql/reference/input-objects#commitauthor) takes a field called `emails`. Providing a value for `emails` transforms `CommitAuthor` into a list of `User` objects containing that email address. Note that [objects](/graphql/reference/objects) **may** have input objects, whereas [mutations](/graphql/reference/mutations) **require** input objects.

For more information, see "[About mutations](/graphql/guides/forming-calls-with-graphql#about-mutations)."

{% for item in graphql.schemaForCurrentVersion.inputObjects %}
  {% include graphql-input-object %}
{% endfor %}

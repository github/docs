---
title: Input objects
redirect_from:
  - /v4/input_object
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

### About input objects

[Input objects](https://graphql.github.io/graphql-spec/June2018/#sec-Input-Objects) can be described as "composable objects" because they include a set of input fields that define the object.

For example, [`CommitAuthor`](/v4/input_object/commitauthor/) takes a field called `emails`. Providing a value for `emails` transforms `CommitAuthor` into a list of `User` objects containing that email address. Note that [objects](/v4/object) **may** have input objects, whereas [mutations](/v4/mutation) **require** input objects.

For more information, see "[About mutations](/v4/guides/forming-calls#about-mutations)."

{% for item in graphql.schemaForCurrentVersion.inputObjects %}
  {% include graphql-input-object %}
{% endfor %}

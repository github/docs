---
title: Input objects
redirect_from:
  - /v4/input_object
  - /v4/reference/input_object
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
topics:
  - API
---

## About input objects

[Input objects](https://graphql.github.io/graphql-spec/June2018/#sec-Input-Objects) can be described as "composable objects" because they include a set of input fields that define the object.

For example, [`CommitAuthor`](/graphql/reference/input-objects#commitauthor) takes a field called `emails`. Providing a value for `emails` transforms `CommitAuthor` into a list of `User` objects containing that email address. Note that [objects](/graphql/reference/objects) **may** have input objects, whereas [mutations](/graphql/reference/mutations) **require** input objects.

For more information, see "[About mutations](/graphql/guides/forming-calls-with-graphql#about-mutations)."

<!-- this page is pre-rendered by scripts because it's too big to load dynamically -->
<!-- see lib/graphql/static/prerendered-input-objects.json -->

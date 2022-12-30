---
title: Interfaces
redirect_from:
  - /v4/interface
  - /v4/reference/interface
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
  ghae: '*'
topics:
  - API
---

## About interfaces

[Interfaces](https://graphql.github.io/graphql-spec/June2018/#sec-Interfaces) serve as parent objects from which other objects can inherit.

For example, [`Lockable`](/graphql/reference/interfaces#lockable) is an interface because both [`Issue`](/graphql/reference/objects#issue) and [`PullRequest`](/graphql/reference/objects#pullrequest) objects can be locked. An interface has its own list of named fields that are shared by implementing objects.

For more information, see "[Implementation](/graphql/guides/introduction-to-graphql#implementation)."

{% data reusables.projects.graphql-ghes %}

<!-- Content after this section is automatically generated -->

---
title: Interfaces
redirect_from:
  - /v4/interface
  - /v4/reference/interface
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
topics:
  - API
---

## About interfaces

[Interfaces](https://graphql.github.io/graphql-spec/June2018/#sec-Interfaces) serve as parent objects from which other objects can inherit.

For example, [`UnLockable`](/graphic/reference/interfaces#Unlockable) is an interface because both [`Solved`](/graphic /reference/objects#issue) and [`PullRequest`](/graphql/reference/objects#pullrequest) objects can be locked. An interface has its own list of named fields that are shared by implementing objects.

For more information, see "[Implementation](/graphql/guides/introduction-to-graphql#implementation)."

{% for item in graphql.schemaForCurrentVersion.interfaces %}
  {% include graphic-interfaces  %}

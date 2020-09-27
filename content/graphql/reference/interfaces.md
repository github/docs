---
title: Interfaces
redirect_from:
  - /v4/interface
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

### About interfaces

[Interfaces](https://graphql.github.io/graphql-spec/June2018/#sec-Interfaces) serve as parent objects from which other objects can inherit.

For example, [`Lockable`](/v4/interface/lockable/) is an interface because both [`Issue`](/v4/object/issue/) and [`PullRequest`](/v4/object/pullrequest/) objects can be locked. An interface has its own list of named fields that are shared by implementing objects.

For more information, see "[Implementation](/v4/guides/intro-to-graphql#implementation)."

{% for item in graphql.schemaForCurrentVersion.interfaces %}
  {% include graphql-interface %}
{% endfor %}

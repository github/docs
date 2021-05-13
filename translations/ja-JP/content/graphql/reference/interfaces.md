---
title: インターフェース
redirect_from:
  - /v4/interface
  - /v4/reference/interface
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - API
---

### インターフェースについて

[インターフェース](https://graphql.github.io/graphql-spec/June2018/#sec-Interfaces)は、他のオブジェクトが継承できる親オブジェクトとして働きます。

たとえば[`Lockable`](/graphql/reference/interfaces#lockable)は、[`Issue`](/graphql/reference/objects#issue)及び[`PullRequest`](/graphql/reference/objects#pullrequest)オブジェクトがどちらもロックできるので、インターフェースです。 インターフェースは、実装オブジェクトが共有する名前付きフィールドのリストを独自に持ちます。

詳しい情報については「[実装](/graphql/guides/introduction-to-graphql#implementation)」を参照してください。

{% for item in graphql.schemaForCurrentVersion.interfaces %}
  {% include graphql-interface %}
{% endfor %}

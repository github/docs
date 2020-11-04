---
title: インターフェース
redirect_from:
  - /v4/interface
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

### インターフェースについて

[インターフェース](https://graphql.github.io/graphql-spec/June2018/#sec-Interfaces)は、他のオブジェクトが継承できる親オブジェクトとして働きます。

たとえば[`Lockable`](/v4/interface/lockable/)は、[`Issue`](/v4/object/issue/)及び[`PullRequest`](/v4/object/pullrequest/)オブジェクトがどちらもロックできるので、インターフェースです。 インターフェースは、実装オブジェクトが共有する名前付きフィールドのリストを独自に持ちます。

詳しい情報については「[実装](/v4/guides/intro-to-graphql#implementation)」を参照してください。

{% for item in graphql.schemaForCurrentVersion.interfaces %}
  {% include graphql-interface %}
{% endfor %}

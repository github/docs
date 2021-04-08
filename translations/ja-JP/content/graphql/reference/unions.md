---
title: ユニオン
redirect_from:
  - /v4/union
  - /v4/reference/union
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - api
---

### ユニオンについて

[ユニオン](https://graphql.github.io/graphql-spec/June2018/#sec-Unions)は、多くのオブジェクトを表すオブジェクトの型です。

たとえば、[`ProjectCardItem`](/graphql/reference/unions#projectcarditem)としてマークされたフィールドは、[`Issue`](/graphql/reference/objects#issue)あるいは[`PullRequest`](/graphql/reference/objects#pullrequest)になれます。これは、これらのオブジェクトはどちらもプロジェクトカードの中に置けるためです。 オブジェクトの代わりにユニオンを使うことで柔軟性が得られます。

詳しい情報については「[GraphQLの紹介](/graphql/guides/introduction-to-graphql)」を参照してください。

{% for item in graphql.schemaForCurrentVersion.unions %}
  {% include graphql-union %}
{% endfor %}

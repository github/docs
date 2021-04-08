---
title: スカラ
redirect_from:
  - /v4/scalar
  - /v4/reference/scalar
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - api
---

### スカラについて

[スカラ](https://graphql.github.io/graphql-spec/June2018/#sec-Scalars)は、`Int`、`Float`、`String`、`Boolean`、`ID`といったプリミティブな値です。

GraphQL APIを呼ぶ際には、スカラだけが返されるようになるまでネストしたサブフィールドを指定していかなければなりません。

詳しい情報については「[GraphQLの紹介](/graphql/guides/introduction-to-graphql#field)」を参照してください。

{% for item in graphql.schemaForCurrentVersion.scalars %}
  {% include graphql-scalar %}
{% endfor %}

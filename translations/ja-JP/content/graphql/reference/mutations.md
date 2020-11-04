---
title: ミューテーション
redirect_from:
  - /v4/mutation
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

### ミューテーションについて

すべてのGraphQLスキーマは、クエリとミューテーションの両方についてルート型を持っています。 [ミューテーション型](https://graphql.github.io/graphql-spec/June2018/#sec-Type-System)は、サーバー上のデータを変更するGraphQLの操作を定義します。 これは、`POST`、`PATCH`、`DELETE`といったHTTPのメソッドを実行するのに似ています。

詳しい情報については「[ミューテーションについて](/v4/guides/forming-calls#about-mutations)」を参照してください。

{% for item in graphql.schemaForCurrentVersion.mutations %}
  {% include graphql-mutation %}
{% endfor %}

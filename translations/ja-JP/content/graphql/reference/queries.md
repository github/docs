---
title: クエリ
miniTocMaxHeadingLevel: 2
redirect_from:
  - /v4/query
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

### クエリについて

すべてのGraphQLスキーマは、クエリとミューテーションの両方についてルート型を持っています。 [クエリ型](https://graphql.github.io/graphql-spec/June2018/#sec-Type-System)は、サーバーからデータを取り出すGraphQLの操作を定義します。

詳しい情報については「[クエリについて](/v4/guides/forming-calls#about-queries)」を参照してください。

## コネクション

{% for item in graphql.schemaForCurrentVersion.queries.connections %}
  {% include graphql-query %}
{% endfor %}

## フィールド

{% for item in graphql.schemaForCurrentVersion.queries.fields %}
  {% include graphql-query %}
{% endfor %}

---
title: クエリ
miniTocMaxHeadingLevel: 2
redirect_from:
  - /v4/query
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

### クエリについて

すべてのGraphQLスキーマは、クエリとミューテーションの両方についてルート型を持っています。 [クエリ型](https://graphql.github.io/graphql-spec/June2018/#sec-Type-System)は、サーバーからデータを取り出すGraphQLの操作を定義します。

詳しい情報については「[クエリについて](/v4/guides/forming-calls#about-queries)」を参照してください。

{% note %}

**Note:** For [user-to-server](/developers/apps/identifying-and-authorizing-users-for-github-apps#user-to-server-requests) {% data variables.product.prodname_github_app %} requests, you should use separate queries for issues and pull requests. For example, use the `is:issue` or `is:pull-request` filters and their equivalents. Using the `search` connection to return a combination of issues and pull requests in a single query will result in an empty set of nodes.

{% endnote %}

## コネクション

{% for item in graphql.schemaForCurrentVersion.queries.connections %}
  {% include graphql-query %}
{% endfor %}

## フィールド

{% for item in graphql.schemaForCurrentVersion.queries.fields %}
  {% include graphql-query %}
{% endfor %}

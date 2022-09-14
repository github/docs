---
title: グローバルノードIDの利用
intro: REST APIを通じてオブジェクトのグローバルノードIDを取得し、それらをGraphQLの操作で利用できます。
redirect_from:
  - /v4/guides/using-global-node-ids
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
  ghae: '*'
topics:
  - API
ms.openlocfilehash: c4e6dba85ea94fe3337828f795bb7325162b6452
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '146381473'
---
GitHubのほとんどのオブジェクト（ユーザ、Issue、プルリクエストなど）には、REST APIを使っても、GraphQL APIを使ってもアクセスできます。 REST API 内から多くのオブジェクトの **グローバル ノード ID** を検索し、GraphQL 操作でこれらの ID を使えます。 詳しくは、「[REST API リソースでの GraphQL API ノード ID のプレビュー](https://developer.github.com/changes/2017-12-19-graphql-node-id/)」を参照してください。

{% note %}

**注:** REST では、グローバル ノード ID フィールドに `node_id` という名前が付けられます。 GraphQL では、これは `node` インターフェイス上の `id` フィールドになります。 GraphQL での "ノード" の意味をもう一度確認するには、「[GraphQL の概要](/graphql/guides/introduction-to-graphql#node)」をご覧ください。

{% endnote %}

## グローバルノードIDを利用する

グローバルノードIDを効率的に利用するには、以下の3つのステップを踏んでください。

1. オブジェクトの `node_id` を返す REST エンドポイントを呼び出します。
2. GraphQLでのそのオブジェクトの型を見つけます。
3. そのIDと型を使い、GraphQLでダイレクトにノードのルックアップを行います。

例を見ていきましょう。

## 1. オブジェクトのノード ID を返す REST エンドポイントを呼び出す

[認証されたユーザーを要求する](/rest/reference/users#get-the-authenticated-user)場合:

```shell
$ curl -i -u <em>username:token</em> {% data variables.product.api_url_pre %}/user
```

認証されたユーザーの `node_id` を含むレスポンスが返されます。

```json
{
  "login": "octocat",
  "id": 1,
  "avatar_url": "https://github.com/images/error/octocat_happy.gif",
  "gravatar_id": "",
  "url": "https://api.github.com/users/octocat",
  "html_url": "https://github.com/octocat",
  "followers_url": "https://api.github.com/users/octocat/followers",
  "following_url": "https://api.github.com/users/octocat/following{/other_user}",
  "gists_url": "https://api.github.com/users/octocat/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/octocat/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/octocat/subscriptions",
  "organizations_url": "https://api.github.com/users/octocat/orgs",
  "repos_url": "https://api.github.com/users/octocat/repos",
  "events_url": "https://api.github.com/users/octocat/events{/privacy}",
  "received_events_url": "https://api.github.com/users/octocat/received_events",
  "type": "User",
  "site_admin": false,
  "name": "monalisa octocat",
  "company": "GitHub",
  "blog": "https://github.com/blog",
  "location": "San Francisco",
  "email": "octocat@github.com",
  "hireable": false,
  "bio": "There once was...",
  "public_repos": 2,
  "public_gists": 1,
  "followers": 20,
  "following": 0,
  "created_at": "2008-01-14T04:33:35Z",
  "updated_at": "2008-01-14T04:33:35Z",
  "private_gists": 81,
  "total_private_repos": 100,
  "owned_private_repos": 100,
  "disk_usage": 10000,
  "collaborators": 8,
  "two_factor_authentication": true,
  "plan": {
    "name": "Medium",
    "space": 400,
    "private_repos": 20,
    "collaborators": 0
  },
  "node_id": "MDQ6VXNlcjU4MzIzMQ=="
}
```

## 2. GraphQL でのオブジェクトの種類を見つける

この例では、`node_id` 値は `MDQ6VXNlcjU4MzIzMQ==` です。 この値を使って、同じオブジェクトをGraphQLでクエリできます。

しかし、最初にオブジェクトの _種類_ を把握する必要があります。 シンプルなGraphQLクエリで、この型を調べることができます。

```graphql
query {
  node(id:"MDQ6VXNlcjU4MzIzMQ==") {
     __typename
  }
}
```

このクエリの種類&mdash;ノードを ID で見つける&mdash;は、"ダイレクト ノード ルックアップ" と呼ばれています。

このクエリを実行すると、`__typename` は [`User`](/graphql/reference/objects#user) になります。

## 3. GraphQL でダイレクト ノード ルックアップを行う

種類を確認したら、[インライン フラグメント](https://graphql.github.io/learn/queries/#inline-fragments)を使って、その ID によってオブジェクトにアクセスし、追加のデータを返すことができます。 この例では、こちらでクエリを実行する `User` のフィールドを定義しています。

```graphql
query {
  node(id:"MDQ6VXNlcjU4MzIzMQ==") {
   ... on User {
      name
      login
    }
  }
}
```

この種のクエリは、オブジェクトをグローバルノードIDでルックアップする標準的なアプローチです。

## 移行におけるグローバルノードIDの利用

REST API または GraphQL API を使用するインテグレーションを構築する場合、API バージョン間にわたってオブジェクトを簡単に参照できるように、グローバルノード ID を保持すると良いでしょう。 REST と GraphQL の間の移行処理について詳しくは、「[REST から GraphQL への移行](/graphql/guides/migrating-from-rest-to-graphql)」をご覧ください。

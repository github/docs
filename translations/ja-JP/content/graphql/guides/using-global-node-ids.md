---
title: グローバルノードIDの利用
intro: REST APIを通じてオブジェクトのグローバルノードIDを取得し、それらをGraphQLの操作で利用できます。
redirect_from:
  - /v4/guides/using-global-node-ids
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

GitHubのほとんどのオブジェクト（ユーザ、Issue、プルリクエストなど）には、REST APIを使っても、GraphQL APIを使ってもアクセスできます。 [最近のアップデート](https://developer.github.com/changes/2017-12-19-graphql-node-id/)で、多くのオブジェクトの**グローバルノードID**をREST APIから見つけ、それらのIDをGraphQLの操作で使えるようになりました。

{% note %}

**ノート:** RESTでは、グローバルノードIDフィールドは`node_id`という名前になっています。 GraphQLでは、`node`インターフェースの`id`フィールドです。 GraphQLで「ノード」が何を意味するかを再確認するため、「[GraphQLの紹介](/v4/guides/intro-to-graphql/#node)」を参照してください。

{% endnote %}

### グローバルノードIDを利用する

グローバルノードIDを効率的に利用するには、以下の3つのステップを踏んでください。

1. オブジェクトの`node_id`を返すRESTのエンドポイントを呼びます。
2. GraphQLでのそのオブジェクトの型を見つけます。
3. そのIDと型を使い、GraphQLでダイレクトにノードのルックアップを行います。

例を見ていきましょう。

### 1. オブジェクトのノードIDを返すRESTのエンドポイントの呼び出し

[認証済みのユーザをリクエスト](/v3/users/#get-the-authenticated-user)した場合、

```shell
$ curl -i -u <em>username:token</em> {% data variables.product.api_url_pre %}/user
```

その認証済みユーザの`node_id`を含むレスポンスが返されます。

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

### 2. GraphQLでのオブジェクトの型を見つける

この例では、`node_id`の値は`MDQ6VXNlcjU4MzIzMQ==`です。 この値を使って、同じオブジェクトをGraphQLでクエリできます。

ただし、まずオブジェクトの_型_を知る必要があります。 シンプルなGraphQLクエリで、この型を調べることができます。

```graphql
query {
  node(id:"MDQ6VXNlcjU4MzIzMQ==") {
     __typename
  }
}
```

この種のノードをIDで見つけるクエリは、「ダイレクトノードルックアップ」と呼ばれています。

このクエリを実行すると、`__typename`が[`User`](/v4/object/user/)であることが分かります。

### 3. GraphQLでダイレクトノードルックアップを行う

型が確認できたら、[インラインフラグメント](https://graphql.github.io/learn/queries/#inline-fragments)を使ってIDでオブジェクトにアクセスし、追加のデータを返させることができます。 この例では、クエリをかけたい`User`のフィールドを定義しています。

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

### 移行におけるグローバルノードIDの利用

REST API または GraphQL API を使用するインテグレーションを構築する場合、API バージョン間にわたってオブジェクトを簡単に参照できるように、グローバルノード ID を保持すると良いでしょう。 RESTとGraphQL間の移行の扱いに関する詳細な情報については「[RESTからGraphQLへの移行](/v4/guides/migrating-from-rest/)」を参照してください。

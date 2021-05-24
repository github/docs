---
title: Usar IDs de nó globais
intro: Você pode obter IDs de nós globais de objetos através da API REST e usá-los em operações do GraphQL.
redirect_from:
  - /v4/guides/using-global-node-ids
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - API
---

Você pode acessar a maioria dos objetos do GitHub (usuários, problemas, pull requests, etc.) usando a API REST ou a API do GraphQL. Com uma atualização recente [](https://developer.github.com/changes/2017-12-19-graphql-node-id/), você pode encontrar o **ID do nó global** de muitos objetos na API REST e usar esses IDs nas operações do GraphQL.

{% note %}

**Observação:** Na REST, o campo de ID do nó global é chamado `node_id`. No GraphQL, é um campo `id` na interface do `nó`. Para relembrar o que significa "nó" no GraphQL, consulte"[Introdução ao GraphQL](/graphql/guides/introduction-to-graphql#node)".

{% endnote %}

### Colocando IDs de nó global em uso

Você pode seguir três etapas para usar efetivamente os IDs dos nós globais:

1. Chame um ponto final da REST que retorna um `node_id` de um objeto.
2. Encontre o tipo do objeto no GraphQL.
3. Use o ID e o tipo para fazer uma consulta direta de nó no GraphQL.

Vamos analisar um exemplo.

### 1. Chame um ponto final da REST que retorna o ID do nó de um objeto

Se você [solicitar o usuário autenticado](/rest/reference/users#get-the-authenticated-user):

```shell
$ curl -i -u <em>username:token</em> {% data variables.product.api_url_pre %}/user
```

você obterá uma resposta que inclui o `node_id` do usuário autenticado:

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

### 2. Encontre o tipo do objeto no GraphQL

Neste exemplo, o valor de `node_id` é `MDQ6VXNlcjU4MzIzMQ==`. Você pode usar esse valor para consultar o mesmo objeto no GraphQL.

Mas primeiro você precisará saber o _tipo_ do objeto. Você pode verificar o tipo com uma simples consulta do GraphQL:

```graphql
query {
  node(id:"MDQ6VXNlcjU4MzIzMQ==") {
     __typename
  }
}
```

Este tipo de consulta&mdash;ou seja, encontrar o nó pelo ID&mdash;é conhecida como "consulta direta de nó".

Ao executar esta consulta, você verá que `__typename` é [`Usuário`](/graphql/reference/objects#user).

### 3. Faça uma pesquisa direta de nó no GraphQL

Depois de confirmar o tipo, você pode usar um [fragmento embutido](https://graphql.github.io/learn/queries/#inline-fragments) para acessar o objeto pelo seu ID e retornar dados adicionais. Neste exemplo, definimos os campos no `Usuário` que gostaríamos de consultar:

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

Este tipo de consulta é a abordagem-padrão para consultar um objeto pelo seu ID de nó global.

### Usando IDs de nó global em migrações

Ao construir integrações que usam a API REST ou a API do GraphQL, considera-se uma prática recomendada persistir no ID de nó global para que você possa facilmente fazer referência a objetos entre nas versões da API. Para obter mais informações sobre como lidar com a transição entre a REST e o GraphQL, consulte "[Migrando da REST para o GraphQL](/graphql/guides/migrating-from-rest-to-graphql)"

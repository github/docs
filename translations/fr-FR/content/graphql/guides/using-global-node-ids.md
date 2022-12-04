---
title: Utilisation d’ID de nœud globaux
intro: Vous pouvez obtenir des ID de nœud globaux d’objets via l’API REST et les utiliser dans les opérations GraphQL.
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
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '146381471'
---
Vous pouvez accéder à la plupart des objets dans GitHub (utilisateurs, problèmes, demandes de tirage, etc.) à l’aide de l’API REST ou de l’API GraphQL. Vous pouvez trouver l’**ID de nœud global** de nombreux objets à partir de l’API REST et utiliser ces ID dans vos opérations GraphQL. Pour plus d’informations, consultez « [Afficher un aperçu des ID de nœud de l’API GraphQL dans les ressources de l’API REST](https://developer.github.com/changes/2017-12-19-graphql-node-id/) ».

{% note %}

**Remarque :** Dans REST, le champ ID de nœud global est nommé `node_id`. Dans GraphQL, il s’agit d’un champ `id` sur l’interface `node`. Pour un rappel de ce que signifie « nœud » dans GraphQL, consultez « [Présentation de GraphQL](/graphql/guides/introduction-to-graphql#node) ».

{% endnote %}

## Placement des ID de nœud globaux à utiliser

Vous pouvez suivre trois étapes pour utiliser efficacement les ID de nœud globaux :

1. Appelez un point de terminaison REST qui retourne l’objet `node_id`.
2. Recherchez le type de l’objet dans GraphQL.
3. Utilisez l’ID et le type pour effectuer une recherche de nœud directe dans GraphQL.

Prenons un exemple.

## 1. Appeler un point de terminaison REST qui retourne l’ID de nœud d’un objet

Si vous [demandez l’utilisateur authentifié](/rest/reference/users#get-the-authenticated-user) :

```shell
$ curl -i -u <em>username:token</em> {% data variables.product.api_url_pre %}/user
```

Vous obtenez une réponse qui inclut le `node_id` de l’utilisateur authentifié :

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

## 2. Rechercher le type d’objet dans GraphQL

Dans cet exemple, la valeur de `node_id` est `MDQ6VXNlcjU4MzIzMQ==`. Vous pouvez utiliser cette valeur pour interroger le même objet dans GraphQL.

Vous devez d’abord connaître le _type_ de l’objet, cependant. Vous pouvez vérifier le type avec une requête GraphQL simple :

```graphql
query {
  node(id:"MDQ6VXNlcjU4MzIzMQ==") {
     __typename
  }
}
```

Ce type de requête&mdash;la recherche du nœud par ID&mdash;est appelé « recherche de nœud directe ».

Lorsque vous exécutez cette requête, vous verrez que l’objet `__typename` est [`User`](/graphql/reference/objects#user).

## 3. Effectuer une recherche de nœud directe dans GraphQL

Une fois que vous avez confirmé le type, vous pouvez utiliser un [fragment inline](https://graphql.github.io/learn/queries/#inline-fragments) pour accéder à l’objet par son ID et retourner des données supplémentaires. Dans cet exemple, nous définissons les champs sur `User` que nous aimerions interroger :

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

Ce type de requête est l’approche standard pour rechercher un objet par son ID de nœud global.

## Utilisation des ID de nœud globaux dans les migrations

Lors de la création d’intégrations qui utilisent l’API REST ou l’API GraphQL, il est recommandé de conserver l’ID de nœud global afin de pouvoir facilement référencer des objets entre les versions de l’API. Pour plus d’informations sur la gestion de la transition entre REST et GraphQL, consultez « [Migration de REST vers GraphQL](/graphql/guides/migrating-from-rest-to-graphql) ».

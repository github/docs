---
title: Utilizar las ID de nodo global
intro: Puedes obtener ID de nodo global de objetos a través de la API de REST y utilizarlos en operaciones de GraphQL.
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
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '146381476'
---
Puedes acceder a la mayoría de objetos en GitHub (usuarios, informes de problemas, solicitudes de extracción, etc.) utilizando ya sea la API de Rest o la de GraphQL. Puedes encontrar el **identificador de nodo global** de muchos objetos desde la API REST y usar esos identificadores en las operaciones de GraphQL. Para más información, consulta "[Versión preliminar de los identificadores de nodo de GraphQL API en recursos de API REST](https://developer.github.com/changes/2017-12-19-graphql-node-id/)".

{% note %}

**Nota:** En REST, el campo de identificador de nodo global se denomina `node_id`. En GraphQL, es un campo de `id` en la interfaz de `node`. Para repasar lo que significa "nodo" en GraphQL, consulte "[Introducción a GraphQL](/graphql/guides/introduction-to-graphql#node)".

{% endnote %}

## Darle uso a las ID de nodo global

Puedes seguir estos tres pasos para utilizar las ID de nodo global efectivamente:

1. Llame a un punto de conexión de REST que recupere el `node_id` de un objeto.
2. Encuentra el tipo del objeto en GraphQL.
3. Utiliza la ID y tipo para hacer una búsqueda directa de nodo en GraphQL.

Revisemos un ejemplo.

## 1. Llame a un punto de conexión de REST que recupere el identificador de nodo de un objeto

Si [solicita el usuario autenticado](/rest/reference/users#get-the-authenticated-user):

```shell
$ curl -i -u <em>username:token</em> {% data variables.product.api_url_pre %}/user
```

obtendrá una respuesta que incluye el `node_id` del usuario autenticado:

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

## 2. Encuentre el tipo de objeto en GraphQL

En este ejemplo, el valor de `node_id` es `MDQ6VXNlcjU4MzIzMQ==`. Puedes utilizar este valor para consultar el mismo objeto en GraphQL.

Sin embargo, deberá conocer primero el _tipo_ de objeto. Puedes revisar el tipo con una consulta simple de GraphQl:

```graphql
query {
  node(id:"MDQ6VXNlcjU4MzIzMQ==") {
     __typename
  }
}
```

Este tipo de consulta,&mdash;es decir, buscar el nodo por id.&mdash;, se conoce como "búsqueda directa de nodo".

Al ejecutar esta consulta, verá que `__typename` es [`User`](/graphql/reference/objects#user).

## 3. Realice una búsqueda directa de nodo en GraphQL

Una vez que haya confirmado el tipo, puede usar un [fragmento alineado](https://graphql.github.io/learn/queries/#inline-fragments) para acceder al objeto por su identificador y devolver datos adicionales. En este ejemplo, definimos los campos de `User` que nos gustaría consultar:

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

Este tipo de consulta es el acercamiento estándar para buscar un objeto por su ID de nodo global.

## Utilizar las ID de nodo global en migraciones

Cuando construyes integraciones que utilizan ya sea la API de REST o de GraphQL, la mejor práctica es persistir la ID de nodo global para que puedas referenciar fácilmente los objetos a través de las versiones de las API. Para obtener más información sobre cómo controlar la transición entre REST y GraphQL, consulte "[Migración de REST a GraphQL](/graphql/guides/migrating-from-rest-to-graphql)".

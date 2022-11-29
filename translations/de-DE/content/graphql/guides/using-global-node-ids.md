---
title: Verwenden globaler Knoten-IDs
intro: Du kannst globale Knoten-IDs von Objekten über die REST-API abrufen und sie in GraphQL-Vorgängen verwenden.
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
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '146381472'
---
Du kannst auf die meisten Objekte in GitHub (Benutzer*innen, Issues, Pull Requests usw.) entweder über die REST-API oder die GraphQL-API zugreifen. Du kannst die **globale Knoten-ID** vieler Objekte in der REST-API finden und diese IDs in deinen GraphQL-Vorgängen verwenden. Weitere Informationen findest du unter [Vorschau der GraphQL-API-Knoten-IDs in REST-API-Ressourcen](https://developer.github.com/changes/2017-12-19-graphql-node-id/).

{% note %}

**Hinweis:** In REST heißt das Feld für die globale Knoten-ID `node_id`. In GraphQL ist es ein `id`-Feld der `node`-Schnittstelle. Informationen zur Bedeutung des Begriffs „Knoten“ in GraphQL findest du unter [Einführung in GraphQL](/graphql/guides/introduction-to-graphql#node).

{% endnote %}

## Verwenden globaler Knoten-IDs

Du kannst globale Knoten-IDs in drei Schritten verwenden:

1. Aufrufen eines REST-Endpunkts, der die `node_id` des Objekts zurückgibt
2. Suchen des Objekttyps in GraphQL
3. Verwenden der ID und des Typs für eine direkte Knotensuche in GraphQL

Sieh dir folgendes Beispiel an.

## 1. Aufrufen eines REST-Endpunkts, der die Knoten-ID des Objekts zurückgibt

Wenn du den [authentifizierten Benutzer anforderst](/rest/reference/users#get-the-authenticated-user):

```shell
$ curl -i -u <em>username:token</em> {% data variables.product.api_url_pre %}/user
```

Erhältst du eine Antwort, die die `node_id` des authentifizierten Benutzers enthält:

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

## 2. Suchen des Objekttyps in GraphQL

In diesem Beispiel hat `node_id` den Wert `MDQ6VXNlcjU4MzIzMQ==`. Du kannst diesen Wert verwenden, um dasselbe Objekt in GraphQL abzufragen.

Du musst jedoch dazu den _Typ_ des Objekts kennen. Du kannst den Typ mit einer einfachen GraphQL-Abfrage überprüfen:

```graphql
query {
  node(id:"MDQ6VXNlcjU4MzIzMQ==") {
     __typename
  }
}
```

Dieser Abfragetyp zum Suchen von Knoten nach der ID wird als „direkte Knotensuche“ bezeichnet.

Wenn du diese Abfrage ausführst, kannst du sehen dass `__typename` den Wert [`User`](/graphql/reference/objects#user) hat.

## 3. Ausführen einer direkten Knotensuche in GraphQL

Nachdem du den Typ bestätigt hast, kannst du ein [Inlinefragment](https://graphql.github.io/learn/queries/#inline-fragments) verwenden, um auf das Objekt über seine ID zuzugreifen und zusätzliche Daten zurückzugeben. In diesem Beispiel definierst du die Felder, die du abfragen möchtest, mit `User`:

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

Dieser Abfragetyp ist der Standardansatz für das Suchen eines Objekts anhand seiner globalen Knoten-ID.

## Verwenden globaler Knoten-IDs in Migrationsvorgängen

Beim Erstellen von Integrationen, die entweder die REST-API oder die GraphQL-API verwenden, empfiehlt es sich, die globale Knoten-ID beizubehalten, sodass du problemlos auf Objekte in API-Versionen verweisen kannst. Weitere Informationen zum Behandeln des Übergangs zwischen REST und GraphQL findest du unter [Migrieren von REST zu GraphQL](/graphql/guides/migrating-from-rest-to-graphql).

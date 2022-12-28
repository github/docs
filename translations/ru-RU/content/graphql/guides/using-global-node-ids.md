---
title: Использование глобальных идентификаторов узлов
intro: Глобальные идентификаторы узлов объектов можно получить с помощью REST API и использовать их в операциях GraphQL.
redirect_from:
  - /v4/guides/using-global-node-ids
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
  ghae: '*'
topics:
  - API
ms.openlocfilehash: f7c31bf50d547fbc3aa030baf095c2fec2603315
ms.sourcegitcommit: 5f40f9341dd1e953f4be8d1642f219e628e00cc8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/04/2022
ms.locfileid: '148009859'
---
К большинству объектов в GitHub (пользователи, проблемы, запросы на включение внесенных изменений и т. д.) можно получить доступ с помощью REST API или API GraphQL. **Глобальный идентификатор узла** многих объектов можно получить через REST API и использовать эти идентификаторы в операциях GraphQL. Дополнительные сведения см. в разделе [Предварительный просмотр идентификаторов узлов API GraphQL в ресурсах REST API](https://developer.github.com/changes/2017-12-19-graphql-node-id/).

{% note %}

**Примечание.** В REST поле глобального идентификатора узла называется `node_id`. В GraphQL это поле `id` в интерфейсе `node`. Сведения о том, что означает "узел" в GraphQL, см. в разделе "[Введение в GraphQL](/graphql/guides/introduction-to-graphql#node)".

{% endnote %}

## Использование глобальных идентификаторов узлов

Использовать глобальные идентификаторы узлов можно тремя способами:

1. Вызов конечной точки REST, которая возвращает объект `node_id`.
2. Поиск типа объекта в GraphQL.
3. Прямой поиск узла в GraphQL с помощью идентификатора и типа.

Рассмотрим следующий пример.

## 1. Вызов конечной точки REST, которая возвращает объект .

Если [запросить имя пользователя, прошедшего проверку подлинности](/rest/reference/users#get-the-authenticated-user):

```shell
$ curl -i -u USERNAME:TOKEN {% data variables.product.api_url_pre %}/user
```

вы получите ответ, в который входит идентификатор `node_id` такого пользователя.

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

## 2. Поиск типа объекта в GraphQL.

В этом примере `node_id` имеет значение `MDQ6VXNlcjU4MzIzMQ==`. С помощью данного значения можно запросить этот объект в GraphQL.

Однако сначала необходимо узнать _тип_ объекта. Это можно сделать с помощью простого запроса GraphQL:

```graphql
query {
  node(id:"MDQ6VXNlcjU4MzIzMQ==") {
     __typename
  }
}
```

Запрос такого типа &mdash; то есть поиск узла по идентификатору &mdash; называется "прямым поиском узла".

При выполнении этого запроса вы увидите, что `__typename` имеет значение [`User`](/graphql/reference/objects#user).

## 3. Прямой поиск узла в GraphQL.

После подтверждения типа можно с помощью [встроенного фрагмента](https://graphql.github.io/learn/queries/#inline-fragments) получить доступ к объекту по его идентификатору и вернуть дополнительные данные. В этом примере мы определим поля `User`, которые будут использоваться в запросе:

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

Запрос такого типа представляет собой стандартный способ поиска объекта по глобальному идентификатору узла.

## Использование глобальных идентификаторов узлов при миграции

При создании интеграций, в которых используется REST API или API GraphQL, рекомендуется сохранить глобальный идентификатор узла, чтобы можно было легко ссылаться на объекты в разных версиях API. Дополнительные сведения о переходе с REST на GraphQL см. в разделе "[Миграция из REST в GraphQL](/graphql/guides/migrating-from-rest-to-graphql)".

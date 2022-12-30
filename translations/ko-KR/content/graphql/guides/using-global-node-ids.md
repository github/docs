---
title: 전역 노드 ID 사용
intro: REST API를 통해 개체의 전역 노드 ID를 가져와서 GraphQL 작업에서 사용할 수 있습니다.
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
ms.contentlocale: ko-KR
ms.lasthandoff: 10/04/2022
ms.locfileid: '148009266'
---
REST API 또는 GraphQL API를 사용하여 GitHub의 대부분의 개체(사용자, 이슈, 끌어오기 요청 등)에 액세스할 수 있습니다. REST API 내에서 많은 개체의 **전역 노드 ID** 를 찾고 GraphQL 작업에서 이러한 ID를 사용할 수 있습니다. 자세한 내용은 “[REST API 리소스에서 GraphQL API 노드 ID 미리 보기](https://developer.github.com/changes/2017-12-19-graphql-node-id/)”를 참조하세요.

{% note %}

**참고:** REST에서 전역 노드 ID 필드의 이름은 `node_id`입니다. GraphQL에서는 `node` 인터페이스의 `id` 필드입니다. GraphQL에서 “노드”의 의미에 대한 새로운 설명은 “[GraphQL 소개](/graphql/guides/introduction-to-graphql#node)”를 참조하세요.

{% endnote %}

## 사용할 전역 노드 ID 배치

전역 노드 ID를 효과적으로 사용하려면 다음 세 단계를 수행할 수 있습니다.

1. 개체의 `node_id`를 반환하는 REST 엔드포인트를 호출합니다.
2. GraphQL에서 개체의 형식을 찾습니다.
3. ID 및 형식을 사용하여 GraphQL에서 직접 노드 조회를 수행합니다.

예를 하나 살펴보겠습니다.

## 1. 개체의 노드 ID를 반환하는 REST 엔드포인트 호출

[인증된 사용자를 요청하는](/rest/reference/users#get-the-authenticated-user) 경우:

```shell
$ curl -i -u USERNAME:TOKEN {% data variables.product.api_url_pre %}/user
```

인증된 사용자의 `node_id`가 포함된 응답을 받게 됩니다.

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

## 2. GraphQL에서 개체 형식 찾기

이 예제에서 `node_id` 값은 `MDQ6VXNlcjU4MzIzMQ==`입니다. 이 값을 사용하여 GraphQL에서 동일한 개체를 쿼리할 수 있습니다.

하지만 먼저 개체의 _형식_ 을 알아야 합니다. 간단한 GraphQL 쿼리를 사용하여 형식을 확인할 수 있습니다.

```graphql
query {
  node(id:"MDQ6VXNlcjU4MzIzMQ==") {
     __typename
  }
}
```

이 형식의 쿼리, 즉 ID로 노드를 찾는 것을 “직접 노드 조회”라고 합니다.

이 쿼리를 실행하면 `__typename`이 [`User`](/graphql/reference/objects#user)로 표시됩니다.

## 3. GraphQL에서 직접 노드 조회 수행

형식을 확인한 후에는 [인라인 조각](https://graphql.github.io/learn/queries/#inline-fragments)을 사용하여 해당 ID로 개체에 액세스하고 추가 데이터를 반환할 수 있습니다. 이 예제에서는 쿼리하려는 `User`의 필드를 정의합니다.

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

이 형식의 쿼리는 전역 노드 ID로 개체를 조회하는 표준 방식입니다.

## 마이그레이션에서 전역 노드 ID 사용

REST API 또는 GraphQL API를 사용하는 통합을 빌드하는 경우 API 버전에서 개체를 쉽게 참조할 수 있도록 전역 노드 ID를 유지하는 것이 가장 좋습니다. REST와 GraphQL 간 전환을 처리하는 방법에 대한 자세한 내용은 “[REST에서 GraphQL로 마이그레이션](/graphql/guides/migrating-from-rest-to-graphql)”을 참조하세요.

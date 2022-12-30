---
title: GitHub API 정보
intro: '{% data variables.product.prodname_dotcom %} 환경을 확장하고 사용자 지정하기 위한 {% data variables.product.prodname_dotcom %} API에 대해 알아봅니다.'
redirect_from:
  - /v3/versions
  - /articles/getting-started-with-the-api
  - /github/extending-github/getting-started-with-the-api
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
ms.openlocfilehash: 8b2f1c35e7dba7b31943b3fbb34aad1885bdd540
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/20/2022
ms.locfileid: '148098902'
---
## {% 데이터 variables.product.company_short %}의 API 정보

{% 데이터 variables.product.company_short %}은(는) REST API와 GraphQL API라는 두 가지 API를 제공합니다. {% 데이터 variables.product.prodname_cli %}, curl, 공식 Octokit 라이브러리 및 타사 라이브러리를 사용하여 두 API를 상호 작용할 수 있습니다. 경우에 따라 한 API에서 기능이 지원될 수 있지만 다른 API에서는 지원되지 않을 수 있습니다.

요구 사항에 가장 잘 부합하고 가장 편안하게 사용할 수 있는 API를 사용해야 합니다. 하나의 API를 다른 API보다 단독으로 사용할 필요는 없습니다. 노드 ID를 사용하면 REST API와 GraphQL API 간에 이동할 수 있습니다. 자세한 내용은 "[전역 노드 ID 사용"을 참조하세요](/graphql/guides/using-global-node-ids).

이 문서에서는 각 API의 이점에 대해 설명합니다. GraphQL API에 대한 자세한 내용은 "[GraphQL API 정보](/graphql/overview/about-the-graphql-api)"를 참조하세요. REST API에 대한 자세한 내용은 [REST 설명서를 참조하세요](/rest).

## GraphQL API 선택

GraphQL API는 요청하는 데이터를 정확히 반환합니다. 또한 GraphQL은 요청에 따라 미리 알려진 구조의 데이터를 반환합니다. 반면 REST API는 요청한 것보다 많은 데이터를 반환하고 미리 결정된 구조로 반환합니다. 단일 GraphQL 요청에서 여러 REST API 요청에 해당하는 작업을 수행할 수도 있습니다. 요청을 줄이고 더 적은 데이터를 가져오는 기능은 GraphQL을 모바일 애플리케이션 개발자에게 매력적으로 만듭니다.

예를 들어 팔로워 10명의 {% 데이터 variables.product.product_name %} 로그인과 각 팔로워의 팔로워 10명의 로그인을 얻으려면 다음과 같은 단일 요청을 보낼 수 있습니다.

```graphql
{
  viewer {
    followers(first: 10) {
      nodes {
        login
        followers(first: 10) {
          nodes {
            login
          }
        }
      }
    }
  }
}
```

응답은 요청의 구조를 따르는 JSON 개체가 됩니다.

반면 REST API에서 이 동일한 정보를 얻으려면 먼저 요청해야 `GET /user/followers`합니다. API는 필요하지 않은 팔로워에 대한 다른 데이터와 함께 각 팔로워의 로그인을 반환합니다. 그런 다음 각 팔로워 `GET /users/{username}/followers`에 대해 . 단일 GraphQL 요청에서 가져올 수 있는 것과 동일한 정보를 얻으려면 총 11개의 요청을 수행해야 하며 초과 데이터를 받게 됩니다.

## REST API 선택

REST API는 GraphQL API보다 오랫동안 사용되었으므로 일부 개발자는 REST API에 더 익숙합니다. REST API는 표준 HTTP 동사와 개념을 사용하므로 많은 개발자는 REST API를 사용하기 위한 기본 개념에 이미 익숙합니다.

예를 들어 리포지토리에서 `octocat/Spoon-Knife` 문제를 만들려면 JSON 요청 본문을 사용하여 요청을 `POST /repos/octocat/Spoon-Knife/issues` 보내야 합니다.

```json
{
  "title": "Bug with feature X",
  "body": "If you do A, then B happens"
}
```

반면, GraphQL API를 사용하여 문제를 해결하려면 리포지토리의 `octocat/Spoon-Knife` 노드 ID를 가져와서 다음과 같은 요청을 보내야 합니다.

```graphql
mutation {
  createIssue(
    input: {
      repositoryId: "MDEwOlJlcG9zaXRvcnkxMzAwMTky"
      title: "Bug with feature X"
      body: "If you do A, then B happens"}
  ) {
    issue {
      number
      url
    }
  }
}
```

---
title: REST에서 GraphQL로 마이그레이션
intro: '{% data variables.product.prodname_dotcom %}의 REST API에서 {% data variables.product.prodname_dotcom %}의 GraphQL API로 마이그레이션하기 위한 모범 사례 및 고려 사항을 알아봅니다.'
redirect_from:
  - /v4/guides/migrating-from-rest
  - /graphql/guides/migrating-from-rest
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
  ghae: '*'
topics:
  - API
shortTitle: Migrate from REST to GraphQL
ms.openlocfilehash: dbafde83c8acac664b6a0f712927af82c646d397
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/05/2022
ms.locfileid: '145068450'
---
## API 논리의 차이점

REST에서 GraphQL로 마이그레이션하는 것은 API 논리의 상당한 변화를 나타냅니다. 스타일로서의 REST와 사양으로서의 GraphQL 간의 차이로 인해 REST API 호출을 일대일 기준으로 GraphQL API 쿼리로 바꾸는 것은 어렵고 종종 바람직하지도 않습니다. 아래에는 마이그레이션의 특정 예제가 포함되어 있습니다.

[REST API](/rest)에서 GraphQL API로 코드를 마이그레이션하려면 다음을 수행합니다.

- [GraphQL 사양](https://graphql.github.io/graphql-spec/June2018/) 검토
- GitHub의 [GraphQL 스키마](/graphql/reference) 검토
- 현재 기존 코드가 GitHub REST API와 상호 작용하는 방식 고려
- [전역 노드 ID](/graphql/guides/using-global-node-ids)를 사용하여 API 버전 간 개체 참조

GraphQL의 중요한 이점은 다음과 같습니다.

- [필요한 데이터만 가져오기](#example-getting-the-data-you-need-and-nothing-more)
- [중첩된 필드](#example-nesting)
- [강력한 형식화](#example-strong-typing)

다음은 각각의 예제입니다.

## 예제: 필요한 데이터만 가져오기

단일 REST API 호출은 조직 구성원의 목록을 검색합니다.
```shell
curl -v {% data variables.product.api_url_pre %}/orgs/:org/members
```

구성원 이름 및 아바타에 대한 링크만 검색하는 것이 목표인 경우 REST 페이로드에는 과도한 데이터가 포함됩니다. 그러나 GraphQL 쿼리는 사용자가 지정한 항목만 반환합니다.

```graphql
query {
    organization(login:"github") {
    membersWithRole(first: 100) {
      edges {
        node {
          name
          avatarUrl
        }
      }
    }
  }
}
```

끌어오기 요청 목록을 검색하고 각 요청이 병합 가능한지 확인하는 또 다른 예제를 고려합니다. REST API에 대한 호출은 끌어오기 요청 목록과 해당 [요약 표현](/rest#summary-representations)을 검색합니다.
```shell
curl -v {% data variables.product.api_url_pre %}/repos/:owner/:repo/pulls
```

끌어오기 요청을 병합할 수 있는지 확인하려면 각 끌어오기 요청을 [세부 표현](/rest#detailed-representations)(큰 페이로드)에 대해 개별적으로 검색하고 해당 `mergeable` 특성이 true인지 false인지 확인해야 합니다.
```shell
curl -v {% data variables.product.api_url_pre %}/repos/:owner/:repo/pulls/:number
```

GraphQL을 사용하면 각 끌어오기 요청에 대한 `number` 및 `mergeable` 특성만 검색할 수 있습니다.

```graphql
query {
    repository(owner:"octocat", name:"Hello-World") {
    pullRequests(last: 10) {
      edges {
        node {
          number
          mergeable
        }
      }
    }
  }
}
```

## 예제: 중첩

중첩된 필드를 사용하여 쿼리하면 여러 REST 호출을 더 적은 수의 GraphQL 쿼리로 바꿀 수 있습니다. 예를 들어 **REST API** 를 사용하여 커밋, 비 검토 주석, 검토와 함께 끌어오기 요청을 검색하려면 다음 네 가지 호출이 필요합니다.
```shell
curl -v {% data variables.product.api_url_pre %}/repos/:owner/:repo/pulls/:number
curl -v {% data variables.product.api_url_pre %}/repos/:owner/:repo/pulls/:number/commits
curl -v {% data variables.product.api_url_pre %}/repos/:owner/:repo/issues/:number/comments
curl -v {% data variables.product.api_url_pre %}/repos/:owner/:repo/pulls/:number/reviews
```

**GraphQL API** 를 사용하면, 중첩된 필드를 사용하여 단일 쿼리로 데이터를 검색할 수 있습니다.

```graphql
{
  repository(owner: "octocat", name: "Hello-World") {
    pullRequest(number: 1) {
      commits(first: 10) {
        edges {
          node {
            commit {
              oid
              message
            }
          }
        }
      }
      comments(first: 10) {
        edges {
          node {
            body
            author {
              login
            }
          }
        }
      }
      reviews(first: 10) {
        edges {
          node {
            state
          }
        }
      }
    }
  }
}
```

끌어오기 요청 번호에 대한 [변수를 대체](/graphql/guides/forming-calls-with-graphql#working-with-variables)하여 이 쿼리의 성능을 확장할 수도 있습니다.

## 예제: 강력한 입력

GraphQL 스키마는 강력한 형식이므로 데이터 처리가 더 안전합니다.

GraphQL [변형](/graphql/reference/mutations)을 사용하여 이슈 또는 끌어오기 요청에 주석을 추가하고, 실수로 [`clientMutationId`](/graphql/reference/mutations#addcomment)의 값에 문자열이 아니라 정수를 지정하는 예제를 고려합니다.

```graphql
mutation {
  addComment(input:{clientMutationId: 1234, subjectId: "MDA6SXNzdWUyMjcyMDA2MTT=", body: "Looks good to me!"}) {
    clientMutationId
    commentEdge {
      node {
        body
        repository {
          id
          name
          nameWithOwner
        }
        issue {
          number
        }
      }
    }
  }
}
```

이 쿼리를 실행하면 작업에 대한 예상되는 형식을 지정하는 오류가 반환됩니다.

```json
{
  "data": null,
  "errors": [
    {
      "message": "Argument 'input' on Field 'addComment' has an invalid value. Expected type 'AddCommentInput!'.",
      "locations": [
        {
          "line": 3,
          "column": 3
        }
      ]
    },
    {
      "message": "Argument 'clientMutationId' on InputObject 'AddCommentInput' has an invalid value. Expected type 'String'.",
      "locations": [
        {
          "line": 3,
          "column": 20
        }
      ]
    }
  ]
}
```

`1234`를 따옴표로 묶으면 값이 정수에서 문자열(예상되는 형식)로 변환됩니다.

```graphql
mutation {
  addComment(input:{clientMutationId: "1234", subjectId: "MDA6SXNzdWUyMjcyMDA2MTT=", body: "Looks good to me!"}) {
    clientMutationId
    commentEdge {
      node {
        body
        repository {
          id
          name
          nameWithOwner
        }
        issue {
          number
        }
      }
    }
  }
}
```

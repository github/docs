---
title: 리소스 제한
intro: '{% data variables.product.prodname_dotcom %}GraphQL API에는 {% data variables.product.prodname_dotcom %}의 서버에 대한 과도한 또는 악의적인 호출로부터 보호하기 위한 제한 사항이 있습니다.'
redirect_from:
  - /v4/guides/resource-limitations
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
  ghae: '*'
topics:
  - API
ms.openlocfilehash: 7a0f040b86435573171c4022a72f8d558ad06c29
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/05/2022
ms.locfileid: '146381426'
---
## 노드 제한

[스키마](/graphql/guides/introduction-to-graphql#schema) 유효성 검사를 통과하려면 모든 GraphQL API [호출](/graphql/guides/forming-calls-with-graphql)이 다음 표준을 충족해야 합니다.

* 클라이언트는 모든 [연결](/graphql/guides/introduction-to-graphql#connection)에서 `first` 또는 `last` 인수를 제공해야 합니다.
* `first` 및 `last`의 값은 1~100 이내여야 합니다.
* 개별 호출은 총 500,000개를 초과하는 [노드](/graphql/guides/introduction-to-graphql#node)를 요청할 수 없습니다.

### 호출에서 노드 계산

이 두 예제에서는 호출에서 총 노드를 계산하는 방법을 보여 줍니다.

1. 단순 쿼리:

  <pre>query {
    viewer {
      repositories(first: <span class="redbox">50</span>) {
        edges {
          repository:node {
            name

            issues(first: <span class="greenbox">10</span>) {
              totalCount
              edges {
                node {
                  title
                  bodyHTML
                }
              }
            }
          }
        }
      }
    }
  }</pre>

  계산:

  <pre><span class="redbox">50</span>         = 50 repositories
   +
  <span class="redbox">50</span> x <span class="greenbox">10</span>  = 500 repository issues

              = 550 total nodes</pre>

2. 복합 쿼리:

  <pre>query {
    viewer {
      repositories(first: <span class="redbox">50</span>) {
        edges {
          repository:node {
            name

            pullRequests(first: <span class="greenbox">20</span>) {
              edges {
                pullRequest:node {
                  title

                  comments(first: <span class="bluebox">10</span>) {
                    edges {
                      comment:node {
                        bodyHTML
                      }
                    }
                  }
                }
              }
            }

            issues(first: <span class="greenbox">20</span>) {
              totalCount
              edges {
                issue:node {
                  title
                  bodyHTML

                  comments(first: <span class="bluebox">10</span>) {
                    edges {
                      comment:node {
                        bodyHTML
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }

      followers(first: <span class="bluebox">10</span>) {
        edges {
          follower:node {
            login
          }
        }
      }
    }
  }</code></pre>

  계산:

  <pre><span class="redbox">50</span>              = 50 repositories
   +
  <span class="redbox">50</span> x <span class="greenbox">20</span>       = 1,000 pullRequests
   +
  <span class="redbox">50</span> x <span class="greenbox">20</span> x <span class="bluebox">10</span> = 10,000 pullRequest comments
   +
  <span class="redbox">50</span> x <span class="greenbox">20</span>       = 1,000 issues
   +
  <span class="redbox">50</span> x <span class="greenbox">20</span> x <span class="bluebox">10</span> = 10,000 issue comments
   +
  <span class="bluebox">10</span>              = 10 followers

                   = 22,060 total nodes</pre>

## 속도 제한

GraphQL API 제한은 REST API의 [속도 제한](/rest/overview/resources-in-the-rest-api#rate-limiting)과 다릅니다.

API 속도 제한이 다른 이유는 무엇인가요? [GraphQL](/graphql)을 사용하면 하나의 GraphQL 호출이 [여러 REST 호출](/graphql/guides/migrating-from-rest-to-graphql)을 대체할 수 있습니다. 복잡한 단일 GraphQL 호출이 수천 개의 REST 요청과 동일할 수 있습니다. 단일 GraphQL 호출은 REST API 속도 제한보다 훨씬 낮지만, 쿼리에는 GitHub 서버가 계산하는 만큼만 비용이 들 수 있습니다.

쿼리의 서버 비용을 정확하게 나타내기 위해 GraphQL API는 정규화된 포인트 규모에 따라 호출의 **속도 제한 점수** 를 계산합니다. 쿼리의 점수는 부모 연결 및 해당 자식에 대한 첫 번째 및 마지막 인수를 고려합니다.

* 이 수식은 부모 연결과 자식 연결에서 `first` 및 `last` 인수를 사용하여 MySQL, ElasticSearch, Git 같은 GitHub 시스템의 잠재적 부하를 미리 계산합니다.
* 각각의 새 연결에는 자체 포인트 값이 있습니다. 포인트는 호출의 다른 포인트와 함께 전체 속도 제한 점수로 통합됩니다.

GraphQL API 속도 제한은 **시간당 5,000포인트** 입니다. 

시간당 5,000포인트는 시간당 5,000개 호출과 동일하지 않습니다. GraphQL API 및 REST API는 서로 다른 속도 제한을 사용합니다.

{% note %}

**참고**: 당사에서 개발자가 GraphQL API를 사용하는 방법을 관찰함에 따라 현재 수식 및 속도 제한이 변경될 수 있습니다.

{% endnote %}

### 호출의 속도 제한 상태 반환

REST API를 사용하면 반환된 HTTP 헤더를 [검사](/rest/overview/resources-in-the-rest-api#rate-limiting)하여 속도 제한 상태를 확인할 수 있습니다.

GraphQL API를 사용하면 `rateLimit` 개체의 필드를 쿼리하여 속도 제한 상태를 확인할 수 있습니다.

```graphql
query {
  viewer {
    login
  }
  rateLimit {
    limit
    cost
    remaining
    resetAt
  }
}
```

* `limit` 필드는 클라이언트가 60분 동안 사용할 수 있는 최대 포인트 수를 반환합니다.

* `cost` 필드는 속도 제한에 대해 계산되는 현재 호출의 포인트 비용을 반환합니다.

* `remaining` 필드는 현재 속도 제한 창에 남아 있는 포인트 수를 반환합니다.

* `resetAt` 필드는 현재 속도 제한 창이 [UTC Epoch 초](http://en.wikipedia.org/wiki/Unix_time) 단위로 다시 설정되는 시간을 반환합니다.

### 호출을 실행하기 전에 속도 제한 점수 계산

`rateLimit` 개체를 쿼리하면 호출의 점수가 반환되지만, 호출을 실행하면 제한에 대해 계산됩니다. 이 딜레마를 방지하기 위해 호출을 실행하기 전에 호출 점수를 계산할 수 있습니다. 다음 계산은 `rateLimit { cost }`에서 반환하는 비용과 거의 동일하게 작동합니다.

1. 호출에서 각각의 고유한 연결을 수행하는 데 필요한 요청 수를 추가합니다. 모든 요청이 `first` 또는 `last` 인수 제한에 도달한다고 가정합니다.
2. 숫자를 **100** 으로 나누고 결과를 반올림하여 최종 집계 비용을 가져옵니다. 이 단계는 큰 숫자를 정규화합니다.

{% note %}

**참고**: GraphQL API에 대한 호출의 최소 비용은 단일 요청을 나타내는 **1** 입니다.

{% endnote %}

다음은 쿼리 및 점수 계산 예제입니다.

```graphql
query {
  viewer {
    login
    repositories(first: 100) {
      edges {
        node {
          id

          issues(first: 50) {
            edges {
              node {
                id

                labels(first: 60) {
                  edges {
                    node {
                      id
                      name
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
```

이 쿼리를 수행하려면 5,101개의 요청이 필요합니다.

* 100개의 리포지토리를 반환하지만, API는 리포지토리 목록을 가져오기 위해 뷰어의 계정에 **한 번** 연결해야 합니다. 따라서 리포지토리에 대한 요청 = **1**
* 50개의 이슈를 반환하지만, API는 이슈 목록을 가져오기 위해 **100** 개 리포지토리 각각에 연결해야 합니다. 따라서 이슈에 대한 요청 = **100**
* 60개의 레이블을 반환하지만, API는 레이블 목록을 가져오기 위해 총 **5,000** 개의 잠재적 이슈 각각에 연결해야 합니다. 따라서 레이블에 대한 요청 = **5,000**
* 총계 = **5,101**

100으로 나누고 반올림하면 쿼리의 최종 점수인 **51** 을 얻을 수 있습니다.

---
title: GraphQL 소개
intro: GitHub GraphQL API를 사용하기 위한 유용한 용어 및 개념을 알아봅니다.
redirect_from:
  - /v4/guides/intro-to-graphql
  - /graphql/guides/intro-to-graphql
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
  ghae: '*'
topics:
  - API
ms.openlocfilehash: 459a9334f5c58d6181756117e18072f762a6e5b5
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/20/2022
ms.locfileid: '148094563'
---
## GraphQL 용어

GitHub GraphQL API는 GitHub REST API의 아키텍처 변화 및 개념적 변화를 나타냅니다. GraphQL API [참조 문서](/graphql)에서 몇 가지 새로운 용어가 눈에 띌 수 있습니다.

## 스키마

스키마는 GraphQL API의 형식 시스템을 정의합니다. 스키마는 클라이언트가 액세스할 수 있는 가능한 데이터(개체, 필드, 관계, 모든 것)의 전체 집합을 설명합니다. 클라이언트의 호출은 스키마에 대해 [유효성이 검사](https://graphql.github.io/learn/validation/)되고 [실행](https://graphql.github.io/learn/execution/)됩니다. 클라이언트는 [내적 검사](#discovering-the-graphql-api)를 통해 스키마에 대한 정보를 찾을 수 있습니다. 스키마는 GraphQL API 서버에 상주합니다. 자세한 내용은 “[GraphQL API 검색](#discovering-the-graphql-api)”을 참조하세요.

## 필드

필드는 개체로부터 검색할 수 있는 데이터 단위입니다. [공식 GraphQL 문서](https://graphql.github.io/learn/schema/)에 따르면 “GraphQL 쿼리 언어는 기본적으로 개체의 필드를 선택하는 것입니다.”

[공식 사양](https://graphql.github.io/graphql-spec/June2018/#sec-Language.Fields)은 필드에 대해서도 언급합니다.

> 모든 GraphQL 작업은 명확한 형태의 응답을 보장하기 위해 스칼라 값을 반환하는 필드까지 선택 항목을 지정해야 합니다.

즉, 스칼라가 아닌 필드를 반환하려고 하면 스키마 유효성 검사에서 오류가 발생합니다. 모든 필드가 스칼라를 반환할 때까지 중첩된 하위 필드를 추가해야 합니다.

## 인수

인수는 특정 필드에 연결된 키-값 쌍의 집합입니다. 일부 필드에는 인수가 필요합니다. [변형](/graphql/guides/forming-calls-with-graphql#about-mutations)에는 인수로서 입력 개체가 필요합니다.

## 구현

GraphQL 스키마는 _implements_ 라는 용어를 사용하여 개체가 [인터페이스](/graphql/reference/interfaces)에서 상속되는 방식을 정의할 수 있습니다.

인터페이스 `X`와 개체 `Y`를 정의하는 스키마의 인위적인 예제는 다음과 같습니다.

```
interface X {
  some_field: String!
  other_field: String!
}

type Y implements X {
  some_field: String!
  other_field: String!
  new_field: String!
}
```

즉, 개체 `Y`에는 인터페이스 `X`와 동일한 필드/인수/반환 형식이 필요하지만, 개체 `Y`에 특정한 새 필드가 추가됩니다. `!`는 필드가 필요하다는 의미입니다.

참조 문서에서 다음을 찾을 수 있습니다.

* 각 [개체](/graphql/reference/objects)는 **Implements** 아래에 자신이 상속되는 인터페이스를 나열합니다.

* 각 [인터페이스](/graphql/reference/interfaces)는 **Implementations** 아래에 자신으로부터 상속되는 개체를 나열합니다.

## 연결

연결을 사용하면 동일한 호출의 일부로 관련 개체를 쿼리할 수 있습니다. 연결을 사용하면 REST API에 대한 여러 호출을 사용해야 하는 단일 GraphQL 호출을 사용할 수 있습니다. 자세한 내용은 “[REST에서 GraphQL로 마이그레이션](/graphql/guides/migrating-from-rest-to-graphql)”을 참조하세요.

점을 선으로 연결한 그래프를 그리면 도움이 됩니다. 점은 노드이고 선은 에지입니다. 연결은 노드 간의 관계를 정의합니다.

## Microsoft Edge

에지는 노드 간의 연결을 나타냅니다. 연결을 쿼리할 때 에지를 트래버스하여 해당 노드에 도달합니다. 모든 `edges` 필드에는 `node` 필드와 `cursor` 필드가 있습니다. 커서는 [페이지 매김](https://graphql.github.io/learn/pagination/)에 사용됩니다.

## 노드

_노드_ 는 개체에 대한 일반 용어입니다. 노드를 직접 조회하거나 연결을 통해 관련 노드에 액세스할 수 있습니다. [스칼라](/graphql/reference/scalars)를 반환하지 않는 `node`를 지정하는 경우 모든 필드가 스칼라를 반환할 때까지 하위 필드를 포함해야 합니다. REST API를 통해 노드 ID에 액세스하고 GraphQL 쿼리에서 노드 ID를 사용하는 방법에 대한 자세한 내용은 “[전역 노드 ID 사용](/graphql/guides/using-global-node-ids)”을 참조하세요.

## GraphQL API 검색

GraphQL은 [내적](https://graphql.github.io/learn/introspection/)(introspective)입니다. 즉, 자체에 대한 세부 정보에 대해 GraphQL 스키마를 쿼리할 수 있습니다.

* 스키마에 정의된 모든 형식을 나열하고 각각에 대한 세부 정보를 가져오려면 `__schema`를 쿼리합니다.

  ```graphql
  query {
    __schema {
      types {
        name
        kind
        description
        fields {
          name
        }
      }
    }
  }
  ```

* 특정 형식에 대한 세부 정보를 가져오려면 `__type`을 쿼리합니다.

  ```graphql
  query {
    __type(name: "Repository") {
      name
      kind
      description
      fields {
        name
      }
    }
  }
  ```

* `GET` 요청을 통해 스키마의 _내적 검사 쿼리_ 를 실행할 수도 있습니다.

  ```shell
  $ curl -H "Authorization: bearer TOKEN" {% data variables.product.graphql_url_pre %}
  ```
  
  {% note %}

  **참고**: `"message": "Bad credentials"` 또는 `401 Unauthorized` 응답을 받는 경우 유효한 토큰을 사용하고 있는지 확인하세요. GraphQL API는 {% 데이터 variables.product.pat_v1 %}을(를) 사용하는 인증만 지원합니다. 자세한 내용은 "[%}variables.product.pat_generic {% 데이터 만들기](/github/authenticating-to-github/creating-a-personal-access-token)"를 참조하세요. 

  {% endnote %}
  
  결과는 JSON이므로 쉽게 읽고 검색할 수 있도록 출력하는 것이 좋습니다. [jq](https://stedolan.github.io/jq/)와 같은 명령줄 도구를 사용하거나 이 목적을 위해 결과를 `python -m json.tool`에 파이프할 수 있습니다.
  
  또는 `idl` 미디어 형식을 전달하여 스키마의 압축된 버전인 IDL 형식으로 결과를 반환할 수 있습니다.

  ```shell
  $ curl -H "Authorization: bearer TOKEN" -H "Accept: application/vnd.github.v4.idl" \
  {% data variables.product.graphql_url_pre %}
  ```

  {% note %}

  **참고**: 내적 검사 쿼리는 아마도 GraphQL에서 실행할 유일한 `GET` 요청일 것입니다. 본문을 전달하는 경우 GraphQL 요청 메서드는 쿼리든 변형이든 상관없이 `POST`입니다.

  {% endnote %}

  쿼리 수행에 대한 자세한 내용은 “[GraphQL을 사용하여 호출 형성](/graphql/guides/forming-calls-with-graphql)”을 참조하세요.

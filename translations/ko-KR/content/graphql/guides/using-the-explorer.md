---
title: Explorer 사용
intro: '문서, 구문 강조 표시, 유효성 검사 오류가 포함된 브라우저의 통합 개발 환경인 GraphQL Explorer를 사용하여 실제 {% data variables.product.prodname_dotcom %} 데이터에 대한 쿼리를 실행할 수 있습니다.'
redirect_from:
  - /v4/guides/using-the-explorer
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
  ghae: '*'
topics:
  - API
ms.openlocfilehash: 19c534dd0cdcacdfd0d96bb93d055ff3fca8690b
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/05/2022
ms.locfileid: '146749491'
---
## GraphQL Explorer 정보

{% ifversion fpt or ghec %}

[GraphQL Explorer](/graphql/overview/explorer)는 [GraphiQL](https://github.com/graphql/graphiql)의 인스턴스, 즉 “그래픽 대화형 브라우저 내 GraphQL IDE”입니다.

{% else %}

이 설명서에서 GraphQL Explorer라고도 하는 [GraphiQL](https://github.com/graphql/graphiql)은 “그래픽 대화형 브라우저 내 GraphQL IDE”입니다.

{% endif %}

## GraphiQL 사용

GraphiQL 앱을 사용하려면 https://github.com/skevy/graphiql-app 에서 다운로드하여 설치합니다.

### GraphiQL 구성

1. [OAuth 토큰](/graphql/guides/forming-calls-with-graphql#authenticating-with-graphql)을 가져옵니다.
1. GraphiQL을 시작합니다.
1. GraphiQL의 오른쪽 위 모서리에서 **HTTP 헤더 편집** 을 클릭합니다.
1. **키** 필드에 `Authorization`를 입력합니다. **값** 필드에 `Bearer <token>`을 입력합니다, 여기서 `<token>`은 생성된 OAuth 토큰입니다.
![graphiql 헤더](/assets/images/developer/graphiql-headers.png)
1. 토큰의 오른쪽에 있는 확인 표시를 클릭하여 저장합니다.
1. 편집기로 돌아가려면 **HTTP 헤더 편집** 모달의 바깥쪽을 클릭합니다.
1. **GraphQL 엔드포인트** 필드에 `{% data variables.product.graphql_url_pre %}`을 입력합니다.
1. **메서드** 드롭다운 메뉴에서 **POST** 를 선택합니다.

{% note %}

**참고**: `POST`가 메서드인 이유에 대한 자세한 내용은 “[GraphQL과 통신](/graphql/guides/forming-calls-with-graphql#communicating-with-graphql)”을 참조하세요.

{% endnote %}

직접 쿼리하여 액세스를 테스트할 수 있습니다.

```graphql
query {
  viewer {
    login
  }
}
```

모든 것이 올바르게 작동하면 로그인이 표시됩니다. 쿼리 만들기를 시작할 준비가 완료되었습니다.

## 사이드바 문서에 액세스

GraphQL 스키마의 모든 형식에는 문서로 컴파일된 `description` 필드가 포함됩니다. Explorer 페이지의 오른쪽에 있는 축소 가능한 **문서** 창을 사용하면 형식 시스템에 대한 설명서를 찾아볼 수 있습니다. 문서는 자동으로 업데이트되며 사용되지 않는 필드를 삭제합니다.

{% note %}

**문서** 사이드바에는 “[참조](/graphql)” 아래의 스키마에서 자동으로 생성되는 동일한 콘텐츠가 포함되어 있지만 형식은 위치마다 다릅니다.

{% endnote %}

## 변수 창 사용

일부 예제 호출에는 다음과 같이 작성된 [변수](/graphql/guides/forming-calls-with-graphql#working-with-variables)가 포함됩니다.

```graphql
query($number_of_repos:Int!){
  viewer {
    name
     repositories(last: $number_of_repos) {
       nodes {
         name
       }
     }
   }
}
variables {
   "number_of_repos": 3
}
```

이것은 cURL `POST`를 통해 호출을 제출하는 올바른 형식입니다([줄 바꿈을 이스케이프](/graphql/guides/forming-calls-with-graphql#communicating-with-graphql)하는 한).

Explorer에서 호출을 실행하려면 기본 창에 `query` 세그먼트를 입력하고 그 아래에 있는 **쿼리 변수** 창에 변수를 입력합니다. Explorer에서 단어 `variables`를 생략합니다.

```graphql
{
   "number_of_repos": 3
}
```

## 지원 요청

{% data reusables.support.help_resources %}

## 문제 해결 오류

GraphQL은 [내적](/graphql/guides/introduction-to-graphql#discovering-the-graphql-api)이므로 Explorer는 다음을 지원합니다.

* 현재 스키마를 인식하는 지능형 자동 완성
* 입력할 때 유효성 검사 오류 미리 보기

형식이 올바르지 않거나 [스키마 유효성 검사](/graphql/guides/introduction-to-graphql#schema)를 통과하지 않은 쿼리를 입력하면 팝업에서 오류를 경고합니다. 쿼리를 실행하면 응답 창에서 오류가 반환됩니다.

GraphQL 응답에는 `data` 해시 및 `errors` 배열과 같은 여러 키가 포함됩니다.

```json
{
  "data": null,
  "errors": [
    {
      "message": "Objects must have selections (field 'nodes' returns Repository but has no selections)",
      "locations": [
        {
          "line": 5,
          "column": 8
        }
      ]
    }
  ]
}
```

스키마와 관련이 없는 예기치 않은 오류가 발생할 수 있습니다. 이 경우 메시지에는 이슈를 보고할 때 사용할 수 있는 참조 코드가 포함됩니다.

```json
{
  "data": null,
  "errors": [
    {
      "message": "Something went wrong while executing your query. This is most likely a GitHub bug. Please include \"7571:3FF6:552G94B:69F45B7:5913BBEQ\" when reporting this issue."
    }
  ]
}
```

{% note %}

**참고:** {% data variables.product.prodname_dotcom %}에서는 프로덕션 환경에서 데이터를 사용하기 전에 오류를 확인할 것을 권장합니다. GraphQL에서 실패는 전체가 아닙니다. GraphQL 쿼리의 일부는 성공하고 나머지는 실패할 수 있습니다.

{% endnote %}

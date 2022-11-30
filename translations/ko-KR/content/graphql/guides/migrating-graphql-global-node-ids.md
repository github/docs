---
title: GraphQL 전역 노드 ID 마이그레이션
intro: 두 개의 전역 노드 ID 형식과 레거시 형식에서 새 형식으로 마이그레이션하는 방법에 대해 알아봅니다.
versions:
  fpt: '*'
  ghec: '*'
topics:
  - API
shortTitle: Migrating global node IDs
ms.openlocfilehash: 7d62d81e52b848e4fb8b5f6b2bae9997e0ac1209
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/09/2022
ms.locfileid: '147717855'
---
## 배경

{% data variables.product.product_name %} GraphQL API는 현재 두 가지 유형의 전역 노드 ID 형식을 지원합니다. 레거시 형식은 더 이상 사용되지 않으며 새 형식으로 대체됩니다.  이 가이드에서는 필요한 경우 새 형식으로 마이그레이션하는 방법을 보여 줍니다. 

새 형식으로 마이그레이션하면 요청의 응답 시간을 일관성 있고 짧게 유지할 수 있습니다. 또한 레거시 ID가 완전히 사용되지 않게 되었을 때 애플리케이션이 계속 작동하도록 보장할 수 있습니다.

레거시 전역 노드 ID 형식을 더 이상 사용하지 않게 되는 이유에 대한 자세한 내용은 “[GraphQL에 새로운 전역 ID 형식 제공](https://github.blog/2021-02-10-new-global-id-format-coming-to-graphql)”을 참조하세요.

## 조치를 취해야 하는지 확인

GraphQL 전역 노드 ID에 대한 참조를 저장하는 경우에만 마이그레이션 단계를 수행해야 합니다.  이러한 ID는 스키마에 있는 개체에 대한 `id` 필드에 대응합니다.  전역 노드 ID를 저장하지 않으면 변경 없이 API와 계속 상호 작용할 수 있습니다.

또한 현재 레거시 ID를 디코딩하여 형식 정보를 추출하는 경우(예: 개체가 끌어오기 요청인지 확인하는 데 `PR_kwDOAHz1OX4uYAah`의 처음 두 문자를 사용하는 경우) ID의 형식이 변경되었으므로 서비스가 중단됩니다.  이러한 ID를 불투명 문자열로 처리하도록 서비스를 마이그레이션해야 합니다.  이러한 ID는 고유하므로 참조로서 직접 사용할 수 있습니다.


## 새 전역 ID로 마이그레이션

새 ID 형식으로의 마이그레이션을 용이하게 하려면 GraphQL API 요청에서 `X-Github-Next-Global-ID` 헤더를 사용할 수 있습니다. `X-Github-Next-Global-ID` 헤더의 값은 `1` 또는 `0`으로 설정해야 합니다.  값을 `1`로 설정하면 응답 페이로드가 `id` 필드를 요청한 개체에 대해 항상 새 ID 형식을 사용하도록 강제 적용됩니다.  값을 `0`으로 설정하면 개체 생성 날짜에 따라 레거시 ID 또는 새 ID를 표시하는 기본 동작으로 되돌아갑니다. 

cURL을 사용하는 예제 요청은 다음과 같습니다.

```
$ curl \
  -H "Authorization: Bearer $GITHUB_TOKEN" \
  -H "X-Github-Next-Global-ID: 1" \
  https://api.github.com/graphql \
  -d '{ "query": "{ node(id: \"MDQ6VXNlcjM0MDczMDM=\") { id } }" }'
```

쿼리에는 레거시 ID `MDQ6VXNlcjM0MDczMDM=`가 사용되었지만 응답에는 새 ID 형식이 포함됩니다.
```
{"data":{"node":{"id":"U_kgDOADP9xw"}}}
```
`X-Github-Next-Global-ID` 헤더를 사용하면 애플리케이션에서 참조하는 레거시 ID에 대한 새 ID 형식을 찾을 수 있습니다. 그런 다음 응답에서 받은 ID로 해당 참조를 업데이트할 수 있습니다. 레거시 ID에 대한 모든 참조를 업데이트하고 API에 대한 후속 요청에 대해 새 ID 형식을 사용해야 합니다. 대량 작업을 수행하려면 별칭을 사용하여 하나의 API 호출에서 여러 노드 쿼리를 제출할 수 있습니다. 자세한 내용은 “[GraphQL 문서](https://graphql.org/learn/queries/#aliases)”를 참조하세요.

항목의 컬렉션에 대해 새 ID를 얻을 수도 있습니다. 예를 들어 조직의 마지막 10개 리포지토리에 대한 새 ID를 얻으려면 다음과 같은 쿼리를 사용할 수 있습니다.
```
{
  organization(login: "github") {
    repositories(last: 10) {
      edges {
        cursor
        node {
          name
          id
        }
      }
    }
  }
}
```

`X-Github-Next-Global-ID`를 `1`로 설정하면 쿼리에 있는 모든 `id` 필드의 반환 값에 영향을 줍니다.  즉, `node`가 아닌 쿼리를 제출하는 경우에도 `id` 필드를 요청하면 새 형식 ID를 얻게 됩니다.

## 피드백 공유

앱에 영향을 주는 이 변경 사항의 출시에 대해 우려 사항이 있는 경우 [{% data variables.product.product_name %}에 문의](https://support.github.com/contact)하고 앱 이름과 같은 정보를 포함하면 더 나은 지원을 받을 수 있습니다.

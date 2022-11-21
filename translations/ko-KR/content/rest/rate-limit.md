---
title: 속도 제한
intro: 속도 제한 API를 사용하면 다양한 REST API의 현재 속도 제한 상태를 확인할 수 있습니다.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
redirect_from:
  - /rest/reference/rate-limit
ms.openlocfilehash: 282b7e7bbb947256ccad4950b6a17d8874044d8f
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147081050'
---
## 속도 제한 API 정보

REST API 개요 설명서에서는 [속도 제한 규칙](/rest/overview/resources-in-the-rest-api#rate-limiting)에 대해 설명합니다. 아래에 설명된 속도 제한 API를 사용하여 언제든지 현재 속도 제한 상태를 확인할 수 있습니다.

### 속도 제한 상태 이해

Search API에는 REST API의 나머지 부분을 제어하는 속도 제한과는 별도로 [사용자 지정 속도 제한](/rest/reference/search#rate-limit)이 있습니다. 또한 GraphQL API에는 REST API의 속도 제한과는 별도이며 다른 방식으로 계산되는 [사용자 지정 속도 제한](/graphql/overview/resource-limitations#rate-limit)이 있습니다.

이러한 이유로 속도 제한 API 응답은 속도 제한을 분류합니다. `resources` 아래에 다음 네 개의 개체가 표시됩니다.

* `core` 개체는 REST API에서 검색과 관련되지 않은 모든 리소스에 대한 속도 제한 상태를 알려줍니다.

* `search` 개체는 [Search API](/rest/reference/search)에 대한 속도 제한 상태를 알려줍니다.

* `graphql` 개체는 [GraphQL API](/graphql)에 대한 속도 제한 상태를 알려줍니다.

* `integration_manifest` 개체는 [GitHub 앱 매니페스트 코드 변환](/apps/building-github-apps/creating-github-apps-from-a-manifest/#3-you-exchange-the-temporary-code-to-retrieve-the-app-configuration) 엔드포인트에 대한 속도 제한 상태를 알려줍니다.

속도 제한 응답의 헤더 및 값에 대한 자세한 내용은 “[REST API의 리소스](/rest/overview/resources-in-the-rest-api#rate-limit-http-headers)”를 참조하세요.

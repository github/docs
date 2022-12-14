---
title: 속도 제한
intro: REST API를 사용하여 현재 속도 제한 상태를 확인합니다.
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
ms.openlocfilehash: a609d339af2201bba5ec12044a8eebe733013cea
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 12/09/2022
ms.locfileid: '148193414'
---
## 속도 제한 정보

언제든지 현재 속도 제한 상태를 확인할 수 있습니다. 속도 제한 규칙에 대한 자세한 내용은 "[REST API의 리소스"를](/rest/overview/resources-in-the-rest-api#rate-limiting) 참조하세요. 

항목을 검색하기 위한 REST API에는 다른 REST API 엔드포인트를 제어하는 속도 제한과는 별개인 사용자 지정 속도 제한이 있습니다. 자세한 내용은 "검색"을 참조[하세요](/rest/search). 또한 GraphQL API에는 REST API의 속도 제한과는 별도이며 다른 방식으로 계산되는 사용자 지정 속도 제한이 있습니다. 자세한 내용은 "[리소스 제한 사항"을 참조하세요.](/graphql/overview/resource-limitations#rate-limit) 이러한 이유로 API 응답은 속도 제한을 분류합니다. 아래에 `resources`다른 범주와 관련된 개체가 표시됩니다.

* `core` 개체는 REST API에서 검색과 관련되지 않은 모든 리소스에 대한 속도 제한 상태를 알려줍니다.

* 개체는 `search` 검색을 위해 REST API에 대한 속도 제한 상태를 제공합니다.

* 개체는 `graphql` GraphQL API에 대한 속도 제한 상태를 제공합니다.

* 개체는 `integration_manifest` 작업에 대한 `POST /app-manifests/{code}/conversions` 속도 제한 상태를 제공합니다. 자세한 내용은 "[매니페스트에서 GitHub 앱 만들기"를 참조하세요](/apps/building-github-apps/creating-github-apps-from-a-manifest/#3-you-exchange-the-temporary-code-to-retrieve-the-app-configuration).

속도 제한 응답의 헤더 및 값에 대한 자세한 내용은 “[REST API의 리소스](/rest/overview/resources-in-the-rest-api#rate-limit-http-headers)”를 참조하세요.

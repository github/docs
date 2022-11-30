---
title: OpenAPI 설명
intro: '{% data variables.product.product_name %} REST API는 OpenAPI 3.0 규격 문서에 완전히 설명되어 있습니다.'
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - API
ms.openlocfilehash: 84c81c856da1da67320463fba4b9b52bca88c844
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145125044'
---
## OpenAPI 설명 정보

[OpenAPI](https://swagger.io/docs/specification/about/)는 REST API를 설명하기 위한 표준 사양입니다. OpenAPI 설명을 사용하면 사용자와 머신이 먼저 설명서를 읽거나 구현을 이해할 필요 없이 API의 기능을 검색할 수 있습니다. {% data variables.product.company_short %}는 REST API를 OpenAPI 3.0 규격 문서로 공개적으로 사용할 수 있게 되었습니다.

## {% data variables.product.company_short %} OpenAPI 설명 가져오기

오픈 소스 [REST API OpenAPI 설명](https://github.com/github/rest-api-description) 리포지토리에서 설명을 찾을 수 있습니다.

설명은 두 가지 형식으로 제공합니다. 번들 버전은 재사용 및 가독성을 위해 OpenAPI 구성 요소를 포함하므로 대부분의 경우에 작동합니다. 도구가 구성 요소에 대한 인라인 참조를 지원하지 않는 경우 완전히 역참조된 버전도 제공합니다.

## {% data variables.product.company_short %} OpenAPI 설명 사용

OpenAPI 설명에는 많은 용도가 있습니다. 예를 들어 다음과 같이 할 수 있습니다.

* 사용자 고유의 API 클라이언트를 생성합니다.
* {% data variables.product.company_short %} REST API 통합의 유효성을 검사하고 테스트합니다.
* Insomnia 또는 Postman과 같은 타사 도구를 사용하여 {% data variables.product.product_name %} REST API를 탐색하고 상호 작용합니다.

예를 들어 {% data variables.product.company_short %}는 REST OpenAPI 설명을 사용하여 {% data variables.product.product_name %} [REST API 참조 설명서](/rest)를 생성합니다.

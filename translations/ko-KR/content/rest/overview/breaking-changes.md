---
title: 호환성이 손상되는 변경
shortTitle: Breaking changes
intro: 각 REST API 버전에 도입된 호환성이 손상되는 변경에 대해 알아봅니다.
versions:
  feature: api-date-versioning
ms.openlocfilehash: 674345b82c5da9b0804fe4a0f62450ff4fbbc3e9
ms.sourcegitcommit: d2f0b59ed096b9e68ef8f6fa019cd925165762ec
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 11/29/2022
ms.locfileid: '148184407'
---
## REST API의 호환성이 손상되는 변경 정보

{% data reusables.rest-api.about-api-version %}

API 버전에 대한 자세한 내용은 "[API 버전"을 참조하세요](/rest/overview/api-versions).

## 새 API 버전으로 업그레이드

새 REST API 버전으로 업그레이드하기 전에 새 API 버전에 해당하는 이 페이지의 섹션을 읽고 포함된 호환성이 손상되는 변경 내용을 이해하고 해당 API 버전으로 업그레이드하는 방법에 대해 자세히 알아보세요.

헤더에서 `X-GitHub-Api-Version` 새 API 버전을 지정하도록 통합을 업데이트하는 경우 통합이 새 API 버전과 함께 작동하려면 필요한 변경도 수행해야 합니다.

통합이 업데이트되면 통합을 테스트하여 새 API 버전에서 작동하는지 확인합니다.

## {{ initialRestVersioningReleaseDate }}에 대한 주요 변경 내용

버전은 `{{ initialRestVersioningReleaseDate }}` 날짜 기반 버전 관리가 도입된 후 {% data variables.product.product_name %} REST API의 첫 번째 버전입니다. 이 버전에는 호환성이 손상되는 변경 내용이 포함되어 있지 않습니다.

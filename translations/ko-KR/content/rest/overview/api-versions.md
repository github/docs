---
title: API 버전
shortTitle: API Versions
intro: REST API를 요청할 때마다 사용할 REST API 버전을 지정해야 합니다.
versions:
  feature: api-date-versioning
ms.openlocfilehash: 6689d8c342930a44c7d243c3872cdc431007eb1c
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 12/09/2022
ms.locfileid: '148192867'
---
## API 버전 관리 정보

{% data reusables.rest-api.about-api-versions %}

{% ifversion ghes %}

## {% data variables.product.prodname_ghe_server %} 버전 관리 및 REST API 버전 관리 정보

{% data variables.product.prodname_ghe_server %} 버전은 REST API 버전에서 분리됩니다. API 버전이 {% data variables.product.prodname_ghe_server %} 버전에 포함되어 있는 한 {% data variables.product.prodname_ghe_server %} 버전을 업그레이드할 수 있지만 동일한 REST API 버전을 유지할 수 있습니다. 마찬가지로 선택한 새 REST API 버전을 {% data variables.product.prodname_ghe_server %} 버전에 사용할 수 있는 한 {% data variables.product.prodname_ghe_server %} 버전을 업데이트하지 않고 REST API 버전을 업그레이드할 수 있습니다.

{% data variables.product.prodname_ghe_server %} 릴리스 정보에는 REST API 버전이 더 이상 지원되지 않는 경우 표시됩니다. 자세한 내용은 "[릴리스 정보](/admin/release-notes)"를 참조하세요.

{% endif %}

## API 버전 지정

헤더를 `X-GitHub-Api-Version` 사용하여 API 버전을 지정해야 합니다. 예를 들면 다음과 같습니다.

```shell
$ curl {% data reusables.rest-api.version-header %} https://api.github.com/zen
```

헤더가 없는 요청은 `X-GitHub-Api-Version` 기본적으로 버전을 사용합니다 `{{ initialRestVersioningReleaseDate }}` .

더 이상 지원되지 않는 API 버전을 지정하면 오류가 발생합니다 `400` .

## 새 API 버전으로 업그레이드

새 REST API 버전으로 업그레이드하기 전에 새 API 버전에 대한 호환성이 손상되는 변경 내용의 변경 로그를 읽고 포함된 주요 변경 내용을 이해하고 해당 특정 API 버전으로 업그레이드하는 방법에 대해 자세히 알아보세요. 자세한 내용은 "[호환성이 손상되는 변경"을 참조하세요](/rest/overview/breaking-changes).

헤더에서 `X-GitHub-Api-Version` 새 API 버전을 지정하도록 통합을 업데이트하는 경우 통합이 새 API 버전과 함께 작동하도록 하는 데 필요한 변경도 수행해야 합니다.

통합이 업데이트되면 통합을 테스트하여 새 API 버전에서 작동하는지 확인합니다.

## 지원되는 API 버전

현재 지원되는 REST API 버전은 다음과 같습니다.

{% for apiVersion in allVersions[currentVersion].apiVersions %} {{ apiVersion }} {% endfor %}

API 요청을 만들어 지원되는 모든 API 버전을 가져올 수도 있습니다. 자세한 내용은 "[모든 API 버전 가져오기](/rest/meta#get-all-api-versions)"를 참조하세요.

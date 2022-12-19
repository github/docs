---
title: 리포지토리 캐싱 정보
intro: 리포지토리 캐싱을 사용하여 분산된 팀 및 CI 팜에 대한 Git 읽기 작업의 성능을 높일 수 있습니다.
versions:
  ghes: '*'
type: overview
topics:
  - Enterprise
ms.openlocfilehash: e32df9becd6142f581d45784e4758cf19a8d1af0
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148108858'
---
{% data reusables.enterprise.repository-caching-release-phase %}

전 세계에 팀과 CI 팜이 있는 경우 기본 {% data variables.product.prodname_ghe_server %} 인스턴스에서 성능이 저하될 수 있습니다. 활성 지역 복제는 읽기 요청의 성능을 향상할 수 있지만 쓰기 처리량이 제한될 수 있습니다. 기본 인스턴스의 부하를 줄이고 쓰기 처리량 성능을 향상하기 위해 지리적으로 분산된 클라이언트 근처에 있는 리포지토리의 비동기 읽기 전용 미러인 리포지토리 캐시를 구성할 수 있습니다. 

리포지토리 캐시를 사용하면 CI 팜 및 분산 팀에 가까운 리포지토리 데이터를 제공함으로써, {% data variables.product.product_name %}에서 여러 클라이언트에 서비스를 제공하기 위해 장거리 네트워크 연결을 통해 동일한 Git 데이터를 여러 번 전송할 필요가 없습니다. 예를 들어 기본 인스턴스가 북아메리카 있고 아시아에도 큰 인스턴스가 있는 경우 아시아에 CI 실행기에서 사용할 리포지토리 캐시를 설정하는 것이 도움이 됩니다.

리포지토리 캐시는 단일 인스턴스든 지역에서 복제된 인스턴스 집합이든 상관없이 Git 데이터 변경 내용에 대해 기본 인스턴스를 수신 대기합니다. CI 팜 및 기타 읽기 작업이 많은 소비자는 기본 인스턴스 대신 리포지토리 캐시에서 복제하고 가져옵니다. 변경 내용은 클라이언트당 한 번이 아닌 캐시 인스턴스당 한 번씩 주기적인 간격으로 네트워크를 통해 전파됩니다. Git 데이터는 일반적으로 데이터가 기본 인스턴스로 푸시된 후 몇 분 내에 리포지토리 캐시에 표시됩니다.  {% ifversion ghes > 3.3 %} [`cache_sync` 웹후크](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#cache_sync)는 CI 시스템에서 캐시에서 사용할 수 있는 데이터에 대응하는 데 사용할 수 있습니다.{% endif %}

리포지토리 캐시에 동기화할 수 있는 리포지토리를 세밀하게 제어할 수 있습니다. Git 데이터는 지정한 위치에만 복제됩니다.

{% data reusables.enterprise.repository-caching-config-summary %} 자세한 내용은 “[리포지토리 캐시 구성](/admin/enterprise-management/caching-repositories/configuring-a-repository-cache)”을 참조하세요.

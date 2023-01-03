---
ms.openlocfilehash: a692ea55fd8c3d849c3058d9bab155341b701ef3
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/20/2022
ms.locfileid: "148097890"
---
- [최소 요구 사항](#minimum-requirements)
- [스토리지](#storage)
- [CPU 및 메모리](#cpu-and-memory)

### 최소 요구 사항

{% 데이터 variables.location.product_location %}에 대한 사용자 라이선스 수에 따라 다른 하드웨어 구성을 사용하는 것이 좋습니다. 최소 요구 사항보다 더 많은 리소스를 프로비저닝하면 인스턴스의 성능과 스케일링이 향상됩니다.

{% data reusables.enterprise_installation.hardware-rec-table %}

{% data reusables.actions.more-resources-for-ghes %}

{% data reusables.enterprise_installation.about-adjusting-resources %}

### Storage

IOPS(초당 입출력 작업 수)가 높고 {% data variables.product.prodname_ghe_server %}의 대기 시간이 짧은 고성능 SSD를 사용하는 것이 좋습니다. 워크로드는 I/O 집약적입니다. 운영 체제 미설치 하이퍼바이저를 사용하는 경우 디스크를 직접 연결하거나 SAN(스토리지 영역 네트워크)의 디스크를 사용하는 것이 좋습니다.

인스턴스에는 루트 디스크와 별도로 영구 데이터 디스크가 필요합니다. 자세한 내용은 [시스템 개요](/enterprise/admin/guides/installation/system-overview)를 참조하세요.

{% ifversion ghes %}

{% data variables.product.prodname_actions %}을 구성하려면 외부 BLOB 스토리지를 제공해야 합니다. 자세한 내용은 “[{% data variables.product.prodname_ghe_server %}에서 {% data variables.product.prodname_actions %} 시작](/admin/github-actions/getting-started-with-github-actions-for-github-enterprise-server##external-storage-requirements)”을 참조하세요.

{% endif %}

루트 파일 시스템의 사용 가능한 공간은 전체 디스크 크기의 50%입니다. 새 인스턴스를 빌드하거나 기존 인스턴스를 사용하여 인스턴스의 루트 디스크 크기를 조정할 수 있습니다. 자세한 내용은 “[시스템 개요](/enterprise/admin/guides/installation/system-overview#storage-architecture)” 및 “[스토리지 용량 증가](/enterprise/admin/guides/installation/increasing-storage-capacity)”를 참조하세요.

### CPU 및 메모리

{% data variables.product.prodname_ghe_server %}에 필요한 CPU 및 메모리 리소스는 사용자, 자동화 및 통합에 대한 활동 수준에 따라 달라집니다.

{% ifversion ghes %}

{% data variables.product.prodname_ghe_server %} 인스턴스의 사용자에 대해 {% data variables.product.prodname_actions %}를 사용하도록 설정하려는 경우 인스턴스에 대한 추가 CPU 및 메모리 리소스를 프로비저닝해야 할 수 있습니다. 자세한 내용은 “[{% data variables.product.prodname_ghe_server %}에서 {% data variables.product.prodname_actions %} 시작](/admin/github-actions/getting-started-with-github-actions-for-github-enterprise-server#review-hardware-considerations)”을 참조하세요.

{% endif %}

{% data reusables.enterprise_installation.increasing-cpus-req %}

{% warning %}

**경고:** 사용자가 외부 시스템에 {% data variables.product.prodname_ghe_server %}에 대한 활동을 알리도록 웹후크 이벤트를 구성하는 것이 좋습니다. 변경 또는 _폴링_ 에 대한 자동화된 검사는 인스턴스의 성능 및 스케일링 성능에 부정적인 영향을 줍니다. 자세한 내용은 [웹후크 정보](/github/extending-github/about-webhooks)참조하세요.

{% endwarning %}

{% data variables.product.prodname_ghe_server %}의 용량 및 성능을 모니터링하는 방법에 대한 자세한 내용은 “[어플라이언스 모니터링](/admin/enterprise-management/monitoring-your-appliance)”을 참조하세요.

인스턴스의 CPU 또는 메모리 리소스를 늘릴 수 있습니다. 자세한 내용은 “[CPU 또는 메모리 리소스 증가](/enterprise/admin/installation/increasing-cpu-or-memory-resources)”를 참조하세요.

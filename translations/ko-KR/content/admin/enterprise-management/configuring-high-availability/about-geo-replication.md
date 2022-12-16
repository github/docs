---
title: 지역 복제 정보
intro: '{% data variables.product.prodname_ghe_server %}의 지역 복제는 여러 활성 복제본을 사용하여 지리적으로 분산된 데이터 센터의 요청을 처리합니다.'
redirect_from:
  - /enterprise/admin/installation/about-geo-replication
  - /enterprise/admin/enterprise-management/about-geo-replication
  - /admin/enterprise-management/about-geo-replication
versions:
  ghes: '*'
type: overview
topics:
  - Enterprise
  - High availability
ms.openlocfilehash: d24b222ee411d6e8d06366dd78da6b0001280c4d
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148109005'
---
활성 복제본이 여러 개이면 가장 가까운 복제본까지 거리가 더 짧아질 수 있습니다. 예를 들어 샌프란시스코, 뉴욕 및 런던에 지사가 있는 조직은 뉴욕 근처의 데이터 센터에서 기본 어플라이언스를 실행하고 샌프란시스코와 런던 근처의 데이터 센터에서 두 개의 복제본을 실행할 수 있습니다. 지리적 위치 인식 DNS를 사용하여 사용자는 사용 가능한 가장 가까운 서버에 연결하고 리포지토리 데이터에 더 빠르게 액세스할 수 있습니다. 런던까지의 대기 시간이 더 긴 샌프란시스코 근처의 어플라이언스를 기본으로 지정하는 것에 비해 뉴욕 근처의 어플라이언스를 기본으로 지정하면 호스트 간의 대기 시간을 줄이는 데 도움이 됩니다.

활성 복제본 프록시는 기본 인스턴스로 자체적으로 처리할 수 없도록 요청합니다. 복제본은 모든 SSL 연결을 종료하는 현재 상태 지점으로 작동합니다. 호스트 간의 트래픽은 지역 복제 없이 2개 노드 고가용성 구성과 유사하게 암호화된 VPN 연결을 통해 전송됩니다.

Git 요청 및 특정 파일 서버 요청(예: LFS 및 파일 업로드)은 기본에서 데이터를 로드하지 않고 복제본에서 직접 처리할 수 있습니다. 웹 요청은 항상 기본으로 라우팅되지만, 복제본이 사용자에게 더 가까이 있으면 SSL 종료가 가까워서 요청이 더 빠르게 처리됩니다.

지역 복제가 원활하게 작동하려면 [Amazon의 Route 53 서비스](http://docs.aws.amazon.com/Route53/latest/DeveloperGuide/routing-policy.html#routing-policy-geo)와 같은 지리적 DNS가 필요합니다. 인스턴스의 호스트 이름은 사용자의 위치와 가장 가까운 복제본으로 확인되어야 합니다.

## 제한 사항

복제본으로 요청을 쓰려면 기본 및 모든 복제본으로 데이터를 보내야 합니다. 즉, 새 지역 복제본은 기본이 아닌 기존 공동 배치 지역 복제본에서 대다수의 데이터를 시드할 수 있지만 모든 쓰기 성능은 가장 느린 복제본에 의해 제한됩니다. 쓰기 처리량에 영향을 주지 않고 분산 팀 및 대규모 CI 팜으로 인한 대기 시간 및 대역폭을 줄이기 위해 대신 리포지토리 캐싱을 구성할 수 있습니다. 자세한 내용은 “[리포지토리 캐싱 정보](/admin/enterprise-management/caching-repositories/about-repository-caching)”를 참조하세요.

지역 복제는 {% data variables.product.prodname_ghe_server %} 인스턴스에 용량을 추가하거나 CPU 또는 메모리 리소스 부족과 관련된 성능 문제를 해결하지 않습니다. 기본 어플라이언스가 오프라인 상태이면 활성 복제본이 읽기 또는 쓰기 요청을 처리할 수 없습니다. 

{% data reusables.enterprise_installation.replica-limit %}

## 지역 복제 구성 모니터링

{% data reusables.enterprise_installation.monitoring-replicas %}

## 추가 참고 자료
- “[지역 복제 복제본 만들기](/enterprise/admin/guides/installation/creating-a-high-availability-replica/#creating-geo-replication-replicas)”

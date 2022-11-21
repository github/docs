---
title: 클러스터링과 HA(고가용성) 간 차이점
intro: '{% data variables.product.prodname_ghe_server %} HA(고가용성 구성)는 중복성을 제공하는 기본/보조 장애 조치 구성이며 클러스터링에서는 읽기 및 쓰기 부하를 여러 노드에 분산하여 중복성과 확장성을 제공합니다.'
redirect_from:
  - /enterprise/admin/clustering/differences-between-clustering-and-high-availability-ha
  - /enterprise/admin/enterprise-management/differences-between-clustering-and-high-availability-ha
  - /admin/enterprise-management/differences-between-clustering-and-high-availability-ha
versions:
  ghes: '*'
type: reference
topics:
  - Clustering
  - Enterprise
  - High availability
  - Infrastructure
shortTitle: Choosing cluster or HA
ms.openlocfilehash: 3a15defe4327b1aeed4f0db22586c75b233b5908
ms.sourcegitcommit: 76b840f45ba85fb79a7f0c1eb43bc663b3eadf2b
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/12/2022
ms.locfileid: '146332490'
---
## 오류 시나리오

HA(고가용성)와 클러스터링 모두 실패 지점인 단일 노드를 제거하여 중복성을 제공합니다. 다음 시나리오에서 가용성을 제공할 수 있습니다.

{% data reusables.enterprise_installation.ha-and-clustering-failure-scenarios %}

## 확장성

{% data reusables.enterprise_clustering.clustering-scalability %} HA에서는 어플라이언스 규모가 주 노드에만 종속되고 부하가 복제본 서버에 배포되지 않습니다.

## 장애 조치(failover) 메서드 및 구성 차이점

| 기능     | 장애 조치(failover) 구성     | 장애 조치 메서드 |
| :------------- | :------------- | :--- |
| 고가용성 구성       | TTL이 낮은 DNS 레코드가 주 어플라이언스 또는 부하 분산 장치를 가리켰습니다. | DNS 장애 조치(failover) 및 부하 분산 장치 구성에서 모두 복제본 어플라이언스를 수동으로 승격해야 합니다. |
| Clustering | DNS 레코드가 부하 분산 장치를 가리켜야 합니다. | 부하 분산 장치 뒤에 있는 노드에서 오류가 발생하면 트래픽이 작동 중인 다른 노드로 자동으로 전송됩니다. |

## 백업 및 재해 복구

HA와 클러스터링 모두 정기 백업을 대체하는 것으로 간주해서는 안 됩니다. 자세한 내용은 “[어플라이언스에서 백업 구성](/enterprise/admin/guides/installation/configuring-backups-on-your-appliance)”을 참조하세요.

## 모니터링

가용성 기능, 특히 클러스터링과 같은 자동 장애 조치(failover)가 있는 기능은 어딘가에서 오류가 발생해도 일반적으로 서비스가 중단되지 않으므로 오류를 마스킹할 수 있습니다. HA 또는 클러스터링 중 어느 것을 사용하든, 오류가 발생할 때 알 수 있도록 각 인스턴스의 상태를 모니터링하는 것이 중요합니다. 모니터링에 대한 자세한 내용은 “[권장 경고 임계값](/enterprise/admin/guides/installation/recommended-alert-thresholds/)” 및 “[클러스터 노드 모니터링](/enterprise/{{ currentVersion}}/admin/guides/clustering/monitoring-cluster-nodes/)”을 참조하세요.

## 추가 참고 자료
- {% data variables.product.prodname_ghe_server %} 클러스터링에 대한 자세한 내용은 “[클러스터링 정보](/enterprise/{{ currentVersion}}/admin/guides/clustering/about-clustering/)”를 참조하세요.
- HA에 대한 자세한 내용은 “[고가용성을 위한 {% data variables.product.prodname_ghe_server %} 구성](/enterprise/admin/guides/installation/configuring-github-enterprise-server-for-high-availability/)”을 참조하세요.

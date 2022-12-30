---
title: 클러스터링 정보
intro: '{% data variables.product.prodname_ghe_server %} 클러스터링을 사용하면 {% data variables.product.prodname_ghe_server %}를 구성하는 서비스를 여러 노드로 확장할 수 있습니다.'
redirect_from:
  - /enterprise/admin/clustering/overview
  - /enterprise/admin/clustering/about-clustering
  - /enterprise/admin/clustering/clustering-overview
  - /enterprise/admin/enterprise-management/about-clustering
  - /admin/enterprise-management/about-clustering
versions:
  ghes: '*'
type: overview
topics:
  - Clustering
  - Enterprise
ms.openlocfilehash: 5da017898f1f0e205685dcf1fc29b5088030421a
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/05/2022
ms.locfileid: '146332482'
---
## 클러스터링 아키텍처

{% data variables.product.prodname_ghe_server %}는 서비스 집합으로 구성됩니다. 클러스터에서 서비스는 여러 노드에서 실행되며, 요청은 서비스 간에 부하가 분산됩니다. 변경 내용은 별도의 노드에 중복 복사본과 함께 자동으로 저장됩니다. 대부분의 서비스는 동일한 서비스의 다른 인스턴스와 동일한 피어입니다. 이에 대한 예외는 `mysql-server` 및 `redis-server` 서비스입니다. 서비스는 하나 이상의 복제본 노드가 있는 단일 기본 노드에서 작동합니다. 

[클러스터링에 필요한 서비스](/enterprise/admin/enterprise-management/about-cluster-nodes#services-required-for-clustering)에 대해 자세히 알아보세요.

## 클러스터링이 내 조직에 적합한지 여부

{% data reusables.enterprise_clustering.clustering-scalability %} 그러나 중복된 스케일링 가능한 클러스터를 설정하는 것은 복잡할 수 있으며 신중한 계획이 필요합니다. 추가 복잡성은 설치, 재해 복구 시나리오 및 업그레이드 중에 계획해야 합니다.

{% data variables.product.prodname_ghe_server %}는 노드 간 짧은 대기 시간을 요구하며, 지리적 위치 간 중복성에 적합하지 않습니다.

클러스터링은 중복성을 제공하지만 고가용성 구성을 대체하지는 않습니다. 자세한 내용은 [고가용성 구성](/enterprise/admin/guides/installation/configuring-github-enterprise-server-for-high-availability)을 참조하세요. 기본/보조 장애 조치(failover) 구성은 클러스터링보다 훨씬 간단하며 많은 조직의 요구 사항을 충족합니다. 자세한 내용은 [클러스터링과 고가용성 간의 차이점](/enterprise/admin/guides/clustering/differences-between-clustering-and-high-availability-ha/)을 참조하세요.

{% data reusables.package_registry.packages-cluster-support %}

## 클러스터링에 액세스하는 방법

클러스터링은 특정 스케일링 상황에 맞게 설계되었으며 일부 조직에는 적합하지 않습니다. 클러스터링을 고려하는 경우 전담 담당자 또는 {% data variables.contact.contact_enterprise_sales %}에 문의하세요.

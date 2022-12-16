---
title: 클러스터 노드 바꾸기
intro: '{% data variables.product.prodname_ghe_server %} 노드를 바꾸려면 클러스터 구성 파일(`cluster.conf`)에서 영향을 받는 노드를 오프라인으로 표시하고 대체 노드를 추가해야 합니다. 이는 노드가 실패하거나 더 많은 리소스가 있는 노드를 추가하여 성능을 향상시키기 위해 필요할 수 있습니다.'
redirect_from:
  - /enterprise/admin/clustering/replacing-a-cluster-node
  - /enterprise/admin/enterprise-management/replacing-a-cluster-node
  - /admin/enterprise-management/replacing-a-cluster-node
versions:
  ghes: '*'
type: how_to
topics:
  - Clustering
  - Enterprise
  - Infrastructure
ms.openlocfilehash: 4b4a34424803179d27aa245ad6ccb416ff926c59
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/05/2022
ms.locfileid: '145116780'
---
{% warning %}

**경고:** 교체 노드는 충돌을 방지하기 위해 이전에 클러스터에서 사용되지 않은 호스트 이름을 사용해야 합니다.

{% endwarning %}

## 기능 노드 바꾸기
{% data reusables.enterprise_clustering.replacing-a-cluster-node-provision %} {% data reusables.enterprise_clustering.replacing-a-cluster-node-admin-configure-ip %} {% data reusables.enterprise_clustering.replacing-a-cluster-node-modify-cluster-conf %} {% data reusables.enterprise_clustering.replacing-a-cluster-node-initialize-new-node %} {% data reusables.enterprise_clustering.replacing-a-cluster-node-config-node %} {% data reusables.enterprise_clustering.replacing-a-cluster-node-need-three-nodes %} {% data reusables.enterprise_clustering.replacing-a-cluster-node-mark-offline %} {% data reusables.enterprise_clustering.replacing-a-cluster-node-validate-config %} {% data reusables.enterprise_clustering.replacing-a-cluster-node-replacement-name %}

## 응급 상황에서 노드 바꾸기
{% data reusables.enterprise_clustering.replacing-a-cluster-node-provision %} {% data reusables.enterprise_clustering.replacing-a-cluster-node-admin-configure-ip %} {% data reusables.enterprise_clustering.replacing-a-cluster-node-mark-offline %} {% data reusables.enterprise_clustering.replacing-a-cluster-node-validate-config %} {% data reusables.enterprise_clustering.replacing-a-cluster-node-modify-cluster-conf %} {% data reusables.enterprise_clustering.replacing-a-cluster-node-replacement-name %} {% data reusables.enterprise_clustering.replacing-a-cluster-node-initialize-new-node %} {% data reusables.enterprise_clustering.replacing-a-cluster-node-config-node %} {% data reusables.enterprise_clustering.replacing-a-cluster-node-need-three-nodes %}

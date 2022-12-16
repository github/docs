---
title: 복제본 클러스터로 장애 조치(failover) 시작
intro: '{% data variables.product.prodname_ghe_server %} 클러스터가 실패하면 수동 복제본에 대한 장애 조치(failover)를 할 수 있습니다.'
redirect_from:
  - /enterprise/admin/enterprise-management/initiating-a-failover-to-your-replica-cluster
  - /admin/enterprise-management/initiating-a-failover-to-your-replica-cluster
versions:
  ghes: '*'
type: how_to
topics:
  - Clustering
  - Enterprise
  - High availability
  - Infrastructure
shortTitle: Initiate a failover to replica
ms.openlocfilehash: 14889e5d861475bc2d887062fb12450194cd6505
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145120612'
---
## 복제본 클러스터로 장애 조치(failover) 정보

기본 데이터 센터에서 오류가 발생할 경우 활성 클러스터의 각 노드에 대해 수동 복제본 노드를 구성하는 경우 보조 데이터 센터의 복제본 노드로 장애 조치(failover)할 수 있습니다.

장애 조치(failover)에 필요한 시간은 복제본 클러스터를 수동으로 승격하고 트래픽을 리디렉션하는 데 걸리는 시간에 따라 달라집니다.

복제본 클러스터를 승격해도 기존 클러스터에 대한 복제가 자동으로 설정되지는 않습니다. 복제본 클러스터를 승격한 후 새 활성 클러스터에서 복제를 다시 구성할 수 있습니다. 자세한 내용은 “[클러스터에 대한 고가용성 구성”](/enterprise/admin/enterprise-management/configuring-high-availability-replication-for-a-cluster#reconfiguring-high-availability-replication-after-a-failover)을 참조하세요.

## 필수 조건

수동 복제본 노드로 장애 조치(failover)하려면 클러스터에 대한 고가용성을 구성해야 합니다. 자세한 내용은 “[클러스터에 대한 고가용성 구성”](/enterprise/admin/enterprise-management/configuring-high-availability-replication-for-a-cluster)을 참조하세요.

## 복제본 클러스터로 장애 조치(failover) 시작

1. 클러스터에 대한 보조 데이터 센터의 수동 노드에 SSH로 연결합니다. 자세한 내용은 “[관리 셸(SSH) 액세스](/enterprise/admin/configuration/accessing-the-administrative-shell-ssh#enabling-access-to-the-administrative-shell-via-ssh)”를 참조하세요.

2. 보조 클러스터로 장애 조치(failover)를 초기화하고 활성 노드로 작동하도록 구성합니다.

    ```shell
  ghe-cluster-failover
  ```

{% data reusables.enterprise_clustering.configuration-finished %}

3. 수동 클러스터에 대한 부하 분산 장치의 IP 주소를 가리키도록 DNS 레코드를 업데이트합니다. 트래픽은 TTL 기간이 경과한 후 복제본으로 전달됩니다.

{% data variables.product.prodname_ghe_server %}에서 프롬프트를 표시하고 DNS 업데이트가 전파되면 장애 조치(failover)가 완료됩니다. 사용자는 클러스터의 일반적인 호스트 이름을 사용하여 {% data variables.product.prodname_ghe_server %}에 액세스할 수 있습니다.

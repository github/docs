---
title: 클러스터 노드 이동
intro: 클러스터 노드의 데이터 서비스를 이동할 수 있습니다.
redirect_from:
  - /enterprise/admin/clustering/evacuating-a-cluster-node
  - /enterprise/admin/enterprise-management/evacuating-a-cluster-node
  - /admin/enterprise-management/evacuating-a-cluster-node
versions:
  ghes: '*'
type: how_to
topics:
  - Clustering
  - Enterprise
ms.openlocfilehash: 9f98059b0ff0fbc26027aeb6c2154033ce54a1fb
ms.sourcegitcommit: 5f40f9341dd1e953f4be8d1642f219e628e00cc8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/04/2022
ms.locfileid: '148009036'
---
## 클러스터 노드 이동 정보

{% data variables.product.product_name %}에 대한 클러스터 구성에서 노드를 오프라인으로 전환하기 전에 노드를 이동할 수 있습니다. 이동하면 서비스 계층의 나머지 노드에 서비스의 모든 데이터가 포함됩니다. 예를 들어 클러스터의 노드에 대한 가상 머신을 교체하는 경우 먼저 노드를 이동해야 합니다.

{% data variables.product.prodname_ghe_server %}의 노드 및 서비스 계층에 대한 자세한 내용은 “[클러스터 노드 정보](/admin/enterprise-management/configuring-clustering/about-cluster-nodes)”를 참조하세요.

{% warning %}

**경고**:

- 데이터 손실을 방지하기 위해 {% data variables.product.company_short %}에서는 노드를 오프라인으로 전환하기 전에 노드를 이동하는 것을 강력하게 권장합니다. 

- 데이터 서비스 클러스터에 노드가 3개뿐인 경우 `ghe-spokes`에 복사본을 만들 다른 위치가 없으므로 노드를 이동할 수 없습니다. 노드가 4개 이상 있는 경우 `ghe-spokes`는 이동된 노드에서 모든 리포지토리를 이동합니다.

{% endwarning %}

## 클러스터 노드 이동

노드를 오프라인으로 전환하려고 하고 노드가 `git-server`, `pages-server` 또는 `storage-server` 같은 데이터 서비스 역할을 실행하는 경우 노드를 오프라인으로 전환하기 전에 각 노드를 이동합니다.

{% data reusables.enterprise_clustering.ssh-to-a-node %}
1. 이동할 노드의 UUID를 찾으려면 다음 명령을 실행합니다. `HOSTNAME`을 노드의 호스트 이름으로 바꿉니다.

   ```shell
   $ ghe-config cluster.HOSTNAME.uuid
   ```
1. {% data variables.product.product_name %}가 데이터를 복사하는 동안 노드 상태를 모니터링합니다. 복사가 완료될 때까지 노드를 오프라인으로 전환하지 마세요. 노드의 상태를 모니터링하려면 다음 명령을 실행하여 `UUID`를 2단계의 UUID로 바꿉니다.

   - **Git**:

     ```shell
     $ ghe-spokes evac-status git-server-UUID
     ```

   - **{% data variables.product.prodname_pages %}** :

     ```shell
     $ echo "select count(*) from pages_replicas where host = 'pages-server-UUID'" | ghe-dbconsole -y
     ```

   - **스토리지**:

     ```shell
     $ ghe-storage evacuation-status storage-server-UUID
     ```
1. 복사가 완료되면 다음 명령을 실행하여 노드를 이동하고 `UUID`를 2단계의 UUID로 바꿀 수 있습니다.

   - **Git**:

     ```shell
     $ ghe-spokes server evacuate git-server-UUID \'REASON FOR EVACUATION\'
     ```

   - **{% data variables.product.prodname_pages %}** :

     ```shell
     $ ghe-dpages evacuate pages-server-UUID
     ```

   - **스토리지** 의 경우 먼저 다음 명령을 실행하여 노드를 오프라인으로 전환합니다.

     ```shell
     $ ghe-storage offline storage-server-UUID
     ```

     스토리지 노드가 오프라인 상태이면 다음 명령을 실행하여 노드를 이동할 수 있습니다.

     ```shell
     $ ghe-storage evacuate storage-server-UUID
     ```

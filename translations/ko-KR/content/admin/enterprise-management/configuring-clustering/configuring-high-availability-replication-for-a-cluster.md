---
title: 클러스터에 대한 고가용성 복제 구성
intro: '전체 {% data variables.product.prodname_ghe_server %} 클러스터의 수동 복제본을 다른 위치에 구성하여 클러스터가 중복 노드에 대한 장애 조치(failover)를 하도록 허용할 수 있습니다.'
miniTocMaxHeadingLevel: 3
redirect_from:
  - /enterprise/admin/enterprise-management/configuring-high-availability-replication-for-a-cluster
  - /admin/enterprise-management/configuring-high-availability-replication-for-a-cluster
versions:
  ghes: '*'
type: how_to
topics:
  - Clustering
  - Enterprise
  - High availability
  - Infrastructure
shortTitle: Configure HA replication
ms.openlocfilehash: 5faf916b803018caf1cf5b0d4b92791b9faba4cf
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/20/2022
ms.locfileid: '148094283'
---
## 클러스터에 대한 고가용성 복제 정보

동일한 수동 노드 집합이 활성 클러스터의 노드와 동기화되는 경우 고가용성을 위해 {% data variables.product.prodname_ghe_server %}의 클러스터 배포를 구성할 수 있습니다. 하드웨어 또는 소프트웨어 오류가 활성 클러스터의 데이터 센터에 영향을 미치는 경우 수동으로 복제본 노드로 장애 조치(failover)하고 사용자 요청을 계속 처리하여 중단의 영향을 최소화할 수 있습니다.

고가용성 모드에서 각 활성 노드는 해당 수동 노드와 정기적으로 동기화됩니다. 수동 노드는 대기 상태로 실행되며 애플리케이션을 제공하거나 사용자 요청을 처리하지 않습니다.

{% data variables.product.prodname_ghe_server %}에 대한 포괄적인 재해 복구 계획의 일부로 고가용성을 구성하는 것이 좋습니다. 또한 정기적인 백업을 수행하는 것이 좋습니다. 자세한 내용은 “[어플라이언스에서 백업 구성](/enterprise/admin/configuration/configuring-backups-on-your-appliance)”을 참조하세요.

## 필수 조건

### 하드웨어 및 소프트웨어

활성 클러스터의 각 기존 노드에 대해 동일한 하드웨어 리소스를 사용하여 두 번째 가상 머신을 프로비저닝해야 합니다. 예를 들어 클러스터에 11개의 노드가 있고 각 노드에 12개의 vCPU, 96GB RAM 및 750GB의 연결된 스토리지가 있는 경우 각각 12개의 vCPU, 96GB RAM 및 750GB의 연결된 스토리지가 있는 11개의 새 가상 머신을 프로비저닝해야 합니다.

각 새 가상 머신에서 활성 클러스터의 노드에서 실행되는 동일한 버전의 {% data variables.product.prodname_ghe_server %}를 설치합니다. 라이선스를 업로드하거나 추가 구성을 수행할 필요가 없습니다. 자세한 내용은 “[{% data variables.product.prodname_ghe_server %} 인스턴스 설정](/enterprise/admin/installation/setting-up-a-github-enterprise-server-instance)”을 참조하세요.

{% note %}

**참고**: 고가용성 복제에 사용하려는 노드는 독립 실행형 {% data variables.product.prodname_ghe_server %} 인스턴스여야 합니다. 수동 노드를 두 번째 클러스터로 초기화하지 마세요.

{% endnote %}

### 네트워크

프로비저닝하는 각 새 노드에 고정 IP 주소를 할당해야 하며, 연결을 수락하고 클러스터의 프런트 엔드 계층의 노드로 전달하도록 부하 분산 장치를 구성해야 합니다.

{% data reusables.enterprise_clustering.network-latency %} 수동 클러스터의 노드 간 네트워크 연결에 대한 자세한 내용은 "[클러스터 네트워크 구성](/enterprise/admin/enterprise-management/cluster-network-configuration)"을 참조하세요.

## 클러스터에 대한 고가용성 복제본 만들기

- [기본 데이터 센터에 활성 노드 할당](#assigning-active-nodes-to-the-primary-datacenter)
- [클러스터 구성 파일에 수동 노드 추가](#adding-passive-nodes-to-the-cluster-configuration-file)
- [예제 구성](#example-configuration)

### 기본 데이터 센터에 활성 노드 할당

수동 노드에 대한 보조 데이터 센터를 정의하기 전에 활성 노드를 기본 데이터 센터에 할당해야 합니다.

{% data reusables.enterprise_clustering.ssh-to-a-node %}

{% data reusables.enterprise_clustering.open-configuration-file %}

3. 클러스터의 기본 데이터 센터의 이름을 확인합니다. 클러스터 구성 파일의 맨 위에 있는 `[cluster]` 섹션은 `primary-datacenter` 키-값 쌍을 사용하여 기본 데이터 센터의 이름을 정의합니다. 기본적으로 클러스터의 기본 데이터 센터는 `default`로 이름이 지정됩니다.

    ```shell
    [cluster]
      mysql-master = HOSTNAME
      redis-master = HOSTNAME
      <strong>primary-datacenter = default</strong>
    ```

    - 필요에 따라 `primary-datacenter`의 값을 편집하여 기본 데이터 센터의 이름을 더욱 설명적이고 정확하게 변경합니다.

4. {% data reusables.enterprise_clustering.configuration-file-heading %} 각 노드의 제목 아래에 새 키-값 쌍을 추가하여 데이터 센터에 노드를 할당합니다. 위 3단계의 `primary-datacenter`와 동일한 값을 사용합니다. 예를 들어 기본 이름(`default`)을 사용하려는 경우 각 노드의 섹션에 다음 키-값 쌍을 추가합니다.

    ```
    datacenter = default
    ```

    완료되면 클러스터 구성 파일의 각 노드에 대한 섹션이 다음 예제와 같이 표시됩니다. {% data reusables.enterprise_clustering.key-value-pair-order-irrelevant %}

    ```shell
    [cluster "HOSTNAME"]
      <strong>datacenter = default</strong>
      hostname = HOSTNAME
      ipv4 = IP-ADDRESS
      ...
    ...
    ```

    {% note %}

    **참고**: 3단계에서 기본 데이터 센터의 이름을 변경한 경우 각 노드에 대한 섹션에서 `consul-datacenter` 키-값 쌍을 찾아 이름이 변경된 기본 데이터 센터로 값을 변경합니다. 예를 들어 기본 데이터 센터를 `primary`로 이름을 지정한 경우 각 노드에 대해 다음 키-값 쌍을 사용합니다.

    ```
    consul-datacenter = primary
    ```

    {% endnote %}

{% data reusables.enterprise_clustering.apply-configuration %}

{% data reusables.enterprise_clustering.configuration-finished %}

{% data variables.product.prodname_ghe_server %}에서 프롬프트를 표시하면 클러스터의 기본 데이터 센터에 노드에 할당이 완료됩니다.

### 클러스터 구성 파일에 수동 노드 추가

고가용성을 구성하려면 클러스터의 모든 활성 노드에 해당하는 수동 노드를 정의해야 합니다. 다음 지침에서는 활성 노드와 수동 노드를 모두 정의하는 새 클러스터 구성을 만듭니다. 다음을 수행합니다.

- 활성 클러스터 구성 파일의 복사본을 만듭니다.
- 복사본을 편집하여 활성 노드에 해당하는 수동 노드를 정의하고 프로비저닝한 새 가상 머신의 IP 주소를 추가합니다.
- 클러스터 구성의 수정된 복사본을 활성 구성에 다시 병합합니다.
- 새 구성을 적용하여 복제를 시작합니다.

예제 구성은 “[예제 구성](#example-configuration)”을 참조하세요.

1. 클러스터의 각 노드에 대해 동일한 사양으로 일치하는 가상 머신을 프로비저닝하고 동일한 버전의 {% data variables.product.prodname_ghe_server %}를 실행합니다. 각 새 클러스터 노드에 대한 IPv4 주소 및 호스트 이름을 확인합니다. 자세한 내용은 “[필수 구성 요소](#prerequisites)”를 참조하세요.

    {% note %}

    **참고**: 장애 조치(failover) 후 고가용성을 다시 구성하는 경우 기본 데이터 센터의 이전 노드를 대신 사용할 수 있습니다.

    {% endnote %}

{% data reusables.enterprise_clustering.ssh-to-a-node %}

3. 기존 클러스터 구성을 백업합니다.

    ```
    cp /data/user/common/cluster.conf ~/$(date +%Y-%m-%d)-cluster.conf.backup
    ```

4. _/home/admin/cluster-passive.conf_ 와 같은 임시 위치에 기존 클러스터 구성 파일의 복사본을 만듭니다. IP 주소의 고유 키-값 쌍(`ipv*`), UUID(`uuid`) 및 WireGuard용 퍼블릭 키(`wireguard-pubkey`)를 삭제합니다.

    ```
    grep -Ev "(?:|ipv|uuid|vpn|wireguard\-pubkey)" /data/user/common/cluster.conf > ~/cluster-passive.conf
    ```

5. 이전 단계에서 복사한 임시 클러스터 구성 파일에서 `[cluster]` 섹션을 제거합니다.

    ```
    git config -f ~/cluster-passive.conf --remove-section cluster
    ```

6. 수동 노드를 프로비저닝한 보조 데이터 센터의 이름을 결정한 다음 임시 클러스터 구성 파일을 새 데이터 센터 이름으로 업데이트합니다. `SECONDARY`를 선택한 이름으로 바꿉니다.

    ```shell
    sed -i 's/datacenter = default/datacenter = SECONDARY/g' ~/cluster-passive.conf
    ```

7. 수동 노드의 호스트 이름에 대한 패턴을 결정합니다.

    {% warning %}

    **경고**: 수동 노드의 호스트 이름은 고유해야 하며 해당 활성 노드의 호스트 이름과 달라야 합니다.

    {% endwarning %}

8. 텍스트 편집기에서 3단계의 임시 클러스터 구성 파일을 엽니다. 예를 들어 Vim을 사용할 수 있습니다.

    ```shell
    sudo vim ~/cluster-passive.conf
    ```

9. 임시 클러스터 구성 파일 내의 각 섹션에서 노드의 구성을 업데이트합니다. {% data reusables.enterprise_clustering.configuration-file-heading %}

    - 섹션 제목에서 따옴표 붙은 호스트 이름과 섹션 내의 `hostname` 값을 위의 7단계에서 선택한 패턴에 따라 수동 노드의 호스트 이름으로 변경합니다.
    - 이름이 `ipv4`인 새 키를 추가하고 값을 수동 노드의 정적 IPv4 주소로 설정합니다.
    - 새 키-값 쌍 `replica = enabled`를 추가합니다.

    ```shell
    [cluster "NEW PASSIVE NODE HOSTNAME"]
      ...
      hostname = NEW PASSIVE NODE HOSTNAME
      ipv4 = NEW PASSIVE NODE IPV4 ADDRESS
      <strong>replica = enabled</strong>
      ...
    ...
    ```

10. 4단계에서 만든 임시 클러스터 구성 파일의 내용을 활성 구성 파일에 추가합니다.

    ```shell
    cat ~/cluster-passive.conf >> /data/user/common/cluster.conf
    ```

11. 보조 데이터 센터에서 기본 MySQL 및 Redis 노드를 지정합니다. `REPLICA MYSQL PRIMARY HOSTNAME` 및 `REPLICA REDIS PRIMARY HOSTNAME`을 기존 MySQL 및 Redis 기본 구성과 일치하도록 프로비저닝한 수동 노드의 호스트 이름으로 바꿉니다.

    ```shell
    git config -f /data/user/common/cluster.conf cluster.mysql-master-replica REPLICA-MYSQL-PRIMARY-HOSTNAME
    git config -f /data/user/common/cluster.conf cluster.redis-master-replica REPLICA-REDIS-PRIMARY-HOSTNAME
    ```

    {% warning %}

    **경고**: 계속하기 전에 클러스터 구성 파일을 검토합니다.

    - 최상위 `[cluster]` 섹션에서 `mysql-master-replica` 및 `redis-master-replica`의 값이 장애 조치(failover) 후 MySQL 및 Redis 기본 구성으로 사용될 보조 데이터 센터의 수동 노드에 대해 올바른 호스트 이름인지 확인합니다.
    - 이름이 <code>[cluster "ACTIVE NODE HOSTNAME"]</code>인 활성 노드에 대한 각 섹션에서 다음 키-값 쌍을 다시 확인합니다.
      - `datacenter`는 최상위 `[cluster]` 섹션의 `primary-datacenter` 값과 일치해야 합니다.
      - `consul-datacenter`는 `datacenter`의 값과 일치해야 합니다. 이 값은 최상위 `[cluster]` 섹션의 `primary-datacenter` 값과 같아야 합니다.
    - 각 활성 노드에 대해 구성에 동일한 역할을 가진 **하나의** 수동 노드에 대해 일치하는 섹션이 **하나** 있는지 확인합니다. 수동 노드에 대한 각 섹션에서 각 키-값 쌍을 다시 확인합니다.
      - `datacenter`는 다른 모든 수동 노드와 일치해야 합니다.
      - `consul-datacenter`는 다른 모든 수동 노드와 일치해야 합니다.
      - `hostname`은 섹션 제목의 호스트 이름과 일치해야 합니다.
      - `ipv4`는 노드의 고유한 정적 IPv4 주소와 일치해야 합니다.
      - `replica`는 `enabled`로 구성되어야 합니다.
    - 더 이상 사용되지 않는 오프라인 노드에 대한 섹션을 제거할 수 있습니다.

    예제 구성을 검토하려면 “[예제 구성](#example-configuration)”을 참조하세요.

    {% endwarning %}

13. 새 클러스터 구성을 초기화합니다. {% data reusables.enterprise.use-a-multiplexer %}

    ```shell
    ghe-cluster-config-init
    ```

14. 초기화가 완료되면 {% data variables.product.prodname_ghe_server %}에서 다음 메시지를 표시합니다.

    ```shell
    Finished cluster initialization
    ```

{% data reusables.enterprise_clustering.apply-configuration %}

{% data reusables.enterprise_clustering.configuration-finished %}

17. 수동 노드로 장애 조치(failover)하는 경우 사용자의 연결을 허용하는 부하 분산 장치를 구성합니다. 자세한 내용은 “[클러스터 네트워크 구성](/enterprise/admin/enterprise-management/cluster-network-configuration#configuring-a-load-balancer)”을 참조하세요.

클러스터의 노드에 대한 고가용성 복제 구성을 완료했습니다. 각 활성 노드는 구성 및 데이터를 해당 수동 노드로 복제하기 시작합니다. 오류가 발생할 경우 보조 데이터 센터에 대한 부하 분산 장치로 트래픽을 보낼 수 있습니다. 장애 조치(failover)에 대한 자세한 내용은 “[복제본 클러스터로 장애 조치(failover) 시작](/enterprise/admin/enterprise-management/initiating-a-failover-to-your-replica-cluster)”을 참조하세요.

### 구성 예

최상위 `[cluster]` 구성은 다음 예제와 유사합니다.

```shell
[cluster]
  mysql-master = HOSTNAME-OF-ACTIVE-MYSQL-MASTER
  redis-master = HOSTNAME-OF-ACTIVE-REDIS-MASTER
  primary-datacenter = PRIMARY-DATACENTER-NAME
  mysql-master-replica = HOSTNAME-OF-PASSIVE-MYSQL-MASTER
  redis-master-replica = HOSTNAME-OF-PASSIVE-REDIS-MASTER
  mysql-auto-failover = false
...
```

클러스터 스토리지 계층의 활성 노드에 대한 구성은 다음 예제와 같습니다.

```shell
...
[cluster "UNIQUE ACTIVE NODE HOSTNAME"]
  datacenter = default
  hostname = UNIQUE-ACTIVE-NODE-HOSTNAME
  ipv4 = IPV4-ADDRESS
  consul-datacenter = default
  consul-server = true
  git-server = true
  pages-server = true
  mysql-server = true
  elasticsearch-server = true
  redis-server = true
  memcache-server = true
  metrics-server = true
  storage-server = true
  vpn = IPV4 ADDRESS SET AUTOMATICALLY
  uuid = UUID SET AUTOMATICALLY
  wireguard-pubkey = PUBLIC KEY SET AUTOMATICALLY
...
```

스토리지 계층의 해당 수동 노드에 대한 구성은 다음 예제와 같습니다.

- 해당 활성 노드와의 중요한 차이점은 **굵게** 표시됩니다.
- {% data variables.product.prodname_ghe_server %}는 `vpn`, `uuid` 및 `wireguard-pubkey`에 대한 값을 자동으로 할당하므로, 초기화할 수동 노드의 값을 정의해서는 안 됩니다.
- `*-server` 키로 정의된 서버 역할은 해당 활성 노드와 일치합니다.

```shell
...
<strong>[cluster "UNIQUE PASSIVE NODE HOSTNAME"]</strong>
  <strong>replica = enabled</strong>
  <strong>ipv4 = IPV4 ADDRESS OF NEW VM WITH IDENTICAL RESOURCES</strong>
  <strong>datacenter = SECONDARY DATACENTER NAME</strong>
  <strong>hostname = UNIQUE PASSIVE NODE HOSTNAME</strong>
  <strong>consul-datacenter = SECONDARY DATACENTER NAME</strong>
  consul-server = true
  git-server = true
  pages-server = true
  mysql-server = true
  elasticsearch-server = true
  redis-server = true
  memcache-server = true
  metrics-server = true
  storage-server = true
  <strong>vpn = DO NOT DEFINE</strong>
  <strong>uuid = DO NOT DEFINE</strong>
  <strong>wireguard-pubkey = DO NOT DEFINE</strong>
...
```

## 활성 및 수동 클러스터 노드 간의 복제 모니터링

클러스터의 활성 노드와 수동 노드 간의 초기 복제에는 시간이 걸립니다. 시간은 복제할 데이터의 양과 {% data variables.product.prodname_ghe_server %}의 활동 수준에 따라 달라집니다.

{% data variables.product.prodname_ghe_server %} 관리 셸을 통해 사용할 수 있는 명령줄 도구를 사용하여 클러스터의 모든 노드에서 진행률을 모니터링할 수 있습니다. 관리 셸에 대한 자세한 내용은 “[관리 셸(SSH)에 액세스](/enterprise/admin/configuration/accessing-the-administrative-shell-ssh)”를 참조하세요.

- 데이터베이스 복제 모니터링:

  ```
  /usr/local/share/enterprise/ghe-cluster-status-mysql
  ```

- 리포지토리 및 Gist 데이터 복제 모니터링:

  ```
  ghe-spokes status
  ```

- 첨부 파일 및 LFS 데이터 복제 모니터링:

  ```
  ghe-storage replication-status
  ```

- Pages 데이터 복제 모니터링:

  ```
  ghe-dpages replication-status
  ```

`ghe-cluster-status`를 사용하여 클러스터의 전반적인 상태를 검토할 수 있습니다. 자세한 내용은 “[명령줄 유틸리티](/enterprise/admin/configuration/command-line-utilities#ghe-cluster-status)”를 참조하세요.

## 장애 조치(failover) 후 고가용성 복제 다시 구성

클러스터의 활성 노드에서 클러스터의 수동 노드로 장애 조치(failover)한 후 두 가지 방법으로 고가용성 복제를 다시 구성할 수 있습니다.

### 새 수동 노드 프로비저닝 및 구성

장애 조치(failover) 후 두 가지 방법으로 고가용성을 다시 구성할 수 있습니다. 선택하는 방법은 장애 조치(failover)한 이유와 원래 활성 노드의 상태에 따라 달라집니다.

1. 보조 데이터 센터의 각 새 활성 노드에 대해 새 수동 노드 집합을 프로비저닝하고 구성합니다.

2. 이전 활성 노드를 새 수동 노드로 사용합니다.

고가용성을 다시 구성하는 프로세스는 고가용성을 초기 구성하는 프로세스와 동일합니다. 자세한 내용은 “[클러스터에 대한 고가용성 복제본 만들기](#creating-a-high-availability-replica-for-a-cluster)”를 참조하세요.


## 클러스터에 대한 고가용성 복제를 사용하지 않도록 설정

{% data variables.product.prodname_ghe_server %}의 클러스터 배포를 위한 수동 노드로 복제를 중지할 수 있습니다.

{% data reusables.enterprise_clustering.ssh-to-a-node %}

{% data reusables.enterprise_clustering.open-configuration-file %}

3. 최상위 `[cluster]` 섹션에서 `redis-master-replica` 및 `mysql-master-replica` 키-값 쌍을 삭제합니다.

4. 수동 노드에 대한 각 섹션을 삭제합니다. 수동 노드에 대해 `replica`가 `enabled`로 구성됩니다.

{% data reusables.enterprise_clustering.apply-configuration %}

{% data reusables.enterprise_clustering.configuration-finished %}

{% data variables.product.prodname_ghe_server %}에서 프롬프트를 표시하면 고가용성 복제가 사용하지 않도록 설정되었습니다.

---
title: 고가용성 구성 정보
intro: '고가용성 구성에서는 모든 주요 데이터 저장소의 복제를 통해 완전 중복 보조 {% data variables.product.prodname_ghe_server %} 어플라이언스가 주 어플라이언스와 동기화된 상태로 유지됩니다.'
redirect_from:
  - /enterprise/admin/installation/about-high-availability-configuration
  - /enterprise/admin/enterprise-management/about-high-availability-configuration
  - /admin/enterprise-management/about-high-availability-configuration
versions:
  ghes: '*'
type: overview
topics:
  - Enterprise
  - High availability
  - Infrastructure
shortTitle: About HA configuration
ms.openlocfilehash: b54ca60c6cf1d79b9435ca8deedebec09ed39396
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148109002'
---
고가용성을 구성하는 경우 주 어플라이언스의 모든 데이터 저장소(Git 리포지토리, MySQL, Redis, Elasticsearch)를 복제본 어플라이언스로 단방향 비동기 복제하는 자동화된 설정이 있습니다. {% data variables.enterprise.management_console %} 암호를 포함하여 대부분의 {% data variables.product.prodname_ghe_server %} 구성 설정도 복제됩니다. 자세한 내용은 “[관리 콘솔 액세스](/admin/configuration/configuring-your-enterprise/accessing-the-management-console)”를 참조하세요.

{% data variables.product.prodname_ghe_server %}는 복제본 어플라이언스가 데이터베이스 서비스는 복제 모드로 실행되지만 애플리케이션 서비스는 중지된 상태의 대기 어플라이언스로 실행되는 활성/수동 구성을 지원합니다.

복제가 설정된 후에는 복제본 어플라이언스에서 {% data variables.enterprise.management_console %}에 더 이상 액세스할 수 없습니다. 포트 8443에서 복제본의 IP 주소 또는 호스트 이름으로 이동하면 어플라이언스가 현재 복제본으로 구성되어 있음을 나타내는 “복제 모드의 서버” 메시지가 표시됩니다.
{% data reusables.enterprise_installation.replica-limit %}

## 대상 지정된 오류 시나리오

다음을 방지하려면 고가용성 구성을 사용합니다.

{% data reusables.enterprise_installation.ha-and-clustering-failure-scenarios %}

고가용성 구성은 다음에 적합한 솔루션이 아닙니다.

  - **스케일 아웃**. 지역 복제를 사용하여 트래픽을 지리적으로 분산할 수 있지만 쓰기 성능은 주 어플라이언스의 속도와 가용성으로 제한됩니다. 자세한 내용은 “[지역 복제 정보](/enterprise/admin/guides/installation/about-geo-replication/)”를 참조하세요.
  - **CI/CD 로드**. 주 인스턴스와 지리적으로 멀리 떨어져 있는 CI 클라이언트가 많은 경우 리포지토리 캐시를 구성하는 것이 도움이 될 수 있습니다. 자세한 내용은 “[리포지토리 캐싱 정보](/admin/enterprise-management/caching-repositories/about-repository-caching)”를 참조하세요.
  - **주 어플라이언스 백업**. 고가용성 복제본이 재해 복구 계획의 오프사이트 백업을 대체하는 것은 아닙니다. 일부 형태의 데이터 손상 또는 손실을 주 어플라이언스에서 복제본으로 즉시 복제할 수 있습니다. 안정적인 과거 상태로 안전하게 롤백하려면 기록 스냅샷을 사용하여 정기 백업을 수행해야 합니다.
  - **가동 중지 시간 없는 업그레이드**. 제어된 승격 시나리오에서 데이터 손실 및 분할 브레인(split-brain) 상황을 방지하려면 주 어플라이언스를 유지 관리 모드로 두고 모든 쓰기가 완료될 때까지 기다린 후 복제본을 승격합니다.

## 네트워크 트래픽 장애 조치(failover) 전략

장애 조치(failover) 동안 주 어플라이언스에서 복제본으로의 네트워크 트래픽 리디렉션을 별도로 구성하고 관리해야 합니다.

### DNS 장애 조치(failover)

DNS 장애 조치(failover)에서는 주 {% data variables.product.prodname_ghe_server %} 어플라이언스를 가리키는 DNS 레코드에 짧은 TTL 값을 사용합니다. 60초에서 5분 사이의 TTL을 사용하는 것이 좋습니다.

장애 조치(failover) 동안 주 어플라이언스를 유지 관리 모드로 두고 해당 DNS 레코드를 복제본 어플라이언스의 IP 주소로 리디렉션해야 합니다. 트래픽을 주 어플라이언스에서 복제본으로 리디렉션하는 데 필요한 시간은 TTL 구성과 DNS 레코드를 업데이트하는 데 필요한 시간에 따라 다릅니다.

지역 복제를 사용하는 경우 트래픽을 가장 가까운 복제본으로 보내도록 지역 DNS를 구성해야 합니다. 자세한 내용은 “[지역 복제 정보](/enterprise/admin/guides/installation/about-geo-replication/)”를 참조하세요.

### 부하 분산 장치

{% data reusables.enterprise_clustering.load_balancer_intro %} {% data reusables.enterprise_clustering.load_balancer_dns %}

장애 조치(failover) 동안 주 어플라이언스를 유지 관리 모드로 두어야 합니다. 복제본이 주 어플라이언스로 승격되었거나 수동 구성 변경이 필요한 경우 자동으로 감지하도록 부하 분산 장치를 구성할 수 있습니다. 복제본을 주 어플라이언스로 수동으로 승격해야 복제본이 사용자 트래픽에 응답합니다. 자세한 내용은 “[부하 분산 장치에서 {% data variables.product.prodname_ghe_server %} 사용](/enterprise/admin/guides/installation/using-github-enterprise-server-with-a-load-balancer/)”을 참조하세요.

{% data reusables.enterprise_installation.monitoring-replicas %}

## 복제 관리용 유틸리티

{% data variables.product.prodname_ghe_server %}에서 복제를 관리하려면 SSH를 통해 복제본 어플라이언스에 연결하여 다음 명령줄 유틸리티를 사용합니다.

### ghe-repl-setup

`ghe-repl-setup` 명령은 {% data variables.product.prodname_ghe_server %} 어플라이언스를 복제본 대기 모드로 둡니다.

 - 두 어플라이언스 간 통신을 위해 암호화된 WireGuard VPN 터널이 구성됩니다.
 - 데이터베이스 서비스가 복제를 위해 구성되고 시작됩니다.
 - 애플리케이션 서비스를 사용할 수 없습니다. HTTP, Git 또는 기타 지원되는 프로토콜을 통해 복제본 어플라이언스에 액세스하려고 하면 “복제본 모드의 어플라이언스” 유지 관리 페이지 또는 오류 메시지가 표시됩니다.

```shell
admin@169-254-1-2:~$ ghe-repl-setup 169.254.1.1
Verifying ssh connectivity with 169.254.1.1 ...
Connection check succeeded.
Configuring database replication against primary ...
Success: Replica mode is configured against 169.254.1.1.
To disable replica mode and undo these changes, run `ghe-repl-teardown'.
Run `ghe-repl-start' to start replicating against the newly configured primary.
```

### ghe-repl-start

`ghe-repl-start` 명령은 모든 데이터 저장소의 활성 복제를 켭니다.

```shell
admin@169-254-1-2:~$ ghe-repl-start
Starting MySQL replication ...
Starting Redis replication ...
Starting Elasticsearch replication ...
Starting Pages replication ...
Starting Git replication ...
Success: replication is running for all services.
Use `ghe-repl-status' to monitor replication health and progress.
```

### ghe-repl-status

`ghe-repl-status` 명령은 각 데이터 저장소 복제 스트림에 대해 `OK`, `WARNING` 또는 `CRITICAL` 상태를 반환합니다. `WARNING` 상태인 복제 채널이 있으면 명령이 종료되고 코드 `1`이 표시됩니다. 마찬가지로, `CRITICAL` 상태인 채널이 있으면 명령이 종료되고 코드 `2`가 표시됩니다.

```shell
admin@169-254-1-2:~$ ghe-repl-status
OK: mysql replication in sync
OK: redis replication is in sync
OK: elasticsearch cluster is in sync
OK: git data is in sync (10 repos, 2 wikis, 5 gists)
OK: pages data is in sync
```

`-v` 및 `-vv` 옵션은 각 데이터 저장소의 복제 상태에 대한 세부 정보를 제공합니다.

```shell
$ ghe-repl-status -v
OK: mysql replication in sync
  | IO running: Yes, SQL running: Yes, Delay: 0

OK: redis replication is in sync
  | master_host:169.254.1.1
  | master_port:6379
  | master_link_status:up
  | master_last_io_seconds_ago:3
  | master_sync_in_progress:0

OK: elasticsearch cluster is in sync
  | {
  |   "cluster_name" : "github-enterprise",
  |   "status" : "green",
  |   "timed_out" : false,
  |   "number_of_nodes" : 2,
  |   "number_of_data_nodes" : 2,
  |   "active_primary_shards" : 12,
  |   "active_shards" : 24,
  |   "relocating_shards" : 0,
  |   "initializing_shards" : 0,
  |   "unassigned_shards" : 0
  | }

OK: git data is in sync (366 repos, 31 wikis, 851 gists)
  |                   TOTAL         OK      FAULT    PENDING      DELAY
  | repositories        366        366          0          0        0.0
  |        wikis         31         31          0          0        0.0
  |        gists        851        851          0          0        0.0
  |        total       1248       1248          0          0        0.0

OK: pages data is in sync
  | Pages are in sync
```

### ghe-repl-stop

`ghe-repl-stop` 명령은 모든 데이터 저장소에 대해 일시적으로 복제를 사용하지 않도록 설정하고 복제 서비스를 중지합니다. 복제를 다시 시작하려면 [ghe-repl-start](#ghe-repl-start) 명령을 사용합니다.

```shell
admin@168-254-1-2:~$ ghe-repl-stop
Stopping Pages replication ...
Stopping Git replication ...
Stopping MySQL replication ...
Stopping Redis replication ...
Stopping Elasticsearch replication ...
Success: replication was stopped for all services.
```

### ghe-repl-promote

`ghe-repl-promote` 명령은 복제를 사용하지 않도록 설정하고 복제본 어플라이언스를 주 어플라이언스로 변환합니다. 어플라이언스가 원래 주 어플라이언스와 동일한 설정으로 구성되고 모든 서비스를 사용할 수 있습니다.

{% data reusables.enterprise_installation.promoting-a-replica %}

```shell
admin@168-254-1-2:~$ ghe-repl-promote
Enabling maintenance mode on the primary to prevent writes ...
Stopping replication ...
  | Stopping Pages replication ...
  | Stopping Git replication ...
  | Stopping MySQL replication ...
  | Stopping Redis replication ...
  | Stopping Elasticsearch replication ...
  | Success: replication was stopped for all services.
Switching out of replica mode ...
  | Success: Replication configuration has been removed.
  | Run `ghe-repl-setup' to re-enable replica mode.
Applying configuration and starting services ...
Success: Replica has been promoted to primary and is now accepting requests.
```

### ghe-repl-teardown

`ghe-repl-teardown` 명령은 복제 모드를 완전히 사용하지 않도록 설정하고 복제본 구성을 제거합니다.

## 추가 참고 자료

- “[고가용성 복제본 만들기](/enterprise/admin/guides/installation/creating-a-high-availability-replica)”
- “[네트워크 포트](/admin/configuration/configuring-network-settings/network-ports)”

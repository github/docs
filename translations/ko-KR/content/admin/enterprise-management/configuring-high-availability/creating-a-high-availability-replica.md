---
title: 고가용성 복제본 만들기
intro: 활성/수동 구성에서 복제본 어플라이언스는 주 어플라이언스의 중복 복사본입니다. 고가용성 모드를 사용하면 주 어플라이언스에 장애가 발생할 경우 복제본이 주 어플라이언스 역할을 하여 서비스 중단을 최소화할 수 있습니다.
redirect_from:
  - /enterprise/admin/installation/creating-a-high-availability-replica
  - /enterprise/admin/enterprise-management/creating-a-high-availability-replica
  - /admin/enterprise-management/creating-a-high-availability-replica
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - High availability
  - Infrastructure
shortTitle: Create HA replica
ms.openlocfilehash: ee384588ee76cd455facdb6fcbe838fc110bc223
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148106759'
---
{% data reusables.enterprise_installation.replica-limit %}

## 고가용성 복제본 만들기

1. 원하는 플랫폼에서 새 {% data variables.product.prodname_ghe_server %} 어플라이언스를 설정합니다. 복제본 어플라이언스는 기본 어플라이언스의 CPU, RAM 및 스토리지 설정을 미러링해야 합니다. 독립 환경에 복제본 어플라이언스를 설치하는 것이 좋습니다. 기본 하드웨어, 소프트웨어 및 네트워크 구성 요소는 기본 어플라이언스의 구성 요소와 격리되어야 합니다. 클라우드 공급자를 사용하는 경우 별도의 지역 또는 영역을 사용합니다. 자세한 내용은 “[{% data variables.product.prodname_ghe_server %} 인스턴스 설정](/enterprise/admin/guides/installation/setting-up-a-github-enterprise-server-instance)”을 참조하세요.
1. 새 어플라이언스가 포트 122/TCP 및 1194/UDP를 통해 이 고가용성 환경의 다른 모든 어플라이언스와 통신할 수 있는지 확인합니다. 자세한 내용은 “[네트워크 포트](/admin/configuration/configuring-network-settings/network-ports#administrative-ports)”를 참조하세요.
1. 브라우저에서 새 복제본 어플라이언스의 IP 주소로 이동하여 {% data variables.product.prodname_enterprise %} 라이선스를 업로드합니다.
{% data reusables.enterprise_installation.replica-steps %}
1. SSH를 사용하여 복제본 어플라이언스의 IP 주소로 연결합니다.
  ```shell
  $ ssh -p 122 admin@REPLICA_IP
  ```
{% data reusables.enterprise_installation.generate-replication-key-pair %} {% data reusables.enterprise_installation.add-ssh-key-to-primary %}
1. 기본에 대한 연결을 확인하고 새 복제본에 대해 복제본 모드를 사용하도록 설정하려면 `ghe-repl-setup`을 다시 실행합니다.
  ```shell
  $ ghe-repl-setup PRIMARY_IP
  ```
{% data reusables.enterprise_installation.replication-command %} {% data reusables.enterprise_installation.verify-replication-channel %}

## 지역 복제 복제본 만들기

이 예제 구성에서는 세 개의 서로 다른 지역에 있는 기본과 두 개의 복제본을 사용합니다. 세 노드는 서로 다른 네트워크에 있을 수 있지만 모든 노드는 다른 모든 노드에서 연결할 수 있어야 합니다. 최소한, 필요한 관리 포트는 다른 모든 노드에 열려 있어야 합니다. 포트 요구 사항에 대한 자세한 내용은 “[네트워크 포트](/enterprise/admin/guides/installation/network-ports/#administrative-ports)”를 참조하세요.

{% data reusables.enterprise_clustering.network-latency %} 대기 시간이 70밀리초를 초과하는 경우 대신 복제본 노드를 캐시하는 것이 좋습니다. 자세한 내용은 "[리포지토리 캐시 구성"을 참조하세요](/admin/enterprise-management/caching-repositories/configuring-a-repository-cache).

1. 첫 번째 복제본에서 `ghe-repl-setup`을 실행하여 표준 2개 노드 구성과 동일한 방식으로 첫 번째 복제본을 만듭니다.
  ```shell
  (replica1)$ ghe-repl-setup PRIMARY_IP
  (replica1)$ ghe-repl-start
  ```
2. 두 번째 복제본을 만들고 `ghe-repl-setup --add` 명령을 사용합니다. `--add` 플래그는 기존 복제 구성을 덮어쓰지 못하게 하고 새 복제본을 구성에 추가합니다.
  ```shell
  (replica2)$ ghe-repl-setup --add PRIMARY_IP
  (replica2)$ ghe-repl-start
  ```
3. 기본적으로 복제본은 동일한 데이터 센터로 구성되며, 이제 동일한 데이터 센터의 기존 노드에서 시드를 시도합니다. 데이터 센터 옵션에 대해 다른 값을 설정하여 다른 데이터 센터에 대한 복제본을 구성합니다. 값이 서로 다르다면 원하는 특정 값을 사용할 수 있습니다. 각 노드에서 `ghe-repl-node` 명령을 실행하고 데이터 센터를 지정합니다.

  기본:
  ```shell
  (primary)$ ghe-repl-node --datacenter [PRIMARY DC NAME]
  ```
  첫 번째 복제본:
  ```shell
  (replica1)$ ghe-repl-node --datacenter [FIRST REPLICA DC NAME]
  ```
  두 번째 복제본:
  ```shell
  (replica2)$ ghe-repl-node --datacenter [SECOND REPLICA DC NAME]
  ```
  {% tip %}

  **팁:** `--datacenter` 및 `--active` 옵션을 동시에 설정할 수 있습니다.

  {% endtip %}
4. 활성 복제본 노드는 어플라이언스 데이터 및 서비스 최종 사용자 요청의 복사본을 저장합니다. 비활성 노드는 어플라이언스 데이터의 복사본을 저장하지만 최종 사용자 요청을 처리할 수 없습니다. `--active` 플래그를 사용하여 활성 모드를 사용하도록 설정하거나 `--inactive` 플래그를 사용하여 비활성 모드를 사용하도록 설정합니다.

  첫 번째 복제본:
  ```shell
  (replica1)$ ghe-repl-node --active
  ```
  두 번째 복제본:
  ```shell
  (replica2)$ ghe-repl-node --active
  ```
5. 구성을 적용하려면 기본에서 `ghe-config-apply` 명령을 사용합니다.
  ```shell
  (primary)$ ghe-config-apply
  ```

## 지역 복제를 위한 DNS 구성

기본 및 복제본 노드의 IP 주소를 사용하여 지역 DNS를 구성합니다. 기본 노드(예: `primary.github.example.com`)에 대한 DNS CNAME을 만들어 SSH를 통해 기본 노드에 액세스하거나 `backup-utils`를 통해 백업할 수도 있습니다.

테스트를 위해 로컬 워크스테이션의 `hosts` 파일(예: `/etc/hosts`)에 항목을 추가할 수 있습니다. 예제 항목은 `replica2`로 `HOSTNAME`에 대한 요청을 확인합니다. 다른 줄을 주석으로 처리하여 특정 호스트를 대상으로 지정할 수 있습니다.

```
# <primary IP>      HOSTNAME 
# <replica1 IP>     HOSTNAME 
<replica2 IP>     HOSTNAME 
```

## 추가 참고 자료

- “[고가용성 구성 정보](/enterprise/admin/guides/installation/about-high-availability-configuration)”
- “[복제 관리용 유틸리티](/enterprise/admin/guides/installation/about-high-availability-configuration/#utilities-for-replication-management)”
- “[지역 복제 정보](/enterprise/admin/guides/installation/about-geo-replication/)”

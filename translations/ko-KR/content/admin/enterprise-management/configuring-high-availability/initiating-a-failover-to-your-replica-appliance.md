---
title: 복제본 어플라이언스로 장애 조치(failover) 시작
intro: '유지 관리 및 테스트를 위해 명령줄을 사용하거나 기본 어플라이언스가 실패하는 경우 {% data variables.product.prodname_ghe_server %} 복제본 어플라이언스로 장애 조치할 수 있습니다.'
redirect_from:
  - /enterprise/admin/installation/initiating-a-failover-to-your-replica-appliance
  - /enterprise/admin/enterprise-management/initiating-a-failover-to-your-replica-appliance
  - /admin/enterprise-management/initiating-a-failover-to-your-replica-appliance
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - High availability
  - Infrastructure
shortTitle: Initiate failover to appliance
ms.openlocfilehash: b27d925f5b9ecf35da9ba55633e312e8c9fb94e4
ms.sourcegitcommit: 5f40f9341dd1e953f4be8d1642f219e628e00cc8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/04/2022
ms.locfileid: '148008887'
---
장애 조치(failover)에 필요한 시간은 복제본을 수동으로 승격하고 트래픽을 리디렉션하는 데 걸리는 시간에 따라 달라집니다. 평균 시간 범위는 20~30분입니다.

{% data reusables.enterprise_installation.promoting-a-replica %}

1. 기본 어플라이언스를 사용할 수 있는 경우 어플라이언스를 전환하기 전에 복제를 완료할 수 있도록 기본 어플라이언스에서 이를 유지 관리 모드로 전환합니다.

    - 어플라이언스를 유지 관리 모드로 전환합니다.

       - 관리 콘솔을 사용하려면 “[유지 관리 모드 사용 및 예약](/enterprise/admin/guides/installation/enabling-and-scheduling-maintenance-mode/)”을 참조하세요.

       - `ghe-maintenance -s` 명령을 사용할 수도 있습니다.
         ```shell
         $ ghe-maintenance -s
         ```

   - 활성 Git 작업 수, MySQL 쿼리, Resque 작업 수가 0에 도달하면 30초 동안 기다립니다. 

      {% note %}

      **참고:** Nomad는 유지 관리 모드에서도 항상 작업이 실행되므로 이러한 작업을 안전하게 무시할 수 있습니다.
    
      {% endnote %}

   - 모든 복제 채널 보고서가 `OK`인지 확인하려면 `ghe-repl-status -vv` 명령을 사용합니다.

      ```shell
      $ ghe-repl-status -vv
      ```

4. 복제본 어플라이언스에서 복제를 중지하고 복제본 어플라이언스 수준을 기본 상태로 올리려면 `ghe-repl-promote` 명령을 사용합니다. 또한 연결할 수 있는 경우 기본 노드가 자동으로 유지 관리 모드가 됩니다.
  ```shell
  $ ghe-repl-promote
  ```
5. 복제본의 IP 주소를 가리키도록 DNS 레코드를 업데이트합니다. 트래픽은 TTL 기간이 경과한 후 복제본으로 전달됩니다. 부하 분산 장치를 사용하는 경우 복제본에 트래픽을 보내도록 구성되어 있는지 확인합니다.
6. 정상적인 작업을 다시 시작할 수 있음을 사용자에게 알립니다.
7. 원하는 경우 새 기본 어플라이언스에서 기존 어플라이언스 및 이전 기본 어플라이언스로의 복제를 설정합니다. 자세한 내용은 “[고가용성 구성 정보](/enterprise/admin/guides/installation/about-high-availability-configuration/#utilities-for-replication-management)”를 참조하세요.
8. 장애 조치(failover) 전에 고가용성 구성의 일부였던 복제를 설정하지 않으려는 어플라이언스는 UUID를 사용하여 고가용성 구성에서 제거해야 합니다.
    - `cat /data/user/common/uuid`를
      ```shell
      $ cat /data/user/common/uuid
      ```
    - 새 기본에서 `ghe-repl-teardown`을 사용하여 UUID를 제거합니다. *`UUID`* 을 이전 단계에서 검색한 UUID로 바꾸세요.
      ```shell
      $ ghe-repl-teardown -u  UUID
      ```

## 추가 참고 자료

- “[복제 관리용 유틸리티](/enterprise/admin/guides/installation/about-high-availability-configuration/#utilities-for-replication-management)”

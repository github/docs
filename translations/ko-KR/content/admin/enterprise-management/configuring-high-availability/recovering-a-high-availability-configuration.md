---
title: 고가용성 구성 복구
intro: '{% data variables.product.prodname_ghe_server %} 어플라이언스로 장애 조치(failover)한 후에는 단일 어플라이언스에 의존하는 대신 최대한 빨리 중복성을 복구해야 합니다.'
redirect_from:
  - /enterprise/admin/installation/recovering-a-high-availability-configuration
  - /enterprise/admin/enterprise-management/recovering-a-high-availability-configuration
  - /admin/enterprise-management/recovering-a-high-availability-configuration
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - High availability
  - Infrastructure
shortTitle: Recover a HA configuration
ms.openlocfilehash: 5ca63dc97633208cacd1991bd171a065f2c07205
ms.sourcegitcommit: 5f40f9341dd1e953f4be8d1642f219e628e00cc8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/04/2022
ms.locfileid: '148008884'
---
## 고가용성 구성에 대한 복구 정보

장애 조치(failover)가 계획되었거나 어플라이언스의 상태와 관련이 없는 경우 이전 주 어플라이언스는 새 복제본 어플라이언스로 사용할 수 있습니다. 장애 조치가 주 어플라이언스와 관련된 경우 새 복제본 어플라이언스를 만드는 것이 좋습니다. 자세한 내용은 “[고가용성 복제본 만들기](/enterprise/admin/guides/installation/creating-a-high-availability-replica/)”를 참조하세요.

{% warning %}

**경고:** 이전 주 어플라이언스를 새 복제본으로 구성하기 전에 유지 관리 모드를 사용하도록 설정해야 합니다. 유지 관리 모드를 사용하도록 설정하지 않으면 프로덕션 중단이 발생합니다.

{% endwarning %}

## 이전 주 어플라이언를 새 복제본으로 구성

1. SSH를 사용하여 이전 주 어플라이언스의 IP 주소로 연결합니다.
  ```shell
  $ ssh -p 122 admin@ FORMER_PRIMARY_IP 
  ```
1. 이전 주 어플라이언스에서 유지 관리 모드를 사용하도록 설정합니다. 자세한 내용은 “[유지 관리 모드 사용 및 예약](/admin/configuration/configuring-your-enterprise/enabling-and-scheduling-maintenance-mode)”을 참조하세요.
1. 이전 주 어플라이언스에서 이전 복제본의 IP 주소를 사용하여 `ghe-repl-setup`을 실행합니다.
  ```shell
  $ ghe-repl-setup  FORMER_REPLICA_IP 
  ```
{% data reusables.enterprise_installation.add-ssh-key-to-primary %}
1. 새 주 복제본에 대한 연결을 확인하고 새 복제본에 대해 복제본 모드를 사용하도록 설정하려면 `ghe-repl-setup`을 다시 실행합니다.
  ```shell
  $ ghe-repl-setup  FORMER_REPLICA_IP 
  ```
{% data reusables.enterprise_installation.replication-command %}

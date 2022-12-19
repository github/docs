---
title: 클러스터 노드 모니터링
intro: '{% data variables.product.prodname_ghe_server %} 클러스터는 둘 이상의 노드에 분산된 중복 서비스로 구성됩니다. 개별 서비스 또는 전체 노드가 실패한다고 해도 클러스터 사용자에게 즉시 효과가 나타나서는 안 됩니다. 그러나 성능 및 중복성이 영향을 받으므로 {% data variables.product.prodname_ghe_server %} 클러스터의 상태를 모니터링하는 것이 중요합니다.'
redirect_from:
  - /enterprise/admin/clustering/monitoring-cluster-nodes
  - /enterprise/admin/enterprise-management/monitoring-cluster-nodes
  - /admin/enterprise-management/monitoring-cluster-nodes
versions:
  ghes: '*'
type: how_to
topics:
  - Clustering
  - Enterprise
  - Fundamentals
  - Infrastructure
  - Monitoring
  - Performance
ms.openlocfilehash: b6dd89aac6a81ce5c00dc053847c8fb996523914
ms.sourcegitcommit: 5f40f9341dd1e953f4be8d1642f219e628e00cc8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/04/2022
ms.locfileid: '148008890'
---
## 수동으로 클러스터 상태 검사

{% data variables.product.prodname_ghe_server %}에는 클러스터 상태를 모니터링하기 위한 기본 제공 명령줄 유틸리티가 있습니다. 관리 셸에서 `ghe-cluster-status` 명령을 실행하면 연결 및 서비스 상태 확인을 포함하여 각 노드에서 일련의 상태 검사가 실행됩니다. `ok` 또는 `error` 텍스트를 비롯한 모든 테스트 결과가 출력에 표시됩니다. 예를 들어 실패한 테스트만 표시하려면 다음을 실행합니다.

```shell
admin@ghe-data-node-0:~$ ghe-cluster-status | grep error
> mysql-replication ghe-data-node-0: error Stopped
> mysql cluster: error
```
{% note %}

**참고:** 실패한 테스트가 없으면 이 명령은 출력을 생성하지 않습니다. 이 경우 클러스터가 정상임을 나타냅니다.

{% endnote %}

## Nagios를 사용하여 클러스터 상태 모니터링

{% data variables.product.prodname_ghe_server %}를 모니터링하도록 [Nagios](https://www.nagios.org/)를 구성할 수 있습니다. 각 클러스터 노드에 대한 기본 연결을 모니터링하는 것 외에도 `ghe-cluster-status -n` 명령을 사용하도록 Nagios를 구성하여 클러스터 상태를 검사할 수 있습니다. 이렇게 하면 Nagios에서 이해할 수 있는 형식으로 출력이 반환됩니다.

### 필수 조건
* Nagios를 실행하는 Linux 호스트
* {% data variables.product.prodname_ghe_server %} 클러스터에 대한 네트워크 액세스

### Nagios 호스트 구성
1. 빈 암호로 SSH 키를 생성합니다. Nagios는 이 키를 사용하여 {% data variables.product.prodname_ghe_server %} 클러스터에 인증합니다.
  ```shell
  nagiosuser@nagios:~$ ssh-keygen -t ed25519
  > Generating public/private ed25519 key pair.
  > Enter file in which to save the key (/home/nagiosuser/.ssh/id_ed25519):
  > Enter passphrase (empty for no passphrase): LEAVE BLANK BY PRESSING ENTER
  > Enter same passphrase again: PRESS ENTER AGAIN
  > Your identification has been saved in /home/nagiosuser/.ssh/id_ed25519.
  > Your public key has been saved in /home/nagiosuser/.ssh/id_ed25519.pub.
  ```
  {% danger %}

  **보안 경고:** 암호가 없는 SSH 키는 호스트에 대한 모든 권한이 부여된 경우 보안 위험을 초래할 수 있습니다. 이 키의 권한 부여를 단일 읽기 전용 명령으로 제한합니다.

  {% enddanger %} {% note %}

  **참고:** Ed25519 알고리즘을 지원하지 않는 Linux 배포를 사용하는 경우 다음 명령을 사용합니다.
  ```shell
  nagiosuser@nagios:~$ ssh-keygen -t rsa -b 4096
  ```

  {% endnote %}
2. 프라이빗 키(`id_ed25519`)를 `nagios` 홈 폴더에 복사하고 적절한 소유권을 설정합니다.
  ```shell
  nagiosuser@nagios:~$ sudo cp .ssh/id_ed25519 /var/lib/nagios/.ssh/
  nagiosuser@nagios:~$ sudo chown nagios:nagios /var/lib/nagios/.ssh/id_ed25519
  ```

3. 퍼블릭 키에 `ghe-cluster-status -n` 명령 실행 ‘권한만’ 부여하려면 `/data/user/common/authorized_keys` 파일에서 `command=` 접두사를 사용합니다. 임의 노드의 관리 셸에서 이 파일을 수정하여 1단계에서 생성된 퍼블릭 키를 추가합니다. 예: `command="/usr/local/bin/ghe-cluster-status -n" ssh-ed25519 AAAA....`

4. `/data/user/common/authorized_keys` 파일을 수정한 노드에서 `ghe-cluster-config-apply`를 실행하여 구성의 유효성을 검사하고 클러스터의 각 노드에 구성을 복사합니다.

  ```shell
  admin@ghe-data-node-0:~$ ghe-cluster-config-apply
  > Validating configuration
  > ...
  > Finished cluster configuration
  ```

5. Nagios 플러그 인이 명령을 성공적으로 실행할 수 있는지 테스트하려면 Nagios 호스트에서 대화형으로 명령을 실행합니다.
  ```shell
  nagiosuser@nagios:~$ /usr/lib/nagios/plugins/check_by_ssh -l admin -p 122 -H HOSTNAME -C "ghe-cluster-status -n" -t 30
  > OK - No errors detected
  ```

6. Nagios 구성에서 명령 정의를 만듭니다.
  ###### 정의 예제

  ```
  define command {
        command_name    check_ssh_ghe_cluster
        command_line    $USER1$/check_by_ssh -H $HOSTADDRESS$ -C "ghe-cluster-status -n" -l admin -p 122 -t 30
  }
  ```
7. {% data variables.product.prodname_ghe_server %} 클러스터의 노드에 대한 서비스 정의에 이 명령을 추가합니다.

  ###### 정의 예제

  ```
  define host{
        use                     generic-host
        host_name               ghe-data-node-0
        alias                   ghe-data-node-0
        address                 10.11.17.180
        }

  define service{
          use                             generic-service
          host_name                       ghe-data-node-0
          service_description             GitHub Cluster Status
          check_command                   check_ssh_ghe_cluster
          }
  ```

Nagios에 정의를 추가하면 구성에 따라 서비스 검사가 실행됩니다. Nagios 웹 인터페이스에서 새로 구성된 서비스를 확인할 수 있습니다.

![Nagios 예제](/assets/images/enterprise/cluster/nagios-example.png)

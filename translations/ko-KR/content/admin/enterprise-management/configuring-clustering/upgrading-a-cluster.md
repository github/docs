---
title: 클러스터 업그레이드
intro: '관리 셸(SSH)을 사용하여 {% data variables.product.prodname_ghe_server %} 클러스터를 최신 릴리스로 업그레이드합니다.'
redirect_from:
  - /enterprise/admin/clustering/upgrading-a-cluster
  - /enterprise/admin/enterprise-management/upgrading-a-cluster
  - /admin/enterprise-management/upgrading-a-cluster
versions:
  ghes: '*'
type: how_to
topics:
  - Clustering
  - Enterprise
  - Upgrades
ms.openlocfilehash: fb098009acf64e92a3fa41a4be487c5503ec7cf2
ms.sourcegitcommit: 5f40f9341dd1e953f4be8d1642f219e628e00cc8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/04/2022
ms.locfileid: '148008878'
---
## 핫패치를 사용하여 업그레이드
{% data reusables.enterprise_installation.hotpatching-explanation %} 핫패치 설치 스크립트는 클러스터의 모든 노드에 핫패치를 설치하고, 가동 중지 시간을 방지하기 위해 적절한 순서로 서비스를 다시 시작합니다.

1. [{% data variables.product.prodname_enterprise_backup_utilities %}](https://github.com/github/backup-utils#readme)를 사용하여 데이터를 백업합니다.
2. 임의 노드의 관리 셸에서 `ghe-cluster-hotpatch` 명령을 사용하여 최신 핫패치를 설치합니다. 핫패치에 URL을 제공하거나, 수동으로 핫패치를 다운로드하고 로컬 파일 이름을 지정할 수 있습니다.
  ```shell
  $ ghe-cluster-hotpatch https://HOTPATCH-URL/FILENAME.hpkg
  ```

## 업그레이드 패키지를 사용하여 업그레이드
업그레이드 패키지를 사용하여 {% data variables.product.prodname_ghe_server %} 클러스터를 최신 기능 릴리스로 업그레이드합니다. 예를 들어 `2.11`에서 `2.13`으로 업그레이드할 수 있습니다.

### 업그레이드 준비

1. 업그레이드할 대상 버전의 [클러스터 네트워크 구성](/enterprise/admin/guides/clustering/cluster-network-configuration)을 검토하고 필요에 따라 사용 중인 구성을 업데이트합니다.
2. [{% data variables.product.prodname_enterprise_backup_utilities %}](https://github.com/github/backup-utils#readme)를 사용하여 데이터를 백업합니다.
3. 업그레이드하는 동안 정상적으로 사용할 수 없으므로 {% data variables.product.prodname_ghe_server %} 클러스터의 최종 사용자를 위해 유지 관리 기간을 예약합니다. 유지 관리 모드는 클러스터 업그레이드가 진행되는 동안 사용자 액세스를 차단하고 데이터 변경을 방지합니다.
4. [{% data variables.product.prodname_ghe_server %} 다운로드 페이지](https://enterprise.github.com/download)에서 업그레이드 *.pkg* 파일의 URL을 클립보드에 복사합니다.
5. 임의 노드의 관리 셸에서 `curl`과 결합된 `ghe-cluster-each` 명령을 사용하여 단일 단계로 각 노드에 릴리스 패키지를 다운로드합니다. 이전 단계에서 복사한 URL을 인수로 사용합니다.
  ```shell
  $ ghe-cluster-each -- "cd /home/admin && curl -L -O  https://PACKAGE-URL.pkg"
  > ghe-app-node-1:   % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  > ghe-app-node-1:                                  Dload  Upload   Total   Spent    Left  Speed
  > 100  496M  100  496M    0     0  24.2M      0  0:00:20  0:00:20 --:--:-- 27.4M
  > ghe-data-node-2:   % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  > ghe-data-node-2:                                  Dload  Upload   Total   Spent    Left  Speed
  > 100  496M  100  496M    0     0  21.3M      0  0:00:23  0:00:23 --:--:-- 25.8M
  > ghe-data-node-1:   % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  > ghe-data-node-1:                                  Dload  Upload   Total   Spent    Left  Speed
  > 100  496M  100  496M    0     0  19.7M      0  0:00:25  0:00:25 --:--:-- 25.6M
  > ghe-app-node-2:   % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  > ghe-app-node-2:                                  Dload  Upload   Total   Spent    Left  Speed
  > 100  496M  100  496M    0     0  19.8M      0  0:00:25  0:00:25 --:--:-- 17.6M
  > ghe-data-node-3:   % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  > ghe-data-node-3:                                  Dload  Upload   Total   Spent    Left  Speed
  > 100  496M  100  496M    0     0  19.7M      0  0:00:25  0:00:25 --:--:-- 25.5M
  ```
6. `cluster.conf`에서 `mysql-master = <hostname>`으로 정의된 주 MySQL 노드를 식별합니다. 이 노드가 마지막으로 업그레이드됩니다.

### 클러스터 노드 업그레이드

1. 임의 클러스터 노드의 관리 셸에 연결하고 `ghe-cluster-maintenance -s`를 실행하여 예약된 기간에 따라 유지 관리 모드를 사용하도록 설정합니다.
2. **주 MySQL 노드를 제외하고** 각 {% data variables.product.prodname_ghe_server %} 노드의 관리 셸에 연결합니다.
`ghe-upgrade`업그레이드 준비[의 4단계에서 다운로드한 패키지 파일 이름을 제공하여 ](#preparing-to-upgrade) 명령을 실행합니다.
  ```shell
  $ ghe-upgrade PACKAGE-FILENAME.pkg
  > *** verifying upgrade package signature...
  >  497MB 0:00:04 [ 117MB/s] [==========================================>] 100%            
  > gpg: Signature made Fri 19 Feb 2016 02:33:50 PM UTC using RSA key ID 0D65D57A
  > gpg: checking the trustdb
  > gpg: 3 marginal(s) needed, 1 complete(s) needed, PGP trust model
  > gpg: depth: 0  valid:   1  signed:   0  trust: 0-, 0q, 0n, 0m, 0f, 1u
  > gpg: Good signature from "GitHub Enterprise (Upgrade Package Key) > <enterprise@github.com>"
  ```
3. 업그레이드 프로세스가 완료되면 노드가 다시 부팅됩니다. 다시 부팅된 후 각 노드에 `ping`을 사용할 수 있는지 확인합니다.
4. 주 MySQL 노드의 관리 셸에 연결합니다. `ghe-upgrade`업그레이드 준비[의 4단계에서 다운로드한 패키지 파일 이름을 제공하여 ](#preparing-to-upgrade) 명령을 실행합니다.
  ```shell
  $ ghe-upgrade PACKAGE-FILENAME.pkg
  > *** verifying upgrade package signature...
  >  497MB 0:00:04 [ 117MB/s] [==========================================>] 100%            
  > gpg: Signature made Fri 19 Feb 2016 02:33:50 PM UTC using RSA key ID 0D65D57A
  > gpg: checking the trustdb
  > gpg: 3 marginal(s) needed, 1 complete(s) needed, PGP trust model
  > gpg: depth: 0  valid:   1  signed:   0  trust: 0-, 0q, 0n, 0m, 0f, 1u
  > gpg: Good signature from "GitHub Enterprise (Upgrade Package Key) > <enterprise@github.com>"
  ```
5. 업그레이드 프로세스가 완료되면 주 MySQL 노드가 다시 부팅됩니다. 다시 부팅된 후 각 노드에 `ping`을 사용할 수 있는지 확인합니다.{% ifversion ghes %}
6. 주 MySQL 노드의 관리 셸에 연결하고 `ghe-cluster-config-apply` 명령을 실행합니다.
7. `ghe-cluster-config-apply`가 완료되면 `ghe-cluster-status`를 실행하여 서비스가 정상 상태인지 확인합니다.{% endif %}
8. 임의 노드의 관리 셸에서 `ghe-cluster-maintenance -u`를 실행하여 유지 관리 모드를 종료합니다.

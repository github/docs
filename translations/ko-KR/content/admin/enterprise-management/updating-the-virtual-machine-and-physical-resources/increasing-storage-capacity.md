---
title: 스토리지 용량 늘리기
intro: 'Git 리포지토리, 데이터베이스, 검색 인덱스 및 기타 영구 애플리케이션 데이터에 사용할 수 있는 스토리지 크기를 늘리거나 변경할 수 있습니다.'
redirect_from:
  - /enterprise/admin/installation/increasing-storage-capacity
  - /enterprise/admin/enterprise-management/increasing-storage-capacity
  - /admin/enterprise-management/increasing-storage-capacity
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Infrastructure
  - Performance
  - Storage
shortTitle: Increase storage capacity
ms.openlocfilehash: bdf8819d295dae4a93e03ca0381a1c0eed93943d
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/20/2022
ms.locfileid: '148098765'
---
{% data reusables.enterprise_installation.warning-on-upgrading-physical-resources %}

더 많은 사용자가 {% 데이터 variables.location.product_location %}에 가입하면 스토리지 볼륨의 크기를 조정해야 할 수 있습니다. 스토리지 크기 조정에 대한 자세한 내용은 가상화 플랫폼에 대한 설명서를 참조하세요.

## 요구 사항 및 권장 사항

{% note %}

**참고:** 스토리지 볼륨의 크기를 조정하기 전에 인스턴스를 유지 관리 모드로 전환합니다.{% ifversion ip-exception-list %} 지정된 IP 주소의 액세스를 허용하도록 IP 예외 목록을 구성하여 변경 내용의 유효성을 검사할 수 있습니다. {% endif %} 자세한 내용은 “[유지 관리 모드 사용 및 예약](/enterprise/admin/guides/installation/enabling-and-scheduling-maintenance-mode)”을 참조하세요.

{% endnote %}

### 최소 요구 사항

{% data reusables.enterprise_installation.hardware-rec-table %}

## 데이터 파티션 크기 늘리기

1. 가상화 플랫폼의 도구를 사용하여 기존 사용자 볼륨 디스크의 크기를 조정합니다.
{% data reusables.enterprise_installation.ssh-into-instance %}
3. 어플라이언스를 유지 관리 모드로 전환합니다. 자세한 내용은 “[유지 관리 모드 사용 및 예약](/enterprise/admin/guides/installation/enabling-and-scheduling-maintenance-mode)”을 참조하세요.
4. 어플라이언스를 다시 부팅하여 새 스토리지 할당 검색:
  ```shell
  $ sudo reboot
  ```
5. `ghe-storage-extend` 명령을 실행하여 `/data/user` 파일 시스템을 확장합니다.
  ```shell
  $ ghe-storage-extend
  ```

## 새 어플라이언스로 루트 파티션 크기 늘리기

1. 현재 어플라이언스와 동일한 버전을 사용하여 더 큰 루트 디스크가 있는 새 {% data variables.product.prodname_ghe_server %} 인스턴스를 설정합니다. 자세한 내용은 “[{% data variables.product.prodname_ghe_server %} 인스턴스 설정](/enterprise/admin/guides/installation/setting-up-a-github-enterprise-server-instance)”을 참조하세요.
2. 현재 어플라이언스 종료:
  ```shell
  $ sudo poweroff
  ```
3. 가상화 플랫폼의 도구를 사용하여 현재 어플라이언스에서 데이터 디스크를 분리합니다.
4. 더 큰 루트 디스크를 사용하여 데이터 디스크를 새 어플라이언스로 연결합니다.

## 기존 어플라이언스로 루트 파티션 크기 늘리기

{% warning %}

**경고:** 루트 파티션 크기를 늘리기 전에 인스턴스를 유지 관리 모드로 전환해야 합니다. 자세한 내용은 “[유지 관리 모드 사용 및 예약](/enterprise/admin/guides/installation/enabling-and-scheduling-maintenance-mode)”을 참조하세요.

{% endwarning %}

1. {% data variables.product.prodname_ghe_server %} 어플라이언스로 새 디스크를 연결합니다.
1. `lsblk` 명령을 실행하여 새 디스크의 디바이스 이름을 식별합니다.
1. `parted` 명령을 실행하여 디스크를 포맷하고 디바이스 이름을 `/dev/xvdg`로 바꿉니다.
  ```shell
  $ sudo parted /dev/xvdg mklabel msdos
  $ sudo parted /dev/xvdg mkpart primary ext4 0% 50%
  $ sudo parted /dev/xvdg mkpart primary ext4 50% 100%
  ```
1. 복제를 중지하려면 `ghe-repl-stop` 명령을 실행합니다.

   ```shell
   $ ghe-repl-stop
   ```
   
1. `ghe-upgrade` 명령을 실행하여 새로 분할된 디스크에 플랫폼별 전체 패키지를 설치합니다. 유니버설 핫패치 업그레이드 패키지(예: `github-enterprise-2.11.9.hpkg`)는 예상대로 작동하지 않습니다. `ghe-upgrade` 명령이 완료되면 애플리케이션 서비스가 자동으로 종료됩니다.

  ```shell
  $ ghe-upgrade PACKAGE-NAME.pkg -s -t /dev/xvdg1
  ```
1. 애플리케이션 종료:
  ```shell
  $ sudo poweroff
  ```
1. 하이퍼바이저에서 이전 루트 디스크를 제거하고 이전 루트 디스크와 동일한 위치에 새 루트 디스크를 연결합니다.
1. 어플라이언스를 시작합니다.
1. 시스템 서비스가 제대로 작동하는지 확인하고 유지 관리 모드를 해제합니다. 자세한 내용은 “[유지 관리 모드 사용 및 예약](/admin/guides/installation/enabling-and-scheduling-maintenance-mode)”을 참조하세요.

어플라이언스가 고가용성 또는 지역 복제를 위해 구성된 경우 모든 노드의 스토리지가 업그레이드된 후 `ghe-repl-start`를 사용하여 각 복제본 노드에서 복제를 시작해야 합니다.

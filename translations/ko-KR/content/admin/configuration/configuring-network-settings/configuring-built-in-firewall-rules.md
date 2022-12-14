---
title: 기본 제공 방화벽 규칙 구성
intro: '기본 방화벽 규칙을 보고 {% 데이터 variables.location.product_location %}에 대한 규칙을 사용자 지정할 수 있습니다.'
redirect_from:
  - /enterprise/admin/guides/installation/configuring-firewall-settings
  - /enterprise/admin/installation/configuring-built-in-firewall-rules
  - /enterprise/admin/configuration/configuring-built-in-firewall-rules
  - /admin/configuration/configuring-built-in-firewall-rules
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Fundamentals
  - Infrastructure
  - Networking
shortTitle: Configure firewall rules
ms.openlocfilehash: d91ca39c379454bf4cdebedf7085af38faf756f2
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/20/2022
ms.locfileid: '148098327'
---
## {% 데이터 variables.location.product_location %}의 방화벽 정보

{% data variables.product.prodname_ghe_server %}는 가상 어플라이언스에서 Ubuntu의 UFW(복잡하지 않은 방화벽)를 사용합니다. 자세한 내용은 Ubuntu 설명서의 “[UFW](https://help.ubuntu.com/community/UFW)”를 참조하세요. {% data variables.product.prodname_ghe_server %}는 각 릴리스에서 허용되는 서비스의 방화벽 허용 목록을 자동으로 업데이트합니다.

{% data variables.product.prodname_ghe_server %}를 설치하면 모든 필수 네트워크 포트가 자동으로 열리고 연결이 허용됩니다. 필요하지 않은 모든 포트는 자동으로 `deny`로 구성되고 기본 발신 정책은 `allow`로 구성됩니다. 상태 저장 추적은 모든 새 연결에 대해 사용하도록 설정됩니다. 일반적으로 `SYN` 비트 집합이 있는 네트워크 패킷입니다. 자세한 내용은 “[네트워크 포트](/enterprise/admin/guides/installation/network-ports)”를 참조하세요.

UFW 방화벽은 {% data variables.product.prodname_ghe_server %}가 제대로 작동하는 데 필요한 다른 여러 가지 포트도 엽니다. UFW 규칙 집합에 대한 자세한 내용은 [UFW README](https://bazaar.launchpad.net/~jdstrand/ufw/0.30-oneiric/view/head:/README#L213)를 참조하세요.

## 기본 방화벽 규칙 보기

{% data reusables.enterprise_installation.ssh-into-instance %}
2. 기본 방화벽 규칙을 보려면 `sudo ufw status` 명령을 사용합니다. 다음과 유사한 출력이 표시됩니다.
  ```shell
  $ sudo ufw status
  > Status: active
  > To                         Action      From
  > --                         ------      ----
  > ghe-1194                   ALLOW       Anywhere
  > ghe-122                    ALLOW       Anywhere
  > ghe-161                    ALLOW       Anywhere
  > ghe-22                     ALLOW       Anywhere
  > ghe-25                     ALLOW       Anywhere
  > ghe-443                    ALLOW       Anywhere
  > ghe-80                     ALLOW       Anywhere
  > ghe-8080                   ALLOW       Anywhere
  > ghe-8443                   ALLOW       Anywhere
  > ghe-9418                   ALLOW       Anywhere
  > ghe-1194 (v6)              ALLOW       Anywhere (v6)
  > ghe-122 (v6)               ALLOW       Anywhere (v6)
  > ghe-161 (v6)               ALLOW       Anywhere (v6)
  > ghe-22 (v6)                ALLOW       Anywhere (v6)
  > ghe-25 (v6)                ALLOW       Anywhere (v6)
  > ghe-443 (v6)               ALLOW       Anywhere (v6)
  > ghe-80 (v6)                ALLOW       Anywhere (v6)
  > ghe-8080 (v6)              ALLOW       Anywhere (v6)
  > ghe-8443 (v6)              ALLOW       Anywhere (v6)
  > ghe-9418 (v6)              ALLOW       Anywhere (v6)
  ```

## 사용자 지정 방화벽 규칙 추가

{% warning %}

**경고:** 사용자 지정 방화벽 규칙을 추가하기 전에 알려진 작업 상태로 재설정해야 하는 경우 현재 규칙을 백업합니다. 서버에서 잠긴 경우 {% data variables.contact.contact_ent_support %}에 문의하여 원본 방화벽 규칙을 다시 구성합니다. 원본 방화벽 규칙을 복원하려면 서버에 대한 가동 중지 시간이 필요합니다.

{% endwarning %}

1. 사용자 지정 방화벽 규칙 구성
2. `status numbered` 명령을 사용하여 각각의 새 규칙 상태를 확인합니다.
  ```shell
  $ sudo ufw status numbered
  ```
3. 사용자 지정 방화벽 규칙을 백업하려면 `cp` 명령을 사용하여 규칙을 새 파일로 이동합니다.
  ```shell
  $ sudo cp -r /etc/ufw ~/ufw.backup
  ```

{% 데이터 variables.location.product_location %}을(를) 업그레이드한 후 사용자 지정 방화벽 규칙을 다시 적용해야 합니다. 방화벽 사용자 지정 규칙을 다시 적용하는 스크립트를 만드는 것이 좋습니다.

## 기본 방화벽 규칙 복원

방화벽 규칙을 변경한 후 문제가 발생하는 경우 원본 백업에서 규칙을 다시 설정할 수 있습니다.

{% warning %}

**경고:** 방화벽을 변경하기 전에 원본 규칙을 백업하지 않은 경우 {% data variables.contact.contact_ent_support %}에 문의하여 추가 지원을 받으세요.

{% endwarning %}

{% data reusables.enterprise_installation.ssh-into-instance %}
2. 이전 백업 규칙을 복원하려면 `cp` 명령을 사용하여 이전 백업 규칙을 다시 방화벽에 복사합니다.
  ```shell
  $ sudo cp -f ~/ufw.backup/*rules /etc/ufw
  ```
3. `systemctl` 명령을 사용하여 방화벽을 다시 시작합니다.
  ```shell
  $ sudo systemctl restart ufw
  ```
4. `ufw status` 명령을 사용하여 규칙이 기본값으로 돌아왔는지 확인합니다.
  ```shell
  $ sudo ufw status
  > Status: active
  > To                         Action      From
  > --                         ------      ----
  > ghe-1194                   ALLOW       Anywhere
  > ghe-122                    ALLOW       Anywhere
  > ghe-161                    ALLOW       Anywhere
  > ghe-22                     ALLOW       Anywhere
  > ghe-25                     ALLOW       Anywhere
  > ghe-443                    ALLOW       Anywhere
  > ghe-80                     ALLOW       Anywhere
  > ghe-8080                   ALLOW       Anywhere
  > ghe-8443                   ALLOW       Anywhere
  > ghe-9418                   ALLOW       Anywhere
  > ghe-1194 (v6)              ALLOW       Anywhere (v6)
  > ghe-122 (v6)               ALLOW       Anywhere (v6)
  > ghe-161 (v6)               ALLOW       Anywhere (v6)
  > ghe-22 (v6)                ALLOW       Anywhere (v6)
  > ghe-25 (v6)                ALLOW       Anywhere (v6)
  > ghe-443 (v6)               ALLOW       Anywhere (v6)
  > ghe-80 (v6)                ALLOW       Anywhere (v6)
  > ghe-8080 (v6)              ALLOW       Anywhere (v6)
  > ghe-8443 (v6)              ALLOW       Anywhere (v6)
  > ghe-9418 (v6)              ALLOW       Anywhere (v6)
  ```

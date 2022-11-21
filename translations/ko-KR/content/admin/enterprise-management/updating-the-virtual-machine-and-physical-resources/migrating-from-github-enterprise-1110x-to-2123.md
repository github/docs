---
title: GitHub Enterprise 11.10.x에서 2.1.23으로 마이그레이션
redirect_from:
  - /enterprise/admin/installation/migrating-from-github-enterprise-1110x-to-2123
  - /enterprise/admin-guide/migrating
  - /enterprise/admin/articles/migrating-github-enterprise
  - /enterprise/admin/guides/installation/migrating-from-github-enterprise-v11-10-34x
  - /enterprise/admin/articles/upgrading-to-a-newer-release
  - /enterprise/admin/guides/installation/migrating-to-a-different-platform-or-from-github-enterprise-11-10-34x
  - /enterprise/admin/guides/installation/migrating-from-github-enterprise-11-10-x-to-2-1-23
  - /enterprise/admin/enterprise-management/migrating-from-github-enterprise-1110x-to-2123
  - /admin/enterprise-management/migrating-from-github-enterprise-1110x-to-2123
intro: '{% data variables.product.prodname_enterprise %} 11.10.x에서 2.1.23으로 마이그레이션하려면 새 어플라이언스 인스턴스를 설정하고 이전 인스턴스에서 데이터를 마이그레이션해야 합니다.'
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Migration
  - Upgrades
shortTitle: Migrate from 11.10.x to 2.1.23
ms.openlocfilehash: 4dcd93b41d8edc75388d34785c4c149d6627cc5e
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/05/2022
ms.locfileid: '146332602'
---
{% data variables.product.prodname_enterprise %} 11.10.348 이상에서 마이그레이션이 지원됩니다. {% data variables.product.prodname_enterprise %} 11.10.348 이전 버전에서 마이그레이션하는 것은 지원되지 않습니다. 먼저 여러 업그레이드를 통해 11.10.348로 업그레이드해야 합니다. 자세한 내용은 11.10.348 업그레이드 프로시저인 “[최신 릴리스로 업그레이드](/enterprise/11.10.340/admin/articles/upgrading-to-the-latest-release/)”를 참조하세요.

{% data variables.product.prodname_enterprise %}의 최신 버전으로 업그레이드하려면 먼저 {% data variables.product.prodname_ghe_server %} 2.1로 마이그레이션해야 일반 업그레이드 프로세스를 따를 수 있습니다. 자세한 내용은 “[{% data variables.product.prodname_enterprise %} 업그레이드](/enterprise/admin/guides/installation/upgrading-github-enterprise-server/)”를 참조하세요.

## 마이그레이션 준비

1. 프로비저닝 및 설치 가이드를 검토하고 사용자 환경에서 {% data variables.product.prodname_enterprise %} 2.1.23을 프로비저닝하고 구성하는 데 필요한 모든 필수 구성 요소가 충족되는지 확인합니다. 자세한 내용은 “[프로비저닝 및 설치](/enterprise/2.1/admin/guides/installation/provisioning-and-installation/)”를 참조하세요.
2. 현재 인스턴스가 지원되는 업그레이드 버전을 실행하고 있는지 확인합니다.
3. 최신 버전의 {% data variables.product.prodname_enterprise_backup_utilities %}를 설정합니다. 자세한 내용은 [{% data variables.product.prodname_enterprise_backup_utilities %}](https://github.com/github/backup-utils)를 참조하세요.
    - {% data variables.product.prodname_enterprise_backup_utilities %}를 사용하여 예약된 백업을 이미 구성한 경우 최신 버전으로 업데이트했는지 확인합니다.
    - 현재 예약된 백업을 실행하지 않는 경우 {% data variables.product.prodname_enterprise_backup_utilities %}를 설정합니다.
4. `ghe-backup` 명령을 사용하여 현재 인스턴스의 초기 전체 백업 스냅샷을 만듭니다. 현재 인스턴스에 대해 예약된 백업을 이미 구성한 경우 인스턴스의 스냅샷을 만들 필요가 없습니다.

   {% tip %}

   **팁:** 인스턴스를 온라인 상태로 두고 스냅샷 중에 활성 상태로 둘 수 있습니다. 마이그레이션의 유지 관리 부분에서 다른 스냅샷을 만듭니다. 백업은 증분이므로 이 초기 스냅샷은 최종 스냅샷에서 전송되는 데이터의 양을 줄여 유지 관리 기간을 단축할 수 있습니다.

   {% endtip %}

5. 사용자 네트워크 트래픽을 새 인스턴스로 전환하는 방법을 결정합니다. 마이그레이션한 후에는 모든 HTTP 및 Git 네트워크 트래픽이 새 인스턴스로 전달됩니다.
    - **DNS** - 이 메서드는 한 데이터 센터에서 다른 데이터 센터로 마이그레이션하는 경우에도 간단하고 잘 작동하므로 모든 환경에 사용하는 것이 좋습니다. 마이그레이션을 시작하기 전에 기존 DNS 레코드의 TTL을 5분 이하로 줄이고 변경 내용이 전파되도록 허용합니다. 마이그레이션이 완료되면 DNS 레코드를 새 인스턴스의 IP 주소를 가리키도록 업데이트합니다.
    - **IP 주소 할당** - 이 방법은 VMware에서 VMware로의 마이그레이션에서만 사용할 수 있으며 DNS 메서드를 사용할 없는 경우를 제외하고는 권장되지 않습니다. 마이그레이션을 시작하기 전에 이전 인스턴스를 종료하고 해당 IP 주소를 새 인스턴스에 할당해야 합니다.
6. 유지 관리 기간 예약 유지 관리 기간에는 백업 호스트에서 새 인스턴스로 데이터를 전송하는 데 필요한 충분한 시간이 포함되어야 하며 백업 스냅샷의 크기와 사용 가능한 네트워크 대역폭에 따라 달라집니다. 이 시간 동안에는 새 인스턴스로 마이그레이션하는 동안 현재 인스턴스를 사용할 수 없으며 유지 관리 모드로 전환됩니다.

## 마이그레이션 수행

1. 새 {% data variables.product.prodname_enterprise %} 2.1 인스턴스를 프로비저닝합니다. 자세한 내용은 대상 플랫폼에 대한 “[프로비저닝 및 설치](/enterprise/2.1/admin/guides/installation/provisioning-and-installation/)” 가이드를 참조하세요.
2. 브라우저에서 새 복제본 어플라이언스의 IP 주소로 이동하여 {% data variables.product.prodname_enterprise %} 라이선스를 업로드합니다.
3. 관리자 암호를 설정합니다.
5. **마이그레이션** 을 클릭합니다.
![설치 유형 선택](/assets/images/enterprise/migration/migration-choose-install-type.png)
6. 백업 호스트 액세스 SSH 키를 “새 SSH 키 추가”에 붙여넣습니다.
![백업 권한 부여](/assets/images/enterprise/migration/migration-authorize-backup-host.png)
7. **키 추가** 를 클릭한 후 **계속** 을 클릭합니다.
8. 백업 호스트에서 실행할 `ghe-restore` 명령을 복사하여 데이터를 새 인스턴스로 마이그레이션합니다.
![마이그레이션 시작](/assets/images/enterprise/migration/migration-restore-start.png)
9. 이전 인스턴스에서 유지 관리 모드를 사용하도록 설정하고 모든 활성 프로세스가 완료되기를 기다립니다. 자세한 내용은 “[유지 관리 모드 사용 및 예약](/enterprise/admin/guides/installation/enabling-and-scheduling-maintenance-mode)”을 참조하세요.

  {% note %}

  **참고:** 인스턴스는 이 시점부터 정상적으로 사용할 수 없습니다.

  {% endnote %}

10. 백업 호스트에서 `ghe-backup` 명령을 실행하여 최종 백업 스냅샷을 만듭니다. 이렇게 하면 이전 인스턴스의 모든 데이터가 캡처됩니다.
11. 백업 호스트에서 새 인스턴스의 복원 상태 화면에서 복사한 `ghe-restore` 명령을 실행하여 최신 스냅샷을 복원합니다.
  ```shell
  $ ghe-restore 169.254.1.1
  The authenticity of host '169.254.1.1:122' can't be established.
  RSA key fingerprint is fe:96:9e:ac:d0:22:7c:cf:22:68:f2:c3:c9:81:53:d1.
  Are you sure you want to continue connecting (yes/no)? yes
  Connect 169.254.1.1:122 OK (v2.0.0)
  Starting restore of 169.254.1.1:122 from snapshot 20141014T141425
  Restoring Git repositories ...
  Restoring GitHub Pages ...
  Restoring asset attachments ...
  Restoring hook deliveries ...
  Restoring MySQL database ...
  Restoring Redis database ...
  Restoring SSH authorized keys ...
  Restoring Elasticsearch indices ...
  Restoring SSH host keys ...
  Completed restore of 169.254.1.1:122 from snapshot 20141014T141425
  Visit https://169.254.1.1/setup/settings to review appliance configuration.
  ```

12. 새 인스턴스의 복원 상태 화면으로 돌아가서 복원이 완료되었는지 확인합니다.
![복원 완료 화면](/assets/images/enterprise/migration/migration-status-complete.png)
13. **계속해서 설정** 을 클릭하여 이전 인스턴스에서 가져온 구성 정보 및 설정을 검토하고 조정합니다.
![가져온 설정 검토](/assets/images/enterprise/migration/migration-status-complete.png)
14. **설정 저장** 을 클릭합니다.

  {% note %}

  **참고:** 구성 설정을 적용하고 서버를 다시 시작한 후 새 인스턴스를 사용할 수 있습니다.

  {% endnote %}

15. DNS 또는 IP 주소 할당을 사용하여 사용자 네트워크 트래픽을 이전 인스턴스에서 새 인스턴스로 전환합니다.
16. {% data variables.product.prodname_ghe_server %}의 최신 패치 릴리스로 업그레이드합니다. 자세한 내용은 “[{% data variables.product.prodname_ghe_server %} 업그레이드](/enterprise/admin/guides/installation/upgrading-github-enterprise-server/)”를 참조하세요.

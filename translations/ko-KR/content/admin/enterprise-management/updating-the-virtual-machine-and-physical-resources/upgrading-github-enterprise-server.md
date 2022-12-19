---
title: GitHub Enterprise 서버 업그레이드
intro: '{% data variables.product.prodname_ghe_server %}를 업그레이드하여 최신 기능 및 보안 업데이트를 가져옵니다.'
redirect_from:
  - /enterprise/admin/installation/upgrading-github-enterprise-server
  - /enterprise/admin/articles/upgrading-to-the-latest-release
  - /enterprise/admin/articles/migrations-and-upgrades
  - /enterprise/admin/guides/installation/upgrading-the-github-enterprise-virtual-machine
  - /enterprise/admin/guides/installation/upgrade-packages-for-older-releases
  - /enterprise/admin/articles/upgrading-older-installations
  - /enterprise/admin/hidden/upgrading-older-installations
  - /enterprise/admin/hidden/upgrading-github-enterprise-using-a-hotpatch-early-access-program
  - /enterprise/admin/hidden/upgrading-github-enterprise-using-a-hotpatch
  - /enterprise/admin/guides/installation/upgrading-github-enterprise
  - /enterprise/admin/enterprise-management/upgrading-github-enterprise-server
  - /admin/enterprise-management/upgrading-github-enterprise-server
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Upgrades
shortTitle: Upgrading GHES
ms.openlocfilehash: cbbeff601bfbbdf828ed4c5fc019c5e3bf849614
ms.sourcegitcommit: 30b0931723b704e219c736e0de7afe0fa799da29
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 11/30/2022
ms.locfileid: '148186429'
---
## 업그레이드 준비

1. 업그레이드 전략을 결정하고 업그레이드할 대상 버전을 선택합니다. 자세한 내용은 “[업그레이드 요구 사항](/enterprise/{{ currentVersion }}/admin/guides/installation/upgrade-requirements/)”을 참조하고, [{% data variables.enterprise.upgrade_assistant %}](https://support.github.com/enterprise/server-upgrade) 에서 현재 릴리스 버전의 업그레이드 경로를 찾습니다.
1. {% data variables.product.prodname_enterprise_backup_utilities %}를 사용하여 주 인스턴스의 새 백업을 만듭니다. 자세한 내용은 {% data variables.product.prodname_enterprise_backup_utilities %} 프로젝트 설명서의 [README.md 파일](https://github.com/github/backup-utils#readme)을 참조하세요.

  {% note %}

  **참고:** {% data variables.product.prodname_enterprise_backup_utilities %} 버전은 {% data variables.location.product_location %}와 동일한 버전이어야 합니다. 자세한 내용은 “[GitHub Enterprise 서버 백업 유틸리티 업그레이드](/admin/configuration/configuring-your-enterprise/configuring-backups-on-your-appliance#upgrading-github-enterprise-server-backup-utilities)”를 참조하세요.

  {% endnote %}

1. {% data variables.location.product_location %}에서 {% data variables.product.prodname_actions %}에 임시 자체 호스팅 실행기를 사용하고 자동 업데이트를 사용하지 않도록 설정한 경우 실행기를 업그레이드된 인스턴스가 실행할 실행기 애플리케이션 버전으로 업그레이드합니다.
1. 업그레이드 패키지를 사용하여 업그레이드하는 경우 {% data variables.product.prodname_ghe_server %} 최종 사용자를 위한 유지 관리 기간을 예약합니다. 핫패치를 사용하는 경우에는 유지 관리 모드가 필요하지 않습니다.

  {% note %}

  **참고:** 유지 관리 기간은 수행하는 업그레이드 유형에 따라 다릅니다. 핫패치를 사용한 업그레이드에는 일반적으로 유지 관리 기간이 필요하지 않습니다. 다시 부팅이 필요한 경우도 있으며, 나중에 수행할 수 있습니다. MAJOR.FEATURE.PATCH의 버전 관리 체계에 따라, 업그레이드 패키지를 사용한 패치 릴리스에는 일반적으로 5분 미만의 가동 중지 시간이 필요합니다. 데이터 마이그레이션을 포함하는 기능 릴리스는 스토리지 성능과 마이그레이션되는 데이터 양에 따라 더 오래 걸립니다. 자세한 내용은 “[유지 관리 모드 사용 및 예약](/enterprise/admin/guides/installation/enabling-and-scheduling-maintenance-mode)”을 참조하세요.

  {% endnote %}

## 스냅샷 만들기

스냅샷은 특정 시점의 VM(가상 머신) 검사점입니다. 업그레이드에 실패할 경우 VM을 스냅샷으로 되돌릴 수 있도록 가상 머신을 업그레이드하기 전에 스냅샷을 만드는 것이 좋습니다. 어플라이언스의 전원이 꺼졌거나 유지 관리 모드에 있고 모든 백그라운드 작업이 완료된 경우에만 VM 스냅샷을 만드는 것이 좋습니다.

새 기능 릴리스로 업그레이드하는 경우 VM 스냅샷을 만들어야 합니다. 패치 릴리스로 업그레이드하는 경우 기존 데이터 디스크를 연결할 수 있습니다. 

다음 두 가지 유형의 스냅샷이 있습니다.

- **VM 스냅샷** 은 사용자 데이터와 구성 데이터를 포함하여 전체 VM 상태를 저장합니다. 이 스냅샷 방법은 많은 양의 디스크 공간이 필요하며 시간이 오래 걸립니다.
- **데이터 디스크 스냅샷** 은 사용자 데이터만 저장합니다.

  {% note %}

  **참고:**
  - 일부 플랫폼에서는 데이터 디스크만으로 스냅샷을 만들 수 없습니다. 해당 플랫폼의 경우 전체 VM 스냅샷을 만들어야 합니다.
  - 하이퍼바이저에서 전체 VM 스냅샷을 지원하지 않는 경우 루트 디스크와 데이터 디스크의 스냅샷을 빠르게 연속해서 만들어야 합니다.

  {% endnote %}

| 플랫폼 | 스냅숏 메서드 | 스냅샷 설명서 URL |
|---|---|---|
| Amazon AWS | 디스크 | <https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-creating-snapshot.html>
| Azure | VM | <https://docs.microsoft.com/azure/backup/backup-azure-vms-first-look-arm>
| Hyper-V | VM | <https://docs.microsoft.com/windows-server/virtualization/hyper-v/manage/enable-or-disable-checkpoints-in-hyper-v>
| Google Compute Engine | 디스크 | <https://cloud.google.com/compute/docs/disks/create-snapshots>
| VMware | VM | <https://docs.vmware.com/en/VMware-vSphere/7.0/com.vmware.vsphere.hostclient.doc/GUID-64B866EF-7636-401C-A8FF-2B4584D9CA72.html>

## 핫패치를 사용하여 업그레이드

{% data reusables.enterprise_installation.hotpatching-explanation %} 

{% data variables.enterprise.management_console %}을 사용하여 핫패치를 즉시 설치하거나 나중에 설치되도록 예약할 수 있습니다. 관리 셸을 사용하여 `ghe-upgrade` 유틸리티로 핫패치를 설치할 수 있습니다. 자세한 내용은 “[업그레이드 요구 사항](/enterprise/admin/guides/installation/upgrade-requirements/)”을 참조하세요.

{% note %}

**{% ifversion ghes %}참고{% else %}참고{% endif %}** :

{% ifversion ghes %}
- {% data variables.location.product_location %}이(가) 릴리스 후보 빌드를 실행하는 경우 핫패치로 업그레이드할 수 없습니다.

- {% endif %}클러스터형 환경에서는 {% data variables.enterprise.management_console %}을 사용하여 핫패치를 설치할 수 없습니다. 클러스터형 환경에 핫패치를 설치하려면 “[클러스터 업그레이드](/enterprise/admin/clustering/upgrading-a-cluster#upgrading-with-a-hotpatch)”를 참조하세요.

{% endnote %}

### 핫패치를 사용하여 단일 어플라이언스 업그레이드

#### {% data variables.enterprise.management_console %}을 사용하여 핫패치 설치

{% data variables.enterprise.management_console %}에서 자동 업데이트를 사용하도록 설정하면 핫패치를 사용하여 업그레이드할 수 있습니다. 업그레이드할 수 있는 {% data variables.product.prodname_ghe_server %}의 사용 가능한 최신 버전이 표시됩니다.

표시되는 업그레이드 대상이 패치 릴리스가 아닌 기능 릴리스인 경우에는 {% data variables.enterprise.management_console %}을 사용하여 핫패치를 설치할 수 없습니다. 대신, 관리 셸을 사용하여 핫패치를 설치해야 합니다. 자세한 내용은 “[관리 셸을 사용하여 핫패치 설치](#installing-a-hotpatch-using-the-administrative-shell)”를 참조하세요.

1. 자동 업데이트를 사용하도록 설정합니다. 자세한 내용은 “[자동 업데이트 사용](/enterprise/admin/guides/installation/enabling-automatic-update-checks/)”을 참조하세요.
{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% data reusables.enterprise_management_console.updates-tab %}
4. 새 핫패치가 다운로드되면 패키지 설치 드롭다운 메뉴를 사용합니다.
    - 즉시 설치하려면 **지금** 을 선택합니다.
    - 나중에 설치하려면 이후 날짜를 선택합니다.
  ![핫패치 설치 날짜 드롭다운](/assets/images/enterprise/management-console/hotpatch-installation-date-dropdown.png)
5. **설치** 를 클릭합니다.
  ![핫패치 설치 단추](/assets/images/enterprise/management-console/hotpatch-installation-install-button.png)

#### 관리 셸을 사용하여 핫패치 설치

{% data reusables.enterprise_installation.download-note %}

{% data reusables.enterprise_installation.ssh-into-instance %}
2. {% data reusables.enterprise_installation.enterprise-download-upgrade-pkg %} 업그레이드 핫패키지( *.hpkg* 파일)의 URL을 복사합니다.
{% data reusables.enterprise_installation.download-package %}
4. 패키지 파일 이름을 사용하여 `ghe-upgrade` 명령을 실행합니다.
  ```shell
  admin@HOSTNAME:~$ ghe-upgrade GITHUB-UPGRADE.hpkg
  *** verifying upgrade package signature...
  ```
5. 커널, MySQL, Elasticsearch 또는 기타 프로그램의 업데이트에 다시 부팅이 필요한 경우 핫패치 업그레이드 스크립트에서 알려줍니다.

### 핫패치를 사용하여 복제본 인스턴스가 있는 어플라이언스 업그레이드

{% note %}

**참고**: 핫패치를 설치하는 경우 유지 관리 모드로 전환하거나 복제를 중지할 필요가 없습니다.

{% endnote %}

고가용성 및 지역 복제가 구성된 어플라이언스는 주 인스턴스뿐 아니라 복제본 인스턴스도 사용합니다. 해당 어플라이언스를 업그레이드하려면 주 인스턴스와 모든 복제본 인스턴스를 한 번에 하나씩 둘 다 업그레이드해야 합니다.

#### 주 인스턴스 업그레이드

1. “[관리 셸을 사용하여 핫패치 설치](#installing-a-hotpatch-using-the-administrative-shell)”의 지침에 따라 주 인스턴스를 업그레이드합니다.

#### 복제본 인스턴스 업그레이드

{% note %}

**참고:** 지역 복제의 일부로 여러 복제본 인스턴스를 실행하는 경우 각 복제본 인스턴스에 대해 이 절차를 한 번에 하나씩 반복합니다.

{% endnote %}

1. “[관리 셸을 사용하여 핫패치 설치](#installing-a-hotpatch-using-the-administrative-shell)”의 지침에 따라 복제본 인스턴스를 업그레이드합니다. 지역 복제에 여러 복제본을 사용하는 경우 이 절차를 반복하여 각 복제본을 한 번에 하나씩 업그레이드해야 합니다.
{% data reusables.enterprise_installation.replica-ssh %} {% data reusables.enterprise_installation.replica-verify %}

## 업그레이드 패키지를 사용하여 업그레이드

핫패치를 사용하여 기능 시리즈 내의 최신 패치 릴리스로 업그레이드할 수 있는 반면, 최신 기능 릴리스로 업그레이드하려면 업그레이드 패키지를 사용해야 합니다. 예를 들어 `2.11.10`에서 `2.12.4`로 업그레이드하려면 서로 다른 기능 시리즈에 속해 있기 때문에 업그레이드 패키지를 사용해야 합니다. 자세한 내용은 “[업그레이드 요구 사항](/enterprise/admin/guides/installation/upgrade-requirements/)”을 참조하세요.

### 업그레이드 패키지를 사용하여 단일 어플라이언스 업그레이드

{% data reusables.enterprise_installation.download-note %}

{% data reusables.enterprise_installation.ssh-into-instance %}
2. {% data reusables.enterprise_installation.enterprise-download-upgrade-pkg %} 적절한 플랫폼을 선택하고 업그레이드 패키지( *.pkg* 파일)의 URL을 복사합니다.
{% data reusables.enterprise_installation.download-package %}
4. 유지 관리 모드를 사용하도록 설정하고 {% data variables.product.prodname_ghe_server %} 인스턴스에서 모든 활성 프로세스가 완료되기를 기다립니다. 자세한 내용은 “[유지 관리 모드 사용 및 예약](/enterprise/admin/guides/installation/enabling-and-scheduling-maintenance-mode)”을 참조하세요.

  {% note %}

  **참고**: 고가용성 구성의 주 어플라이언스를 업그레이드할 때 “[주 인스턴스 업그레이드](#upgrading-the-primary-instance)”의 지침을 따르는 경우 어플라이언스가 이미 유지 관리 모드에 있어야 합니다.

  {% endnote %}

5. 패키지 파일 이름을 사용하여 `ghe-upgrade` 명령을 실행합니다.
  ```shell
  admin@HOSTNAME:~$ ghe-upgrade GITHUB-UPGRADE.pkg
  *** verifying upgrade package signature...
  ```
6. 업그레이드를 계속하고 패키지 서명이 확인된 후 다시 시작하도록 확인합니다. 새 루트 파일 시스템이 보조 파티션에 쓰고, 인스턴스가 유지 관리 모드에서 자동으로 다시 시작됩니다.
  ```shell
  *** applying update...
  This package will upgrade your installation to version VERSION-NUMBER
  Current root partition: /dev/xvda1 [VERSION-NUMBER]
  Target root partition:  /dev/xvda2
  Proceed with installation? [y/N]
  ```
{% ifversion ip-exception-list %}
1. 필요에 따라 업그레이드의 유효성을 검사하려면 지정된 IP 주소 목록에 액세스할 수 있도록 IP 예외 목록을 구성합니다. 자세한 내용은 “[IP 예외 목록을 사용하여 유지 관리 모드의 변경 내용 유효성 검사](/admin/configuration/configuring-your-enterprise/enabling-and-scheduling-maintenance-mode#validating-changes-in-maintenance-mode-using-the-ip-exception-list)”를 참조하세요.
{% endif %}
7. 단일 어플라이언스 업그레이드의 경우 사용자가 {% data variables.location.product_location %}을(를) 사용할 수 있도록 유지 관리 모드를 사용하지 않도록 설정합니다.

  {% note %}

  **참고**: 고가용성 구성의 어플라이언스를 업그레이드하는 경우 모든 복제본이 업그레이드되고 복제가 최신 상태가 될 때까지 유지 관리 모드를 유지해야 합니다. 자세한 내용은 “[복제본 인스턴스 업그레이드](#upgrading-a-replica-instance)”를 참조하세요.

  {% endnote %}

### 업그레이드 패키지를 사용하여 복제본 인스턴스가 있는 어플라이언스 업그레이드

고가용성 및 지역 복제가 구성된 어플라이언스는 주 인스턴스뿐 아니라 복제본 인스턴스도 사용합니다. 해당 어플라이언스를 업그레이드하려면 주 인스턴스와 모든 복제본 인스턴스를 한 번에 하나씩 둘 다 업그레이드해야 합니다.

#### 주 인스턴스 업그레이드

{% warning %}

**경고:** 복제가 중지된 경우 주 인스턴스에서 오류가 발생하면 복제본이 업그레이드되고 복제가 다시 시작되기 전에 수행된 모든 작업이 손실됩니다.

{% endwarning %}

1. 주 인스턴스에서 유지 관리 모드를 사용하도록 설정하고 모든 활성 프로세스가 완료되기를 기다립니다. 자세한 내용은 “[유지 관리 모드 사용](/enterprise/admin/guides/installation/enabling-and-scheduling-maintenance-mode/)”을 참조하세요.
{% data reusables.enterprise_installation.replica-ssh %}
3. 복제본 인스턴스 또는 지역 복제의 일부로 여러 복제본 인스턴스를 실행하는 경우 모든 복제본 인스턴스에서 `ghe-repl-stop`을 실행하여 복제를 중지합니다.
4. “[업그레이드 패키지를 사용하여 단일 어플라이언스 업그레이드](#upgrading-a-single-appliance-with-an-upgrade-package)”의 지침에 따라 주 인스턴스를 업그레이드합니다.

#### 복제본 인스턴스 업그레이드

{% note %}

**참고:** 지역 복제의 일부로 여러 복제본 인스턴스를 실행하는 경우 각 복제본 인스턴스에 대해 이 절차를 한 번에 하나씩 반복합니다.

{% endnote %}

1. “[업그레이드 패키지를 사용하여 단일 어플라이언스 업그레이드](#upgrading-a-single-appliance-with-an-upgrade-package)”의 지침에 따라 복제본 인스턴스를 업그레이드합니다. 지역 복제에 여러 복제본을 사용하는 경우 이 절차를 반복하여 각 복제본을 한 번에 하나씩 업그레이드해야 합니다.
{% data reusables.enterprise_installation.replica-ssh %} {% data reusables.enterprise_installation.replica-verify %}

{% data reusables.enterprise_installation.start-replication %}

{% data reusables.enterprise_installation.replication-status %} 명령에서 `Replication is not running`이 반환되는 경우 복제가 계속 시작되고 있을 수 있습니다. `ghe-repl-status`를 다시 실행하기 전에 1분 정도 기다립니다.

   {% note %}

   **참고:** resync가 진행 중인 `ghe-repl-status` 동안 복제가 뒤처진 것을 나타낼 수 있습니다. 예를 들어 다음 메시지가 표시 될 수 있습니다.
   
   ```
   CRITICAL: git replication is behind the primary by more than 1007 repositories and/or gists
   ```
   {% endnote %}

   {%- ifversion ghes = 3.4 or ghes = 3.5 or ghes = 3.6 %}

   - 각 노드를 {% data variables.product.product_name %} 3.6.0 이상으로 업그레이드하고 복제를 시작했지만 `git replication is behind the primary` 45분 후에도 계속 표시되는 경우 {% data variables.contact.enterprise_support %}에 문의하세요. 자세한 내용은 “[{% data variables.contact.github_support %}에서 도움받기](/admin/enterprise-support/receiving-help-from-github-support)”를 참조하세요.
   {%- endif %}

   - {% ifversion ghes = 3.4 or ghes = 3.5 or ghes = 3.6 %} 그렇지 않으면{% else %}{% endif %} `ghe-repl-status` 이(가) 반환 `OK`되지 않으면 {% data variables.contact.enterprise_support %}에 문의하세요. 자세한 내용은 “[{% data variables.contact.github_support %}에서 도움받기](/admin/enterprise-support/receiving-help-from-github-support)”를 참조하세요.
6. 마지막 복제본 업그레이드를 완료하고 다시 동기화가 완료되면 사용자가 {% data variables.location.product_location %}을(를) 사용할 수 있도록 유지 관리 모드를 사용하지 않도록 설정합니다.

## 실패한 업그레이드에서 복원

업그레이드가 실패하거나 중단된 경우 인스턴스를 이전 상태로 다시 되돌려야 합니다. 이 작업을 수행하는 프로세스는 업그레이드 유형에 따라 다릅니다.

### 패치 릴리스 롤백

패치 릴리스를 롤백하려면 `ghe-upgrade` 명령에 `--allow-patch-rollback` 스위치를 사용합니다. 롤백하기 전에 모든 복제본 인스턴스에서 `ghe-repl-stop`을 실행하여 복제를 일시적으로 중지해야 합니다. {% data reusables.enterprise_installation.command-line-utilities-ghe-upgrade-rollback %}

롤백이 완료되면 모든 복제본에서 `ghe-repl-start`를 실행하여 복제를 다시 시작합니다. 

자세한 내용은 “[명령줄 유틸리티](/enterprise/admin/guides/installation/command-line-utilities/#ghe-upgrade)”를 참조하세요.

### 기능 릴리스 롤백

기능 릴리스에서 롤백하려면 VM 스냅샷에서 복원하여 루트 및 데이터 파티션을 일관된 상태로 유지합니다. 자세한 내용은 “[스냅샷 만들기](#taking-a-snapshot)”를 참조하세요.

{% ifversion ghes %}
## 추가 참고 자료

- “[새 릴리스로 업그레이드 정보](/admin/overview/about-upgrades-to-new-releases)” {% endif %}

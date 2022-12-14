---
title: 어플라이언스에 백업 구성
shortTitle: Configuring backups
redirect_from:
  - /enterprise/admin/categories/backups-and-restores
  - /enterprise/admin/articles/backup-and-recovery
  - /enterprise/admin/articles/backing-up-github-enterprise
  - /enterprise/admin/articles/restoring-github-enterprise
  - /enterprise/admin/articles/backing-up-repository-data
  - /enterprise/admin/articles/restoring-enterprise-data
  - /enterprise/admin/articles/restoring-repository-data
  - /enterprise/admin/articles/backing-up-enterprise-data
  - /enterprise/admin/guides/installation/backups-and-disaster-recovery
  - /enterprise/admin/installation/configuring-backups-on-your-appliance
  - /enterprise/admin/configuration/configuring-backups-on-your-appliance
  - /admin/configuration/configuring-backups-on-your-appliance
intro: '재해 복구 계획의 일부로 자동화된 백업을 구성하여 {% 데이터 variables.location.product_location %}에서 프로덕션 데이터를 보호할 수 있습니다.'
versions:
  ghes: '*'
type: how_to
topics:
  - Backups
  - Enterprise
  - Fundamentals
  - Infrastructure
ms.openlocfilehash: f9b8f97f6a322884f52df7787f13a0c4ac0d6e53
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/20/2022
ms.locfileid: '148094331'
---
## {% data variables.product.prodname_enterprise_backup_utilities %} 정보

{% 데이터 variables.product.prodname_enterprise_backup_utilities %}은(는) 별도의 호스트에 설치하는 백업 시스템으로, 보안 SSH 네트워크 연결을 통해 정기적으로 {% 데이터 variables.location.product_location %}의 백업 스냅샷을 만듭니다. 스냅샷을 사용하여 백업 호스트에서 기존 {% data variables.product.prodname_ghe_server %} 인스턴스를 이전 상태로 복원할 수 있습니다.

마지막 스냅샷 이후 추가된 데이터만 네트워크를 통해 전송되고 추가 물리적 스토리지 공간을 차지합니다. 성능 영향을 최소화하기 위해 백업은 가장 낮은 CPU/IO 우선 순위에 따라 온라인으로 수행됩니다. 백업을 수행하기 위해 유지 관리 기간을 예약할 필요는 없습니다.

{% data variables.product.prodname_enterprise_backup_utilities %}의 주요 릴리스 및 버전 번호는 {% data variables.product.product_name %}의 기능 릴리스와 일치합니다. 두 제품 모두에 대해 최신 버전 4개를 지원합니다. 자세한 내용은 “[{% data variables.product.product_name %} 릴리스](/admin/all-releases)”를 참조하세요.

기능, 요구 사항 및 고급 사용에 대한 자세한 내용은 {% data variables.product.prodname_enterprise_backup_utilities %} 프로젝트 설명서의 [{% data variables.product.prodname_enterprise_backup_utilities %} 추가 정보](https://github.com/github/backup-utils#readme)를 참조하세요.

## 필수 조건

{% 데이터 variables.product.prodname_enterprise_backup_utilities %}을(를) 사용하려면 {% 데이터 variables.location.product_location %}에서 별도로 Linux 또는 Unix 호스트 시스템이 있어야 합니다.

{% data variables.product.prodname_enterprise_backup_utilities %}를 기존 환경에 통합해 중요한 데이터를 장기적으로 영구 저장할 수도 있습니다.

백업 호스트와 {% 데이터 variables.location.product_location %}은(는) 지리적으로 서로 멀리 떨어져 있는 것이 좋습니다. 이렇게 하면 주 사이트에서 대규모 재해 또는 네트워크 중단이 발생할 경우 백업을 복구할 수 있습니다.

물리적 스토리지 요구 사항은 Git 리포지토리 디스크 사용량 및 예상 증가 패턴에 따라 달라집니다.

| 하드웨어 | 권장 |
| -------- | --------- |
| **vCPU**  | 2 |
| **메모리** | 2GB |
| **스토리지** | 주 인스턴스의 할당된 스토리지의 5배 |

사용자 활동이나 선택한 통합처럼 사용량에 따라 더 많은 리소스가 필요할 수 있습니다.

자세한 내용은 {% data variables.product.prodname_enterprise_backup_utilities %} 프로젝트 설명서의 [{% data variables.product.prodname_enterprise_backup_utilities %}](https://github.com/github/backup-utils/blob/master/docs/requirements.md) 요구 사항을 참조하세요.

## {% data variables.product.prodname_enterprise_backup_utilities %} 설치

백업 호스트에 {% data variables.product.prodname_enterprise_backup_utilities %}를 설치하려면 프로젝트의 Git 리포지토리를 복제하는 것이 좋습니다. 이 방법을 사용하면 Git을 사용하여 새 릴리스를 직접 가져올 수 있으며, 기존 백업 구성 파일 `backup.config`는 새 버전을 설치할 때 유지됩니다.

또는 호스트 컴퓨터가 인터넷에 액세스할 수 없는 경우 각 {% data variables.product.prodname_enterprise_backup_utilities %} 릴리스를 압축된 보관 파일로 다운로드한 다음 콘텐츠를 추출하고 설치할 수 있습니다. 자세한 내용은 {% data variables.product.prodname_enterprise_backup_utilities %} 프로젝트 설명서의 [시작하기](https://github.com/github/backup-utils/blob/master/docs/getting-started.md)를 참조하세요.

백업 스냅샷은 `backup.config` 파일의 `GHE_DATA_DIR` 데이터 디렉터리 변수에 의해 설정된 디스크 경로에 기록됩니다. 스냅샷은 바로 가기 링크와 하드 링크를 지원하는 filesystem에 저장되어야 합니다.

{% note %}

**참고:** {% data variables.product.prodname_enterprise_backup_utilities %} 버전을 업그레이드할 때 실수로 데이터 디렉터리를 덮어쓰지 않도록 하려면 {% data variables.product.prodname_enterprise_backup_utilities %} 설치 디렉터리의 하위 디렉터리에 스냅샷을 보관하지 않는 것이 좋습니다.

{% endnote %}

1. [{% data variables.product.prodname_enterprise_backup_utilities %} 프로젝트 리포지토리](https://github.com/github/backup-utils/)를 백업 호스트의 로컬 디렉터리에 복제하려면 다음 명령을 실행합니다.

  ```
  $ git clone https://github.com/github/backup-utils.git /path/to/target/directory/backup-utils
  ```
1. 로컬 리포지토리 디렉터리로 변경하려면 다음 명령을 실행합니다.

  ```
  cd backup-utils
  ```
{% data reusables.enterprise_backup_utilities.enterprise-backup-utils-update-repo %}
1. 포함된 `backup.config-example` 파일을 `backup.config`로 복사하려면 다음 명령을 실행합니다.

   ```shell
   cp backup.config-example backup.config
   ```
1. 구성을 사용자 지정하려면 텍스트 편집기에서 `backup.config`를 편집합니다.
   1. `GHE_HOSTNAME` 값을 기본 {% data variables.product.prodname_ghe_server %} 인스턴스의 호스트 이름 또는 IP 주소로 설정합니다.

     {% note %}

     **참고:** {% 데이터 variables.location.product_location %}이(가) 클러스터로 배포되거나 부하 분산 `GHE_HOSTNAME` 장치를 사용하여 고가용성 구성에 배포되는 경우 SSH 액세스를 허용하는 한(포트 122에서) {% 데이터 variables.location.product_location %}에 대한 부하 분산 장치 호스트 이름이 될 수 있습니다.

     복구된 어플라이언스를 즉시 사용할 수 있도록 하려면 지역 복제 구성에서도 주 인스턴스를 대상으로 하는 백업을 수행합니다.

     {% endnote %}
   1. `GHE_DATA_DIR` 값을 백업 스냅샷을 저장할 파일 시스템 위치로 설정합니다. 백업 호스트와 동일한 파일 시스템의 위치를 선택하는 것이 좋지만 1단계에서 Git 리포지토리를 복제한 위치 외부여야 합니다.
1. 인스턴스에 대한 백업 호스트 액세스 권한을 부여하려면 `http(s)://HOSTNAME/setup/settings`에서 주 인스턴스의 설정 페이지를 열고 백업 호스트의 SSH 키를 권한 있는 SSH 키 목록에 추가합니다. 자세한 내용은 “[관리 셸(SSH) 액세스](/admin/configuration/configuring-your-enterprise/accessing-the-administrative-shell-ssh#enabling-access-to-the-administrative-shell-via-ssh)”를 참조하세요.
1. 백업 호스트에서 명령을 사용하여 {% 데이터 variables.location.product_location %}을(를) 사용하여 `ghe-host-check` SSH 연결을 확인합니다.

  ```shell
  ./bin/ghe-host-check
  ```         
1. 초기 전체 백업을 만들려면 다음 명령을 실행합니다.

  ```shell
  ./bin/ghe-backup
  ```

고급 사용에 대한 자세한 내용은 {% data variables.product.prodname_enterprise_backup_utilities %} 프로젝트 설명서의 [{% data variables.product.prodname_enterprise_backup_utilities %} 추가 정보](https://github.com/github/backup-utils#readme)를 참조하세요.

## {% data variables.product.prodname_enterprise_backup_utilities %} 업그레이드

{% data variables.product.prodname_enterprise_backup_utilities %}를 업그레이드할 때는 {% data variables.product.product_name %}의 현재 버전으로 작업할 릴리스를 선택해야 합니다. {% 데이터 variables.product.prodname_enterprise_backup_utilities %}의 설치는 {% 데이터 variables.location.product_location %}와 동일한 버전이어야 하며 앞으로 두 개 이상의 버전이 될 수 없습니다. 자세한 내용은 {% data variables.product.prodname_enterprise_backup_utilities %} 프로젝트 설명서의 [{% data variables.product.prodname_ghe_server %} 버전 요구 사항](https://github.com/github/backup-utils/blob/master/docs/requirements.md#github-enterprise-server-version-requirements)을 참조하세요.
최신 변경 내용을 가져와서 확인하여 Git 리포지토리에서 {% data variables.product.prodname_enterprise_backup_utilities %}를 업그레이드할 수 있습니다.

또는 설치에 Git 리포지토리를 사용하지 않는 경우 새 보관 파일을 위치로 추출하거나 Git 리포지토리를 대신 사용하도록 접근 방식을 변경할 수 있습니다.

### 설치 유형 확인

{% data variables.product.prodname_enterprise_backup_utilities %}에 대한 설치 방법을 확인하고 설치를 업그레이드하는 가장 좋은 방법을 결정할 수 있습니다.

{% data reusables.enterprise_backup_utilities.enterprise-backup-utils-directory %}
1. 유효한 작업 디렉터리가 Git 리포지토리 내에 있는지 확인하려면 다음 명령을 실행합니다.

   ```
   git rev-parse --is-inside-work-tree
   ```

   출력이 `true`이면 프로젝트의 Git 리포지토리를 복제하여 {% data variables.product.prodname_enterprise_backup_utilities %}가 설치되었습니다. 출력에 `fatal: not a git repository (or any of the parent directories)`가 포함된 경우 압축된 보관 파일을 추출하여 {% data variables.product.prodname_enterprise_backup_utilities %}가 설치되었을 가능성이 높습니다.
설치가 Git 리포지토리에 있는 경우 Git을 사용하여 최신 버전을 설치할 수 있습니다. 압축된 보관 파일에서 설치한 경우 최신 버전을 다운로드하여 추출하거나 Git을 사용하여 {% data variables.product.prodname_enterprise_backup_utilities %}를 다시 설치하여 향후 업그레이드를 간소화할 수 있습니다.

- [Git 리포지토리에서 설치 업그레이드](#upgrading-an-installation-in-a-git-repository)
- [업그레이드를 위해 압축된 보관 파일 대신 Git 사용](#using-git-instead-of-compressed-archives-for-upgrades)

### Git 리포지토리에서 설치 업그레이드

{% data reusables.enterprise_backup_utilities.enterprise-backup-utils-directory %} {% note %}

  **참고:** {% data variables.product.prodname_enterprise_backup_utilities %}를 업그레이드하기 전에 `$HOME/backup.config`와 같은 임시 위치에 기존 `backup.config` 파일의 복사본을 만드는 것이 좋습니다.

  {% endnote %}

1. `git fetch` 명령을 실행하여 최신 프로젝트 업데이트를 다운로드합니다.

  ```shell
  git fetch
  ```

{% data reusables.enterprise_backup_utilities.enterprise-backup-utils-update-repo %} {% data reusables.enterprise_backup_utilities.enterprise-backup-utils-verify-upgrade %}

### 업그레이드를 위해 압축된 보관 파일 대신 Git 사용

백업 호스트가 인터넷에 연결되어 있고 이전에 압축된 보관 파일(`.tar.gz`)을 사용하여 {% data variables.product.prodname_enterprise_backup_utilities %}를 설치하거나 업그레이드한 경우 설치에 Git 리포지토리를 대신 사용하는 것이 좋습니다. Git을 사용하여 업그레이드하면 필요한 작업이 줄어 들고 백업 구성이 유지됩니다.

{% data reusables.enterprise_backup_utilities.enterprise-backup-utils-directory %}
1. 기존 {% data variables.product.prodname_enterprise_backup_utilities %} 구성을 백업하려면 현재 `backup.config` 파일을 홈 디렉터리 같은 안전한 위치에 복사합니다.

  ```
  $ cp backup.config $HOME/backup.config.saved-$(date +%Y%m%d-%H%M%S)
  ```

1. {% data variables.product.prodname_enterprise_backup_utilities %} Git 리포지토리를 설치하려는 백업 호스트의 로컬 디렉터리로 변경합니다.
1. [프로젝트 리포지토리](https://github.com/github/backup-utils/)를 백업 호스트의 디렉터리에 복제하려면 다음 명령을 실행합니다.

  ```
  git clone https://github.com/github/backup-utils.git
  ```
1. 복제된 리포지토리로 변경하려면 다음 명령을 실행합니다.

  ```
  cd backup-utils
  ```
{% data reusables.enterprise_backup_utilities.enterprise-backup-utils-update-repo %}
1. 이전 버전에서 백업 구성을 복원하려면 기존 백업 구성 파일을 로컬 리포지토리 디렉터리에 복사합니다. 명령의 경로를 2단계에서 저장한 파일의 위치로 바꿉니다.

  ```
  $ cp PATH/TO/BACKUP/FROM/STEP/2 backup.config
  ```
  
  {% note %}

  **참고:** 복제 후 백업 구성 파일을 복원할 위치를 선택할 수 있습니다. 구성 파일을 배치할 수 있는 위치에 대한 자세한 내용은 {% data variables.product.prodname_enterprise_backup_utilities %} 프로젝트 설명서의 [시작하기](https://github.com/github/backup-utils/blob/master/docs/getting-started.md)를 참조하세요.

  {% endnote %}

1. 백업 구성 파일의 디렉터리 또는 스크립트 경로가 올바른지 확인하려면 텍스트 편집기에서 파일을 검토합니다.
{% data reusables.enterprise_backup_utilities.enterprise-backup-utils-verify-upgrade %}
1. 압축된 보관 설치가 있는 1단계에서 이전 GitHub Enterprise 서버 백업 유틸리티 디렉터리를 삭제합니다.

## 백업 예약

`cron(8)` 명령 또는 유사한 명령 예약 서비스를 사용하여 백업 호스트에서 일반 백업을 예약할 수 있습니다. 구성된 백업 빈도에 따라 복구 계획에서 최악의 RPO(복구 지점 목표)가 결정됩니다. 예를 들어 매일 자정에 실행되도록 백업을 예약한 경우 재해 시나리오에서 최대 24시간의 데이터가 손실될 수 있습니다. 시간별 백업 일정부터 시작하여 기본 사이트 데이터가 삭제되는 경우 최대 1시간의 데이터가 손실되는 최악의 경우를 보장하는 것이 좋습니다.

백업 시도가 겹치면 동시 백업이 있음을 나타내는 오류 메시지와 함께 `ghe-backup` 명령이 중단됩니다. 이 경우 예약된 백업의 빈도를 줄이는 것이 좋습니다. 자세한 내용은 {% data variables.product.prodname_enterprise_backup_utilities %} 프로젝트 설명서의 [{% data variables.product.prodname_enterprise_backup_utilities %} 추가 정보](https://github.com/github/backup-utils#scheduling-backups)에서 “백업 예약” 섹션을 참조하세요.

## 백업 복원

기본 사이트에서 장기간 중단되거나 치명적인 이벤트가 발생하는 경우 다른 {% 데이터 variables.product.prodname_enterprise %} 어플라이언스로 프로비전하고 백업 호스트에서 복원을 수행하여 {% 데이터 variables.location.product_location %}을(를) 복원할 수 있습니다. 어플라이언스 복원 전에 백업 호스트의 SSH 키를 대상 {% data variables.product.prodname_enterprise %} 어플라이언스에 권한 있는 SSH 키로 추가해야 합니다.

{% note %}

**참고:** {% 데이터 variables.location.product_location %}에 백업 복원을 수행할 때 동일한 버전 지원 가능성 규칙이 적용됩니다. 뒤로 최대 두 개의 기능 릴리스에서만 데이터를 복원할 수 있습니다.

예를 들어 {% data variables.product.product_name %} 3.0.x에서 백업을 수행하는 경우 {% data variables.product.product_name %} 3.2.x 인스턴스로 백업을 복원할 수 있습니다. {% data variables.product.product_name %} 2.22.x의 백업에서 3.2.x를 실행하는 인스턴스로 데이터를 복원할 수 없는 이유는 버전 간에 세 번의 점프(2.22에서 3.0에서 3.1에서 3.2로)가 되기 때문입니다. 3\.1.x를 실행하는 인스턴스로 먼저 복원한 다음, 3.2.x로 복원할 수 있습니다.

{% endnote %}

마지막으로 성공한 스냅샷에서 {% 데이터 variables.location.product_location %}을(를) 복원하려면 이 `ghe-restore` 명령을 사용합니다.

{% note %}

**참고:** 백업을 복원하기 전에 다음을 확인합니다.
- 유지 관리 모드는 주 인스턴스에서 사용하도록 설정되어 있고 모든 활성 프로세스가 완료되었습니다. 자세한 내용은 “[유지 관리 모드 사용](/enterprise/admin/guides/installation/enabling-and-scheduling-maintenance-mode/)”을 참조하세요.
- 고가용성 구성의 모든 복제본에서 복제가 중지됩니다. 자세한 내용은 “[고가용성 구성 정보](/admin/enterprise-management/configuring-high-availability/about-high-availability-configuration#ghe-repl-stop)”에서 `ghe-repl-stop` 명령을 참조하세요.
- {% 데이터 variables.location.product_location %}에서 {% 데이터 variables.product.prodname_actions %}을(를) 사용하도록 설정한 경우 먼저 대체 어플라이언스에서 {% 데이터 variables.product.prodname_actions %} 외부 스토리지 공급자를 구성해야 합니다. 자세한 내용은 “[{% data variables.product.prodname_actions %}을 사용 설정하여 {% data variables.product.prodname_ghe_server %} 백업 및 복원](/admin/github-actions/backing-up-and-restoring-github-enterprise-server-with-github-actions-enabled)”을 참조하세요.

{% endnote %}

`ghe-restore` 명령을 실행할 때 다음과 유사한 출력이 표시됩니다.

```shell
$ ghe-restore -c 169.154.1.1
> Checking for leaked keys in the backup snapshot that is being restored ...
> * No leaked keys found
> Connect 169.154.1.1:122 OK (v2.9.0)

> WARNING: All data on GitHub Enterprise appliance 169.154.1.1 (v2.9.0)
>          will be overwritten with data from snapshot 20170329T150710.
> Please verify that this is the correct restore host before continuing.
> Type 'yes' to continue: <em>yes</em>

> Starting restore of 169.154.1.1:122 from snapshot 20170329T150710
# ...output truncated
> Completed restore of 169.154.1.1:122 from snapshot 20170329T150710
> Visit https://169.154.1.1/setup/settings to review appliance configuration.
```

{% ifversion ip-exception-list %} 필요에 따라 복원의 유효성을 검사하려면 지정된 IP 주소 목록에 대한 액세스를 허용하도록 IP 예외 목록을 구성합니다. 자세한 내용은 “[IP 예외 목록을 사용하여 유지 관리 모드의 변경 내용 유효성 검사](/admin/configuration/configuring-your-enterprise/enabling-and-scheduling-maintenance-mode#validating-changes-in-maintenance-mode-using-the-ip-exception-list)”를 참조하세요.
{% endif %}

{% note %}

**참고:** 

- 네트워크 설정은 백업 스냅샷에서 제외됩니다. 사용자 환경에 필요한 대로 대상 {% data variables.product.prodname_ghe_server %} 어플라이언스에서 네트워크를 수동으로 구성해야 합니다.

- 기존 또는 빈 {% 데이터 variables.product.prodname_ghe_server %} 인스턴스의 새 디스크로 복원할 때 부실한 UUID가 있을 수 있으므로 Git 및/또는 Alambic 복제가 동기화되지 않은 것으로 보고됩니다. 부실 서버 항목 ID는 고가용성 구성에서 사용 중지된 노드가 여전히 애플리케이션 데이터베이스에 있지만 복원된 복제 구성에는 없는 결과일 수 있습니다. 수정하기 위해 복원이 완료된 후 복제를 시작하기 전에 오래된 UUID를 삭제 `ghe-repl-teardown` 할 수 있습니다. 이 시나리오에서는 추가 지원을 받으려면 {% 데이터 variables.contact.contact_ent_support %}에 문의하세요.

{% endnote %}

`ghe-restore` 명령으로 다음 추가 옵션을 사용할 수 있습니다.
- `-c` 플래그는 이미 구성된 경우에도 대상 호스트의 설정, 인증서 및 라이선스 데이터를 덮어씁니다. 테스트 목적으로 스테이징 인스턴스를 설정하고 대상에서 기존 구성을 유지하려는 경우 이 플래그를 생략합니다. 자세한 내용은 {% data variables.product.prodname_enterprise_backup_utilities %} 프로젝트 설명서의 [{% data variables.product.prodname_enterprise_backup_utilities %} 추가 정보](https://github.com/github/backup-utils#using-the-backup-and-restore-commands)에서 “백업 및 복원 명령 사용” 섹션을 참조하세요.
- `-s` 플래그를 사용하면 다른 백업 스냅샷을 선택할 수 있습니다.

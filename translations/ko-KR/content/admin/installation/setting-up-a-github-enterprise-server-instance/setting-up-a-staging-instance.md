---
title: 스테이징 인스턴스 설정
intro: '격리된 별도의 환경에서 {% data variables.product.product_name %} 인스턴스를 설정하고 이 인스턴스를 사용하여 변경 내용의 유효성을 검사하고 테스트할 수 있습니다.'
redirect_from:
  - /enterprise/admin/installation/setting-up-a-staging-instance
  - /admin/installation/setting-up-a-staging-instance
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Infrastructure
  - Upgrades
shortTitle: Set up a staging instance
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: ce7d9dde9f86ea5159657203e13d9d191b6b7466
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148106863'
---
## 스테이징 인스턴스 정보

{% data variables.product.company_short %}은(는) {% data variables.location.product_location %}에 대한 구성의 백업, 업데이트 또는 변경 내용을 테스트하는 별도의 환경을 설정하는 것이 좋습니다. 프로덕션 시스템에서 격리해야 하는 이 환경을 스테이징 환경이라고 합니다.

예를 들어 데이터 손실로부터 보호하기 위해 프로덕션 인스턴스의 백업 유효성을 정기적으로 검사할 수 있습니다. 스테이징 환경에서 프로덕션 데이터의 백업을 별도의 {% data variables.product.product_name %} 인스턴스로 정기적으로 복원할 수 있습니다. 이 스테이징 인스턴스에서 {% data variables.product.product_name %}의 최신 기능 릴리스로 업그레이드를 테스트할 수도 있습니다.

{% tip %}

**팁:** 스테이징 인스턴스가 프로덕션 용량에서 사용되지 않는 한 기존 {% data variables.product.prodname_enterprise %} 라이선스 파일을 다시 사용할 수 있습니다.

{% endtip %}

## 스테이징 환경에 대한 고려 사항

{% data variables.product.product_name %}을 철저히 테스트하고 프로덕션 환경과 가능한 한 유사한 환경을 다시 만들려면 인스턴스와 상호 작용하는 외부 시스템을 고려합니다. 예를 들어 스테이징 환경에서 다음을 테스트할 수 있습니다.

- 인증, 특히 SAML과 같은 외부 인증 공급자를 사용하는 경우
- 외부 티켓팅 시스템과의 통합
- 연속 통합 서버와의 통합
- {% data variables.product.prodname_enterprise_api %}을(를) 사용하는 외부 스크립트 또는 소프트웨어
- 메일 알림을 위한 외부 SMTP 서버

## 스테이징 인스턴스 설정

스테이징 인스턴스를 처음부터 설정하고 원하는 인스턴스를 구성할 수 있습니다. 자세한 내용은 "[{% data variables.product.product_name %} 인스턴스 설정](/admin/installation/setting-up-a-github-enterprise-server-instance)" 및 "[엔터프라이즈 구성"을 참조하세요](/admin/configuration/configuring-your-enterprise).

또는 프로덕션 인스턴스의 백업을 스테이징 인스턴스로 복원하여 프로덕션 구성을 반영하는 스테이징 인스턴스를 만들 수 있습니다.

1. [프로덕션 인스턴스를 백업합니다](#1-back-up-your-production-instance).
2. [스테이징 인스턴스를 설정합니다](#2-set-up-a-staging-instance).
3. [{% data variables.product.prodname_actions %}을(를) 구성합니다](#3-configure-github-actions).
4. [{% data variables.product.prodname_registry %}을(를) 구성합니다](#4-configure-github-packages).
5. [프로덕션 백업을 복원합니다](#5-restore-your-production-backup).
6. [인스턴스의 구성을 검토](#6-review-the-instances-configuration)합니다.
7. [인스턴스의 구성을 적용](#7-apply-the-instances-configuration)합니다.

### 1. 프로덕션 인스턴스 백업

프로덕션 인스턴스와 동일한 데이터 및 구성이 포함된 인스턴스에서 변경 내용을 테스트하려면 {% data variables.product.prodname_enterprise_backup_utilities %}를 사용하여 프로덕션 인스턴스에서 데이터 및 구성을 백업합니다. 자세한 내용은 “[어플라이언스에서 백업 구성](/admin/configuration/configuring-your-enterprise/configuring-backups-on-your-appliance)”을 참조하세요.

{% warning %}

**경고**: 프로덕션 환경에서 {% data variables.product.prodname_actions %} 또는 {% data variables.product.prodname_registry %}를 사용하는 경우 백업에는 외부 스토리지에 대한 프로덕션 구성이 포함됩니다. 스테이징 인스턴스에서 프로덕션 스토리지에 기록하여 잠재적인 데이터 손실을 방지하려면 백업을 복원하기 전에 3단계와 4단계에서 각 기능을 구성해야 합니다.

{% endwarning %}

### 2. 스테이징 인스턴스 설정

새 인스턴스를 스테이징 환경으로 작동하도록 설정합니다. 스테이징 인스턴스를 프로비저닝하고 설치하는 데 프로덕션 인스턴스와 마찬가지로 동일한 가이드를 사용할 수 있습니다. 자세한 내용은 “[{% data variables.product.prodname_ghe_server %} 인스턴스 설정](/enterprise/admin/guides/installation/setting-up-a-github-enterprise-server-instance/)”을 참조하세요.

프로덕션 인스턴스의 백업을 복원하려는 경우 다음 단계를 계속 진행합니다. 또는 인스턴스를 수동으로 구성하고 다음 단계를 건너뛸 수 있습니다.

### 3. {% data variables.product.prodname_actions %} 구성

필요에 따라 프로덕션 인스턴스에서 {% data variables.product.prodname_actions %}를 사용하는 경우 프로덕션 백업을 복원하기 전에 스테이징 인스턴스에서 기능을 구성합니다. {% data variables.product.prodname_actions %}을(를) 사용하지 않는 경우 "4로 건너뜁니다[. {% data variables.product.prodname_registry %}" 구성](#4-configure-github-packages)

{% warning %}

**경고**: 프로덕션 백업을 복원하기 전에 스테이징 인스턴스에서 {% data variables.product.prodname_actions %}을 구성하지 않으면 스테이징 인스턴스에서 프로덕션 인스턴스의 외부 스토리지를 사용하므로 데이터가 손실될 수 있습니다. 스테이징 인스턴스에 다른 외부 스토리지를 사용하는 것이 좋습니다. 자세한 내용은 "[스테이징 환경 사용](/admin/github-actions/advanced-configuration-and-troubleshooting/using-a-staging-environment)"을 참조하세요.

{% endwarning %}

{% data reusables.enterprise_installation.ssh-into-staging-instance %}
1. {% data variables.product.prodname_actions %}에 대한 외부 스토리지 공급자를 사용하도록 스테이징 인스턴스를 구성하려면 다음 명령 중 하나를 입력합니다.
{% indented_data_reference reusables.actions.configure-storage-provider-platform-commands spaces=3 %} {% data reusables.actions.configure-storage-provider %}
1. 스테이징 인스턴스에서 {% data variables.product.prodname_actions %}을(를) 사용하도록 준비하려면 다음 명령을 입력합니다.

   ```shell{:copy}
   ghe-config app.actions.enabled true
   ```

### 4. {% data variables.product.prodname_registry %} 구성

필요에 따라 프로덕션 인스턴스에서 {% data variables.product.prodname_registry %}를 사용하는 경우 프로덕션 백업을 복원하기 전에 스테이징 인스턴스에서 기능을 구성합니다. {% data variables.product.prodname_registry %}을(를) 사용하지 않는 경우 "5로 건너뜁니다[. 프로덕션 백업을 복원합니다](#5-restore-your-production-backup)."

{% warning %}

**경고**: 프로덕션 백업을 복원하기 전에 스테이징 인스턴스에서 {% data variables.product.prodname_registry %}을 구성하지 않으면 스테이징 인스턴스에서 프로덕션 인스턴스의 외부 스토리지를 사용하므로 데이터가 손실될 수 있습니다. 스테이징 인스턴스에 다른 외부 스토리지를 사용하는 것이 좋습니다.

{% endwarning %}

1. 스테이징 인스턴스로 복원할 백업을 검토합니다.
   - {% data variables.product.prodname_enterprise_backup_utilities %} 3.5 이상을 사용하여 백업을 수행한 경우 백업에는 {% data variables.product.prodname_registry %}에 대한 구성이 포함됩니다. 다음 단계를 계속 진행합니다.
   - {% data variables.product.prodname_enterprise_backup_utilities %} 3.4 이하 버전으로 백업을 수행한 경우 스테이징 인스턴스에서 {% data variables.product.prodname_registry %}을(를) 구성합니다. 자세한 내용은 "[엔터프라이즈용 {% data variables.product.prodname_registry %} 시작"을 참조하세요](/admin/packages/getting-started-with-github-packages-for-your-enterprise).
{% data reusables.enterprise_installation.ssh-into-staging-instance %}
1. 다음 명령을 입력하여 외부 스토리지 연결을 구성하고 자리 표시자 값을 연결의 실제 값으로 바꿉니다.
   - Azure Blob Storage:

     ```shell{:copy}
     ghe-config secrets.packages.blob-storage-type "azure"
     ghe-config secrets.packages.azure-container-name "AZURE CONTAINER NAME"
     ghe-config secrets.packages.azure-connection-string "CONNECTION STRING"
     ```
   - Amazon S3:

     ```shell{:copy}
     ghe-config secrets.packages.blob-storage-type "s3"
     ghe-config secrets.packages.service-url "S3 SERVICE URL"
     ghe-config secrets.packages.s3-bucket "S3 BUCKET NAME"
     ghe-config secrets.packages.aws-access-key "S3 ACCESS KEY ID"
     ghe-config secrets.packages.aws-secret-key "S3 ACCESS SECRET"
     ```
1. 스테이징 인스턴스에서 {% data variables.product.prodname_registry %}을(를) 사용하도록 준비하려면 다음 명령을 입력합니다.

   ```shell{:copy}
   ghe-config app.packages.enabled true
   ```

### 5. 프로덕션 백업 복원

`ghe-restore` 명령을 사용하여 백업에서 나머지 데이터를 복원합니다. 자세한 내용은 “[백업 복원](/admin/configuration/configuring-backups-on-your-appliance#restoring-a-backup)”을 참조하세요.

스테이징 인스턴스가 이미 구성되어 있고 설정, 인증서 및 라이선스 데이터를 덮어쓰려는 경우 명령에 옵션을 추가 `-c` 합니다. 옵션에 대한 자세한 내용은 {% data variables.product.prodname_enterprise_backup_utilities %} 설명서에서 [백업 및 복원 명령 사용을](https://github.com/github/backup-utils/blob/master/docs/usage.md#restoring-settings-tls-certificate-and-license) 참조하세요.

### 6. 인스턴스의 구성 검토

동일한 호스트 이름을 사용하여 스테이징 인스턴스에 액세스하려면 macOS 또는 Linux에서 파일을 편집하거나 `C:\Windows\system32\drivers\etc` Windows에서 파일을 편집 `/etc/hosts` 하여 IP 주소로 스테이징 인스턴스의 호스트 이름을 확인하도록 로컬 호스트 파일을 업데이트합니다.

{% note %}

**참고**: 스테이징 인스턴스는 프로덕션 인스턴스와 동일한 호스트 이름에서 액세스할 수 있어야 합니다. {% data variables.location.product_location %}의 호스트 이름 변경은 지원되지 않습니다. 자세한 내용은 “[호스트 이름 구성](/admin/configuration/configuring-network-settings/configuring-a-hostname)”을 참조하세요.

{% endnote %}

그런 다음 {% data variables.enterprise.management_console %}에서 스테이징 인스턴스의 구성을 검토합니다. 자세한 내용은 "[{% data variables.enterprise.management_console %}에 액세스](/admin/configuration/configuring-your-enterprise/accessing-the-management-console)"를 참조하세요.

{% warning %}

**경고**: 스테이징 인스턴스에 대해 {% data variables.product.prodname_actions %} 또는 {% data variables.product.prodname_registry %}를 구성한 경우 프로덕션 데이터를 덮어쓰지 않도록 하려면 {% data variables.enterprise.management_console %}의 외부 스토리지 구성이 프로덕션 인스턴스와 일치하지 않는지 확인합니다.

{% endwarning %}

### 7. 인스턴스의 구성 적용

{% data variables.enterprise.management_console %}에서 구성을 적용하려면 **설정 저장** 을 클릭합니다.

## 추가 참고 자료

- "[새 릴리스로 업그레이드 정보](/admin/overview/about-upgrades-to-new-releases)"

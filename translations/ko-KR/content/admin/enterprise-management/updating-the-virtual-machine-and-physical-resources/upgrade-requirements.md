---
title: 업그레이드 요구 사항
intro: '{% data variables.product.prodname_ghe_server %}를 업그레이드하기 전에 이러한 권장 사항 및 요구 사항을 검토하여 업그레이드 전략을 계획합니다.'
redirect_from:
  - /enterprise/admin/installation/upgrade-requirements
  - /enterprise/admin/guides/installation/finding-the-current-github-enterprise-release
  - /enterprise/admin/enterprise-management/upgrade-requirements
  - /admin/enterprise-management/upgrade-requirements
  - /enterprise/admin/guides/installation/about-upgrade-requirements
versions:
  ghes: '*'
type: reference
topics:
  - Enterprise
  - Upgrades
ms.openlocfilehash: 23ac63dd30c11f4c29cd17313a583579d2e2cea1
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148106879'
---
{% note %}

**참고:**
- 업그레이드 패키지의 지원되는 버전은 [ enterprise.github.com](https://enterprise.github.com/releases)에서 확인할 수 있습니다. 업그레이드를 완료하는 데 필요한 업그레이드 패키지의 가용성을 확인합니다. 패키지를 사용할 수 없는 경우 {% data variables.contact.contact_ent_support %}에 문의하세요.
- {% data variables.product.prodname_ghe_server %} 클러스터링을 사용하는 경우 클러스터링에 고유한 특정 지침은 {% data variables.product.prodname_ghe_server %} 클러스터링 가이드의 “[클러스터 업그레이드](/enterprise/admin/guides/clustering/upgrading-a-cluster/)”를 참조하세요.
- {% data variables.product.prodname_ghe_server %}의 릴리스 정보는 모든 버전의 {% data variables.product.prodname_ghe_server %}에 대한 포괄적인 새 기능 목록을 제공합니다. 자세한 내용은 [릴리스 페이지](https://enterprise.github.com/releases)를 참조하세요.

{% endnote %}

## 권장 사항

- 업그레이드 프로세스에 가능한 한 적은 수의 업그레이드를 포함합니다. 예를 들어 {% data variables.product.prodname_enterprise %} {{ enterpriseServerReleases.supported[2] }}에서 {{ enterpriseServerReleases.supported[1] }}로, 다시 {{ enterpriseServerReleases.latest }}로 업그레이드하는 대신, {% data variables.product.prodname_enterprise %} {{ enterpriseServerReleases.supported[2] }}에서 {{ enterpriseServerReleases.latest }}로 업그레이드할 수 있습니다. [{% data variables.enterprise.upgrade_assistant %}](https://support.github.com/enterprise/server-upgrade)를 사용하여 현재 릴리스 버전에서 업그레이드 경로를 찾습니다.
- 여러 버전이 뒤처진 경우 업그레이드 프로세스의 각 단계에서 {% data variables.location.product_location %}을(를) 최대한 앞으로 업그레이드합니다. 각 업그레이드에서 가능한 최신 버전을 사용하면 성능 향상 및 버그 수정을 활용할 수 있습니다. 예를 들어 {% data variables.product.prodname_enterprise %} 2.7에서 2.8로, 다시 2.10으로 업그레이드할 수 있지만 {% data variables.product.prodname_enterprise %} 2.7에서 2.9로, 다시 2.10으로 업그레이드하면 두 번째 단계에서 이후 버전이 사용됩니다.
- 업그레이드할 때 최신 패치 릴리스를 사용합니다. {% data reusables.enterprise_installation.enterprise-download-upgrade-pkg %}
- 스테이징 인스턴스를 사용하여 업그레이드 단계를 테스트합니다. 자세한 내용은 “[스테이징 인스턴스 설정](/enterprise/admin/guides/installation/setting-up-a-staging-instance/)”을 참조하세요.
- 여러 업그레이드를 실행하는 경우 백그라운드에서 실행되는 데이터 마이그레이션 및 업그레이드 작업이 완전히 완료되도록 기능 업그레이드 간에 24시간 이상 기다립니다.
- 가상 머신을 업그레이드하기 전에 스냅샷을 만듭니다. 자세한 내용은 “[스냅샷 만들기](/admin/enterprise-management/updating-the-virtual-machine-and-physical-resources/upgrading-github-enterprise-server#taking-a-snapshot)”를 참조하세요. 
- 최근 인스턴스의 성공적인 백업이 있었는지 확인합니다. 자세한 내용은 [{% data variables.product.prodname_enterprise_backup_utilities %} README.md 파일](https://github.com/github/backup-utils#readme)을 참조하세요.

## 요구 사항

- **최대** 두 개의 릴리스 뒤에 있는 기능 릴리스에서 업그레이드해야 합니다. 예를 들어 {% data variables.product.prodname_enterprise %} {{ enterpriseServerReleases.latest }}로 업그레이드하려면 {% data variables.product.prodname_enterprise %} {{ enterpriseServerReleases.supported[1] }} 또는 {{ enterpriseServerReleases.supported[2] }}에 있어야 합니다.
- 업그레이드 패키지를 사용하여 업그레이드할 때 {% data variables.product.prodname_ghe_server %} 최종 사용자를 위한 유지 관리 기간을 예약합니다.
- {% data reusables.enterprise_installation.hotpatching-explanation %}
- 영향을 받는 서비스(예: 커널, MySQL 또는 Elasticsearch)에 VM 재부팅 또는 서비스를 다시 시작이 필요한 경우 핫패치에 가동 중지 시간이 필요할 수 있습니다. 다시 부팅하거나 다시 시작해야 하는 경우 알림이 표시됩니다. 다시 부팅을 완료하거나 나중에 다시 시작할 수 있습니다.
- 업그레이드가 완료될 때까지 여러 버전의 특정 서비스를 설치하므로 핫패치를 통해 업그레이드할 때 추가 루트 스토리지를 사용할 수 있어야 합니다. 플라이트 전 검사는 루트 디스크 스토리지가 충분하지 않은 경우 사용자에게 알립니다.
- 핫패치를 통해 업그레이드하는 경우 핫패칭 프로세스에 영향을 미칠 수 있으므로 인스턴스가 너무 많이 로드될 수 없습니다.
- {% data variables.product.prodname_ghe_server %} 2.17로 업그레이드하면 감사 로그가 Elasticsearch에서 MySQL로 마이그레이션됩니다. 또한 이 마이그레이션을 통해 스냅샷을 복원하는 데 걸리는 시간과 디스크 공간도 늘어나게 됩니다. 마이그레이션하기 전에 다음 명령을 사용하여 Elasticsearch 감사 로그 인덱스의 바이트 수를 확인합니다.
``` shell
curl -s http://localhost:9201/audit_log/_stats/store | jq ._all.primaries.store.size_in_bytes
```
이 숫자를 사용하여 MySQL 감사 로그에 필요한 디스크 공간을 예측합니다. 또한 이 스크립트는 가져오기가 진행되는 동안 사용 가능한 디스크 공간을 모니터링합니다. 이 수를 모니터링하는 것은 사용 가능한 디스크 공간이 마이그레이션에 필요한 디스크 공간의 양에 가까운 경우에 특히 유용합니다.

## 다음 단계

권장 사항 및 요구 사항을 검토한 후 {% data variables.product.prodname_ghe_server %}를 업그레이드할 수 있습니다. 자세한 내용은 “[{% data variables.product.prodname_ghe_server %} 업그레이드](/enterprise/admin/guides/installation/upgrading-github-enterprise-server/)”를 참조하세요.

---
title: 어플라이언스에 대한 비밀 검사 구성
shortTitle: Configuring secret scanning
intro: '{% 데이터 variables.location.product_location %}에 대해 {% 데이터 variables.product.prodname_secret_scanning %}을(를) 사용하도록 설정, 구성 및 사용하지 않도록 설정할 수 있습니다. {% data variables.product.prodname_secret_scanning_caps %}를 사용하면 코드에서 실수로 커밋된 비밀을 검색할 수 있습니다.'
product: '{% data reusables.gated-features.secret-scanning %}'
miniTocMaxHeadingLevel: 3
redirect_from:
  - /admin/configuration/configuring-secret-scanning-for-your-appliance
  - /admin/advanced-security/configuring-secret-scanning-for-your-appliance
versions:
  ghes: '*'
type: how_to
topics:
  - Advanced Security
  - Enterprise
  - Secret scanning
  - Security
ms.openlocfilehash: 2ab9c158fe3f6724f8a90b490d1359d8bfb4e48d
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/20/2022
ms.locfileid: '148098088'
---
{% data reusables.secret-scanning.beta %}

## {% data variables.product.prodname_secret_scanning %} 정보

누군가 패턴이 알려진 비밀을 리포지토리로 체크 인하는 경우 {% data variables.product.prodname_secret_scanning %}는 체크 인할 때 비밀을 catch하고 누출의 영향을 완화하는 데 도움을 줍니다. 리포지토리 관리자는 비밀이 포함된 커밋에 대해 알림을 받으며, 리포지토리의 보안 탭에서 검색된 모든 비밀을 빠르게 볼 수 있습니다. 자세한 내용은 “[{% data variables.product.prodname_secret_scanning %} 정보](/code-security/secret-scanning/about-secret-scanning)”를 참조하세요.

## 라이선스에 {% data variables.product.prodname_GH_advanced_security %}가 포함되어 있는지 확인

{% data reusables.advanced-security.check-for-ghas-license %}

## {% data variables.product.prodname_secret_scanning %}에 대한 필수 조건

- {% 데이터 variables.location.product_location %}을(를) 실행하는 VM/KVM에서 [SSSE3](https://www.intel.com/content/dam/www/public/us/en/documents/manuals/64-ia-32-architectures-optimization-manual.pdf#G3.1106470) (추가 스트리밍 SIMD 확장 3) CPU 플래그를 사용하도록 설정해야 합니다.

- {% data variables.product.prodname_GH_advanced_security %}{% ifversion ghes %}에 대한 라이선스(“[{% data variables.product.prodname_GH_advanced_security %}에 대한 청구 정보](/billing/managing-billing-for-github-advanced-security/about-billing-for-github-advanced-security)” 참조){% endif %}

- 관리 콘솔에서 {% data variables.product.prodname_secret_scanning_caps %} 사용 설정(“엔터프라이즈에 대해 [{% data variables.product.prodname_GH_advanced_security %} 사용 설정](/admin/advanced-security/enabling-github-advanced-security-for-your-enterprise)” 참조)

### vCPU에서 SSSE3 플래그에 대한 지원 확인

{% data variables.product.prodname_secret_scanning %}는 하드웨어 가속 패턴 일치를 활용하여 {% data variables.product.prodname_dotcom %} 리포지토리에 커밋된 잠재적 자격 증명을 찾기 때문에 SSSE3 명령 세트가 필요합니다. SSSE3은 대부분의 최신 CPU에 대해 사용하도록 설정됩니다. {% data variables.product.prodname_ghe_server %} 인스턴스에 사용할 수 있는 vCPU에 대해 SSSE3이 사용하도록 설정되어 있는지 확인할 수 있습니다.

1. {% data variables.product.prodname_ghe_server %} 인스턴스를 위한 관리 셸에 연결합니다. 자세한 내용은 “[관리 셸(SSH)에 액세스](/admin/configuration/accessing-the-administrative-shell-ssh)”를 참조하세요.
2. 다음 명령을 입력합니다.

   ```shell
   grep -iE '^flags.*ssse3' /proc/cpuinfo >/dev/null | echo $?
   ```

   `0` 값이 반환되면 SSSE3 플래그를 사용할 수 있고 사용하도록 설정되었음을 의미합니다. 이제 {% 데이터 variables.product.prodname_secret_scanning %}에 {% 데이터 variables.location.product_location %}을(를) 사용하도록 설정할 수 있습니다. 자세한 내용은 아래 “[{% data variables.product.prodname_secret_scanning %} 사용 설정](#enabling-secret-scanning)”을 참조하세요.

   `0`을 반환하지 않으면 VM/KVM에서 SSSE3이 사용하도록 설정되지 않은 것입니다. 플래그를 사용하도록 설정하거나 게스트 VM에서 사용할 수 있도록 설정하는 방법에 대한 하드웨어/하이퍼바이저 설명서를 참조해야 합니다.

## {% data variables.product.prodname_secret_scanning %} 사용하도록 설정

{% data reusables.enterprise_management_console.enable-disable-security-features %}

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% data reusables.enterprise_management_console.advanced-security-tab %}
1. “보안”에서 **{% data variables.product.prodname_secret_scanning_caps %}** 를 클릭합니다.
![{% data variables.product.prodname_secret_scanning %}를 사용하거나 사용하지 않도록 설정하는 확인란](/assets/images/enterprise/management-console/enable-secret-scanning-checkbox.png) {% data reusables.enterprise_management_console.save-settings %}

## {% data variables.product.prodname_secret_scanning %}를 사용하지 않도록 설정

{% data reusables.enterprise_management_console.enable-disable-security-features %}

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% data reusables.enterprise_management_console.advanced-security-tab %}
1. “보안”에서 **{% data variables.product.prodname_secret_scanning_caps %}** 를 선택 취소합니다.
![{% data variables.product.prodname_secret_scanning %}를 사용하거나 사용하지 않도록 설정하는 확인란](/assets/images/enterprise/management-console/secret-scanning-disable.png) {% data reusables.enterprise_management_console.save-settings %}

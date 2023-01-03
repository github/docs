---
title: 속도 제한 구성
intro: '{% data variables.enterprise.management_console %}을 사용하여 {% data variables.product.prodname_ghe_server %}에 대한 속도 제한을 설정할 수 있습니다.'
redirect_from:
  - /enterprise/admin/installation/configuring-rate-limits
  - /enterprise/admin/configuration/configuring-rate-limits
  - /admin/configuration/configuring-rate-limits
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Infrastructure
  - Performance
ms.openlocfilehash: 2a90093f833639fa247acc7292d9897728043005
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107551'
---
## {% data variables.product.prodname_enterprise_api %}에 대한 속도 제한 사용

{% data variables.product.prodname_enterprise_api %}에 대한 속도 제한을 사용하도록 설정하면 개별 또는 인증되지 않은 사용자가 리소스를 과도하게 사용하는 것을 방지할 수 있습니다. 자세한 내용은 “[REST API의 리소스](/rest/overview/resources-in-the-rest-api#rate-limiting)”를 참조하세요.

{% ifversion ghes %} 관리 셸의 `ghe-config` 유틸리티를 사용하여 API 속도 제한에서 사용자 목록을 제외할 수 있습니다. 자세한 내용은 “[명령줄 유틸리티](/enterprise/admin/configuration/command-line-utilities#ghe-config)”를 참조하세요.
{% endif %}

{% note %}

**참고:** {% data variables.enterprise.management_console %}은 각 속도 제한에 대한 기간(분당 또는 시간당)을 나열합니다.

{% endnote %}

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %}
2. “속도 제한”에서 **HTTP API 속도 제한 사용 설정** 을 선택합니다.
![API 속도 제한을 사용하도록 설정하기 위한 확인란](/assets/images/enterprise/management-console/api-rate-limits-checkbox.png)
3. API마다 인증 및 인증되지 않은 요청에 대한 제한을 입력하거나 미리 채워진 기본 제한을 수락합니다.
{% data reusables.enterprise_management_console.save-settings %}

{% ifversion enterprise-authentication-rate-limits %}
## {% data variables.enterprise.management_console %}에 대한 인증에 대한 속도 제한 구성

{% data variables.enterprise.management_console %}에 대한 잠금 시간 및 로그인 시도 제한을 구성할 수 있습니다. 사용자가 로그인 시도 제한을 초과하는 경우 {% data variables.enterprise.management_console %}은(는) 잠금 시간까지 설정된 기간 동안 잠긴 상태로 유지됩니다. {% data reusables.enterprise_management_console.unlocking-management-console-with-shell %}


{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %}
2. "로그인 시도 속도 제한"에서 잠금 시간 및 로그인 시도 속도 제한을 구성하거나 미리 채워진 기본 설정을 적용합니다.
![잠금 시간 및 로그인 시도 속도 제한을](/assets/images/enterprise/management-console/login-attempt-rate-limiting.png) 구성하기 위한 필드 {% data reusables.enterprise_management_console.save-settings %}

{% endif %}
## 보조 속도 제한 사용 설정

보조 속도 제한을 설정하면 {% data variables.location.product_location %}에서 전체 서비스 수준을 보호할 수 있습니다.

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% ifversion ghes %}
2. “속도 제한”에서 **보조 속도 제한 사용 설정** 을 선택합니다.
   ![보조 속도 제한을 사용 설정하기 위한 확인란](/assets/images/enterprise/management-console/secondary-rate-limits-checkbox.png) {% else %}
2. “속도 제한”에서 **남용률 제한 사용 설정** 을 선택합니다.
    ![남용률 제한을 사용 설정하기 위한 확인란](/assets/images/enterprise/management-console/abuse-rate-limits-checkbox.png) {% endif %}
3. 총 요청에 대한 제한, CPU 제한 및 검색에 대한 CPU 제한을 입력하거나 미리 채워진 기본 제한을 적용합니다.
{% data reusables.enterprise_management_console.save-settings %}

## Git에 대한 속도 제한 사용

{% data variables.product.company_short %}의 직원이 권장한 경우 리포지토리 네트워크 또는 사용자 ID당 Git 속도 제한을 적용할 수 있습니다. Git 속도 제한은 분당 동시 작업으로 표현되며 현재 CPU 부하에 따라 적응형으로 적용됩니다.

{% warning %}

**경고:** {% data variables.product.company_short %}의 직원이 직접 권장하지 않는 한 이 설정을 사용하지 않도록 설정하는 것이 좋습니다. Git 작업은 CPU 및 RAM 사용의 주요 동인은 거의 없습니다. 이 기능을 사용하도록 설정하면 높은 부하 조건에서 Git 작업이 실패할 가능성이 높지만 해당 조건의 근본 원인을 해결하지는 못합니다.

{% endwarning %}

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %}
2. “속도 제한”에서 **Git 속도 제한 사용 설정** 을 선택합니다.
![Git 속도 제한을 사용하도록 설정하기 위한 확인란](/assets/images/enterprise/management-console/git-rate-limits-checkbox.png)
3. 각 리포지토리 네트워크 또는 사용자 ID에 대한 제한을 입력합니다.
  ![리포지토리 네트워크 및 사용자 ID 제한에 대한 필드](/assets/images/enterprise/management-console/example-git-rate-limits.png) {% data reusables.enterprise_management_console.save-settings %}

{% ifversion ghes > 3.4 %}

## {% data variables.product.prodname_actions %}에 대한 속도 제한 설정

{% data variables.product.prodname_actions %} 워크플로 실행에 속도 제한을 적용할 수 있습니다. {% data variables.product.prodname_actions %}에 대한 자세한 내용은 "[엔터프라이즈용 {% data variables.product.prodname_actions %} 정보](/admin/github-actions/getting-started-with-github-actions-for-your-enterprise/about-github-actions-for-enterprises)"를 참조하세요.

### {% data variables.product.prodname_actions %}에 대한 속도 제한 정보

{% data variables.product.product_name %} 인스턴스는 각 {% data variables.product.prodname_actions %} 워크플로 작업을 실행기에게 할당합니다. 인스턴스가 사용 가능한 실행기에 작업을 즉시 할당할 수 없는 경우 실행기를 사용할 수 있을 때까지 작업이 큐에서 대기합니다. {% data variables.product.prodname_actions %}이(가) 높은 부하를 지속하면 큐가 백업될 수 있으며 {% data variables.location.product_location %}의 성능이 저하될 수 있습니다.

이 성능 저하를 방지하려면 {% data variables.product.prodname_actions %}에 대한 속도 제한을 구성하면 됩니다. 이 속도 제한은 분당 작업 실행으로 표시됩니다. {% data variables.product.product_name %}은 인스턴스에서 모든 작업 실행의 합계에 대한 속도 제한을 계산하고 적용합니다. 실행이 속도 제한을 초과하면 큐를 입력하는 대신 추가 실행이 실패합니다. 다음 오류가 실행의 주석에 표시됩니다.

> 워크플로 실행 요청에 대한 속도 제한을 초과했습니다. 실행을 다시 시도하기 전에 기다려 주세요.

적절한 속도 제한은 {% data variables.location.product_location %}이(가) 일상적인 작업을 방해하지 않고 {% data variables.product.prodname_actions %}의 비정상적인 사용으로부터 보호합니다. 정확한 임계값은 인스턴스의 사용 가능한 리소스와 전체 부하 프로필에 따라 달라집니다. {% data variables.product.prodname_actions %}에 대한 하드웨어 요구 사항에 대한 자세한 내용은 “[{% data variables.product.product_name %}용 {% data variables.product.prodname_actions %} 시작](/admin/github-actions/getting-started-with-github-actions-for-your-enterprise/getting-started-with-github-actions-for-github-enterprise-server#review-hardware-requirements)”을 참조하세요.

기본적으로 {% data variables.product.prodname_actions %}에 대한 속도 제한은 사용하지 않도록 설정됩니다. {% data variables.product.product_name %}은 성능 저하 없이 일시적인 사용량 급증을 처리할 수 있으므로 이 속도 제한은 지속적인 높은 부하로부터 보호하기 위한 것입니다. 성능 문제가 발생하지 않는 한 속도 제한을 비활성화된 상태로 두는 것이 좋습니다. 경우에 따라 {% data variables.contact.github_support %}에서 {% data variables.product.prodname_actions %}에 대한 속도 제한을 사용하도록 권장할 수 있습니다. 

### {% data variables.product.prodname_actions %}에 대한 속도 제한 활성화 또는 비활성화

{% data reusables.enterprise_installation.ssh-into-instance %}
1. 속도 제한을 사용하도록 설정하고 구성하려면 다음 두 명령을 실행하여 **RUNS-PER-MINUTE** 를 선택한 값으로 바꿉니다.

   ```shell
   ghe-config actions-rate-limiting.enabled true
   ghe-config actions-rate-limiting.queue-runs-per-minute RUNS-PER-MINUTE
   ```
1. 속도 제한을 활성화한 후 비활성화하려면 다음 명령을 실행합니다.

   ```
   ghe-config actions-rate-limiting.enabled false
   ```
1. 구성을 적용하려면 다음 명령을 실행합니다.

   ```
   ghe-config-apply
   ```
1. 구성 실행이 완료될 때까지 기다립니다.

{% endif %}

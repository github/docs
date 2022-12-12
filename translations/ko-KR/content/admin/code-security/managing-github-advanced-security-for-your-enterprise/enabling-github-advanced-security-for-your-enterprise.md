---
title: 엔터프라이즈에 GitHub Advanced Security 사용
shortTitle: Enabling GitHub Advanced Security
intro: '{% data variables.product.prodname_GH_advanced_security %}를 포함하도록 {% data variables.product.product_name %}를 구성할 수 있습니다. 이러게 하면 코드에서 보안 문제를 찾고 해결하는 데 도움이 되는 추가 기능이 제공됩니다.'
product: '{% data reusables.gated-features.ghas %}'
redirect_from:
  - /admin/advanced-security/enabling-github-advanced-security-for-your-enterprise
versions:
  ghes: '*'
type: how_to
topics:
  - Advanced Security
  - Code scanning
  - Enterprise
  - Secret scanning
  - Security
ms.openlocfilehash: b57e8a5e348226e9d68fb5835c80b5ce8a2d6bc6
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/20/2022
ms.locfileid: '148098087'
---
## {% data variables.product.prodname_GH_advanced_security %} 사용 설정 정보

{% data reusables.advanced-security.ghas-helps-developers %}

{% ifversion ghes %} 엔터프라이즈에 대해 {% data variables.product.prodname_GH_advanced_security %}를 사용하도록 설정하면 액세스를 제한하는 정책을 설정하지 않는 한 모든 조직의 리포지토리 관리자가 기능을 사용하도록 설정할 수 있습니다. 자세한 내용은 “[엔터프라이즈에서 {% data variables.product.prodname_advanced_security %}에 대한 정책 적용](/admin/policies/enforcing-policies-for-advanced-security-in-your-enterprise)”을 참조하세요.
{% else %} 엔터프라이즈에 {% data variables.product.prodname_GH_advanced_security %}를 사용하도록 설정하면 모든 조직의 리포지토리 관리자가 기능을 사용하도록 설정할 수 있습니다. {% endif %}

{% ifversion ghes %} GitHub Advanced Security의 단계적 배포에 대한 지침은 “[대규모 GitHub Advanced Security 도입 소개](/code-security/adopting-github-advanced-security-at-scale/introduction-to-adopting-github-advanced-security-at-scale)”를 참조하세요.
{% endif %}

## 라이선스에 {% data variables.product.prodname_GH_advanced_security %}가 포함되어 있는지 확인

{% ifversion ghes %} {% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.license-tab %}
1. 라이선스에 {% data variables.product.prodname_GH_advanced_security %}가 포함된 경우 라이선스 페이지에 현재 사용량에 대한 세부 정보를 보여 주는 섹션이 포함됩니다.
![엔터프라이즈 라이선스의 {% data variables.product.prodname_GH_advanced_security %} 섹션](/assets/images/help/billing/ghas-orgs-list-enterprise-ghes.png) {% endif %}

## {% data variables.product.prodname_GH_advanced_security %}를 사용하도록 설정하기 위한 필수 구성 요소

1. {% data variables.product.prodname_GH_advanced_security %}를 포함하도록 {% data variables.product.product_name %}의 라이선스를 업그레이드합니다.{% ifversion ghes %} 라이선스에 대한 자세한 내용은 “[에 대한 청구 정보 {% data variables.product.prodname_GH_advanced_security %}](/billing/managing-billing-for-github-advanced-security/about-billing-for-github-advanced-security)”를 참조하세요. {% endif %}
2. 새 라이선스 파일 다운로드 자세한 내용은 “[{% data variables.product.prodname_enterprise %} 라이선스 다운로드](/billing/managing-your-license-for-github-enterprise/downloading-your-license-for-github-enterprise)”를 참조하세요.
3. 새 라이선스 파일을 {% 데이터 variables.location.product_location %}에 업로드합니다. 자세한 내용은 “[에 새 라이선스 업로드{% data variables.product.prodname_ghe_server %}](/billing/managing-your-license-for-github-enterprise/uploading-a-new-license-to-github-enterprise-server)”를 참조하세요. {% ifversion ghes %}
4. 사용하도록 설정할 기능에 대한 필수 구성 요소를 검토합니다.

    - {% data variables.product.prodname_code_scanning_capc %}은 “[어플라이언스의 {% data variables.product.prodname_code_scanning %} 구성](/admin/advanced-security/configuring-code-scanning-for-your-appliance#prerequisites-for-code-scanning)”을 참조하세요.
    - {% data variables.product.prodname_secret_scanning_caps %}은 “[어플라이언스의 {% data variables.product.prodname_secret_scanning %} 구성](/admin/advanced-security/configuring-secret-scanning-for-your-appliance#prerequisites-for-secret-scanning)”을 참조하세요.{% endif %}
    - {% data variables.product.prodname_dependabot %}은 “[엔터프라이즈에 {% data variables.product.prodname_dependabot %} 사용](/admin/configuration/configuring-github-connect/enabling-dependabot-for-your-enterprise)”을 참조하세요. 

## {% data variables.product.prodname_GH_advanced_security %} 기능 활성화 및 비활성화

{% data reusables.enterprise_management_console.enable-disable-security-features %}

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% data reusables.enterprise_management_console.advanced-security-tab %}{% ifversion ghes %}
1. “보안”에서, 사용하도록 설정할 기능을 선택하고 사용하지 않도록 설정할 기능을 선택 취소합니다.
{% ifversion ghes %}![{% data variables.product.prodname_advanced_security %} 기능을 사용하거나 사용하지 않도록 설정하는 확인란](/assets/images/enterprise/3.2/management-console/enable-security-checkboxes.png){% else %}![{% data variables.product.prodname_advanced_security %} 기능을 사용하거나 사용하지 않도록 설정하는 확인란](/assets/images/enterprise/management-console/enable-advanced-security-checkboxes.png){% endif %}{% else %}
1. “{% data variables.product.prodname_advanced_security %}” 아래에서 **{% data variables.product.prodname_code_scanning_capc %}** 을 클릭합니다.
![{% data variables.product.prodname_code_scanning %}을 사용하거나 사용하지 않도록 설정하는 확인란](/assets/images/enterprise/management-console/enable-code-scanning-checkbox.png){% endif %} {% data reusables.enterprise_management_console.save-settings %}

{% data variables.product.product_name %}의 재시작이 완료되면 새로 사용하도록 설정된 기능에 필요한 추가 리소스를 설정할 준비가 된 것입니다. 자세한 내용은 “[어플라이언스의 {% data variables.product.prodname_code_scanning %} 구성](/admin/advanced-security/configuring-code-scanning-for-your-appliance)”을 참조하세요.

## 관리 셸(SSH)을 통해 {% data variables.product.prodname_GH_advanced_security %} 기능을 사용하거나 사용하지 않도록 설정

{% 데이터 variables.location.product_location %}에서 프로그래밍 방식으로 기능을 사용하거나 사용하지 않도록 설정할 수 있습니다. {% data variables.product.prodname_ghe_server %}에 대한 관리 셸 및 명령줄 유틸리티에 대한 자세한 내용은 “[관리 셸(SSH)에 액세스](/admin/configuration/accessing-the-administrative-shell-ssh)” 및 “[명령줄 유틸리티](/admin/configuration/command-line-utilities#ghe-config)”를 참조하세요.

예를 들어, 스테이징 또는 재해 복구용 인스턴스를 배포할 때 코드로서의 인프라 도구를 사용하여 {% data variables.product.prodname_GH_advanced_security %} 기능을 사용하도록 설정할 수 있습니다.

1. {% 데이터 variables.location.product_location %}에 SSH합니다.
1. {% data variables.product.prodname_GH_advanced_security %}의 기능을 사용하도록 설정합니다.

    - {% data variables.product.prodname_code_scanning_capc %}을 사용하도록 설정하려면 다음 명령을 입력합니다.
    ```shell
    ghe-config app.minio.enabled true
    ghe-config app.code-scanning.enabled true
    ```
    - {% data variables.product.prodname_secret_scanning_caps %}을 사용하도록 설정하려면 다음 명령을 입력합니다.
    ```shell
    ghe-config app.secret-scanning.enabled true
    ```
    - 종속성 그래프를 사용하도록 설정하려면 다음 {% ifversion ghes %}command{% else %}commands{% endif %}를 입력합니다.
    {% ifversion ghes %}```shell ghe-config app.dependency-graph.enabled true
    ```
    {% else %}```shell
    ghe-config app.github.dependency-graph-enabled true
    ghe-config app.github.vulnerability-alerting-and-settings-enabled true
    ```{% endif %}
2. Optionally, disable features for {% data variables.product.prodname_GH_advanced_security %}.

    - To disable {% data variables.product.prodname_code_scanning %}, enter the following commands.
    ```shell
    ghe-config app.minio.enabled false
    ghe-config app.code-scanning.enabled false
    ```
    - {% data variables.product.prodname_secret_scanning %}을 사용하지 않으려면 다음 명령을 입력합니다.
    ```shell
    ghe-config app.secret-scanning.enabled false
    ```
    - 종속성 그래프를 사용하지 않도록 설정하려면 다음 {% ifversion ghes %}command{% else %}commands{% endif %}를 입력합니다.
    {% ifversion ghes %}```shell ghe-config app.dependency-graph.enabled false
    ```
    {% else %}```shell
    ghe-config app.github.dependency-graph-enabled false
    ghe-config app.github.vulnerability-alerting-and-settings-enabled false
    ```{% endif %}
3. Apply the configuration.
    ```shell
    ghe-config-apply
    ```

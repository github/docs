---
title: GitHub Advanced Security 정보
intro: '{% data variables.product.prodname_dotcom %}는 {% data variables.product.prodname_advanced_security %} 라이선스에 따라 고객에게 추가 보안 기능을 제공합니다.{% ifversion fpt or ghec %} 이러한 기능은 {% data variables.product.prodname_dotcom_the_website %}의 퍼블릭 리포지토리에도 사용할 수 있습니다.{% endif %}'
product: '{% data reusables.gated-features.ghas %}'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Security
redirect_from:
  - /github/getting-started-with-github/about-github-advanced-security
  - /github/getting-started-with-github/learning-about-github/about-github-advanced-security
shortTitle: GitHub Advanced Security
ms.openlocfilehash: 49a58dd78c906982c8c8b9702d55cd11662cb12e
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 11/09/2022
ms.locfileid: '148159183'
---
## {% data variables.product.prodname_GH_advanced_security %} 정보

{% data variables.product.prodname_dotcom %}에는 코드 품질을 개선하고 유지 관리하는 데 도움이 되는 많은 기능이 있습니다. 이 중에서{% ifversion not ghae %} 종속성 그래프 및 {% data variables.product.prodname_dependabot_alerts %}와 같은{% endif %} 일부 기능은 모든 플랜에 포함되어 있습니다. 다른 보안 기능을 사용하려면 {% data variables.product.prodname_GH_advanced_security %}{% ifversion fpt or ghec %} 라이선스가 {% data variables.product.prodname_dotcom_the_website %}{% endif %}의 퍼블릭 리포지토리와는 별도로 리포지토리에서 실행되어야 합니다.

{% ifversion ghes or ghec %}{% data variables.product.prodname_GH_advanced_security %} 라이선스를 구입하는 방법에 대한 자세한 내용은 “[{% data variables.product.prodname_GH_advanced_security %} 요금 청구 정보](/billing/managing-billing-for-github-advanced-security/about-billing-for-github-advanced-security)”를 참조하세요.{% elsif ghae %}베타 릴리스 중에는 {% data variables.product.prodname_ghe_managed %}의 {% data variables.product.prodname_GH_advanced_security %}에 대한 요금이 부과되지 않습니다.{% elsif fpt %}{% data variables.product.prodname_GH_advanced_security %} 라이선스를 구매하려면 {% data variables.product.prodname_enterprise %}를 사용해야 합니다. {% data variables.product.prodname_GH_advanced_security %}가 포함된 {% data variables.product.prodname_enterprise %}로 업그레이드하는 방법에 대한 자세한 내용은 “[GitHub 제품](/get-started/learning-about-github/githubs-products)” 및 “[{% data variables.product.prodname_GH_advanced_security %} 요금 청구 정보](/billing/managing-billing-for-github-advanced-security/about-billing-for-github-advanced-security)”를 참조하세요.{% endif %}

## {% data variables.product.prodname_advanced_security %} 기능 정보

{% data variables.product.prodname_GH_advanced_security %} 라이선스는 다음과 같은 추가 기능을 제공합니다.

- **{% data variables.product.prodname_code_scanning_capc %}** - 코드에서 잠재적인 보안 취약성 및 코딩 오류를 검색합니다. 자세한 내용은 “[{% data variables.product.prodname_code_scanning %} 정보](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/about-code-scanning)”를 참조하세요.

- **{% data variables.product.prodname_secret_scanning_caps %}** - 리포지토리에 체크 인된 키 및 토큰과 같은 비밀을 검색합니다.{% ifversion secret-scanning-push-protection %} 푸시 보호를 사용할 수 있는 경우 리포지토리에 푸시될 때도 비밀을 검색합니다. 자세한 내용은 “[{% data variables.product.prodname_secret_scanning %} 정보](/code-security/secret-scanning/about-secret-scanning)” 및 “[{% data variables.product.prodname_secret_scanning %}를 사용하여 푸시 보호](/code-security/secret-scanning/protecting-pushes-with-secret-scanning)”를 참조하세요.{% else %} 자세한 내용은 “[{% data variables.product.prodname_secret_scanning %} 정보](/code-security/secret-scanning/about-secret-scanning)”를 참조하세요.{% endif %}

- **종속성 검토** - 종속성에 대한 변경 내용의 전체 영향을 표시하고 끌어오기 요청을 병합하기 전에 취약한 버전의 세부 정보를 확인합니다. 자세한 내용은 “[종속성 검토 정보](/code-security/supply-chain-security/about-dependency-review)”를 참조하세요.

{% ifversion ghes < 3.7 or ghae %}
<!-- Ref: ghae > 3.6 remove GHAE versioning from this section when the `security-overview-displayed-alerts` flag is toggled for GHAE -->
- **보안 개요** - 조직에 대한 보안 구성 및 경고를 검토하고 가장 큰 위험에 처한 리포지토리를 식별합니다. 자세한 내용은 "[보안 개요 정보"를 참조하세요.](/code-security/security-overview/about-the-security-overview)
{% endif %}

{% ifversion fpt or ghec %} 아래 표에는 퍼블릭 및 프라이빗 리포지토리에 대한 {% data variables.product.prodname_GH_advanced_security %} 기능의 가용성이 요약되어 있습니다.

|                   | 퍼블릭 리포지토리           | {% data variables.product.prodname_advanced_security %}가 없는 프라이빗 리포지토리 | {% data variables.product.prodname_advanced_security %}가 있는 프라이빗 리포지토리 |
| :-----------------: | :---------------------------: | :--------------------------------------------: | :-----------------------------------------: |
| 코드 검사     | Yes                         | 예                                           | 예                                        |
| 비밀 검사   | 예 **(제한된 기능만)** | 예                                           | 예                                       |
| 종속성 검토 | Yes                         | 예                                           | 예                                       |
{% endif %}

개발 중인 {% data variables.product.prodname_advanced_security %} 기능에 대한 자세한 내용은 “[{% data variables.product.prodname_dotcom %} 퍼블릭 로드맵](https://github.com/github/roadmap)”을 참조하세요. 모든 보안 기능에 대한 개요는 “[{% data variables.product.prodname_dotcom %} 보안 기능](/code-security/getting-started/github-security-features)”을 참조하세요.

{% ifversion fpt or ghec %} {% data variables.product.prodname_GH_advanced_security %} 기능은 {% data variables.product.prodname_dotcom_the_website %}의 모든 퍼블릭 리포지토리에서 사용할 수 있습니다. {% data variables.product.prodname_advanced_security %}가 포함된 {% data variables.product.prodname_ghe_cloud %}를 사용하는 조직은 프라이빗 및 내부 리포지토리에도 해당 기능을 추가로 사용할 수 있습니다. {% ifversion fpt %} 자세한 내용은 [{% data variables.product.prodname_ghe_cloud %} 설명서를 참조하세요](/enterprise-cloud@latest/get-started/learning-about-github/about-github-advanced-security#enabling-advanced-security-features).
{% endif %}

{% ifversion ghes or ghec or ghae %}
## 엔터프라이즈에서 GitHub Advanced Security 배포

상위 수준에서 {% data variables.product.prodname_GH_advanced_security %} 배포를 계획하고 권장하는 롤아웃 단계를 검토하기 위해 알아야 할 사항에 대해 알아보려면 “[{% data variables.product.prodname_GH_advanced_security %} 대규모 채택](/code-security/adopting-github-advanced-security-at-scale)”을 참조하세요.

{% endif %}

{% ifversion not fpt %}
## {% data variables.product.prodname_advanced_security %} 기능 사용

{%- ifversion ghes %} 사이트 관리자는 {% data variables.location.product_location %}에 대해 {% data variables.product.prodname_advanced_security %}를 사용하도록 설정해야 이러한 기능을 사용할 수 있습니다. 자세한 내용은 “[Advanced Security 기능 구성](/admin/configuration/configuring-advanced-security-features)”을 참조하세요.

시스템이 설정되면 조직 또는 리포지토리 수준에서 기능을 사용하거나 사용하지 않도록 설정할 수 있습니다.

{%- elsif ghec %} 퍼블릭 리포지토리의 경우 기능이 영구적으로 켜지며, 코드가 더 이상 공개되지 않도록 프로젝트의 표시 유형을 변경하는 경우에만 사용하지 않도록 설정할 수 있습니다.

다른 리포지토리의 경우 엔터프라이즈 계정 라이선스가 있으면 조직 또는 리포지토리 수준에서 기능을 사용하거나 사용하지 않도록 설정할 수 있습니다.

{%- elsif ghae %} 조직 또는 리포지토리 수준에서 기능을 사용하거나 사용하지 않도록 설정할 수 있습니다.
{%- endif %} 자세한 내용은 “[조직의 보안 및 분석 설정 관리](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)” 또는 “[리포지토리의 보안 및 분석 설정 관리](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository)”를 참조하세요.

{% ifversion ghec or ghes %} 엔터프라이즈 계정이 있는 경우 전체 엔터프라이즈의 라이선스 사용이 엔터프라이즈 라이선스 페이지에 표시됩니다. 자세한 내용은 “[{% data variables.product.prodname_GH_advanced_security %} 사용량 보기](/billing/managing-licensing-for-github-advanced-security/viewing-your-github-advanced-security-usage)”를 참조하세요.
{% endif %}

{% endif %}

{% ifversion fpt or ghec %}
## {% data variables.product.prodname_advanced_security %}에 대한 시작 워크플로 정보

{% data reusables.advanced-security.starter-workflows-beta %} {% data reusables.advanced-security.starter-workflow-overview %}

시작 워크플로에 대한 자세한 내용은 “[시작 워크플로를 사용하여 {% data variables.product.prodname_code_scanning %} 설정](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/setting-up-code-scanning-for-a-repository#setting-up-code-scanning-using-starter-workflows)” 및 “[시작 워크플로 사용](/actions/using-workflows/using-starter-workflows)”을 참조하세요.

{% endif %}

{% ifversion ghec or ghes or ghae %}
## 추가 참고 자료

- “[엔터프라이즈 계정에서 {% data variables.product.prodname_advanced_security %}에 대한 정책 적용](/admin/policies/enforcing-policies-for-advanced-security-in-your-enterprise)”

{% endif %} {% endif %}

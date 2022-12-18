---
title: 보안 개요 정보
intro: '보안 개요 페이지에서 조직 또는 팀이 소유한 리포지토리에 대한 보안 경고를 보고, 필터링하고, 정렬할 수 있습니다.'
permissions: '{% data reusables.security-overview.permissions %}'
product: '{% data reusables.gated-features.security-overview %}'
redirect_from:
  - /code-security/security-overview/exploring-security-alerts
versions:
  fpt: '*'
  ghae: '*'
  ghes: '*'
  ghec: '*'
type: how_to
topics:
  - Security overview
  - Advanced Security
  - Alerts
  - Dependabot
  - Dependencies
  - Organizations
  - Teams
shortTitle: About the security overview
ms.openlocfilehash: 0e634bafbb699d27588312b57084b557a3c82ca1
ms.sourcegitcommit: fdc4466e89467a7b13239e26c6042dc1428946b6
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 11/14/2022
ms.locfileid: '148163754'
---
{% ifversion ghes < 3.5 or ghae %} {% data reusables.security-overview.beta %} {% endif %}

## 보안 개요 정보

{% data reusables.security-overview.about-the-security-overview %} {% ifversion fpt %} 자세한 내용은 [{% data variables.product.prodname_ghe_cloud %} 설명서를 참조하세요](/enterprise-cloud@latest/code-security/security-overview/about-the-security-overview). {% endif %}

{% ifversion ghec or ghes or ghae %} 보안 개요는 리포지토리에 사용할 수 있는 보안 기능을 보여주고 각 기능에 대한 경고를 통합합니다. 

- {% data variables.product.prodname_dependabot %} 기능 및 경고에 대한 위험 및 적용 범위 정보는 모든 리포지토리에 대해 표시됩니다. 
- {% data variables.product.prodname_GH_advanced_security %} 기능(예: {% data variables.product.prodname_code_scanning %} 및 {% data variables.product.prodname_secret_scanning %})에 대한 위험 및 적용 범위 정보는 {% data variables.product.prodname_GH_advanced_security %}을(를) 사용하는 기업에만 표시됩니다.

자세한 내용은 "[{% data variables.product.prodname_dependabot_alerts %}](/code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/about-alerts-for-vulnerable-dependencies#dependabot-alerts-for-vulnerable-dependencies)정보" 및 "[{% data variables.product.prodname_GH_advanced_security %}](/get-started/learning-about-github/about-github-advanced-security)정보"를 참조하세요.

## 경고 필터링 및 정렬 정보

보안 개요는 리포지토리 그룹의 보안을 이해하는 강력한 방법을 제공합니다. 보기는 집계된 데이터를 드릴인하고 위험 수준이 높거나 기능 범위가 낮은 원본을 식별할 수 있는 필터를 사용하여 대화형으로 제공됩니다. 여러 필터를 적용하여 더 좁은 관심 영역에 초점을 맞추면 보기 전체의 데이터가 선택 영역을 반영하도록 변경됩니다. 자세한 내용은 “[보안 개요의 경고 필터링](/code-security/security-overview/filtering-alerts-in-the-security-overview)”을 참조하세요.

{% ifversion security-overview-alert-views %} 또한 분석을 특정 경고 집합으로 제한한 다음 각 보기에 특정한 필터 범위로 결과를 더 좁히는 데 사용할 수 있는 각 유형의 보안 경고에 대한 전용 보기도 있습니다. 예를 들어 {% data variables.product.prodname_secret_scanning %} 경고 보기에서 필터를 사용하여 `Secret type` GitHub {% data variables.product.pat_generic %}와 같은 특정 비밀에 대한 {% data variables.product.prodname_secret_scanning %} 경고만 볼 수 있습니다.
{% endif %}

{% note %}

**참고:** 보안 개요에는 보안 기능에 의해 발생한 활성 경고가 표시됩니다. 리포지토리에 대한 보안 개요에 경고가 없는 경우 검색되지 않은 보안 취약성 또는 코드 오류가 여전히 존재할 수 있습니다.

{% endnote %}

## 조직 수준 보안 개요 정보

{% data reusables.security-overview.beta-org-risk-coverage %}

엔터프라이즈가 소유한 모든 조직의 보안 탭에서 **보안** 개요를 찾을 수 있습니다. 각 보기에는 각 필터를 추가할 때 드릴다운할 수 있는 집계된 데이터가 표시되며, 선택한 리포지토리 또는 경고를 반영하도록 데이터가 업데이트됩니다.

회사의 애플리케이션 보안 팀은 조직의 보안 상태에 대한 광범위하고 구체적인 분석에 대해 서로 다른 보기를 사용할 수 있습니다. {% ifversion security-overview-org-risk-coverage %} 예를 들어 팀은 "보안 검사" 페이지를 사용하여 {% data variables.product.prodname_GH_advanced_security %}을(를) 배포할 때 조직 또는 특정 팀에서 기능 채택을 모니터링하거나 "보안 위험" 페이지를 사용하여 5개 이상의 {% 데이터 variables.product.prodname_secret_scanning %} 경고가 열려 있는 리포지토리를 식별할 수 있습니다. {% else %} 예를 들어 개요 페이지를 사용하여 {% data variables.product.prodname_GH_advanced_security %}을(를) 엔터프라이즈에 배포할 때 조직 또는 특정 팀의 기능 채택을 모니터링하거나 조직의 모든 리포지토리에서 특정 유형 및 심각도 수준의 모든 경고를 검토할 수 있습니다. {% endif %}

조직의 조직 소유자 및 보안 관리자는 조직의 보안 개요에 액세스할 수 있습니다. {% ifversion ghec or ghes > 3.6 or ghae > 3.6 %} 조직 구성원은 조직 수준 보안 개요에 액세스하여 관리자 권한이 있거나 보안 경고에 대한 액세스 권한이 부여된 리포지토리에 대한 결과를 볼 수도 있습니다. 보안 경고 액세스 관리에 대한 자세한 내용은 "[리포지토리에 대한 보안 및 분석 설정 관리"를 참조하세요](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository). {% endif %}

{% ifversion security-overview-org-risk-coverage %}
### 보안 위험 보기

이 보기는 다양한 유형의 보안 경고의 영향을 받는 리포지토리에 대한 데이터를 보여줍니다. 

- **유형** 및 **Teams** 드롭다운을 사용하여 리포지토리 유형 및 팀 필터를 추가합니다.
- **경고** 열기 또는 **영향을 받는 리포지토리** 를 클릭하여 특정 유형의 보안 경고가 있는 리포지토리만 표시합니다.

또한 검색 상자를 클릭하면 사용 가능한 전체 필터 집합 목록이 표시됩니다.

![조직의 보안 위험 보기 스크린샷](/assets/images/help/security-overview/security-risk-view.png)

### 보안 적용 범위 보기

이 보기는 보안 기능을 사용하는 리포지토리에 대한 데이터를 보여줍니다. 

- **유형** 및 **Teams** 드롭다운을 사용하여 리포지토리 유형 및 팀 필터를 추가합니다.
- **경고 사용** 및 헤더에 나열된 기타 기능을 클릭하여 해당 기능이 활성화된 리포지토리만 확인합니다.
- `FEATURE:enabled` 검색 상자에서 필터를 로 `FEATURE:not-enabled` 변경하여 기능을 사용하도록 설정하지 않은 리포지토리를 확인합니다.
- 리포지토리의 경우 줄임표(**...**)를 클릭한 다음 **보안 설정을** 클릭하여 추가 기능을 사용하도록 설정합니다.

또한 검색 상자를 클릭하면 사용 가능한 전체 필터 집합 목록이 표시됩니다.

![조직의 보안 검사 보기 스크린샷](/assets/images/help/security-overview/security-coverage-view.png)

{% else %}

### 주요 보안 개요 이해

![조직의 보안 개요 스크린샷](/assets/images/help/security-overview/security-overview-org-legacy.png)

보안 개요의 각 리포지토리에 대해 각 유형의 보안 기능 및 각 유형의 경고 수에 대한 아이콘이 표시됩니다. 리포지토리에 대해 보안 기능을 사용하도록 설정하지 않으면 해당 기능의 아이콘이 회색으로 표시됩니다. 또한 위험 점수가 코드 검사, Dependabot 및 비밀 검사 경고를 기반으로 각 리포지토리에 대해 계산됩니다. 이 점수는 베타 상태이며 주의해서 사용해야 합니다. 알고리즘 및 접근 방식이 변경될 수 있습니다.

![보안 개요의 아이콘](/assets/images/help/security-overview/security-overview-icons.png)

| 아이콘 | 의미 |
| -------- | -------- |
| {% octicon "code-square" aria-label="Code scanning alerts" %} | {% data variables.product.prodname_code_scanning_capc %} alerts. 자세한 내용은 “[{% data variables.product.prodname_code_scanning %} 정보](/code-security/secure-coding/about-code-scanning)”를 참조하세요. |
| {% octicon "key" aria-label="Secret scanning alerts" %} | {% data variables.product.prodname_secret_scanning_caps %} alerts. 자세한 내용은 “[{% data variables.product.prodname_secret_scanning %} 정보](/code-security/secret-security/about-secret-scanning)”를 참조하세요. |
| {% octicon "hubot" aria-label="Dependabot alerts" %} | {% data variables.product.prodname_dependabot_alerts %}. 자세한 내용은 “[{% data variables.product.prodname_dependabot_alerts %} 정보](/code-security/supply-chain-security/about-alerts-for-vulnerable-dependencies)”를 참조하세요. |
| {% octicon "check" aria-label="Check" %} | 보안 기능이 활성화되어 있지만, 이 리포지토리에서 경고가 발생하지 않습니다. |
| {% octicon "x" aria-label="x" %} | 이 리포지토리에서는 보안 기능이 지원되지 않습니다. |

{% endif %}

{% ifversion ghec or ghes > 3.4 or ghae > 3.4 %}
## 엔터프라이즈 수준 보안 개요 정보

엔터프라이즈의 **코드 보안** 탭에서 보안 개요를 찾을 수 있습니다. 각 개요에는 엔터프라이즈에 대한 집계 및 리포지토리별 보안 정보가 표시됩니다. 보안 경고가 있는 엔터프라이즈가 소유한 리포지토리를 보고, 모든 보안 경고 또는 엔터프라이즈 전체의 보안 기능별 경고를 볼 수 있습니다.

엔터프라이즈 소유자는 조직의 소유자 또는 보안 관리자라는 경고를 볼 수 있습니다. {% ifversion ghec or ghes > 3.5 or ghae > 3.5 %} 엔터프라이즈 소유자는 조직 소유자로 조직에 가입하여 엔터프라이즈 수준 보안 개요에서 모든 경고를 볼 수 있습니다. 자세한 내용은 "[엔터프라이즈가 소유한 조직에서 역할 관리](/admin/user-management/managing-organizations-in-your-enterprise/managing-your-role-in-an-organization-owned-by-your-enterprise)"를 참조하세요. {% endif %}

엔터프라이즈 조직의 조직 소유자 및 보안 관리자는 엔터프라이즈 수준 보안 개요에 액세스할 수 있습니다. 모든 권한이 있는 조직에 대한 리포지토리 및 경고를 볼 수 있습니다.
{% endif %}

{% ifversion ghes < 3.7 or ghae < 3.7 %}
## 팀 수준 보안 개요 정보

엔터프라이즈가 소유한 조직의 모든 팀에 대한 보안 탭에서 **보안** 개요를 찾을 수 있습니다.

팀 수준에서 보안 개요는 팀에 관리자 권한이 있는 리포지토리에 대한 리포지토리별 보안 정보를 표시합니다. 자세한 내용은 “[조직 리포지토리에 대한 팀 액세스 권한 관리](/organizations/managing-access-to-your-organizations-repositories/managing-team-access-to-an-organization-repository)”를 참조하세요.
{% endif %}

## 추가 참고 자료

- “[리포지토리 보안 유지](/code-security/getting-started/securing-your-repository)”
- "[조직 보안](/code-security/getting-started/securing-your-organization)"
- "[대규모 GitHub Advanced Security 채택 소개](/code-security/adopting-github-advanced-security-at-scale/introduction-to-adopting-github-advanced-security-at-scale)" {% endif %}

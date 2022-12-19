---
title: 조직 보호
intro: '여러 {% data variables.product.prodname_dotcom %} 기능을 사용하여 조직을 안전하게 유지할 수 있습니다.'
permissions: Organization owners can configure organization security settings.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: how_to
topics:
  - Organizations
  - Dependencies
  - Vulnerabilities
  - Advanced Security
shortTitle: Secure your organization
ms.openlocfilehash: e64af58fa5ea802b92df20751f2648097ebedf62
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 11/09/2022
ms.locfileid: '148159031'
---
## 소개
이 가이드에서는 조직에 대한 보안 기능을 구성하는 방법을 보여 줍니다. 조직의 보안 요구 사항은 고유하며 모든 보안 기능을 사용하도록 설정할 필요가 없습니다. 자세한 내용은 “[{% data variables.product.prodname_dotcom %} 보안 기능](/code-security/getting-started/github-security-features)”을 참조하세요.

{% data reusables.advanced-security.security-feature-availability %}

## 조직에 대한 액세스 관리

역할을 사용하여 조직에서 사용자가 수행할 수 있는 작업을 제어할 수 있습니다. {% ifversion security-managers %}예를 들어 팀에 보안 관리자 역할을 할당하여 조직 전체에서 보안 설정을 관리하고 모든 리포지토리에 대한 읽기 권한을 부여할 수 있습니다.{% endif %} 자세한 내용은 “[조직의 역할](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization)”을 참조하세요.

{% ifversion fpt or ghes or ghec %}

## 기본 보안 정책 만들기

자체 보안 정책이 없는 조직의 퍼블릭 리포지토리에 표시되는 기본 보안 정책을 만들 수 있습니다. 자세한 내용은 “[기본 커뮤니티 상태 파일 만들기](/communities/setting-up-your-project-for-healthy-contributions/creating-a-default-community-health-file)”를 참조하세요.

{% endif %}

## {% data variables.product.prodname_dependabot_alerts %} 및 종속성 그래프 관리

{% ifversion fpt or ghec %} {% data variables.product.prodname_dotcom %}는 퍼블릭 리포지토리의 취약성을 감지하고 종속성 그래프를 표시합니다. 조직 소유의 모든 퍼블릭 리포지토리에 대해 {% data variables.product.prodname_dependabot_alerts %}을 사용하거나 사용하지 않도록 설정할 수 있습니다. 조직 소유의 모든 퍼블릭 리포지토리에 대해 {% data variables.product.prodname_dependabot_alerts %}를 사용하거나 사용하지 않도록 설정할 수 있습니다.

1. 프로필 사진을 클릭한 다음 **조직** 을 클릭합니다.
2. 조직 옆에 있는 **설정** 을 클릭합니다.
3. **보안 및 분석** 을 클릭합니다.
4. 관리하려는 기능 옆에 있는 **모두 사용** 또는 **모두 사용 안 함** 을 클릭합니다.
5. 필요에 따라 **새 리포지토리에 대해 자동으로 사용하도록 설정** 을 선택합니다.
{% endif %}

{% data reusables.dependabot.dependabot-alerts-beta %} {% data reusables.dependabot.dependabot-alerts-dependency-graph-enterprise %}

자세한 내용은 “[{% data variables.product.prodname_dependabot_alerts %} 정보](/code-security/supply-chain-security/about-alerts-for-vulnerable-dependencies)”, “[리포지토리의 종속성 탐색](/code-security/supply-chain-security/exploring-the-dependencies-of-a-repository#enabling-and-disabling-the-dependency-graph-for-a-private-repository)”, “[조직의 보안 및 분석 설정 관리](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)”를 참조하세요.

## 종속성 검토 관리

종속성 검토는 끌어오기 요청이 리포지토리에 병합되기 전에 종속성 변경을 시각화할 수 있는 {% data variables.product.prodname_advanced_security %} 기능입니다. 자세한 내용은 “[종속성 검토 정보](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-dependency-review)”를 참조하세요.

{% ifversion fpt or ghec %}모든 퍼블릭 리포지토리에 대해 종속성 검토가 이미 사용되고 있습니다. {% ifversion fpt %} {% data variables.product.prodname_advanced_security %}와 함께 {% data variables.product.prodname_ghe_cloud %}를 사용하는 조직은 프라이빗 및 내부 리포지토리에 대한 종속성 검토를 추가로 사용할 수 있습니다. 자세한 내용은 [{% data variables.product.prodname_ghe_cloud %} 설명서](/enterprise-cloud@latest/code-security/getting-started/securing-your-organization#managing-dependency-review)를 참조하세요. {% endif %} {% endif %} {% ifversion ghec %} 조직이 소유한 프라이빗 및 내부 리포지토리의 경우 종속성 그래프를 사용하고 {% data variables.product.prodname_advanced_security %}를 사용하여 종속성 검토를 사용할 수 있습니다(아래 참조). {% elsif ghes or ghae %} 종속성 검토는 {% data variables.location.product_location %}에 대한 종속성 그래프를 사용하도록 설정하고 조직에 대해 {% data variables.product.prodname_advanced_security %}를 사용하도록 설정하는 경우에 사용할 수 있습니다(아래 참조). {% endif %}

{% ifversion fpt or ghec or ghes %}
## {% data variables.product.prodname_dependabot_security_updates %} 관리

{% data variables.product.prodname_dependabot_alerts %}를 사용하는 리포지토리의 경우 취약성이 감지되면 {% data variables.product.prodname_dependabot_security_updates %}를 사용하여 보안 업데이트로 끌어오기 요청을 발생하도록 설정할 수 있습니다. 조직 전체의 모든 리포지토리에 대해 {% data variables.product.prodname_dependabot_security_updates %}를 사용하거나 사용하지 않도록 설정할 수도 있습니다.

1. 프로필 사진을 클릭한 다음 **조직** 을 클릭합니다.
2. 조직 옆에 있는 **설정** 을 클릭합니다.
3. **보안 및 분석** 을 클릭합니다.
4. {% data variables.product.prodname_dependabot_security_updates %} 옆에 있는 **모두 사용** 또는 **모두 사용 안 함** 을 클릭합니다.
5. 필요에 따라 **새 리포지토리에 대해 자동으로 사용하도록 설정** 을 선택합니다. 

자세한 내용은 “[{% data variables.product.prodname_dependabot_security_updates %} 정보](/code-security/supply-chain-security/about-dependabot-security-updates)” 및 “[조직의 보안 및 분석 설정 관리](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)”를 참조하세요.

## {% data variables.product.prodname_dependabot_version_updates %} 관리

{% data variables.product.prodname_dependabot %}를 사용하여 자동으로 끌어오기 요청을 발생시켜 종속성을 최신 상태로 유지할 수 있습니다. 자세한 내용은 “[{% data variables.product.prodname_dependabot_version_updates %} 정보](/code-security/supply-chain-security/about-dependabot-version-updates)”를 참조하세요.

{% data variables.product.prodname_dependabot_version_updates %}를 사용하려면 *dependabot.yml* 구성 파일을 만들어야 합니다. 자세한 내용은 “[{% data variables.product.prodname_dependabot %} 버전 업데이트 구성](/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/enabling-and-disabling-dependabot-version-updates)”을 참조하세요.

{% endif %}

{% ifversion ghes or ghae or ghec %}
## {% data variables.product.prodname_GH_advanced_security %} 관리

{% ifversion ghes or ghec %} {% ifversion ghec %}조직을 {% else %}엔터프라이즈{% endif %}에 {% data variables.product.prodname_advanced_security %} 라이선스가 있는 엔터프라이즈가 소유한 경우 {% data variables.product.prodname_advanced_security %} 기능을 사용하거나 사용하지 않도록 설정할 수 있습니다.
{% elsif ghae %} {% data variables.product.prodname_advanced_security %} 기능을 사용하거나 사용하지 않도록 설정할 수 있습니다.
{% endif %}

1. 프로필 사진을 클릭한 다음 **조직** 을 클릭합니다.
2. 조직 옆에 있는 **설정** 을 클릭합니다.
3. **보안 및 분석** 을 클릭합니다.
4. {% data variables.product.prodname_GH_advanced_security %} 옆에 있는 **모두 사용** 또는 **모두 사용 안 함** 을 클릭합니다.
5. 필요에 따라 **새 프라이빗 리포지토리에 대해 자동으로 사용하도록 설정** 을 선택합니다. 

자세한 내용은 “[{% data variables.product.prodname_GH_advanced_security %} 정보](/github/getting-started-with-github/about-github-advanced-security)” 및 “[조직의 보안 및 분석 설정 관리](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)”를 참조하세요.
{% endif %}
## {% data variables.product.prodname_secret_scanning %} 구성

{% data variables.product.prodname_secret_scanning_caps %}는 안전하지 않게 저장된 비밀을 리포지토리에서 검사하는 {% data variables.product.prodname_advanced_security %} 기능입니다.

{% ifversion fpt or ghec %}모든 퍼블릭 리포지토리에 대해 {% data variables.product.prodname_secret_scanning_caps %}가 이미 사용하도록 설정되어 있습니다. {% data variables.product.prodname_ghe_cloud %}와 {% data variables.product.prodname_advanced_security %}를 사용하는 조직은 프라이빗 및 내부 리포지토리에 대해 {% data variables.product.prodname_secret_scanning %}를 추가로 사용하도록 설정할 수 있습니다. {% endif %} {% ifversion fpt %} 자세한 내용은 [{% data variables.product.prodname_ghe_cloud %} 설명서](/enterprise-cloud@latest/code-security/getting-started/securing-your-organization#configuring-secret-scanning)를 참조하세요. {% endif %}

{% ifversion ghes or ghae %} 엔터프라이즈에서 {% data variables.product.prodname_advanced_security %}를 사용하는 경우 {% data variables.product.prodname_secret_scanning_caps %}를 사용할 수 있습니다. {% endif %}

{% ifversion not fpt %} {% data variables.product.prodname_advanced_security %}를 사용하도록 설정한 조직 전체의 모든 리포지토리에 대해 {% data variables.product.prodname_secret_scanning %}를 사용하거나 사용하지 않도록 설정할 수 있습니다.

1. 프로필 사진을 클릭한 다음 **조직** 을 클릭합니다.
2. 조직 옆에 있는 **설정** 을 클릭합니다.
3. **보안 및 분석** 을 클릭합니다.
4. {% data variables.product.prodname_secret_scanning_caps %} 옆에 있는 **모두 사용** 또는 **모두 사용 안 함**({% data variables.product.prodname_GH_advanced_security %} 리포지토리만 해당)을 클릭합니다.
5. 필요에 따라 **{% data variables.product.prodname_advanced_security %}에 추가된 프라이빗 리포지토리에 대해 자동으로 사용하도록 설정** 을 클릭합니다. 

자세한 내용은 “[조직의 보안 및 분석 설정 관리](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)”를 참조하세요.
{% endif %}

## {% data variables.product.prodname_code_scanning %} 구성

{% data variables.product.prodname_code_scanning_capc %}는 코드에서 보안 취약성 및 오류를 검사하는 {% data variables.product.prodname_advanced_security %} 기능입니다.

{% ifversion fpt or ghec %} {% data variables.product.prodname_code_scanning_capc %}는 모든 퍼블릭 리포지토리에 사용할 수 있습니다. {% data variables.product.prodname_ghe_cloud %}와 {% data variables.product.prodname_advanced_security %}를 사용하는 조직은 프라이빗 및 내부 리포지토리에 {% data variables.product.prodname_code_scanning %}를 추가로 사용할 수 있습니다. {% else %} 엔터프라이즈에서 {% data variables.product.prodname_advanced_security %}를 사용하는 경우 {% data variables.product.prodname_code_scanning_capc %}를 사용할 수 있습니다. {% endif %}

{% data variables.product.prodname_code_scanning_capc %}는 리포지토리 수준에서 구성됩니다. 자세한 내용은 “[리포지토리에 대한 {% data variables.product.prodname_code_scanning %} 설정](/code-security/secure-coding/setting-up-code-scanning-for-a-repository)”을 참조하세요.

## 다음 단계
보안 기능의 경고를 보고 관리하여 코드의 종속성과 취약성을 해결할 수 있습니다. 자세한 내용은 다음을 참조하세요. {% ifversion fpt or ghes or ghec %} "[{% data variables.product.prodname_dependabot_alerts %} 보기 및 업데이트](/code-security/dependabot/dependabot-alerts/viewing-and-updating-dependabot-alerts)",{% endif %} {% ifversion fpt or ghec or ghes %를 참조하세요.}"[종속성 업데이트에 대한 끌어오기 요청 관리](/code-security/supply-chain-security/managing-pull-requests-for-dependency-updates)", {% endif %}"[리포지토리에 대한 {% data variables.product.prodname_code_scanning %} 관리](/code-security/secure-coding/managing-code-scanning-alerts-for-your-repository)" 및 "[{% data variables.product.prodname_secret_scanning %}에서 경고 관리](/code-security/secret-security/managing-alerts-from-secret-scanning)."

{% ifversion fpt or ghec %}보안 취약성이 있는 경우 보안 공지를 만들어서 비공개로 취약성에 대해 논의하고 이를 수정할 수 있습니다. 자세한 내용은 "[리포지토리 보안 권고 정보](/code-security/security-advisories/about-github-security-advisories)" 및 "[보안 공지 만들기"를 참조하세요](/code-security/security-advisories/creating-a-security-advisory).
{% endif %}

{% ifversion ghes or ghec or ghae %}{% elsif fpt %}{% data variables.product.prodname_ghe_cloud %}를 사용하는 조직{% endif %}은 보안 개요에서 {% ifversion ghes or ghec or ghae %}{% elsif fpt %}{% endif %} 조직이 소유한 리포지토리에 대한 보안 경고를 보고 필터링하고 정렬할 수 있습니다. 자세한 내용은 {% ifversion ghes or ghec or ghae %} "[보안 개요 정보](/code-security/security-overview/about-the-security-overview)"를 참조하세요. {% elsif fpt %} {% data variables.product.prodname_ghe_cloud %} 설명서의 "[보안 개요](/enterprise-cloud@latest/code-security/security-overview/about-the-security-overview) 정보". {% endif %}

{% ifversion ghec %}
## 추가 참고 자료

“[조직에 대한 규정 준수 보고서 액세스](/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/accessing-compliance-reports-for-your-organization)”{% endif %}

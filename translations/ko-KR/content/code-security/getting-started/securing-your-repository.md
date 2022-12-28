---
title: 리포지토리 보안 유지
intro: '여러 {% data variables.product.prodname_dotcom %} 기능을 사용하여 리포지토리를 안전하게 유지할 수 있습니다.'
permissions: Repository administrators and organization owners can configure repository security settings.
redirect_from:
  - /github/administering-a-repository/about-securing-your-repository
  - /github/code-security/getting-started/about-securing-your-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: how_to
topics:
  - Repositories
  - Dependencies
  - Vulnerabilities
  - Advanced Security
shortTitle: Secure your repository
ms.openlocfilehash: adab3ab8944ebd4945d30d7e886d91f0a31ca545
ms.sourcegitcommit: b617c4a7a1e4bf2de3987a86e0eb217d7031490f
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 11/11/2022
ms.locfileid: '148161185'
---
## 소개
이 가이드에서는 리포지토리에 대한 보안 기능을 구성하는 방법을 보여 줍니다. 리포지토리에 대한 보안 설정을 구성하려면 리포지토리 관리자 또는 조직 소유자여야 합니다.

보안 요구 사항은 리포지토리에 고유하므로 리포지토리에 대해 모든 기능을 사용하도록 설정할 필요는 없을 수도 있습니다. 자세한 내용은 “[{% data variables.product.prodname_dotcom %} 보안 기능](/code-security/getting-started/github-security-features)”을 참조하세요.

{% data reusables.advanced-security.security-feature-availability %}

## 리포지토리에 대한 액세스 관리

리포지토리를 보호하는 첫 번째 단계는 코드를 보고 수정할 수 있는 사용자를 설정하는 것입니다. 자세한 내용은 “[리포지토리 설정 관리](/github/administering-a-repository/managing-repository-settings)”를 참조하세요.

리포지토리의 기본 페이지에서 **{% octicon "gear" aria-label="The Settings gear" %} 설정** 을 클릭한 다음 아래로 스크롤하여 “위험 영역”으로 이동합니다.

- 리포지토리를 볼 수 있는 사용자를 변경하려면 **표시 여부 변경** 을 클릭합니다. 자세한 내용은 "[리포지토리 표시 유형 설정"을 참조하세요](/github/administering-a-repository/setting-repository-visibility). {% ifversion fpt or ghec or ghes > 3.3 or ghae > 3.3 %}
- 리포지토리에 액세스하고 권한을 조정할 수 있는 사용자를 변경하려면 **액세스 관리** 를 클릭합니다. 자세한 내용은 “[리포지토리에 액세스할 수 있는 팀 및 사용자 관리](/github/administering-a-repository/managing-teams-and-people-with-access-to-your-repository)”를 참조하세요.{% endif %}

## 보안 정책 만들기

1. 리포지토리의 기본 페이지에서 **{% octicon "shield" aria-label="The shield symbol" %} 보안** 을 클릭합니다.
2. **보안 정책** 을 클릭합니다.
3. **설치 시작** 을 클릭합니다.
4. 지원되는 프로젝트 버전 및 취약성 보고 방법에 대한 정보를 추가합니다.

자세한 내용은 “[리포지토리에 보안 정책 추가](/code-security/getting-started/adding-a-security-policy-to-your-repository)”를 참조하세요.

## 종속성 그래프 관리

{% ifversion fpt or ghec %} 종속성 그래프는 모든 퍼블릭 리포지토리에 대해 자동으로 생성되며 프라이빗 리포지토리에 대해 사용하도록 선택할 수 있습니다. 리포지토리의 매니페스트 및 잠금 파일을 해석하여 종속성을 식별합니다.

1. 리포지토리의 기본 페이지에서 **{% octicon "gear" aria-label="The Settings gear" %} 설정** 을 클릭합니다.
2. **보안 및 분석** 을 클릭합니다.
3. 종속성 그래프 옆에 있는 **사용** 또는 **사용 안 함** 을 클릭합니다.
{% endif %}

{% data reusables.dependabot.dependabot-alerts-dependency-graph-enterprise %}

자세한 내용은 “[리포지토리의 종속성 탐색](/code-security/supply-chain-security/exploring-the-dependencies-of-a-repository#enabling-and-disabling-the-dependency-graph-for-a-private-repository)”을 참조하세요.

## {% data variables.product.prodname_dependabot_alerts %} 관리

{% data variables.product.prodname_dependabot_alerts %}는 {% data variables.product.prodname_dotcom %}가 취약성이 있는 종속성 그래프의 종속성을 식별할 때 생성됩니다. {% ifversion fpt or ghec %}모든 리포지토리에 대해 {% data variables.product.prodname_dependabot_alerts %}를 사용하도록 설정할 수 있습니다.{% endif %}

{% ifversion fpt or ghec %}
1. 프로필 사진을 클릭한 다음 **설정** 을 클릭합니다.
2. **보안 및 분석** 을 클릭합니다.
3. {% data variables.product.prodname_dependabot_alerts %} 옆에 있는 **모두 사용** 을 클릭합니다.
{% endif %}

{% data reusables.dependabot.dependabot-alerts-beta %} {% data reusables.dependabot.dependabot-alerts-dependency-graph-enterprise %}

자세한 내용은 “[{% data variables.product.prodname_dependabot_alerts %} 정보](/code-security/supply-chain-security/about-alerts-for-vulnerable-dependencies){% ifversion fpt or ghec %}” 및 “[개인 계정에 대한 보안 및 분석 설정 관리](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-personal-account-settings/managing-security-and-analysis-settings-for-your-personal-account){% endif %}”를 참조하세요.

## 종속성 검토 관리

종속성 검토를 사용하면 끌어오기 요청이 리포지토리에 병합되기 전에 종속성 변경을 시각화할 수 있습니다. 자세한 내용은 “[종속성 검토 정보](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-dependency-review)”를 참조하세요.

종속성 검토는 {% data variables.product.prodname_GH_advanced_security %} 기능입니다. {% ifversion fpt or ghec %}모든 퍼블릭 리포지토리에 대해 종속성 검토가 이미 사용되고 있습니다. {% ifversion fpt %} {% data variables.product.prodname_advanced_security %}와 함께 {% data variables.product.prodname_ghe_cloud %}를 사용하는 조직은 프라이빗 및 내부 리포지토리에 대한 종속성 검토를 추가로 사용할 수 있습니다. 자세한 내용은 [{% data variables.product.prodname_ghe_cloud %} 설명서](/enterprise-cloud@latest/code-security/getting-started/securing-your-repository#managing-dependency-review)를 참조하세요. {% endif %} {% endif %} {% ifversion ghec or ghes or ghae %} {% ifversion ghec %}프라이빗 또는 내부 {% endif %}리포지토리에 대한 종속성 검토를 사용하도록 설정하려면 종속성 그래프를 사용하도록 설정하고 {% data variables.product.prodname_GH_advanced_security %}를 사용하도록 설정합니다. 

1. 리포지토리의 기본 페이지에서 **{% octicon "gear" aria-label="The Settings gear" %} 설정** 을 클릭합니다.
2. **보안 및 분석** 을 클릭합니다.
3. {% ifversion ghec %}아직 종속성 그래프를 사용하도록 설정하지 않은 경우 **사용** 을 클릭합니다.{% elsif ghes or ghae %}종속성 그래프가 엔터프라이즈에 대해 구성되어 있는지 확인합니다.{% endif %}
4. 아직 {% data variables.product.prodname_GH_advanced_security %}를 사용하도록 설정하지 않은 경우 **사용** 을 클릭합니다.

{% endif %}

{% ifversion fpt or ghec or ghes %}

## {% data variables.product.prodname_dependabot_security_updates %} 관리

{% data variables.product.prodname_dependabot_alerts %}를 사용하는 리포지토리의 경우 취약성이 감지되면 {% data variables.product.prodname_dependabot_security_updates %}를 사용하여 보안 업데이트로 끌어오기 요청을 발생하도록 설정할 수 있습니다.

1. 리포지토리의 기본 페이지에서 **{% octicon "gear" aria-label="The Settings gear" %} 설정** 을 클릭합니다.
2. **보안 및 분석** 을 클릭합니다.
3. {% data variables.product.prodname_dependabot_security_updates %} 옆에 있는 **사용** 을 클릭합니다.

자세한 내용은 “[{% data variables.product.prodname_dependabot_security_updates %} 정보](/code-security/supply-chain-security/about-dependabot-security-updates)” 및 “[{% data variables.product.prodname_dependabot_security_updates %} 구성](/code-security/supply-chain-security/configuring-dependabot-security-updates)”을 참조하세요.

## {% data variables.product.prodname_dependabot_version_updates %} 관리

{% data variables.product.prodname_dependabot %}를 사용하여 자동으로 끌어오기 요청을 발생시켜 종속성을 최신 상태로 유지할 수 있습니다. 자세한 내용은 “[{% data variables.product.prodname_dependabot_version_updates %} 정보](/code-security/supply-chain-security/about-dependabot-version-updates)”를 참조하세요.

{% ifversion dependabot-settings-update-37 %}
1. 리포지토리의 기본 페이지에서 **{% octicon "gear" aria-label="The Settings gear" %} 설정** 을 클릭합니다.
2. **보안 및 분석** 을 클릭합니다.
3. {% data variables.product.prodname_dependabot_version_updates %} 옆에 있는 **사용** 을 클릭하여 기본 *dependabot.yml* 구성 파일을 만듭니다.
4. 종속성을 지정하여 파일을 업데이트하고 리포지토리에 커밋합니다. 자세한 내용은 "[Dependabot 버전 업데이트 구성](/code-security/dependabot/dependabot-version-updates/configuring-dependabot-version-updates#enabling-dependabot-version-updates)"을 참조하세요.

{% else %} {% data variables.product.prodname_dependabot_version_updates %}를 사용하려면 *dependabot.yml* 구성 파일을 만들어야 합니다. 자세한 내용은 “[{% data variables.product.prodname_dependabot %} 버전 업데이트 구성](/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/enabling-and-disabling-dependabot-version-updates)”을 참조하세요.
{% endif %}

{% endif %}

## {% data variables.product.prodname_code_scanning %} 구성

{% data variables.code-scanning.codeql_workflow %} 또는 타사 도구를 사용하여 리포지토리에 저장된 코드의 취약성 및 오류를 자동으로 식별하도록 {% data variables.product.prodname_code_scanning %}를 설정할 수 있습니다. 자세한 내용은 “[리포지토리에 대한 {% data variables.product.prodname_code_scanning %} 설정](/code-security/secure-coding/setting-up-code-scanning-for-a-repository)”을 참조하세요.

{% data variables.product.prodname_code_scanning_capc %}는 모든 퍼블릭 리포지토리에 대해 {% ifversion fpt or ghec %}사용할 수 있으며, 엔터프라이즈에서 {% endif %}{% data variables.product.prodname_GH_advanced_security %}를 사용하는 경우 {% else %}조직 소유 리포지토리에 대한 라이선스가 있는 엔터프라이즈의 일부인 프라이빗 리포지토리에서 사용할 수 있습니다.

## {% data variables.product.prodname_secret_scanning %} 구성

{% data variables.product.prodname_secret_scanning_caps %}는 모든 퍼블릭 리포지토리에 대해 {% ifversion fpt or ghec %}사용할 수 있으며, 엔터프라이즈에서 {% endif %}{% data variables.product.prodname_GH_advanced_security %}를 사용하는 경우 {% else %}조직 소유 리포지토리에 대한 라이선스가 있는 엔터프라이즈의 일부인 프라이빗 리포지토리에서 사용할 수 있습니다. {% ifversion fpt %}자세한 내용은 [{% data variables.product.prodname_ghe_cloud %} 설명서](/enterprise-cloud@latest/code-security/getting-started/securing-your-repository#configuring-secret-scanning)를 참조하세요.{% else %} 조직의 설정에 따라 리포지토리에 이미 {% data variables.product.prodname_secret_scanning_caps %}를 사용하도록 설정했을 수 있습니다.

1. 리포지토리의 기본 페이지에서 **{% octicon "gear" aria-label="The Settings gear" %} 설정** 을 클릭합니다.
2. **보안 및 분석** 을 클릭합니다.
3. 아직 {% data variables.product.prodname_GH_advanced_security %}를 사용하도록 설정하지 않은 경우 **사용** 을 클릭합니다.
4. {% data variables.product.prodname_secret_scanning_caps %} 옆에 있는 **사용** 을 클릭합니다. {% endif %}

## 다음 단계
보안 기능의 경고를 보고 관리하여 코드의 종속성과 취약성을 해결할 수 있습니다. 자세한 내용은 참조 {% ifversion fpt or ghes or ghec %} "[보기 및 업데이트 {% 데이터 variables.product.prodname_dependabot_alerts %}](/code-security/dependabot/dependabot-alerts/viewing-and-updating-dependabot-alerts),"{% endif %} {% ifversion fpt or ghec or ghes %}}"[종속성 업데이트에 대한 끌어오기 요청 관리](/code-security/supply-chain-security/managing-pull-requests-for-dependency-updates)", {% endif %}"[리포지토리에 대한 {% data variables.product.prodname_code_scanning %} 관리](/code-security/secure-coding/managing-code-scanning-alerts-for-your-repository)" 및 "[{% data variables.product.prodname_secret_scanning %}에서 경고 관리](/code-security/secret-security/managing-alerts-from-secret-scanning)."

{% ifversion fpt or ghec %}보안 취약성이 있는 경우 보안 공지를 만들어서 비공개로 취약성에 대해 논의하고 이를 수정할 수 있습니다. 자세한 내용은 "[리포지토리 보안 권고 정보](/code-security/security-advisories/about-github-security-advisories)" 및 "[보안 공지 만들기"를](/code-security/security-advisories/creating-a-security-advisory) 참조하세요.
{% endif %}

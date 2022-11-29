---
title: 공급망 보안 정보
intro: '{% data variables.product.product_name %}는 사용자 환경의 종속성을 이해하는 것부터 해당 종속성의 취약성에 대해 아는 것{% ifversion fpt or ghec or ghes %}, 패치{% endif %}에 이르기까지 공급망을 보호하는 데 도움이 됩니다.'
miniTocMaxHeadingLevel: 3
shortTitle: Supply chain security
redirect_from:
  - /code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: overview
topics:
  - Advanced Security
  - Dependency review
  - Dependency graph
  - Vulnerabilities
  - Dependencies
  - Pull requests
  - Repositories
ms.openlocfilehash: d0f743db7d1f5a054a3eb8c7b4dbf81052aca50f
ms.sourcegitcommit: cfe91073c844cb762131b2de9fb41f7f9db792fc
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 11/24/2022
ms.locfileid: '148181238'
---
## GitHub의 공급망 보안 정보

오픈 소스 사용의 가속화로 인해 대부분의 프로젝트는 수백 개의 오픈 소스 종속성에 의존합니다. 해당 현상은 보안 문제를 야기합니다. 사용 중인 종속성이 취약한 경우 어떻게 해야 할까요? 사용자를 공급망 공격의 위험에 빠뜨릴 수 있습니다. 공급망을 보호하기 위해 수행할 수 있는 가장 중요한 작업 중 하나는 취약한 종속성을 패치{% ifversion GH-advisory-db-supports-malware %}하고 맬웨어를 대체{% endif %}하는 것입니다.

매니페스트 파일 또는 잠금 파일에서 종속성을 지정할 때 공급망에 직접 종속성을 추가합니다. 종속성을 전이적으로 포함할 수도 있습니다. 즉, 특정 종속성을 지정하지 않더라도 자신의 종속성에서 이를 사용하므로 해당 종속성에 종속됩니다.

{% data variables.product.product_name %}은 환경의 종속성을 이해하고{% ifversion ghae %} 및 해당 종속성의 취약성에 대해 알고{% endif %}{% ifversion fpt or ghec or ghes %}, 해당 종속성의 취약성에 대해 알고, 패치하는 데 도움이 되는 다양한 기능을 제공합니다{% endif %}. 

{% data variables.product.product_name %}의 공급망 기능은 다음과 같습니다.
- **종속성 그래프**
- **종속성 검토**
- **{% data variables.product.prodname_dependabot_alerts %} ** {% ifversion fpt or ghec or ghes %}- **{% data variables.product.prodname_dependabot_updates %}**
  - **{% data variables.product.prodname_dependabot_security_updates %}**
  - **{% data variables.product.prodname_dependabot_version_updates %}** {% endif %}

종속성 그래프는 공급망 보안의 핵심입니다. 종속성 그래프는 리포지토리 또는 패키지의 모든 업스트림 종속성 및 퍼블릭 다운스트림 종속 항목을 식별합니다. 리포지토리의 종속성 및 취약성 정보와 같은 일부 속성은 리포지토리의 종속성 그래프에서 확인할 수 있습니다. 

{% data variables.product.prodname_dotcom %}의 다른 공급망 기능은 종속성 그래프에서 제공하는 정보를 사용합니다.

- 종속성 검토는 종속성 그래프를 사용하여 종속성 변경 내용을 식별하고 끌어오기 요청을 검토할 때 변경 내용의 보안 영향을 이해하는 데 도움이 됩니다.
- {% data variables.product.prodname_dependabot %}은 종속성 그래프에서 제공하는 종속성 데이터를 {% data variables.product.prodname_advisory_database %}에 게시된 권고 목록과 상호 참조하고, 종속성을 검사하고, 잠재적 취약성{% ifversion GH-advisory-db-supports-malware %}또는 맬웨어{% endif %}가 감지되면 {% data variables.product.prodname_dependabot_alerts %}를 생성합니다.
{% ifversion fpt or ghec or ghes %}- {% data variables.product.prodname_dependabot_security_updates %}는 종속성 그래프 및 {% data variables.product.prodname_dependabot_alerts %}를 사용하여 리포지토리의 알려진 취약성으로 종속성을 업데이트하는 데 도움이 됩니다.

{% data variables.product.prodname_dependabot_version_updates %}는 종속성 그래프를 사용하지 않고 종속성의 의미 체계 버전 관리를 대신 사용합니다. {% data variables.product.prodname_dependabot_version_updates %}는 취약성이 없는 경우에도 종속성을 업데이트된 상태로 유지하는 데 도움이 됩니다.
{% endif %}

{% ifversion fpt or ghec or ghes %} 개인 계정, 코드, 빌드 프로세스 보호를 포함한 엔드투엔드 공급망 보안에 대한 모범 사례 가이드는 “[엔드투엔드 공급망 보안](/code-security/supply-chain-security/end-to-end-supply-chain/end-to-end-supply-chain-overview)”을 참조하세요.
{% endif %}

## 기능 개요

### 종속성 그래프란?

종속성 그래프를 생성하기 위해 {% data variables.product.company_short %}는 매니페스트 및 잠금 파일에 선언된 리포지토리의 명시적 종속성을 확인합니다. 사용하도록 설정하면 종속성 그래프는 리포지토리의 알려진 모든 패키지 매니페스트 파일을 자동으로 구문 분석하고 이를 사용하여 알려진 종속성 이름 및 버전으로 그래프를 생성합니다.

- 종속성 그래프에는 _직접_ 종속성 및 _전이적_ 종속성에 대한 정보가 포함됩니다. 
- 기본 분기에 지원되는 매니페스트 또는 잠금 파일을 변경하거나 추가하는 {% data variables.product.company_short %}에 커밋을 푸시하고, 누군가가 종속성 중 하나의 리포지토리에 변경 내용을 푸시할 때 종속성 그래프가 자동으로 업데이트됩니다.
- {% data variables.product.product_name %}에서 리포지토리의 기본 페이지를 열고 **인사이트** 탭으로 이동하여 종속성 그래프를 볼 수 있습니다.

{% ifversion dependency-submission-api %} {% data reusables.dependency-submission.dependency-submission-link %} {% endif %}

종속성 그래프에 대한 자세한 내용은 “[종속성 그래프 정보](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-the-dependency-graph)”를 참조하세요.

### 종속성 검토란?

종속성 검토는 검토자와 기여자가 모든 끌어오기 요청에서 종속성 변경 내용과 그 보안 영향을 이해하는 데 도움이 됩니다. 

- 종속성 검토는 끌어오기 요청에서 추가, 제거 또는 업데이트된 종속성을 알려줍니다. 릴리스 날짜, 종속성 인기도 및 취약성 정보를 사용하여 변경 내용을 허용할지 여부를 결정할 수 있습니다.
- **변경된 파일** 탭에 rich diff를 표시하여 끌어오기 요청에 대한 종속성 검토를 볼 수 있습니다.

종속성 검토에 대한 자세한 내용은 “[종속성 검토 정보](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-dependency-review)”를 참조하세요.

### Dependabot이란?

{% data variables.product.prodname_dependabot %}는 종속성의 보안 취약성을 알려 종속성을 최신 상태로 유지합니다{% ifversion fpt or ghec or ghes %}, 및 는 {% data variables.product.prodname_dependabot %} 경고가 트리거될 때 또는 릴리스가 게시될 때 최신 버전으로 종속성을 업그레이드하는 끌어오기 요청을 자동으로 엽니다{% else %} 종속성{% endif %}을(를) 업데이트할 수 있습니다.

{% ifversion fpt or ghec or ghes %} "{% data variables.product.prodname_dependabot %}"라는 용어는 다음 기능을 포함합니다.
- {% data variables.product.prodname_dependabot_alerts %} - 리포지토리의 **보안** 탭 및 리포지토리의 종속성 그래프에 표시된 알림. 경고에는 프로젝트에서 영향을 받는 파일에 대한 링크와 고정 버전에 대한 정보가 포함됩니다.
- {% data variables.product.prodname_dependabot_updates %}:
   - {% data variables.product.prodname_dependabot_security_updates %} - 경고가 트리거될 때 종속성을 보안 버전으로 업그레이드하기 위해 트리거된 업데이트.
   - {% data variables.product.prodname_dependabot_version_updates %} - 종속성을 최신 버전으로 유지하기 위해 예약된 업데이트.

{% endif %}

{% ifversion fpt or ghec %}

{% data variables.product.prodname_dependabot_alerts %}, {% data variables.product.prodname_dependabot_security_updates %}, {% data variables.product.prodname_dependabot_version_updates %}는 {% data variables.product.product_name %}에서 실행할 때 {% data variables.product.prodname_actions %}을(를) 사용하지 않습니다. 그러나 {% data variables.product.prodname_dependabot %}에서 연 끌어오기 요청은 작업을 실행하는 워크플로를 트리거할 수 있습니다. 자세한 내용은 “[ {% data variables.product.prodname_actions %}를 사용하여 {% data variables.product.prodname_dependabot %} 자동화](/code-security/dependabot/working-with-dependabot/automating-dependabot-with-github-actions)”를 참조하세요.

{% elsif ghes %}

{% data variables.product.prodname_dependabot_security_updates %} 및 {% data variables.product.prodname_dependabot_version_updates %}을(를) 실행하려면 {% data variables.product.prodname_actions %}이(가) {% data variables.product.product_name %}에서 실행되어야 합니다. {% data variables.product.prodname_dependabot_alerts %}에는 {% data variables.product.prodname_actions %}이(가) 필요하지 않습니다. 자세한 내용은 “[엔터프라이즈에 {% data variables.product.prodname_dependabot %} 사용](/admin/configuration/configuring-github-connect/enabling-dependabot-for-your-enterprise)”을 참조하세요.

{% elsif ghae %}

{% data variables.product.prodname_dependabot_alerts %}이(가) {% data variables.product.product_name %}에서 실행하려면 {% data variables.product.prodname_actions %}이(가) 필요하지 않습니다.

{% endif %}

{% ifversion dependabot-actions-support %}

{% data reusables.dependabot.dependabot-actions-support %} 자세한 내용은 "[{% data variables.product.prodname_dependabot_security_updates %} 정보](/code-security/dependabot/dependabot-security-updates/about-dependabot-security-updates)"를 참조하세요.

{% endif %}

#### Dependabot 경고란?

{% data variables.product.prodname_dependabot_alerts %}는 종속성 그래프와 알려진 취약성{% ifversion GH-advisory-db-supports-malware %} 및 맬웨어{% endif %} 목록에 대한 권고를 포함하는 {% data variables.product.prodname_advisory_database %}를 기준으로 새로 검색된 취약성의 영향을 받는 리포지토리를 강조 표시합니다. 

- {% data variables.product.prodname_dependabot %}은 검사를 수행하여 안전하지 않은 종속성을 검색하고 다음과 같은 경우 {% data variables.product.prodname_dependabot_alerts %}를 보냅니다. {% ifversion fpt or ghec %}
   - {% data variables.product.prodname_advisory_database %}에 새 권고가 추가됩니다.{% else %}
   - 새 권고 데이터는 {% data variables.product.prodname_dotcom_the_website %}에서 매시간 {% data variables.location.product_location %}에 동기화됩니다. {% data reusables.security-advisory.link-browsing-advisory-db %}{% endif %}
   - 리포지토리에 대한 종속성 그래프가 변경됩니다. 
- {% data variables.product.prodname_dependabot_alerts %}가 리포지토리의 {% ifversion fpt or ghec or ghes %} **보안** 탭과{% endif %} 리포지토리의 종속성 그래프에 표시됩니다. 경고에는 {% ifversion fpt or ghec or ghes %}프로젝트에서 영향을 받는 파일에 대한 링크와 {% endif %}고정 버전에 대한 정보가 포함됩니다.

자세한 내용은 “[{% data variables.product.prodname_dependabot_alerts %} 정보](/code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/about-alerts-for-vulnerable-dependencies)”를 참조하세요.

{% ifversion fpt or ghec or ghes %}
#### Dependabot 업데이트란?

{% data variables.product.prodname_dependabot_updates %}의 두 가지 유형은 {% data variables.product.prodname_dependabot %} _보안_ 업데이트와 _버전_ 업데이트입니다. {% data variables.product.prodname_dependabot %}은 두 경우 모두 종속성을 업데이트하기 위한 자동 끌어오기 요청을 생성하지만 몇 가지 차이점이 있습니다.

{% data variables.product.prodname_dependabot_security_updates %}:
 - {% data variables.product.prodname_dependabot %} 경고에 의해 트리거됨
 - 알려진 취약성을 해결하는 최소 버전으로 종속성 업데이트
 - 종속성 그래프에서 지원하는 에코시스템 지원
 - 구성 파일이 필요하지 않지만 구성 파일을 사용하여 기본 동작을 재정의할 수 있습니다.
 
{% data variables.product.prodname_dependabot_version_updates %}:
 - 구성 파일 필요
 - 구성한 일정에 따라 실행
 - 구성과 일치하는 최신 버전으로 종속성 업데이트
 - 다른 에코시스템 그룹 지원

{% data variables.product.prodname_dependabot_updates %}에 대한 자세한 내용은 “[{% data variables.product.prodname_dependabot_security_updates %} 정보”](/code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/about-dependabot-security-updates) 및 “[{% data variables.product.prodname_dependabot_version_updates %} 정보”](/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/about-dependabot-version-updates)를 참조하세요.
{% endif %}

## 기능 가용성

{% ifversion fpt or ghec %}

퍼블릭 리포지토리:
- **종속성 그래프** - 기본적으로 사용하도록 설정되어 있으며, 사용하지 않도록 설정할 수 없습니다.
- **종속성 검토** - 기본적으로 사용하도록 설정되어 있으며, 사용하지 않도록 설정할 수 없습니다.
- **{% data variables.product.prodname_dependabot_alerts %}** - 기본적으로 사용하지 않도록 설정됩니다. {% data variables.product.prodname_dotcom %}는 안전하지 않은 종속성을 검색하고 종속성 그래프에 정보를 표시하지만 기본적으로 {% data variables.product.prodname_dependabot_alerts %}를 생성하지는 않습니다. 리포지토리 소유자 또는 관리자 액세스 권한이 있는 사용자는 {% data variables.product.prodname_dependabot_alerts %}를 사용하도록 설정할 수 있습니다. 
  사용자 계정 또는 조직이 소유한 모든 리포지토리에 대해 Dependabot 경고를 사용하거나 사용하지 않도록 설정할 수도 있습니다. 자세한 내용은 “[사용자 계정의 보안 및 분석 설정 관리](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-personal-account-settings/managing-security-and-analysis-settings-for-your-personal-account)” 또는 “[조직의 보안 및 분석 설정 관리](/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/managing-security-and-analysis-settings-for-your-organization)”를 참조하세요.

프라이빗 리포지토리:
- **종속성 그래프** - 기본적으로 사용하지 않도록 설정됩니다. 리포지토리 관리자는 이 기능을 사용하도록 설정할 수 있습니다. 자세한 내용은 “[리포지토리의 종속성 탐색](/code-security/supply-chain-security/understanding-your-software-supply-chain/exploring-the-dependencies-of-a-repository#enabling-and-disabling-the-dependency-graph-for-a-private-repository)”을 참조하세요.
{% ifversion fpt %}
- **종속성 검토** - {% data variables.product.prodname_ghe_cloud %}를 사용하고 {% data variables.product.prodname_GH_advanced_security %}에 대한 라이선스가 있는 조직이 소유한 프라이빗 리포지토리에서 사용할 수 있습니다. 자세한 내용은 [{% data variables.product.prodname_ghe_cloud %} 설명서](/enterprise-cloud@latest/code-security/supply-chain-security/understanding-your-software-supply-chain/about-dependency-review)를 참조하세요.
{% elsif ghec %}
- **종속성 검토** - {% data variables.product.prodname_GH_advanced_security %}에 대한 라이선스가 있고 종속성 그래프를 사용하도록 설정한 경우 조직이 소유한 프라이빗 리포지토리에서 사용할 수 있습니다. 자세한 내용은 “[{% data variables.product.prodname_GH_advanced_security %} 정보](/get-started/learning-about-github/about-github-advanced-security)” 및 “[리포지토리의 종속성 탐색](/code-security/supply-chain-security/understanding-your-software-supply-chain/exploring-the-dependencies-of-a-repository#enabling-and-disabling-the-dependency-graph-for-a-private-repository)”을 참조하세요. {% endif %}
- **{% data variables.product.prodname_dependabot_alerts %}** - 기본적으로 사용하지 않도록 설정됩니다. 프라이빗 리포지토리의 소유자 또는 관리자 액세스 권한이 있는 사용자는 해당 리포지토리에 대해 종속성 그래프 및 {% data variables.product.prodname_dependabot_alerts %}를 사용하도록 설정하여 {% data variables.product.prodname_dependabot_alerts %}를 사용하도록 설정할 수 있습니다.
  사용자 계정 또는 조직이 소유한 모든 리포지토리에 대해 Dependabot 경고를 사용하거나 사용하지 않도록 설정할 수도 있습니다. 자세한 내용은 “[사용자 계정의 보안 및 분석 설정 관리](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-personal-account-settings/managing-security-and-analysis-settings-for-your-personal-account)” 또는 “[조직의 보안 및 분석 설정 관리](/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/managing-security-and-analysis-settings-for-your-organization)”를 참조하세요.

모든 리포지토리 유형:
- **{% data variables.product.prodname_dependabot_security_updates %}** - 기본적으로 사용하지 않도록 설정됩니다. {% data variables.product.prodname_dependabot_alerts %} 및 종속성 그래프를 사용하는 리포지토리에 대해 {% data variables.product.prodname_dependabot_security_updates %}를 사용하도록 설정할 수 있습니다. 보안 업데이트 사용에 대한 자세한 내용은 “[{% data variables.product.prodname_dependabot_security_updates %} 구성](/code-security/dependabot/dependabot-security-updates/configuring-dependabot-security-updates)”을 참조하세요.
- **{% data variables.product.prodname_dependabot_version_updates %}** - 기본적으로 사용하지 않도록 설정됩니다. 리포지토리에 대한 쓰기 권한이 있는 사용자는 {% data variables.product.prodname_dependabot_version_updates %}를 사용하도록 설정할 수 있습니다. 버전 업데이트 사용에 대한 자세한 내용은 “[{% data variables.product.prodname_dependabot_version_updates %} 구성](/code-security/dependabot/dependabot-version-updates/configuring-dependabot-version-updates)”을 참조하세요.
{% endif %}

{% ifversion ghes or ghae %}
- **종속성 그래프** 및 **{% data variables.product.prodname_dependabot_alerts %}** - 기본적으로 사용하지 않도록 설정됩니다. 두 기능 모두 엔터프라이즈 수준에서 엔터프라이즈 소유자에 의해 구성됩니다. 자세한 내용은 {% ifversion ghes %}“[엔터프라이즈에 대해 종속성 그래프 사용](/admin/code-security/managing-supply-chain-security-for-your-enterprise/enabling-the-dependency-graph-for-your-enterprise)” 및 {% endif %}“[엔터프라이즈에 대해 {% data variables.product.prodname_dependabot %} 사용](/admin/configuration/configuring-github-connect/enabling-dependabot-for-your-enterprise)”을 참조하세요.
- **종속성 검토** - 조직 또는 리포지토리에 대해 {% data variables.location.product_location %}에 대한 종속성 그래프를 사용하도록 설정하고 {% data variables.product.prodname_advanced_security %}을(를) 사용하도록 설정한 경우에 사용할 수 있습니다. 자세한 내용은 “[{% data variables.product.prodname_GH_advanced_security %} 정보](/get-started/learning-about-github/about-github-advanced-security)”를 참조하세요.
{% endif %} {% ifversion ghes %}
- **{% data variables.product.prodname_dependabot_security_updates %}** - 기본적으로 사용하지 않도록 설정됩니다. {% data variables.product.prodname_dependabot_alerts %} 및 종속성 그래프를 사용하는 리포지토리에 대해 {% data variables.product.prodname_dependabot_security_updates %}를 사용하도록 설정할 수 있습니다. 보안 업데이트 사용에 대한 자세한 내용은 “[{% data variables.product.prodname_dependabot_security_updates %} 구성](/code-security/dependabot/dependabot-security-updates/configuring-dependabot-security-updates)”을 참조하세요.
- **{% data variables.product.prodname_dependabot_version_updates %}** - 기본적으로 사용하지 않도록 설정됩니다. 리포지토리에 대한 쓰기 권한이 있는 사용자는 {% data variables.product.prodname_dependabot_version_updates %}를 사용하도록 설정할 수 있습니다. 버전 업데이트 사용에 대한 자세한 내용은 “[{% data variables.product.prodname_dependabot_version_updates %} 구성](/code-security/dependabot/dependabot-version-updates/configuring-dependabot-version-updates)”을 참조하세요.
{% endif %}

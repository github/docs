---
title: Dependabot 경고 정보
intro: '{% data variables.product.product_name %}은 리포지토리가 취약한 종속성{% ifversion GH-advisory-db-supports-malware %} 또는 맬웨어{% endif %}를 사용하는 것을 감지하면 {% data variables.product.prodname_dependabot_alerts %}를 보냅니다.'
redirect_from:
  - /articles/about-security-alerts-for-vulnerable-dependencies
  - /github/managing-security-vulnerabilities/about-security-alerts-for-vulnerable-dependencies
  - /github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies
  - /code-security/supply-chain-security/about-alerts-for-vulnerable-dependencies
  - /code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/about-alerts-for-vulnerable-dependencies
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: overview
topics:
  - Dependabot
  - Alerts
  - Vulnerabilities
  - Repositories
  - Dependencies
shortTitle: Dependabot alerts
ms.openlocfilehash: 737e5547e3aefd6b5c49780df0c78cdc73292ee4
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148106743'
---
<!--Marketing-LINK: From /features/security/software-supply-chain page "About alerts for vulnerable dependencies ".-->

## {% data variables.product.prodname_dependabot_alerts %} 정보

{% ifversion GH-advisory-db-supports-malware %} {% data reusables.advisory-database.beta-malware-advisories %} {% endif %}

{% data variables.product.prodname_dependabot_alerts %}는 코드가 안전하지 않은 패키지에 따라 달라지는 것을 알 수 있습니다.

코드가 보안 취약성이 있는 패키지에 종속된 경우 프로젝트 또는 이를 사용하는 사람들에게 다양한 문제가 발생할 수 있습니다. 가능한 한 빨리 패키지의 보안 버전으로 업그레이드해야 합니다.{% ifversion GH-advisory-db-supports-malware %} 코드에서 맬웨어를 사용하는 경우 패키지를 안전한 대안으로 바꿔야 합니다.{% endif %}

{% data reusables.security-advisory.link-browsing-advisory-db %}

## 안전하지 않은 종속성 검색

{% data reusables.dependabot.dependabot-alerts-beta %}

{% data variables.product.prodname_dependabot %}은 안전하지 않은 종속성을 검색하기 위해 검사를 수행하고 다음과 같은 경우 {% data variables.product.prodname_dependabot_alerts %}를 보냅니다.

{% ifversion fpt or ghec %}
- {% data variables.product.prodname_advisory_database %}에 새 권고가 추가됩니다. 자세한 내용은 “[{% data variables.product.prodname_advisory_database %}에서 보안 권고 찾아보기](/code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/browsing-security-vulnerabilities-in-the-github-advisory-database)”를 참조하세요.{% else %}
- 새 권고 데이터는 {% data variables.product.prodname_dotcom_the_website %}에서 매시간 {% 데이터 variables.location.product_location %}에 동기화됩니다. {% data reusables.security-advisory.link-browsing-advisory-db %}{% endif %} {% note %}

  **참고:** {% data variables.product.company_short %}에서 검토한 권고만 {% data variables.product.prodname_dependabot_alerts %}을(를) 트리거합니다.

  {% endnote %}
- 리포지토리에 대한 종속성 그래프가 변경됩니다. 예를 들어 참가자가 패키지 또는 버전을 변경하기 위해 커밋을 푸시하는 경우 {% ifversion fpt or ghec %}에 따라 달라지거나 종속성 중 하나의 코드가 변경되는 경우{% endif %}에 따라 달라집니다. 자세한 내용은 “[종속성 그래프 정보](/code-security/supply-chain-security/about-the-dependency-graph)”를 참조하세요.

{% data reusables.repositories.dependency-review %}

{% data variables.product.product_name %}이 안전하지 않은 종속성을 감지하는 에코시스템 목록은 “[지원되는 패키지 에코시스템](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph#supported-package-ecosystems)”을 참조하세요.

{% note %}

**참고:** 매니페스트 및 잠금 파일을 최신 상태로 유지하는 것이 중요합니다. 종속성 그래프가 현재 종속성 및 버전을 정확하게 반영하지 않는 경우 사용하는 안전하지 않은 종속성에 대한 경고를 놓칠 수 있습니다. 더 이상 사용하지 않는 종속성에 대한 경고를 받을 수도 있습니다.

{% endnote %}

##  {% data variables.product.prodname_dependabot_alerts %}의 구성

{% data reusables.repositories.enable-security-alerts %}

{% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}는 _퍼블릭_ 리포지토리에서 취약한 종속성 및 맬웨어를 검색하고 종속성 그래프를 표시하지만 기본적으로 {% data variables.product.prodname_dependabot_alerts %}를 생성하지는 않습니다. 리포지토리 소유자 또는 관리자 액세스 권한이 있는 사용자는 퍼블릭 리포지토리에 대해 {% data variables.product.prodname_dependabot_alerts %}을(를) 사용하도록 설정할 수 있습니다. 프라이빗 리포지토리의 소유자 또는 관리자 액세스 권한이 있는 사용자는 해당 리포지토리에 대해 종속성 그래프 및 {% data variables.product.prodname_dependabot_alerts %}를 사용하도록 설정하여 {% data variables.product.prodname_dependabot_alerts %}를 사용하도록 설정할 수 있습니다.

사용자 계정 또는 조직이 소유한 모든 리포지토리에 대해 {% data variables.product.prodname_dependabot_alerts %}을(를) 사용하거나 사용하지 않도록 설정할 수도 있습니다. 자세한 내용은 “[{% data variables.product.prodname_dependabot_alerts %} 정보](/code-security/dependabot/dependabot-alerts/configuring-dependabot-alerts)”를 참조하세요.

{% data variables.product.prodname_dependabot_alerts %}에 관련된 작업에 대한 액세스 요구 사항에 대한 자세한 내용은 “[조직의 리포지토리 역할](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization#access-requirements-for-security-features)”을 참조하세요.

{% data variables.product.product_name %}은 종속성 그래프를 즉시 생성하기 시작하고 식별되는 즉시 안전하지 않은 종속성에 대한 경고를 생성합니다. 그래프는 일반적으로 몇 분 내에 채워지지만 종속성이 많은 리포지토리의 경우 더 오래 걸릴 수 있습니다. 자세한 내용은 “[비공개 리포지토리에 대한 데이터 사용 설정 관리](/get-started/privacy-on-github/managing-data-use-settings-for-your-private-repository)”를 참조하세요.
{% endif %}

{% data variables.product.product_name %}이 취약한 종속성{% ifversion GH-advisory-db-supports-malware %} 또는 맬웨어를{% endif %} 식별하면 {% data variables.product.prodname_dependabot %} 경고를 생성하여 리포지토리의 보안 탭 및{% endif %} 리포지토리의 종속성 그래프에 {% ifversion fpt or ghec or ghes %}를 표시합니다. 경고에는 {% ifversion fpt or ghec or ghes %}프로젝트에서 영향을 받는 파일에 대한 링크와 {% endif %}고정 버전에 대한 정보가 포함됩니다. {% data variables.product.product_name %}은(는) 알림 기본 설정에 따라 영향을 받는 리포지토리의 유지 관리자에게 새 경고에 대해 알릴 수도 있습니다. 자세한 내용은 “[{% data variables.product.prodname_dependabot_alerts %}에 대한 알림 구성](/code-security/dependabot/dependabot-alerts/configuring-notifications-for-dependabot-alerts)”을 참조하세요.

{% ifversion fpt or ghec or ghes %} {% data variables.product.prodname_dependabot_security_updates %}이(가) 활성화된 리포지토리의 경우 매니페스트 또는 잠금 파일을 취약성을 해결하는 최소 버전으로 업데이트하기 위한 끌어오기 요청에 대한 링크가 경고에 포함될 수도 있습니다. 자세한 내용은 “[{% data variables.product.prodname_dependabot_security_updates %} 정보](/github/managing-security-vulnerabilities/about-dependabot-security-updates)”를 참조하세요.
{% endif %}

{% warning %}

**참고**: {% data variables.product.product_name %}의 보안 기능이 모든 취약성{% ifversion GH-advisory-db-supports-malware %} 및 맬웨어를{% endif %} 포착하는 것은 아닙니다. {% data variables.product.prodname_advisory_database %}를 적극적으로 유지하고 최신 정보를 사용하여 경고를 생성합니다. 그러나 보장된 시간 프레임 내에서 모든 것을 포착하거나 알려진 취약성에 대해 알려줄 수는 없습니다. 이러한 기능은 잠재적 취약성 또는 기타 문제에 대한 각 종속성의 사용자 검토를 대신하지 않으며, 보안 서비스를 참조하거나 필요한 경우 철저한 종속성 검토를 수행하는 것이 좋습니다.

{% endwarning %}

## {% data variables.product.prodname_dependabot_alerts %}에 대한 액세스

리포지토리의 보안 탭에서 특정 프로젝트{% ifversion fpt or ghec %}에 영향을 주는 모든 경고를 보거나 리포지토리의 종속성 그래프에서 {% endif %}을(를) 볼 수 있습니다. 자세한 내용은 “[{% data variables.product.prodname_dependabot_alerts %} 보기 및 업데이트](/code-security/dependabot/dependabot-alerts/viewing-and-updating-dependabot-alerts)”를 참조하세요.

기본적으로 영향을 받는 리포지토리의 관리자 권한이 있는 사용자에게 새 {% data variables.product.prodname_dependabot_alerts %}에 대해 알립니다. {% ifversion fpt or ghec %}{% data variables.product.product_name %}은 리포지토리에 대한 안전하지 않은 종속성을 공개적으로 공개하지 않습니다. {% data variables.product.prodname_dependabot_alerts %}를 사용자가 소유하거나 관리자 권한을 가진 추가 사용자 또는 팀 작업 리포지토리에 표시할 수도 있습니다. 자세한 내용은 “[리포지토리에 대한 보안 및 분석 설정 관리](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository#granting-access-to-security-alerts)”를 참조하세요.
{% endif %}

{% data reusables.notifications.vulnerable-dependency-notification-enable %} {% data reusables.notifications.vulnerable-dependency-notification-delivery-method-customization2 %} 자세한 내용은 “[{% data variables.product.prodname_dependabot_alerts %}에 대한 알림 구성](/code-security/dependabot/dependabot-alerts/configuring-notifications-for-dependabot-alerts)”을 참조하세요.

{% data variables.product.prodname_advisory_database %}의 특정 권고에 해당하는 모든 {% data variables.product.prodname_dependabot_alerts %}를 볼 수도 있습니다. {% data reusables.security-advisory.link-browsing-advisory-db %}

{% ifversion fpt or ghec or ghes %}
## 추가 참고 자료

- “[{% data variables.product.prodname_dependabot_security_updates %} 정보](/github/managing-security-vulnerabilities/about-dependabot-security-updates)”
- “[{% data variables.product.prodname_dependabot_alerts %} 보기 및 업데이트](/code-security/dependabot/dependabot-alerts/viewing-and-updating-dependabot-alerts)”{% endif %} {% ifversion fpt or ghec %}- “[{% data variables.product.prodname_dotcom %}에 대한 프라이버시](/get-started/privacy-on-github)”{% endif %}

---
title: Dependabot 보안 업데이트 정보
intro: '{% data variables.product.prodname_dependabot %}은 보안 업데이트를 사용하여 끌어오기 요청을 발생시켜 취약한 종속성을 해결할 수 있습니다.'
shortTitle: Dependabot security updates
redirect_from:
  - /github/managing-security-vulnerabilities/about-github-dependabot-security-updates
  - /github/managing-security-vulnerabilities/about-dependabot-security-updates
  - /code-security/supply-chain-security/about-dependabot-security-updates
  - /code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/about-dependabot-security-updates
versions:
  fpt: '*'
  ghec: '*'
  ghes: '> 3.2'
type: overview
topics:
  - Dependabot
  - Security updates
  - Vulnerabilities
  - Repositories
  - Dependencies
  - Pull requests
ms.openlocfilehash: 4ea3bd49a5d46376129afd2282fe043954a7d653
ms.sourcegitcommit: cfe91073c844cb762131b2de9fb41f7f9db792fc
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 11/24/2022
ms.locfileid: '148181316'
---
<!--Marketing-LINK: From /features/security/software-supply-chain page "About Dependabot security updates".-->

{% data reusables.dependabot.beta-security-and-version-updates %} {% data reusables.dependabot.enterprise-enable-dependabot %}

## {% data variables.product.prodname_dependabot_security_updates %} 정보

{% data variables.product.prodname_dependabot_security_updates %}를 사용하면 리포지토리의 취약한 종속성을 더욱 쉽게 해결할 수 있습니다. 이 기능을 사용하도록 설정하면 리포지토리의 종속성 그래프에서 취약한 종속성에 대해 {% data variables.product.prodname_dependabot %} 경고가 발생하면 {% data variables.product.prodname_dependabot %}에서 자동으로 수정을 시도합니다. 자세한 내용은 “[{% data variables.product.prodname_dependabot_alerts %} 정보](/code-security/supply-chain-security/about-alerts-for-vulnerable-dependencies)” 및 “[{% data variables.product.prodname_dependabot_security_updates %} 구성](/github/managing-security-vulnerabilities/configuring-dependabot-security-updates)”을 참조하세요.

{% data variables.product.prodname_dotcom %}은 최근에 게시된 {% data variables.product.prodname_dotcom %} 보안 권고에서 공개한 취약성의 영향을 받는 리포지토리에 {% data variables.product.prodname_dependabot_alerts %}를 보낼 수 있습니다. {% data reusables.security-advisory.link-browsing-advisory-db %}

{% data variables.product.prodname_dependabot %}은 리포지토리에 대한 종속성 그래프를 방해하지 않고 취약한 종속성을 고정 버전으로 업그레이드할 수 있는지 여부를 확인합니다. 그런 다음, {% data variables.product.prodname_dependabot %}은 패치를 포함하는 최소 버전으로 종속성을 업데이트하기 위한 끌어오기 요청을 발생시키고 끌어오기 요청을 {% data variables.product.prodname_dependabot %} 경고에 연결하거나 경고에 대한 오류를 보고합니다. 자세한 내용은 “[{% data variables.product.prodname_dependabot %} 오류 문제 해결](/github/managing-security-vulnerabilities/troubleshooting-dependabot-errors)”을 참조하세요.

{% data variables.product.prodname_dependabot_security_updates %} 기능은 종속성 그래프 및 {% data variables.product.prodname_dependabot_alerts %}를 사용하도록 설정한 리포지토리에 사용할 수 있습니다. 전체 종속성 그래프에서 식별된 모든 취약한 종속성에 대한 {% data variables.product.prodname_dependabot %} 경고가 표시됩니다. 그러나 보안 업데이트는 매니페스트 또는 잠금 파일에 지정된 종속성에 대해서만 트리거됩니다. 자세한 내용은 “[종속성 그래프 정보](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph#dependencies-included)”를 참조하세요.

{% ifversion dependabot-security-updates-unlock-transitive-dependencies %} 

{% note %}

**참고**: npm의 경우 {% data variables.product.prodname_dependabot %}은 부모 종속성 또는 종속성{% ifversion dependabot-security-updates-npm %}을 업데이트하거나 부모{% endif %}에서 더 이상 필요하지 않은 하위 종속성을 제거하는 경우에도 명시적으로 정의된 종속성을 보안 버전으로 업데이트하기 위한 끌어오기 요청을 발생합니다. 다른 에코시스템의 경우 부모 종속성에 대한 업데이트가 필요하면 {% data variables.product.prodname_dependabot %}에서 간접 또는 전이적 종속성을 업데이트할 수 없습니다. 자세한 내용은 "[Dependabot이 경고 없이 종속성을 업데이트하려고 시도"를](/en/code-security/dependabot/working-with-dependabot/troubleshooting-dependabot-errors#dependabot-tries-to-update-dependencies-without-an-alert) 참조하세요.

{% endnote %}{% endif %} 

관련 기능인 {% data variables.product.prodname_dependabot_version_updates %}를 사용하도록 설정하여 {% data variables.product.prodname_dependabot %}에서 오래된 종속성을 탐지할 때마다 매니페스트를 최신 버전의 종속성으로 업데이트하기 위한 끌어오기 요청을 발생하도록 할 수 있습니다. 자세한 내용은 “[{% data variables.product.prodname_dependabot %} 버전 업데이트 정보](/github/administering-a-repository/about-dependabot-version-updates)”를 참조하세요.

{% data reusables.dependabot.pull-request-security-vs-version-updates %}

{% data reusables.dependabot.dependabot-updates-and-actions %}

{% data reusables.dependabot.dependabot-actions-support %}

## 보안 업데이트에 대한 끌어오기 요청 정보

각 끌어오기 요청에는 제안된 수정 사항을 빠르고 안전하게 검토하고 프로젝트에 병합하는 데 필요한 모든 것이 포함되어 있습니다. 여기에는 릴리스 정보, 변경 로그 항목 및 커밋 세부 정보와 같은 취약성에 대한 정보가 포함됩니다. 리포지토리에 대한 {% data variables.product.prodname_dependabot_alerts %}에 액세스할 수 없는 모든 사람은 끌어오기 요청이 해결하는 취약성에 대한 세부 정보를 볼 수 없습니다.

보안 업데이트가 포함된 끌어오기 요청을 병합하면 해당 {% data variables.product.prodname_dependabot %} 경고가 리포지토리에 대해 해결된 것으로 표시됩니다. {% data variables.product.prodname_dependabot %} 끌어오기 요청에 대한 자세한 내용은 "[종속성 업데이트에 대한 끌어오기 요청 관리](/github/administering-a-repository/managing-pull-requests-for-dependency-updates)"를 참조하세요.

{% data reusables.dependabot.automated-tests-note %}

{% ifversion fpt or ghec %}

## 호환성 점수 정보

{% data variables.product.prodname_dependabot_security_updates %}에는 종속성을 업데이트할 경우 프로젝트에 중요한 변경이 발생할 수 있는지 여부를 알려주는 호환성 점수가 포함될 수 있습니다. 이는 동일한 보안 업데이트가 생성된 다른 공용 리포지토리의 CI 테스트에서 계산됩니다. 업데이트의 호환성 점수는 특정 버전의 종속성 간에 업데이트될 때 전달되는 CI 실행의 백분율입니다.

{% endif %}

## {% data variables.product.prodname_dependabot %} 보안 업데이트에 대한 알림 정보

{% data variables.product.company_short %}에 대한 알림을 필터링하여 {% data variables.product.prodname_dependabot %} 보안 업데이트를 표시할 수 있습니다. 자세한 내용은 “[받은 편지함의 알림 관리](/github/managing-subscriptions-and-notifications-on-github/managing-notifications-from-your-inbox#dependabot-custom-filters)”를 참조하세요.
